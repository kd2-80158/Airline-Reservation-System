import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function SignoutDropdown() {
    const handleLogout = () => {
        // Implement logout functionality here
        console.log('Logged out');
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}><FontAwesomeIcon icon={faUser} /> Logout</Dropdown.Item>
                <Dropdown.Item href="/login"><FontAwesomeIcon icon={faUser} /> Login</Dropdown.Item>
                <Dropdown.Item href="/profile"><FontAwesomeIcon icon={faUser} /> My Profile</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SignoutDropdown;
