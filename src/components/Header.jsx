import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Header = ({ onDownloadCV }) => {
    useEffect(() => {
        function myMenuFunction() {
            const menuBtn = document.getElementById('myNavMenu');
            if (menuBtn.className === 'nav-menu') {
                menuBtn.className += ' responsive';
            } else {
                menuBtn.className = 'nav-menu';
            }
        }
        const barsIcon = document.querySelector('.uil-bars');
        if (barsIcon) {
            barsIcon.addEventListener('click', myMenuFunction);
        }
        return () => {
            if (barsIcon) barsIcon.removeEventListener('click', myMenuFunction);
        };
    }, []);

    return (
        <nav id="header">
            <div className="nav-logo">
                <p className="nav-name">KSCODER</p>
                <span>.</span>
            </div>
            <div className="nav-menu" id="myNavMenu">
                <ul className="nav_menu_list">
                    <li className="nav_list">
                        <a href="#home" className="nav-link active-link">
                            Home
                        </a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#about" className="nav-link">
                            About
                        </a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#projects" className="nav-link">
                            Projects
                        </a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <button className="btn" onClick={onDownloadCV}>
                    Download CV <i className="uil uil-file-alt"></i>
                </button>
            </div>
            <div className="nav-menu-btn">
                <i className="uil uil-bars"></i>
            </div>
        </nav>
    );
};

Header.propTypes = {
    onDownloadCV: PropTypes.func.isRequired,
};

export default Header;
