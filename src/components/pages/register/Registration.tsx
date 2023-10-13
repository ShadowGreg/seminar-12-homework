
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Registration: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform registration logic here
        const userData = {
            username,
            password,
        };
        dispatch({ type: 'SET_USER_DATA', payload: userData });
        // Redirect to HomePage
        // You can use react-router-dom's useHistory hook or other navigation methods here
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;