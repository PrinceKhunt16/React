import React from 'react';
import { useUserStateContext } from './userContext';

const GetUserDetails = () => {
    const userState = useUserStateContext();

    return (
        <div>
            <div>User Details</div>
            <div>FirstName {userState.userDetails.firstName}</div>
            <div>LastName {userState.userDetails.lastName}</div>
            <div>Address {userState.userDetails.address}</div>
        </div>
    )
}

export default GetUserDetails;