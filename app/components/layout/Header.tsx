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
            return `${value}`
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


                <div className="flex justify-center w-full">
                    <div className="relative w-full max-w-2xl">

                        <Input
                            value={url}
                            onChange={setUrl}
                            placeholder="Enter your portfolio URL..."
                            error={inputError || error}
                            rightElement={
                                <Button
                                    onClick={handleSubmit}
                                    loading={loading}
                                    variant="warning"
                                    size="sm"
                                    className="h-[42px] px-5"
                                >
                                    🔥 Roast Me
                                </Button>
                            }
                        />
                    </div>
                </div>
                {/* Mode Selector */}

                <div className="flex justify-center gap-3 mt-3">

                    <Button
                        onClick={() => setMode("brutal")}
                        variant={mode === "brutal" ? "brutal" : "ghost"}
                        size="sm"
                    >
                        🔥 Brutal
                    </Button>


                    <Button
                        onClick={() => setMode("polite")}
                        variant={mode === "polite" ? "polite" : "ghost"}
                        size="sm"
                    >
                        🙂 Polite
                    </Button>


                    <Button
                        onClick={() => setMode("expert")}
                        variant={mode === "expert" ? "expert" : "ghost"}
                        size="sm"
                    >
                        🧠 Expert
                    </Button>

                </div>
            </div>

        </div>
    )
}

export default Header