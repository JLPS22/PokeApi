import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './components/pages/routes'
import { GlobalStyled } from './components/styled-components'
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

export default App