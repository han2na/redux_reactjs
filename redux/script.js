// import { createStore } from 'https://cdn.skypack.dev/redux';

// My redux
function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribers = [];
    return {
        getState() { return state; },
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(subscribe) {
            subscribers.push(subscribe);
        }
    }
}
const initState = 0;

function bankReducer(state = initState, action) {
    switch (action.type) {
        case 'DESPOSIT':
            return action.payload + state;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

const store = window.store = createStore(bankReducer);

// action
function actionDesposit(payload) {
    return {
        type: "DESPOSIT",
        payload
    }
}
function actionWithdraw(payload) {
    return {
        type: "WITHDRAW",
        payload
    }
}

// Listener
store.subscribe(() => {
    render();
});

// DOM events
const desposit = document.querySelector("#desposit");
const withdraw = document.querySelector("#withdraw");

desposit.onclick = function () {
    store.dispatch(actionDesposit(10));
}
withdraw.onclick = function () {
    store.dispatch(actionWithdraw(10));
}

function render() {
    const output = document.querySelector("#output");
    output.textContent = store.getState();
}

render();