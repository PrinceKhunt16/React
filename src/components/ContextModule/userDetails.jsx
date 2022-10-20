import React, { useState } from 'react';
import GetUserDetails from './GetUserDetails';
import { useUserDispatchContext, useUserStateContext } from './userContext';
import { updateUserDetails } from './userReducer';

const ContextModule = () => {
    const userState = useUserStateContext();
    const dispatch = useUserDispatchContext();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        address: ''
    });
    
    const handleChange = (e) => {
        e.preventDefault();

        const obj = {
            ...userState.userDetails,
            ...user
        };

        updateUserDetails(dispatch, obj);
    }

    return (
        <div>
            <GetUserDetails />
            <form>
                <input
                    type='text'
                    name='firstName'
                    value={user.firstName}
                    onChange={(e) => setUser({...user, firstName: e.target.value})}
                />
                <br />
                <input
                    type='text'
                    name='lastName'
                    value={user.lastName}
                    onChange={(e) => setUser({...user, lastName: e.target.value})}
                />
                <br />
                <input
                    type='text'
                    name='address'
                    value={user.address}
                    onChange={(e) => setUser({...user, address: e.target.value})}
                />
                <br />
                <button onClick={handleChange} type='submit'>Save</button>
            </form>
        </div>
    )
}

export default ContextModule;