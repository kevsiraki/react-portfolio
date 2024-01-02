import React, { useState } from 'react';
import styles from './Education.module.css';

const EducationEntry = ({ title, degree, date, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.educationEntry} ${isExpanded ? styles.expanded : ''}`}>
            <p className={styles.dropdown} onClick={toggleExpansion}>
                <span>
                    <span className={styles.arrow}>{isExpanded ? '▲' : '▼'}</span>
                    <b>{degree}</b> | {title}
                    <br />
                    {date}
                </span>
            </p>
            {isExpanded && (
                <div className={styles.dropdownContent}>
                    {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

const EducationSection = () => {
    return (
        <div id="Education" className={styles.educationSection}>
            <h1>Education</h1>
            <EducationEntry
                title="CSUN"
                degree="Computer Science B.S."
                date="8/2020 - 5/2022"
                details={[
                    'Awarded 2 Northrop Foundation Endowed Scholarships for excellent academic achievement and essay.',
                    'Tutored fellow students in Functional Programming, yielding excellent results and positive feedback.',
                ]}
            />
            <EducationEntry
                title="GCC"
                degree="Computer Science Transfer"
                date="8/2017 - 6/2020"
                details={[
                    'Part-time Data Structures and Algorithms tutor; Students made significant grade improvements by finals.',
                    'Participated in a hackathon with fellow students where I showcased my 6502 computer, winning 1st place.',
                ]}
            />
        </div>
    );
};

export default EducationSection;