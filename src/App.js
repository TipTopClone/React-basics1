import { useState } from 'react';
import { List } from './List';
import './App.css';
import { Form } from './Form';

function App() {
  const [userArg, setUserArg] = useState(['Sujan', 'Mahat', 'Asim']);

  const addUser = (user) => {
    setUserArg([...userArg, user]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      <List userArg={userArg} />
    </div>
  );
}

export default App;
