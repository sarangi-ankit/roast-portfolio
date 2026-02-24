import React from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

const Card = ({
  title,
  description,
  children,
  align = "left",
  className,
}: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-zinc-900/80 backdrop-blur-sm border border-zinc-800",
        "rounded-2xl p-6 shadow-xl transition-all duration-300",
        "hover:border-zinc-700 hover:shadow-2xl",
        align === "center" && "text-center",
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-zinc-400 text-sm mb-4">
          {description}
        </p>
      )}

      {children && (
        <div className="text-zinc-300 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;