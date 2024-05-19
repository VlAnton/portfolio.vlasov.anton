import React, { useEffect, useState } from 'react'
import classes from '@/components/Header/Header.module.css'
import { HeaderTab } from '@/components'
import { useLocation } from 'react-router-dom'
import { getWindowDimensions } from '@/helpers/window'

const tabs = [
  {
    id: 1,
    tabName: 'home',
    link: '/',
    text: 'Главная',
  },
  {
    id: 2,
    tabName: 'about',
    link: '/about',
    text: 'Обо мне',
  },
  {
    id: 3,
    tabName: 'experience',
    link: '/experience',
    text: 'Мой опыт',
  },
  {
    id: 4,
    tabName: 'skills',
    link: '/skills',
    text: 'Мои навыки',
  },
  {
    id: 5,
    tabName: 'contacts',
    link: '/contacts',
    text: 'Контакты',
  },
]

export function Header() {
  const [activeTab, setActiveTab] = useState('home')
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )
  const location = useLocation()

  function handleClick(tab: string) {
    setActiveTab(tab)
  }

  useEffect(() => {
    const tab = tabs.find(({ link }) => link === location.pathname)
    if (tab) {
      setActiveTab(tab.tabName)
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <header
      className={
        windowDimensions.width > 790 ? classes.header : classes.headerColumn
      }
    >
      <div className={classes.headerContent}>
        <p className={classes.logo}>Антон Власов</p>

        <ul>
          {tabs.map((tab) => (
            <HeaderTab
              key={tab.id}
              activeTab={activeTab}
              onClick={handleClick}
              {...tab}
            >
              {tab.text}
            </HeaderTab>
          ))}
        </ul>
      </div>
    </header>
  )
}
