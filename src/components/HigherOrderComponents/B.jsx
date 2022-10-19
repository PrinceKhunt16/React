import React from 'react';
import Counter from './Counter';

const B = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <button onMouseOver={props.increment}>A {props.count} Mouse Over</button>
        </div>
    )
}

export default Counter(B);