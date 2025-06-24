# 🧪 Duckbook Lab 22: Highlighting New Posts

**Goal:** Temporarily highlight newly added posts to draw the user's attention.

---

## 🐥 Background

Adding visual emphasis to new content improves usability. React lets you conditionally apply styles or classes based on app state.

---

## 🛠️ Task

You’ll highlight new posts for 2 seconds after they’re added by marking them as “fresh” and applying a special style.

---

## 🧾 Instructions

1. **Update `addPost` in `App.jsx` to mark new posts as fresh.**

```jsx
function addPost(newPost) {
  const timestamp = new Date().toISOString();
  const newEntry = {
    id: Date.now(),
    timestamp,
    likes: 0,
    isNew: true,
    ...newPost
  };
  setPosts([newEntry, ...posts]);
}
```

2. **Use `useEffect` to remove `isNew` after 2 seconds.**

Still in `App.jsx`, after the `addPost` function:

```jsx
useEffect(() => {
  if (posts.some(p => p.isNew)) {
    const timer = setTimeout(() => {
      setPosts(prev =>
        prev.map(post => ({ ...post, isNew: false }))
      );
    }, 2000);
    return () => clearTimeout(timer);
  }
}, [posts]);
```

3. **Update `Post.jsx` to style fresh posts.**

Pass `isNew={post.isNew}` to each `Post`. Then inside `Post.jsx`, apply a background highlight:

```jsx
<div
  className={styles.post}
  style={isNew ? { backgroundColor: '#e0ffe0' } : {}}
>
```

Make sure `Post` accepts `isNew` as a prop:

```jsx
export default function Post({ id, author, content, timestamp, likes, onLike, onRemove, isNew }) {
  ...
}
```

---

## ✅ Success Criteria

- New posts appear with a subtle highlight.
- After 2 seconds, the highlight disappears.
- The highlight does not affect existing posts.

---

## 🧠 Why This Matters

Small animations or visual cues improve UX by helping users track changes without confusion or surprise.
