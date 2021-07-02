import React from "react";
import ReactDOM from "react-dom";

import { Admin } from "~/modules/Admin";
import { Providers } from "~/providers";

ReactDOM.render(
  <Providers>
    <Admin />
  </Providers>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
