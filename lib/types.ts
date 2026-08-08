export type Person = {
  id: string;
  userId: string;
  name: string;
  relationship: string | null;
  memories: string | null;
  tone: string | null;
  writingSample: string | null;
  createdAt: string;
};

export type Message = {
  id: string;
  personId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
};
