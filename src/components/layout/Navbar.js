import React from 'react';
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ icon, title }) => {

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <FontAwesomeIcon icon={icon} />
                {title}
            </h1>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Developer Finder',
    icon: '{faGlassCheers}'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar
