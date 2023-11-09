import { Post } from '@/types/blog';
import { connectDB } from './mongodb';

export const getPosts = async () => {
  const connect = await connectDB();
  return await connect
    .db(process.env.DB_NAME)
    .collection('posts')
    .find<Post>({})
    .map((post) => {
      const { _id, ...rest } = post;

      const newPost = {
        ...rest,
        id: _id.toString(),
      };

      return newPost;
    })
    .toArray();
};
