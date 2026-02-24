"use client"

import React from "react"
import Card from "../ui/Card"
import { RoastResult } from "@/app/type/portfolioType"
import { motion } from "framer-motion"

interface SectionCardProps {
    cardData: RoastResult
}

const SectionCard = ({ cardData }: SectionCardProps) => {

    return (

        <div className="grid md:grid-cols-2 gap-5">

            {/* Savage Feedback */}

            <Card title="🔥 Savage Feedback">

                <div className="
                    text-left
                    max-h-[260px]
                    overflow-y-auto
                    scrollbar
                    relative

                    bg-gradient-to-br
                    from-green-500/10
                    via-transparent
                    to-emerald-500/10

                    rounded-xl
                    px-2
                    ">

                    {/* Gradient Glow Background */}

                    <div className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-red-500/10
                    via-transparent
                    to-transparent
                    pointer-events-none
                    rounded-xl
                    " />

                    {cardData.ux_issues.map((issue, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}

                            className="
                            relative
                            flex gap-2
                            py-3
                            px-2
                            text-sm
                            border-b border-white/10
                            last:border-none

                            hover:bg-red-500/5
                            transition
                    "
                        >

                            <span className="text-red-400 mt-[2px]">
                                ✖
                            </span>

                            <p className="text-gray-300 leading-snug">
                                {issue}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </Card>


            {/* Improvement Tips */}

            <Card title="✨ Improvement Tips">

                <div className="
                text-left
                max-h-[260px]
                overflow-y-auto
                scrollbar
                relative

                bg-gradient-to-br
                from-green-500/10
                via-transparent
                to-emerald-500/10

                rounded-xl
                px-2
                ">

                    <div className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-green-500/10
                    via-transparent
                    to-transparent
                    pointer-events-none
                    rounded-xl
                    " />

                    {cardData.copy_improvements.map((tip, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}

                            className="
                            relative
                            flex gap-2
                            py-3
                            px-2
                            text-sm
                            border-b border-white/10
                            last:border-none

                            hover:bg-green-500/5
                            transition
                            "
                        >

                            <span className="text-green-400 mt-[2px]">
                                ✓
                            </span>

                            <p className="text-gray-300 leading-snug">
                                {tip}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </Card>

        </div>

    )
}

export default SectionCard