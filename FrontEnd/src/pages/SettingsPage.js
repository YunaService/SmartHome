import React from 'react';
import Settingsblockelement from './components/Settingsblockelement';
import App from '../App';


class SettingsPage extends React.Component {
  
  render(){
    return (
      <div className="settings">
        <p>Dein Zuhause</p>
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Hue Bridges"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Hue Bridges"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Hue Bridges"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <p>Automatiche Lichtsteuerung</p>
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Widgets"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <p>APP</p>
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Softwareupdate"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Über"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/lamp.svg"
        name="Auslogen"
        onClick={()=>App.doLogout()}
        />
       </div>
    );
  }
}

export default SettingsPage;
