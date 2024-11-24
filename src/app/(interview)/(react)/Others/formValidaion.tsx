import React, { useState, useEffect, useRef } from 'react';

// NOTE:
// 1. form tag require onSubmit
// 2. button type="submit"
// 3. e.preventDefault()

const FormValidation = () => {
    const [fname, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState('');

    const returnValidation = (fname: string, email: string, phone: number) => {
        var errorMessage = '';
        if (fname === '') {
            errorMessage = 'Please fill the fname';
            setError(true);
            return errorMessage;
        }

        if (email === '') {
            errorMessage = 'Please fill the email';
            setError(true);
            return errorMessage;
        }

        if (phone === 0) {
            errorMessage = 'Please fill the phone';
            setError(true);
            return errorMessage;
        }
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        const returnMessage = returnValidation(fname, email, phone);
        console.log('returnMessage', returnMessage);

        // if (fname !== '' && email !== '' && phone !== '') {
        //   setError(false);
        // }
        setMessage(returnMessage);
        console.log('Value', fname, email, phone);
    };

    return (
        <>
            <p>Form Valiation</p>
            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    value={fname}
                    placeholder="first name"
                    onChange={(e) => setFName(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={phone}
                    placeholder="EPhone number"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            {error ? (
                <div style={{ color: 'red' }}>{errorMessage}</div>
            ) : (
                <div style={{ color: 'green' }}>Submitted Successfully</div>
            )}
        </>
    );
};

export default FormValidation;
