import { Question } from '../types';
// import { AddOption } from './AddOption';
import { OptionItem } from './Option';

type QuestionItemProps = {
  question: Question;
};

export function QuestionItem({ question }: QuestionItemProps) {
  const { text, value, options } = question || {};

  return (
    <>
      <h3>{text}</h3>
      <p>Кількість балів: {value}</p>
      <ul>
        {options?.length === 0 && <p>Немає варіантів відповіді</p>}
        {options?.map((option, index) => <li key={index}><OptionItem option={option} /></li>)}
        {/* <AddOption /> */}
      </ul>
    </>
  );
}
