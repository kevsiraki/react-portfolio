import React, { useState } from 'react';
import styles from './Experience.module.css';

const ExperienceEntry = ({ title, role, date, details, link, linkText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.experienceEntry} ${isExpanded ? styles.expanded : ''}`}>
            <p className={styles.dropdown} onClick={toggleExpansion}>
                <span>
                    <span className={styles.arrow}>{isExpanded ? '▲' : '▼'}</span>
                    <b>{role}</b> | {title}
                    <br />
                    {date}
                </span>
            </p>
            {isExpanded && (
                <div className={styles.dropdownContent}>
                    {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                    {link && <p><a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a></p>}
                </div>
            )}
        </div>
    );
};

const ExperienceSection = () => {
    return (
        <div id="Experience" className={styles.experienceSection}>
            <h1>Experience</h1>
            <ExperienceEntry
                title="Freelance"
                role="Full Stack Developer"
                date="11/2023 - Present"
                details={[
                    'Transformed a notification system into a cutting-edge corporate platform using MEAN stack, Nginx, & Socket.io.',
                    'Aligned features with evolving needs through Agile methodologies and effective communication with stakeholders.',
                    'Leveraged prior hardware consulting expertise in tandem with hardware engineers for an economical solution.',
                    'Designed a scalable system with MongoDB sharding and orchestrated Kubernetes for load balancing.',
                    'Conducted extensive unit testing with Jasmine and established a Jenkins-based automated testing pipeline.',
                    'Hooked MCU/NeoPixel clusters to our backend to blink various LEDS, fostering a fun and vibrant team culture!',
                ]}
            />
            <ExperienceEntry
                title="GUSD"
                role="IT, Technology Lead"
                date="9/2022 - Present"
                details={[
                    'Configured network equipment and software, ensuring adherence to procedures whilst troubleshooting.',
                    'Co-trained instructors in creating engaging lessons using Google Workspace and educational software.',
                    'Integrated modern devices like 3D printers into lesson plans to enhance student engagement.',
                    'Achieved a 99% ticket resolution rate, escalating critical issues for timely resolution by IT colleagues.',
                    'Revived non-functional systems, leading to cost savings and resource optimization.',
                    'Successfully repaired 95% of Chromebooks, promoting eco-friendliness and reducing e-waste.',
                    'Automated recurring tasks using CMD, Bash, and launchd, significantly improving productivity.',
                    'Streamlined the transition from DHCP to static device IPs for printers and print server setup.',
                    'Coordinated with the Technology Director to strengthen user authentication policies through Active Directory.',
                    'Conducted thorough system inspections and configured intrusion detection systems (IDS).'
                ]}
            />
            <ExperienceEntry
                title="Don't Trip"
                role="Full Stack Developer"
                date="1/2021 - 5/2022"
                details={[
                    'Led a team of 2 developers to create Don\'t Trip, a successful Google Maps API based PWA using Laravel/PHP and Vue.js.',
                    'Generates personalized curated travel plans (\“Tesla EV Charging Stations on the way to Palo Alto, CA\”).',
                    'Full CRUD for user preference history with regional popularity rating per location built in using the Yelp API.',
                    'Garnered 1500+ page visits within a month, primarily from CSUN\'s academic community.',
                    'Implemented security measures, including 2FA, salt hashing, and protection against common vulnerabilities.',
                    'Integrated third-party SSO options for authentication as well as JSON web tokens to replace sessions.',
                    'Managed Agile development with Git, Jira, and Docker whilst utilizing PHPUnit for robust backend unit testing.',
                ]}
                link="https://donttrip.org"
                linkText="Visit Don't Trip"
            />
            <ExperienceEntry
                title="PC & Server Consulting"
                role="Freelance"
                date="5/2018 - Present"
                details={[
                    'Independently built 50+ server-grade and gaming systems within strict budget and time constraints.',
                    'Utilized equipment like multimeters, oscilloscopes, and EEPROM programmers for precise debugging.',
                    'Developed a software suite for CPU, FPU, and RAM stability testing in C, PowerShell, Python, & Bash.',
                    'Contributed to open-source core-by-core test software for AMD Zen 3 architecture (corcycler by sp00n).',
                    'Achieved 100% system stability results through comprehensive testing.',
                    'Provided cost-effective solutions based on current market knowledge for clients.',
                ]}
            />
            <ExperienceEntry
                title="Java_C"
                role="Compiler Design Project"
                details={[
                    'Experimental Java to C compiler featuring OOP, bounds checking on arrays, and subtyping.',
                    'Used Apache Maven build automation in conjunction with J-Unit + JaCoCo to administer full-coverage unit tests.',
                    'Compiler is fully capable of code execution; has a Tokenizer, Parser, Typechecker, and Code Generator.',
                ]}
                link="https://github.com/kevsiraki/Java_C"
                linkText="Visit Java_C on GitHub"
            />
        </div>
    );
};

export default ExperienceSection;


