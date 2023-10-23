import { evaluate } from "mathjs";

interface UseEvaluateExpression {
  result: number;
  error: boolean;
  errorMsg: string;
  used: number[];
}

const extractNumbers = (str: string)  => {
  const numbers = str.match(/\d/g);

  return numbers ? numbers.map(Number) : [];
}

export function useEvaluateExpression(expression: string): UseEvaluateExpression {
  const usedNumbers = extractNumbers(expression);

  const error = (errorMsg: string) => ({result: 0, error: true, errorMsg, used: usedNumbers});
  const success = (result: number) => ({result, error: false, errorMsg: '', used: usedNumbers});

  if (expression.trim() === '') return success(0);

  const continueNumberRegex = /\d{2}/;
  const isContinueNumber = continueNumberRegex.test(expression);
  if (isContinueNumber) return error('숫자를 연속으로 사용할 수 없습니다.');

  const mathExpression = expression
    .replace(/\\lceil(.*?)\\rceil/g, 'ceil($1)')
    .replace(/\\lfloor(.*?)\\rfloor/g, 'floor($1)')
    .replace(/\\sqrt{(.*?)}/g, 'sqrt($1)')
    .replace(/\\frac{(.*?)}{(.*?)}/g, '($1)/($2)')
    .replace(/\\cdot/g, '*')
    .replace(/\\left/g, '(')
    .replace(/\\right/g, ')')
    .replace(/{/g, '(')
    .replace(/}/g, ')')

  try {
    return success(evaluate(mathExpression));
  } catch (e) {
    return error('잘못된 수식입니다.');
  }
}
