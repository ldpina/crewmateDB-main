import React, { useState } from 'react';
import './app.css';
import { supabase } from './client'; 


const Create = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async () => {
    if (!name || !speed || !color) {
      alert('Please fill out all fields');
      return;
    }

    const { data, error } = await supabase
      .from('crewmate') 
      .insert([
        { name, speed, color }
      ]);

    if (error) {
      console.error('Error inserting data:', error);
      alert('There was an error creating the crewmate.');
    } else {
      alert(`Crewmate created successfully: ${name}`);
      // Clear the form
      setName('');
      setSpeed('');
      setColor('');
    }
  };

  return (
    <div className='Card'>
      <h1>Create a crewmate!</h1>
      <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" height="100px" width="auto" />
      <form className="form-container">
        <div className="mini-container">
          <label><h3>Name:</h3></label>
          <input
            type="text"
            className="name"
            placeholder="Enter crewmate's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mini-container">
          <label><h3>Speed (mph):</h3></label>
          <input
            type="text"
            className="speed"
            placeholder="Enter speed in mph"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        <div className="mini-container">
          <label><h3>Color:</h3></label>
          <li>
            <input
              id="Red"
              className="color"
              type="radio"
              value="Red"
              checked={color === 'Red'}
              onChange={(e) => setColor(e.target.value)}
            />Red
          </li>
          <li>
            <input
              id="Green"
              className="color"
              type="radio"
              value="Green"
              checked={color === 'Green'}
              onChange={(e) => setColor(e.target.value)}
            />Green
          </li>
          <li>
            <input
              id="Blue"
              className="color"
              type="radio"
              value="Blue"
              checked={color === 'Blue'}
              onChange={(e) => setColor(e.target.value)}
            />Blue
          </li>
          <li>
            <input
              id="Purple"
              className="color"
              type="radio"
              value="Purple"
              checked={color === 'Purple'}
              onChange={(e) => setColor(e.target.value)}
            />Purple
          </li>
          <li>
            <input
              id="Yellow"
              className="color"
              type="radio"
              value="Yellow"
              checked={color === 'Yellow'}
              onChange={(e) => setColor(e.target.value)}
            />Yellow
          </li>
          <li>
            <input
              id="Orange"
              className="color"
              type="radio"
              value="Orange"
              checked={color === 'Orange'}
              onChange={(e) => setColor(e.target.value)}
            />Orange
          </li>
          <li>
            <input
              id="Pink"
              className="color"
              type="radio"
              value="Pink"
              checked={color === 'Pink'}
              onChange={(e) => setColor(e.target.value)}
            />Pink
          </li>
          <li>
            <input
              id="Rainbow"
              className="color"
              type="radio"
              value="Rainbow"
              checked={color === 'Rainbow'}
              onChange={(e) => setColor(e.target.value)}
            />Rainbow
          </li>
        </div>
      </form>
      <button onClick={handleSubmit}>Create Crewmate</button>
    </div>
  );
}

export default Create;
