import React,{useRef,useState} from "react";
import classNames from "classnames";
import { Card,ListGroup } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import stlcmp from "../../assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionDownload from "./Sections/SectionDownload.js";

import RecipeReviewCard from './Sections/Cardstamp.js';
import styles from "../../assets/jss/material-kit-react/views/components.js";
import './cards.css';
const useStyles = makeStyles(styles);
const useStylecmp = makeStyles(stlcmp);
const usebox = makeStyles(stlcmp);

export default function Components(props) {
  const classecmp = useStyles();
  const classes = useStyles();
         const { ...rest } = props;
         return (
         <div>
         <Header
          brand="Portfolio"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
        />
        <Parallax image={require("../../assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                 <h2 className={classes.title}>Nouha Mb</h2>
                 <h3 className={classes.subtitle}>
                    Computing Science Engineer 
                 </h3>
                 <h3 className={classes.subtitle}>
                   Fullstack Developer
                 </h3>
                 <h3 className={classes.subtitle2}>
                 We Code, So we exist.
                </h3>
               </div>
            </GridItem>
          </GridContainer>
         </div>
         </Parallax> 
         <div className={classNames(classes.main, classes.mainRaised)}>
         <SectionPills />
         <SectionJavascript />
         <div className={classecmp.section}>
         <div className={classecmp.container}>
         <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Certifications</h2>
            <RecipeReviewCard/>
            </GridItem>
        </GridContainer>
      </div>
    </div>

         <SectionDownload />
            
      </div>
      <Footer />
    </div>
  );
}
