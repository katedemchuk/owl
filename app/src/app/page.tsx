import Link from 'next/link';
import type { Test } from '../types';

async function getTests(): Promise<Test[]> {
  const res = await fetch('http://localhost:5050/tests');
  if (!res.ok) throw new Error('Failed to fetch tests');
  return await res.json();
}

export default async function Home() {
  const tests = await getTests();
  const list = tests?.map(({ _id, title, description, updatedAt = new Date() }: Test) =>
    <li>
      <h6>{title}</h6>
      {description ? <p>{description}</p> : null}
      {updatedAt ? <p>Останнє редагування {updatedAt?.toLocaleDateString('uk-UA')}</p> : null}
      <Link href={`/test/${_id}`}>Переглянути</Link>
    </li>
  );
  return (
    <>
      <Link href="/create">Створити тест</Link>
      <ul>{list}</ul>
    </>
  );
}
