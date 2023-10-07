import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, RouterProvider, useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { IStore } from '@store/store'
import { withDelay } from '@utils/common'
import { Login } from '@components/login/login'
import { Decks } from '@components/decks/decks'
import { Modes } from '@components/modes/modes'
import { Cards } from '@components/cards/cards'

import { router } from './router/router'
import { Styles } from './styles'

function App() {
  return <RouterProvider router={ router } />
}

export function Root() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const navigate = useNavigate()
  const [isLoading, setLoading] = React.useState(true)

  useEffect(() => {
    withDelay(() => {
      setLoading(false)
      console.log('redirect')
      navigate('/decks')
    }, 1500)
  }, [ navigate ])

  const decks = [ 'first_deck', 'second_deck', 'third_deck', 'fourth_deck', 'fifth_deck', 'sixth_deck' ]

  return (
    <>
      <Styles colorTheme={ colorTheme } />

      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {!isLoading &&
        <Routes>
          <Route path="login" element={ <Login /> } />
          <Route path="decks" element={ <Decks /> } >
            {decks.map((deckName, index) => (
              <Route key={ index } path={ `${deckName}` } element={<Modes deckName={deckName} />} >
                <Route path="visible_mode" element={<Cards deckName={deckName} />} />
                <Route path="hidden_mode" element={<Cards deckName={deckName} />} />
              </Route>
            ))}
          </Route>
        </Routes>
      }
    </>
  )
}

export default App
