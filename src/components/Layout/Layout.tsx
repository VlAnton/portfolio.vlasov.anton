import React, { useEffect, useState } from 'react'
import { Header } from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components'
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
      <div
        className={
          windowDimensions.width > 790
            ? classes.upperLevel
            : classes.upperLevelRow
        }
      >
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
