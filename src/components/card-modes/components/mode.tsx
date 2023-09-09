import React from 'react'
import { StyledMode } from '@components/card-modes/styles/mode.styled'

interface ModeProps {
  modeName: string
}

export function Mode(props: ModeProps) {
  return (
    <StyledMode>
      <h1>{ props.modeName }</h1>
    </StyledMode>
  )
}
