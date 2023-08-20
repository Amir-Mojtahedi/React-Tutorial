import React from 'react';
import ReactDOM from 'react-dom/client';

function Navbar(){
  return(
    <nav>
      <ul>
        <li><img src={process.env.PUBLIC_URL + "/react-logo.png"} style={{width:"1%"}}/> ReactFacts</li>
        <li>React Course - Project 1</li>
      </ul>
    </nav>
  )
}

function MainContent(){
  return(
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>React is a front-end JavaScript library</li>
        <li>React is maintained by Facebook</li>
        <li>React is used to create reusable UI components</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <MainContent />
    </div>
  </React.StrictMode>
);

