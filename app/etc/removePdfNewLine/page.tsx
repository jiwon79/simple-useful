"use client"
import { ChangeEvent, useState } from "react";
import PdfTextField from "@/component/etc/removePdfNewLine/PdfTextField";
import { styled } from "@/stitches.config";

const RemovePdfNewLinePage = () => {
  const [text, setText] = useState<string>("");
  const [beforeText, setBeforeText] = useState<string>("");

  const handleBeforeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBeforeText(e.target.value);
  }

  return (
    <Wrap>
      <Title>Remove PDF New Line</Title>

      <TextFiledWrap>
        <PdfTextField name="Before" text={text} setText={setText}/>
        <PdfTextField name="After" text={text.replaceAll("\n", " ")} setText={null}/>
      </TextFiledWrap>
    </Wrap>
  );
}

const Title = styled("h1", {
  heading_28: true,
  marginBottom: "24px",
});

const Wrap = styled("div", {
  display: "grid",
  flexDirection: "column",
  padding: "24px 48px",
});

const TextFiledWrap = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

export default RemovePdfNewLinePage;
