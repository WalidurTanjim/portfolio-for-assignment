import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLay from './layout/MainLay'
import Home from './pages/Home/Home/Home'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <MainLay />, children: [
        {path: '/', element: <Home />}
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
