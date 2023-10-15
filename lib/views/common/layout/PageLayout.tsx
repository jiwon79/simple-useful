import { styled } from "@/stitches.config";

export const PageLayout = ({children}) => {
  return (
    <Wrap>{children}</Wrap>
  )
}

const Wrap = styled("div", {
  padding: "24px 48px",

  '@mobile': {
    padding: "20px 12px",
  }
});
