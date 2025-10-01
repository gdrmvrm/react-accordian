import React from 'react';
import Question from './Question';

const QuestionsList = ({ list }) => {
  return (
    <sction>
      {list.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </sction>
  );
};

export default QuestionsList;
