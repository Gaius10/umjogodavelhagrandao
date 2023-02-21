import { useContext } from 'react';
import './TicTacToeBundle.css'
import Game from "../Game";

export function TicTacToeBundle({ context }) {
    const bundle = useContext(context);

    console.log(bundle);
    console.log(bundle.winner());

    const bundleView = <BundleView bundle={bundle} />
    const winnerView = <WinnerView winner={bundle.winner()} />

    return (
        <div className="table bundle">
            <div>
                {winnerView}
                {bundleView}
            </div>
        </div>
    );
}

function BundleView({ bundle }) {
    return <>
        <div className="row bundle-row">
            <Field game={bundle.games[0]} />
            <Field game={bundle.games[1]} />
            <Field game={bundle.games[2]} />
        </div>
        <div className="row bundle-row">
            <Field game={bundle.games[3]} />
            <Field game={bundle.games[4]} />
            <Field game={bundle.games[5]} />
        </div>
        <div className="row bundle-row">
            <Field game={bundle.games[6]} />
            <Field game={bundle.games[7]} />
            <Field game={bundle.games[8]} />
        </div>
    </>;
}

function WinnerView({ winner }) {
    if (winner === null) return;

    return (
        <div className={ `field winner ${winner.className} bundle-winner` }>
            {winner.icon}
        </div>
    );
}

function Field({ game }) {
    return <div className='game-cell'><Game game={game} /></div>
}
