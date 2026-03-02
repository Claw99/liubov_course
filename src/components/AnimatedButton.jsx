import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ children }) => {
  return (
    <button
      className="relative bg-transparent border border-border
        text-foreground hover:border-primary/50 transition-all
        duration-1000 focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed group
        px-8 py-4 text-lg font-medium rounded-2xl overflow-visible
        animated-border"
    >
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      ></svg>
      <span className="relative z-10 flex items-center text-bold justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
