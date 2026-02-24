"use client"

import React from "react"

interface ButtonProps {
   
    onClick: () => void
    loading?: boolean
}

const Button = ({
    
    onClick,
    loading
}: ButtonProps) => {

    return (

        <button
            onClick={onClick}
            disabled={loading}
            className="
      bg-white text-black
      px-6 h-[48px]
      rounded-xl
      font-semibold

      hover:bg-zinc-200

      transition-all duration-300

      disabled:opacity-50
      disabled:cursor-not-allowed
      "
        >

            {loading ? "Analyzing..." : "Roast Me!"}

        </button>

    )
}

export default Button