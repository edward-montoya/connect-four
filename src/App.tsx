import './App.scss'
import Game from './components/Game/Game'
import Rules from './components/Rules/Rules'

//import MarkerYellow from '@/assets/images/counter-yellow-large.svg';

function App() {



  return (
    <main>
      <h1 className='sr-only'>Connect four</h1>
      <Game />
    </main>
  )
}

export default App
