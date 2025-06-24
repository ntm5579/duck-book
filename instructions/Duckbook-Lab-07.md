# 🧪 Duckbook Lab 7: Lifting State Up to Add Posts

**Goal:** Move state to a common parent so new posts can be added to the feed.

---

## 🐥 Background

In React, when multiple components need to share state, you “lift” the state up to their nearest common ancestor. This allows child components to access and update shared data through props.

---

## 🛠️ Task

You’ll lift the post list state into `App.jsx`, then update it when a new post is submitted from `PostForm`.

---

## 🧾 Instructions

1. **Update `App.jsx`** to hold the list of posts in state.

```jsx
// src/App.jsx
import { useState } from 'react';
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';
import DuckButton from './DuckButton';
import PostForm from './PostForm';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Daffy', content: 'Just got a new pond!' },
    { id: 2, author: 'Donald', content: 'Quack attack at 3pm. Who’s in?' },
    { id: 3, author: 'Scrooge', content: 'Investing in breadcrumbs.' }
  ]);

  function addPost(newPost) {
    setPosts([{ id: Date.now(), ...newPost }, ...posts]);
  }

  return (
    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label="Add Friend" />
      <DuckButton label="Message" />
      <DuckButton label="Waddle Away" />
      <hr />
      <PostForm onSubmit={addPost} />
      {posts.map(post => (
        <Post key={post.id} author={post.author} content={post.content} />
      ))}
    </DuckbookLayout>
  );
}

export default App;
```

2. **Update `PostForm.jsx`** to call the `onSubmit` prop instead of logging:

```jsx
// src/PostForm.jsx
import { useState } from 'react';

export default function PostForm({ onSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ author, content });
    setAuthor('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>Create a New Post</h3>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={e => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <button type="submit" style={{
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Post
      </button>
    </form>
  );
}
```

---

## ✅ Success Criteria

- Submitting the form adds a new post to the top of the feed.
- The new post appears immediately on the screen.

---

## 🧠 Why This Matters

Lifting state is a key part of thinking in React. It helps you create data flow that’s predictable and easy to manage.
