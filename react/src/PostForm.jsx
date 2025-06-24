// src/PostForm.jsx
import { useState } from 'react';

export default function PostForm({ onSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ author, content });
    setAuthor('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>Create a New Post</h3>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={e => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <button type="submit" style={{
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Post
      </button>
    </form>
  );
}