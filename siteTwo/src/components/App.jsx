import React from 'react';
import Iframe from './Iframe'

const App = () => {

  return (
    <div>
      Site Two
      <Iframe src="http://localhost:8080/" height="500" width="500"/>
    </div>
  )


}

export default App