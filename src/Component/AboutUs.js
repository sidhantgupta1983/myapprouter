import React from 'react'
import {Link} from 'react-router-dom'


const AboutUs = () => {
    return (
        <div>
            
            <div class="card">
                <div class="card-header">
                    About Us
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to='/about' href="#" class="btn btn-primary">Go somewhere</Link>
                </div>
                </div>
        </div>
    )
}

export default AboutUs;
