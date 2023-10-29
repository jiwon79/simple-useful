'use client';
import { useState } from 'react';
import { styled } from '@/stitches.config';
import PdfTextField from '@/component/etc/removePdfNewLine/PdfTextField';
import IconLink from '@/component/etc/removePdfNewLine/IconLink';

const RemovePdfNewLinePage = () => {
  const [text, setText] = useState<string>('');

  const removedText = text.replaceAll('\n', ' ');
  const papagoLink = `https://papago.naver.com/?sk=en&tk=ko&hn=1&st=${removedText}`;
  const googleTranslateLink = `https://translate.google.co.kr/?hl=ko&sl=en&tl=ko&text=${removedText}&op=translate`;
  const deeplLink = `https://www.deepl.com/translator#en/ko/${removedText}`;

  return (
    <Wrap>
      <Title>Remove PDF New Line</Title>

      <TextFiledWrap>
        <PdfTextField name="Before" text={text} setText={setText} />
        <PdfTextField
          name="After"
          text={text.replaceAll('\n', ' ')}
          setText={null}
        >
          <IconLink href={papagoLink} icon={'papago'} />
          <IconLink href={googleTranslateLink} icon={'google_translate'} />
          <IconLink href={deeplLink} icon={'deepl'} />
        </PdfTextField>
      </TextFiledWrap>
    </Wrap>
  );
};

const Title = styled('h1', {
  heading_28: true,
  marginBottom: '24px',
});

const Wrap = styled('div', {
  display: 'grid',
  flexDirection: 'column',
  padding: '24px 48px',
});

const TextFiledWrap = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
});

export default RemovePdfNewLinePage;
