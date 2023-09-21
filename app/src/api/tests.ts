import { Test } from '../types';

const baseUrl = 'http://localhost:5050';

export async function getAllTests() {
  const res = await fetch(`${baseUrl}/tests`);
  if (!res.ok) {
    const msg = `Could not load all tests: ${res.status}`;
    throw new Error(msg);
  }
  const tests: Test[] = await res.json();
  return tests;
}

export async function getTest(id: string) {
  const res = await fetch(`${baseUrl}/tests/${id}`);
  if (!res.ok) {
    const msg = `Could not load a test: ${res.status}`;
    throw new Error(msg);
  }
  const test: Test = await res.json();
  return test;
}
