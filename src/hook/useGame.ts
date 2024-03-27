import { useEffect, useState } from "react";
import { PLAYERS, PlayerInformation } from "../@types/game";
import useInterval from "./useInterval";

const basePlayerInfo = [{
    player: PLAYERS.PLAYER_1,
    score: 0,
},
{
    player: PLAYERS.PLAYER_2,
    score: 0,
}];

const useGame = () => {
    const [initialPlayer, setInitialPlayer] = useState<PLAYERS>(PLAYERS.PLAYER_1);
    const [currentPlayer, setCurrentPlayer] = useState<PLAYERS>(PLAYERS.PLAYER_1);
    const [timer, setTime] = useState(30);
    const [pause, setPause] = useState(false);
    const [playerInfo, setPlayerInfo] = useState<PlayerInformation[]>([...basePlayerInfo]);

    const userPlay = () => {
        setTime(30);
        if (currentPlayer === PLAYERS.PLAYER_1) {
            setCurrentPlayer(PLAYERS.PLAYER_2);
        }
        if (currentPlayer === PLAYERS.PLAYER_2) {
            setCurrentPlayer(PLAYERS.PLAYER_1);
        }
    }

    useInterval(() => {
        if (!pause) {
            setTime((prev) => prev - 1);
        }
    }, 1000);

    useEffect(() => {
        if (timer === 0) {
            userPlay();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer]);

    const pauseTimer = () => {
        setPause(true);
    }

    const continueTimer = () => {
        setPause(false);
    }

    const setWinner = (winner: PLAYERS | undefined | null) => {
        if (winner === null || winner === undefined) {
            return;
        }
        pauseTimer();
        const copyPlayers = [...playerInfo];
        copyPlayers[winner].score += 1;
        setPlayerInfo(copyPlayers);
    }

    const restart = () => {
        setCurrentPlayer(PLAYERS.PLAYER_1);
        setPause(false);
        setTime(30);        
        setPlayerInfo([...basePlayerInfo]);
    }

    const playAgain = () => {
        const newInitial = (initialPlayer === PLAYERS.PLAYER_1) ? PLAYERS.PLAYER_2 : PLAYERS.PLAYER_1;
        setInitialPlayer(newInitial);
        setCurrentPlayer(newInitial);
        setPause(false);
        setTime(30);
    }

    return {
        currentPlayer, userPlay, winner: '', timer, pauseTimer, pause,
        continueTimer, setWinner, restart, playAgain, playerInfo
    }
};

export default useGame;