import * as React from "react";
import {
  API_CONNECTION_STRING,
  SAY_HELLO_EVENT as euid,
  updateStorage,
  UUID as uuid,
} from "../../constants";
import { InitApiData, MessageType, RequestApiData } from "../../types";

type UseInitType = {
  loading: boolean;
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

export const useInit: () => UseInitType = () => {
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<MessageType[]>(
    JSON.parse(`${localStorage.getItem("messages")}`) ?? []
  );

  const sayHello = React.useCallback(async () => {
    try {
      const res = await fetch(`${API_CONNECTION_STRING}.event`, {
        method: "POST",
        body: JSON.stringify({
          uuid,
          cuid: localStorage.getItem("cuid"),
          euid,
        }),
      });
      const data: RequestApiData = await res.json();
      const newMessage: MessageType = {
        id: Date.now(),
        text: data.result.text.value,
        from: "bot",
      };

      updateStorage([...messages, newMessage]);

      setMessages((p) => [...p, newMessage]);
    } catch (e) {
      console.log(e.message);
    }
  }, [messages]);

  React.useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      const initApp = async () => {
        const cuid = localStorage.getItem("cuid") ?? "";
        try {
          setLoading(true);
          const res = await fetch(`${API_CONNECTION_STRING}.init`, {
            method: "POST",
            body: JSON.stringify({
              uuid,
              cuid,
            }),
          });

          const data: InitApiData = await res.json();
          if (cuid !== data.result.cuid)
            localStorage.setItem("cuid", data.result.cuid);

          setLoading(false);

          if (messages.length === 0) await sayHello();
        } catch (e) {
          console.log(e.message);
          setLoading(false);
        }
      };
      initApp();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  return {
    loading,
    messages,
    setMessages,
  };
};
