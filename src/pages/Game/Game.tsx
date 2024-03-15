import useGame from "../../hook/useGame";
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import Poster from "../../components/Poster/Poster";
import './Game.scss';

const Game = () => {
    const { currentPlayer, userPlay, timer } = useGame();
    return (
        <div className="game">
            <Header />
            <div className="game__container">
                <Player playerName="PLAYER 1" score={0} />
                <div >
                    <Board currentPlayer={currentPlayer} userPlay={userPlay} />
                </div>
                <Player playerName="PLAYER 2" score={0} />
            </div>
            <Poster currentPlayer={currentPlayer} timer={timer} winner="" />
        </div>
    )
}

export default Game;