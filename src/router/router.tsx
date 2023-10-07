import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Decks } from '@components/decks/decks'
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
        path: 'decks',
        element: <Decks />,
        children: []
      },
    ]
  },
])
