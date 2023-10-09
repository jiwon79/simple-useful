import { MathButton } from "./MathButton";
import { styled } from "@/stitches.config";

interface MathButtonWrapProps {
  cmd: (cmd: string) => void;
  keystroke: (key: string) => void;
}

export const MathButtonGroup = ({cmd, keystroke}: MathButtonWrapProps) => {
  return (
    <Group>
      <Row>
        <MathButton onClick={() => cmd("1")} text={"1"}/>
        <MathButton onClick={() => cmd("2")} text={"2"}/>
        <MathButton onClick={() => cmd("3")} text={"3"}/>
        <MathButton onClick={() => cmd("4")} text={"4"}/>
        <MathButton onClick={() => cmd("5")} text={"5"}/>
        <MathButton onClick={() => cmd("6")} text={"6"}/>
      </Row>
      <Row>
        <MathButton onClick={() => cmd("+")} text={"+"}/>
        <MathButton onClick={() => cmd("-")} text={"-"}/>
        <MathButton onClick={() => cmd("*")} text={"*"}/>
        <MathButton onClick={() => cmd("/")} text={"/"}/>
        <MathButton onClick={() => cmd("\\sqrt")} text={"√"}/>
      </Row>
      <Row>
        <MathButton onClick={() => cmd("\\left")} text={"("}/>
        <MathButton onClick={() => cmd("\\right")} text={")"}/>
        <MathButton onClick={() => cmd("\\lfloor")} text={"⌊"}/>
        <MathButton onClick={() => cmd("\\rfloor")} text={"⌋"}/>
        <MathButton onClick={() => cmd("\\lceil")} text={"⌈"}/>
        <MathButton onClick={() => cmd("\\rceil")} text={"⌉"}/>
      </Row>
      <Row>
        <MathButton onClick={() => keystroke("Up")} text={"↑"}/>
        <MathButton onClick={() => keystroke("Down")} text={"↓"}/>
        <MathButton onClick={() => keystroke("Left")} text={"←"}/>
        <MathButton onClick={() => keystroke("Right")} text={"→"}/>
      </Row>
    </Group>
  );
}

const Group = styled("div", {
  display: "flex",
  flexDirection: "column",
})

const Row = styled("div", {
  display: "flex",
});
