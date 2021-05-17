import React from 'react'
import { Link } from 'react-router-dom';

export const Logout = () => {
    localStorage.removeItem("token");
    return (
        <div>
            <h1>Logged Out!!</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Logout;