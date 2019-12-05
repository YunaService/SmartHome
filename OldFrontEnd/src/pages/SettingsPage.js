import React from 'react';
import Settingsblockelement from './components/Settingsblockelement';
import UserStore from '../stores/UserStore';


class SettingsPage extends React.Component {
  
  async doLogout(){
    try{

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let result = await res.json();

      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
        UserStore.page = 'home';
      }

    }catch(e){
      console.log(e)
    }
  }


  render(){
    return (
      <div className="settings">
        <p>Dein Zuhause</p>
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Hue Bridges"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Zubehör"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Lampeneinstellungen"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <p>Automatiche Lichtsteuerung</p>
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Widgets"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <p>APP</p>
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Softwareupdate"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Über"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <Settingsblockelement 
        img="/img/settings.svg"
        name="Ausloggen"
        onClick={()=>this.doLogout()}
        />
       </div>
    );
  }
}

export default SettingsPage;
