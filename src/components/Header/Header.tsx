import React, { useEffect, useState } from 'react'
import classes from '@/components/Header/Header.module.css'
import { HeaderTab } from '@/components'
import { useLocation } from 'react-router-dom'
import { tabs } from '@/helpers/constants'

export function Header() {
  const [activeTab, setActiveTab] = useState('home')
  const location = useLocation()

  function handleClick(tab: string) {
    setActiveTab(tab)
  }

  useEffect(() => {
    const tab = tabs.find(({ link }) => link === location.pathname)
    if (tab) {
      setActiveTab(tab.tabName)
    }
  })

  return (
    <header className={classes.header}>
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
