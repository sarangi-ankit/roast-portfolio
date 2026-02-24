"use client"
import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

interface HeaderProps {
    onSubmit: (url: string, mode: string) => void
    loading: boolean
    hasResult: boolean
    error: string 
    url: string
    setUrl: (url: string) => void
}

const Header = ({ onSubmit, loading, hasResult, error,url,setUrl }: HeaderProps) => {

    
    const [inputError, setInputError] = useState('')
    const [mode, setMode] = useState("brutal") // ✅ NEW: mode state

    const normalizeUrl = (value: string) => {
        if (!value.startsWith("http")) {
            return `https://${value}`
        }
        return value
    }


    const handleSubmit = () => {

        if (!url.trim()) {
            setInputError("Please enter a website URL")
            return
        }

        const formattedUrl = normalizeUrl(url)

        try {

            new URL(formattedUrl)

            setInputError("") // clear local error
            onSubmit(formattedUrl, mode)

        } catch {

            setInputError("Enter a valid URL like https://example.com")

        }
    }


    return (

        <div
            className={`
      w-full transition-all duration-700
      ${hasResult
                    ? "py-6 border-b border-zinc-800"
                    : "min-h-screen flex items-center justify-center"}
      `}
        >

            <div className="max-w-4xl mx-auto w-full px-6 text-center">

                <h1
                    className={`
          font-bold transition-all duration-700
          ${hasResult ? "text-2xl mb-4" : "text-5xl mb-8"}
          `}
                >
                    Roast My Portfolio 🔥
                </h1>


                <div className="flex justify-center gap-4 flex-col sm:flex-row">

                    <Input
                        value={url}
                        onChange={setUrl}
                        placeholder="Enter Your Portfolio URL ..."


                        error={inputError || error}
                    />

                    <Button
                        onClick={handleSubmit}
                        loading={loading}
                    />

                </div>
                {/* Mode Selector */}

                <div className="flex justify-center gap-3 mt-3">

                    <button
                        onClick={() => setMode("brutal")}
                        className={`
                        px-4 py-2 rounded-lg text-sm font-semibold transition

                        ${mode === "brutal"
                                ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"}
                    `}
                    >
                        🔥 Brutal
                    </button>


                    <button
                        onClick={() => setMode("polite")}
                        className={`
                            px-4 py-2 rounded-lg text-sm font-semibold transition

                            ${mode === "polite"
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"}
                        `}
                    >
                        🙂 Polite
                    </button>


                    <button
                        onClick={() => setMode("expert")}
                        className={`
                        px-4 py-2 rounded-lg text-sm font-semibold transition

                        ${mode === "expert"
                                ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"}
                        `}
                    >
                        🧠 Expert
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Header