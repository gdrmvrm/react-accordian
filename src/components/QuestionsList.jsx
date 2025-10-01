import React from 'react';
import Question from './Question';

const QuestionsList = ({ list }) => {
  return (
    <article>
      {list.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </article>
  );
};

export default QuestionsList;
