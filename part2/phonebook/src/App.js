import { useState, useEffect } from "react";

import styles from "./App.module.css";

import personService from "./services/persons";

//Components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState({});

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response));
  }, [persons]);

  const handleChangeName = (e) => setNewName(e.target.value);

  const handleChangeNumber = (e) => setNewNumber(e.target.value);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
      setNotification({
        type: "error",
        message: `${person.name} has been removed from PhoneBook`,
      });
      setTimeout(() => {
        setNotification(null);
      }, 5000);
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
            setNotification({
              type: "success",
              message: `${newName}'s number has been updated successfully`,
            });
            setTimeout(() => {
              setNotification(null);
            }, 5000);
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
        setNotification({
          type: "success",
          message: `Added ${newName} to PhoneBook`,
        });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          styles={styles}
        />
      )}

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
