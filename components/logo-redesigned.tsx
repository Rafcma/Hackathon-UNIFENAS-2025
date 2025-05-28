import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "default" | "compact" | "large"
  className?: string
}

export default function LogoRedesigned({ variant = "default", className }: LogoProps) {
  return (
    <div className={cn("flex items-center", variant === "compact" ? "space-x-2" : "space-x-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "compact" ? "w-8 h-10" : variant === "large" ? "w-14 h-16" : "w-10 h-12",
          "bg-gradient-to-b from-purple-700 to-purple-900 rounded-md shadow-sm",
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 relative flex flex-col items-center justify-center">
              <div className="w-full h-1/4 bg-purple-300 opacity-80 clip-triangle mb-0.5"></div>
              <div className="w-full h-1 bg-purple-300 opacity-80 mb-0.5"></div>
              <div className="w-full flex-1 flex justify-between px-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1/5 bg-purple-300 opacity-80 rounded-b-sm"></div>
                ))}
              </div>
              <div className="w-full h-1 bg-purple-300 opacity-80 mt-0.5"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black opacity-20"></div>
      </div>

      {variant !== "compact" && (
        <div className="flex flex-col">
          <h1
            className={cn(
              "font-cinzel font-bold text-gray-800 leading-tight",
              variant === "large" ? "text-2xl" : "text-lg",
            )}
          >
            Não se vá
          </h1>
          <p className={cn("text-purple-800 font-medium", variant === "large" ? "text-base" : "text-xs")}>com IA</p>
        </div>
      )}
    </div>
  )
}
