import React, { useEffect, useState } from 'react'
import classes from '@/components/Burger/Burger.module.css'
import { HeaderTab } from '@/components'
import { useLocation } from 'react-router-dom'
import burgerIcon from '@/assets/icons/burger.svg'
import { tabs } from '@/helpers/constants'

export function Burger() {
  const [activeTab, setActiveTab] = useState('home')
  const [showBurger, setShowBurger] = useState(false)
  const location = useLocation()

  function handleTabClick(tab: string) {
    setActiveTab(tab)
  }
  function handleBurgerClick() {
    setShowBurger(!showBurger)
  }

  useEffect(() => {
    const tab = tabs.find(({ link }) => link === location.pathname)
    if (tab) {
      setActiveTab(tab.tabName)
    }
  })

  return (
    <div className={classes.burger}>
      <header className={classes.header}>
        <button className={classes.burgerButton} onClick={handleBurgerClick}>
          <img src={burgerIcon} alt="burger"></img>
        </button>
        <p className={classes.logo}>Антон Власов</p>
      </header>

      <nav className={showBurger ? classes.navbarActive : classes.navbar}>
        {tabs.map((tab) => (
          <HeaderTab
            key={tab.id}
            activeTab={activeTab}
            onClick={handleTabClick}
            {...tab}
          >
            {tab.text}
          </HeaderTab>
        ))}
      </nav>
    </div>
  )
}
