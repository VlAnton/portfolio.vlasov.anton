import React from 'react'
import classes from '@/pages/Home/Home.module.css'

export function Home() {
  return (
    <section className="page-wrapper">
      <div className={classes.mainPageCard}>
        <p className={classes.caption}>
          Привет, меня зовут <br /> Антон Власов. <br />И это моё резюме
        </p>
      </div>
    </section>
  )
}
