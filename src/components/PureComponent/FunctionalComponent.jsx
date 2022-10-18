import React, { memo } from 'react';

const FunctionalComponent = (props) => {
    console.log('Users component renders');

    return (
        <>
            {console.log(props.data)}
        </>
    )
}

const UsersMemo = memo(FunctionalComponent);
export default UsersMemo;