import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import image from "./avatar.jpg";
import Terminal from 'react-console-emulator'
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyleimg = makeStyles(imagesStyles);
const useStyles = makeStyles(styles);
const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {
      return `${Array.from(arguments).join(' ')}`
    }
  }
}
export default function SectionPills() {
  const classes = useStyles();
  const classesimg = useStyleimg();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
         <div className={classes.title}>
         <h3>Bibliographie</h3>
         </div>
         <GridContainer style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <GridItem xs={12} sm={12} md={8} lg={6}>
            <h4>Nouha Mbarek</h4>
              <img
                src={image}
                alt="..."
                className={classesimg.imgRounded + " " + classesimg.imgFluid}
              />
            </GridItem>
            <br/><br/>

            <GridItem xs={12} sm={12} md={12} lg={6}>
             <h4>She is passionate by programming and mockUp Design.She is a fullstack js web, mobile and desktop developer. </h4>
             <Terminal
        commands={commands}
        welcomeMessage={'Welcome to my Website!'}
        promptLabel={'Nouha@Dev:~$'}
      />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
