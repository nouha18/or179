import React from "react";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import DraggableList from './Langcard.js';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

export default function SectionJavascript() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Top Skills</h2>
          <div style={{width:'100%',height:2,backgroundColor:'#c2c2c2'}}></div>
        </div>
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Framework And Libraries</h3>
              </div>
              <div  style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <h4>Reactjs/Nodejs {"v<=17"}</h4>
                <CustomLinearProgress
                style={{width:'100%'}}
                variant="determinate"
                color="primary"
                value={80}
              />
              </div>
             <div>
             <h4>.Net core3.0 c# Rest Api</h4>
             <CustomLinearProgress
                variant="determinate"
                color="info"
                value={60}
              />
             </div>
             <div>
             <h4>Symfony PhP 4.4.18</h4>
             <CustomLinearProgress
                variant="determinate"
                color="success"
                value={80}
                style={{ width: "100%" }}
              />
             </div>
             <br/>
             <div  style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <h4>Angular 7/8/9/10/Nodejs/MongoDb</h4>
                <CustomLinearProgress
                style={{width:'100%'}}
                variant="determinate"
                color="primary"
                value={70}
              />
              </div>
              <br/>
              <div>
             <h4>React Native/expo-cli v4.0</h4>
             <CustomLinearProgress
                variant="determinate"
                color="info"
                value={60}
              />
             </div>
             <br/>
           <div>
             <h4>DB : nosql(mongodb){"'"} sql(mysql)</h4>
             <CustomLinearProgress
                variant="determinate"
                color="danger"
                value={60}
                style={{ width: "100%", display: "inline-block" }}
              />
           </div>
              <br/>
             <div>
               <h4>Docker ContainerApps/ github devtools</h4>
             <CustomLinearProgress
                variant="determinate"
                color="warning"
                value={80}
                style={{ width: "100%", display: "inline-block" }}
              />
             </div>
           
              <br/>
           <div>
             <h4>psd/Photoshop :PixelPerfect</h4>
             <CustomLinearProgress
                variant="determinate"
                color="success"
                value={60}
                style={{ width: "100%", display: "inline-block" }}
              />
           </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Languages</h3>
                <DraggableList items={'English French Italien Arabic Chinese'.split(' ')} />
               </div>
              </GridItem>
      
          </GridContainer>
        </div>
      
      
      </div>
    </div>
  );
}
