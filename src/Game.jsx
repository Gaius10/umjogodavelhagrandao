import { createContext } from "react";
import useGame from "./hooks/useGame";
import { TicTacToe } from "./components/TicTacToe";

export default function Game({ game }) {
    const GameContext = createContext();

    return (
        <GameContext.Provider value={game}>
            <TicTacToe context={GameContext} />
        </GameContext.Provider>
    );
}