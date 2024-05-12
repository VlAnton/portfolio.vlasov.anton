import React from 'react'
import classes from '@/components/AboutCard/AboutCard.module.css'

type AboutCardProps = {
  link: string
  path: string
  children: string
}

// TODO: fix types

export function AboutCard(props: any) {
  return (
    <a
      className={classes.cardWrapper}
      target="_blank"
      href={props.link}
      rel="noreferrer"
    >
      <img src={props.path} />
      {props.children}
    </a>
  )
}
