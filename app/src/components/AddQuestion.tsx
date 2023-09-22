import { useState } from 'react';
import { QuestionForm } from './QuestionForm';

export function AddQuestion() {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => setShowForm(!showForm);

  return (
    <>
      {!showForm && <button type="button" onClick={toggleShowForm}>Додати запитання</button>}
      {showForm && <QuestionForm />}
      {showForm && <button type="button" onClick={toggleShowForm}>Відмінити</button>}
    </>
  )
}
