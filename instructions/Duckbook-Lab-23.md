# 🧪 Duckbook Lab 23: Displaying a Message When There Are No Posts

**Goal:** Show a friendly message when the post feed is empty.

---

## 🐥 Background

Empty states give users helpful context instead of a blank screen. They're a small but important part of a polished UI.

---

## 🛠️ Task

You’ll update your feed rendering logic to show a message when there are no posts instead of an empty area.

---

## 🧾 Instructions

1. **Update the post feed section in `App.jsx`.**

Replace your current rendering logic:

```jsx
{sortedPosts.map(post => (
  <Post ... />
))}
```

With this:

```jsx
{sortedPosts.length === 0 ? (
  <p style={{ fontStyle: 'italic', color: '#888' }}>
    No posts yet. Be the first to quack!
  </p>
) : (
  sortedPosts.map(post => (
    <Post
      key={post.id}
      id={post.id}
      author={post.author}
      content={post.content}
      timestamp={new Date(post.timestamp).toLocaleString()}
      likes={post.likes}
      isNew={post.isNew}
      onLike={addLikeToPost}
      onRemove={removePost}
    />
  ))
)}
```

---

## ✅ Success Criteria

- If there are no posts, the app displays a helpful message.
- When posts are added, the message disappears and the posts appear.

---

## 🧠 Why This Matters

Empty states give users a better experience by explaining what’s going on instead of leaving them guessing.
