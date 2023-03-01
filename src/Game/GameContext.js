import { FaTimes, FaRegCircle } from 'react-icons/fa';

export default function createGame(id) {
    return {
        id,
        isActive: true,
        table: [
            null, null, null,
            null, null, null,
            null, null, null,
        ],

        player1: new Player(<FaTimes className="icon" />, 'active1'),
        player2: new Player(<FaRegCircle className="icon" />, 'active2'),
    };
}

function Player(icon, className) {
    return { icon, className };
}
