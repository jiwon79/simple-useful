import { styled } from '@/stitches.config';

interface ActionButtonGroupProps {
  onSuccess: () => Promise<void>;
  onFail: () => Promise<void>;
  reset: () => void;
  isSuccess: boolean;
}

export const ActionButtonGroup = ({
  onSuccess,
  onFail,
  reset,
  isSuccess,
}: ActionButtonGroupProps) => {
  return (
    <Wrap>
      <Button type="primary" onClick={onSuccess} disabled={!isSuccess}>
        제출하기
      </Button>
      <Button type="secondary" onClick={onFail}>
        불가능
      </Button>
      <Button type="secondary" onClick={reset}>
        숫자 바꾸기
      </Button>
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  margin: '16px 0',
});

const Button = styled('button', {
  height: '36px',
  width: '100px',
  paragraph_14: true,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',

  variants: {
    type: {
      primary: {
        backgroundColor: '$main300',
        border: '1px solid $main200',
        '&:disabled': {
          color: '$grey500',
        },
      },
      secondary: {
        backgroundColor: '$grey200',
        border: '1px solid $grey400',
      },
    },
  },
});
