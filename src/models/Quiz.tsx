export interface Quiz {
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  choices: string[];
}
