import React, { useState } from 'react';

const Attributes = () => {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);

  //adding a die roll function to the attribute stats
    function rollAttribute() {
        const rolls = [rollDie(), rollDie(), rollDie(), rollDie()];
        rolls.sort((a, b) => a - b);
        return rolls.slice(1).reduce((sum, value) => sum + value, 0);

    }

    function rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function handleRoll () {
        setStrength(rollAttribute());
        setDexterity(rollAttribute());
        setConstitution(rollAttribute());
        setIntelligence(rollAttribute());
        setWisdom(rollAttribute());
        setCharisma(rollAttribute());
    }

  return (
    <div>
      <div>
        Strength: {strength}
        <br />
        Dexterity: {dexterity}
        <br />
        Constitution: {constitution}
        <br />
        Intelligence: {intelligence}
        <br />
        Wisdom: {wisdom}
        <br />
        Charisma: {charisma}
      </div>
      <button onClick = {handleRoll}>Roll Dice</button>
    </div>
  );
}

export default Attributes;
