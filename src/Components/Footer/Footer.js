import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

const Footer = ({ darkMode, toggleDarkMode }) => {
    return (
        <footer>
            <div>
                <div>
                    <a onClick={toggleDarkMode} className={styles.darkModeButton}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </a>
                    <p><a href="https://www.kevinsiraki.com/views/Kevin Siraki Resume 2024.pdf" target="_blank" rel="noreferrer">View Resume</a></p>
                    <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;<a href="mailto:kevsiraki@gmail.com">kevsiraki@gmail.com</a></p>
                    <p>
                        <FontAwesomeIcon icon={faGithub} />&nbsp;<a href="https://github.com/kevsiraki" target="_blank" rel="noreferrer">GitHub</a>&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faMountain} />&nbsp;<a href="https://donttrip.org" target="_blank" rel="noreferrer">Don't Trip</a>
                    </p>
                </div>
                <div>&copy; 2024 All rights reserved.
                    <br /><br />
                    <div id="hardware">
                        <sub>
                            <small><a target="_blank" rel="noreferrer" href="https://donttrip.org/hardware" download>About The Server</a></small>
                        </sub>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
