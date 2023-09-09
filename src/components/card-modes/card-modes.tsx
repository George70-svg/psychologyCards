import React from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { StyledCardModes } from '@components/card-modes/styles/card-modes.styled'
import { Header } from '@components/card-modes/components/header'
import { ModeSlider } from '@components/card-modes/components/mode-slider'

export function CardModes() {
  const location = useLocation()

  return (
    <StyledCardModes>
      <Header/>

      {location.pathname !== '/modes' ? null :
        <div className='modes-wrapper'>
          <h1 className='modes-header'>Modes</h1>

          <ModeSlider />
        </div>}

      <Outlet/>
    </StyledCardModes>
  )
}
