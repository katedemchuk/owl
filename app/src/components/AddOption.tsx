import { useState } from 'react';
import { OptionForm } from './OptionForm';

export function AddOption() {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => setShowForm(!showForm);

  return (
    <>
      {!showForm && <button type="button" onClick={toggleShowForm}>Додати варіант відповіді</button>}
      {showForm && <OptionForm />}
      {showForm && <button type="button" onClick={toggleShowForm}>Відмінити</button>}
    </>
  )
}
