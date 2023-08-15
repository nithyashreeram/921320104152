import React, { useState } from 'react';

const PrimeNumbers = () => {
  const [limit, setLimit] = useState(50);
  const [primes, setPrimes] = useState([]);

  const generatePrimes = () => {
    // Generate prime numbers logic here
    const primeNumbers = [2, 3, 5, 7,11,13,17,19,23,29,31,37,43,41,47,49]; // Sample prime numbers
    setPrimes(primeNumbers);
  };

  return (
    <div>
      <h2>Prime Numbers</h2>
      <div>
        <label>Limit: </label>
        <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
        <button onClick={generatePrimes}>Generate</button>
      </div>
      <div>
        {primes.length > 0 && (
          <ul>
            {primes.map((prime, index) => (
              <li key={index}>{prime}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PrimeNumbers;
