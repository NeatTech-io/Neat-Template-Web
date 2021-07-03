import React from "react";
import { useIntl } from "react-intl";

import { useNotify } from "~/providers/NotificationProvider";

import t from "./Client.i18n.json";
import s from "./Client.module.scss";

export const Client: React.FC = () => {
  const intl = useIntl();
  const notify = useNotify();

  return (
    <div className={s.container}>
      <div className={s.title}>
        {intl.formatMessage(t.name, { name: "Neat hero" })}
      </div>

      <button
        onClick={() => notify.success(intl.formatMessage(t.notification))}
      >
        {intl.formatMessage(t.showNotification)}
      </button>
    </div>
  );
};
