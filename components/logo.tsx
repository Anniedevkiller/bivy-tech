import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "white"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
      >
        <path
          d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z"
          stroke={variant === "white" ? "#FFFFFF" : "#6366F1"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15C15 12.7909 16.7909 11 19 11H21C23.2091 11 25 12.7909 25 15V25C25 27.2091 23.2091 29 21 29H19C16.7909 29 15 27.2091 15 25V15Z"
          fill={variant === "white" ? "#FFFFFF" : "#6366F1"}
        />
        <path
          d="M15 20H25"
          stroke={variant === "white" ? "#6366F1" : "#FFFFFF"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className={cn("text-xl font-bold", variant === "white" ? "text-white" : "text-gray-900 dark:text-white")}>
        Bivy Tech
      </span>
    </div>
  )
}
