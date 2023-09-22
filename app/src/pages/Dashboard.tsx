import { Test } from '../types';
import { useLoaderData, Link } from 'react-router-dom';
import { getAllTests } from '../api/tests';

export async function loader() {
  const tests = await getAllTests();
  return { tests };
}

export function Dashboard() {
  const { tests = [] } = useLoaderData() as { tests: Test[] };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Назва тесту</th>
            <th>Тривалість</th>
            <th>Останнє оновлення</th>
            <th>Кількість запитань</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(({ _id, title, duration, updatedAt, questions }) =>
            <tr key={_id}>
              <td><Link to={`/test/${_id}`}>{title}</Link></td>
              <td>{duration}</td>
              <td>{updatedAt}</td>
              <td>{questions?.length || 0}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
