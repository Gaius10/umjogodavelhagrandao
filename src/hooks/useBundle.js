import { useState } from "react";
import { IoIosBowtie } from "react-icons/io";
import useGame from "./useGame";

export default function useBundle() {
    const [bundle, setBundle] = useState({ moves: [] });

    function playHandler(move, game) {
        bundle.games[game.id] = game;
        bundle.games = bundle.games.map(game => {
            if (game.id === move) {
                return game.activated();
            }

            return game.unactivated();
        });

        if (bundle.games[move].winner() !== null) {
            bundle.games = bundle.games.map(g => g.activated());
        }

        bundle.moves.push(move);
        setBundle(Object.assign({}, bundle));
    }

    function nextPlayer(game) {
        return ((bundle.moves.length + 1) % 2 === 0) ?
            game.player2 :
            game.player1;
    }

    bundle.games = [
        useGame(0, playHandler, nextPlayer), useGame(1, playHandler, nextPlayer), useGame(2, playHandler, nextPlayer),
        useGame(3, playHandler, nextPlayer), useGame(4, playHandler, nextPlayer), useGame(5, playHandler, nextPlayer),
        useGame(6, playHandler, nextPlayer), useGame(7, playHandler, nextPlayer), useGame(8, playHandler, nextPlayer),
    ];

    bundle.winner = () => {
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

            if (bundle.games[a].winner() !== null &&
                bundle.games[a].winner()?.className === bundle.games[b].winner()?.className &&
                bundle.games[a].winner()?.className === bundle.games[c].winner()?.className
            ) {
                return bundle.games[a].winner();
            }
        }

        const isDrawn = bundle.games.filter(a => a.winner() === null).length === 0;

        if (isDrawn) {
            return {
                icon: <IoIosBowtie className="icon" />,
                className: 'drawn'
            };
        }

        return null;
    };

    return bundle;
}
