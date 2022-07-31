import React, { useEffect, useState } from "react";

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
      checked: false,
      important: false,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
  useEffect(() => {
    console.log(items);
  }, [items]);

  function deleteItem(id) {
    const itemsArr = items.filter((item) => item.id !== id);
    setItems(itemsArr);
  }

  return (
    <div>
      <div className="container">
        <div className="todo_list">
          <h1>Todo List App</h1>
          <div className="create_new_todo">
            <input
              className="inp_add"
              type="text"
              placeholder="Введите задачу"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />

            <button className="btn__add" onClick={() => addItem()}>
              Добавить
            </button>
          </div>
        </div>

        <ol className="todo">
          {items.map((item) => {
            return (
              <div className="complete">
                <li key={item.id}>
                  <input type="checkbox" name="" id="" />
                  {item.value}
                  <button onClick={() => deleteItem(item.id)}>❌</button>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
