import React, { useState, useEffect } from "react";
import CardList from "./component/card-list/card-list.component.jsx";
import SearchBox from "./component/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchString)
  );

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodexs</h1>
      <SearchBox
        placeholder="search monster"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
