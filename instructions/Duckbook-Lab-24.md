# 🧪 Duckbook Lab 24: Adding a "Clear All Posts" Button

**Goal:** Let the user clear all posts with a single action.

---

## 🐥 Background

In some apps, it's useful to give users control over their data. A "Clear All" feature is simple to implement and useful for demo apps like Duckbook.

---

## 🛠️ Task

You’ll add a button that removes all posts when clicked, and confirm the action before clearing.

---

## 🧾 Instructions

1. **Create a `clearAllPosts` function in `App.jsx`.**

```jsx
function clearAllPosts() {
  const confirmClear = window.confirm('Are you sure you want to delete all posts?');
  if (confirmClear) {
    setPosts([]);
  }
}
```

2. **Add a new `ActionButton` above the post feed.**

Below your other buttons (like toggle form), add:

```jsx
<ActionButton onClick={clearAllPosts} color="#9e9e9e">
  🧹 Clear All Posts
</ActionButton>
```

You can group the buttons together using a wrapper `div` if needed.

---

## ✅ Success Criteria

- A "Clear All Posts" button appears near the top of the app.
- Clicking it prompts the user to confirm.
- If confirmed, all posts are removed and the empty state message appears.

---

## 🧠 Why This Matters

Giving users control over data is a basic but powerful UX feature—and a great example of how state, event handlers, and conditional UI all work together.
