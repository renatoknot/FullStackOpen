import React from "react";

const Persons = ({ styles, persons, search, deletePerson }) => {
  return (
    <ul className={styles["list-persons"]}>
      {persons
        .filter((person) => {
          if (search === "") {
            return person;
          } else if (person.name.toLowerCase().includes(search.toLowerCase())) {
            return person;
          }
        })
        .map((filteredPerson) => (
          <li key={filteredPerson.name}>
            {filteredPerson.name} - {filteredPerson.number}{" "}
            <button
              className={styles["deleteBtn"]}
              onClick={() => deletePerson(filteredPerson.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
