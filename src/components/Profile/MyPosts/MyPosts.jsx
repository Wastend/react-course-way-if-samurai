import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.onAddPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postBlock}>
      My posts  
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;