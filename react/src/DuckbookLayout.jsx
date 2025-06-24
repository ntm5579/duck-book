// src/DuckbookLayout.jsx
import Navbar from './Navbar';

export default function DuckbookLayout({ children }) {
  return (
    <div style={{ padding: '1rem', border: '2px solid green' }}>
      <Navbar />
      <div style={{ marginTop: '1rem' }}>
        {children}
      </div>
    </div>
  );
}