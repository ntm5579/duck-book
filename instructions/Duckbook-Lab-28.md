# 🧪 Duckbook Lab 28: Storing User Preferences in Local Storage

**Goal:** Persist the user's dark mode setting so it stays the same after refreshing the page.

---

## 🐥 Background

In addition to posts, it's useful to persist user preferences like theme, layout, or language. You can store these settings in `localStorage` just like you did with posts.

---

## 🛠️ Task

You’ll update your app so that the dark mode setting is saved to `localStorage` and reloaded on app startup.

---

## 🧾 Instructions

1. **Load dark mode preference when the app starts.**

In `App.jsx`, update your state initialization:

```jsx
const [darkMode, setDarkMode] = useState(() => {
  const stored = localStorage.getItem('duckbook-darkmode');
  return stored === 'true'; // Convert string to boolean
});
```

2. **Save the value to `localStorage` whenever it changes.**

```jsx
useEffect(() => {
  localStorage.setItem('duckbook-darkmode', darkMode.toString());
}, [darkMode]);
```

3. **Test it.**

- Toggle the dark mode setting.
- Refresh the browser.
- The theme should stay the same.

---

## ✅ Success Criteria

- Toggling dark mode updates localStorage.
- The user's setting is restored on reload.
- No flashing or unwanted theme resets occur.

---

## 🧠 Why This Matters

Remembering a user’s preferences between sessions is a basic feature of any polished app. It's easy to implement and goes a long way toward making your app feel complete.
