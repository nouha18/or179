/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/nouha18"
                className={classes.block}
                target="_blank"
              >
               Nouha Mbarek
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://dev.to/nouha18"
                className={classes.block}
                target="_blank"
              >
                Dev.to
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to={"/profile-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
            Profile
            </Button>
          </Link>
                
            
            </ListItem>
          
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , build with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
         Nouha Mb
          </a>{" "}
          
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
