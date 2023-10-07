import React from 'react'
import { StyledLayout } from '@components/layout/styles/layout.styled'
import { Header } from '@components/header/header'

export function Layout() {
  return (
    <StyledLayout>
      <Header/>

      <div className='layout-wrapper'>
        <h1>Layout</h1>

        <div className='layout-container'>

        </div>
      </div>
    </StyledLayout>
  )
}
