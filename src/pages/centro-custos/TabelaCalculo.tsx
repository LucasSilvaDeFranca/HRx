import { useNavigate } from 'react-router-dom'
import { PieChart } from 'lucide-react'
import { Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Tabela de Cálculo
 * Figma: 5686:309179 (1440x1058)
 */

const data = [
  { cargo: 'Auxiliar de...', area: '01 - Direção', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: 'R$ 2.000' },
  { cargo: 'CEO', area: '01 - Direção', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: '' },
  { cargo: 'Auxiliar', area: '03 - Coordenação', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: 'R$ 2.000' },
  { cargo: 'Analista Ju...', area: '04 - Analista', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: '' },
  { cargo: 'Operador d...', area: '02 - Gerência', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: '' },
  { cargo: 'CEO', area: '01 - Direção', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: 'R$ 2.000' },
  { cargo: 'CEO', area: '01 - Direção', colaborador: 'João Aquino', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: '' },
]

export default function TabelaCalculo() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <PieChart size={20} color="#344054" /> },
          { label: 'Centro de Custos' },
          { label: 'Tabela de Cálculo', active: true },
        ]} />}
        title="Tabela de Cálculo"
        subtitle="Gerencie todos os colaboradores"
        actions={<Button variant="secondary" size="md" onClick={() => navigate('/centro-custos')}>Voltar</Button>}
      />

      <DataTable
        title="Lista de Cargos"
        showCheckbox={false}
        columns={[
          { key: 'cargo', header: 'Cargo' },
          { key: 'area', header: 'Área ↓', render: (v) => v ? <Badge variant="blue">{String(v)}</Badge> : null },
          { key: 'colaborador', header: 'Colaborador ↓' },
          { key: 'salario', header: 'Salário ↓' },
          { key: 'beneficios', header: 'Benefícios ↓' },
          { key: 'encargos', header: 'Encargos ↓' },
          { key: 'totalCargo', header: 'Total Cargo ↓' },
          { key: 'totalArea', header: 'Total de Área ↓', render: (v) => v ? <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(v)}</span> : null },
        ]}
        data={[...data, { cargo: 'Total', area: '', colaborador: '', salario: 'R$ 2.000', beneficios: 'R$ 2.000', encargos: 'R$ 2.000', totalCargo: 'R$ 2.000', totalArea: 'R$ 2.000' }]}
      />
    </div>
  )
}
