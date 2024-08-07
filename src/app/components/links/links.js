import { RESTAURANTS } from '@/app/mocks';
import styles from './links.module.scss'


export default function Links() {
  return (
    <ol className={styles.links}>
      {RESTAURANTS.map((elem, i) => {
        return (
          <li key={i}>
            <a
              href={elem.link}
              className={styles['links__item']}
              target="_blank"
              rel="noopener noreferrer"
            >
              {elem.title}
            </a>
          </li>
        )
      })}
    </ol>
  );
}
