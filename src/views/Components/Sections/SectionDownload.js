import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import Framer from '../Cardbk.js';
const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
        <GridItem xs={12} sm={12} md={12} lg={6}>
        <h2>Framer Design UI/UX with motions</h2>
        <h4>In this section i will show you an exemple of how to use framerJS Library</h4>
          <Framer/>
          <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
          <div style={{width:'100%',height:2,backgroundColor:'#c2c2c2',marginTop: '24rem'}}></div>
               <h2>What's Next ?</h2>
            <h4>
              I{"'"}me working on some design and Tutoriels{" "}
              <a
                href="https://codesandbox.io/"
                target="_blank">
                codesandbox{" "}
              </a>
              .It'is a Project i{"'"}m preparing for developers so they can find their way.
              </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.youtube.com/channel/UCsnFKMn8xNBcKydSAh8XigA"
              target="_blank"
            >
            My Youtube Channel
            </Button>
            </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting Me!</h3>
          </GridContainer>
         
        </div>
      </div>
    </div>
  );
}
