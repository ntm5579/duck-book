# 🧪 Duckbook Lab 5: Using useState to Track Likes

**Goal:** Learn how to use the `useState` hook to track component state.

---

## 🐥 Background

React’s `useState` hook lets you add state to function components. You can use it to store values that change over time, like a like count.

---

## 🛠️ Task

You’ll modify the Like button to track and display the number of likes for each post.

---

## 🧾 Instructions

1. **Update your `Post.jsx`** to use `useState`.

```jsx
// src/Post.jsx
import { useState } from 'react';

export default function Post({ author, content }) {
  const [likes, setLikes] = useState(0);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '6px',
      backgroundColor: '#f9f9f9'
    }}>
      <strong>{author}</strong>
      <p>{content}</p>
      <button onClick={handleLikeClick} style={{
        marginTop: '0.5rem',
        backgroundColor: '#ffc107',
        color: 'black',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        👍 Like ({likes})
      </button>
    </div>
  );
}
```

2. Save your changes and make sure the dev server is running.
3. Click the Like button under a post. The number should increase.

---

## ✅ Success Criteria

- The like count starts at 0.
- Clicking the button increases the count for that specific post.

---

## 🧠 Why This Matters

State is how components become dynamic and interactive. With `useState`, your app can remember values between renders.
