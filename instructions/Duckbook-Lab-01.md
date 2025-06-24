# 🧪 Duckbook Lab 1: Building with Components and Children

**Goal:** Learn how to break a UI into components and how to use `props.children` to nest content.

---

## 🐥 Background

In React, components are like building blocks for your UI. A component can return other components, and components can contain other components as children.

---

## 🛠️ Task

You're going to build a simple layout for Duckbook using three components:

1. `App` – the root of your app.
2. `DuckbookLayout` – a layout component that uses `props.children`.
3. `WelcomeMessage` – a component that renders a heading.

---

## 🧾 Instructions

1. **Create a `DuckbookLayout.jsx` file** in your `src` folder.

```jsx
// src/DuckbookLayout.jsx
export default function DuckbookLayout({ children }) {
  return (
    <div style={{ padding: '1rem', border: '2px solid green' }}>
      <h1>🦆 Duckbook</h1>
      {children}
    </div>
  );
}
```

2. **Create a `WelcomeMessage.jsx` file** in your `src` folder.

```jsx
// src/WelcomeMessage.jsx
export default function WelcomeMessage() {
  return <h2>Welcome to Duckbook!</h2>;
}
```

3. **Update your `App.jsx`** to use both components:

```jsx
// src/App.jsx
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <DuckbookLayout>
      <WelcomeMessage />
    </DuckbookLayout>
  );
}

export default App;
```

4. Make sure your app is running (`npm run dev`) and verify that you see the Duckbook layout and welcome message on the screen.

---

## ✅ Success Criteria

- The app displays "🦆 Duckbook" and "Welcome to Duckbook!"
- The layout surrounds the message and uses `props.children`

---

## 🧠 Why This Matters

You’ve just built your first nested React components. This is how complex apps are built—by composing small, reusable parts.
