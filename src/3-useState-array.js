import React, { useState } from "react";

import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const [delPeople, setdelPeople] = useState([]);

  const removeItem = (id) => {
    const deletedPerson = people.find((person) => person.id === id);

    const newDelPeople = delPeople;
    newDelPeople.push(deletedPerson);

    setdelPeople(newDelPeople);

    const newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);
  };

  const undoRemoveItem = () => {
    let newPeople = people.slice();

    console.log(...newPeople);
    console.log(...delPeople);

    const lastDelPerson = delPeople.pop();

    console.log(lastDelPerson);
    console.log(lastDelPerson.id);

    newPeople.splice(lastDelPerson.id - 1, 0, lastDelPerson);

    console.log(...newPeople);

    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {people.length === 0 && (
        <button type="button" className="btn" onClick={() => setPeople(data)}>
          show items
        </button>
      )}
      {people.length === 4 && (
        <button type="button" className="btn" onClick={() => setPeople([])}>
          hide items
        </button>
      )}

      {people.length > 0 && people.length < 4 && (
        <button type="button" className="btn" onClick={undoRemoveItem}>
          Undo
        </button>
      )}
    </>
  );
};

export default UseStateArray;
