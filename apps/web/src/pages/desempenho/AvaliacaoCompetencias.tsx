import { TrendingUp, PlusSquare, ExternalLink, Pencil } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Avaliação de Competências
 * Figma: 5681:22616 (1440x1154)
 */

const data = Array(8).fill(null).map((_, i) => ({
  name: i === 1 ? 'Juliana Castilho' : 'João Aquino',
  objetivo: i % 2 === 0 ? 'Crescimento Profis...' : 'Aprender Idiomas',
  period: ['Semestral', 'Trimestral', 'Bimestral'][i % 3],
  createdAt: '22/06/2023',
  updatedAt: '22/06/2023',
}))

export default function AvaliacaoCompetencias() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'Avaliações de Competências', active: true },
        ]} />}
        title="Avaliação de Competências"
        subtitle="[Texto de Acompanhamento]"
        actions={
          <Button variant="primary" size="md" icon={<PlusSquare size={20} />}>Criar nova avaliação</Button>
        }
      />

      <DataTable
        title="Lista de Avaliações de Competências"
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
