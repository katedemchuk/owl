import { Form, Link, redirect } from 'react-router-dom';
import { createTest, type createTestInput } from '../api/tests';

export async function action({ request, params}: any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const insertedId = await createTest(data as createTestInput);
  return redirect(`/test/${insertedId}`);
}

export function CreateTest() {
  return (
    <Form method="post">
      <label htmlFor="title">Назва</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="duration">Тривалість</label>
      <input type="number" name="duration" id="duration" min={1} max={1440} />

      <label htmlFor="description">Опис</label>
      <textarea name="description" id="description" cols={30} rows={10}></textarea>

      <div>
        <button type="submit">Створити</button>
        <Link to="/">Відмінити</Link>
      </div>
    </Form>
  )
}
