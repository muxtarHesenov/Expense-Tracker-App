import React, { useState } from "react";
import "./App.css"
import Summary from "./components/summary/index";
import History from "./components/history";
import Form from "./components/form";
import Modal from "./components/modal";

function App() {
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  function handleFormSubmit({ value, type }) {
    if (type === 'income') {
      setTotal(total + Number(value))
    } else {
      setTotal(total - Number(value))
    }
    const historyItem = { value, type };
    const newHistory = [...history, historyItem]
    setHistory(newHistory);
  }
  function handleOpen() {
    setIsOpen(true)
  }
  function isClose() {
    setIsOpen(false)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={isClose} >

        <Form onSubmit={handleFormSubmit} />

      </Modal >

      <Summary total={total} />

      <History history={history} />

      <button onClick={handleOpen} className="plus">
        +
      </button>
    </>
  );
}

export default App;
