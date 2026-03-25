import { Home, Settings, Save, Upload, MousePointer2 } from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * 9Box Matrix
 * Figma: 5683:64615 (1440x2455)
 *
 * Matriz 3x3 com avatares posicionados + tabela + atividades
 */

const boxColors = [
  ['#F04438', '#F79009', '#F79009'],  // bottom row (Risco, Precisa Melhorar, -)
  ['#F79009', '#17B26A', '#17B26A'],  // middle row (Precisa Melhorar, Forte Desempenho, -)
  ['#17B26A', '#17B26A', '#456DFF'],  // top row (Forte Desempenho, Forte Desempenho, Alto Desempenho)
]

const boxLabels = [
  ['Risco', 'Precisa Melhorar', ''],
  ['Precisa Melhorar', 'Forte Desempenho', ''],
  ['Forte Desempenho', 'Forte Desempenho', 'Alto Desempenho'],
]

const tableData = [
  { name: 'João Aquino', classification: 'Alto Desempenho', classColor: 'blue', x: 'X=1,50', y: 'Y=1,00', area: 'Contas', updatedAt: '22/06/2023' },
  { name: 'Juliana Castilho', classification: 'Forte Desempenho', classColor: 'success', x: 'X=1,50', y: 'Y=1,00', area: 'Contas', updatedAt: '22/06/2023' },
  { name: 'João Aquino', classification: 'Precisa Melhorar', classColor: 'warning', x: 'X=1,50', y: 'Y=1,00', area: 'Desenvolvimento', updatedAt: '22/06/2023' },
  { name: 'João Aquino', classification: 'Alto Desempenho', classColor: 'blue', x: 'X=1,50', y: 'Y=1,00', area: 'Desenvolvimento', updatedAt: '22/06/2023' },
  { name: 'João Aquino', classification: 'Forte Desempenho', classColor: 'success', x: 'X=1,50', y: 'Y=1,00', area: 'Contas', updatedAt: '22/06/2023' },
  { name: 'João Aquino', classification: 'Risco', classColor: 'error', x: 'X=1,50', y: 'Y=1,00', area: 'Contas', updatedAt: '22/06/2023' },
]

const activities = [
  { name: 'João Aquino', date: '22 de Janeiro - 10:40 am', action: 'Foi movido de quadrante para', target: 'Risco' },
  { name: 'João Aquino', date: '22 de Janeiro - 10:40 am', action: 'Foi movido de quadrante para', target: 'Risco' },
  { name: 'João Aquino', date: '22 de Janeiro - 10:40 am', action: 'Foi movido de quadrante para', target: 'Risco' },
  { name: 'João Aquino', date: '22 de Janeiro - 10:40 am', action: 'Salvou uma', target: 'versão' },
  { name: 'João Aquino', date: '22 de Janeiro - 10:40 am', action: 'Salvou uma', target: 'versão' },
]

export default function NineBox() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Home size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: '9box', active: true },
        ]} />}
        title="9box"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md" icon={<Settings size={20} />}>Versões</Button>
          <Button variant="primary" size="md" icon={<Settings size={20} />}>Configurações</Button>
        </>}
      />

      {/* 9Box Card */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>9box</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>Manage your team members here.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="secondary" size="sm" icon={<MousePointer2 size={16} />}>Selecionar Áreas</Button>
            <Button variant="secondary" size="sm" icon={<Save size={16} />}>Salvar Versão</Button>
            <Button variant="secondary" size="sm" icon={<Upload size={16} />}>Exportar</Button>
          </div>
        </div>

        {/* Matrix Grid */}
        <div style={{ display: 'flex', gap: '4px' }}>
          {/* Y axis label */}
          <div style={{
            writingMode: 'vertical-lr', transform: 'rotate(180deg)',
            fontSize: '12px', fontWeight: 500, color: '#667085',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '8px',
          }}>
            Desempenho
          </div>
          {/* Grid */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[2, 1, 0].map((row) => (
              <div key={row} style={{ display: 'flex', gap: '4px', height: '120px' }}>
                {[0, 1, 2].map((col) => {
                  const colors: Record<string, string> = {
                    '#F04438': '#FEE4E2', '#F79009': '#FEF0C7',
                    '#17B26A': '#DCFAE6', '#456DFF': '#E4E3FF',
                  }
                  const bgColor = boxColors[row][col]
                  return (
                    <div key={col} style={{
                      flex: 1, borderRadius: '8px',
                      backgroundColor: colors[bgColor] || '#F2F4F7',
                      border: `2px solid ${bgColor}`,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      gap: '8px', padding: '12px', position: 'relative',
                    }}>
                      <span style={{
                        fontSize: '11px', fontWeight: 500, color: bgColor,
                        position: 'absolute', top: '8px', left: '12px',
                      }}>
                        {boxLabels[row][col]}
                      </span>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
                        {(row === 2 && col === 2) && <Avatar name="João Aquino" size={32} />}
                        {(row === 2 && col === 1) && <><Avatar name="Maria" size={32} /><Avatar name="Pedro" size={32} /></>}
                        {(row === 1 && col === 1) && <Avatar name="Ana" size={32} />}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Section Label */}
      <p style={{ fontSize: '14px', fontWeight: 500, color: '#667085', textAlign: 'center' }}>
        Desenvolvimento
      </p>

      {/* Table */}
      <DataTable
        title="Colaboradores"
        showSearch={false}
        columns={[
          {
            key: 'name', header: 'Colaborador',
            render: (_, row) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar name={String(row.name)} size={40} />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(row.name)}</span>
              </div>
            ),
          },
          {
            key: 'classification', header: 'Colaboração na Matriz ↓',
            render: (_, row) => <Badge variant={row.classColor as 'blue' | 'success' | 'warning' | 'error'}>{String(row.classification)}</Badge>,
          },
          {
            key: 'position', header: 'Posicionamento ↓',
            render: (_, row) => (
              <div style={{ display: 'flex', gap: '8px' }}>
                <Badge variant="blue">{String(row.x)}</Badge>
                <Badge variant="blue">{String(row.y)}</Badge>
              </div>
            ),
          },
          { key: 'area', header: 'Área ↓' },
          { key: 'updatedAt', header: 'Atualizado em ↓' },
        ]}
        data={tableData}
      />

      {/* Activity Feed */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
      }}>
        <div>
          <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
            Todas as atividades
          </p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>[Texto de Acompanhamento]</p>
        </div>
        {activities.map((act, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px 0' }}>
            <Avatar name={act.name} size={40} />
            <div>
              <p style={{ fontSize: '14px', margin: 0 }}>
                <span style={{ fontWeight: 500, color: '#363F72' }}>{act.name}</span>
                <span style={{ color: '#667085' }}> {act.date}</span>
              </p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>
                {act.action} <span style={{ color: '#456DFF', fontWeight: 500 }}>{act.target}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
