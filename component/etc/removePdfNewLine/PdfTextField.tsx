import { ChangeEvent } from 'react';
import { styled } from '@/stitches.config';

interface PdfTextFieldProps {
  name: string;
  text: string;
  setText: (text: string) => void | null;
  children?: React.ReactNode;
}

const PdfTextField = ({ name, text, setText, children }: PdfTextFieldProps) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!setText) return;
    setText(e.target.value);
  };

  return (
    <Wrap>
      <Header>
        <Title>{name}</Title>
        {children}
      </Header>
      <TextFiled onChange={onChange} value={text} cols={30} rows={10} />
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  height: '40px',
  marginBottom: '6px',
});

const Title = styled('h2', {
  heading_20: true,
  marginBottom: '6px',
});

const TextFiled = styled('textarea', {
  width: '100%',
  height: '400px',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #E0E0E0',
  resize: 'none',
  marginBottom: '24px',
});

export default PdfTextField;
