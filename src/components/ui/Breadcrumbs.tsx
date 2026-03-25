import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

/**
 * HRx Breadcrumbs — Pixel-perfect do Figma
 *
 * Container: bg white, rounded 8px, padding 4px
 * Items gap: 8px
 * Icon item: padding 4px
 * Text item: px 8px py 4px, bg #F9FAFB (active), rounded 6px
 * Chevron: 16x16, #98A2B3
 */

interface BreadcrumbItem {
  label?: string
  icon?: ReactNode
  active?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      padding: '4px',
    }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {i > 0 && <ChevronRight size={16} color="#98A2B3" />}
          {item.icon ? (
            <div style={{ padding: '4px', borderRadius: '6px' }}>{item.icon}</div>
          ) : (
            <span style={{
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: item.active ? '#F9FAFB' : 'transparent',
              color: item.active ? '#344054' : '#667085',
            }}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
