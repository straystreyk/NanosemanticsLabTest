import * as React from "react";
import { API_CONNECTION_STRING, updateStorage, UUID } from "../../../constants";
import { MessageType, RequestApiData } from "../../../types";
import { useMessages } from "../MessagesArea/useMessages";

export const useWidgetForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setMessages, messages } = useMessages();

  const sendMessage = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!value) return;
      try {
        setLoading(true);
        const userMessage: MessageType = {
          id: Date.now(),
          from: "user",
          text: value,
        };

        setMessages((p) => {
          updateStorage([...p, userMessage]);
          return [...p, userMessage];
        });
        setValue("");
        const res = await fetch(`${API_CONNECTION_STRING}.request`, {
          method: "POST",
          body: JSON.stringify({
            uuid: UUID,
            cuid: localStorage.getItem("cuid"),
            text: value,
          }),
        });
        const data: RequestApiData = await res.json();
        const botMessage: MessageType = {
          id: Date.now(),
          from: "bot",
          text: data.result.text.value,
        };
        setMessages((p) => {
          updateStorage([...p, botMessage]);
          return [...p, botMessage];
        });
      } catch (e) {
        if (e.message) {
          console.log(e.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [value]
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    loading,
    sendMessage,
    changeHandler,
  };
};
