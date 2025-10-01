import React from 'react';
import Question from './Question';

const QuestionsList = ({ list, activeId, toggleQuestion }) => {
  return (
    <section>
      {list.map((question) => {
        return <Question key={question.id} {...question} activeId={activeId} toggleQuestion={toggleQuestion} />;
      })}
    </section>
  );
};

export default QuestionsList;
