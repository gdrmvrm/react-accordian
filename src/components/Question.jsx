import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  
  return (
    <section className="question">
      <header>
        <h5>{title}</h5>
      </header>
      <p>{info}</p>
    </section>
  );
};

export default Question;
