import { DetailPage } from '@views/game/lol-chess/pages';

interface PageProps {
  params: { name: string };
}

const Page = ({ params: { name } }: PageProps) => {
  return <DetailPage name={name} />;
};

export default Page;
