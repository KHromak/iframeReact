import React, { useEffect } from 'react'

var Iframe = (props) => {    
    
      useEffect(() => {
    const handler = event => {
      const data = event.data
      console.log("Hello World?", data)
    }

    window.addEventListener("message", handler)

    // clean up
    return () => window.removeEventListener("message", handler)
  }, []) // empty array => run only once
    
      return(         
        <div>          
          <iframe src={props.src} height={props.height} width={props.width}/>         
        </div>
      )
    
  };

  export default Iframe;