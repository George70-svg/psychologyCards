import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { StyledDecksSlider } from '@components/decks/styles/decks-slider.styled'
import Icons from '@icons/icons'

import first_mode_img from '../../../assets/img/modes/first_mode.png'
import second_mode_img from '../../../assets/img/modes/second_mode.png'
import third_mode_img from '../../../assets/img/modes/third_mode.png'
import fourth_mode_img from '../../../assets/img/modes/fourth_mode.png'
import fifth_mode_img from '../../../assets/img/modes/fifth_mode.png'
import sixth_mode_img from '../../../assets/img/modes/sixth_mode.png'

const images = [ first_mode_img, second_mode_img, third_mode_img, fourth_mode_img, fifth_mode_img, sixth_mode_img ]

export function DeckSlider() {
  const decks = [ 'first_deck', 'second_deck', 'third_deck', 'fourth_deck', 'fifth_deck', 'sixth_deck' ]

  const [slideNumber, changePosition] = React.useState(0)

  const onLeft = () => {
    if(slideNumber > 0) {
      changePosition(slideNumber - 1)
    }
  }

  const onRight = () => {
    if(slideNumber < decks.length - 3) {
      changePosition(slideNumber + 1)
    }
  }

  const itemClass = (index: number): string => {
    if(index === slideNumber + 1) {
      return 'center-item item-outer'
    } else {
      return 'item-outer'
    }
  }

  return (
    <StyledDecksSlider>
      <Button variant="contained" className='button' onClick={onLeft}>
        <Icons name='arrow-left' color='#fff' size='72' className='icon' />
      </Button>

      <div className='slide-container'>
        <div className='slide-list' style={{ transform: `translateX(${-slideNumber * 33.33}%)` }}>
          {decks?.map((deck, index) => (
            <Link key={ index } to={ `${deck}` } className={itemClass(index)} >
              <div
                style={{ backgroundImage: `url(${images[index]})` }}
                className='item-inner'
              >
                <p>{ deck }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Button variant="contained" className='button' onClick={onRight}>
        <Icons name='arrow-right' color='#fff' size='72' className='icon' />
      </Button>
    </StyledDecksSlider>
  )
}
