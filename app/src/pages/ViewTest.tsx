import { getTest } from '../api/tests';
import { useLoaderData } from 'react-router-dom';
import { Test } from '../types';
import { TestInfo } from '../components/TestInfo';
import { TestQuestions } from '../components/TestQuestions';

export async function loader({ params }: any) {
  const test = await getTest(params?.testId);
  return { test };
}

export function ViewTest() {
  const { test } = useLoaderData() as { test: Test };
  const { questions = [] } = test || {};

  return (
    <>
      <section>
        <TestInfo test={test} />
      </section>
      <section>
        <TestQuestions questions={questions} />
      </section>
    </>
  );
}
