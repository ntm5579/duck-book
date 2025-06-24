# 🧪 Duckbook Lab 29: Making the App Responsive

**Goal:** Improve the layout so it works well on smaller screens like tablets and phones.

---

## 🐥 Background

Responsive design means your app looks good and works properly on screens of all sizes. CSS media queries help you apply styles conditionally based on screen width.

---

## 🛠️ Task

You’ll improve the layout of Duckbook to ensure it looks good on mobile devices.

---

## 🧾 Instructions

1. **Create or update a main layout style file** (e.g. `App.module.css` or a global CSS file).

Add a wrapper class:

```css
.wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

@media (max-width: 480px) {
  .wrapper {
    padding: 0.5rem;
  }

  .post {
    font-size: 0.95rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
  }
}
```

2. **Apply the wrapper class to your main layout container.**

In `App.jsx`, wrap everything inside:

```jsx
<div className="wrapper">
  {/* Your app content */}
</div>
```

If you're using CSS modules, import the styles and use `className={styles.wrapper}` instead.

---

## ✅ Success Criteria

- The layout looks good on both desktop and mobile widths.
- The text, form, and buttons scale down nicely on smaller screens.

---

## 🧠 Why This Matters

Most users interact with the web on mobile. Designing for small screens first—or at least testing for them—is key to delivering a good user experience.
