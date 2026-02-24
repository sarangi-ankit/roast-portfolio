"use client"

import React from "react"

interface InputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    error?: string
}

const Input = ({
    value,
    onChange,
    placeholder,
    error
}: InputProps) => {

    

    return (

        <div className="w-full sm:w-[420px] text-left">

            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}

                className={`
        w-full
        px-5 py-3
        rounded-xl

        bg-zinc-900
        border

        outline-none
        transition-all duration-300

        ${error
                        ? "border-red-500 shadow-lg shadow-red-500/20"
                        : "border-zinc-800 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/20"
                    }
        `}
            />

            {/* Error Message */}

            <div
                className={`
        text-red-400
        text-sm
        mt-2

        transition-all duration-300

        ${error
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }
        `}
            >

                {error || "placeholder"}

            </div>

        </div>

    )
}

export default Input