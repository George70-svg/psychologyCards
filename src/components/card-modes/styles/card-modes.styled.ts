import styled from 'styled-components'

export const StyledCardModes = styled.div.attrs(() => ({
  className: 'card-modes',
}))`
  height: 100%;
  width: 100%;

  --header-height: 3rem;
  --main-height: calc(100vh - var(--header-height));
  --modes-header-height: 5rem;
  --modes-container-height: calc(var(--main-height) - var(--modes-header-height));
  
  .app-header {
    height: var(--header-height);
  }
  
  .modes-wrapper {
    width: 100%;
    height: var(--main-height);
    
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--modes-header-height);
    }
    
    .mode-slider {
      width: 100%;
      height: var(--modes-container-height);
    }
  }
`
