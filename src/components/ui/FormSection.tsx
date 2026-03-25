import { forwardRef, type ReactNode } from 'react'

/**
 * HRx FormSection — Seção de formulário com título + divider
 *
 * Figma specs:
 * - Card: bg white, border 1px #E4E3FF, radius 12px, shadow-xs, padding 24px
 * - Title: DM Sans Bold 20px / 30px, #363F72
 * - Subtitle: DM Sans Regular 14px, #667085
 * - Divider: 1px #E4E3FF, margin-top via gap
 * - Fields gap: 24px
 * - Actions: alinhados à direita
 */

interface FormSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  actions?: ReactNode
  id?: string
}

const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(
  function FormSection({ title, subtitle, children, actions, id }, ref) {
  return (
    <div id={id} ref={ref} style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #E4E3FF',
      borderRadius: '12px',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <p style={{
            fontSize: '20px', fontWeight: 700, lineHeight: '30px',
            color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: 0,
          }}>
            {title}
          </p>
          {subtitle && (
            <p style={{
              fontSize: '14px', fontWeight: 400, lineHeight: '1.5',
              color: '#667085', fontFamily: "'DM Sans', sans-serif", margin: 0,
            }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />
      </div>

      {/* Fields */}
      {children}

      {/* Actions */}
      {actions && (
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          {actions}
        </div>
      )}
    </div>
  )
})

export default FormSection

/** Row helper — flex row with gap 24px */
export function FormRow({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: '24px', width: '100%' }}>
      {children}
    </div>
  )
}
