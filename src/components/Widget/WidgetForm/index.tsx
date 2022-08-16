import * as React from "react";

import * as classes from "./widget-input.module.scss";
import { useWidgetForm } from "./useWidgetForm";

export const WidgetForm: React.FC = React.memo(() => {
  const { sendMessage, loading, value, changeHandler } = useWidgetForm();

  return (
    <form onSubmit={sendMessage} className={classes.widgetForm}>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        className={classes.widgetInput}
        placeholder="Write something"
        disabled={loading}
      />
      <button disabled={loading} type="submit">
        {loading ? "loading" : "send"}
      </button>
    </form>
  );
});
