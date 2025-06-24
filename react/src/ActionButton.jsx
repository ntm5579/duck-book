// src/ActionButton.jsx
export default function ActionButton({ children, onClick, color = '#2196f3' }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '0.5rem',
        marginBottom: '0.5rem'
      }}
    >
      {children}
    </button>
  );
}