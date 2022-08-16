import * as React from "react";
import { Icon } from "../../constants";

import * as classes from "./reset.module.scss";
import { useMessages } from "../Widget/MessagesArea/useMessages";

export const ResetButton = React.memo(() => {
  const { setMessages } = useMessages();

  const resetDialog = async () => {
    localStorage.clear();
    setMessages([]);
    window.location.reload();
  };

  return (
    <button onClick={resetDialog} className={classes.reset}>
      Start a new dialog <Icon className={classes.icon} />
    </button>
  );
});
