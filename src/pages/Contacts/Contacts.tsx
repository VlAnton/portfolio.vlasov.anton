import React from 'react'
import classes from '@/pages/Contacts/Contacts.module.css'

export function Contacts() {
  return (
    <div className="page-wrapper">
      <div className={classes.contacts}>
        <h1 className="main-header">Контакты</h1>

        <section>
          <ul>
            <li>
              <a href="tel:+79923463495">+7 (992) 346-34-95</a> — основной
              телефон
            </li>
            <li>
              <a href="tel:+79923463495">+7 (982) 610-05-23</a> — рабочий
              телефон
            </li>
            <li>
              <a href="mailto:antocha1616@gmail.com">Почта</a>
            </li>
            <li>
              <a href="https://t.me/antochavlasov">Telegram</a>
            </li>
            <li>
              <a
                className={classes.descriptionText}
                href="https://github.com/VlAnton"
                target="_blank"
                rel="noreferrer"
              >
                Мой GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
