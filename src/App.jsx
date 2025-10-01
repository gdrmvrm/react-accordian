import { useState } from 'react';
import list from './data';
import QuestionsList from './components/QuestionsList';

const App = () => {
  const [questions, setQuestions] = useState(list);

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <QuestionsList list={questions} />
      </div>
    </main>
  );
};
export default App;
