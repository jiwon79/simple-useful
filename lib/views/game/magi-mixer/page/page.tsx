import { toast } from 'react-toastify';
import { NumberGroup, MathEditor, MathButtonGroup } from "../components";
import { useEvaluateExpression, useMathField } from "../hooks";

export const MagiMixerPage = () => {
  const {latex, mathField, handleMathField, cmd, keystroke} = useMathField();
  const {used, result, error, errorMsg} = useEvaluateExpression(latex);

  const notify = () => toast("Wow so easy!", {
    type: "error"
  });
  return (
    <>
      <button onClick={() => notify()}>button</button>
      <NumberGroup inputs={[1, 2, 3, 4, 5]} outputs={[3, 6]} used={used}/>
      <div>
        <MathEditor
          mathField={mathField}
          handleMathField={handleMathField}
        />
        <p>=</p>
        <p>{result}</p>

      </div>
      <p>{errorMsg}</p>
      <MathButtonGroup cmd={cmd} keystroke={keystroke}/>
    </>
  )
}
