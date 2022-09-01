import classes from './Post.module.scss';
import dummy from '../../assets/images/dummy_post.jpeg';
import heart from '../../assets/icons/heart-icon.png';
import comment from '../../assets/icons/comment-icon.jpeg';
import Image from 'next/image';
import { Fragment } from 'react';
import Card from '../ui/Card';

const Post = props => {
  return (
    <Fragment>
      <Card>
        <div className={classes.user}>
          <Image className={classes.user__icon} alt="User icon"></Image>
          <h4 className={classes.user__name}>Chilli the Chinchilla</h4>
        </div>
        <div className={classes.post}>
          <Image
            className={classes.post__image}
            src={dummy}
            alt="Posted image"
          ></Image>
        </div>
        <div className={classes.actionIcons}>
          <button className={classes.actionIcons__like}>
            <Image
              className={classes.actionIcons__likeImg}
              src={heart}
              alt="Like icon"
            ></Image>
          </button>
          <button className={classes.actionIcons__comment}>
            <Image
              className={classes.actionIcons__commentImg}
              src={comment}
              alt="Comment icon"
            ></Image>
          </button>
        </div>
        {/* map out comments here */}
        <div className={classes.comments}>
          <p className={classes.comments_commenter}></p>
          <p className={classes.comments_comment}></p>
        </div>
        <form className={classes.commentForm}>
          <input className={classes.commentForm__input}></input>
          <button className={classes.commentForm__button}>Post</button>
        </form>
        <div className={classes.postTime}>1 hour ago</div>
      </Card>
    </Fragment>
  );
};

export default Post;
