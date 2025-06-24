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