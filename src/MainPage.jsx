import React, { useState } from "react";

export default function MainPage() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Введите задачу");
    }
    const item = {
      value: newItem,
      id: Math.floor(Math.random() * 1000),
    };
    let itemLS = JSON.parse(localStorage.getItem("item.value"));
    localStorage.setItem("item", JSON.stringify(itemLS));

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
  function deleteItem(id) {
    const itemsArr = items.filter((item) => item.id !== id);
    setItems(itemsArr);
  }

  return (
    <div>
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="Введите задачу"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Добавить</button>

      <ol>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
