import io from 'socket.io-client';
import { INITIALIZE, PLAYER_BET, PLAYER_STAY, PLAYER_HIT } from './constants'

const socketMiddleware = ({ getState, dispatch }) => {

    console.log('trying to connect');
    let socket = io.connect('/tables');
    const onConnected = (event) => {
        socket.emit('connected', 'connectedBack from redux')
    }

    // // Dispatch actions on incoming
    // socket.on("message", (message) => {
    //     store.dispatch({
    //         type: "SOCKET_MESSAGE_RECEIVED",
    //         payload: message
    //     });
    // });

    const onInit = (state) => {
        console.log('onInit called')
        dispatch({
            type:INITIALIZE,
            payload: state
        })
    }

    // dispatch on outgoing
    return dispatch => action => {

        socket.on('connected', onConnected);
        socket.on('init', onInit);

        if (action.type === PLAYER_BET) {
            socket.emit('BET', action.payload);
            return dispatch(action);
        } else if (action.type === PLAYER_HIT) {
            socket.emit('HIT', action.payload);
            return;
        } else if (action.type === PLAYER_STAY) {
            socket.emit('STAY', action.payload);
            return;
        } else if (action.type === 'JOIN_PUBLIC') {
            socket.emit('JOIN_PUBLIC', action.payload);
            return;
        }

        return dispatch(action);
    }
}

export default socketMiddleware;