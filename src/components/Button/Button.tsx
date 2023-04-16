import { styled } from "@stitches/react"

export const Button = styled("button", {
  display: "block",
  border: "none",
  borderRadius: "2.5px",
  "&:hover": {
    cursor: "pointer",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  variants: {
    size: {
      sm: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      lg: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    type: {
      primary: {
        backgroundColor: "blueviolet",
        color: "white",
        "&:not([disabled]):hover": {
          backgroundColor: "darkviolet",
        },
      },
      secondary: {
        backgroundColor: "gainsboro",
        "&:not([disabled]):hover": {
          backgroundColor: "lightgray",
        },
      },
      danger: {
        backgroundColor: "#f44336",
        color: "white",
        "&:hover": {
          backgroundColor: "#ef9a9a",
        },
      },
      success: {
        backgroundColor: "#4caf50",
        color: "white",
        "&:hover": {
          backgroundColor: "#a5d6a7",
        },
      },
    },
    outlined: {
      true: {
        border: "1px solid lightgray",
        backgroundColor: "white",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    type: "secondary",
  },
})
