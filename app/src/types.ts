export type Test = {
  title: string;
  description?: string;
  duration?: number;
  questions?: Question[];
  updatedAt?: Date;
  _id: string;
}

export type Question = {
  text: string;
  value: number;
  options?: Option[];
}

export type Option = {
  text: string;
  isCorrect: boolean;
}
