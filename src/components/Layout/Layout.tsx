import React, { useEffect, useState } from 'react'
import { Header } from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Burger, Footer } from '@/components'
import classes from '@/components/Layout/Layout.module.css'
import { getWindowDimensions } from '@/helpers/window'

export function Layout() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      <div className={classes.upperLevel}>
        {windowDimensions.width < 790 && <Burger />}
        {windowDimensions.width >= 790 && <Header />}
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
