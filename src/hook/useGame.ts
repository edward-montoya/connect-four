import { useState } from "react";
import { PLAYERS } from "../@types/game";

const useTurnGame = () => {
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
        currentPlayer, userPlay
    }
};

export default useTurnGame;