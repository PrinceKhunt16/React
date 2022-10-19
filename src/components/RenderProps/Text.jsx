import React, { useState } from 'react';

const Text = (props) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input 
                type="text" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {props.renderProps(value)}
        </div>
    )
}

export default Text;