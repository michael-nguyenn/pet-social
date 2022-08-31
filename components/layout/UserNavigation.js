import classes from './UserNavigation.module.scss';
import account from '../../assets/icons/account-icon.png';
import heart from '../../assets/icons/heart-icon.png';
import home from '../../assets/icons/home-icon.png';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

function UserNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.header__container}>
          <h1 className={classes.header__logo}>Pet Social</h1>
          <nav className={classes.header__nav}>
            <ul className={classes.header__navList}>
              <li className={classes.header__navItem}>
                <Link href="/" className={classes.header__navLink}>
                  <Image
                    src={home}
                    alt="Link to homepage"
                    className={classes.header__navHome}
                    width={50}
                    height={40}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" className={classes.header__navLink}>
                  <h1 className={classes.header__navAdd}>+</h1>
                </Link>
              </li>
              <li>
                <Link href="/" className={classes.header__navLink}>
                  <Image
                    src={heart}
                    alt="Link to all liked posts"
                    className={classes.header__navHeart}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" className={classes.header__navLink}>
                  <Image
                    src={account}
                    alt="Link to user profile"
                    className={classes.header__navUser}
                    width={50}
                    height={40}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default UserNavigation;
