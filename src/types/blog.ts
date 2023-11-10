import { Document, ObjectId } from 'mongodb';

export interface Post extends Document {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
}
