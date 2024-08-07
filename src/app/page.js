import Image from "next/image";
import styles from './page.module.scss'
import container from './styles/container.module.scss'
import Links from "./components/links/links";
import BenefitsAndFlaws from "./components/benefits-and-flaws/benefits-and-flaws";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={container['main-container']}>
        <div className={styles['main__content']}>
          <div>
            <h1 className={styles.header}>
              Предлагаю твоему вниманию следующие места к посещению:
            </h1>
            <Links />
          </div>

          <div>
            <h2 className={styles.header}>
              Преимущества и недостатки:
            </h2>
            <BenefitsAndFlaws />
          </div>

        </div>
      </div>
    </main>
  );
}
