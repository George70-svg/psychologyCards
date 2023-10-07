import styled from 'styled-components'

export const StyledDeckModes = styled.div.attrs(() => ({
  className: 'deck-modes',
}))`
  height: 100%;
  width: 100%;
  
  --header-height: 3rem;
  --main-height: calc(100vh - var(--header-height));
  --decks-header-height: 5rem;
  --decks-container-height: calc(var(--main-height) - var(--decks-header-height));
  
  .app-header {
    height: var(--header-height);
  }
  
  .decks-wrapper {
    width: 100%;
    height: var(--main-height);
    
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--decks-header-height);
    }
    
    .deck-slider {
      width: 100%;
      height: var(--decks-container-height);
    }
  }
`
