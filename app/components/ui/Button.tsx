"use client"

import React from "react"

interface ButtonProps {

    children: React.ReactNode
    onClick?: () => void
    loading?: boolean
    variant?: "primary" | "brutal" | "polite" | "expert" | "ghost" | "warning"
    size?: "sm" | "md" | "lg"
    className?: string
    disabled?: boolean

}

const Button = ({
    children,
    onClick,
    loading = false,
    variant = "primary",
    size = "md",
    className = "",
    disabled
}: ButtonProps) => {


    const variants = {

        primary:
            "bg-white text-black hover:bg-zinc-200",

        brutal:
            "bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-400",

        polite:
            "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400",

        expert:
            "bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-400",

        ghost:
            "bg-zinc-800 text-gray-300 hover:bg-zinc-700",
        warning:
            "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 active:scale-95",

    }


    const sizes = {

        sm: "px-4 py-2 text-sm rounded-lg",

        md: "px-6 h-[48px] rounded-xl font-semibold",

        lg: "px-8 py-4 text-lg rounded-xl font-semibold"

    }


    return (

        <button
            onClick={onClick}
            disabled={loading || disabled}

            className={`
   relative
   overflow-hidden
   transition-all duration-300

   flex
   items-center
   justify-center
   gap-2

   ${variants[variant]}
   ${sizes[size]}

   disabled:opacity-50
   disabled:cursor-not-allowed

   ${className}
   `}
        >


            {/* Loader */}

            {loading && (

                <div className="flex gap-1">

                    <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-300" />

                </div>

            )}


            {!loading && children}


            {loading && (

                <span className="text-sm ml-1">
                    Analyzing
                </span>

            )}


        </button>

    )

}

export default Button