import {React,useContext} from 'react';
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StateContext } from './stateprovider';
function Header() {
    const { username } = useContext(StateContext);
    return(
        <div className="header">
            <div className="header__left">
                <div className="header__image">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png" alt=""></img>
                </div>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook'></input>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <FlagIcon />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon />
                </div>
                <div className="header__option">
                    <StorefrontIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={username.photoURL}/>
                    <h4>{username.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;