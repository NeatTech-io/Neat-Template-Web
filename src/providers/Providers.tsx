import { ConsoleLogger, LoggerProvider } from "@neat-tech/react-logger";
import React from "react";
import { IntlProvider } from "react-intl";

import { NotificationsProvider } from "./NotificationProvider";

export const Providers: React.FC = ({ children }) => (
  <IntlProvider locale="en-US">
    <LoggerProvider logger={[new ConsoleLogger()]}>
      <NotificationsProvider>{children}</NotificationsProvider>
    </LoggerProvider>
  </IntlProvider>
);
