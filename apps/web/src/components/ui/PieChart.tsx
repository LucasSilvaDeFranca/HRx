/**
 * HRx PieChart (Donut)
 *
 * Specs do Figma:
 * - size: 280x280
 * - Donut style com furo central branco (~55% do raio)
 * - Legendas abaixo com dots coloridos 8x14px
 */

interface PieSegment {
  label: string
  percent: number
  color: string
}

interface PieChartProps {
  segments: PieSegment[]
  size?: number
}

export default function PieChart({ segments, size = 280 }: PieChartProps) {
  const r = size / 2 - 20
  const cx = size / 2
  const cy = size / 2
  const innerR = r * 0.55
  let currentAngle = -90

  return (
    <div className="flex flex-col items-center gap-8">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((seg, i) => {
          const angle = (seg.percent / 100) * 360
          const startAngle = currentAngle
          const endAngle = currentAngle + angle
          currentAngle = endAngle

          const startRad = (startAngle * Math.PI) / 180
          const endRad = (endAngle * Math.PI) / 180

          const x1 = cx + r * Math.cos(startRad)
          const y1 = cy + r * Math.sin(startRad)
          const x2 = cx + r * Math.cos(endRad)
          const y2 = cy + r * Math.sin(endRad)

          const largeArc = angle > 180 ? 1 : 0

          return (
            <path
              key={i}
              d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={seg.color}
            />
          )
        })}
        <circle cx={cx} cy={cy} r={innerR} fill="white" />
      </svg>

      {/* Legenda */}
      <div className="flex gap-6 px-16 justify-center flex-wrap">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className="w-2 h-3.5 rounded-full mt-0.5 shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-sm text-gray-600">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
