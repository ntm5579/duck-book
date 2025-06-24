# 🧪 Duckbook Lab 20: Creating a Confirmation Before Deleting a Post

**Goal:** Ask the user to confirm before deleting a post to prevent accidental removal.

---

## 🐥 Background

Deleting content is a destructive action. It's a good practice to add a confirmation step to avoid unintentional data loss.

---

## 🛠️ Task

You’ll update the `handleRemoveClick` function in the `Post` component to show a confirmation dialog before calling `onRemove`.

---

## 🧾 Instructions

1. **Update `Post.jsx`** to confirm before deleting.

Modify the `handleRemoveClick` function:

```jsx
function handleRemoveClick() {
  const confirmDelete = window.confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    onRemove(id);
  }
}
```

This will display a browser-native dialog asking for confirmation.

2. **No other changes are required.**

This enhancement adds a layer of protection without affecting other app logic.

---

## ✅ Success Criteria

- Clicking the "Remove" button shows a confirmation dialog.
- The post is only deleted if the user confirms.

---

## 🧠 Why This Matters

Confirmation dialogs help prevent accidental destructive actions and are a key part of user-friendly, trustworthy interfaces.
