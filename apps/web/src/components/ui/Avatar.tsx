/**
 * HRx Avatar
 *
 * Specs do Figma:
 * - Tamanho padrão: 40x40px
 * - border-radius: full (200px)
 * - bg fallback: #CFCBDC (avatar-bg)
 * - contrast inner border: 0.75px solid Gray-blue/700, opacity 8%
 * - Exibe iniciais quando sem imagem
 */

interface AvatarProps {
  name: string
  src?: string
  size?: number
  className?: string
}

const bgColors = ['#CFCBDC', '#D2D1FF', '#B9E6FE', '#DCFAE6', '#FEF0C7', '#FEE4E2']

export default function Avatar({ name, src, size = 40, className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const colorIndex = name.charCodeAt(0) % bgColors.length
  const bgColor = bgColors[colorIndex]

  return (
    <div
      className={`relative rounded-full shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-gray-blue-700 font-medium"
          style={{
            backgroundColor: bgColor,
            fontSize: size * 0.3,
          }}
        >
          {initials}
        </div>
      )}
      {/* Contrast inner border (como no Figma) */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ border: '0.75px solid rgba(54, 63, 114, 0.08)' }}
      />
    </div>
  )
}
