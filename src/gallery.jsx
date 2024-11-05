import React, { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './client'; 
import { Link, useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmate') 
        .select('*'); 

      if (error) {
        console.error('Error fetching crewmates:', error);
      } else {
        setCrewmates(data);
      }
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="gallery">
      <h1>Your Crewmate Gallery</h1>
      {crewmates.length > 0 ? (
        <div className="crewmate-container">
          {crewmates.map((crewmate, index) => (
            <div key={index} className="crewmate-card" style={{ boxShadow: `0 4px 8px 0 ${crewmate.color.toLowerCase()}, 0 6px 20px 0 ${crewmate.color.toLowerCase()}` }}>
              <img
                src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png"
                className="single-crewmate"
                height="150px"
                width="auto"
                alt="crewmate"
              />
              <h3>Name of Crewmate: <span>{crewmate.name}</span></h3>
              <h3>Speed of Crewmate: <span>{crewmate.speed} mph</span></h3>
              <h3>Color of Crewmate: <span>{crewmate.color}</span></h3>
              <div className="button-group">
                <Link to={`/edit/${crewmate.id}`}>
                  <button>Edit Crewmate</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="placeholder">
          <h2>You haven't made a crewmate yet!</h2>
          <Link to="/create" style={{ color: 'white', margin: '20px' }}>
            <button>Create A Crewmate!</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Gallery;

