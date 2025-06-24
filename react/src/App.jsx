// src/App.jsx
import { useState } from 'react';
import DuckbookLayout from './DuckbookLayout';
import WelcomeMessage from './WelcomeMessage';
import DuckButton from './DuckButton';
import PostForm from './PostForm';
import Post from './Post';
import ActionButton from './ActionButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Daffy', content: 'Just got a new pond!' },
    { id: 2, author: 'Donald', content: 'Quack attack at 3pm. Who’s in?' },
    { id: 3, author: 'Scrooge', content: 'Investing in breadcrumbs.' }
  ]);

  const [showForm, setShowForm] = useState(true);

  function addPost(newPost) {
    setPosts([{ id: Date.now(), ...newPost }, ...posts]);
  }

  return (
    <DuckbookLayout>
      <WelcomeMessage />
      <DuckButton label="Add Friend" />
      <DuckButton label="Message" />
      <DuckButton label="Waddle Away" />
      <hr />
      
      <ActionButton onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Post Form' : 'Show Post Form'}
      </ActionButton>
      {showForm && <PostForm onSubmit={addPost} />}
      {posts.map(post => (
        <Post key={post.id} author={post.author} content={post.content} />
      ))}
    </DuckbookLayout>
  );
}

export default App;