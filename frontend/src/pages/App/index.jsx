import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Web3ContextProvider } from '../../Context'
import Home from '../Home'
import Units from '../Units'
import NavBar from '../../components/NavBar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/units', element: <Units /> }
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
