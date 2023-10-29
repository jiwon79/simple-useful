import { CardProps } from 'component/main/Card/Card';
import { Metadata } from 'next';
import CardGroup from '../component/main/CardGroup/CardGroup';

export const metadata: Metadata = {
  title: 'Simple Useful',
};

export default function Home() {
  // const mathCards: CardProps[] = [
  //   { name: "Magi Mixer", desc: "Magi Mixer", href: "/math/magi-mixer" },
  // ];
  const gameCards: CardProps[] = [
    { name: 'Magi Mixer', desc: 'Magi Mixer', href: '/game/magi-mixer' },
  ];
  const etcCards: CardProps[] = [
    {
      name: 'Remove New Line',
      desc: 'Remove new line when copy paste in pdf file',
      href: '/etc/removePdfNewLine',
    },
    // { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    // { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    // { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
  ];

  return (
    <>
      <CardGroup title="GAME" icon="/icon/ic_home_etc.svg" cards={gameCards} />
      <CardGroup title="ETC" icon="/icon/ic_home_etc.svg" cards={etcCards} />
    </>
  );
}
