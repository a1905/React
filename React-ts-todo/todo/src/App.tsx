import React, { useEffect, useState } from "react";

import "./App.css";

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    const storageTodos = localStorage.getItem("todos");
    if (storageTodos) {
      setTodos(JSON.parse(storageTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleClick = (): void => {
    if (value === "") {
      alert("Bir şeyler yazın");
    } else {
      setTodos([...todos, value]);
      setValue("");
    }
  };
  const handleDelete = (index: number): void => {
    const updatingItems: string[] = [...todos];
    updatingItems.splice(index, 1);
    setTodos(updatingItems);
  };
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={handleClick}>Ekle</button>
      {todos.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 200,
          }}
        >
          <p>{item}</p>
          <span
            onClick={() => handleDelete(index)}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
