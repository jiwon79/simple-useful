import CardGroup from "../component/main/CardGroup/CardGroup";
import { CardProps } from "component/main/Card/Card";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple Useful',
}

export default function Home() {
  const mathCards: CardProps[] = [
    { name: "Magic Mixer", desc: "Magic Mixer", href: "/math/magic-mixer" },
  ];
  const etcCards: CardProps[] = [
    { name: "Remove New Line", desc: "Remove new line when copy paste in pdf file", href: "/etc/removePdfNewLine" },
    // { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    // { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    // { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
  ];

  return (
    <>
      <CardGroup title={"MATH"} icon={"/icon/ic_home_etc.svg"} cards={mathCards} />
      <CardGroup title={"ETC"} icon={"/icon/ic_home_etc.svg"} cards={etcCards} />
    </>
  )
}
