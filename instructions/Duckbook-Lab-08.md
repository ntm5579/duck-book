# 🧪 Duckbook Lab 8: Conditional Rendering

**Goal:** Learn how to conditionally show and hide components in React.

---

## 🐥 Background

Sometimes you want to show something only if a certain condition is true. In React, you can do this with simple conditional logic—usually using `if` statements or the `&&` operator.

---

## 🛠️ Task

You’ll add a toggle button that shows or hides the post form.

---

## 🧾 Instructions

1. **Update `App.jsx`** to manage a `showForm` piece of state and toggle it.

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

  const [showForm, setShowForm] = useState(true);

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
      <button onClick={() => setShowForm(!showForm)} style={{
        marginBottom: '1rem',
        backgroundColor: '#2196f3',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        {showForm ? 'Hide Post Form' : 'Show Post Form'}
      </button>
      {showForm && <PostForm onSubmit={addPost} />}
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

- You see a button labeled “Hide Post Form” (or “Show Post Form”).
- Clicking it toggles whether the form is shown on the screen.

---

## 🧠 Why This Matters

Conditional rendering is essential for controlling what your users see. You’ll use it for toggles, modals, error messages, loading indicators, and more.
