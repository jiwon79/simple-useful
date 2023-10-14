import { styled } from "@/stitches.config";
import { JSX } from "react";

interface MathExpressionProps {
  mathEditor: JSX.Element;
  result: number;
}

export const MathExpression = ({mathEditor, result}: MathExpressionProps) => {
  return (
    <Wrap>
      {mathEditor}
      <EqualText>=</EqualText>
      <ResultText>{result}</ResultText>
    </Wrap>
  )
}

const Wrap = styled("div", {
  display: "flex",
  alignItems: "center",
});

const EqualText = styled("p", {
  margin: "0 8px",
  paragraph_21: true,
});

const ResultText = styled("p", {
  paragraph_21: true,
});
