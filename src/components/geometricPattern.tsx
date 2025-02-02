// src/components/GeometricPattern.tsx
import type { GeometricPatternProps } from "@/types/types"

const GeometricPattern = ({ variant = "radial" }: GeometricPatternProps) => {
  if (variant === "radial") {
    return (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <g stroke="white" strokeWidth="0.5" fill="none">
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
          <line x1="25" y1="0" x2="50" y2="50" />
          <line x1="75" y1="0" x2="50" y2="50" />
          <line x1="0" y1="25" x2="50" y2="50" />
          <line x1="0" y1="75" x2="50" y2="50" />
          <line x1="100" y1="25" x2="50" y2="50" />
          <line x1="100" y1="75" x2="50" y2="50" />
          <line x1="25" y1="100" x2="50" y2="50" />
          <line x1="75" y1="100" x2="50" y2="50" />
        </g>
      </svg>
    )
  }
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <g stroke="white" strokeWidth="0.5" fill="none">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </g>
    </svg>
  )
}

export default GeometricPattern
