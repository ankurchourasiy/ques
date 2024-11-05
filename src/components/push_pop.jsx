// src/components/Stack.js

import React, { useState } from 'react';

const Stack = () => {
    const [stack, setStack] = useState([]);
    const [value, setValue] = useState('');

    // Function to handle push operation
    const handlePush = () => {
        if (value !== '') {
            setStack([...stack, value]);
            setValue('');
        }
    };

    // Function to handle pop operation
    const handlePop = () => {
        if (stack.length > 0) {
            setStack(stack.slice(0, -1));
        }
    };

    return (
        <div>
            <h2>Stack Operations</h2>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter a value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handlePush} style={{ marginLeft: '10px' }}>
                    Push
                </button>
                <button onClick={handlePop} style={{ marginLeft: '10px' }}>
                    Pop
                </button>
            </div>

            <div>
                <h3>Stack Contents</h3>
                {stack.length === 0 ? (
                    <p>The stack is empty.</p>
                ) : (
                    <ul>
                        {stack.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Stack;
