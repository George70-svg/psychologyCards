import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { StyledModeSlider } from '@components/card-modes/styles/mode-slider.styled'
import Icons from '@icons/icons'

import first_mode_img from '../../../assets/img/modes/first_mode.png'
import second_mode_img from '../../../assets/img/modes/second_mode.png'
import third_mode_img from '../../../assets/img/modes/third_mode.png'
import fourth_mode_img from '../../../assets/img/modes/fourth_mode.png'
import fifth_mode_img from '../../../assets/img/modes/fifth_mode.png'
import sixth_mode_img from '../../../assets/img/modes/sixth_mode.png'

const images = [ first_mode_img, second_mode_img, third_mode_img, fourth_mode_img, fifth_mode_img, sixth_mode_img ]

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

  const itemClass = (index: number): string => {
    if(index === slideNumber + 1) {
      return 'center-item item-outer'
    } else {
      return 'item-outer'
    }
  }

  return (
    <StyledModeSlider>
      <Button variant="contained" className='button' onClick={onLeft}>
        <Icons name='arrow-left' color='#fff' size='72' className='icon' />
      </Button>

      <div className='slide-container'>
        <div className='slide-list' style={{ transform: `translateX(${-slideNumber * 33.33}%)` }}>
          {modes?.map((mode, index) => (
            <Link key={ index } to={ `${mode}` } className={itemClass(index)} >
              <div
                style={{ backgroundImage: `url(${images[index]})` }}
                className='item-inner'
              >
                <p>{ mode }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Button variant="contained" className='button' onClick={onRight}>
        <Icons name='arrow-right' color='#fff' size='72' className='icon' />
      </Button>
    </StyledModeSlider>
  )
}
