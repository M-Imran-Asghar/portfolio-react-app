import React from 'react'

function Button({
    label="",
    className="",
    onClick,
}) {
    
    
  return (
    <div>
        <button className={` rounded-xl  ${className} `}
        onClick={onClick}
        >
            {label}
        </button>
        
    </div>
  )
}

export default Button