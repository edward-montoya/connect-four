import { useEffect, useMemo, useState } from "react";
import useMousePosition from "../../hook/useMousePosition";
import useFieldGame from "../../hook/useFieldGame";
import useTurnGame from "../../hook/useGame";
import { PLAYERS } from "../../@types/game";
import './Board.scss';

import MarkerRed from '@/assets/images/marker-red.svg';
import MarkerYellow from '@/assets/images/marker-yellow.svg';

import BoardBottomLarge from '@/assets/images/board-layer-black-large.svg';
import BoardTopLarge from '@/assets/images/board-layer-white-large.svg';
import BoardBottomSmall from '@/assets/images/board-layer-black-small.svg';
import BoardTopSmall from '@/assets/images/board-layer-white-small.svg';
import Chip from "../Chip/Chip";


const Game = () => {
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
  const { field, addItemToTheField, userPosition } = useFieldGame(x);
  const { currentPlayer, userPlay } = useTurnGame();


  const styles = useMemo(() => {
    return {
      backgroundImage: `url(${currentPlayer === PLAYERS.PLAYER_1 ? MarkerRed : MarkerYellow})`,
      position: 'absolute',
      left: `${userPosition}px`,
      top: -40,
    } as React.CSSProperties
  }, [userPosition, currentPlayer]);

  const play = () => {
    addItemToTheField(currentPlayer);
    userPlay();
  }
  
  return (
    <section className='game'>
      <div className='game__board'>
        <picture style={{ position: 'absolute', top: 0 }}>
          <source
            media="(min-width: 560px)"
            srcSet={BoardBottomLarge}
          />
          <img
            src={BoardBottomSmall}
            alt=''
          />
        </picture>
        <div onClick={play} className='game__selector' style={styles}></div>
        {
          field.map((element) => (
            <Chip key={`element-${element.i}-${element.j}`} element={element} isMobile={isMobile} />
            )
          )
        }
        <picture onClick={play} style={{ position: 'absolute', top: 0 }}>
          <source
            media="(min-width: 560px)"
            srcSet={BoardTopLarge}
          />
          <img
            src={BoardTopSmall}
            alt=''
          />
        </picture>
      </div>
    </section>
  )
}

export default Game;