import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './client';
const EditCrewmate = () => {
    
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [formValues, setFormValues] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmate')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
        setFormValues(data);
      }
    };

    fetchCrewmate();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleColorChange = (e) => {
    setFormValues({ ...formValues, color: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('crewmate')
      .update(formValues)
      .eq('id', id);

    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      alert('Crewmate updated successfully');
      navigate('/gallery');
    }
  };
   const handleDelete = async (id) => {
    const { error } = await supabase
      .from('crewmate')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting crewmate:', error);
    } else {
      setCrewmates((prevCrewmates) => prevCrewmates.filter((crewmate) => crewmate.id !== id));
      alert('Crewmate deleted successfully');
    }
  };

  return (
    <div>
      <h1>Update Your Crewmate!</h1>
      <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" height="200px" width="auto" />

      {formValues ? (
        <form onSubmit={handleSubmit}>
          <h2>Current Crewmate Info:</h2>
          <h3>Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}</h3>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange}/>
          </label>
          <label>
            Speed:
            <input type="text" name="speed"onChange={handleChange}/>
          </label>
          <div>
            <h3>Select Color:</h3>
            {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink'].map((color) => (
              <label key={color}>
                <input type="radio" name="color" value={color} checked={formValues.color === color} onChange={handleColorChange}/>
                {color}
              </label>
            ))}
          </div>
          <button type="submit">Update Crewmate</button>
          <button onClick={() => handleDelete(crewmate.id)}>Delete Crewmate</button>
        </form>
      ) : (
        <p>Loading crewmate...</p>
      )}
    </div>
  );
};

export default EditCrewmate;

