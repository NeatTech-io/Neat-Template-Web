import React from "react";
import { IntlProvider } from "react-intl";

export const Providers: React.FC = ({ children }) => (
  <IntlProvider locale="en-US">{children}</IntlProvider>
);
