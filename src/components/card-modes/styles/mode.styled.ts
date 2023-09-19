import styled from 'styled-components'

export const StyledMode = styled.div.attrs(() => ({
  className: 'mode',
}))`
  --header-height: 3rem;
  --mode-header-height: 5rem;
  --mode-wrapper-height: calc(100% - var(--mode-header-height));
  
  height: calc(100% - var(--header-height));
  width: 100%;
  
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--mode-header-height);
  }
  
  .mode-wrapper {
    width: 100%;
    height: var(--mode-wrapper-height);
    padding: 0 2rem;
    
    .cards-wrapper {
      width: 100%;
      height: 100%;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(3, 30%);
    }
  }
`
