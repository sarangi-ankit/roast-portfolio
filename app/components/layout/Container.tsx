import React from 'react'
import SectionCard from '../roast/SectionCard'
import ScoreCard from '../roast/ScoreCard'
import { RoastResult } from '@/app/type/portfolioType'
import AudioRoast from '../roast/AudioRoast'
import ShareRoast from '../roast/ShareRoast'
import TypeRoast from '../roast/TypeRoast'

interface ContainerProps {
    result: RoastResult
    audio: string;
    url: string;
}

const Container = ({ result, audio, url }: ContainerProps) => {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Your Portfolio has been Roasted</h3> 
            <div className="space-y-6">
                <TypeRoast roast={result?.first_impression} />
                <ScoreCard score={result?.scores} />
                <AudioRoast audio={audio} />
                <SectionCard cardData={result} />
                <ShareRoast shareResult={result} portfolioUrl={url} />
                
                </div>
            
        </div>
    )
}

export default Container