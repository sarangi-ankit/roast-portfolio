import { useTypewriter } from "../../hook/useTypewriter";

interface TypeRoastProps {
  roast: string;
}

const TypeRoast = ({ roast }: TypeRoastProps) => {

  const typedText = useTypewriter(roast, 70);

  return (

    <div className="max-w-8xl mx-auto">

      <div className="
      bg-gradient-to-b from-zinc-900 to-black
      border border-green-500/20
      rounded-xl
      shadow-[0_0_25px_rgba(34,197,94,0.15)]
      overflow-hidden
      ">

        {/* Small Header */}
        <div className="
        flex items-center justify-between
        px-3 py-1.5
        border-b border-green-500/10
        bg-black/40
        ">

          <div className="flex gap-1.5">

            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="w-2 h-2 bg-green-500 rounded-full" />

          </div>

          <div className="text-[10px] text-green-400 font-mono">
            AI Roast Engine
          </div>

        </div>


        {/* Compact Content */}

        <div className="
        px-4 py-3
        font-mono
        text-green-400
        text-xs
        leading-6
        tracking-wide
        whitespace-pre-line
        max-h-[160px]
        overflow-hidden
        ">

          {typedText}

          <span className="animate-pulse ml-1 text-green-300">
            ▌
          </span>

        </div>

      </div>

    </div>

  );

};

export default TypeRoast;