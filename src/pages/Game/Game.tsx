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

const Game = () => {

    const { currentPlayer, userPlay, timer } = useGame();
    const { margin, partition, lowerLimit, upperLimit, isMobile } = useScreenSize();
    const { getColumnByMousePosition, userPosition } = useMousePosition(margin, partition, upperLimit, lowerLimit);
    const { field, addItemToTheField } = useFieldGame();

    return (
        <div className="game">
            <Header />
            <div className="game__container">
                <div className="game__player-1">
                    <Player imagePosition="left" playerImage={PlayerOne} playerName="PLAYER 1" score={0} />
                </div>
                <Board currentPlayer={currentPlayer} userPlay={userPlay} field={field} addItemToTheField={addItemToTheField} userPosition={userPosition} getColumn={getColumnByMousePosition} isMobile={isMobile} />
                <div className="game__player-2">
                    <Player imagePosition="right" playerImage={PlayerTwo} playerName="PLAYER 2" score={0} />
                </div>
            </div>
            <Poster currentPlayer={currentPlayer} timer={timer} winner="" />
        </div>
    )
}

export default Game;