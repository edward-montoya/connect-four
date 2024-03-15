import { useState } from "react";
import { PLAYERS } from "../@types/game";

const useGame = () => {
    const [currentPlayer, setCurrentPlayer] = useState<PLAYERS>(PLAYERS.PLAYER_1);
    const [timer, setTime] = useState(30);

    const userPlay = () => {
        if (currentPlayer === PLAYERS.PLAYER_1) {
            setCurrentPlayer(PLAYERS.PLAYER_2);
        }
        if (currentPlayer === PLAYERS.PLAYER_2) {
            setCurrentPlayer(PLAYERS.PLAYER_1);
        }
    }

    const startTimer  = () => {
        setInterval(() => {
            setTime((prev) => prev - 1);
            if (timer === 0) {
                setTime(30);
                userPlay();
            }
        })
    }

    return {
        currentPlayer, userPlay, winner: '', timer, startTimer
    }
};

export default useGame;