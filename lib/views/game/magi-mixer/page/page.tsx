import { toast } from 'react-toastify';
import { isSameNumberArray } from '@lib/utils/array';
import { styled } from '@/stitches.config';
import { PageLayout } from '@views/common/layout';
import dynamic from 'next/dynamic';
import {
  useEvaluateExpression,
  useGameNumber,
  useMathField,
  useSendResultToServer,
} from '../hooks';
import {
  ActionButtonGroup,
  Description,
  MathButtonGroup,
  MathExpression,
  NumberGroup,
} from '../components';

const DynamicMathEditor = dynamic(
  () => import('../components/MathEditor').then((mod) => mod.MathEditor),
  { ssr: false },
);

export const MagiMixerPage = () => {
  const { latex, mathField, handleMathField, cmd, keystroke } = useMathField();
  const { used, result, error, errorMsg } = useEvaluateExpression(latex);
  const { inputs, outputs, outputNumber, reset } = useGameNumber();
  const { sendFail, sendSuccess } = useSendResultToServer(inputs, outputs);

  const isSuccess =
    result === outputNumber && !error && isSameNumberArray(inputs, used);

  const onSuccess = async () => {
    toast('정답입니다!', { type: 'success' });
    await sendSuccess(latex);
  };

  const onFail = async () => {
    toast('불가능한 경우는 나오지 않도록 조치하겠습니다. 감사합니다.', {
      type: 'success',
    });
    reset();
    await sendFail();
  };

  return (
    <PageLayout>
      <NumberGroup inputs={inputs} outputs={outputs} used={used} />
      <MathExpression
        mathEditor={
          <DynamicMathEditor
            mathField={mathField}
            handleMathField={handleMathField}
          />
        }
        result={result}
      />
      <ErrorText>{errorMsg}</ErrorText>
      <MathButtonGroup cmd={cmd} keystroke={keystroke} />
      <ActionButtonGroup
        onSuccess={onSuccess}
        onFail={onFail}
        reset={reset}
        isSuccess={isSuccess}
      />
      <Description />
    </PageLayout>
  );
};

const ErrorText = styled('p', {
  paragraph_14: true,
  height: '20px',
  marginTop: '4px',
});
