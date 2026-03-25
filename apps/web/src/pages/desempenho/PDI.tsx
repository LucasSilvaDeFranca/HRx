import { Home, Settings, PlusSquare, ExternalLink, Pencil } from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * PDI — Plano de Desenvolvimento Individual
 * Figma: 5683:41121 (1440x1039)
 */

const data = Array(8).fill(null).map((_, i) => ({
  name: i === 1 ? 'Juliana Castilho' : 'João Aquino',
  objetivo: i % 2 === 0 ? 'Crescimento...' : 'Aprender Idio...',
  period: ['Semestral', 'Trimestral', 'Bimestral'][i % 3],
  status: i % 2 === 0 ? 'Aprovação' : 'Finalização',
  statusColor: i % 2 === 0 ? 'success' as const : 'warning' as const,
  createdAt: '22/06/2023',
  updatedAt: '22/06/2023',
}))

export default function PDI() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Home size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'PDI', active: true },
        ]} />}
        title="PDI"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md" icon={<Settings size={20} />}>Configurações</Button>
          <Button variant="primary" size="md" icon={<PlusSquare size={20} />}>Criar novo PDI</Button>
        </>}
      />

      <DataTable
        title="PDI"
        columns={[
          {
            key: 'name', header: 'Nome da Avaliação',
            render: (_, row) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar name={String(row.name)} size={40} />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(row.name)}</span>
              </div>
            ),
          },
          { key: 'objetivo', header: 'Objetivo ↓' },
          { key: 'period', header: 'Objetivo ↓' },
          {
            key: 'status', header: 'Status ↓',
            render: (_, row) => <Badge variant={row.statusColor as 'success' | 'warning'}>{String(row.status)}</Badge>,
          },
          { key: 'createdAt', header: 'Criado em ↓' },
          { key: 'updatedAt', header: 'Atualizado em ↓' },
          {
            key: 'actions', header: 'Ações',
            render: () => (
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <ExternalLink size={20} color="#667085" />
                </button>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <Pencil size={20} color="#667085" />
                </button>
              </div>
            ),
          },
        ]}
        data={data}
      />
    </div>
  )
}
