import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTemperatureHigh, FaTemperatureLow, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from './assets/thermo.json'; // adjust path as needed


function App() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('C');
  const [results, setResults] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleConvert = () => {
    const temp = parseFloat(temperature);
    if (isNaN(temp)) {
      alert('❗ Please enter a valid number!');
      return;
    }

    let c, f, k;
    if (unit === 'C') {
      c = temp;
      f = (temp * 9) / 5 + 32;
      k = temp + 273.15;
    } else if (unit === 'F') {
      c = (temp - 32) * 5 / 9;
      f = temp;
      k = c + 273.15;
    } else {
      c = temp - 273.15;
      f = (c * 9) / 5 + 32;
      k = temp;
    }

    setResults({ c, f, k });
  };

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaTemperatureHigh /> Temperature Converter <FaTemperatureLow />
      </motion.h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter value"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="C">🌡️ Celsius (°C)</option>
          <option value="F">🔥 Fahrenheit (°F)</option>
          <option value="K">❄️ Kelvin (K)</option>
        </select>

        <button onClick={handleConvert}>Convert</button>
      </div>

      {results && (
  <>
    <Lottie animationData={animationData} style={{ height: 150 }} loop={true} />
    <div className="results">
      <p>🌡️ Celsius: {results.c.toFixed(2)} °C</p>
      <p>🔥 Fahrenheit: {results.f.toFixed(2)} °F</p>
      <p>❄️ Kelvin: {results.k.toFixed(2)} K</p>
    </div>
  </>
)}

    </div>
  );
}

export default App;
