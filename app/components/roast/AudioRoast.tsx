"use client";
import React, { useRef, useState } from "react";

interface AudioRoastProps {
    audio?: string;
    loading?: boolean;
}

const AudioRoast = ({ audio, loading }: AudioRoastProps) => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    if (!audio && !loading) return null;

    const togglePlay = () => {

        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }

    };

    return (

        <div className="
    rounded-xl
    border border-red-500/20
    bg-gradient-to-r from-black via-red-950/20 to-black
    px-5 py-4
    shadow-md
    ">

            <div className="flex items-center justify-between mb-3">

                <h3 className="text-sm font-semibold flex items-center gap-2">
                    🔥 Audio Roast
                </h3>

                <span className="text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded">
                    AI Voice
                </span>

            </div>


            {loading ? (

                <div className="animate-pulse space-y-2">

                    <div className="h-3 w-1/3 bg-red-400/20 rounded" />
                    <div className="h-8 bg-red-400/10 rounded" />

                </div>

            ) : (

                <div className="flex items-center gap-4">

                    {/* Play Button */}

                    <button
                        onClick={togglePlay}
                        className="
            px-4 py-2
            text-sm
            rounded-lg
            bg-red-600
            hover:bg-red-500
            transition
            font-medium
            shadow
            "
                    >

                        {playing ? "⏸ Pause" : "▶ Play"}

                    </button>


                    {/* Wave */}

                    <div className="flex gap-1 items-end h-6 flex-1">

                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-[3px] bg-red-400 rounded 
                ${playing ? "animate-pulse" : ""}`}
                                style={{
                                    // eslint-disable-next-line react-hooks/purity
                                    height: `${Math.random() * 15 + 5}px`
                                }}
                            />
                        ))}

                    </div>


                    {/* Hidden Player */}

                    <audio
                        ref={audioRef}

                        onEnded={() => setPlaying(false)} // ⭐ AUTO RESET

                    >
                        <source
                            src={`data:audio/mp3;base64,${audio}`}
                            type="audio/mp3"
                        />
                    </audio>


                </div>

            )}

        </div>

    );
};

export default AudioRoast;