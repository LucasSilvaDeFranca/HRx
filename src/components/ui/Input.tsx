import type { InputHTMLAttributes } from 'react'

/**
 * HRx Input — Pixel-perfect do Figma
 *
 * bg: #FFFFFF
 * border: 1px solid #E4E3FF (Primary/25)
 * border-radius: 8px
 * padding: 10px 14px
 * shadow: 0px 1px 2px rgba(16,24,40,0.05)
 * font: DM Sans Regular 16px, color #282A2F
 * placeholder: #98A2B3
 * height resultante: 44px
 * label: DM Sans Medium 14px, #363F72, gap 6px
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export default function Input({
  label,
  error,
  hint,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-[14px] font-medium leading-[20px]"
          style={{ color: '#363F72' }}
        >
          {label}
        </label>
      )}
      <div
        className={`
          flex items-center gap-[8px] w-full overflow-hidden
          ${error ? '' : ''}
          ${className}
        `.trim()}
        style={{
          backgroundColor: '#FFFFFF',
          border: error ? '1px solid #D92D20' : '1px solid #E4E3FF',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          padding: '10px 14px',
        }}
      >
        <input
          id={inputId}
          className="
            w-full bg-transparent border-none outline-none
            text-[16px] leading-[24px] font-normal
            placeholder:text-[#98A2B3]
          "
          style={{ color: '#282A2F', fontFamily: "'DM Sans', sans-serif" }}
          {...props}
        />
      </div>
      {error && (
        <p className="text-[14px]" style={{ color: '#D92D20' }}>{error}</p>
      )}
      {hint && !error && (
        <p className="text-[14px]" style={{ color: '#667085' }}>{hint}</p>
      )}
    </div>
  )
}
