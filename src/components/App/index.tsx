import * as React from "react";
import { Widget } from "../Widget";

import * as classes from "./app.module.scss";
import { useInit } from "./useInit";
import { MessageContext } from "../Widget/MessagesArea/useMessages";

export const App: React.FC = () => {
  const { loading, messages, setMessages } = useInit();

  return (
    <div id={classes.app}>
      <MessageContext.Provider value={{ messages, setMessages }}>
        {loading ? <div style={{ fontSize: 20 }}>Loading...</div> : <Widget />}
      </MessageContext.Provider>
    </div>
  );
};
