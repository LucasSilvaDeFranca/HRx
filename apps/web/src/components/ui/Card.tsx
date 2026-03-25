import type { ReactNode } from 'react'

/**
 * HRx Card — Pixel-perfect do Figma
 *
 * bg: #FFFFFF
 * border: 1px solid #E4E3FF
 * border-radius: 12px
 * shadow: 0px 1px 2px rgba(16,24,40,0.05)
 * overflow: hidden
 */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Card({ children, style: styleProp, ...props }: CardProps) {
  return (
    <div
      {...props}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E4E3FF',
        borderRadius: '12px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        overflow: 'hidden',
        ...styleProp,
      }}
    >
      {children}
    </div>
  )
}

/**
 * HRx CardHeader — Pixel-perfect do Figma
 *
 * Content area:
 *   padding-top: 14px
 *   padding-left: 24px
 *   padding-right: 24px
 *   gap: 16px
 *
 * Icon container:
 *   width: 36px, height: 36px
 *   bg: white
 *   border: 1.125px solid #E4E3FF
 *   border-radius: 6.75px
 *   shadow: 0px 1.125px 2.25px rgba(16,24,40,0.05)
 *
 * Title:
 *   DM Sans Medium 16px / 24px
 *   color: #363F72
 *
 * Divider:
 *   margin-top: 14px
 *   height: 1px
 *   bg: #E4E3FF
 */

interface CardHeaderProps {
  icon: ReactNode
  title: string
  action?: ReactNode
}

export function CardHeader({ icon, title, action }: CardHeaderProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        paddingTop: '14px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        {/* Icon container */}
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '6.75px',
          backgroundColor: '#FFFFFF',
          border: '1.125px solid #E4E3FF',
          boxShadow: '0px 1.125px 2.25px rgba(16, 24, 40, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          {icon}
        </div>
        {/* Title */}
        <span style={{
          flex: 1,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#363F72',
          minWidth: 0,
        }}>
          {title}
        </span>
        {/* Action */}
        {action}
      </div>
      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#E4E3FF',
        marginTop: '14px',
      }} />
    </div>
  )
}
