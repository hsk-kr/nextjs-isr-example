import { Post } from '@/types/blog';
import { connectDB } from './mongodb';
import { removeHtmlTags } from '../blog';

export const getPosts = async () => {
  const connect = await connectDB();
  return await connect
    .db(process.env.DB_NAME)
    .collection('posts')
    .find<Post>(
      {},
      {
        projection: {
          title: 1,
          createdAt: 1,
          content: {
            $substr: ['$content', 0, 200],
          },
        },
      }
    )
    .map((post) => {
      const { _id, content, ...rest } = post;

      const newPost = {
        ...rest,
        content: removeHtmlTags(content),
        id: _id.toString(),
      };

      return newPost;
    })
    .toArray();
};
