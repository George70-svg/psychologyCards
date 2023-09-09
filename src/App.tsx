import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, RouterProvider, useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { IStore } from '@store/store'
import { withDelay } from '@utils/common'
import { Login } from '@components/login/login'
import { CardModes } from '@components/card-modes/card-modes'
import { Mode } from '@components/card-modes/components/mode'

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
      navigate('/modes')
    }, 1500)
  }, [ navigate ])

  const modes = [ 'first_mode', 'second_mode', 'third_mode', 'fourth_mode', 'fifth_mode', 'sixth_mode' ]

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
          <Route path="modes" element={ <CardModes /> } >
            {modes.map((mode, index) => (
              <Route key={ index } path={ `${mode}` } element={<Mode modeName={ mode } />} />
            ))}
          </Route>
        </Routes>
      }
    </>
  )
}

export default App
