import React from "react";

const Detail = ({ lists,handleChange }) => {
  return (
    <main className="main">
      {lists.length ? (
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
              <label className="lab">{list.firstname}</label>
              <label className="lab1"> {list.age}</label>
              <button name="edit"  id={list.id}onClick={ handleChange}>Edit</button>
              <button name="delete" id={list.id} onClick={handleChange}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p> List is empty</p>
      )}
    </main>
  );
};

export default Detail;
