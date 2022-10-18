import React from 'react';

const ChildErrorHandlingLifecycle = ({heroName}) => {
    if(heroName === 'Joker'){
        throw new Error('Not a hero!');
    }

    return (
        <div>{heroName}</div>
    )
}

export default ChildErrorHandlingLifecycle;