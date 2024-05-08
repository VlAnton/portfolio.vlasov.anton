import React, { useState } from 'react'
import classes from '@/components/Header/Header.module.css'
import { HeaderTab } from '@/components'

const tabs = [
  {
    id: 1,
    tabName: 'home',
    text: 'Главная',
  },
  {
    id: 2,
    tabName: 'about',
    text: 'Обо мне',
  },
  {
    id: 3,
    tabName: 'experience',
    text: 'Мой опыт',
  },
  {
    id: 4,
    tabName: 'skills',
    text: 'Мои навыки',
  },
  {
    id: 5,
    tabName: 'contacts',
    text: 'Контакты',
  },
]

export function Header() {
  const [activeTab, setActiveTab] = useState('home')

  function handleClick(tab: string) {
    setActiveTab(tab)
  }

  return (
    <header className={classes.header}>
      <p className={classes.logo}>Антон Власов</p>

      <ul>
        {tabs.map((tab) => (
          <HeaderTab
            key={tab.id}
            activeTab={activeTab}
            tabName={tab.tabName}
            onClick={handleClick}
          >
            {tab.text}
          </HeaderTab>
        ))}
      </ul>
    </header>
  )
}
