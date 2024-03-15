import React, { useMemo } from "react";
import { PLAYERS } from "../../@types/game";

import TurnBackgroundRed from '@/assets/images/turn-background-red.svg';
import TurnBackgroundYellow from '@/assets/images/turn-background-yellow.svg';

import './Poster.scss';

const Poster  = ({ currentPlayer, winner, timer }: { currentPlayer: PLAYERS, winner: string, timer: number }) => {

    const playerStyle = useMemo(() => {
        if (currentPlayer === PLAYERS.PLAYER_1) {
            return {
                backgroundImage: `url(${TurnBackgroundRed})`,
                backgroundRepeat: 'no-repeat',
            } as React.CSSProperties;
        }
        return {
            backgroundImage: `url(${TurnBackgroundYellow})`,
            backgroundRepeat: 'no-repeat'
        } as React.CSSProperties;
    }, [currentPlayer]);
     
    const title = useMemo(() => {
        if (currentPlayer === PLAYERS.PLAYER_1) {
            return 'YOUR TURN';
        }
        return 'PLAYER 2\'S TURN';
    }, [currentPlayer]);

    return (
        <article className="poster">
            {
                !winner ? 
                (
                    <div className="poster__player" style={playerStyle}>
                        <p className="poster__title">{ title }</p>
                        <p className="poster__timer">{ timer }s</p>
                    </div>
                ) : 
                <div className="poster__winner">
                    <p className="poster__w-title">PLAYER 1</p>
                    <p className="poster__w-subtitle">WINS</p>
                    <button className="poster__w-button">
                        PLAY AGAIN
                    </button>
                </div>
            }
        </article>
    );
}

export default Poster;