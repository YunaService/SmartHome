import React from 'react';

class Image extends React.Component {

  render(){
    return (
      <div className="image">
        <img 
          className="btn"
          src={this.props.src}
          alt={this.props.alt}
          onClick={() => this.props.onClick() }
        >
        </img>
      </div>
    );
  }
}

export default Image;
