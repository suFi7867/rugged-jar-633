import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
    <>
    <div className={styles.mainLoadCSS}  >

      <div   className={styles.loadingCSS} >
     
        <img
          width="100%"
          src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
          alt="loading..."
          />
       <h1 style={{fontSize :"50px", marginTop : "-50px"}} >suFi</h1>
      </div>
   </div>
    </>
  );
};

export default Loading;
