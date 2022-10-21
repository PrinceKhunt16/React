import React, { useState } from 'react';

const ControlledComponent = () => {
    const [value, setValue] = useState('');

    /*
    
    Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.
    
    */

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default ControlledComponent;