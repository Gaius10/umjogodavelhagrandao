import { createContext } from "react";
import { GameView } from './GameView';

export default function Game({ game }) {
    const GameContext = createContext();

    return (
        <GameContext.Provider value={game}>
            <GameView context={GameContext} />
        </GameContext.Provider>
    );
}
