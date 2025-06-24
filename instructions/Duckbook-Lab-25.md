# 🧪 Duckbook Lab 25: Animating Posts with CSS Transitions

**Goal:** Add a fade-in animation for posts to improve the visual experience.

---

## 🐥 Background

Animations make interfaces feel smoother and more responsive. CSS transitions and animations are easy to add with minimal code changes.

---

## 🛠️ Task

You’ll add a CSS transition so that new posts fade in when they appear.

---

## 🧾 Instructions

1. **Update your `Post.module.css` file** to include fade-in styles.

```css
/* src/Post.module.css */
.post {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

2. **No changes to `Post.jsx` are needed**, as long as you're using `className={styles.post}`.

If you’re combining this with inline styles (like `isNew` highlight), make sure you don’t override the animation accidentally.

Example:

```jsx
<div
  className={styles.post}
  style={isNew ? { backgroundColor: '#e0ffe0' } : {}}
>
```

---

## ✅ Success Criteria

- When a new post is added, it gently fades into view.
- Old posts do not reanimate unnecessarily.
- The animation works alongside other styles like `isNew`.

---

## 🧠 Why This Matters

Thoughtful animations help guide attention and improve flow. Even subtle transitions can make your app feel more professional and polished.
