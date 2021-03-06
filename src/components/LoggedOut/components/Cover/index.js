import React from 'react'

export default ({image, children}) => (
  <div
    style={{backgroundImage: `url(${image})`}}
    className='pv5 ph4 tc flex flex-column justify-center min-vh-100 h-100 cover'
  >
    {children}
  </div>
)
