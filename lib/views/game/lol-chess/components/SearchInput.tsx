import { styled } from '@/stitches.config';
import { IconEnter } from '@lib/assets';

interface SearchInputProps {
  value: string;
  onChange: (search: string) => void;
}

export const SearchInput = ({
  value,
  onChange: givenOnChange,
}: SearchInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    givenOnChange(event.target.value);
  };

  return (
    <InputWrap>
      <NameInput
        type="text"
        placeholder="롤 닉네임"
        value={value}
        onChange={onChange}
      />
      <EnterButton>
        <StyledIconEnter />
      </EnterButton>
    </InputWrap>
  );
};

const InputWrap = styled('div', {
  display: 'flex',
  width: '400px',
  margin: '0 auto',
  backgroundColor: '$grey800',
  borderRadius: '10px',
  padding: '0 10px 0 20px',
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

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledIconEnter = styled(IconEnter, {
  color: '$grey100',
});
