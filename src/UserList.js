import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                // setListOfUsers(res.json());
                setListOfUsers(res.data);
            } catch (error) {
                console.error("error", error);
            }
        };

    fetchData();
    },[]);

    return (
        <div className='user-list'>
            <h2>User List</h2>
            <ul>
               
                {listOfUsers.map(user => (
                    <li key={user.id}>
                        <b>Name:</b>{user.name}, <b>Email:</b>{user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;