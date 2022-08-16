import * as React from "react";
import { MessageType } from "../../../types";

interface IMessageContext {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
}

export const MessageContext = React.createContext<IMessageContext>({
  setMessages: (p) => p,
  messages: [],
});

export const useMessages = () => {
  const { messages, setMessages } = React.useContext(MessageContext);

  return {
    messages,
    setMessages,
  };
};
