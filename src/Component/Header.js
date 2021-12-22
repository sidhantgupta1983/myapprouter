import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <Link to="/" class="navbar-brand" href="#">Shopify</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to='/home' class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/product' class="nav-link" href="#">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' class="nav-link" href="#">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link" href="#">Contact</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Header;
