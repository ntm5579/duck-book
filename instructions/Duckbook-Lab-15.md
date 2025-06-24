# 🧪 Duckbook Lab 15: Adding a Like Counter Summary

**Goal:** Learn how to calculate derived state from your app’s data and display it in a summary view.

---

## 🐥 Background

Sometimes you want to calculate values from your data—like how many total likes all posts have. You can compute these values in the parent component and pass them into your layout or UI.

---

## 🛠️ Task

You’ll count the total number of likes across all posts and show the result in the layout header.

---

## 🧾 Instructions

1. **Update your post data to include `likes` when created.**

```jsx
// in addPost (App.jsx)
setPosts([{ id: Date.now(), timestamp, likes: 0, ...newPost }, ...posts]);
```

2. **Pass a function into `Post` to update the like count.**

```jsx
function addLikeToPost(id) {
  setPosts(posts.map(post =>
    post.id === id ? { ...post, likes: post.likes + 1 } : post
  ));
}

// pass this to Post
<Post
  ...
  onLike={addLikeToPost}
/>
```

3. **Update `Post.jsx` to use `onLike` instead of local state.**

```jsx
export default function Post({ id, author, content, timestamp, likes, onLike, onRemove }) {
  return (
    <div className={styles.post}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
      <p style={{ fontSize: '0.85rem', color: '#666' }}>{timestamp}</p>
      <ActionButton onClick={() => onLike(id)} color="#ffc107">
        👍 Like ({likes})
      </ActionButton>
      <ActionButton onClick={() => onRemove(id)} color="#f44336">
        🗑️ Remove
      </ActionButton>
    </div>
  );
}
```

4. **Compute the total like count and show it in `App.jsx`.**

```jsx
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
```

Display it just under the welcome message:

```jsx
<p style={{ fontStyle: 'italic', color: '#666' }}>Total likes across all posts: {totalLikes}</p>
```

---

## ✅ Success Criteria

- Likes are now tracked in state (not local to each post).
- You see a total like count above the post form and feed.

---

## 🧠 Why This Matters

Derived state helps you show summaries and stats without manually tracking extra state. It keeps your UI in sync with your data.
