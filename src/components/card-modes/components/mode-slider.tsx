import React from 'react'
import { Link } from 'react-router-dom'
import { StyledModeSlider } from '@components/card-modes/styles/mode-slider.styled'

export function ModeSlider() {
  const modes = [ 'first_mode', 'second_mode', 'third_mode', 'fourth_mode', 'fifth_mode', 'sixth_mode' ]

  const [slideNumber, changePosition] = React.useState(0)

  const onLeft = () => {
    if(slideNumber > 0) {
      changePosition(slideNumber - 1)
    }
  }

  const onRight = () => {
    if(slideNumber < modes.length - 3) {
      changePosition(slideNumber + 1)
    }
  }

  return (
    <StyledModeSlider>
      <button onClick={onLeft}>{'<'}</button>
      <div className='slide-container'>
        <div className='slide-list' style={{ transform: `translateX(${-slideNumber * 33.33}%)` }}>
          {modes?.map((mode, index) => (
            <Link key={ index } to={ `${mode}` } className='item-outer'>
              <div className='item-inner'>{mode}</div>
            </Link>
          ))}
        </div>
      </div>
      <button onClick={onRight}>{'>'}</button>
    </StyledModeSlider>
  )
}
