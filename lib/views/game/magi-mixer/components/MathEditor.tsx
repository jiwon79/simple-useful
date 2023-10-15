"use client";
import React from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import { styled } from "@/stitches.config";

addStyles();

export const MathEditor = ({mathField, handleMathField}) => {
  return (
    <MathField
      latex={mathField?.latex() ?? ''}
      onChange={handleMathField}
    />
  )
}

const MathField = styled(EditableMathField, {
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 4px",
  width: "300px",
  height: "40px",
  resize: "none",
})
