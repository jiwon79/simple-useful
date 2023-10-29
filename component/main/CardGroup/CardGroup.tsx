import Image from 'next/image';
import Card, { CardProps } from '../Card/Card';
import styles from './CardGroup.module.scss';

export interface CardGroupProps {
  title: string;
  icon: string;
  cards: CardProps[];
}

const CardGroup = ({ title, icon, cards }: CardGroupProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={icon}
          width={32}
          height={32}
          alt={'web logo'}
          className={styles.icon}
        />
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.card__wrapper}>
        {cards.map((card, idx) => (
          <Card {...card} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
