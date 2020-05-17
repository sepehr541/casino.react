import io from 'socket.io-client';
import { INITIALIZE, UPDATE } from './constants';


const socketMiddleware = () => {
    console.log('trying to connect');
    let socket = io.connect('/tables');

    const onConnected = (event) => {
        socket.emit('connected', 'connectedBack from redux');
    }

    let init = false;
    // dispatch on outgoing
    return store => next => action => {
        //console.log('middleware called');

        // call back intialization block
        if (!init) {
            // console.log("Intializing callbacks on Socket");
            socket.on('connected', onConnected);

            socket.on('init', (payload) => {
                console.log('init event on socket');
                next({
                    type: INITIALIZE,
                    payload,
                })
            });

            socket.on('noTable', () => {
                alert("no Table Available");
            })

            socket.on('UPDATE', (payload)=> {
                next({
                    type: UPDATE,
                    payload,
                })
            });

            socket.on("INSUFFICIENT_CHIPS",  (payload) => {
                if (store.getState().playerId === payload.playerId)
                    alert('You do not have enough chips');
            });

            init = true;
        }

        socket.emit(action.type, action.payload)

        if (action.type === "LEAVE") {
            next(action);
        }
    }
}

export default socketMiddleware;