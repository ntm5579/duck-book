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