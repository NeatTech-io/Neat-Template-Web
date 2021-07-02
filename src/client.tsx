import React from "react";
import ReactDOM from "react-dom";

import { Client } from "~/modules/Client";
import { Providers } from "~/providers";

ReactDOM.render(
  <Providers>
    <Client />
  </Providers>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
