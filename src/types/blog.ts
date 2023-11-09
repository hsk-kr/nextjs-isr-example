import { Document, ObjectId } from 'mongodb';

export interface Post extends Document {
  _id: ObjectId;
  title: string;
  content: string;
  createdAt: string;
}
