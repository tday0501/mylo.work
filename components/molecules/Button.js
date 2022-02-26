import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "#ff5c7b",
    borderRadius: 4,
    color: "white",
    fontWeight: "bolder",
    height: 36,
    padding: "6px 12px",
    variant: "contained",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function ClassesShorthand({ children, label, ...props }) {
  return <StyledButton {...props}>{children || label}</StyledButton>;
}
