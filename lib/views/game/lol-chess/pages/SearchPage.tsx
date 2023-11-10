import { styled } from '@/stitches.config';

export const SearchPage = () => {
  return (
    <div>
      <InputWrap>
        <NameInput type="text" placeholder="롤 닉네임" />
        <EnterButton>+</EnterButton>
      </InputWrap>
      <Desc>최근 120게임 동안 같이 플레이한 사람을 보여줍니다.</Desc>
    </div>
  );
};

const Desc = styled('p', {
  paragraph_16: true,
});

const InputWrap = styled('div', {
  display: 'flex',
  width: '400px',
  margin: '0 auto',
  backgroundColor: '$grey800',
  borderRadius: '10px',
  padding: '0 10px',
});

const NameInput = styled('input', {
  flex: 1,
  paragraph_16: true,
  color: '$grey200',
  height: '36px',

  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
});

const EnterButton = styled('button', {
  width: '36px',
  height: '36px',
  backgroundColor: 'transparent',
  color: '$grey100',

  border: 'none',
  outline: 'none',
  cursor: 'pointer',
});
