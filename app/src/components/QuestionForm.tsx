import { Form, redirect } from 'react-router-dom';
import { addQuestion } from '../api/tests';
import { useState } from 'react';
import { Question } from '../types';
import { Link } from 'react-router-dom';

export async function action({ request, params }: any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const data1 = await addQuestion(
    params.testId,
    data as Partial<Question>
  );
  console.log(data1);
  return redirect(`../`);
}

const INIT_QUESTION: Question = { text: '', value: 1, options: [] };

export function QuestionForm() {
  const [question, setQuestion] = useState(INIT_QUESTION);

  const updateQuestion = (prop: keyof Question, value: Question[keyof Question]) => {
    let updated = { ...question, [prop]: value };
    setQuestion(updated);
  };

  return(
    <Form method="patch">
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
        value={question.value}
        onChange={(e) => updateQuestion('value', +e.target.value)}
      />
      <button type="submit">Зберегти запитання</button>
      <Link to="../">Відмінити</Link>
    </Form>
  );
}
