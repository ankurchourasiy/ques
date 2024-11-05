

import React, { useState } from 'react';

const ArrayInput = () => {
    const [size, setSize] = useState('');
    const [array, setArray] = useState([]);
    const [values, setValues] = useState([]);

    const handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setSize(newSize);
        setValues(Array(newSize).fill('')); // Initialize with empty strings
        setArray([]); // Reset array
    };

    const handleValueChange = (index, value) => {
        const updatedValues = [...values];
        updatedValues[index] = parseFloat(value);
        setValues(updatedValues);
        setArray(updatedValues);
    };

    const maxElement = array.length > 0 ? Math.max(...array) : '';
    const minElement = array.length > 0 ? Math.min(...array) : '';

    return (
        <div>
            <h2>Array Input</h2>
            <label>
                Array Size: 
                <input 
                    type="number" 
                    value={size} 
                    onChange={handleSizeChange} 
                    min="1"
                    placeholder="Enter array size" 
                />
            </label>

            {size > 0 && (
                <div style={{ marginTop: '20px' }}>
                    {Array.from({ length: size }).map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            placeholder={`Element ${index + 1}`}
                            value={values[index] || ''}
                            onChange={(e) => handleValueChange(index, e.target.value)}
                            style={{ margin: '5px' }}
                        />
                    ))}
                </div>
            )}

            {array.length === size && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Results</h3>
                    <p>Maximum Element: {maxElement}</p>
                    <p>Minimum Element: {minElement}</p>
                </div>
            )}
        </div>
    );
};

export default ArrayInput;
