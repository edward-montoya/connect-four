import useGame from "../../hook/useGame";
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import Poster from "../../components/Poster/Poster";
import './Game.scss';
import PlayerOne from '../../assets/images/player-one.svg';
import PlayerTwo from '../../assets/images/player-two.svg'
import useMousePosition from "../../hook/useMousePosition";
import useFieldGame from "../../hook/useFieldGame";
import useScreenSize from "../../hook/useScreenSize";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {

    const navigate =useNavigate();
    const { currentPlayer, userPlay, timer, restart: restartGame, continueTimer, pauseTimer, setWinner, playAgain: playAgainGame, playerInfo, pause } = useGame();
    const { margin, partition, lowerLimit, upperLimit, isMobile } = useScreenSize();
    const { getColumnByMousePosition, userPosition } = useMousePosition(margin, partition, upperLimit, lowerLimit);
    const { field, winner, addItemToTheField, restart: restartField } = useFieldGame();

    const restart = () => {
        restartGame();
        restartField();
    };

    const quitGame = () => {
        restartGame();
        restartField();
        navigate('/');
    };

    const playAgain = () => {
        playAgainGame();
        restartField();
    }

    useEffect(() => {
        if (winner !== null) {
            setWinner(winner);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winner]);

    const players = useMemo(() => {
        if (playerInfo) {
            return playerInfo.map(info => info.score);
        }
        return [0 , 0]
    }, [playerInfo]);

    return (
        <div className="game">
            <Header quitGame={quitGame} pauseGame={pauseTimer} continueGame={continueTimer} restart={restart} />
            <div className="game__container">
                <div className="game__player-1">
                    <Player imagePosition="left" playerImage={PlayerOne} playerName="PLAYER 1" score={players[0]} />
                </div>
                <Board pause={pause} currentPlayer={currentPlayer} userPlay={userPlay} field={field} addItemToTheField={addItemToTheField} userPosition={userPosition} getColumn={getColumnByMousePosition} isMobile={isMobile} />
                <div className="game__player-2">
                    <Player imagePosition="right" playerImage={PlayerTwo} playerName="PLAYER 2" score={players[1]} />
                </div>
            </div>
            <Poster playAgain={playAgain} currentPlayer={currentPlayer} timer={timer} winner={winner} />
        </div>
    )
}

export default Game;