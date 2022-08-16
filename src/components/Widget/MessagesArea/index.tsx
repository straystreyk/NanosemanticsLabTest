import * as React from "react";

import * as classes from "./messages.module.scss";
import { useMessages } from "./useMessages";
import { Message } from "./message";

export const MessagesArea: React.FC = React.memo(() => {
  const { messages } = useMessages();

  return (
    <div className={classes.area}>
      {messages && messages.length
        ? messages.map((message) => {
            return <Message key={message.id} {...message} />;
          })
        : null}
    </div>
  );
});
