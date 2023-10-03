import Image from 'next/image'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <div>
          <Image
            src="/favicon.png"
            width={32}
            height={32}
            alt={"web logo"}
            className={styles.logo}
          />
          <p className={styles.title}>Simple & Useful</p>
        </div>
      </a>

      <div>
        <div className={styles.icon}>
          <Image
            src={"/icon/dark_mode_black_24dp.svg"}
            width={24}
            height={24}
            alt={"dark mode"}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={"/icon/search_black_24dp.svg"}
            width={24}
            height={24}
            alt={"search icon"}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
