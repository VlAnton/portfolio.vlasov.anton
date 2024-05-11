import React from 'react'
import { Header } from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components'
import classes from '@/components/Layout/Layout.module.css'

export function Layout() {
  return (
    <>
      <div className={classes.upperLevel}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
