import React, { useGlobal, useState } from 'reactn'
import Sphere from '../threejs/sphere'
import { ThreeJSRComponent } from 'threejs-r'

export default function () {
  const [, setThreejsr] = useGlobal('threejsr')
  const [color, setColor] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setThreejsr({ color })
  }

  return (
    <div>
      <ThreeJSRComponent ThreeJSR={Sphere} />
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
  )
}
