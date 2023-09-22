import { Test } from '../types';

export function TestInfo({ test }: { test: Test}) {
  const { title, description, duration, questions, updatedAt } = test || {};

  return (
    <>
      <h1>{title}</h1>
      <p>Опис: {description}</p>
      <p>Тривалість: {duration} хв</p>
      <p>Останнє оновлення: {updatedAt}</p>
      <p>Кількість запитань: {questions?.length || 0}</p>
    </>
  );
}
