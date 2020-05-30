import React, { useEffect } from 'react'

const Iframe = ({src, height, width, dispatchMessage}, props) => {    

      useEffect(() => {
      const handler = event => {
      const data = event.data;
     
      if (typeof(data) == 'string'){
        let parsedData = JSON.parse(data);
        dispatchMessage(parsedData.message);
      }
    }
    
    window.addEventListener("message", handler)
   
    return () => window.removeEventListener("message", handler)
  }, []) 
    
      return(         
        <div>            
          <iframe src={src} height={height} width={width}  />     
        </div>
      )
    
  };



  export default Iframe;