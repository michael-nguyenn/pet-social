import classes from './UserNavigation.module.scss';
import account from '../../assets/icons/account-icon.png';
import heart from '../../assets/icons/heart-icon.png';
import home from '../../assets/icons/home-icon.png';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import { useSession, signOut } from 'next-auth/client';

function UserNavigation() {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  console.log(session);
  console.log(loading);

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.header__container}>
          <h1 className={classes.header__logo}>Pet Social</h1>
          <nav className={classes.header__nav}>
            <ul className={classes.header__navList}>
              {session && (
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
              )}
              {session && (
                <li>
                  <Link href="/" className={classes.header__navLink}>
                    <h1 className={classes.header__navAdd}>+</h1>
                  </Link>
                </li>
              )}
              {session && (
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
              )}
              {session && (
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
              )}
            </ul>
            {session && <button onClick={logoutHandler}>Logout</button>}
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default UserNavigation;
