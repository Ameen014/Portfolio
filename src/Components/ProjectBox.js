import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    "Shake ShakeDesc" : "Experience a whole new world of mystery boxes with Shake Shake. Whether you're on the quest for an exciting mystery box or seeking the perfect special gift, Shake Shake has changed the experience from chance to win, to win for every box ,with a simple shake! Dive into the anticipation with every mystery box you purchase as we unveil an array of surprises – from electronic devices and sleek smartphones to exclusive s coupons and gift cards from your favorite brands. With Shake Shake, satisfaction is guaranteed every time, ensuring you’ll never lose.",
    // ShakeShakeGithub : "",
    "Shake ShakeWebsite" : "https://www.winshakes.com/",

    "Rent ChickenDesc" : "Discover the joy of raising your own chickens without the long-term commitment! At Rent-a-Chicken, we make it easy for families and individuals to enjoy the benefits of backyard hens. Our service provides everything you need for a fun and educational experience, from adorable, fully grown hens to a cozy coop and all necessary supplies.",
    // RogFreeGithub : "",
    "Rent ChickenWebsite" : "https://website.rentchicken.net/",

    LaimonahDesc:"At Laimonah, we believe that shopping should be seamless, enjoyable, and tailored to your needs. Our e-commerce platform offers a diverse range of high-quality products, from the latest fashion trends and cutting-edge electronics to unique home goods and lifestyle essentials.",
    // NewsletterGithub:"",
    LaimonahWebsite:"https://website.laimonah-scc.com/",
    
    "Hand StoneDesc":"Welcome to our website dedicated to artificial stone, where we merge natural beauty with modern innovation to offer high-quality products that meet all your needs. We provide a wide range of solutions made from artificial stone .",
    // WigglesGithub:"",
    "Hand StoneWebsite":"https://ameen014.github.io/Hand-Stone/",
  }

  // let show ='';
  // if(desc[projectName + 'Github']===""){
  //   show="none";
  // }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            {/* <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a> */}

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox