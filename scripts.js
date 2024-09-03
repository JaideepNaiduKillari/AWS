document.addEventListener('DOMContentLoaded', function () {
  const posts = [
      {
          title: "Understanding JavaScript Closures",
          content: "Closures are a fundamental concept in JavaScript..."
      },
      {
          title: "A Guide to Responsive Web Design",
          content: "Responsive web design is essential in modern web development..."
      },
      {
          title: "Why Learn ReactJS?",
          content: "ReactJS is a powerful library for building user interfaces..."
      }
  ];

  const blogPostsContainer = document.getElementById('blog-posts');

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      
      const postTitle = document.createElement('h3');
      postTitle.textContent = post.title;
      
      const postContent = document.createElement('p');
      postContent.textContent = post.content;
      
      postElement.appendChild(postTitle);
      postElement.appendChild(postContent);
      
      blogPostsContainer.appendChild(postElement);
  });
});
d