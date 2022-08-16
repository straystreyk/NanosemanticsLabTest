import * as React from "react";
import cn from "classnames";
import { MessageType } from "../../../types";

import * as classes from "./messages.module.scss";

export const Message: React.FC<MessageType> = ({ id, text, from }) => {
  return (
    <div
      className={cn(
        classes.messageWrapper,
        from === "bot" ? classes.messageWrapperBot : classes.messageWrapperUser
      )}
    >
      <div className={classes.name}>{from}</div>
      <div
        className={
          from === "bot"
            ? classes.messageContentBot
            : classes.messageContentUser
        }
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
