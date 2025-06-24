# 🧪 Duckbook Lab 3: Displaying a List of Posts

**Goal:** Learn how to render a list using `map()` and pass props to child components.

---

## 🐥 Background

React apps often display lists of items. You can render a list by calling `.map()` on an array of data and returning a component for each item. React also needs a `key` prop on each item in the list to track them efficiently.

---

## 🛠️ Task

You’ll create a `Post` component that displays a single post. Then you’ll use `.map()` to show a list of posts in the `App` component.

---

## 🧾 Instructions

1. **Create a `Post.jsx` file** in your `src` folder.

```jsx
// src/Post.jsx
export default function Post({ author, content }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '6px',
      backgroundColor: '#f9f9f9'
    }}>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}
```

2. **Update your `App.jsx`** to include the new component and render a list:

```jsx
// src/App.jsx
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';
import DuckButton from './DuckButton';
import Post from './Post';

function App() {
  const posts = [
    { id: 1, author: 'Daffy', content: 'Just got a new pond!' },
    { id: 2, author: 'Donald', content: 'Quack attack at 3pm. Who’s in?' },
    { id: 3, author: 'Scrooge', content: 'Investing in breadcrumbs.' }
  ];

  return (
    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label="Add Friend" />
      <DuckButton label="Message" />
      <DuckButton label="Waddle Away" />
      <hr />
      {posts.map(post => (
        <Post key={post.id} author={post.author} content={post.content} />
      ))}
    </DuckbookLayout>
  );
}

export default App;
```

---

## ✅ Success Criteria

- The app displays three posts.
- Each post has an author and content.
- Each item in the list uses a unique `key` prop.

---

## 🧠 Why This Matters

Dynamic lists are essential in React. You’ll use them often for feeds, search results, or notifications.
