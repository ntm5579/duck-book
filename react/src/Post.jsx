// src/Post.jsx
import { useState } from 'react';
import styles from './Post.module.css';
import ActionButton from './ActionButton';

export default function Post({ author, content }) {
    const [likes, setLikes] = useState(0);

    function handleLikeClick() {
        setLikes(likes + 1);
    }

    return (
        <div className={styles.post}>
            <div className={styles.author}>{author}</div>
            <div className={styles.content}>{content}</div>
            

            <ActionButton onClick={handleLikeClick} color="#ffc107">
                👍 Like ({likes})
            </ActionButton>
        </div>
    );
}