import { Question, Test } from '../types';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/tests`;

export async function getAllTests() {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) {
    const msg = `Could not load all tests: ${res.status}`;
    throw new Error(msg);
  }
  const tests: Test[] = await res.json();
  return tests;
}

export async function getTest(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    const msg = `Could not load a test: ${res.status}`;
    throw new Error(msg);
  }
  const test: Test = await res.json();
  return test;
}

export async function createTest(test: Partial<Test>) {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(test),
  });
  if (!res.ok) {
    const msg = `Could not create a test: ${res.status}`;
    throw new Error(msg);
  }
  const { insertedId }: { insertedId: string } = await res.json();
  return insertedId;
}

export async function addQuestion(testId: string, question: Partial<Question>) {
  const res = await fetch(`${BASE_URL}/question/${testId}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(question),
  });
  if (!res.ok) {
    const msg = `Could not add a question: ${res.status}`;
    throw new Error(msg);
  }
  const data = await res.json();
  return data;
}
