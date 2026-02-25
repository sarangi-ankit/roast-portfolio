"use client";

import { RoastResult } from "@/app/type/portfolioType";

interface ShareProps {
    shareResult: RoastResult;
    portfolioUrl: string;
}

const ShareRoast = ({ shareResult, portfolioUrl }: ShareProps) => {

    const shareText = `🔥 My portfolio got roasted by AI

🌐 Portfolio:
${portfolioUrl}

⭐ Score:
${shareResult?.scores?.overall}/10

💀 Roast:
"${shareResult?.shareable_roast?.slice(0, 200)}..."

Try yours:
https://roast-portfolio-eight.vercel.app/
`;

    const handleShare = async () => {

        if (navigator.share) {
            await navigator.share({
                title: "AI Portfolio Roast",
                text: shareText,
            });

        } else {
            await navigator.clipboard.writeText(shareText);
            alert("Copied to clipboard!");
        }
    };

    return (

        <div
            className="
      mt-6
      p-4
      rounded-xl
      border border-zinc-700
      bg-gradient-to-b from-zinc-900 to-black
      shadow-[0_0_20px_rgba(255,0,0,0.15)]
      text-center
      space-y-3
      max-w-lg
      mx-auto
      "
        >

            {/* Title + Score Row */}

            <div className="flex justify-between items-center">

                <h2 className="text-red-500 font-semibold">
                    🤖 Roast Complete
                </h2>

                <div className="text-green-400 font-bold">
                    {shareResult?.scores?.overall}/10
                </div>

            </div>


            {/* Roast Line */}

            <p className="text-red-400 text-sm italic line-clamp-2">
                &quot;{shareResult?.shareable_roast}&quot;
            </p>


            {/* Buttons */}

            <div className="flex justify-center gap-3">

                <button
                    onClick={() => window.location.reload()}
                    className="
          px-4 py-2
          rounded-lg
          text-sm
          bg-zinc-800
          hover:bg-zinc-700
          border border-zinc-600
          transition
          "
                >
                    🔄 Again
                </button>


                <button
                    onClick={handleShare}
                    className="
          px-4 py-2
          rounded-lg
          text-sm
          bg-red-600
          hover:bg-red-500
          font-medium
          shadow-[0_0_15px_rgba(255,0,0,0.4)]
          transition
          hover:scale-105
          "
                >
                    🚀 Share
                </button>

            </div>

        </div>

    );

};

export default ShareRoast;