# 🧪 Duckbook Lab 17: Sorting Posts by Most Recent

**Goal:** Sort the post feed so that the newest posts appear first.

---

## 🐥 Background

When displaying a list of items like posts or messages, you often want the most recent to appear first. You can sort arrays in JavaScript using `.sort()` before rendering.

---

## 🛠️ Task

You’ll sort the post feed by timestamp (most recent first) before rendering.

---

## 🧾 Instructions

1. **Update the post creation logic to store a timestamp as a real date.**

```jsx
const timestamp = new Date().toISOString();
setPosts([{ id: Date.now(), timestamp, likes: 0, ...newPost }, ...posts]);
```

2. **Before rendering, sort the posts by descending timestamp.**

In `App.jsx`, sort the array before mapping it:

```jsx
const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
```

Then update your rendering loop:

```jsx
{sortedPosts.map(post => (
  <Post
    key={post.id}
    id={post.id}
    author={post.author}
    content={post.content}
    timestamp={new Date(post.timestamp).toLocaleString()}
    likes={post.likes}
    onLike={addLikeToPost}
    onRemove={removePost}
  />
))}
```

---

## ✅ Success Criteria

- Newer posts appear above older ones.
- The date formatting is still readable (local string).
- Sorting does not mutate the original state array.

---

## 🧠 Why This Matters

Sorting is a core feature of nearly every data-driven UI. Learning to do it in a non-destructive way helps you keep state predictable and avoid bugs.
