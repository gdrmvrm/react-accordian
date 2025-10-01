import { useState } from 'react';
import list from './data';

const App = () => {
  const [questions, setQuestions] = useState(list);

  return <h2>Accordion Starter</h2>;
};
export default App;
