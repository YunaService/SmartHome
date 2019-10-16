import React from 'react';

class MenuButton extends React.Component {

  render(){
    return (
      <div className="menuButton">
        <button 
          className="menubtn"
          disabled={this.props.disabled}
          onClick={() => this.props.onClick() }
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default MenuButton;
