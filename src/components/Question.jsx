import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);

  const buttonToggle = () => {
    setToggle(!toggle);
  };

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn" onClick={buttonToggle}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
