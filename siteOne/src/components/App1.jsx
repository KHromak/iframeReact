import React, {useState} from 'react'

const App1 = () => {

  const [message, setMessage] = useState('');

  const postWindowMessage = (message) => {
    window.top.postMessage(
      JSON.stringify({
        error: false,
        message: message
      }),'*')
  }
    
    return (
  
      <div>
        <h1>Site One</h1>
        {postWindowMessage(message) }
             <input value={message} onChange={e => setMessage(e.target.value)}  placeholder='Type message site one'/>
        
        </div>
    );
  };
  
  export default App1;