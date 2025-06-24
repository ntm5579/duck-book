# 🧪 Duckbook Lab 2: Creating a Reusable Button Component

**Goal:** Learn how to create and use reusable components with props.

---

## 🐥 Background

React components can take inputs called **props**. This lets you customize components and reuse them with different values.

---

## 🛠️ Task

You're going to create a reusable `DuckButton` component and use it to render multiple buttons on the page.

---

## 🧾 Instructions

1. **Create a `DuckButton.jsx` file** in your `src` folder.

```jsx
// src/DuckButton.jsx
export default function DuckButton({ label }) {
  return (
    <button style={{
      padding: '0.5rem 1rem',
      backgroundColor: '#00bcd4',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      cursor: 'pointer',
      margin: '0.5rem'
    }}>
      {label}
    </button>
  );
}
```

2. **Update your `App.jsx`** to use the new `DuckButton` component:

```jsx
// src/App.jsx
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';
import DuckButton from './DuckButton';

function App() {
  return (
    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label="Add Friend" />
      <DuckButton label="Message" />
      <DuckButton label="Waddle Away" />
    </DuckbookLayout>
  );
}

export default App;
```

---

## ✅ Success Criteria

- Three buttons are displayed with the labels "Add Friend", "Message", and "Waddle Away".
- You used props to pass labels to the reusable `DuckButton` component.

---

## 🧠 Why This Matters

Props make your components flexible and reusable. This is how real-world UIs scale without repeating code.
