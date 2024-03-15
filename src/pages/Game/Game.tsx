import useGame from "../../hook/useGame";
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import Poster from "../../components/Poster/Poster";
import './Game.scss';
import PlayerOne from '../../assets/images/player-one.svg';
import PlayerTwo from '../../assets/images/player-two.svg'

const Game = () => {
    const { currentPlayer, userPlay, timer } = useGame();
    return (
        <div className="game">
            <Header />
            <div className="game__container">
                <div className="game__player-1">
                    <Player imagePosition="left" playerImage={PlayerOne} playerName="PLAYER 1" score={0} />
                </div>
                <Board currentPlayer={currentPlayer} userPlay={userPlay} />
                <div className="game__player-2">
                    <Player imagePosition="right" playerImage={PlayerTwo} playerName="PLAYER 2" score={0} />
                </div>
            </div>
            <Poster currentPlayer={currentPlayer} timer={timer} winner="" />
        </div>
    )
}

export default Game;