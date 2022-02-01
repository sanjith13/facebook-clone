import {React,useContext} from 'react';
import SideBarRow from './sidebarrow';
import './sidebar.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StateContext } from './stateprovider';
function SideBar() {
  const {username} = useContext(StateContext);
  return(
      <div className="sideBar">
          <SideBarRow src = {username.photoURL} title={username.displayName}/>
          <SideBarRow Icon = {LocalHospitalIcon} title = "COVID information center"/>
          <SideBarRow Icon = {EmojiFlagsIcon} title = "Pages"/>
          <SideBarRow Icon = {PeopleIcon} title = "Friends"/>
          <SideBarRow Icon = {ChatIcon} title = "Messenger"/>
          <SideBarRow Icon = {StorefrontIcon} title = "MarketPlace"/>
          <SideBarRow Icon = {VideoLibraryIcon} title = "Videos"/>
          <SideBarRow Icon = {ExpandMoreIcon} title = "MarketPlace"/>
      </div>
  );
}

export default SideBar;
