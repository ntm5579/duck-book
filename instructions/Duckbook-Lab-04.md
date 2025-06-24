# 🧪 Duckbook Lab 4: Handling Events in React

**Goal:** Learn how to handle user interactions using event handlers.

---

## 🐥 Background

React lets you respond to user actions using event handlers like `onClick`. You define a function and pass it to the event handler on a component.

---

## 🛠️ Task

You’ll add a "Like" button to each post and track the number of likes. You'll use React state in a future lab, but for now, just log to the console.

---

## 🧾 Instructions

1. **Update your `Post.jsx`** to include a Like button with a click handler.

```jsx
// src/Post.jsx
export default function Post({ author, content }) {
  function handleLikeClick() {
    console.log(`Liked post by ${author}`);
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
        👍 Like
      </button>
    </div>
  );
}
```

2. Save your changes and make sure your dev server is running (`npm run dev`).
3. Open your browser’s developer console.
4. Click the Like button under each post and see the message appear in the console.

---

## ✅ Success Criteria

- Each post now has a Like button.
- Clicking the button logs a message to the console.

---

## 🧠 Why This Matters

Event handling is how apps become interactive. You’ll use it to respond to clicks, inputs, form submissions, and more.
