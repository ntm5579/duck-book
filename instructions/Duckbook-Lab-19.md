# 🧪 Duckbook Lab 19: Adding Basic Form Validation

**Goal:** Prevent empty or invalid posts from being submitted by adding basic form validation.

---

## 🐥 Background

Good form UX includes validation to help users avoid mistakes. React makes it easy to add conditional logic before allowing form submission.

---

## 🛠️ Task

You’ll update the `PostForm` component to validate input before submitting. If the name or content is empty, show an error message.

---

## 🧾 Instructions

1. **Update `PostForm.jsx`** to track error state.

Above your `handleSubmit` function:

```jsx
const [error, setError] = useState('');
```

2. **In `handleSubmit`, check the inputs.**

```jsx
function handleSubmit(event) {
  event.preventDefault();
  if (author.trim() === '' || content.trim() === '') {
    setError('Both name and post content are required.');
    return;
  }
  onSubmit({ author, content });
  setAuthor('');
  setContent('');
  setError('');
}
```

3. **Display the error below the form.**

Add this just above the submit button:

```jsx
{error && <p style={{ color: 'red', marginBottom: '0.5rem' }}>{error}</p>}
```

---

## ✅ Success Criteria

- Submitting with an empty name or message shows an error.
- The error disappears after a successful post.
- Valid posts still submit and appear as usual.

---

## 🧠 Why This Matters

Validating forms at the UI level helps prevent bad data and improves user experience. It’s one of the most common patterns in any app.
