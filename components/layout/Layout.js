import classes from './Layout.module.scss';
import { Fragment } from 'react';

import UserNavigation from './UserNavigation';

const Layout = props => {
  return (
    <Fragment>
      <UserNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
