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