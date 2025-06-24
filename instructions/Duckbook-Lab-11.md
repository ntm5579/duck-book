# 🧪 Duckbook Lab 11: Extracting Reusable UI Components

**Goal:** Learn how to refactor common UI patterns into smaller, reusable components.

---

## 🐥 Background

As apps grow, repeating the same UI code across multiple files can get messy. Extracting reusable components helps keep your code clean, readable, and consistent.

---

## 🛠️ Task

You’ll extract the common button styles into a new reusable component called `ActionButton` and replace existing inline styles.

---

## 🧾 Instructions

1. **Create a new file called `ActionButton.jsx`** in your `src` folder.

```jsx
// src/ActionButton.jsx
export default function ActionButton({ children, onClick, color = '#2196f3' }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '0.5rem',
        marginBottom: '0.5rem'
      }}
    >
      {children}
    </button>
  );
}
```

2. **Update `App.jsx`** to use `ActionButton` instead of inline styles.

```jsx
// inside App.jsx
import ActionButton from './ActionButton';

// Replace the toggle form button with:
<ActionButton onClick={() => setShowForm(!showForm)}>
  {showForm ? 'Hide Post Form' : 'Show Post Form'}
</ActionButton>
```

3. **Update `Post.jsx`** to use `ActionButton` for the Like button.

```jsx
// inside Post.jsx
import ActionButton from './ActionButton';

<ActionButton onClick={handleLikeClick} color="#ffc107">
  👍 Like ({likes})
</ActionButton>
```

---

## ✅ Success Criteria

- The new `ActionButton` component is used in both `App` and `Post`.
- Buttons still work and look the same, but now use a shared component.

---

## 🧠 Why This Matters

Reusable components help you scale apps without repeating yourself. They also make updates easier—change one place, and everything stays consistent.
