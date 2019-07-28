import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Sphere from '../threejs/sphere'
import { ThreeJSRComponent } from '@edwmurph/threejsr'

export default function () {
  const [color, setColor] = useState()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'THREEJSR', threejsr: { color } })
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
