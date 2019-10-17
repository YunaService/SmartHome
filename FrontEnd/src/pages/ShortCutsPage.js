import React from 'react';
import ShortCutElement from './components/ShortCutElement';


class ShortCutsPage extends React.Component {

  async lichtaus(){
    let res = await fetch('/lichtaus', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let result = await res.json();
    alert(result.msg);
  }
  
  
  async lichtan(){
    let res = await fetch('/lichtan', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let result = await res.json();
    alert(result.msg);
  }

  render(){
    return (
      <div className="shortcutbox">
        <ShortCutElement
        img="/img/settings.svg"
        name="Licht Aus!"
        onClick={()=>this.lichtaus()}
        />
        <ShortCutElement
        img="/img/settings.svg"
        name="Licht An!"
        onClick={()=>this.lichtan()}
        />
        <ShortCutElement
        img="/img/settings.svg"
        name="Custome Aus!"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <ShortCutElement
        img="/img/settings.svg"
        name="Custome An!"
        onClick={()=>alert("This feature is not available yet!")}
        />
      </div>
    );
  }
}

export default ShortCutsPage;
