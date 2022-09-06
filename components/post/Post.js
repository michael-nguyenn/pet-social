import classes from './Post.module.scss';
import dummy from '../../assets/images/dummy_post.jpeg';
import heart from '../../assets/icons/heart-icon.png';
import comment from '../../assets/icons/comment-icon.jpeg';
import user from '../../assets/icons/account-icon.png';
import Image from 'next/image';
import Card from '../ui/Card';
import React, { useState } from 'react';

const Post = props => {
  const [inputClicked, setInputClicked] = useState();

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
          <Image
            className={classes.actionIcons__likeImg}
            src={heart}
            alt="Like icon"
          ></Image>
          <Image
            className={classes.actionIcons__commentImg}
            src={comment}
            alt="Comment icon"
            height={40}
            width={40}
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
      <form className={classes.commentFormMobile}>
        <Image
          className={classes.commentFormMobile__userIcon}
          src={user}
          alt="User icon"
        ></Image>
        <input
          className={classes.commentFormMobile__input}
          placeholder="Add a comment..."
        ></input>
        <button className={classes.commentFormMobile__button}>Post</button>
      </form>
      <div className={classes.timestamp}>1 hour ago</div>
      <form className={classes.commentFormTablet}>
        <input
          className={classes.commentFormTablet__input}
          placeholder="Add a comment..."
        ></input>
        <button className={classes.commentFormTablet__button}>Post</button>
      </form>
    </Card>
  );
};

export default Post;
