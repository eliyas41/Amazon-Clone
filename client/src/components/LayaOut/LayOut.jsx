import React from 'react'
import Header from '../Header/Header'

function LayOut({children}) {
  return (
    <div>
      <Headers />
      {children}
    </div>
  )
}

export default LayOut;