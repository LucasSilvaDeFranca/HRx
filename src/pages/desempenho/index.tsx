import { useNavigate } from 'react-router-dom'
import { TrendingUp, Upload, Settings, ExternalLink, Pencil } from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Desempenho — Página principal
 * Figma: 5659:22278 (1440x1332)
 *
 * 3 cards de navegação + tabela de avaliações
 */

const evaluations = Array(8).fill(null).map((_, i) => ({
  name: i === 1 ? 'Juliana Castilho' : 'João Aquino',
  avatar: '',
  type: i % 3 === 0 ? 'Metas' : 'Desempenho',
  period: ['Semestral', 'Trimestral', 'Bimestral'][i % 3],
  createdAt: '22/06/2023',
  updatedAt: '22/06/2023',
}))

function NavCard({ title, subtitle, buttonLabel, onClick }: {
  title: string; subtitle: string; buttonLabel: string; onClick: () => void
}) {
  return (
    <div style={{
      flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
      borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
      padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      gap: '24px', minHeight: '160px',
    }}>
      <div>
        <p style={{ fontSize: '18px', fontWeight: 500, lineHeight: '28px', color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
          {title}
        </p>
        <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5', color: '#667085', fontFamily: "'DM Sans', sans-serif", margin: '4px 0 0' }}>
          {subtitle}
        </p>
      </div>
      <Button variant="secondary" size="sm" icon={<Settings size={20} />} onClick={onClick}>
        {buttonLabel}
      </Button>
    </div>
  )
}

export default function Desempenho() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho', active: true },
        ]} />}
        title="Desempenho"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md" icon={<Upload size={20} />}>Exportar</Button>
          <Button variant="primary" size="md" icon={<Settings size={20} />} onClick={() => navigate('/desempenho/configuracoes')}>Configurações Gerais</Button>
        </>}
      />

      {/* 3 Nav Cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <NavCard
          title="Métricas de Desempenho"
          subtitle="[Texto explicativo da função citada acima nesse card]"
          buttonLabel="Configurar Métricas"
          onClick={() => navigate('/desempenho/metricas')}
        />
        <NavCard
          title="Avaliação de Metas"
          subtitle="[Texto explicativo da função citada acima nesse card]"
          buttonLabel="Ver Avaliações de Metas"
          onClick={() => navigate('/desempenho/avaliacao-metas')}
        />
        <NavCard
          title="Avaliação de Desempenho"
          subtitle="[Texto explicativo da função citada acima nesse card]"
          buttonLabel="Ver Avaliações de Desempenho"
          onClick={() => navigate('/desempenho/avaliacao-competencias')}
        />
      </div>

      {/* Table */}
      <DataTable
        title="Lista de Avaliações de Metas"
        searchPlaceholder="Pesquisar Colaborador"
        columns={[
          {
            key: 'name', header: 'Nome da Avaliação',
            render: (_, row) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar name={String(row.name)} size={40} />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>
                  {String(row.name)}
                </span>
              </div>
            ),
          },
          {
            key: 'type', header: 'Tipo de Avaliação ↓',
            render: (v) => <Badge variant={v === 'Metas' ? 'success' : 'blue'}>{String(v)}</Badge>,
          },
          { key: 'period', header: 'Período ↓' },
          { key: 'createdAt', header: 'Criada em ↓' },
          { key: 'updatedAt', header: 'Atualizado em ↓' },
          {
            key: 'actions', header: 'Ações',
            render: () => (
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '8px' }}>
                  <ExternalLink size={20} color="#667085" />
                </button>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '8px' }}>
                  <Pencil size={20} color="#667085" />
                </button>
              </div>
            ),
          },
        ]}
        data={evaluations}
      />
    </div>
  )
}
