import { useNavigate } from 'react-router-dom'
import { PieChart, ArrowLeftRight, Calculator, PlusSquare } from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Centro de Custos — Página principal
 * Figma: 5686:306727 (1440x1302)
 * 2 MetricCards (flex-1) + 2 NavCards + tabela de movimentações
 */

const movimentacoes = [
  { nome: 'João Aquino', tipo: 'Reajuste Salarial', responsavel: 'Roberto Marinho', status: 'Pendente', statusColor: 'warning', updatedAt: '22/06/2023' },
  { nome: 'Juliana Castilho', tipo: 'Movimentação', responsavel: 'Carla Silva', status: 'Aprovado', statusColor: 'success', updatedAt: '22/06/2023' },
  { nome: 'João Aquino', tipo: 'Desligamento', responsavel: 'Roberto Marinho', status: 'Rejeitado', statusColor: 'error', updatedAt: '22/06/2023' },
  { nome: 'João Aquino', tipo: 'Reajuste Salarial', responsavel: 'Carla Silva', status: 'Pendente', statusColor: 'warning', updatedAt: '22/06/2023' },
  { nome: 'João Aquino', tipo: 'Movimentação', responsavel: 'Roberto Marinho', status: 'Aprovado', statusColor: 'success', updatedAt: '22/06/2023' },
  { nome: 'João Aquino', tipo: 'Desligamento', responsavel: 'Carla Silva', status: 'Rejeitado', statusColor: 'error', updatedAt: '22/06/2023' },
  { nome: 'João Aquino', tipo: 'Movimentação', responsavel: 'Roberto Marinho', status: 'Aprovado', statusColor: 'success', updatedAt: '22/06/2023' },
]

export default function CentroCustos() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <PieChart size={20} color="#344054" /> }, { label: 'Centro de Custos', active: true }]} />}
        title="Centro de Custos"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button variant="secondary" size="md" icon={<ArrowLeftRight size={20} />}>Movimentação de Pessoal</Button>
          <Button variant="primary" size="md" icon={<Calculator size={20} />} onClick={() => navigate('/centro-custos/tabela-calculo')}>Tabela de Cálculos</Button>
        </>}
      />

      {/* Metric Cards + Nav Cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Movimentações */}
        <div style={{
          flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
          borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <ArrowLeftRight size={24} color="white" />
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              <span style={{ fontSize: '14px', color: '#282A2F', display: 'block' }}>Movimentações</span>
              <span style={{ fontSize: '12px', color: '#667085', fontWeight: 400 }}>nos últimos 30 dias</span>
              <span style={{ fontSize: '30px', lineHeight: '38px', color: '#363F72', display: 'block', marginTop: '4px' }}>125</span>
            </div>
          </div>
          <Button variant="secondary" size="sm" icon={<PlusSquare size={20} />} onClick={() => navigate('/centro-custos/criar-movimentacao')}>
            Criar nova Movimentação
          </Button>
        </div>

        {/* Orçamento Total */}
        <div style={{
          flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
          borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Calculator size={24} color="white" />
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              <span style={{ fontSize: '14px', color: '#282A2F', display: 'block' }}>Orçamento Total</span>
              <span style={{ fontSize: '12px', color: '#667085', fontWeight: 400 }}>nos últimos 30 dias</span>
              <span style={{ fontSize: '30px', lineHeight: '38px', color: '#363F72', display: 'block', marginTop: '4px' }}>R$ 101.250,00</span>
            </div>
          </div>
          <Button variant="secondary" size="sm" icon={<Calculator size={20} />} onClick={() => navigate('/centro-custos/tabela-calculo')}>
            Ver Tabela de Cálculos
          </Button>
        </div>
      </div>

      {/* Tabela */}
      <DataTable
        title="Lista de Movimentações"
        showCheckbox={false}
        columns={[
          {
            key: 'nome', header: 'Nome',
            render: (_, row) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar name={String(row.nome)} size={40} />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(row.nome)}</span>
              </div>
            ),
          },
          { key: 'tipo', header: 'Tipo de Movimentação ↓' },
          {
            key: 'responsavel', header: 'Responsável ↓',
            render: (_, row) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar name={String(row.responsavel)} size={40} />
                <span style={{ fontSize: '14px', color: '#667085' }}>{String(row.responsavel)}</span>
              </div>
            ),
          },
          {
            key: 'status', header: 'Status ↓',
            render: (_, row) => <Badge variant={row.statusColor as 'warning' | 'success' | 'error'}>{String(row.status)}</Badge>,
          },
          { key: 'updatedAt', header: 'Atualizado em ↓' },
        ]}
        data={movimentacoes}
      />
    </div>
  )
}
