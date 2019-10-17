import React from 'react';


class ShortCutElement extends React.Component {
  
  render(){
    return (
      <div className="shortcutelement">
          <div background-color="#7289DA" weight="80%" onClick={() => this.props.onClick()}>
              <div background-color="#7289DA"> </div>
              <img alt="" src={this.props.img} weight="20px"></img>
              <div>{this.props.name}</div> 
            </div>
      </div>
    );
  }
}

export default ShortCutElement;
