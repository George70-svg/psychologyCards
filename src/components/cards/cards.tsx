import React from 'react'
import { StyledCards } from '@components/cards/styles/cards.styled'

interface CardsProps {
  deckName: string
}

export function Cards(props: CardsProps) {
  return (
    <StyledCards>
      <div className='cards-wrapper'>
        <h1>Cards</h1>

        <div className='cards-container'>
          Cards
        </div>
      </div>
    </StyledCards>
  )
}
