import React from 'react'

const DarkMode = () => {
  return (
    <>
    {/* <!-- dark mode button --> */}
  <input type="checkbox" id="darkmode" className="dark-mode-checkbox"/>
  <label htmlFor="darkmode">
    <i className="fa-solid fa-circle-half-stroke toggle"></i>
  </label></>
  )
}

export default DarkMode
