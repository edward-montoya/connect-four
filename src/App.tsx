import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.scss'
import useMousePosition from './hook/useMousePosition'
import useFieldGame, { FieldItem } from './hook/useFieldGame';

import MarkerRed from '@/assets/images/marker-red.svg';
import MarkerYellow from '@/assets/images/marker-yellow.svg';

import CounterRed from '@/assets/images/counter-red-large.svg';
import CounterYellow from '@/assets/images/counter-yellow-large.svg';
import CounterRedSmall from '@/assets/images/counter-red-small.svg';
import CounterYellowSmall from '@/assets/images/counter-yellow-small.svg';

import useTurnGame, { PLAYERS } from './hook/useTurnGame';
//import MarkerYellow from '@/assets/images/counter-yellow-large.svg';

const MOVE_LARGE_X = 90;
const MOVE_LARGE_Y = 88;
const MOVE_SMALL_X = 45;
const MOVE_SMALL_Y = 50;

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    }
  }, [])

  const { x } = useMousePosition();
  const tableRef = useRef<HTMLInputElement>(null);
  const { field, addItemToTheField, userPosition } = useFieldGame(x);
  const { currentPlayer, userPlay } = useTurnGame();

  const mapArray: Array<FieldItem> = useMemo(() => {
    const n = field.length;
    const m = field[0].length;
    const arr = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        arr.push({
          i, j, value: field[i][j] 
        })
      }
    }
    return arr;
  }, [field]);

  const styles = useMemo(() => {
    return {
      backgroundImage: `url(${currentPlayer === PLAYERS.PLAYER_1 ? MarkerRed : MarkerYellow})`,
      position: 'absolute',
      left: `${userPosition}px`,
      top: -40,
    } as React.CSSProperties
  }, [userPosition, currentPlayer]);

  function buildStyle(element: FieldItem) {
    const x_m = isMobile ? MOVE_SMALL_X : MOVE_LARGE_X;
    const y_m = isMobile ? MOVE_SMALL_Y : MOVE_LARGE_Y;

    const initial = isMobile ? 210 : 0;

    const tranformX = (element.i * x_m) + 12;
    const tranformY = 458 - (element.j * y_m) - initial;
    const icon = isMobile ? element.value === PLAYERS.PLAYER_1 ? CounterRedSmall : CounterYellowSmall : element.value === PLAYERS.PLAYER_1 ? CounterRed : CounterYellow;
    return {
      backgroundImage: `url(${icon})`, 
      backgroundRepeat: 'no-repeat',
      width: isMobile ? '41px' : '70px',
      height: isMobile ? '46px' : '75px',
      transform: `translate(${tranformX}px, ${tranformY}px)`
    } as React.CSSProperties;
  }

  const play = () => {
    addItemToTheField(currentPlayer === PLAYERS.PLAYER_1 ? PLAYERS.PLAYER_1 : PLAYERS.PLAYER_2);
    userPlay();
  }


  return (
    <main>
      <div ref={tableRef} className='table'>
      <div onClick={play} className='selector' style={styles}></div>
        {
          mapArray.map((element) => element.value !== null ? (<div key={`element-${element.i}-${element.j}`} className='item' style={buildStyle(element)}></div>) : '' )
        }
      </div>
    </main>
  )
}

export default App
