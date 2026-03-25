import { useNavigate } from 'react-router-dom'
import { ClipboardList } from 'lucide-react'
import { Badge, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Pesquisas — Lista
 * Figma: 7379:745 (1440x1049)
 */

const pesquisas = [
  { titulo: 'Descrição de responsabilidades', criadaEm: '23/04/2024', publicadaEm: '', convidados: '', respostas: '', status: 'Em criação', statusColor: 'warning' },
  { titulo: 'Pesquisa de engajamento', criadaEm: '23/04/2024', publicadaEm: '23/04/2024', convidados: '10', respostas: '10', status: 'Em análise', statusColor: 'blue' },
  { titulo: 'Descrição de responsabilidades', criadaEm: '23/04/2024', publicadaEm: '23/04/2024', convidados: '10', respostas: '10', status: 'Ativa', statusColor: 'success' },
  { titulo: 'Pesquisa de engajamento', criadaEm: '23/04/2024', publicadaEm: '23/04/2024', convidados: '10', respostas: '10', status: 'Encerrada', statusColor: 'error' },
  { titulo: 'Pesquisa de engajamento', criadaEm: '23/04/2024', publicadaEm: '23/04/2024', convidados: '10', respostas: '10', status: 'Encerrada', statusColor: 'error' },
  { titulo: 'Descrição de responsabilidades', criadaEm: '23/04/2024', publicadaEm: '23/04/2024', convidados: '10', respostas: '10', status: 'Encerrada', statusColor: 'error' },
  { titulo: 'Pesquisa de engajamento', criadaEm: '23/04/2024', publicadaEm: '23/04/2024', convidados: '10', respostas: '10', status: 'Encerrada', statusColor: 'error' },
]

export default function Pesquisas() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <ClipboardList size={20} color="#344054" /> }, { label: 'Pesquisas', active: true }]} />}
        title="Pesquisas"
        subtitle="Assim que uma pesquisa for encerrada, você poderá baixar o relatório que será disponibilizado."
      />

      <DataTable
        title="Todas as pesquisas"
        showCheckbox={false}
        searchPlaceholder="Buscar..."
        columns={[
          { key: 'titulo', header: 'Título', render: (v) => <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(v)}</span> },
          { key: 'criadaEm', header: 'Criada em ↓' },
          { key: 'publicadaEm', header: 'Publicada em ↓' },
          { key: 'convidados', header: 'Convidados' },
          { key: 'respostas', header: 'Respostas' },
          {
            key: 'status', header: 'Status',
            render: (_, row) => <Badge variant={row.statusColor as 'warning' | 'blue' | 'success' | 'error'}>{String(row.status)}</Badge>,
          },
          {
            key: 'relatorio', header: 'Relatório',
            render: (_, row) => {
              const encerrada = row.status === 'Encerrada'
              return (
                <button
                  onClick={() => encerrada && navigate('/pesquisas/detalhe')}
                  style={{
                    padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif", cursor: encerrada ? 'pointer' : 'default',
                    backgroundColor: encerrada ? '#FFFFFF' : '#F9FAFB',
                    border: encerrada ? '1px solid #E4E3FF' : '1px solid #F2F4F7',
                    color: encerrada ? '#363F72' : '#98A2B3',
                    boxShadow: encerrada ? '0px 1px 2px rgba(16,24,40,0.05)' : 'none',
                  }}
                >
                  Baixar
                </button>
              )
            },
          },
        ]}
        data={pesquisas}
      />
    </div>
  )
}
