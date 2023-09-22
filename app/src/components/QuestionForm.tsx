import { useState } from 'react';
import { Question } from '../types';

const INIT_QUESTION: Question = { text: '', value: 1, options: [] };

export function QuestionForm() {
  const [question, setQuestion] = useState(INIT_QUESTION);

  const updateQuestion = (prop: keyof Question, value: Question[keyof Question]) => {
    let updated = { ...question, [prop]: value };
    setQuestion(updated);
  };

  return(
    <>
      <label htmlFor="text">Текст запитання</label>
      <input
        type="text"
        name="text"
        id="text"
        value={question.text}
        onChange={(e) => updateQuestion('text', e.target.value)}
      />
      <label htmlFor="value">Кількість балів</label>
      <input
        type="number"
        name="value"
        id="value"
        min={0.1}
        value={question.value}
        onChange={(e) => updateQuestion('value', +e.target.value)}
      />
      <button type="button">Зберегти запитання</button>
    </>
  );
}
