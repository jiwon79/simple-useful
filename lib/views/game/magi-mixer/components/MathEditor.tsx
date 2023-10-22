import React from 'react';
import { addStyles } from 'react-mathquill';
import { styled } from "@/stitches.config";
import dynamic from "next/dynamic";

addStyles();

const DynamicEditableMathField = dynamic(
  () => import('react-mathquill')
    .then((mod) => mod.EditableMathField),
  {ssr: false}
);

export const MathEditor = ({mathField, handleMathField}) => {
  return (
    <MathField
      latex={mathField?.latex() ?? ''}
      onChange={handleMathField}
    />
  )
}

const MathField = styled(DynamicEditableMathField, {
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 4px",
  width: "300px",
  height: "40px",
  resize: "none",
})
