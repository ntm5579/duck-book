# 🧪 Duckbook Lab 26: Adding Basic Dark Mode Toggle

**Goal:** Let users switch between light and dark mode using a toggle button.

---

## 🐥 Background

Dark mode is a popular feature that can improve accessibility and user comfort. React makes it easy to switch themes by toggling a class or style conditionally.

---

## 🛠️ Task

You’ll add a toggle button and update your app’s container style to support dark mode.

---

## 🧾 Instructions

1. **Add dark mode state to `App.jsx`.**

```jsx
const [darkMode, setDarkMode] = useState(false);

function toggleDarkMode() {
  setDarkMode(prev => !prev);
}
```

2. **Add a button to toggle dark mode.**

Place this at the top of your UI:

```jsx
<ActionButton onClick={toggleDarkMode}>
  {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
</ActionButton>
```

3. **Update the root container to apply a dark class or inline style.**

Wrap your app content in a container with conditional styling:

```jsx
<div
  style={{
    backgroundColor: darkMode ? '#111' : '#fff',
    color: darkMode ? '#eee' : '#000',
    minHeight: '100vh',
    padding: '1rem',
    transition: 'all 0.3s ease'
  }}
>
  {/* Your app UI here */}
</div>
```

You can move this style into a CSS module later if you prefer.

---

## ✅ Success Criteria

- A button lets users toggle between light and dark themes.
- Background and text colors adjust accordingly.
- The theme switch feels smooth.

---

## 🧠 Why This Matters

Adding theming is a fun way to reinforce your understanding of state and conditional rendering—and it makes your app more user-friendly.
