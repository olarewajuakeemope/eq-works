import React from 'react'
import './style.css'

const Loading = ({ bullets = 4, delay = 75, delayUnit = 'ms', loading = false, children }) => {
  const $bullets = [...Array(bullets).keys()].map(index => {
    const style = {
      animationDelay: (delay * index) + delayUnit,
    }
    return <div key={index} style={style} />
  })

  const $loader = !loading ? null : (
    <div className='Loader'>
      {$bullets}
    </div>
  )

  return (
    <div className='Loading'>
      {$loader}
      {children}
    </div>
  )
}

export default Loading