import { toast } from 'react-toastify';
import { NumberGroup, MathEditor, MathButtonGroup, MathExpression } from "../components";
import { useEvaluateExpression, useGameNumber, useMathField, useSendResultToServer } from "../hooks";
import { isSameNumberArray } from "@lib/utils/array";
import { styled } from "@/stitches.config";

export const MagiMixerPage = () => {
  const {latex, mathField, handleMathField, cmd, keystroke} = useMathField();
  const {used, result, error, errorMsg} = useEvaluateExpression(latex);
  const {inputs, outputs, outputNumber, reset} = useGameNumber();
  const {sendFail, sendSuccess} = useSendResultToServer(inputs, outputs);

  const isSuccess = (result === outputNumber) && !error && isSameNumberArray(inputs, used);

  const onSuccess = async () => {
    toast("정답입니다!", {type: "success"});
    await sendSuccess(latex);
  }

  const onFail = async () => {
    toast("불가능한 경우는 나오지 않도록 조치하겠습니다. 감사합니다.", {type: "success"});
    reset();
    await sendFail();
  }

  return (
    <>
      <NumberGroup inputs={inputs} outputs={outputs} used={used}/>
      <MathExpression
        mathEditor={<MathEditor mathField={mathField} handleMathField={handleMathField}/>}
        result={result}
      />
      <ErrorText>{errorMsg}</ErrorText>
      <MathButtonGroup cmd={cmd} keystroke={keystroke}/>
      <button onClick={onSuccess} disabled={!isSuccess}>제출하기</button>
      <button onClick={onFail}>불가능</button>
      <button onClick={reset}>숫자 바꾸기</button>
    </>
  )
}

const ErrorText = styled("p", {
  paragraph_14: true,
  height: "20px",
  marginTop: '4px',
});
