import React from 'react';
import Image from '../Image';
import UserStore from '../stores/UserStore';


class Footer extends React.Component {
  
  render(){
    return (
      <div className="footer">
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
