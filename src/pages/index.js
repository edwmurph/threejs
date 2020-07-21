import React, { useState } from 'react';
import { ThreeJSRComponent } from '@edwmurph/threejsr';
import Sphere from '../threejs/sphere';

const Index = () => {
  const [color, setColor] = useState('white');
  const [renderLoopData, setRenderLoopData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setRenderLoopData({ color });
  };

  return (
    <div>
      <ThreeJSRComponent
        ThreeJSR={Sphere}
        renderLoopData={renderLoopData }
      />
      <div className='text-center'>
        <form className='m-5 p-5' onSubmit={handleSubmit}>
          <input name='color' onChange={(e) => setColor(e.target.value)} />
          <button type='submit'>Set Color</button>
        </form>
        <h1 className='text-light m-5 p-5'>asdf</h1>
        <h1 className='text-light m-5 p-5'>asdf</h1>
        <h1 className='text-light m-5 p-5'>asdf</h1>
        <h1 className='text-light m-5 p-5'>asdf</h1>
      </div>
    </div>
  );
};

export default Index;
