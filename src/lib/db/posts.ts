import { Post, PostWithoutContent } from '@/types/blog';
import { executeDB } from './mongodb';
import { ObjectId } from 'mongodb';

/**
 * If something is wrong, returns empty array.
 */
export const getPosts = async () => {
  return new Promise<Post[]>((resolve) => {
    executeDB(async (db) => {
      try {
        const posts = await db
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

        resolve(posts);
      } catch (e) {
        console.error(e);
        resolve([]);
      }
    });
  });
};

export const getPostIds = async () => {
  return new Promise<string[]>((resolve) => {
    executeDB(async (db) => {
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

        resolve(posts.map((post) => post._id));
      } catch (e) {
        console.error(e);
        resolve([]);
      }
    });
  });
};

/**
 * If something is wrong or the post is not found, returns null.
 */
export const getPost = async (id: string) => {
  return new Promise<Post | null>((resolve) => {
    executeDB(async (db) => {
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
        resolve(post);
      } catch (e) {
        console.error(e);
        resolve(null);
      }
    });
  });
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
}) => {
  return new Promise<PostWithoutContent[]>((resolve) => {
    executeDB(async (db) => {
      try {
        const morePosts = await db
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

        resolve(morePosts);
      } catch (e) {
        console.error(e);
        resolve([]);
      }
    });
  });
};
