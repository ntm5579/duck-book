# 🧪 Duckbook Lab 14: Adding a Timestamp to Each Post

**Goal:** Learn how to add dynamic metadata to posts and display it in your components.

---

## 🐥 Background

Real apps include metadata like timestamps, user IDs, or tags. You can add this kind of data when creating new items and show it with the rest of the content.

---

## 🛠️ Task

You’ll modify your post creation code to add a timestamp when a post is created and display it in the `Post` component.

---

## 🧾 Instructions

1. **Update `addPost` in `App.jsx`** to include a timestamp.

```jsx
function addPost(newPost) {
  const timestamp = new Date().toLocaleString();
  setPosts([{ id: Date.now(), timestamp, ...newPost }, ...posts]);
}
```

2. **Pass the `timestamp` to the `Post` component.**

```jsx
<Post
  key={post.id}
  id={post.id}
  author={post.author}
  content={post.content}
  timestamp={post.timestamp}
  onRemove={removePost}
/>
```

3. **Update `Post.jsx`** to display the timestamp.

```jsx
export default function Post({ id, author, content, timestamp, onRemove }) {
  ...
  return (
    <div className={styles.post}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
      <p style={{ fontSize: '0.85rem', color: '#666' }}>{timestamp}</p>
      <ActionButton onClick={handleLikeClick} color="#ffc107">
        👍 Like ({likes})
      </ActionButton>
      <ActionButton onClick={handleRemoveClick} color="#f44336">
        🗑️ Remove
      </ActionButton>
    </div>
  );
}
```

---

## ✅ Success Criteria

- New posts include the current date and time.
- The timestamp is shown clearly in each post.

---

## 🧠 Why This Matters

Adding metadata like timestamps makes your content more useful and informative. It also introduces the idea of data formatting in UI components.
