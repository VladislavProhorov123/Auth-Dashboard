import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Dashboard from './components/Dashboard'
import Signin from './components/Signin'
import Signup from './components/Signup'

export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/signin', element: <Signin />},
  {path: '/signup', element: <Signup />},
])
