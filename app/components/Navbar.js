import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="aligner">
                <Link to="/campuses">Campuses</Link>
            </div>
            <div className="aligner">
                <Link to="/students">Students</Link>
            </div>
        </div>
    )
}

export default Navbar;