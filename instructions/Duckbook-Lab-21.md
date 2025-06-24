# 🧪 Duckbook Lab 21: Creating a Loading Spinner for Startup

**Goal:** Show a loading indicator briefly when the app first loads, simulating a startup experience.

---

## 🐥 Background

Loading indicators are helpful for users when an app is initializing or fetching data. Even if it’s fast, simulating this helps teach a useful UI pattern.

---

## 🛠️ Task

You’ll show a loading spinner for 1 second when the app starts, before rendering the full layout.

---

## 🧾 Instructions

1. **Add a `loading` state in `App.jsx`.**

```jsx
const [loading, setLoading] = useState(true);
```

2. **Use `useEffect` to simulate a brief loading delay.**

```jsx
useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);
```

3. **Show a spinner (or loading message) while loading is true.**

At the top of your `App` component:

```jsx
if (loading) {
  return (
    <div style={{
      fontSize: '1.5rem',
      textAlign: 'center',
      marginTop: '3rem'
    }}>
      🌀 Loading Duckbook...
    </div>
  );
}
```

4. **After 1 second, the app should display normally.**

---

## ✅ Success Criteria

- When you reload the app, you briefly see a loading message.
- After 1 second, the Duckbook UI renders as usual.

---

## 🧠 Why This Matters

Loading states help manage expectations and improve perceived performance. They’re essential in real-world apps that load remote data or take time to initialize.
