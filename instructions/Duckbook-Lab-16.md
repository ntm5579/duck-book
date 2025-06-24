# 🧪 Duckbook Lab 16: Persisting Posts in Local Storage

**Goal:** Save and restore posts between page reloads using the browser’s local storage.

---

## 🐥 Background

React state is temporary—it resets when the page reloads. You can use `localStorage` to persist important data like posts. With `useEffect`, you can sync changes to local storage.

---

## 🛠️ Task

You’ll update your app so that posts are saved to `localStorage` and restored when the app loads.

---

## 🧾 Instructions

1. **Update `App.jsx` to load posts from local storage on startup.**

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('duckbook-posts');
    return saved ? JSON.parse(saved) : [
      { id: 1, author: 'Daffy', content: 'Just got a new pond!', likes: 0, timestamp: new Date().toLocaleString() }
    ];
  });
```

2. **Use `useEffect` to save posts any time they change.**

```jsx
useEffect(() => {
  localStorage.setItem('duckbook-posts', JSON.stringify(posts));
}, [posts]);
```

3. Save and reload the page. Your posts should persist even after a refresh.

---

## ✅ Success Criteria

- The app loads posts from local storage when it starts.
- New posts and likes are saved automatically.
- The data persists between page reloads.

---

## 🧠 Why This Matters

Local storage is a great way to persist small amounts of app data. You’ll use this pattern often for preferences, drafts, and offline support.
