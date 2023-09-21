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
