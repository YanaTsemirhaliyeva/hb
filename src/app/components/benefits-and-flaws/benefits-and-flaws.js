import { RESTAURANTS } from '@/app/mocks';
import styles from './benefits-and-flaws.module.scss'


export default function BenefitsAndFlaws() {
  return (
    <section>
      <ol className={styles.benefits}>
        {RESTAURANTS.map((elem, i) => {
          return (
            <li key={i}>
              <h3>{elem.title}</h3>
                <div className={styles['benefits__table']}>
                  <div className={styles['benefits__benefits']}>
                    <p className='text-center'>+</p>
                    <ul className={styles['benefits__benefits-list']}>
                      {elem.benefits && elem.benefits.map((benefit, i) => {
                        return (
                          <li key={i}>
                            - {benefit}
                          </li>
                        );
                      })}
                    </ul>
                    {elem.other &&
                      <>
                        <p>Дополнительно:</p>
                        <ul>
                          {elem.other.map((abc, i) => {
                            return (
                              <li key={i}>
                                <p>- {abc.title}</p>
                                <a href={`tel:${abc.phone}`}>{abc.phone}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    }
                  </div>
                  <div className={styles['benefits__flaws']}>
                    {elem.flaws &&
                    <div className={styles['flaws-border']}>
                      <p className='text-center'>-</p>
                      <ul className={styles['benefits__flaws-list']}>
                        {elem.flaws.map((flaw, i) => {
                          return (
                            <li key={i}>
                              - {flaw}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  }
                  </div>
                </div>
            </li>
          )
        })}
      </ol>
    </section>
  );
}
