"use client";
import { useRef, useState } from "react";
import { MathField } from "react-mathquill";
import { Number, MathEditor, MathButtonGroup } from "@/component/math/magi-mixer";

const MagiMixerPage = () => {
  const mathFieldRef = useRef<MathField>();
  const [value, setValue] = useState<string>('');

  const handleMathField = (mathField: MathField) => {
    mathFieldRef.current = mathField;
    setValue(mathField.latex());
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
      <Number number={1}/>
      <Number number={1} isUsed={true}/>
      <MathEditor mathField={mathFieldRef.current} handleMathField={handleMathField}/>
      <p>{value}</p>
      <MathButtonGroup cmd={cmd} keystroke={keystroke}/>
    </>
  )
}

export default MagiMixerPage
