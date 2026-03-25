import type { ReactNode } from 'react'

/**
 * HRx MetricCard — Pixel-perfect do Figma
 *
 * Container:
 *   width: 262px, height: 110px
 *   bg: #FFFFFF
 *   border: 1px solid #E4E3FF
 *   border-radius: 12px
 *   padding: 24px
 *   gap: 20px
 *   shadow: 0px 1px 2px rgba(16,24,40,0.05)
 *
 * Icon container:
 *   width: 48px, height: 48px
 *   border-radius: 10px
 *   gradient: 135deg #868EFF → #4318FF
 *   icon: 24x24 white, centered
 *
 * Label: DM Sans Medium 12px / 18px, #282A2F
 * Value: DM Sans Medium 24px / 32px, #363F72
 * Gap label→value: 4px
 */

interface MetricCardProps {
  icon: ReactNode
  label: string
  value: string
}

export default function MetricCard({ icon, label, value }: MetricCardProps) {
  return (
    <div style={{
      width: '262px',
      height: '110px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E4E3FF',
      borderRadius: '12px',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    }}>
      {/* Icon */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      {/* Text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        flex: 1,
        minWidth: 0,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
      }}>
        <span style={{ fontSize: '12px', lineHeight: '18px', color: '#282A2F' }}>
          {label}
        </span>
        <span style={{ fontSize: '24px', lineHeight: '32px', color: '#363F72' }}>
          {value}
        </span>
      </div>
    </div>
  )
}
