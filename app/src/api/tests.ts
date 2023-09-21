import { Test } from '../types';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getAllTests() {
  const res = await fetch(`${BASE_URL}/tests`);
  if (!res.ok) {
    const msg = `Could not load all tests: ${res.status}`;
    throw new Error(msg);
  }
  const tests: Test[] = await res.json();
  return tests;
}

export async function getTest(id: string) {
  const res = await fetch(`${BASE_URL}/tests/${id}`);
  if (!res.ok) {
    const msg = `Could not load a test: ${res.status}`;
    throw new Error(msg);
  }
  const test: Test = await res.json();
  return test;
}

export type createTestInput = {
  title: string;
  description: string;
  duration: number;
}

export async function createTest(input: createTestInput) {
  const res = await fetch(`${BASE_URL}/tests`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const msg = `Could not create a test: ${res.status}`;
    throw new Error(msg);
  }
  const { insertedId }: { insertedId: string } = await res.json();
  return insertedId;
}
