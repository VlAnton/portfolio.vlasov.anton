import React from 'react'
import classes from '@/pages/About/About.module.css'
import img1 from '@/assets/images/D92TrJap8Bs.jpg'
import img2 from '@/assets/images/LuRihfRKg0.jpg'
import img3 from '@/assets/images/N0summiNPsw.jpg'
import mathMechLogo from '@/assets/images/MathMech.png'
import PracticumLogo from '@/assets/images/Practicum.png'
import BBELogo from '@/assets/images/BBELogo.png'
import { AboutCard } from '@/components'

export function About() {
  return (
    <div className="page-wrapper">
      <h1 className="main-header">Обо мне</h1>

      <section className={classes.about}>
        <div className={`${classes.block} ${classes.firstBlock}`}>
          <h3 className="sub-header">Общая информация</h3>
          <p className="caption">
            26 лет, город Екатеринбург, frontend-разработчик.
            <br />
            <br />Я люблю:
            <ul>
              <li>
                Cтрит-фотографию и&nbsp;фотографировать людей
                на&nbsp;мероприятиях;
              </li>
              <li>Обрабатывать фотографии;</li>
              <li>Рисовать портреты акварелью или&nbsp;карандашом;</li>
              <li>
                Книги, кино, музыку, ходить на&nbsp;выставки
                и&nbsp;в&nbsp;музеи.
              </li>
            </ul>
            <br />В данный момент занимаюсь UI/UX дизайном, но&nbsp;хочу
            вернуться в&nbsp;разработку
          </p>
        </div>

        <div className={classes.aboutGrid}>
          <img
            className={`${classes.image} ${classes.gridItem1}`}
            src={img1}
          ></img>
          <img
            className={`${classes.image} ${classes.gridItem2}`}
            src={img2}
          ></img>
          <img
            className={`${classes.image} ${classes.gridItem3}`}
            src={img3}
          ></img>
        </div>
      </section>

      <section className={classes.block}>
        <h3 className="sub-header">Моё образование</h3>
        <div className={classes.subBlock}>
          <AboutCard link="http://kn.urfu.tilda.ws/" path={mathMechLogo}>
            <p className="caption">
              Закончил<b> матмех УрФУ</b>, специальность —<i> математика</i>.
            </p>
          </AboutCard>
          <AboutCard
            link="https://practicum.yandex.ru/profile/middle-frontend/"
            path={PracticumLogo}
          >
            <p className="caption">
              Прохожу курс<i> Middle Frontend-разработчик</i> от&nbsp;
              <b>Практикума</b>.
            </p>
          </AboutCard>
          <AboutCard
            link="https://bangbangeducation.ru/program/graphdesign"
            path={BBELogo}
          >
            <p className="caption">
              Прошёл курс <i>Графический дизайнер</i> в&nbsp;
              <b>Bang Bang Education</b>.
            </p>
          </AboutCard>
        </div>
      </section>

      {/* <section className={classes.block}>
        <h3 className={classes.subHeader}>Мои интересы</h3>
      </section> */}
    </div>
  )
}
