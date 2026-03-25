import type { ReactNode } from 'react'

/**
 * HRx Badge — Pixel-perfect do Figma
 *
 * border-radius: 16px
 * padding: 2px 8px
 * font: DM Sans Medium 12px / 18px
 * mix-blend-mode: multiply
 *
 * blue: bg #F0F9FF, border 1px #B9E6FE, text #026AA2
 */

type BadgeVariant = 'blue' | 'success' | 'warning' | 'error' | 'gray'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
}

const variants: Record<BadgeVariant, { bg: string; border: string; color: string }> = {
  blue:    { bg: '#F0F9FF', border: '#B9E6FE', color: '#026AA2' },
  success: { bg: '#F6FEF9', border: '#DCFAE6', color: '#067647' },
  warning: { bg: '#FFFCF5', border: '#FEF0C7', color: '#F79009' },
  error:   { bg: '#FFFBFA', border: '#FEE4E2', color: '#D92D20' },
  gray:    { bg: '#F9FAFB', border: '#EAECF0', color: '#344054' },
}

export default function Badge({ variant = 'blue', children }: BadgeProps) {
  const v = variants[variant]
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      borderRadius: '16px',
      border: `1px solid ${v.border}`,
      backgroundColor: v.bg,
      color: v.color,
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '18px',
      fontFamily: "'DM Sans', sans-serif",
      whiteSpace: 'nowrap',
      mixBlendMode: 'multiply',
    }}>
      {children}
    </span>
  )
}
