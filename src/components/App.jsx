import React from "react";
import Login from "./login"

var isLoggedIn = false;

const currentTime = new Date(2021, 2, 12, 13).getHours();

console.log(currentTime);

function App() {
 return <div className="container">{
    // isLoggedIn ? <h1>Hello</h1> : <Login />
    currentTime > 12 && <h1>Why are you still working?<h1/>

  }</div>;
}

export default App;
