import React from "react";

import {
  Frame,
  Scroll,
  useCycle,
  useAnimation,
  transform,
  useMotionValue,
  useTransform,
  addPropertyControls,
  ControlType
} from "framer"

export default function Framer() {
  const [animate,cycle] = useCycle({opacity:0.9, rotateZ: 0 ,y:[-100,-80,100,190]}, {opacity:1.5 ,rotateZ: 25,y:[-100,-80,300] });
  const [animate1,cycle1] = useCycle({opacity:0.9, rotateZ: 0,y:[-100,-80,150] }, {opacity:1.5 ,rotateZ: [35,0],x:25,y:[-100,-80,200],z:30 });
  const [animate2,cycle2] = useCycle({opacity:0.9, rotateZ: 0,y:[-100,-80,120] }, {opacity:1.6 ,rotateZ: [50,0] ,rotateX:[0,90,0],y:[-100,-80,130],z:10,x:25});
  const [animate3,cycle3] = useCycle({opacity:0.9, rotateZ: 0,y:[-100,-80,80],z:-20,x:25 }, {opacity:0.7 ,rotateZ: [65,0],x:25,z:[10,0,-10,-20] });
 
  return (
    <div>
        <h2>Framer Card Animation</h2>
        <br/>
   <Frame width={'90%'} animate={animate} onTap={() => cycle()} initial={{x:25,Z:10,y:240}} heigh={250} borderRadius={35} background="url(http://www.la-roue-provencale.com/wp-content/uploads/2019/02/check-onevanilla-balance.png)"  />
   <Frame width={'90%'} animate={animate1} initial={{x:25,Z:10,y:150}} heigh={250} onTap={() => cycle1()} borderRadius={35} background="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbuAb9m1Xb_kIPSkgL_1CMSNftaYYGlYa_RZ2ZkdqN2hisppN)" />
   <Frame width={'90%'} animate={animate2} initial={{x:25,Z:10,y:180}} heigh={250} onTap={() => cycle2()} borderRadius={35}  background="url(https://www1.bac-assets.com/student-banking/spa-assets/images/assets-images-site-student-banking-two-column-flex-collapse-module-img-card-debit-red-CSX9e5ee027.png)"/>
   <Frame width={'90%'} animate={animate3} initial={{x:25,Z:10,y:210}} heigh={250} onTap={() => cycle3()} borderRadius={35}  background="url(https://d2e70e9yced57e.cloudfront.net/common/product/images/creditcards/500/credit-one-credit-card-3220c-17393220c.png)" />
 <br/>
 </div>
   
   );
}