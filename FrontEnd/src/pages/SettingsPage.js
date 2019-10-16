import React from 'react';
import Settingsblockelement from './components/Settingsblockelement';


class SettingsPage extends React.Component {
  
  render(){
    return (
      <div className="settings">
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
       </div>
    );
  }
}

export default SettingsPage;
