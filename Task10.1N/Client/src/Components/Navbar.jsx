import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <>
            <div class="form-holder">
                DEV@Deakin
                <input type="email" class="form-control" name="email" placeholder="search" required="required" />
                <button type="Post" class="btn btn-lg btn-primary btn-block">Post</button>
                <button type="Login" class="btn btn-lg btn-secondary btn-block">Login</button>
            </div>


        </>
    );
}

export default Navbar;