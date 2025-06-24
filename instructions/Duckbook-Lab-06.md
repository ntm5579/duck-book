# 🧪 Duckbook Lab 6: Adding a Post Form with Controlled Inputs

**Goal:** Learn how to use controlled inputs and handle form submissions in React.

---

## 🐥 Background

In React, form elements like `<input>` and `<textarea>` are often used as *controlled components*, which means their values are tied to state. You update the state as the user types.

---

## 🛠️ Task

You’ll add a simple form to let users create a new post. For now, the post won't be added to the list, but you'll log the content to the console.

---

## 🧾 Instructions

1. **Create a new component called `PostForm.jsx`** in your `src` folder.

```jsx
// src/PostForm.jsx
import { useState } from 'react';

export default function PostForm() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('New post:', { author, content });
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

2. **Update `App.jsx`** to include the new form above the posts:

```jsx
// src/App.jsx
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';
import DuckButton from './DuckButton';
import PostForm from './PostForm';
import Post from './Post';

function App() {
  const posts = [
    { id: 1, author: 'Daffy', content: 'Just got a new pond!' },
    { id: 2, author: 'Donald', content: 'Quack attack at 3pm. Who’s in?' },
    { id: 3, author: 'Scrooge', content: 'Investing in breadcrumbs.' }
  ];

  return (
    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label="Add Friend" />
      <DuckButton label="Message" />
      <DuckButton label="Waddle Away" />
      <hr />
      <PostForm />
      {posts.map(post => (
        <Post key={post.id} author={post.author} content={post.content} />
      ))}
    </DuckbookLayout>
  );
}

export default App;
```

---

## ✅ Success Criteria

- A form appears above the posts.
- You can type a name and message.
- Submitting logs the new post to the console and clears the form.

---

## 🧠 Why This Matters

Controlled inputs are the foundation of forms in React. They give you full control over form behavior and allow validation, formatting, and integration with your app’s state.
