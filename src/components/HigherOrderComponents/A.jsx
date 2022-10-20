import React from 'react';
import Counter from './withCounter';

const A = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={props.increment}>A {props.count} Click</button>
        </div>
    )
}

export default Counter(A, 5);