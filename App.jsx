import React, { useState } from 'react';

const NumberManagement = () => {
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAddition = async () => {
    try {
      const response = './prime.jsx';
      setResult(response.data.result);
    } catch (error) {
      console.error('Error adding numbers:', error);
    }
  };

  // ... similar functions for subtraction, multiplication, etc.

  return (
    <div>
      <h2>Number Management</h2>
      <input
        type="number"
        placeholder="Enter numbers..."
        value={numbers.join(',')}
        onChange={(e) => setNumbers(e.target.value.split(',').map(Number))}
      />
      <button onClick={handleAddition}>Add</button>
      {/* ... similar buttons for subtraction, multiplication, etc. */}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default NumberManagement;
