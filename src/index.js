import React from "react";
import ReactDOM from "react-dom";
import * as Cal from "./calculator";

ReactDOM.render(
  <ul>
    <li>{Cal.add(1, 2)}</li>
    <li>{Cal.multiply(2, 3)}</li>
    <li>{Cal.subtract(7, 2)}</li>
    <li>{Cal.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
