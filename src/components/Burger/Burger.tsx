import React, { useEffect, useState, useRef } from 'react'
import classes from '@/components/Burger/Burger.module.css'
import { HeaderTab } from '@/components'
import { useLocation } from 'react-router-dom'
import burgerIcon from '@/assets/icons/burger.svg'
import { tabs } from '@/helpers/constants'

export function Burger() {
  const [activeTab, setActiveTab] = useState('home')
  const [showBurger, setShowBurger] = useState(false)
  const burgerRef = useRef(null)
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
    function handleClickOutside(event: MouseEvent) {
      if (
        showBurger &&
        burgerRef.current &&
        (burgerRef.current as Node).contains(event.target as Node)
      ) {
        setShowBurger(true)
      } else {
        setShowBurger(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  return (
    <div ref={burgerRef} className={classes.burger}>
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
