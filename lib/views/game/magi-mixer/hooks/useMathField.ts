import { useRef, useState } from 'react';
import { MathField } from 'react-mathquill';

export function useMathField() {
  const mathFieldRef = useRef<MathField>();
  const [latex, setLatex] = useState<string>('');

  const handleMathField = (mathField: MathField) => {
    mathFieldRef.current = mathField;
    setLatex(mathField.latex());
  };

  const cmd = (cmdStr: string) => {
    if (mathFieldRef.current === undefined) return;
    mathFieldRef.current.cmd(cmdStr);
    mathFieldRef.current.focus();
    setLatex(mathFieldRef.current.latex() ?? '');
  };

  const keystroke = (key: string) => {
    if (mathFieldRef.current === undefined) return;
    mathFieldRef.current.focus();
    mathFieldRef.current.keystroke(key);
    setLatex(mathFieldRef.current.latex() ?? '');
  };

  return {
    latex,
    mathField: mathFieldRef.current,
    handleMathField,
    cmd,
    keystroke,
  };
}
