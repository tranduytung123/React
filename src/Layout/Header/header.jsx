import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className='containerHeader'>
            <div className='containerHeader_left'>
                <button>Create New Task</button>
            </div>

            <div className='containerHeader_right'>
                <input placeholder='Type something to search'></input>
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;