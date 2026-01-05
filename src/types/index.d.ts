/**
 * Types TypeScript pour le projet
 * Ces types peuvent être utilisés si vous migrez vers TypeScript
 */

// Types pour les projets
export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github?: string | null
  demo?: string | null
  image?: string
  tags?: string[]
}

// Types pour les compétences
export interface Skill {
  id: number
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

// Types pour les informations de contact
export interface ContactInfo {
  email: string
  phone?: string
  location?: string
  linkedin?: string
  github?: string
  website?: string
}

// Types pour les animations
export interface AnimationConfig {
  duration?: number
  delay?: number
  easing?: string
}

// Types pour les props de composants
export interface DarkModeProps {
  isDark: boolean
}

export interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseAfterTyping?: number
  pauseBeforeNext?: number
  showCursor?: boolean
  cursorChar?: string
  loop?: boolean
  noDelete?: boolean
}

// Types pour les sections de navigation
export type NavigationSection = 'projects' | 'about' | 'skills' | 'contact'

// Types pour les breakpoints
export interface Breakpoints {
  SM: number
  MD: number
  LG: number
  XL: number
  '2XL': number
}

