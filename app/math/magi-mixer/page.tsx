"use client";
import { useEffect, useRef, useState } from "react";
import { MathField } from "react-mathquill";
import { NumberGroup, MathEditor, MathButtonGroup } from "@lib/views/game/magi-mixer/component";
import { evaluate } from "mathjs";

interface ExpressionResult {
  result: number;
  error: boolean;
  errorMsg: string;
}

const MagiMixerPage = () => {
  const mathFieldRef = useRef<MathField>();
  const [latex, setLatex] = useState<string>('');
  const [expressionResult, setExpressionResult] = useState<ExpressionResult>({result: 0, error: false, errorMsg: ''});
  const [used, setUsed] = useState<number[]>([]);

  const handleMathField = (mathField: MathField) => {
    mathFieldRef.current = mathField;
    setLatex(mathField.latex());
  }

  const cmd = (cmd: string) => {
    if (mathFieldRef.current === undefined) return;
    mathFieldRef.current.cmd(cmd)
    mathFieldRef.current.focus();
    setLatex(mathFieldRef.current.latex() ?? '')
  }

  const keystroke = (key: string) => {
    if (mathFieldRef.current === undefined) return;
    mathFieldRef.current.focus();
    mathFieldRef.current.keystroke(key)
    setLatex(mathFieldRef.current.latex() ?? '')
  }

  useEffect(() => {
    const result = evaluateLatexExpression(latex)
    const numbers = extractNumbers(latex)
    setUsed(numbers)
    setExpressionResult(result)
  }, [latex])

  return (
    <>
      <NumberGroup inputs={[1, 2, 3, 4, 5]} outputs={[3, 6]} used={used}/>
      <div>
        <MathEditor
          mathField={mathFieldRef.current}
          handleMathField={handleMathField}
        />
        <p>=</p>
        <p>{expressionResult.result}</p>

      </div>
      <p>{expressionResult.errorMsg}</p>
      <MathButtonGroup cmd={cmd} keystroke={keystroke}/>
    </>
  )
}

function extractNumbers(str) {
  const numbers = str.match(/\d/g);

  return numbers ? numbers.map(Number) : [];
}

function evaluateLatexExpression(expression): ExpressionResult {
  if (expression.trim() === '') return {result: 0, error: false, errorMsg: ''};

  const continueNumberRegex = /\d{2}/;
  const isContinueNumber = continueNumberRegex.test(expression);
  if (isContinueNumber) return {result: 0, error: true, errorMsg: '숫자를 연속으로 사용할 수 없습니다.'};

  const mathExpression = expression
    .replace(/\\lceil(.*?)\\rceil/g, 'ceil($1)')
    .replace(/\\lfloor(.*?)\\rfloor/g, 'floor($1)')
    .replace(/\\sqrt{(.*?)}/g, 'sqrt($1)')
    .replace(/\\frac{(.*?)}{(.*?)}/g, '($1)/($2)')
    .replace(/\\cdot/g, '*')
    .replace(/\\left/g, '(')
    .replace(/\\right/g, ')')

  try {
    const result = evaluate(mathExpression);
    return {result, error: false, errorMsg: ''};
  } catch (e) {
    return {result: 0, error: true, errorMsg: '잘못된 수식입니다.'}
  }
}

export default MagiMixerPage
