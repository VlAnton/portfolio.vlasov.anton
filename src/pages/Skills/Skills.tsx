import React from 'react'
import classes from '@/pages/Skills/Skills.module.scss'

export function Skills() {
  return (
    <div className="page-wrapper">
      <h1 className="main-header">Мои навыки</h1>
      <div className={classes.skills}>
        <section className={classes.block}>
          <h3 className="sub-header">Языки</h3>
          <ul>
            <li>
              <p className="caption">
                Английский <b>B1</b>
              </p>
            </li>
            <li>
              <p className="caption">
                Французский <b>A1</b>
              </p>
            </li>
          </ul>
        </section>
        <section className={classes.block}>
          <h3 className="sub-header">Языки программирования</h3>
          <ul>
            <li>
              <p className="caption">Python 2/3</p>
            </li>
            <li>
              <p className="caption">Javascript/Typescript</p>
            </li>
            <li>
              <p className="caption">HTML/CSS</p>
            </li>
          </ul>
        </section>
        <section className={classes.block}>
          <h3 className="sub-header">Фреймворки</h3>
          <ul>
            <li>
              <p className="caption">Express</p>
            </li>
            <li>
              <p className="caption">Vue2/3</p>
            </li>
            <li>
              <p className="caption">Nuxt2</p>
            </li>
            <li>
              <p className="caption">React</p>
            </li>
          </ul>
        </section>
        <section className={classes.block}>
          <h3 className="sub-header">Другое</h3>
          <ul>
            <li>
              <p className="caption">GIT</p>
            </li>
            <li>
              <p className="caption">Figma</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
