import { Option } from '../types';

type OptionItemProps = {
  option: Option;
};

export function OptionItem({ option }: OptionItemProps) {
  const { text, isCorrect } = option || {};

  return (
    <>
      <p>{text}</p>
      {isCorrect && <p>Правильна відповідь</p>}
    </>
  );
}
