import { getTest } from '../api/tests';
import { useLoaderData } from 'react-router-dom';
import { Test } from '../types';

export async function loader({ params }: any) {
  const test = await getTest(params?.testId);
  return { test };
}

export function ViewTest() {
  const { test } = useLoaderData() as { test: Test };
  const { title, description, duration, questions, updatedAt } = test || {};

  return (
    <section>
      <h1>{title}</h1>
      <p>Опис: {description}</p>
      <p>Тривалість: {duration} хв</p>
      <p>Останнє оновлення: {updatedAt}</p>
      <p>Кількість запитань: {questions?.length || 0}</p>
    </section>
  );
}
