import React, {useState} from 'react';
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);

    };




    return (
        <header>
            <div className="container">
                <h2>Logo.<span>com</span></h2>

                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`${isOpen ? 'open' : ''}`}>
                    <div className="menu_container">
                    <p>Our places</p>
                    <p>Support</p>
                    <p>Contact</p>
                    <p>Sing in</p>
                    </div>
                </nav>
                <button>
                    Get the app
                    <FontAwesomeIcon className="button_icon" icon={faDownload}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
