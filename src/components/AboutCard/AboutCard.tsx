import React, { ReactNode } from 'react'
import classes from '@/components/AboutCard/AboutCard.module.css'

type AboutCardProps = {
  link?: string
  path: string
  children: ReactNode
}

// TODO: fix types

export function AboutCard(props: AboutCardProps) {
  return (
    <a
      className={classes.cardWrapper}
      target="_blank"
      href={props.link}
      rel="noreferrer"
    >
      <img src={props.path} alt="about-card" loading="lazy" />
      {props.children}
    </a>
  )
}
