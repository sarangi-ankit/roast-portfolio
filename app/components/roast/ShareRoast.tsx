"use client";

import { RoastResult } from "@/app/type/portfolioType";

interface ShareProps {
    shareResult: RoastResult
    portfolioUrl: string;
}

const ShareRoast = ({ shareResult, portfolioUrl }: ShareProps) => {

    const shareText = `🔥 My portfolio got roasted by AI

🌐 Portfolio:
${portfolioUrl}

⭐ Score:
${shareResult?.scores?.overall}/100

💀 Roast:
"${shareResult?.shareable_roast?.slice(0, 120)}..."

Try yours:
https://roastmyportfolio.com
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

        <div className="flex justify-center mt-6">

            <button
                onClick={handleShare}
                className="
                px-6 py-3
                bg-red-600
                hover:bg-red-500
                rounded-lg
                font-semibold
                shadow-lg
                "
            >
                🔗 Share Roast
            </button>

        </div>

    );
};

export default ShareRoast;