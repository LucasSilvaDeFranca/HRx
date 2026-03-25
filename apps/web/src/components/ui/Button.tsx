import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * HRx Button — Pixel-perfect do Figma
 *
 * Primary:   bg #637BFF, border #637BFF, text white
 * Secondary: bg #FFF, border #E4E3FF, text #363F72
 * Outline:   bg #FFF, border #D0D5DD, text #344054
 * Ghost:     transparent, text #456DFF
 *
 * sm: py-8  px-14, text 14px, h~36px
 * md: py-10 px-16, text 14px, h~40px
 * lg: py-10 px-18, text 18px, h~48px
 *
 * border-radius: 8px
 * shadow: 0px 1px 2px rgba(16,24,40,0.05)
 */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: ReactNode
}

const variantConfig: Record<ButtonVariant, {
  bg: string; border: string; color: string;
  hoverBg: string; hoverBorder: string;
  shadow: string;
}> = {
  primary: {
    bg: '#637BFF', border: '#637BFF', color: '#FFFFFF',
    hoverBg: '#456DFF', hoverBorder: '#456DFF',
    shadow: '0px 1px 2px rgba(16,24,40,0.05)',
  },
  secondary: {
    bg: '#FFFFFF', border: '#E4E3FF', color: '#363F72',
    hoverBg: '#F9FAFB', hoverBorder: '#E4E3FF',
    shadow: '0px 1px 2px rgba(16,24,40,0.05)',
  },
  outline: {
    bg: '#FFFFFF', border: '#D0D5DD', color: '#344054',
    hoverBg: '#F9FAFB', hoverBorder: '#D0D5DD',
    shadow: '0px 1px 2px rgba(16,24,40,0.05)',
  },
  ghost: {
    bg: 'transparent', border: 'transparent', color: '#456DFF',
    hoverBg: 'transparent', hoverBorder: 'transparent',
    shadow: 'none',
  },
}

const sizeConfig: Record<ButtonSize, {
  paddingX: number; paddingY: number; fontSize: number; lineHeight: number;
}> = {
  sm: { paddingX: 14, paddingY: 8, fontSize: 14, lineHeight: 20 },
  md: { paddingX: 16, paddingY: 10, fontSize: 14, lineHeight: 20 },
  lg: { paddingX: 18, paddingY: 10, fontSize: 18, lineHeight: 28 },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  style: styleProp,
  ...props
}: ButtonProps) {
  const v = variantConfig[variant]
  const s = sizeConfig[size]

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-[8px]
        font-medium cursor-pointer transition-all
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `.trim()}
      style={{
        backgroundColor: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: '8px',
        boxShadow: v.shadow,
        color: v.color,
        padding: `${s.paddingY}px ${s.paddingX}px`,
        fontSize: `${s.fontSize}px`,
        lineHeight: `${s.lineHeight}px`,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        ...styleProp,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = v.hoverBg
        e.currentTarget.style.borderColor = v.hoverBorder
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = v.bg
        e.currentTarget.style.borderColor = v.border
      }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0 flex">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0 flex">{icon}</span>}
    </button>
  )
}
