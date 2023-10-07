import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { StyledModes } from '@components/modes/styles/modes.styled'

interface ModesProps {
  deckName: string
}

export function Modes(props: ModesProps) {
  const location = useLocation()

  //FIXME [asiuraev 19.09.2023]: Возможно, стоит подумать над другой проверкой пути
  return (
    <StyledModes>
      {(location.pathname === `/decks/${props.deckName}/visible_mode` ||
        location.pathname === `/decks/${props.deckName}/hidden_mode`) ? null :
        <div className='modes-wrapper'>
          <h1>Modes</h1>

          <div className='links-container'>
            <Link className='link' to='visible_mode'>
              visible_mode
            </Link>

            <Link className='link' to='hidden_mode'>
              hidden_mode
            </Link>
          </div>
        </div>}

      <Outlet/>
    </StyledModes>
  )
}
