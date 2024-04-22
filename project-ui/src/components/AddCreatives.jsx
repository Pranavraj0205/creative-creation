import React, { useRef, useState } from 'react';
import './Addcreative.css';

function AddCreatives(props) {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const handleRemoveComponent = () => {
    const titleValue = titleRef.current.value;
    const subtitleValue = subTitleRef.current.value;
    props.handleAddCreative({ title: titleValue, subtitle: subtitleValue, backgroundColor });
    props.setButton(false);
    props.setShowComponent1(false);
  };

  const handleColorButtonClick = (color) => {
    setBackgroundColor(color); 
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: backgroundColor }}>
        <div className="header">
          <div className="header-title">
            <h1>Creative Creation</h1>
          </div>
          <div className="closing-button">
            <button className='close-btn' id='btn' onClick={() => {
              props.setButton(false);
              props.setShowComponent1(false);
            }}>X</button>
          </div>
        </div>
        <div className="title">
          <h2>title</h2>
          <input type="text" ref={titleRef} placeholder='This is a title' required/>
        </div>
        <div className="subtitle title">
          <h2>subtitle</h2>
          <input type="text" ref={subTitleRef} placeholder='This is a subtitle' required />
        </div>
        <div className="color">
          <div className="color-title">
            <h2>Color:</h2>
          </div>
          <div className="color-bg">
            <button onClick={() => handleColorButtonClick('#0abfbc')}><div className="color1 colors"></div></button>
            <button onClick={() => handleColorButtonClick('#248f8d')}><div className="color2 colors"></div></button>
            <button onClick={() => handleColorButtonClick('#ede574')}><div className="color3 colors"></div></button>
            <button onClick={() => handleColorButtonClick('#e84a5f')}><div className="color4 colors"></div></button>
            <button onClick={() => handleColorButtonClick('#ffba7f')}><div className="color5 colors"></div></button>
          </div>
          <div className="btn">
            <button onClick={handleRemoveComponent}>Done</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCreatives;
