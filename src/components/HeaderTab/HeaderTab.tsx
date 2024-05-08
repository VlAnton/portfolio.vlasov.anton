import React from 'react'
import classes from '@/components/HeaderTab/HeaderTab.module.css'

type TabProps = {
  activeTab: string
  tabName: string
  children: string
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
      <p onClick={() => props.onClick(props.tabName)}>{props.children}</p>
    </li>
  )
}
