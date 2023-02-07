import React from 'react';

const Header = ({ characterName, setCharacterName, showForm, setShowForm }) => {
  const handleChange = (e) => {
    setCharacterName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="character-name">Character Name</label>
          <input
            type="text"
            id="character-name"
            value={characterName}
            onChange={handleChange}
            required
          />
          <button type="submit">Save Name</button>
        </form>
      ) : (
        <h2>Character Name: {characterName}</h2>
      )}
    </div>
  );
};

export default Header;

