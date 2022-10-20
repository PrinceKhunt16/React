import React, { useState } from 'react';

const withCounter = (WrapperComponent, num = 1) => {
    const InnerComponent = (props) => {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + num);
        }

        return (
            <div>
                <WrapperComponent
                    count={count}
                    increment={increment}
                    {...props}
                />
            </div>
        )
    }

    return InnerComponent;
}

export default withCounter;