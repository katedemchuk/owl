import { useState, useEffect } from 'react';
import { getAllTests } from '../api/tests';
import { Test } from '../types';

export function Home() {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    const loadTests = async () => {
      setTests(await getAllTests());
    };
    loadTests();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Назва тесту</th>
            <th>Тривалість</th>
            <th>Дата редагування</th>
            <th>Кількість запитань</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(test =>
            <tr>
              <td>{test.title}</td>
              <td>{test.duration}</td>
              <td>{test.updatedAt}</td>
              <td>{test?.questions?.length || 0}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
