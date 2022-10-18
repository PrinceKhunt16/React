import React, { useState, useEffect } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

const MainComponent = () => {
    const [toggle, setToggle] = useState(true);
    const [users, setUsers] = useState([]);
    console.log('MainComponent rendered');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://reqres.in/api/users/');
            const json = await response.json();
            setUsers(json.data);
        }

        fetchUsers();
    }, []);

    return (
        <div>
            <div>Hello, Good {toggle ? 'Morning' : 'Afternoon'}</div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <ClassComponent />
            <FunctionalComponent data={users} />
        </div>
    )
}

export default MainComponent;
