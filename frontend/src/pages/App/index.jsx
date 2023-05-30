import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Web3ContextProvider } from '../../Context'
import Home from '../Home'
import UnitsPage from '../UnitsPage'
import NavBar from '../../components/NavBar'
import ConectadoTemp from '../Conectado-Temp'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/units', element: <UnitsPage /> },
    { path: '/conectado', element: <ConectadoTemp /> }
  ])
  return routes
}

const App = () => {
  return (
    <Web3ContextProvider>
      <BrowserRouter>
        <AppRoutes /> 
        <NavBar />
      </BrowserRouter>
    </Web3ContextProvider>
  )
}

export default App
