import {React,useContext} from 'react';
import Button from '@mui/material/Button';
import './login.css';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { StateContext } from './stateprovider';
function Login() {
  const { setUserName } = useContext(StateContext);
  const handlesubmit = () => {
      const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserName(result.user);
        // ...
      }).catch((error) => {
        console.log(error);
      });
  }
  return <div className="login">
      <div className="login__logo">
          <img src = "https://blog.logomyway.com/wp-content/uploads/2019/09/f-logo-icon.jpg" alt=""/>
          <h1>facebook</h1>
      </div>
      <Button type="submit" onClick={handlesubmit}>SignIn</Button>
  </div>;
}

export default Login;
