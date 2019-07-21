import React from 'react';
import './App.css';
import SideBar from './pages/side-bar';
import Me from './pages/me/me';

function App() {
    return (
        <div className="App" >
            <SideBar></SideBar>
            <Me></Me>
        </div>
    );
}

export default App;