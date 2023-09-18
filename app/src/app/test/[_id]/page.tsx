import type { Test } from '../../../types';
import Link from 'next/link';

async function getTest(id: string): Promise<Test> {
  const res = await fetch(`http://localhost:5050/tests/${id}`);
  if (!res.ok) throw new Error('Failed to fetch test');
  return res.json();
}

export default async function Test({ params }: { params: { _id: string } }) {
  const { title, description, duration, updatedAt } = await getTest(params._id);
  return (
    <>
      <Link href="/">До всіх тестів</Link>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
      {duration ? <p>Тривалість: {duration} хв</p> : null}
      {updatedAt ? <p>Останнє редагування {updatedAt?.toLocaleDateString('uk-UA')}</p> : null}
    </>
  )
}
