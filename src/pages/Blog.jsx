import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'First Blog Post',
      date: 'September 27, 2024',
      content: 'This is the content of the first blog post. It’s all about learning React and JSX.'
    },
    {
      title: 'Second Blog Post',
      date: 'September 25, 2024',
      content: 'Here’s another post. We’re diving deeper into state management and component structure.'
    },
    {
      title: 'Third Blog Post',
      date: 'September 20, 2024',
      content: 'In this post, we explore React hooks and their impact on functional components.'
    }
  ];

  return (
    <div>
      <header>
        <div className="container">
          <h1>My Awesome Blog</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          {posts.map((post, index) => (
            <article key={index} className="blog-post">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p>{post.content}</p>
            </article>
          ))}
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 My Awesome Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
