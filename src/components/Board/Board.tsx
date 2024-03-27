import { useMemo } from "react";
import { FieldItem, PLAYERS } from "../../@types/game";
import './Board.scss';

import MarkerRed from '@/assets/images/marker-red.svg';
import MarkerYellow from '@/assets/images/marker-yellow.svg';

import BoardBottomLarge from '@/assets/images/board-layer-black-large.svg';
import BoardTopLarge from '@/assets/images/board-layer-white-large.svg';
import BoardBottomSmall from '@/assets/images/board-layer-black-small.svg';
import BoardTopSmall from '@/assets/images/board-layer-white-small.svg';
import Chip from "../Chip/Chip";

const Board = ({ currentPlayer, userPlay,
  field, addItemToTheField, isMobile, userPosition, getColumn, pause }: { currentPlayer: PLAYERS,
     userPlay: () => void, field: FieldItem[], 
     addItemToTheField: (currentPlayer: PLAYERS, column: number) => void, userPosition?: number | undefined, isMobile: boolean, getColumn?: () => number, pause: boolean }) => {

  const styles = useMemo(() => {
    return {
      backgroundImage: `url(${currentPlayer === PLAYERS.PLAYER_1 ? MarkerRed : MarkerYellow})`,
      position: 'absolute',
      left: `${userPosition}px`,
      top: -40,
    } as React.CSSProperties
  }, [userPosition, currentPlayer]);

  const play = (column?: number) => {
    if (!pause) {
      const desktopColumn = userPosition && !isMobile && getColumn && getColumn() || column || 0;
      addItemToTheField(currentPlayer, desktopColumn);
      userPlay();
    }
  }

  return (
    <section className='board'>
      <div className='board__container'>
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
        {
          !pause ? <div onClick={() => play()} className='board__selector' style={styles}></div> : <></>
        }
        {
          field.map((element) => (
            <Chip key={`element-${element.i}-${element.j}`} element={element} isMobile={isMobile} />
          )
          )
        }
        <picture style={{ position: 'absolute', top: 0 }}>
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

export default Board;