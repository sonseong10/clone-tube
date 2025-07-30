import { style } from "@vanilla-extract/css";

export const flexRow = style({
  display: "flex",
  flexDirection: "row",
});

export const flexColumn = style({
  display: "flex",
  flexDirection: "column",
});

export const flexRowReverse = style({
  display: "flex",
  flexDirection: "row-reverse",
});

export const flexColumnReverse = style({
  display: "flex",
  flexDirection: "column-reverse",
});

export const justifyStart = style({
  justifyContent: "flex-start",
});

export const justifyEnd = style({
  justifyContent: "flex-end",
});

export const justifyCenter = style({
  justifyContent: "center",
});

export const justifyBetween = style({
  justifyContent: "space-between",
});

export const alignStart = style({
  alignItems: "flex-start",
});

export const alignEnd = style({
  alignItems: "flex-end",
});

export const alignCenter = style({
  alignItems: "center",
});

export const alignBetween = style({
  alignItems: "space-between",
});
