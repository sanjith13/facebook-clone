import React from 'react';
import { Avatar } from '@material-ui/core';
import './sidebarrow.css'
function SideBarRow({src,Icon,title}) {
  return(
      <div className="sidebarRow">
          {src && <Avatar src={src} />}
          {Icon && <Icon className = "sidebarRowIcon"/>}
          <h4>{title}</h4>
      </div>
  );
}

export default SideBarRow;
