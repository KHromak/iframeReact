import React from 'react'

const Iframe = ({ src, height, width, iframeRef }, props) => {

  return (
    <div>
      <iframe src={src} height={height} width={width} />
    </div>
  )
};

export default Iframe;