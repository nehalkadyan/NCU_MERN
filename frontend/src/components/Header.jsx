import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>Header Component!</h1>
        <p>Count value in Header Component : {props.countVal}</p>
    </div>
  )
}

export default Header