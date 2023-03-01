import { useState } from "react";
import createGame from "./GameContext";
import { IoIosBowtie } from 'react-icons/io'

export default function useGame(gameId, playHandler, nextPlayer) {
    const [ game, setGame ] = useState(createGame(gameId));

    game.nextPlayer = () => {
        return nextPlayer(game);
    }

    game.play = (fieldIndex) => {
        if (game.table[fieldIndex] !== null) {
            return game;
        }

        game.table[fieldIndex] = game.nextPlayer();

        setGame(Object.assign({}, game));
        playHandler(fieldIndex, game);
    };

    game.winner = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];

            if (game.table[a] !== null &&
                game.table[a] === game.table[b] &&
                game.table[a] === game.table[c]
            ) {
                return game.table[a];
            }
        }

        if (game.table.filter(a => a === null).length === 0) {
            return {
                icon: <IoIosBowtie className="icon" />,
                className: 'drawn'
            };
        }

        return null;
    };

    game.activated = () => {
        game.isActive = true;
        const newGame = Object.assign({}, game);
        setGame(newGame);
        return newGame;
    };

    game.unactivated = () => {
        game.isActive = false;
        const newGame = Object.assign({}, game);
        setGame(newGame);
        return newGame;
    };

    return game;
}
