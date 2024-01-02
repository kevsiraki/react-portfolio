import React, { useState } from 'react';
import styles from './Contact.module.css';
import { SyncLoader } from 'react-spinners';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(2000);
    const [nameInputStyle, setNameInputStyle] = useState({ borderBottom: '2px solid #474544' });
    const [emailInputStyle, setEmailInputStyle] = useState({ borderBottom: '2px solid #474544' });
    const [messageInputStyle, setMessageInputStyle] = useState({ borderBottom: '2px solid #474544' });

    const [contactForm, setContactForm] = useState({
        isVisible: true,
        value: '',
    });

    const setContactFormState = (isVisible, value, animation) => {
        setContactForm({
            isVisible,
            value,
        });
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const [buttonState, setButtonState] = useState({
        borderColor: '#474544',
        value: 'Send',
        loading: false,
        disabled: false,
    });

    const setButtonStyle = (borderColor, value, loading) => {
        setButtonState((prevState) => ({
            ...prevState,
            borderColor,
            value,
            loading,
        }));
    };

    const setButtonDisabled = (disabled) => {
        setButtonState((prevState) => ({
            ...prevState,
            disabled,
        }));
    };

    const sendData = async () => {
        let isValid = true;

        if (name.trim() === "") {
            setNameInputStyle({ borderBottom: '2px solid #FFCCCB' });
            isValid = false;
        }

        if (email.trim() === "" || !isValidEmail(email)) {
            setEmailInputStyle({ borderBottom: '2px solid #FFCCCB' });
            isValid = false;
        }

        if (message.trim() === "" || message.length > 2000) {
            setMessageInputStyle({ borderBottom: '2px solid #FFCCCB' });
            isValid = false;
        }

        const data = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch('https://www.kevinsiraki.com/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result);

            if (response.ok) {
                setButtonStyle('#f5f5f5', 'Sending...', true); // Show spinner
                setButtonDisabled(true);
                setTimeout(() => {
                    setButtonDisabled(false);
                    setContactFormState(false, result.message);
                }, 1500);
            } else {
                setButtonDisabled(true);
                setButtonStyle('#FFCCCB', result.message, false);
                setTimeout(() => {
                    setButtonDisabled(false);
                    setButtonStyle('#474544', 'Send', false);
                }, 1500);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        setNameInputStyle(newName.trim() !== '' ? { borderBottom: '2px solid #90EE90' } : { borderBottom: '2px solid #FFCCCB' });
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailInputStyle(newEmail.trim() !== '' && isValidEmail(newEmail) ? { borderBottom: '2px solid #90EE90' } : { borderBottom: '2px solid #FFCCCB' });
    };

    const handleMessageChange = (e) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        setCharCount(2000 - newMessage.length);
        setMessageInputStyle(newMessage.trim() !== '' && newMessage.length <= 2000 ? { borderBottom: '2px solid #90EE90' } : { borderBottom: '2px solid #FFCCCB' });
    };

    return (
        <div id="Contact">
            <div id="innerContact" style={{ padding: '20px', borderRadius: '25px', boxShadow: '0 0 5px #ccc', border: '1px solid #f5f5f5', backgroundSize: 'cover', marginBottom: '75px', marginTop: '75px', marginLeft: 'auto', marginRight: 'auto', width: '85%', maxWidth: '1000px' }}>
                <h1>Contact Me</h1>
                <div className={styles.underlineClass}></div>
                {contactForm.isVisible ? (
                    <form id="contact_form">
                        <div className="name">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder="Name" name="name" id="name_input" style={nameInputStyle} value={name} onChange={handleNameChange} required />
                        </div>
                        <div className="email">
                            <label htmlFor="email"></label>
                            <input type="email" placeholder="Email" name="email" id="email_input" style={emailInputStyle} value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="message">
                            <label htmlFor="message"></label>
                            <textarea name="message" placeholder="Your Message" id="message_input" cols="30" rows="5" style={messageInputStyle} value={message} onChange={handleMessageChange} required></textarea>
                        </div>
                        <div id="char_counter" style={{ float: 'right', fontSize: '12px', marginTop: '-20px', color: charCount <= 255 ? 'red' : 'black' }}>
                            {charCount} characters remaining
                        </div>
                        <br />
                        <div className="submit">
                            <button type="button" className={styles.hoverEffect} onClick={sendData} disabled={buttonState.disabled} style={{
                                background: 'none',
                                border: `solid 2px ${buttonState.borderColor}`,
                                borderRadius: '15px',
                                color: '#474544',
                                cursor: 'pointer',
                                display: 'inline-block',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontSize: '0.875em',
                                fontWeight: 'bold',
                                outline: 'none',
                                padding: '20px 35px',
                                transition: 'all 0.3s',
                            }} >

                                {buttonState.loading ? (
                                    <SyncLoader color="#90EE90" loading={buttonState.loading} />
                                ) : (
                                    <span>{buttonState.value}</span>
                                )}
                            </button>
                        </div>
                    </form>

                ) : (
                    <div id="container" style={{ padding: '20px', borderRadius: '25px', boxShadow: '0 0 5px #ccc', border: '1px solid #f5f5f5', backgroundSize: 'cover', marginBottom: '75px', marginTop: '75px', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
                        <p>{contactForm.value}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
