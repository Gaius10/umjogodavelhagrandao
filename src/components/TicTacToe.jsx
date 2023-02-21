import { useContext } from 'react';
import { GiPadlock } from 'react-icons/gi';
import './TicTacToe.css'

export function TicTacToe({ context }) {
    const game = useContext(context);

    const gameView = <GameView game={game} />
    const winnerView = <WinnerView winner={game.winner()} game={game} />

    return (
        <div className="table">
            <div>
                {game.isActive ? '' : <InactivityOverlay />}
                {winnerView}
                {gameView}
            </div>
        </div>
    );
}

function GameView({ game }) {
    return <>
        <div className="row">
            <Field cellIndex={0} game={game} />
            <Field cellIndex={1} game={game} />
            <Field cellIndex={2} game={game} />
        </div>
        <div className="row">
            <Field cellIndex={3} game={game} />
            <Field cellIndex={4} game={game} />
            <Field cellIndex={5} game={game} />
        </div>
        <div className="row">
            <Field cellIndex={6} game={game} />
            <Field cellIndex={7} game={game} />
            <Field cellIndex={8} game={game} />
        </div>
    </>;
}

function WinnerView({ winner, game }) {
    if (winner === null) return;

    return (
        <div className={ `field winner ${winner.className}` }>
            {winner.icon}
        </div>
    );
}

function InactivityOverlay(props) {
    return (
        <div className="field inactivity-overlay">
            <GiPadlock className="icon"/>
        </div>
    );
}

function Field({ cellIndex, game }) {

    const player = game.table[cellIndex];

    const square = {
        className: player?.className,
        icon: player?.icon ?? game.nextPlayer().icon,
        play: () => game.play(cellIndex),
    };

    return (
        <div className={'field ' + square.className} onClick={square.play}>
            {square.icon}
        </div>
    );

}
