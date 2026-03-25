import type { ReactNode } from "react"

export interface TableRow {
  material: string
  t_min: number
  t_max: number
  a1: number
  n1: number
  a2: number
  n2: number
}

export interface Section {
  id: string
  title: string
  label?: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  formula?: string
  table?: TableRow[]
  keywords?: string[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
