import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import GithubBox from 'mdi-material-ui/GithubBox';
import Facebook from 'mdi-material-ui/Facebook';
import Twitter from 'mdi-material-ui/Twitter';
import Dribbble from 'mdi-material-ui/Dribbble';
import Behance from 'mdi-material-ui/Behance';
import Store from 'mdi-material-ui/Store';

const styles = {
  root: {
   borderRadius: 3,
   border: 0,
   height: 48,
   overflowX:"hidden",

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <AppBar position="fixed"  style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>

          <a href="https://github.com/Kmydesign/kmy-design"><GithubBox /></a>
          <a href="https://www.facebook.com/kmydesign/"><Facebook /></a>
          <a href="https://www.behance.net/Kimbm"><Behance /></a>
          <a href="https://twitter.com/Kmyillustration"><Twitter /></a>
          <a href="https://dribbble.com/Kmy_Design"><Dribbble /></a>
          <a href="https://www.etsy.com/ca/shop/KmyDesign"><Store /></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
