import { Post, PostWithoutContent } from '@/types/blog';
import { getDB } from './mongodb';
import { ObjectId } from 'mongodb';

/**
 * If something is wrong, returns empty array.
 */
export const getPosts = async (): Promise<Post[]> => {
  const db = await getDB();

  try {
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
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getPostIds = async () => {
  const db = await getDB();

  try {
    const posts = await db
      .collection('posts')
      .aggregate<{ _id: string }>([
        {
          $project: {
            _id: {
              $toString: '$_id',
            },
          },
        },
      ])
      .toArray();

    return posts.map((post) => post._id);
  } catch (e) {
    console.error(e);
    return [];
  }
};

/**
 * If something is wrong or the post is not found, returns null.
 */
export const getPost = async (id: string): Promise<Post | null> => {
  const db = await getDB();
  try {
    const post = await db.collection('posts').findOne<Post>(
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

    if (post === null) throw new Error('not found');

    return post;
  } catch (e) {
    console.error(e);
    return null;
  }
};

/**
 * If something is wrong, returns empty array.
 */
export const getMorePosts = async ({
  exceptionId,
  size = 3,
}: {
  exceptionId?: string;
  size?: number;
}): Promise<PostWithoutContent[]> => {
  const db = await getDB();

  try {
    return await db
      .collection('posts')
      .aggregate<PostWithoutContent>([
        {
          ...(exceptionId
            ? {
                $match: {
                  _id: {
                    $ne: new ObjectId(exceptionId),
                  },
                },
              }
            : {}),
        },
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
          },
        },
        { $sample: { size } },
      ])
      .toArray();
  } catch (e) {
    console.error(e);
    return [];
  }
};
