# 🧪 Duckbook Lab 9: Creating a Simple Navigation Bar

**Goal:** Build a reusable navigation bar component and learn basic layout organization.

---

## 🐥 Background

Apps often have a navigation bar that stays consistent across pages or views. You can create one in React as a reusable component and place it at the top of your layout.

---

## 🛠️ Task

You’ll create a new `Navbar` component with a simple layout and add it to `DuckbookLayout`.

---

## 🧾 Instructions

1. **Create a new file called `Navbar.jsx`** in your `src` folder.

```jsx
// src/Navbar.jsx
export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '0.75rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '4px'
    }}>
      <div style={{ fontWeight: 'bold' }}>🦆 Duckbook</div>
      <div>
        <a href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Profile</a>
      </div>
    </nav>
  );
}
```

2. **Update `DuckbookLayout.jsx`** to include the navbar at the top.

```jsx
// src/DuckbookLayout.jsx
import Navbar from './Navbar';

export default function DuckbookLayout({ children }) {
  return (
    <div style={{ padding: '1rem', border: '2px solid green' }}>
      <Navbar />
      <div style={{ marginTop: '1rem' }}>
        {children}
      </div>
    </div>
  );
}
```

3. Save and view your app. The navigation bar should now appear above your content.

---

## ✅ Success Criteria

- The navbar appears at the top of the app.
- It shows a site title and two fake links: “Home” and “Profile”.

---

## 🧠 Why This Matters

A good layout helps users understand and navigate your app. Reusable layout components make your code cleaner and easier to scale.
