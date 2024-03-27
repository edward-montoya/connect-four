import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss'
import Game from './pages/Game/Game'
import Home from './pages/Home/Home'
import Rules from './pages/Rules/Rules';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "game",
      element: <Game />
    },
    {
      path: "rules",
      element: <Rules />
    }
  ]);

  return (
    <main>
      <h1 className='sr-only'>Connect four</h1>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
