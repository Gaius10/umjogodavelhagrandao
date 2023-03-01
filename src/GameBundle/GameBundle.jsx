
import { createContext } from 'react';
import useGameBundle from './useGameBundle';
import { GameBundleView } from './GameBundleView';

export default function GameBundle(props) {
    const bundle = useGameBundle();
    const BundleContext = createContext();

    return (
        <BundleContext.Provider value={bundle}>
            <GameBundleView context={BundleContext}/>
        </BundleContext.Provider>
    );
}
