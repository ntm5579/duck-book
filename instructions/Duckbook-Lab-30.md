# 🧪 Duckbook Lab 30: Celebrating 30 Labs with a Duck Emoji Animation

**Goal:** Add a fun duck animation when a new post is submitted.

---

## 🐥 Background

Fun microinteractions can make an app feel delightful. Let’s celebrate your progress by animating a duck emoji 🦆 across the screen when a post is added.

---

## 🛠️ Task

You’ll show a duck that flies across the screen whenever a post is added.

---

## 🧾 Instructions

1. **Create a new component called `FlyingDuck.jsx`.**

```jsx
import { useEffect, useState } from 'react';

export default function FlyingDuck() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div style={{
      position: 'fixed',
      top: '40%',
      left: 0,
      fontSize: '2rem',
      animation: 'fly 2s linear forwards',
      zIndex: 1000
    }}>
      🦆
    </div>
  ) : null;
}
```

2. **Add the fly animation to global CSS or a CSS module.**

```css
@keyframes fly {
  to {
    transform: translateX(100vw);
    opacity: 0;
  }
}
```

3. **Trigger the animation when a post is added.**

In `App.jsx`, import `FlyingDuck` and render it conditionally when a new post is added.

You can use a `showDuck` state like this:

```jsx
const [showDuck, setShowDuck] = useState(false);

function addPost(newPost) {
  ...
  setShowDuck(true);
  setTimeout(() => setShowDuck(false), 2000);
}
```

Then render it:

```jsx
{showDuck && <FlyingDuck />}
```

---

## ✅ Success Criteria

- When you post something new, a duck emoji flies across the screen.
- It disappears after the animation finishes.
- It doesn’t interfere with other UI elements.

---

## 🧠 Why This Matters

Delightful details leave lasting impressions. You’ve completed 30 labs—celebrate with some flair!

---

🎉 Congrats on hitting Lab 30! You’ve built a full-featured React UI from scratch.
