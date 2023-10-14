interface ActionButtonGroupProps {
  onSuccess: () => Promise<void>;
  onFail: () => Promise<void>;
  reset: () => void;
  isSuccess: boolean;
}

export const ActionButtonGroup = ({onSuccess, onFail, reset, isSuccess}: ActionButtonGroupProps) => {
  return (
    <div>
      <button onClick={onSuccess} disabled={!isSuccess}>제출하기</button>
      <button onClick={onFail}>불가능</button>
      <button onClick={reset}>숫자 바꾸기</button>
    </div>
  )
}
