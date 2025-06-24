# 🧪 Duckbook Lab 13: Creating a Profile Component

**Goal:** Learn how to create a dedicated component for displaying user profile information.

---

## 🐥 Background

As your app grows, it’s common to show user-specific information like profile details. You can create a `Profile` component to make this area of your app modular and easy to manage.

---

## 🛠️ Task

You’ll create a `Profile` component that displays a simple static user profile and include it in your layout.

---

## 🧾 Instructions

1. **Create a file called `Profile.jsx`** in your `src` folder.

```jsx
// src/Profile.jsx
export default function Profile() {
  const user = {
    name: 'Huey Duck',
    bio: 'Explorer. Coder. Lover of breadcrumbs.',
    location: 'Duckburg'
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '6px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#fffbe6'
    }}>
      <h3>{user.name}</h3>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Location:</strong> {user.location}</p>
    </div>
  );
}
```

2. **Update `App.jsx`** to include the profile component above the post feed.

```jsx
// inside App.jsx
import Profile from './Profile';

...

return (
  <DuckbookLayout>
    <WelcomeMessage />
    <DuckButton label="Add Friend" />
    <DuckButton label="Message" />
    <DuckButton label="Waddle Away" />
    <hr />
    <Profile />
    <ActionButton onClick={() => setShowForm(!showForm)}>
      {showForm ? 'Hide Post Form' : 'Show Post Form'}
    </ActionButton>
    {showForm && <PostForm onSubmit={addPost} />}
    {posts.map(post => (
      <Post
        key={post.id}
        id={post.id}
        author={post.author}
        content={post.content}
        onRemove={removePost}
      />
    ))}
  </DuckbookLayout>
);
```

---

## ✅ Success Criteria

- A profile appears with a name, bio, and location.
- The component is added above the post form and feed.

---

## 🧠 Why This Matters

As apps grow, keeping related content in self-contained components makes your code easier to manage and extend.
