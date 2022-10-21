import { useReducer } from 'react';

const actionTypes = {
    toggle: 'TOGGLE',
    on: 'ON',
    off: 'OFF',
}

const toggleReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.toggle: {
            return { on: !state.on }
        }
        case actionTypes.on: {
            return { on: true }
        }
        case actionTypes.off: {
            return { on: false }
        }
        default: {
            throw new Error(`Unhandled type: ${action.type}`)
        }
    }
}

const useToggle = ({reducer = toggleReducer} = {}) => {
    const [{on}, dispatch] = useReducer(reducer, {on: false});

    const toggle = () => dispatch({type: actionTypes.toggle});
    const setOn = () => dispatch({type: actionTypes.on});
    const setOff = () => dispatch({type: actionTypes.off});
  
    return { on, toggle, setOn, setOff };
}

export {useToggle, actionTypes, toggleReducer};