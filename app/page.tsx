"use client"
import React, { useState } from 'react'
import Header from './components/layout/Header'
import Container from './components/layout/Container'
import { RoastResult } from './type/portfolioType'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [portfolioUrl, setPortfolioUrl] = useState("")
  const [result, setResult] = useState<RoastResult | null>(null)
  const[audio, setAudio] = useState<string>('') // ✅ NEW
  const [error, setError] = useState("") // ✅ NEW

  const handleRoast = async (url: string,mode:string) => {

    setLoading(true)
    setPortfolioUrl(url)
    setError("") // reset error

    try {

      const res = await fetch('/api/roast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, mode })
      })

      const data = await res.json()
      console.log("data", data)

      // if (!data.success) {

      //   setError(data.error || "Something went wrong")
      //   setResult(null)
      //   setLoading(false)
      //   return
      // }
      setAudio(data.audio) 
      setResult(data.roast)

    } catch (err) {

      setError("Server error. Try again.")

    }

    setLoading(false)

  }
  console.log("result", result)
  return (

    <div className="min-h-screen bg-black text-white">

      <Header
        onSubmit={handleRoast}
        loading={loading}
        hasResult={!!result}
        error={error}
        url={portfolioUrl}
        setUrl={setPortfolioUrl}
      />

      {!loading && result && (
        <Container result={result} audio={audio} url={portfolioUrl}  />
      )}

    </div>
  )
}

export default App