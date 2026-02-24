"use client"

import React from "react"
import Card from "../ui/Card"
import { Scores } from "@/app/type/portfolioType"
import { motion } from "framer-motion"

interface ScoreCardProps {
  score: Scores
}

const getColor = (value:number) => {

  if(value <= 3)
    return {
      bar: "from-red-500 to-red-400",
      text: "text-red-400",
      glow: "shadow-red-500/40",
      bg: "from-red-500/10 via-red-500/5 to-transparent"
    }

  if(value <= 6)
    return {
      bar: "from-orange-500 to-yellow-400",
      text: "text-orange-400",
      glow: "shadow-orange-500/40",
      bg: "from-orange-500/10 via-yellow-500/5 to-transparent"
    }

  return {
    bar: "from-green-500 to-emerald-400",
    text: "text-green-400",
    glow: "shadow-green-500/40",
    bg: "from-green-500/10 via-emerald-500/5 to-transparent"
  }
}

const ScoreCard = ({ score }: ScoreCardProps) => {

  const scoreData = [
    { label: "Design", value: score.design, color: getColor(score.design) },
    { label: "Clarity", value: score.clarity, color: getColor(score.clarity) },
    { label: "Conversion", value: score.conversion, color: getColor(score.conversion) },
    { label: "Overall", value: score.overall, color: getColor(score.overall) }
  ]

  return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">

      {scoreData.map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1
          }}
          whileHover={{
            y: -3
          }}
        >

          <Card
            align="center"
            className={`
            bg-gradient-to-br
            ${item.color.bg}

            border border-white/10
            backdrop-blur-md

            hover:scale-[1.02]
            transition
            `}
            >

            {/* Title + Score Inline */}

            <div className="flex justify-between items-center mb-2">

              <p className="text-lg font-bold text-gray-400">
                {item.label}
              </p>

              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15
                }}
                className={`font-semibold ${item.color.text}`}
              >
                {item.value}/10
              </motion.span>

            </div>


            {/* Progress Bar */}

            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">

              <motion.div

                initial={{ width: 0 }}

                animate={{
                  width: `${item.value * 10}%`
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.15
                }}

                className={`
                h-full
                rounded-full
                bg-gradient-to-r
                ${item.color.bar}
                ${item.color.glow}
                shadow-md
                `}
              />

            </div>

          </Card>

        </motion.div>

      ))}

    </div>

  )
}

export default ScoreCard