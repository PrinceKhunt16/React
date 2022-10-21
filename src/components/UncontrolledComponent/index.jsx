import React, { useRef } from 'react';

const UncontrolledComponent = () => {
    const inputRef = useRef(null);

    /*
    
    Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

    */

    const submitForm = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <form>
                <input ref={inputRef} type="text" />
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent;