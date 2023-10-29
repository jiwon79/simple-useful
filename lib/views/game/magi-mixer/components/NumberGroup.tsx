import { Number } from './Number';
import { styled } from '@/stitches.config';

interface NumberGroupProps {
  inputs: number[];
  outputs: number[];
  used: number[];
}

const markInput = (inputs: number[], used: number[]) => {
  const copyUsed = [...used];

  return inputs.map((input) => {
    let isUsed = copyUsed.includes(input);

    if (isUsed) {
      const index = copyUsed.indexOf(input);
      copyUsed.splice(index, 1);
    }

    return {
      number: input,
      isUsed: isUsed,
    };
  });
};

export const NumberGroup = ({ inputs, outputs, used }: NumberGroupProps) => {
  const markedInput = markInput(inputs, used);

  return (
    <Wrap>
      {markedInput.map((input, index) => (
        <Number key={index} number={input.number} isUsed={input.isUsed} />
      ))}
      <Equal>=</Equal>
      {outputs.map((output, index) => (
        <Number key={index} number={output} />
      ))}
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
});

const Equal = styled('p', {
  paragraph_18: true,
  margin: '0 12px',
});
