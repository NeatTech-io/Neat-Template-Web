import { useLogger } from "@neat-tech/react-logger";
import { NotificationsProvider as BaseNotificationsProvider } from "@neat-tech/react-notify";
import React from "react";

export const NotificationsProvider: React.FC = ({ children }) => {
  const logger = useLogger();

  return (
    <BaseNotificationsProvider
      formatError={(err, defaultMsg) =>
        err instanceof Error ? err.message : defaultMsg ?? ""
      }
      logger={logger.log}
      renderItem={({ state }) =>
        state.visible && <div>{state.message?.text}</div>
      }
    >
      {children}
    </BaseNotificationsProvider>
  );
};
