import React, { useState } from 'react'
import { StyledMode } from '@components/card-modes/styles/mode.styled'
import { Card } from '@components/card/card'

import img_1 from '../../../assets/img/cards/1.png'
import img_2 from '../../../assets/img/cards/2.png'
import img_3 from '../../../assets/img/cards/3.png'
import img_4 from '../../../assets/img/cards/4.png'
import img_5 from '../../../assets/img/cards/5.png'
import img_6 from '../../../assets/img/cards/6.png'
import img_7 from '../../../assets/img/cards/7.png'
import img_8 from '../../../assets/img/cards/8.png'
import img_9 from '../../../assets/img/cards/9.png'
import img_10 from '../../../assets/img/cards/10.png'
import img_11 from '../../../assets/img/cards/11.png'
import img_12 from '../../../assets/img/cards/12.png'
import img_13 from '../../../assets/img/cards/13.png'
import img_14 from '../../../assets/img/cards/14.png'
import img_15 from '../../../assets/img/cards/15.png'
import img_16 from '../../../assets/img/cards/16.png'
import img_17 from '../../../assets/img/cards/17.png'
import img_18 from '../../../assets/img/cards/18.png'
import img_19 from '../../../assets/img/cards/19.png'
import img_20 from '../../../assets/img/cards/20.png'
import img_21 from '../../../assets/img/cards/21.png'
import img_22 from '../../../assets/img/cards/22.png'
import img_23 from '../../../assets/img/cards/23.png'
import img_24 from '../../../assets/img/cards/24.png'
import img_25 from '../../../assets/img/cards/25.png'
import img_26 from '../../../assets/img/cards/26.png'
import img_27 from '../../../assets/img/cards/27.png'
import img_28 from '../../../assets/img/cards/28.png'
import img_29 from '../../../assets/img/cards/29.png'
import img_30 from '../../../assets/img/cards/30.png'

const images = [
  img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10,
  img_11, img_12, img_13, img_14, img_15, img_16, img_17, img_18, img_19, img_20,
  img_21, img_22, img_23, img_24, img_25, img_26, img_27, img_28, img_29, img_30,
]

interface ModeProps {
  modeName: string
}

export function Mode(props: ModeProps) {
  const [selectedCard, addCard] = useState([])

  const pushCard = (index: number) => {
    if(selectedCard.length < 5) {
      //@ts-ignore
      addCard(oldArray => [ ...oldArray, images[index] ])
    }
  }

  return (
    <StyledMode>
      <h1>{ props.modeName }</h1>

      <div className='mode-wrapper'>
        <div className='cards-wrapper'>
          {images.map((card, index) => (
            <div key={index} onClick={() => pushCard(index)}>
              <Card key={index} img={ images[index] } />
            </div>
          ))}
        </div>
      </div>
    </StyledMode>
  )
}
