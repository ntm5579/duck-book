# 🧪 Duckbook Lab 18: Adding a Character Counter to the Post Form

**Goal:** Add a live character count below the post content input field to help users stay within a limit.

---

## 🐥 Background

Forms often include UI to give users feedback. A character counter is a simple example that improves the user experience without requiring backend logic.

---

## 🛠️ Task

You’ll update the `PostForm` to display a live count of characters in the post content input.

---

## 🧾 Instructions

1. **Update `PostForm.jsx`** to compute the length of the `content`.

Just below the `textarea`, add:

```jsx
<p style={{ fontSize: '0.85rem', color: '#666' }}>
  Characters: {content.length}/280
</p>
```

You can optionally limit input to 280 characters:

```jsx
<textarea
  placeholder="What's on your mind?"
  value={content}
  onChange={e => setContent(e.target.value.slice(0, 280))}
  style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
/>
```

---

## ✅ Success Criteria

- A character counter appears under the content input.
- The count updates as the user types.
- Input is limited to 280 characters.

---

## 🧠 Why This Matters

Giving users real-time feedback helps prevent errors and improves usability. You’ll use these types of UI enhancements all the time.
