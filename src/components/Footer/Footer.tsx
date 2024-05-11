import React from 'react'
import classes from '@/components/Footer/Footer.module.css'

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.text}>Сделано с помощью ReactJS.</p>
      <a
        className={classes.link}
        href="https://github.com/VlAnton/portfolio.vlasov.anton"
        target="_blank"
        rel="noreferrer"
      >
        Ссылка на репозиторий
      </a>
    </footer>
  )
}
