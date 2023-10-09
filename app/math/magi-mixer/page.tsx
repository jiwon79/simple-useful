"use client";
import { useRef, useState } from "react";
import { MathField } from "react-mathquill";
import { MathButton, MathEditor } from "@/component/math/magi-mixer";

const MagiMixerPage = () => {
  const mathFieldRef = useRef<MathField>();
  const [value, setValue] = useState<string>('');

  const handleMathField = (mathField: MathField) => {
    mathFieldRef.current = mathField
    setValue(mathField.latex())
  }

  const cmd = (cmd: string) => {
    if (mathFieldRef.current === undefined) return;
    mathFieldRef.current.cmd(cmd)
    mathFieldRef.current.focus();
    setValue(mathFieldRef.current.latex() ?? '')
  }

  const keystroke = (key: string) => {
    if (mathFieldRef.current === undefined) return;
    mathFieldRef.current.focus();
    mathFieldRef.current.keystroke(key)
    setValue(mathFieldRef.current.latex() ?? '')
  }

  return (
    <>
      <MathEditor mathField={mathFieldRef.current} handleMathField={handleMathField}/>
      <p>{value}</p>
      <MathButton onClick={() => cmd("1")} text={"1"}/>
      <MathButton onClick={() => cmd("2")} text={"2"}/>
      <MathButton onClick={() => cmd("3")} text={"3"}/>
      <MathButton onClick={() => cmd("4")} text={"4"}/>
      <MathButton onClick={() => cmd("5")} text={"5"}/>
      <MathButton onClick={() => cmd("6")} text={"6"}/>
      <MathButton onClick={() => keystroke("Left")} text={"<"}/>
      <MathButton onClick={() => keystroke("Right")} text={">"}/>
      <MathButton onClick={() => cmd("\\sqrt")} text={"√"}/>
      <MathButton onClick={() => cmd("+")} text={"+"}/>
      <MathButton onClick={() => cmd("-")} text={"-"}/>
      <MathButton onClick={() => cmd("*")} text={"*"}/>
      <MathButton onClick={() => cmd("/")} text={"/"}/>
      <MathButton onClick={() => cmd("\\left")} text={"("}/>
      <MathButton onClick={() => cmd("\\right")} text={")"}/>
      <MathButton onClick={() => cmd("\\lfloor")} text={"⌊"}/>
      <MathButton onClick={() => cmd("\\rfloor")} text={"⌋"}/>
      <MathButton onClick={() => cmd("\\lceil")} text={"⌈"}/>
      <MathButton onClick={() => cmd("\\rceil")} text={"⌉"}/>
    </>
  )
}

export default MagiMixerPage
