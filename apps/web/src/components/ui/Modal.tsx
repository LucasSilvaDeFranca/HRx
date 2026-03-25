import type { ReactNode } from 'react'

/**
 * HRx Modal — Pixel-perfect do Figma
 *
 * Overlay: bg #101828 opacity 70%, backdrop-blur 8px
 * Modal: bg white, rounded 12px, width 400px
 * Shadow: 0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)
 * Header: pt 24px px 24px, icon 48x48 gradient, gap 16px
 * Title: DM Sans Medium 18px / 28px, #363F72
 * Subtitle: DM Sans Regular 14px, #667085
 * Actions: pt 32px, px 24px pb 24px, gap 12px
 */

interface ModalProps {
  open: boolean
  onClose: () => void
  icon?: ReactNode
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Modal({ open, onClose, icon, title, subtitle, children }: ModalProps) {
  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(16, 24, 40, 0.7)',
        backdropFilter: 'blur(8px)',
      }} />

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          width: '400px',
          boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '16px', paddingTop: '24px', paddingLeft: '24px', paddingRight: '24px',
        }}>
          {icon && (
            <div style={{
              width: '48px', height: '48px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {icon}
            </div>
          )}
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p style={{
              fontSize: '18px', fontWeight: 500, lineHeight: '28px',
              color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: 0,
            }}>
              {title}
            </p>
            {subtitle && (
              <p style={{
                fontSize: '14px', fontWeight: 400, lineHeight: '1.5',
                color: '#667085', fontFamily: "'DM Sans', sans-serif",
                margin: '4px 0 0',
              }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Divider + Actions */}
        <div style={{ paddingTop: '32px' }}>
          <div style={{ height: '1px', backgroundColor: '#EAECF0' }} />
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '12px',
            padding: '24px',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
