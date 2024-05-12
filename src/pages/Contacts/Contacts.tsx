import React from 'react'
import classes from '@/pages/Contacts/Contacts.module.css'

export function Contacts() {
  return (
    <div className="page-wrapper">
      <h1 className="main-header">Контакты</h1>

      <section className={classes.contacts}>
        <ul>
          <li>
            <a href="tel:+79923463495">+7 (992) 346-34-95</a> — основной телефон
          </li>
          <li>
            <a href="tel:+79923463495">+7 (982) 610-05-23</a> — рабочий телефон
          </li>
          <li>
            <a href="mailto:antocha1616@gmail.com">Почта</a>
          </li>
          <li>
            <a href="https://t.me/antochavlasov">Telegram</a>
          </li>
        </ul>
      </section>
    </div>
  )
}
