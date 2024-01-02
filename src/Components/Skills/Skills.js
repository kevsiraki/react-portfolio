import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all icons to the library
library.add(fas, fab, far);

const SkillsSection = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const item = e.target;

            const rect = item.getBoundingClientRect();
            const itemX = rect.left + rect.width / 2;
            const itemY = rect.top + rect.height / 2;
            const deltaX = mouseX - itemX;
            const deltaY = mouseY - itemY;
            item.style.transform = `translate(${deltaX / 10}px, ${deltaY / 10}px)`;
        };

        const handleMouseLeave = (e) => {
            const item = e.target;
            item.style.transform = 'translate(0, 0)';
        };

        const skillSetItems = document.querySelectorAll('.skill-set li');

        skillSetItems.forEach((item) => {
            item.addEventListener('mousemove', handleMouseMove);
            item.addEventListener('mouseleave', handleMouseLeave);

            // Clean up the event listeners for each item separately
            return () => {
                item.removeEventListener('mousemove', handleMouseMove);
                item.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, []);

    return (
        <>
            <style>{`
                /* List styles */
                ul {
                    padding: 0;
                    text-align: center;
                    max-width: 1000px;
                    margin: auto;
                }

                /* Skill set item styles */
                .skill-set li {
                    background: rgba(17, 84, 204, .15);
                    border-radius: 35px;
                    color: #000;
                    display: inline-block;
                    list-style: none;
                    margin: 5px 5px 5px 5px;
                    padding: 15px;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.3s ease-in-out;
                }

                /* Add the hover effect */
                .skill-set li:hover {
                    transform: translate(5px, -5px); /* Adjust the values as needed */
                }

                /* Reset cursor for non-link list items */
                .skill-set li:not(.hover-item) {
                    cursor: default;
                }

            `}</style>
            <div id="Skills">
                <h1 id="heading">Skills</h1>
                <section>
                    <h1>Programming Languages</h1>
                    <ul className="skill-set">
                        <li><FontAwesomeIcon icon={['fab', 'js']} />&nbsp;JavaScript</li>
                        <li><FontAwesomeIcon icon={['fas', 'keyboard']} />&nbsp;TypeScript</li>
                        <li><FontAwesomeIcon icon={['fab', 'python']} />&nbsp;Python</li>
                        <li><FontAwesomeIcon icon={['fab', 'php']} />&nbsp;PHP</li>
                        <li><FontAwesomeIcon icon={['fab', 'java']} />&nbsp;Java</li>
                        <li>C# Dot.net</li>
                        <li><FontAwesomeIcon icon={['fas', 'c']} />&nbsp;C, C++</li>
                        <li><FontAwesomeIcon icon={['fab', 'golang']} />&nbsp;Go</li>
                        <li><FontAwesomeIcon icon={['fas', 'gem']} />&nbsp;Ruby</li>
                        <li><FontAwesomeIcon icon={['fab', 'rust']} />&nbsp;Rust</li>
                        <li><FontAwesomeIcon icon={['fab', 'r-project']} />&nbsp;R</li>
                        <li><FontAwesomeIcon icon={['fas', 'microchip']} />&nbsp;Assembly</li>
                    </ul>
                </section>

                <section>
                    <h1>Backend</h1>
                    <ul className="skill-set">
                        <li><FontAwesomeIcon icon={['fas', 'database']} />&nbsp;SQL, MariaDB, RDBMS</li>
                        <li><FontAwesomeIcon icon={['fas', 'sitemap']} />&nbsp;NoSQL, MongoDB</li>
                        <li><FontAwesomeIcon icon={['fas', 'layer-group']} />&nbsp;Redis</li>
                        <li><FontAwesomeIcon icon={['fab', 'node']} />&nbsp;Node</li>
                        <li><FontAwesomeIcon icon={['fab', 'js']} />&nbsp;Express</li>
                        <li><FontAwesomeIcon icon={['fab', 'laravel']} />&nbsp;Laravel</li>
                        <li><FontAwesomeIcon icon={['fab', 'wordpress']} />&nbsp;Wordpress</li>
                        <li><FontAwesomeIcon icon={['fas', 'feather']} />&nbsp;Apache</li>
                        <li><FontAwesomeIcon icon={['fa', 'server']} />&nbsp;Nginx</li>
                        <li><FontAwesomeIcon icon={['fab', 'aws']} />&nbsp;AWS</li>
                        <li><FontAwesomeIcon icon={['fab', 'microsoft']} />&nbsp;Azure</li>
                        <li><FontAwesomeIcon icon={['fab', 'docker']} />&nbsp;Docker</li>
                        <li><FontAwesomeIcon icon={['fas', 'circle-nodes']} />&nbsp;Kubernetes</li>
                        <li><FontAwesomeIcon icon={['fab', 'linux']} />&nbsp;Linux</li>
                        <li><FontAwesomeIcon icon={['fas', 'code']} />&nbsp;Rest APIs</li>
                        <li><FontAwesomeIcon icon={['fas', 'plug']} />&nbsp;SocketIO</li>
                        <li><FontAwesomeIcon icon={['fas', 'arrow-down-up-across-line']} />&nbsp;MVC</li>
                        {/* Add more backend skills as needed */}
                    </ul>
                </section>

                <section>
                    <h1>Frontend</h1>
                    <ul className="skill-set">
                        <li><FontAwesomeIcon icon={['fab', 'html5']} />&nbsp;HTML</li>
                        <li><FontAwesomeIcon icon={['fas', 'fan']} />&nbsp;Blade</li>
                        <li><FontAwesomeIcon icon={['fab', 'css3-alt']} />&nbsp;CSS</li>
                        <li><FontAwesomeIcon icon={['fab', 'sass']} />&nbsp;SASS</li>
                        <li><FontAwesomeIcon icon={['fab', 'bootstrap']} />&nbsp;Bootstrap</li>
                        <li><FontAwesomeIcon icon={['fab', 'css3']} />&nbsp;Tailwind</li>
                        <li><FontAwesomeIcon icon={['fab', 'js']} />&nbsp;JS</li>
                        <li><FontAwesomeIcon icon={['fab', 'node-js']} />&nbsp;jQuery</li>
                        <li><FontAwesomeIcon icon={['fab', 'vuejs']} />&nbsp;Vue</li>
                        <li><FontAwesomeIcon icon={['fab', 'react']} />&nbsp;React</li>
                        <li><FontAwesomeIcon icon={['fab', 'angular']} />&nbsp;Angular</li>
                        <li><FontAwesomeIcon icon={['fab', 'npm']} />&nbsp;Next</li>
                        <li><FontAwesomeIcon icon={['fas', 'f']} />&nbsp;Flutter</li>
                        {/* Add more frontend skills as needed */}
                    </ul>
                </section>

                <section>
                    <h1>Other Skills</h1>
                    <ul className="skill-set">
                        <li><FontAwesomeIcon icon={['fab', 'microsoft']} />&nbsp;MS Office</li>
                        <li><FontAwesomeIcon icon={['fas', 'terminal']} />&nbsp;Bash, Crontab</li>
                        <li><FontAwesomeIcon icon={['fab', 'git']} />&nbsp;Git</li>
                        <li><FontAwesomeIcon icon={['fas', 'list-check']} />&nbsp;TDD</li>
                        <li><FontAwesomeIcon icon={['fab', 'jira']} />&nbsp;Jira</li>
                        <li><FontAwesomeIcon icon={['fas', 'timeline']} />&nbsp;CI/CD</li>
                        <li><FontAwesomeIcon icon={['fas', 'a']} />&nbsp;Ansible</li>
                        <li><FontAwesomeIcon icon={['fab', 'jenkins']} />&nbsp;Jenkins</li>
                        <li><FontAwesomeIcon icon={['fas', 'network-wired']} />&nbsp;Networking</li>
                        <li><FontAwesomeIcon icon={['fab', 'unity']} />&nbsp;Unity</li>
                        <li><FontAwesomeIcon icon={['fas', 'desktop']} />&nbsp;System Design</li>
                        <li><FontAwesomeIcon icon={['fas', 'trowel-bricks']} />&nbsp;Firewalls</li>
                        <li><FontAwesomeIcon icon={['fas', 'object-group']} />&nbsp;SOLID, OOP</li>
                        <li><FontAwesomeIcon icon={['fab', 'atlassian']} />&nbsp;Agile, Atlassian Suite</li>
                        <li><FontAwesomeIcon icon={['fas', 'microchip']} />&nbsp;Embedded Systems, Hardware</li>
                        {/* Add more other skills as needed */}
                    </ul>
                </section>

            </div>
        </>
    );
};

export default SkillsSection;
