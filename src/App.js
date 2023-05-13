import { useState } from "react";

import CustomerList from "./CustomerList";
import Detail from "./Detail";

function App() {
  const [lists, setLists] = useState([
    {
      id: 0,
      firstname: "abs",
      age: "5",
    },
    {
      id: 1,
      firstname: "xyz",
      age: "8",
    },
    {
      id: 2,
      firstname: "shweta",
      age: "9",
    },
  ]);
  const [newCustomer, setNewCustomer] = useState({
    id: lists.length,
    firstname: "",
    age: "",
  });
  const handleAdd = (e) => {
    e.preventDefault();
    const index = lists.findIndex(
      (list) => list.id === parseInt(newCustomer.id)
    );

    if (index >= 0) {
      lists[index] = newCustomer;
      setLists([...lists]);
    } else {
      setLists([...lists, newCustomer]);
    }
    setNewCustomer({ id: lists.length, firstname: "", age: "" });
  };

  const handleChange = (e) => {
    if (e.target.name === "edit") {
      const editItem = lists.at(parseInt(e.target.id));

      setNewCustomer(editItem);
    }
    if (e.target.name === "delete") {
      const index = lists.findIndex(
        (list) => list.id === parseInt(e.target.id)
      );
      console.log(index);
      if (index >= 0) {
        if (window.confirm(`Do you want to delete ${lists[index].firstname}`)) {
          lists.splice(index, 1);
          setLists([...lists]);
        }
      }
    }
  };

 
  return (
    <div className="App">
      <CustomerList
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        handleAdd={handleAdd}
      />

      <Detail lists={lists} handleChange={handleChange} />
    </div>
  );
}

export default App;
