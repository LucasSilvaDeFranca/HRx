import { useNavigate } from 'react-router-dom'
import { Network, Pencil, Trash2, Settings2 } from 'lucide-react'
import { Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Hierarquia — Página principal
 * Figma: 5686:300556 (1440x1498)
 * 5 NavCards (Níveis e Salários, Faixas, Steps, Cargos, Tabela Salarial) + tabela de cargos
 */

const cargos = [
  { nome: 'Auxiliar de Limpeza', nivel: '01 - Direção', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
  { nome: 'CEO', nivel: '01 - Direção', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
  { nome: 'Auxiliar', nivel: '03 - Coordenação', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
  { nome: 'Analista Junior', nivel: '04 - Analista', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
  { nome: 'Operador de Prensa', nivel: '02 - Gerência', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
  { nome: 'CEO', nivel: '01 - Direção', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
  { nome: 'CEO', nivel: '01 - Direção', resumo: 'Responsável por co...', addedAt: '22/06/2023', updatedAt: '22/06/2023' },
]

function NavCard({ title, subtitle, buttonLabel, onClick }: { title: string; subtitle: string; buttonLabel: string; onClick: () => void }) {
  return (
    <div style={{
      flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
      borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
      padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      gap: '24px', minHeight: '140px',
    }}>
      <div>
        <p style={{ fontSize: '18px', fontWeight: 500, lineHeight: '28px', color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{title}</p>
        <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5', color: '#667085', fontFamily: "'DM Sans', sans-serif", margin: '4px 0 0' }}>{subtitle}</p>
      </div>
      <Button variant="secondary" size="sm" icon={<Pencil size={20} />} onClick={onClick}>{buttonLabel}</Button>
    </div>
  )
}

export default function Hierarquia() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <Network size={20} color="#344054" /> }, { label: 'Hierarquia', active: true }]} />}
        title="Hierarquia"
        subtitle="Gerencie todos os colaboradores"
      />

      {/* Row 1: 3 cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <NavCard title="Níveis e Salários" subtitle="[Texto explicativo da função citada acima nesse card]" buttonLabel="Cadastrar Níveis e Salários" onClick={() => navigate('/hierarquia/niveis')} />
        <NavCard title="Faixas" subtitle="[Texto explicativo da função citada acima nesse card]" buttonLabel="Cadastrar Faixas" onClick={() => navigate('/hierarquia/tabela-salarial')} />
        <NavCard title="Steps" subtitle="[Texto explicativo da função citada acima nesse card]" buttonLabel="Cadastrar Steps" onClick={() => navigate('/hierarquia/steps')} />
      </div>

      {/* Row 2: 2 cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <NavCard title="Cargos" subtitle="[Texto explicativo da função citada acima nesse card]" buttonLabel="Cadastrar Cargos" onClick={() => navigate('/hierarquia/cargos')} />
        <NavCard title="Tabela Salarial" subtitle="[Texto explicativo da função citada acima nesse card]" buttonLabel="Configurar Tabela" onClick={() => navigate('/hierarquia/tabela-salarial')} />
      </div>

      {/* Tabela de Cargos */}
      <DataTable
        title="Lista de Cargos"
        searchPlaceholder="Pesquisar Colaborador"
        actions={<Button variant="secondary" size="sm" icon={<Settings2 size={20} />}>Customizar</Button>}
        columns={[
          { key: 'nome', header: 'Nome do Cargo', render: (v) => <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(v)}</span> },
          { key: 'nivel', header: 'Nível ↓', render: (v) => <Badge variant="blue">{String(v)}</Badge> },
          { key: 'resumo', header: 'Resumo da Função ↓' },
          { key: 'addedAt', header: 'Adicionado em ↓' },
          { key: 'updatedAt', header: 'Atualizado em ↓' },
          {
            key: 'actions', header: 'Ações',
            render: () => (
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Trash2 size={20} color="#667085" /></button>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Pencil size={20} color="#667085" /></button>
              </div>
            ),
          },
        ]}
        data={cargos}
      />
    </div>
  )
}
