import {useState} from 'react';
import './App.css';
import Header from './header';
import SideBar from './sidebar';
import Feed from './feed';
import Widgets from './widgets';
import Login from './login';
import { StateContext } from './stateprovider';
function App() {
  const [username,setUserName] = useState(null);
  return (
    <div className="app">
      <StateContext.Provider value={{username,setUserName}}>
      {!username ? (
        <Login />
      ) : (
      <div>
        <Header />
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      </div>
      )}
      </StateContext.Provider>
    </div>
  );
}

export default App;
