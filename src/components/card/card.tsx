import React from 'react'
import { StyledCard } from '@components/card/styles/card.styled'

interface CardProps {
  img: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined
}

export function Card(props: CardProps) {
  return (
    <StyledCard>
      <div className='b-card card-wrapper'>
        <div
          className='b-card__cover'
          style={{ backgroundImage: `url(${props.img})` }}
        >

        </div>
      </div>
    </StyledCard>
  )
}
