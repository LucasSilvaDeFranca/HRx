import type { ReactNode } from 'react'

/**
 * HRx PageHeader — Pixel-perfect do Figma
 *
 * gap entre breadcrumbs e content: 20px
 * título: DM Sans Bold 30px / 38px, #456DFF
 * subtítulo: DM Sans Regular 14px / 1.5, #667085
 * gap título→subtítulo: 4px
 * divider: 1px solid #E4E3FF
 */

interface PageHeaderProps {
  breadcrumbs?: ReactNode
  title: string
  subtitle?: string
  actions?: ReactNode
}

export default function PageHeader({ breadcrumbs, title, subtitle, actions }: PageHeaderProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {breadcrumbs}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h1 style={{
            fontSize: '30px', fontWeight: 700, lineHeight: '38px',
            color: '#456DFF', fontFamily: "'DM Sans', sans-serif", margin: 0,
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              fontSize: '14px', fontWeight: 400, lineHeight: '1.5',
              color: '#667085', fontFamily: "'DM Sans', sans-serif", margin: 0,
            }}>
              {subtitle}
            </p>
          )}
        </div>
        {actions && (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            {actions}
          </div>
        )}
      </div>
      <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />
    </div>
  )
}
