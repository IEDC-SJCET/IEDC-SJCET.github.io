// src/types.ts
export interface Event {
    title?: string | undefined
    date?: string | undefined
    pattern?: "radial" | "cross" | "diagonal"
    image?: string
  }
  
  export interface EventCardProps {
    title: string | undefined
    date: string | undefined
    pattern?: "radial" | "cross" | "diagonal"
    image?: string
  }
  
  export type GeometricPatternProps = {
    variant?: "radial" | "diagonal" | "cross"
  }
  