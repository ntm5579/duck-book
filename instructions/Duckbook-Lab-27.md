# 🧪 Duckbook Lab 27: Persisting Posts Using Local Storage

**Goal:** Save and restore posts from the browser's localStorage so that they persist across page reloads.

---

## 🐥 Background

Apps often store user data in a backend or in localStorage. For small projects like Duckbook, using the browser's built-in localStorage lets us preserve data without a server.

---

## 🛠️ Task

You’ll update your app to load posts from localStorage when it starts, and save them whenever they change.

---

## 🧾 Instructions

1. **Update `App.jsx` to load from localStorage on mount.**

At the top of your file:

```jsx
useEffect(() => {
  const storedPosts = localStorage.getItem('duckbook-posts');
  if (storedPosts) {
    setPosts(JSON.parse(storedPosts));
  }
}, []);
```

2. **Save posts to localStorage when they change.**

Add another `useEffect` below the first:

```jsx
useEffect(() => {
  localStorage.setItem('duckbook-posts', JSON.stringify(posts));
}, [posts]);
```

This keeps your state in sync with storage.

3. **Try it out.**

- Add a few posts.
- Refresh the browser.
- Your posts should still be there!

---

## ✅ Success Criteria

- Posts persist across browser refreshes.
- LocalStorage updates whenever posts change.

---

## 🧠 Why This Matters

Understanding how to persist state across sessions is key for building real apps. This simple mechanism shows how React and browser APIs can work together.
