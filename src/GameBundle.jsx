import { createContext } from "react";
import { TicTacToeBundle } from "./components/TicTacToeBundle";
import useBundle from "./hooks/useBundle";

export default function GameBundle(props) {
    const bundle = useBundle();
    const BundleContext = createContext();

    return (
        <BundleContext.Provider value={bundle}>
            <TicTacToeBundle context={BundleContext}/>
        </BundleContext.Provider>
    );
}
