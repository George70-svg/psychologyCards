import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledHeader = styled.div.attrs(() => ({
  className: 'app-header',
}))`
  display: flex;
  justify-content: center;
  height: 3rem;
  width: 100%;
  background-color: ${() => commonStyle.colors.grey500};


  .links-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    .link {

    }
  }
`
