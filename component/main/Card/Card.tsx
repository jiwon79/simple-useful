import Link from "next/link";
import styles from './Card.module.scss';

export interface CardProps {
  name: string;
  desc: string;
  href: string;
}

const Card = ({ name, desc, href }: CardProps) => {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <p className={styles.title}>{name}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </Link>
  );
}

export default Card;
