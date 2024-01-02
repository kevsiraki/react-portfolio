import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faHammer, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyles = {
    backgroundColor: 'rgba(245, 245, 245, 0.6)',
    paddingTop: '25px',
    paddingBottom: '25px',
    position: 'fixed',
    top: '0',
    width: '100vw',
    boxShadow: '-12px -8px 15px 0px #000',
    zIndex: '99999',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  };

  const emStyles = {
    color: 'rgba(0, 0, 0, .5)',
    fontStyle: 'normal',
    fontWeight: '700',
  };

  const pStyles = {
    color: 'rgba(0, 0, 0, .75)',
    fontSize: '.75em',
    lineHeight: '1.5',
    margin: '0 8px 0 0',
    textAlign: 'center',
  };

  const headingStyles = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '2em',
    textAlign: 'center',
    transition: 'opacity 0.3s, margin 0.3s',
    opacity: scrolled ? 0 : 1,
    marginTop: scrolled ? '-75px' : '0',
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header style={headerStyles}>
      <div className="name">
        <h1 className="name-heading" style={headingStyles}>
          <a href="https://www.kevinsiraki.com/contact/">
            Kevin <em style={emStyles}>Siraki</em>
          </a>
        </h1>
        <p style={pStyles}>
          &nbsp;&nbsp;
          <a href="#Experience" onClick={(e) => handleLinkClick(e, 'Experience')}><FontAwesomeIcon icon={faBriefcase} />&nbsp;Experience</a>&nbsp;&nbsp;
          <a href="#Education" onClick={(e) => handleLinkClick(e, 'Education')}><FontAwesomeIcon icon={faSchool} />&nbsp;Education</a>&nbsp;&nbsp;
          <a href="#Skills" onClick={(e) => handleLinkClick(e, 'Skills')}><FontAwesomeIcon icon={faHammer} />&nbsp;Skills</a>&nbsp;&nbsp;
          <a href="#Contact" onClick={(e) => handleLinkClick(e, 'Contact')}><FontAwesomeIcon icon={faAddressCard} />&nbsp;Contact</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
