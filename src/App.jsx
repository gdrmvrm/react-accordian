import { useState } from 'react';
import list from './data';
import QuestionsList from './components/QuestionsList';

const App = () => {
  const [questions, setQuestions] = useState(list);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <QuestionsList list={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
      </div>
    </main>
  );
};
export default App;
