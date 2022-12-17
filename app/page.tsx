import CardGroup from "../component/main/CardGroup/CardGroup";
import { CardProps } from "component/main/Card/Card";

export default function Home() {
  const mathCards: CardProps[] = [
    { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
  ];

  const ClockCards: CardProps[] = [
    { name: "Clock-1", desc: "Remain desc - 1", href: "/math/remain" },
    { name: "Clock-1", desc: "Remain desc - 1", href: "/math/remain" },
    { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
    { name: "Remain-1", desc: "Remain desc - 1", href: "/math/remain" },
  ];

  return (
    <>
      <CardGroup title={"MATH"} icon={"/icon/calculate_black_24dp.svg"} cards={mathCards} />
      <CardGroup title={"CLOCK"} icon={"/icon/clock_black.svg"} cards={ClockCards} />
    </>
  )
}
