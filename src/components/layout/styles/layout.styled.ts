import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledLayout = styled.div.attrs(() => ({
  className: 'layout',
}))`
  --header-height: 3rem;
  --layout-header-height: 5rem;

  width: 100%;
  height: 100%;
  
  .layout-wrapper {
    width: 100%;
    height: calc(100% - var(--header-height));
    padding: 0 2rem;
    
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--layout-header-height);
    }
    
    .layout-container {
      height: calc(100% - var(--layout-header-height));
    }
  }
`
