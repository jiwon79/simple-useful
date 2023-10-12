import { toast } from 'react-toastify';
import { NumberGroup, MathEditor, MathButtonGroup } from "../components";
import { useEvaluateExpression, useMathField, useSendResultToServer } from "../hooks";
import { isSameNumberArray } from "@lib/utils/array";

export const MagiMixerPage = () => {
  const {latex, mathField, handleMathField, cmd, keystroke} = useMathField();
  const {used, result, error, errorMsg} = useEvaluateExpression(latex);
  const inputs = [4, 5, 2, 3, 5];
  const outputs = [4, 1];
  const outputNumber = outputs[0] * 10 + outputs[1];

  const isSuccess = (result === outputNumber) && !error && isSameNumberArray(inputs, used);

  const {sendFail, sendSuccess} = useSendResultToServer(inputs, outputs);

  const onSuccess = async () => {
    toast("정답입니다!", {type: "success"});
    await sendSuccess(latex);
  }

  const onFail = async () => {
    toast("불가능한 경우는 나오지 않도록 조치하겠습니다. 감사합니다.", {type: "success"});
    await sendFail();
  }

  return (
    <>
      <button onClick={onSuccess} disabled={!isSuccess}>제출하기</button>
      <button onClick={onFail}>불가능</button>
      <button>숫자 바꾸기</button>
      <NumberGroup inputs={inputs} outputs={outputs} used={used}/>
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
