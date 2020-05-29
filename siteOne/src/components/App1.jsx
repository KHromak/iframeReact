import React from 'react'

const App1 = (props) => {
    
  
    
    
    return (
  
      <div>
        <h1>Site One</h1>
        { window.top.postMessage(
               JSON.stringify({
                 error: false,
                 message: "Hello World"
               }),
               '*'
             )}
        
        </div>
    );
  };
  
  export default App1;