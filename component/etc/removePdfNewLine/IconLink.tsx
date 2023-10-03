import { styled } from "@/stitches.config";

interface IconLinkProps {
  href: string;
  icon: string;
}

const IconLink = ({ href, icon }: IconLinkProps) => {
  return (
    <a href={href} target="_blank">
      <Icon src={`/icon/ic_remove_${icon}.png`} alt="icon"/>
    </a>
  );
}

const Icon = styled("img", {
  width: "36px",
  height: "36px",
});

export default IconLink;
