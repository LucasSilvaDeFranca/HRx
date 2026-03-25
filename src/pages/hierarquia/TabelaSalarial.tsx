import { useState } from 'react'
import { Network, Pencil } from 'lucide-react'
import { Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Tabela Salarial — Faixa Salarial + Steps
 * Figma: 5686:312349 (Faixa) + 5686:312840 (Steps)
 */

const faixaData = [
  { grade: '01', cargo: 'Auxiliar de Limpeza', inicio: 'R$ 2.000', final: 'R$ 2.000', amplitude: 'R$ 2.000' },
  { grade: '', cargo: 'Auxiliar de Limpeza', inicio: '', final: '', amplitude: '' },
  { grade: '02', cargo: 'Auxiliar de Limpeza', inicio: 'R$ 2.000', final: 'R$ 2.000', amplitude: 'R$ 2.000' },
  { grade: '', cargo: 'Auxiliar de Limpeza', inicio: '', final: '', amplitude: '' },
  { grade: '', cargo: 'Auxiliar Serviços Gerais', inicio: '', final: '', amplitude: '' },
  { grade: '03', cargo: 'Auxiliar Serviços Gerais', inicio: 'R$ 2.000', final: 'R$ 2.000', amplitude: 'R$ 2.000' },
  { grade: '', cargo: 'Auxiliar Serviços Gerais', inicio: '', final: '', amplitude: '' },
]

const stepsData = [
  { grade: '01 - Gerais', cargo: 'Auxiliar de Lim...', s1: 'R$ 2.000', s2: 'R$ 2.000', s3: 'R$ 2.000', s4: 'R$ 2.000', s5: 'R$ 2.000', regra: 'R$ 2.000', amplitude: 'R$ 2.000' },
  { grade: '', cargo: 'Auxiliar de Lim...', s1: '', s2: '', s3: '', s4: '', s5: '', regra: '', amplitude: '' },
  { grade: '02 - Auxiliares', cargo: 'Auxiliar de Lim...', s1: 'R$ 2.000', s2: 'R$ 2.000', s3: 'R$ 2.000', s4: 'R$ 2.000', s5: 'R$ 2.000', regra: 'R$ 2.000', amplitude: 'R$ 2.000' },
  { grade: '', cargo: 'Auxiliar de Lim...', s1: '', s2: '', s3: '', s4: '', s5: '', regra: '', amplitude: '' },
  { grade: '', cargo: 'Auxiliar Serviço...', s1: '', s2: '', s3: '', s4: '', s5: '', regra: '', amplitude: '' },
  { grade: '03 - Assistentes', cargo: 'Auxiliar Serviço...', s1: 'R$ 2.000', s2: 'R$ 2.000', s3: 'R$ 2.000', s4: 'R$ 2.000', s5: 'R$ 2.000', regra: 'R$ 2.000', amplitude: 'R$ 2.000' },
]

export default function TabelaSalarial() {
  const [tab, setTab] = useState<'faixa' | 'steps'>('faixa')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Network size={20} color="#344054" /> },
          { label: 'Hierarquia' },
          { label: tab === 'faixa' ? 'Tabela Salarial' : 'Steps', active: true },
        ]} />}
        title="Tabela Salarial"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button variant="secondary" size="md" icon={<Pencil size={20} />}>Editar Cargos</Button>
          <Button variant="primary" size="md" icon={<Pencil size={20} />}>Editar Niveis</Button>
        </>}
      />

      {/* Tab Switch */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant={tab === 'faixa' ? 'primary' : 'secondary'} size="sm" onClick={() => setTab('faixa')}>Faixa Salarial</Button>
        <Button variant={tab === 'steps' ? 'primary' : 'secondary'} size="sm" onClick={() => setTab('steps')}>Steps</Button>
      </div>

      {tab === 'faixa' ? (
        <DataTable
          title="Lista de Cargos"
          showCheckbox={false}
          columns={[
            { key: 'grade', header: 'Grade', render: (v) => v ? <Badge variant="blue">{String(v)}</Badge> : null },
            { key: 'cargo', header: 'Nome do Cargo ↓' },
            { key: 'inicio', header: 'Inicio de Faixa' },
            { key: 'final', header: 'Final da Faixa' },
            { key: 'amplitude', header: 'Amplitude' },
          ]}
          data={faixaData}
        />
      ) : (
        <DataTable
          title="Lista de Cargos"
          showCheckbox={false}
          columns={[
            { key: 'grade', header: 'Grade', render: (v) => v ? <Badge variant="blue">{String(v)}</Badge> : null },
            { key: 'cargo', header: 'Nome do Cargo ↓' },
            { key: 's1', header: 'Step 1' },
            { key: 's2', header: 'Step 2' },
            { key: 's3', header: 'Step 3' },
            { key: 's4', header: 'Step 4' },
            { key: 's5', header: 'Step 5' },
            { key: 'regra', header: 'Regra' },
            { key: 'amplitude', header: 'Amplitude' },
          ]}
          data={stepsData}
        />
      )}
    </div>
  )
}
