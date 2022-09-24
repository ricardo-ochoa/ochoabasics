import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { darkTheme } from '../themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp