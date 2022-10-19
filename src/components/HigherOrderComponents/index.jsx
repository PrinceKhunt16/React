import React from 'react';
import A from './A';
import B from './B';

const HOC = () => {
    return (
        <div>
            <A name={'A'} />
            <B name={'B'} />
        </div>
    )
}

export default HOC;