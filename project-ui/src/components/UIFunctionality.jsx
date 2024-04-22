import React, { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import AddCreatives from './AddCreatives';
import './UI.css';

function UIFunctionality() {
  const [creatives, setCreatives] = useState([]);
  const [button, setButton] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleAddCreative = (creative) => {
    setCreatives([...creatives, creative]);
  };

  const handleClick1 = () => {
    setShowComponent1(true);
    setButton(true);
  };


  const filteredCreatives = creatives.filter((creative) =>
    creative.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    creative.subtitle.toLowerCase().includes(searchInput.toLowerCase()) ||
    (selectedColor && creative.backgroundColor === selectedColor)
  );

  
  const handleColorClick = (color) => {
    // setSelectedColor(color);
    const filteredCreatives = creatives.filter((creative) =>
    creative.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    creative.subtitle.toLowerCase().includes(searchInput.toLowerCase()) ||
    (color && creative.backgroundColor === selectedColor)

  );
  console.log(filteredCreatives)
    console.log(color);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="header">
            <h2>Filter By</h2>
          </div>
          <div className="hero1">
            <div className="color">
              <div className="color-title">
                <h2>Color:</h2>
              </div>
              <div className="color-bg">
                <button onClick={() => handleColorClick('#0abfbc')}><div className="color1 colors"></div></button>
                <button onClick={() => handleColorClick('#248f8d')}><div className="color2 colors"></div></button>
                <button onClick={() => handleColorClick('#ede574')}><div className="color3 colors"></div></button>
                <button onClick={() => handleColorClick('#e84a5f')}><div className="color4 colors"></div></button>
                <button onClick={() => handleColorClick('#ffba7f')}><div className="color5 colors"></div></button>
              </div>
            </div>
            <div className="title">
              <h3>title/subtitle:</h3>
              <input 
                type="text" 
                placeholder='Search across title and subtitle' 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
              />
            </div>
          </div>
          <div className="creatives">
            <div className="progress">
              <ProgressBar completed={filteredCreatives.length * 20} customLabel=" " maxCompleted={100} />
            </div>
            <div className="progress-title">
              <p>{filteredCreatives.length}/5 Creatives</p>
            </div>
          </div>
          <div className="btn">
            <button id='btn' onClick={handleClick1} disabled={button || creatives.length ===5}>+ Add Creative</button>
          </div>
         
          {filteredCreatives.map((creative, index) => (
            <div key={index} className="title-and-subtitle" style={{ backgroundColor: creative.backgroundColor }}>
              <h2> {creative.title}</h2>
              <p> {creative.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="container2">
          {showComponent1 && <AddCreatives setButton={setButton} setShowComponent1={setShowComponent1} handleAddCreative={handleAddCreative} />}
        </div>
      </div>
    </>
  );
}

export default UIFunctionality;
