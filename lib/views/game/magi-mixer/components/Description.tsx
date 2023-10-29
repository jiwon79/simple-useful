import { styled } from '@/stitches.config';

export const Description = () => {
  return (
    <Wrap>
      <Title>Magi Mixer 게임 방법</Title>
      <List>
        <ListItem>
          왼쪽의 숫자들을 이용하여 오른쪽의 숫자를 만들어야 합니다.
        </ListItem>
        <ListItem>사칙연산과 여러 기호를 사용할 수 있습니다.</ListItem>
        <ListItem>11과 같이 숫자를 연속으로 붙일 수 없습니다.</ListItem>
        <ListItem>계산할 수 없는 경우라면 "불가능" 버튼을 눌러주세요.</ListItem>
      </List>
      <Divider />

      <Title>예시</Title>
      <Text>문제 : 1, 2, 3, 4, 6 = 43</Text>
      <Text>정답 : (3 + 4) * 6 + 2 - 1 = 43</Text>
      <Text>*정답은 여러가지가 될 수 있습니다.</Text>
      <Divider />

      <Title>연산 기호</Title>
      <List>
        <ListItem>덧셈: +</ListItem>
        <ListItem>뺄셈: -</ListItem>
        <ListItem>곱셈: *</ListItem>
        <ListItem>나눗셈: /</ListItem>
        <ListItem>거듭제곱: ^ (ex. 3^2 = 9)</ListItem>
        <ListItem>제곱근: √ (ex. √9 = 3)</ListItem>
        <ListItem>괄호: ( )</ListItem>
        <ListItem>내림: ⌊ ⌋ (ex. ⌊3.6⌋ = 3)</ListItem>
        <ListItem>올림: ⌈ ⌉ (ex. ⌈3.2⌉ = 4)</ListItem>
      </List>
      <Divider />
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 16px',
});

const Title = styled('h3', {
  heading_20: true,
  marginBottom: '8px',
});

const Text = styled('p', {
  paragraph_14: true,
});

const List = styled('ul', {
  listStyle: 'inside',
});

const ListItem = styled('li', {
  paragraph_16: true,
  paddingLeft: '12px',
});

const Divider = styled('div', {
  margin: '8px 0',
});
