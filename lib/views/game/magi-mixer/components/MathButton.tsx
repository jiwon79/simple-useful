import { styled } from "@/stitches.config";

interface MathButtonProps {
  onClick: () => void;
  text: string;
}

export const MathButton = ({onClick, text}: MathButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Text>{text}</Text>
    </Button>
  );
}

const Button = styled("button", {
  paragraph_18: true,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  cursor: "pointer",
  width: "36px",
  height: "36px",
  outline: "none",
  border: "1px solid $grey600",
  backgroundColor: "transparent",
  margin: "6px"
});

const Text = styled("p", {});
