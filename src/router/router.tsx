import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { CardModes } from '@components/card-modes/card-modes'
import { Login } from '@components/login/login'

import { Root } from '../App'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'modes',
        element: <CardModes />,
        children: []
      },
    ]
  },
])
