import React from "react";
import "../style.css";

const Form = ({ submitHandler, inputValue, setInputValue }) => {
  const inputValueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="container form">
      <input
        onChange={inputValueChangeHandler}
        value={inputValue}
        className="numberInput"
        type="number"
        min="1"
        max="100"
        required
      />
      <input className="btn submit-btn" type="submit" value="Get photos" />
    </form>
  );
};
export default Form;
