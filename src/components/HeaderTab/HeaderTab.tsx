import React from 'react'
import { Link } from 'react-router-dom'
import classes from '@/components/HeaderTab/HeaderTab.module.css'

type TabProps = {
  activeTab: string
  tabName: string
  children: string
  link: string
  onClick: (e: string) => void
}

export function HeaderTab(props: TabProps) {
  return (
    <li
      className={
        props.activeTab === props.tabName
          ? `${classes.active} ${classes.tab}`
          : classes.tab
      }
    >
      <Link
        style={{ color: '#000', textDecoration: 'none' }}
        to={`${props.link}`}
        onClick={() => props.onClick(props.tabName)}
      >
        <p>{props.children}</p>
      </Link>
    </li>
  )
}