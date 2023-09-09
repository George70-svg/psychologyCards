import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledModeSlider = styled.div.attrs(() => ({
  className: 'mode-slider',
}))`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  width: 100%;
  
  .slide-container {
    flex-basis: 70%;
    overflow: hidden;
    
    .slide-list {
      display: flex;
      transition: transform .3s ease-in-out;

      .item-outer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 33.33%;
        height: 25rem;
        padding: 2rem;
        
        .item-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: ${() => commonStyle.colors.white};
          color: ${() => commonStyle.colors.grey800};
        }
      }
    }
  }
`
