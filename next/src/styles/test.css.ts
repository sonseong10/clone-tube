import { style } from "@vanilla-extract/css";
import * as flex from "./functions/flex.css";

export const myStyle = style([
  flex.flexRow,
  flex.justifyCenter,
  {
    color: "#0066ff",
  },
]);
