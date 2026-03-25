import type { InputHTMLAttributes } from 'react'

/**
 * HRx Checkbox — Pixel-perfect do Figma
 *
 * size: 16x16
 * bg: #FFFFFF
 * border: 1px solid #E4E3FF
 * border-radius: 4px
 * label: DM Sans Bold 14px, #363F72
 * gap: 8px
 */

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export default function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <label htmlFor={checkboxId} className={`flex items-start gap-[8px] cursor-pointer ${className}`}>
      <div className="flex items-center justify-center pt-[2px]">
        <div
          className="flex items-center justify-center"
          style={{
            width: '16px',
            height: '16px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E4E3FF',
            borderRadius: '4px',
          }}
        >
          <input
            type="checkbox"
            id={checkboxId}
            className="sr-only"
            {...props}
          />
        </div>
      </div>
      {label && (
        <span
          className="text-[14px] font-bold leading-[20px]"
          style={{ color: '#363F72' }}
        >
          {label}
        </span>
      )}
    </label>
  )
}
