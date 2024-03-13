import CounterRed from '@/assets/images/counter-red-large.svg';
import CounterYellow from '@/assets/images/counter-yellow-large.svg';
import CounterRedSmall from '@/assets/images/counter-red-small.svg';
import CounterYellowSmall from '@/assets/images/counter-yellow-small.svg';
import { FieldItem, PLAYERS } from '../../@types/game';
import { useCallback } from 'react';

const MOVE_LARGE_X = 89;
const MOVE_LARGE_Y = 88;
const MOVE_SMALL_X = 45;
const MOVE_SMALL_Y = 50;

const Chip = ({element, isMobile}: {element: FieldItem, isMobile: boolean}) => {

    const buildStyle = useCallback((element: FieldItem) => {
        const x_m = isMobile ? MOVE_SMALL_X : MOVE_LARGE_X;
    const y_m = isMobile ? MOVE_SMALL_Y : MOVE_LARGE_Y;

    const initial = isMobile ? 210 : 0;

    const tranformX = (element.i * x_m) + 12;
    const tranformY = 458 - (element.j * y_m) - initial;
    let styles = {
      backgroundImage: `none`,
      backgroundRepeat: 'no-repeat',
      width: isMobile ? '41px' : '70px',
      height: isMobile ? '46px' : '75px',
      transition: `transform ${2000 - (285 * element.j)}ms ease-in`,
      transform: `translateX(${tranformX}px)`
    } as React.CSSProperties;
    if (element.value !== null) {
      const icon = isMobile ? (element.value === PLAYERS.PLAYER_1 ? CounterRedSmall : CounterYellowSmall) : element.value === PLAYERS.PLAYER_1 ? CounterRed : CounterYellow;
      styles = {
        ...styles,
        backgroundImage: `url(${icon})`,
        transform: `translate(${tranformX}px, ${tranformY}px)`
      }
    }
    return styles;
      }, [isMobile]);

    return (
        <div 
            className='game__chip'
            style={buildStyle(element)} />
    );
}

export default Chip;