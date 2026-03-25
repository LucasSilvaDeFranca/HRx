import type { ReactNode } from 'react'

/**
 * HRx ProgressBar Card — Pixel-perfect do Figma
 *
 * Container: rounded 12px, padding 16px
 * Icon: 40x40 rounded-full
 * Gap icon→content: 18px
 * Bar: height 8px, border-radius 4px
 * Gap label→bar: 8px
 */

type ProgressVariant = 'success' | 'warning' | 'error'

interface ProgressBarProps {
  label: string
  value: string
  percent: number
  variant: ProgressVariant
  icon: ReactNode
}

const config: Record<ProgressVariant, {
  containerBg: string; iconBg: string; barBg: string; barFill: string; text: string
}> = {
  success: { containerBg: '#F6FEF9', iconBg: '#DCFAE6', barBg: '#DCFAE6', barFill: '#067647', text: '#067647' },
  warning: { containerBg: '#FFFCF5', iconBg: '#FEF0C7', barBg: '#FEF0C7', barFill: '#F79009', text: '#F79009' },
  error:   { containerBg: '#FFFBFA', iconBg: '#FEE4E2', barBg: '#FEE4E2', barFill: '#D92D20', text: '#D92D20' },
}

export default function ProgressBar({ label, value, percent, variant, icon }: ProgressBarProps) {
  const c = config[variant]
  return (
    <div style={{
      display: 'flex', gap: '18px', alignItems: 'flex-start',
      padding: '16px', borderRadius: '12px', backgroundColor: c.containerBg, width: '100%',
    }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '20px', flexShrink: 0,
        backgroundColor: c.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', color: c.text,
          fontSize: '14px', fontFamily: "'DM Sans', sans-serif",
        }}>
          <span style={{ fontWeight: 500 }}>{label}</span>
          <span style={{ fontWeight: 400 }}>{value}</span>
        </div>
        <div style={{ width: '100%', height: '8px', borderRadius: '4px', backgroundColor: c.barBg }}>
          <div style={{
            height: '8px', borderRadius: '4px', backgroundColor: c.barFill,
            width: `${Math.min(percent, 100)}%`, transition: 'width 0.5s',
          }} />
        </div>
      </div>
    </div>
  )
}
