# 🧪 Duckbook Lab 12: Passing Functions as Props

**Goal:** Learn how to pass functions from parent to child components so children can trigger actions.

---

## 🐥 Background

To let a child component perform an action defined in its parent, you can pass a function down as a prop. This is how interactivity flows in React.

---

## 🛠️ Task

You’ll add a new `onRemove` prop to the `Post` component so each post can be deleted when a button is clicked.

---

## 🧾 Instructions

1. **Update `App.jsx`** to define a `removePost` function and pass it to each `Post`.

```jsx
// inside App.jsx
function removePost(id) {
  setPosts(posts.filter(post => post.id !== id));
}

// in the return:
{posts.map(post => (
  <Post
    key={post.id}
    id={post.id}
    author={post.author}
    content={post.content}
    onRemove={removePost}
  />
))}
```

2. **Update `Post.jsx`** to include a “Remove” button and call `onRemove`.

```jsx
// inside Post.jsx
import ActionButton from './ActionButton';

export default function Post({ id, author, content, onRemove }) {
  const [likes, setLikes] = useState(0);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  function handleRemoveClick() {
    onRemove(id);
  }

  return (
    <div className={styles.post}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
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

- Each post includes a "Remove" button.
- Clicking it removes that specific post from the feed.

---

## 🧠 Why This Matters

Passing functions as props is how children talk to parents in React. It gives you control over where state lives and who can update it.
