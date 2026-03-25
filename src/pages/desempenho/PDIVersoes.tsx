import { Home, Upload, Trash2 } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Histórico de Versões (9box/PDI)
 * Figma: 5683:138781 (1440x1132)
 * Layout: Feed de atividades à esquerda + 9box snapshot à direita
 */

const activities = Array(9).fill({ name: 'João Aquino', date: '22 de Janeiro - 10:40 am', action: 'Foi movido de quadrante para', target: 'Risco' })

const boxColors = [
  ['#F04438', '#F79009', '#F79009'],
  ['#F79009', '#17B26A', '#17B26A'],
  ['#17B26A', '#17B26A', '#456DFF'],
]
const boxLabels = [
  ['Risco', 'Precisa Melhorar', 'Na Média'],
  ['Precisa Melhorar', 'Forte Desempenho', 'Alto Desempenho'],
  ['Forte Desempenho', 'Forte Desempenho', 'Alto Desempenho'],
]

export default function PDIVersoes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <Home size={20} color="#344054" /> }, { label: 'Desempenho' }, { label: '9box' }, { label: 'Versões', active: true }]} />}
        title="Histórico de Versões"
        subtitle="[Texto de Acompanhamento]"
      />
      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Left: Activity feed */}
        <div style={{ flex: 1 }}>
          {activities.map((act, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid #F2F4F7' }}>
              <Avatar name={act.name} size={40} />
              <div>
                <p style={{ fontSize: '14px', margin: 0 }}><span style={{ fontWeight: 500, color: '#363F72' }}>{act.name}</span> <span style={{ color: '#667085' }}>{act.date}</span></p>
                <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>{act.action} <span style={{ color: '#456DFF', fontWeight: 500 }}>{act.target}</span></p>
              </div>
            </div>
          ))}
        </div>
        {/* Right: 9box snapshot */}
        <div style={{ width: '500px', flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: 0 }}>Versão de Julho Time Financeiro</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>Versão de 22 de Janeiro - 10:40am</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="secondary" size="sm" icon={<Upload size={16} />}>Exportar</Button>
              <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
            </div>
          </div>
          {/* 9box grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[2, 1, 0].map((row) => (
              <div key={row} style={{ display: 'flex', gap: '4px', height: '100px' }}>
                {[0, 1, 2].map((col) => {
                  const colors: Record<string, string> = { '#F04438': '#FEE4E2', '#F79009': '#FEF0C7', '#17B26A': '#DCFAE6', '#456DFF': '#E4E3FF' }
                  const bg = boxColors[row][col]
                  return (
                    <div key={col} style={{
                      flex: 1, borderRadius: '8px', backgroundColor: colors[bg] || '#F2F4F7',
                      border: `2px solid ${bg}`, display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', padding: '8px', position: 'relative',
                    }}>
                      <span style={{ fontSize: '10px', fontWeight: 500, color: bg, position: 'absolute', top: '6px', left: '8px' }}>{boxLabels[row][col]}</span>
                      <div style={{ display: 'flex', gap: '4px', marginTop: '12px' }}>
                        <Avatar name="A" size={24} /><Avatar name="B" size={24} />
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: '#667085', textAlign: 'center', marginTop: '8px' }}>Desenvolvimento</p>
        </div>
      </div>
    </div>
  )
}
