import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledModes = styled.div.attrs(() => ({
  className: 'modes',
}))`
  --header-height: 3rem;
  --modes-header-height: 5rem;

  width: 100%;
  height: calc(100% - var(--header-height));
  
  .modes-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--modes-header-height);
    }
    
    .links-container {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      height: calc(100% - var(--modes-header-height));
      
      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 15rem;
        background-color: ${() => commonStyle.colors.grey500};
        border-radius: ${() => commonStyle.radii.radius1};
      }
    }
  }
`
