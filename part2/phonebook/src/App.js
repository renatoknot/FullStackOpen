import { useState, useEffect } from "react";

import styles from "./App.module.css";

import axios from "axios";

//Components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, [persons]);

  const handleChangeName = (e) => setNewName(e.target.value);

  const handleChangeNumber = (e) => setNewNumber(e.target.value);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert(`${newName} is already added to Phonebook`);
    } else {
      setPersons((prevPersons) => [
        ...prevPersons,
        { name: newName, number: newNumber },
      ]);
    }

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />

      <h2>Add Contact</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />

      <h2 className={styles["numbers-title"]}>Numbers</h2>

      <Persons styles={styles} persons={persons} search={search} />
    </div>
  );
}

export default App;
