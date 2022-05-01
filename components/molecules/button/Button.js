import React from "react";
import Button from "@material-ui/core/Button";

export default function ClassesShorthand({ children, label, style, ...props }) {
  return (
    <Button
      color="primary"
      disableElevation
      size="small"
      style={{
        alignItems: "center",
        borderRadius: 4,
        color: "white",
        fontWeight: "bolder",
        height: "fit-content",
        padding: "6px 12px",
        textTransform: "capitalize",
        ...style,
      }}
      variant="contained"
      {...props}
    >
      {children || label}
    </Button>
  );
}
