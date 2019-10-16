import React from 'react';
import Image from '../Image';
import UserStore from '../stores/UserStore';


class Footer extends React.Component {
  
  render(){
    return (
      <div className="footer">
      <Image
      src='/img/lamph.png'
      alt='home'
      onClick={() => {
        UserStore.page = "home";
      }}
      />
      <Image
      src='/img/temperature.png'
      alt='temperature'
      onClick={() => {
        UserStore.page = "temperature";
      }}
      />
      <Image
      src='/img/shortcuts.png'
      alt='shortcuts'
      onClick={() => {
        UserStore.page = "shortcuts";
      }}
      />
      <Image
      src='/img/settings.png'
      alt='settings'
      onClick={() => {
        UserStore.page = "settings";
      }}
      />
          
      </div>
    );
  }
}

export default Footer;
