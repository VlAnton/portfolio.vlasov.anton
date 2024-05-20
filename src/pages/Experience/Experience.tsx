import React from 'react'
import classes from '@/pages/Experience/Experience.module.css'
import { AboutCard } from '@/components'
import tensorImg from '@/assets/images/Tensor.svg'
import jetStyleImg from '@/assets/images/JetStyle.svg'
import skyDNSImg from '@/assets/images/SkyDNS.svg'
import MTSImg from '@/assets/images/MTS.svg'

export function Experience() {
  return (
    <div className="page-wrapper">
      <section className={classes.description}>
        <h1 className="main-header">Мой опыт</h1>
        <p className="caption">
          Начинал свой путь в&nbsp;IT я с&nbsp;языка программирования Python,
          с&nbsp;backend-разработки. Спустя год меня позвали в&nbsp;МТС, где я
          работал frontend-разработчиком 3.5 лет, после&nbsp;чего&nbsp;
          переквалифицировался в&nbsp;UI/UX дизайнеры.
        </p>
        <a
          className="caption"
          href="https://github.com/VlAnton"
          target="_blank"
          rel="noreferrer"
        >
          Мой GitHub
        </a>
      </section>

      <section className={classes.block}>
        <h2 className={classes.blockHeader}>Backend</h2>
        <div className={classes.subBlock}>
          <AboutCard link="https://tensor.ru/" path={tensorImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>Тензор</h3>
              <p className={classes.cardBlockDescription}>
                Разработка роботов для&nbsp;сбора данных о&nbsp;тендерах
              </p>
            </div>
          </AboutCard>

          <AboutCard link="https://jetstyle.ru/" path={jetStyleImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>JetStyle</h3>
              <p className={classes.cardBlockDescription}>
                Это была стажировка, в&nbsp;течение которой я учился работать
                с&nbsp;Django, Django-REST, Git, Docker
              </p>
            </div>
          </AboutCard>

          <AboutCard link="https://www.skydns.ru/" path={skyDNSImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>SkyDNS</h3>
              <p className={classes.cardBlockDescription}>
                Поддержка сайта компании:
                <ul>
                  <li>расширение функциональности сайта и&nbsp;админки;</li>
                  <li>исправление багов;</li>
                  <li>тесты, рефакторинг кода.</li>
                </ul>
              </p>
            </div>
          </AboutCard>

          <AboutCard link="https://mts-digital.ru/" path={MTSImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>МТС</h3>
              <p className={classes.cardBlockDescription}>
                Разработка backend-части. Strapi и&nbsp;Python. В&nbsp;основном
                делал отдельные методы
              </p>
            </div>
          </AboutCard>
        </div>
      </section>

      <section className={classes.block}>
        <h2 className={classes.blockHeader}>Frontend</h2>
        <div className={classes.subBlock}>
          <AboutCard link="https://www.skydns.ru/" path={skyDNSImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>SkyDNS</h3>
              <p className={classes.cardBlockDescription}>
                Разработка небольших шаблонов и&nbsp;скриптов
              </p>
            </div>
          </AboutCard>

          <AboutCard link="https://mts-digital.ru/" path={MTSImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>МТС</h3>
              <p className={classes.cardBlockDescription}>
                Разработка внутреннего сайта. На&nbsp;Nuxt2 и&nbsp;Vue3+Vite.
                Как&nbsp;отдельных компонентов, так&nbsp;и&nbsp;страниц/разделов
              </p>
            </div>
          </AboutCard>
        </div>
      </section>

      <section className={classes.block}>
        <h2 className={classes.blockHeader}>UI/UX</h2>
        <div className={classes.subBlock}>
          <AboutCard link="https://mts-digital.ru/" path={MTSImg}>
            <div className={classes.cardBlock}>
              <h3 className={classes.cardBlockHeader}>МТС</h3>
              <p className={classes.cardBlockDescription}>
                Проектирование макетов в&nbsp;Figma. Проработка новых страниц,
                разделов, компонентов. Всё на&nbsp;auto-layout
                и&nbsp;компонентах :)
              </p>
            </div>
          </AboutCard>
        </div>
      </section>
    </div>
  )
}
