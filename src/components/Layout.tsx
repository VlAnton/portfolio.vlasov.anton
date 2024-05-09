import { Header } from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'
import React from 'react'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
