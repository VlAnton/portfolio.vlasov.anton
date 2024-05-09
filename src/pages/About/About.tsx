import React from 'react'
import classes from '@/pages/About/About.module.css'

export function About() {
  return (
    <section className="page-wrapper">
      <h1 className={classes.mainHeader}>Обо мне</h1>

      <div className={classes.block}>
        <h3 className={classes.subHeader}>Общая информация</h3>
        <p className={classes.caption}>
          26 лет, frontend-разработчик. Люблю кино, книги, фотографию, рисовать
          портреты. <br />В данный момент занимаюсь UI/UX дизайном, но хочу
          вернуться в разработку
        </p>
      </div>

      <div className={classes.block}>
        <h3 className={classes.subHeader}>Моё образование</h3>
      </div>

      <div className={classes.block}>
        <h3 className={classes.subHeader}>Мои интересы</h3>
      </div>
    </section>
  )
}
