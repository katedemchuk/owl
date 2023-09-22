import { useState } from 'react';
import { Option } from '../types';

const INIT_OPTION: Option = { text: '', isCorrect: false };

export function OptionForm() {
  const [option, setOption] = useState(INIT_OPTION);

  const updateOption = (prop: keyof Option, value: Option[keyof Option]) => {
    let updated = { ...option, [prop]: value };
    setOption(updated);
  };

  return (
    <>
      <label htmlFor="inputTextId">Текст відповіді</label>
      <input
        type="text"
        name="answer"
        id="answer"
        value={option.text}
        onChange={(e) => updateOption('text', e.target.value)}
      />
      <div className="input-inline">
        <input
          type="checkbox"
          name="isCorrect"
          id="isCorrect"
          checked={option.isCorrect}
          onChange={(e) => updateOption('isCorrect', e.target.checked)}
        />
        <label htmlFor="isCorrect">Правильна відповідь</label>
      </div>
      <button type="button">Зберегти варіант відповіді</button>
    </>
  );
}
