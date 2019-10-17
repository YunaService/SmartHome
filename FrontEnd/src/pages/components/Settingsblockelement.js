import React from 'react';


class Settingsblockelement extends React.Component {
  
  render(){
    return (
      <div className="settingsblock">
          <div background-color="#7289DA" weight="80%" onClick={() => this.props.onClick()}>
              <div background-color="#7289DA"> </div>
              <img alt="" src={this.props.img} weight="20px"></img>
              <div>{this.props.name}</div> 
            </div>
      </div>
    );
  }
}

export default Settingsblockelement;
