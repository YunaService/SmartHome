import React from 'react';


class Settingsblockelement extends React.Component {
  
  render(){
    return (
      <div className="settingsblock">
          <div background-color="#7289DA" weight="80%" onClick={() => this.props.onClick()}><div weight="10px" background-color="#7289DA"> </div><img alt="" src={this.props.img}></img> <div>{this.props.name}</div> </div>
      </div>
    );
  }
}

export default Settingsblockelement;
