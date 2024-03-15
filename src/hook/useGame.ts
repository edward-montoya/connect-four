import { useState } from "react";
import { PLAYERS } from "../@types/game";

const useGame = () => {
    const [currentPlayer, setCurrentPlayer] = useState<PLAYERS>(PLAYERS.PLAYER_1);

    const userPlay = () => {
        if (currentPlayer === PLAYERS.PLAYER_1) {
            setCurrentPlayer(PLAYERS.PLAYER_2);
        }
        if (currentPlayer === PLAYERS.PLAYER_2) {
            setCurrentPlayer(PLAYERS.PLAYER_1);
        }
    }
    return {
        currentPlayer, userPlay, winner: '', timer: 0
    }
};

export default useGame;