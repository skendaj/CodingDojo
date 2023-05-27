import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

    return (
        <div>
            <Link to={'./players/list'}>Manage Players</Link> &nbsp;|&nbsp; &nbsp;
            <Link to={'/status/game/1'}>Manage Player Status</Link>
        </div>
    )
}
export default Navbar;