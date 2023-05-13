import React from "react";
import { useRef } from "react";

const CustomerList = ({ newCustomer, setNewCustomer, handleAdd }) => {
  const inputRef = useRef();
  return (
    <main>
      <form className="form" >
        <input
          name="firstname"
          placeholder="Firstname"
          ref={inputRef}
          value={newCustomer.firstname}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value })
          }
        />

        <input
          name="age"
          placeholder="Age"
          value={newCustomer.age}
          onChange={(e) =>
            setNewCustomer({
              ...newCustomer,
              [e.target.name]: e.target.value,
            })
          }
        />

        <button name="add" onClick={handleAdd}>Add</button>
      </form>
    </main>
  );
};

export default CustomerList;
