import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

const HOC = () => {
    return (
        <>
            <ClickCounter />
            <HoverCounter />
        </>
    )
}

export default HOC;