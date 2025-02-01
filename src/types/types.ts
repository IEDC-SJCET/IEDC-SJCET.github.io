// src/types.ts
export interface Event {
    title: string
    date: string
    pattern?: "radial" | "diagonal"
    image?: string
  }
  
  export interface EventCardProps {
    title: string
    date: string
    pattern?: "radial" | "diagonal"
    image?: string
  }
  
  export type GeometricPatternProps = {
    variant?: "radial" | "diagonal"
  }
  