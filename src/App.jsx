// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App" >
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={ChatPage}/>
    </div> 
  );
}

export default App;
