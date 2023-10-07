import React from 'react'
import { StyledCard } from '@components/cards/styles/card.styled'

export function Card() {
  return (
    <StyledCard>
      <div className='b-card card-wrapper'>
        <div
          className='b-card__cover'
          style={{ backgroundImage: `url(${123})` }}
        />
      </div>
    </StyledCard>
  )
}
