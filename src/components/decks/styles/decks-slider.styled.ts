import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledDecksSlider = styled.div.attrs(() => ({
  className: 'deck-slider',
}))`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  
  .slide-container {
    overflow: hidden;
    flex-basis: 60%;
    height: 100%;
    
    .slide-list {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform ${() => commonStyle.times.time5}s ease;

      .item-outer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 33.33%;
        height: 45%;
        padding: 2rem;
        transition: height ${() => commonStyle.times.time3}s ease;
        
        .item-inner {
          display: flex;
          justify-content: center;
          align-items: start;
          width: 100%;
          height: 100%;
          border-radius: ${() => commonStyle.radii.radius1};
          background-color: ${() => commonStyle.colors.grey200};
          background-size: cover;
          color: ${() => commonStyle.colors.grey800};
          box-shadow: ${() => commonStyle.shadows.halfHorShadow};
          transition: transform ${() => commonStyle.times.time3}s ease;
          
          p {
            margin-top: 1rem;
            font-size: ${() => commonStyle.fonts.fs6};
            color: ${() => commonStyle.colors.grey200};
            filter: drop-shadow(1px 1px 1px ${() => commonStyle.colors.grey900});
          }
        }
      }
      
      .center-item {
        height: 60%;
      }
    }
  }
  
  .button {
    height: 4rem;
    width: 4rem;
    border-radius: ${() => commonStyle.radii.radiusFull};
  }
`
