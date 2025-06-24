# 🧪 Duckbook Lab 10: Adding Basic Styling with CSS Modules

**Goal:** Learn how to use CSS Modules in a Vite + React project to organize and scope your styles.

---

## 🐥 Background

CSS Modules let you write traditional CSS, but the styles only apply to the component they're imported into. This helps avoid naming conflicts and makes your styles easier to manage.

---

## 🛠️ Task

You’ll create a new CSS Module for the `Post` component and apply some custom styles.

---

## 🧾 Instructions

1. **Create a new file called `Post.module.css`** in your `src` folder.

```css
/* src/Post.module.css */
.post {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  background-color: #fdfdfd;
  transition: background-color 0.2s;
}

.post:hover {
  background-color: #f5f5f5;
}

.author {
  font-weight: bold;
  color: #333;
}

.content {
  margin-top: 0.5rem;
}
```

2. **Update `Post.jsx` to import and use the styles.**

```jsx
// src/Post.jsx
import { useState } from 'react';
import styles from './Post.module.css';

export default function Post({ author, content }) {
  const [likes, setLikes] = useState(0);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  return (
    <div className={styles.post}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
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

3. Save everything and view your app. The posts should now have improved styling that applies only to the `Post` component.

---

## ✅ Success Criteria

- The `Post` component is styled using a CSS Module.
- Styles are scoped to the component and do not affect other parts of the app.

---

## 🧠 Why This Matters

CSS Modules are a clean, scalable way to manage styles in React apps. They keep styles local and avoid global naming collisions.
