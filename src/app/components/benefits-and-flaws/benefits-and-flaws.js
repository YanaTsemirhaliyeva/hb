'use client';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from "next/image";
import { RESTAURANTS } from '@/app/mocks';
import styles from './benefits-and-flaws.module.scss'


export default function BenefitsAndFlaws() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section>
      <ol className={styles.benefits}>
        {RESTAURANTS.map((elem, i) => {
          return (
            <li key={i} >
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
              {elem.images &&
                <div className={styles['benefits__gallery']}>
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                  >
                    {elem.images.map((image, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <Image src={image}
                            alt={elem.title}
                            width={300}
                            height={200}
                          />
                        </SwiperSlide>
                      );
                    })}
                    <div className="autoplay-progress" slot="container-end">
                      <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref={progressContent}></span>
                    </div>
                  </Swiper>
                </div>
              }
            </li>
          )
        })}
      </ol>
    </section>
  );
}
