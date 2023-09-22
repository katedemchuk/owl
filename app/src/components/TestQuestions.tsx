import { Question } from '../types';
import { AddQuestion } from './AddQuestion';
import { QuestionItem } from './QuestionItem';

type TestQuestionsProps = {
  questions: Question[];
};

export function TestQuestions({ questions = [] }: TestQuestionsProps) {
  return (
    <>
      <h2>Запитання</h2>
      {questions.map(question => <QuestionItem question={question} />)}
      <AddQuestion />
    </>
  );
}
