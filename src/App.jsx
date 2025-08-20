import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './components/pages/routes'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-context'

function App() {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyled />
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

const GlobalStyled = createGlobalStyle`
  * {
  margin: 0px;
  padding: 10px 0px 10px 0px;
}
`

export default App