import React from 'react';
import ShortCutElement from './components/ShortCutElement';


class ShortCutsPage extends React.Component {
  
  render(){
    return (
      <div className="shortcutbox">
        <ShortCutElement
        img="/img/settings.svg"
        name="Licht Aus!"
        onClick={()=>alert("This feature is not available yet!")}
        />
        <ShortCutElement
        img="/img/settings.svg"
        name="Licht An!"
        onClick={()=>alert("This feature is not available yet!")}
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
