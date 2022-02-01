import React from 'react';
import './widgets.css';
function Widgets() {
  return <div className="widgets">
      <iframe src=""
      height="100%"
      width="340"
      title="myframe"
      style ={{border:"none",overflow:"hidden"}}
      scrolling = "no"
      frameborder = "0"
      allowTransparency ="true"
      allow="encrypted-media"></iframe>
  </div>;
}

export default Widgets;
