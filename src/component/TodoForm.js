import { React, useState } from 'react';

import shortid from 'shortid';

    const TodoForm = (props) => {
      const [text, setText] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
          id: shortid.generate(),
          text: text,
          Complete: false,
        });
      };

      const handleChange = (e) => {
        setText(e.target.value);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            onChange={handleChange}
            value={text}
          ></input>
          <button className="button" onClick={handleSubmit}>
            Add Todo
          </button>
        </form>
      );
    };
export default TodoForm;