export type Test = {
  _id: string;
  title: string;
  description: string;
  duration: number; // min
  updatedAt: string;
  questions?: Question[];
}

export type Question = {
  text: string;
  value: number;
  options: Option[];
}

export type Option = {
  text: string;
  isCorrect: boolean;
}
