import React from 'react'

const CustomButton = ({ text, handleClick = false, type, loading = false }) => {
  return (
    <button className={`text-white bg-[#0bade3] border-none outline-none text-[1rem] rounded-md font-medium py-2 px-4 uppercase ease-in-out duration-[0.4s] hover:bg-[#0a86af] ${loading ? "pointer-events-none opacity-80" : ""}`} onClick={handleClick ? handleClick : null} type={type}>
        {text}
    </button>
  )
}

export default CustomButton