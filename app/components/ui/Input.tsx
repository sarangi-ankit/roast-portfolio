"use client"

import React from "react"

interface InputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    error?: string
    rightElement?: React.ReactNode   // 👈 NEW
}

const Input = ({
    value,
    onChange,
    placeholder,
    error,
    rightElement
}: InputProps) => {

    return (
        <div className="w-full max-w-2xl text-left">

            <div className="relative w-full">

                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`
            w-full
            h-[56px]
            pl-5
            ${rightElement ? "pr-36" : "pr-5"}
            rounded-xl
            bg-zinc-900
            border
            outline-none
            transition-all duration-300
            text-[15px]
            font-medium
            tracking-wide
            font-[family-name:var(--font-space)]
            placeholder:text-gray-500

            ${error
                            ? "border-red-500 shadow-lg shadow-red-500/20"
                            : "border-zinc-800 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20"
                        }
          `}
                />

                {/* Right Element (Button) */}
                {rightElement && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        {rightElement}
                    </div>
                )}

            </div>

            {error && (
                <div className="text-red-400 text-sm mt-2 transition-all duration-300">
                    {error}
                </div>
            )}

        </div>
    )
}

export default Input