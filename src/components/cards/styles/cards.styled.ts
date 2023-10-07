import styled from 'styled-components'

export const StyledCards = styled.div.attrs(() => ({
  className: 'cards',
}))`
  --cards-header-height: 5rem;
  
  height: 100%;
  width: 100%;
  
  .cards-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 2rem;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--cards-header-height);
    }
    
    .cards-container {
      height: calc(100% - var(--cards-header-height));
    }
  }
`
