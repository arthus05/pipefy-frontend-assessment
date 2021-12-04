import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const theme: Theme = {
    screen: {
      small: false,
      medium: false,
      large: true
    }
  }

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle/>
      {children}
    </StyledThemeProvider>
  )
}
