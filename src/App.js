import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [characterName, setCharacterName] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [characterRace, setCharacterRace] = useState('');
  const [characterClass, setCharacterClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacterName(e.target.characterName.value);
    setCharacterRace(e.target.characterRace.value);
    setCharacterClass(e.target.characterClass.value);
    setShowForm(false);
  };

  return (
    <div>
      <h1>D&D Character Creator</h1>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="character-name">Character Name</label>
          <input
            type="text"
            id="character-name"
            name="characterName"
            required
          />
           <br />
          <label htmlFor="character-race">Race:</label>
          <select id="character-race" name="characterRace">
            <option value="">-- Select Race --</option>
            <option value="Aarakocra">Aarakocra</option>
            <option value="Aasimar">Aasimar</option>
            <option value="Bugbear">Bugbear</option>
            <option value="Centaur">Centaur</option>
            <option value="Changeling">Changeling</option>
            <option value="Dhampir">Dhampir</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Fairie">Fairie</option>
            <option value="Firbolg">Firbolg</option>
            <option value="Genasi">Genasi</option>
            <option value="Gith">Gith</option>
            <option value="Gnome">Gnome</option>
            <option value="Goblin">Goblin</option>
            <option value="Goliath">Goliath</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Half-Orc">Half-Orc</option>
            <option value="Halfling">Halfling</option>
            <option value="Hobgoblin">Hobgoblin</option>
            <option value="Human">Human</option>
            <option value="Kalashtar">Kalashtar</option>
            <option value="Kender">Kender</option>
            <option value="Kenku">Kenku</option>
            <option value="Kobold">Kobold</option>
            <option value="Leonin">Leonin</option>
            <option value="Lizardfolk">Lizardfolk</option>
            <option value="Loxodon">Loxodon</option>
            <option value="Minotaur">Minotaur</option>
            <option value="Orc">Orc</option>
            <option value="Owlin">Owlin</option>
            <option value="Shifter">Shifter</option>
            <option value="Simic Hybrid">Simic Hybrid</option>
            <option value="Tabaxi">Tabaxi</option>
            <option value="Tiefling">Tiefling</option>
          </select>
          <br />
          <label htmlFor="character-class">Class:</label>
          <select id="character-class" name="characterClass">
            <option value="">-- Select Class --</option>
            <option value="Artificer">Artificer</option>
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
          </select>
          <br />
          <button type="submit">Save Character</button>
        </form>
      ) : (
        <div>
          <h2>Character Name: {characterName}</h2>
          <p>Race: {characterRace}</p>
          <p>Class: {characterClass}</p>
          <button type="button" onClick={() => setShowForm(true)}> Edit character </button>
        </div>
      )}
    </div>
  );
};

export default App;

