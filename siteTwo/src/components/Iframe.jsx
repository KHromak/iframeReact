import React, { useEffect } from 'react'

const Iframe = ({ src, height, width, iframeRef }, props) => {

  return (
    <div>
      <iframe src={src} height={height} width={width} id={'iframe'} ref={iframeRef} id={'the_iframe'} />
    </div>
  )
};

export default Iframe;