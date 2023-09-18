'use client'

import { useState } from 'react';

export default function Create() {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [duration, setDuration] = useState(25);

  async function create() {
    const data = { title, description, duration };
    const res = await fetch('http://localhost:5050/tests', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }

  return (
    <>
      <h1>Новий тест</h1>
      <form>
        <label htmlFor="title">Назва</label>
        <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="description">Опис</label>
        <textarea name="description" id="description" cols={30} rows={10} onChange={(e) => setDescription(e.target.value)}></textarea>

        <label htmlFor="duration">Тривалість</label>
        <input id="duration" type="number" min={1} max={1440} onChange={(e) => setDuration(+e.target.value)} />

        <button type="submit" onClick={async () => await create()}>Створити</button>
      </form>
    </>
  );
}
