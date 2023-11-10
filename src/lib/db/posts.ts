import { Post } from '@/types/blog';
import { getDB } from './mongodb';
import { removeHtmlTags } from '../blog';
import { ObjectId } from 'mongodb';

export const getPosts = async (): Promise<Post[]> => {
  const db = await getDB();
  return await db
    .collection('posts')
    .aggregate<Post>([
      {
        $project: {
          _id: {
            $toString: '$_id',
          },
          title: 1,
          createdAt: {
            $dateFromString: {
              dateString: '$createdAt',
            },
          },
          content: {
            $substr: ['$content', 0, 200],
          },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ])
    .toArray();
};

export const getPost = async (id: string): Promise<Post | null> => {
  const db = await getDB();
  return await db.collection('posts').findOne<Post>(
    {
      _id: new ObjectId(id),
    },
    {
      projection: {
        _id: {
          $toString: '$_id',
        },
        title: 1,
        content: 1,
        createdAt: {
          $dateFromString: {
            dateString: '$createdAt',
          },
        },
      },
    }
  );
};
