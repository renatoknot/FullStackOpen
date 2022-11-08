import { useState, useEffect } from "react";

import styles from "./App.module.css";

import personService from "./services/persons";

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
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, [persons]);

  const handleChangeName = (e) => setNewName(e.target.value);

  const handleChangeNumber = (e) => setNewNumber(e.target.value);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      if (
        window.confirm(
          `${newName} is already added to Phonebook, replace the old number with a new one?`,
        )
      ) {
        const person = persons.find((person) => person.name === newName);
        const changedPerson = { ...person, number: newNumber };

        personService
          .update(changedPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== changedPerson.id ? person : returnedPerson,
              ),
            );
            setNewNumber("");
            setNewName("");
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      personService.create(newPerson).then((response) => {
        persons.concat(response);
        setNewName("");
        setNewNumber("");
      });
    }
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

      <Persons
        styles={styles}
        persons={persons}
        search={search}
        deletePerson={handleDelete}
      />
    </div>
  );
}

export default App;
