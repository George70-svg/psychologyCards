import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from '@components/header/styles/header.styled'

export function Header() {
  return (
    <StyledHeader>
      <div className='links-container'>
        <Link className='link' to='/decks'>
          decks
        </Link>

        <Link className='link' to='/layout'>
          layout
        </Link>
      </div>
    </StyledHeader>
  )
}
