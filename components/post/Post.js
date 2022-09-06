import classes from './Post.module.scss';
import dummy from '../../assets/images/dummy_post.jpeg';
import emptyHeart from '../../assets/icons/heart-icon-empty.png';
import filledHeart from '../../assets/icons/heart-icon-filled.png';
import comment from '../../assets/icons/comment-icon.jpeg';
import user from '../../assets/icons/account-icon.png';
import Image from 'next/image';
import Card from '../ui/Card';
import React, { useState, useRef, useEffect } from 'react';

const Post = props => {
  //state to check if comment form input is clicked to show the submit button
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [likePost, setLikePost] = useState(false);
  const submitButtonRef = useRef(null);
  const inputRef = useRef(null);

  //change state to show submit button
  const showButton = () => {
    setIsInputClicked(true);
  };

  //hide submit button if clicked anywhere but the form
  const hideButton = e => {
    if (
      submitButtonRef.current &&
      isInputClicked &&
      !submitButtonRef.current.contains(e.target)
    ) {
      setIsInputClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', hideButton);

    return () => {
      document.removeEventListener('mousedown', hideButton);
    };
  });

  //comment button functionality
  const handleCommentButton = () => {
    inputRef.current.focus();
    setIsInputClicked(true);
  };

  //post comments
  const handleSubmit = e => {
    e.preventDefault();
    setIsInputClicked(false);
  };

  //toggle like state
  const toggleLike = () => {
    setLikePost(prevState => !prevState);
  };

  return (
    <Card>
      <div className={classes.user}>
        <Image
          className={classes.user__icon}
          src={user}
          alt="User icon"
        ></Image>
        <p className={classes.user__name}>Chilli the Chinchilla</p>
      </div>
      <div className={classes.post}>
        <Image
          className={classes.post__image}
          src={dummy}
          alt="Posted image"
          layout="intrinsic"
        ></Image>
      </div>
      <div className={classes.postActivity}>
        <div className={classes.actionIcons}>
          <span onClick={toggleLike}>
            {likePost ? (
              <Image
                className={classes.actionIcons__likeImg}
                src={filledHeart}
                alt="Like icon"
                height={25}
                width={25}
              ></Image>
            ) : (
              <Image
                className={classes.actionIcons__likeImg}
                src={emptyHeart}
                alt="Like icon"
                height={25}
                width={25}
              ></Image>
            )}
          </span>
          <Image
            className={classes.actionIcons__commentImg}
            src={comment}
            alt="Comment icon"
            height={40}
            width={40}
            onClick={handleCommentButton}
          ></Image>
        </div>
        <div className={classes.caption}>
          <span className={classes.caption__user}>Chilli the Chinchilla</span>
          <span className={classes.caption__text}>
            Love a good dust bath! I hope mom doesn&apos;t give me a real bath!
          </span>
          <p></p>
        </div>
        <div className={classes.commentsCollapsed}>
          <span>View all 24 comments</span>
        </div>
        {/* map out comments here */}
        <div className={classes.comments}>
          <span className={classes.comments__commenter}>Dot the Doodle</span>
          <span className={classes.comments__comment}>You look marvelous!</span>
        </div>
      </div>
      <form className={classes.commentFormMobile} onSubmit={handleSubmit}>
        <div className={classes.commentFormMobile__inputWrapper}>
          <Image
            className={classes.commentFormMobile__userIcon}
            src={user}
            alt="User icon"
          ></Image>
          <input
            className={classes.commentFormMobile__input}
            placeholder="Add a comment..."
            onClick={showButton}
            ref={inputRef}
          ></input>
        </div>
        {isInputClicked && (
          <button
            className={classes.commentFormMobile__button}
            ref={submitButtonRef}
          >
            Post
          </button>
        )}
      </form>
      <div className={classes.timestamp}>1 hour ago</div>
      <form className={classes.commentFormTablet}>
        <input
          className={classes.commentFormTablet__input}
          placeholder="Add a comment..."
          ref={inputRef}
        ></input>
        <button className={classes.commentFormTablet__button}>Post</button>
      </form>
    </Card>
  );
};

export default Post;
