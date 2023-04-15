import { styled } from "@stitches/react"

export const Button = styled("button", {
  backgroundColor: "red",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
  variants: {
    type: {
      primary: {
        backgroundColor: "blueviolet",
        color: "white",
        "&:hover": {
          backgroundColor: "darkviolet",
        },
      },
      secondary: {
        backgroundColor: "gainsboro",
        "&:hover": {
          backgroundColor: "lightgray",
        },
      },
    },
  },
  defaultVariants: {
    type: "secondary",
  },
})
