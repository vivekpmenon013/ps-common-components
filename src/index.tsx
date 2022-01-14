import * as React from 'react'

interface Props {
  text: string
  color: string
}

export const ColoredHeadingOne = ({ text, color }: Props) => {
  return <h1 style={{ color }}>{text}</h1>
}

export * from './components'
