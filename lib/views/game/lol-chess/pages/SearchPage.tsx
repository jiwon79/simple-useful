import { styled } from '@/stitches.config';
import { useState } from 'react';
import { SearchInput } from '@views/game/lol-chess/components';

export const SearchPage = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (newSearch: string) => {
    setSearch(newSearch);
  };

  return (
    <Page>
      <Title>TFT Network</Title>
      <Desc>최근 120게임 동안 같이 플레이한 사람을 보여줍니다.</Desc>
      <SearchInput value={search} onChange={handleSearch} />
    </Page>
  );
};

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Title = styled('p', {
  heading_28: true,
  marginTop: '20px',
  color: '$grey900',
});

const Desc = styled('p', {
  paragraph_16: true,
  color: '$grey600',
  marginTop: '4px',
  marginBottom: '40px',
  textAlign: 'center',
});
