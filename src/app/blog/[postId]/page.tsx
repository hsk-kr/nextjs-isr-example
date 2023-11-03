import Post from './components/Post';
import MorePosts from './components/MorePosts';

interface PostPageProps {
  params: {
    postId: string;
  };
}

export default function PostPage({ params: { postId } }: PostPageProps) {
  const post = {
    id: 1,
    title: 'English is really important',
    content,
    createdAt: '2022-11-03',
  };

  const posts = [
    {
      id: 2,
      title: 'German is really important',
      createdAt: '2022-11-03',
    },
    {
      id: 3,
      title: 'Italian is really important',
      createdAt: '2022-11-03',
    },
    {
      id: 4,
      title: 'Russian is really important',
      createdAt: '2022-11-03',
    },
  ];

  return (
    <>
      <Post
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
      />
      <div className="border-b-[1px] border-gray-800 my-6" />
      <MorePosts posts={posts} />
    </>
  );
}

const content = `  <h1>Enhancing Language Learning with HTML Elements: A Multifaceted Approach</h1>

<p><strong>Introduction</strong></p>

<p>Learning languages is an enriching and versatile skill that opens doors to new cultures, opportunities, and connections. In our increasingly interconnected world, the ability to communicate in multiple languages is more valuable than ever. While traditional language learning methods have their merits, incorporating HTML elements into the process can be a powerful tool for enhancing language acquisition. In this article, we will explore the benefits of using HTML elements in language learning and discuss how they can improve the overall learning experience.</p>

<h2>1. Interactive Learning</h2>

<p>HTML elements offer a dynamic and interactive way to engage with language content. By incorporating elements such as buttons, forms, and multimedia, learners can actively practice their language skills. For example, interactive quizzes and flashcards can be created using HTML, allowing learners to test their knowledge and receive immediate feedback. This hands-on approach helps reinforce vocabulary and grammar while making the learning process more enjoyable.</p>

<h2>2. Visual and Multimedia Aids</h2>

<p>HTML allows for the integration of visual and multimedia elements into language learning materials. Images, videos, and audio clips can provide context and enhance comprehension. Visual aids can be especially beneficial for beginners, as they help learners associate words with their real-world counterparts. Additionally, videos and audio materials can improve pronunciation and listening skills, making the language learning process more comprehensive.</p>

<h2>3. Customization and Personalization</h2>

<p>HTML elements enable learners to customize their language learning experience. They can create personalized language-learning websites, web apps, or digital notebooks tailored to their specific needs and interests. This flexibility allows learners to focus on the vocabulary and topics that matter most to them, making the learning process more engaging and relevant.</p>

<h2>4. Immediate Feedback and Progress Tracking</h2>

<p>HTML-based language learning tools can provide immediate feedback on exercises and assessments. This instant feedback helps learners identify and correct their mistakes, promoting efficient learning. Furthermore, progress tracking features can motivate learners by allowing them to monitor their advancement over time. Knowing where they stand in their language proficiency can be a powerful incentive to continue learning.</p>

<h2>5. Accessibility and Portability</h2>

<p>Learning languages using HTML elements provides the advantage of accessibility and portability. With cloud-based applications and websites, learners can access their language materials from various devices, including smartphones, tablets, and computers. This convenience allows for learning on the go and encourages consistent practice.</p>

<h2>6. Collaboration and Community Building</h2>

<p>HTML elements can be used to create online language learning communities. Learners can collaborate on projects, engage in discussions, and exchange language tips through forums and chatrooms. Building a sense of community among language learners fosters motivation and a sense of belonging, making the language learning journey more enjoyable and effective.</p>

<h2>7. Real-World Application</h2>

<p>One of the most significant benefits of using HTML elements in language learning is the opportunity for real-world application. By creating websites or web applications in the target language, learners can immerse themselves in a practical language environment. This hands-on experience can improve their language skills significantly by reinforcing vocabulary and grammar in a real-world context.</p>

<p><strong>Conclusion</strong></p>

<p>Incorporating HTML elements into language learning is a versatile and effective approach to mastering new languages. By embracing interactivity, multimedia content, personalization, and real-world application, learners can enhance their language skills while enjoying a more engaging and tailored learning experience. With the widespread availability of digital tools and resources, taking advantage of HTML-based language learning has never been easier. So, whether you're a beginner or an advanced learner, consider adding HTML elements to your language learning toolkit and unlock a world of possibilities for language acquisition.</p>`;
