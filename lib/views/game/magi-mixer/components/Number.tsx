import { styled } from '@/stitches.config';

interface NumberProps {
  number: number;
  isUsed?: boolean;
}

export const Number = ({ number, isUsed }: NumberProps) => {
  return <NumberText isUsed={isUsed}>{number}</NumberText>;
};

const NumberText = styled('span', {
  label_18: true,
  color: '$grey900',
  width: '36px',
  height: '36px',
  margin: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  border: '1px solid $grey600',
  borderRadius: '100px',
  transition: 'all 0.1s ease-in-out',

  variants: {
    isUsed: {
      true: {
        paragraph_18: true,
        textDecoration: 'line-through',
        color: '$grey400',
        border: '1px solid $grey400',
      },
    },
  },
});
