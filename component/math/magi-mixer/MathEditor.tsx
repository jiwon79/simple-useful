import React from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import { styled } from "@/stitches.config";

addStyles();

const MathEditor = ({mathField, handleMathField}) => {
  return (
    <MathField
      latex={mathField?.latex() ?? ''}
      onChange={handleMathField}
    />
  )
}

const MathField = styled(EditableMathField, {
  display: "inline-flex",
  padding: "0 20px",
  width: "400px",
  height: "60px",
  resize: "none",
})

export default MathEditor;
