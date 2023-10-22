import { useState } from "react";

interface UseGameNumber {
  inputs: number[];
  outputs: number[];
  outputNumber: number;
  reset: () => void;
}

const getRandomNumber = (min: number, max: number, length: number) => {
  const numbers: number[] = [];
  while (numbers.length < length) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

const getRandomInputs = () => getRandomNumber(1, 6, 5);
const getRandomOutputs = () => getRandomNumber(1, 6, 2);

export function useGameNumber(): UseGameNumber {
  const [inputs, setInputs] = useState<number[]>(getRandomInputs());
  const [outputs, setOutputs] = useState<number[]>(getRandomOutputs());
  const outputNumber = outputs[0] * 10 + outputs[1];

  const reset = () => {
    setInputs(getRandomInputs());
    setOutputs(getRandomOutputs());
  }

  return {inputs, outputs, outputNumber, reset};
}
