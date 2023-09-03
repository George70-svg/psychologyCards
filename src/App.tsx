import React from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { Styles } from './styles'

function App() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  return (
    <>
      <Styles colorTheme={colorTheme}/>
    </>
  )
}

export default App
