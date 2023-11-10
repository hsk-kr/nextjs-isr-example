import { Document } from 'mongodb';

export interface Post extends Document {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export type PostWithoutContent = Omit<Post, 'content'>;
