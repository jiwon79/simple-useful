import { LoLChessApiClient } from '@domains/external-api/lol-chess/api';

interface DetailPageProps {
  params: DetailPageParams;
}

interface DetailPageParams {
  name: string;
}

export const DetailPage = async ({ params: { name } }: DetailPageProps) => {
  const data = await LoLChessApiClient.getLoLChessFriends(name);

  return (
    <div>
      {data.friends.map((friend) => (
        <p key={friend.name}>
          {friend.name} {friend.profileImageUrl} {friend.count}
        </p>
      ))}
    </div>
  );
};
