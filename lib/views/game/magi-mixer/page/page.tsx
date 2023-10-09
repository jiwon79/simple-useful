import { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import { NumberGroup, MathEditor, MathButtonGroup } from "../components";
import { useMathField } from "../hooks";

interface ExpressionResult {
  result: number;
  error: boolean;
  errorMsg: string;
}

export const MagiMixerPage = () => {
  const {latex, mathField, handleMathField, cmd, keystroke} = useMathField();
  const [expressionResult, setExpressionResult] = useState<ExpressionResult>({result: 0, error: false, errorMsg: ''});
  const [used, setUsed] = useState<number[]>([]);

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
          mathField={mathField}
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
