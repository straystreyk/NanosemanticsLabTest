import * as React from "react";

import * as classes from "./widget.module.scss";
import { WidgetForm } from "./WidgetForm";
import { MessagesArea } from "./MessagesArea";
import { ResetButton } from "../ResetButton";

export const Widget: React.FC = React.memo(() => {
  return (
    <>
      <ResetButton />
      <div className={classes.widget}>
        <MessagesArea />
        <WidgetForm />
      </div>
    </>
  );
});
