import React from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { StyledDeckModes } from '@components/decks/styles/deck-modes.styled'
import { Header } from '@components/header/header'
import { DeckSlider } from '@components/decks/components/deck-slider'


export function Decks() {
  const location = useLocation()

  return (
    <StyledDeckModes>
      <Header/>

      {location.pathname !== '/decks' ? null :
        <div className='decks-wrapper'>
          <h1 className='decks-header'>Decks</h1>

          <DeckSlider />
        </div>}

      <Outlet/>
    </StyledDeckModes>
  )
}
