import { ClipboardList, Download, ChevronDown } from 'lucide-react'
import { Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Respostas (tab Ativa)
 * Figma: 7255:1121 (1440x960)
 */

const respostas = Array(7).fill({ data: '23/04/2024', codigo: '000 000 000-00', email: 'exemplo@exemplo.com.br', taxa: '10/10' })

export default function PesquisaRespostas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <ClipboardList size={20} color="#344054" /> }, { label: 'Pesquisas' }, { label: 'Descrição de responsabilidades', active: true }]} />}
        title=""
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '-16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ClipboardList size={24} color="white" /></div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '30px', fontWeight: 700, lineHeight: '38px', color: '#456DFF', margin: 0 }}>Descrição de responsabilidades</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>Criada em 23/04/2024</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '44px', height: '24px', borderRadius: '12px', backgroundColor: '#456DFF', position: 'relative' }}><div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFF', position: 'absolute', top: '2px', left: '22px' }} /></div>
            <span style={{ fontSize: '14px', color: '#363F72' }}>Desativar automaticamente</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#F6FEF9', border: '1px solid #DCFAE6', borderRadius: '8px' }}><span style={{ fontSize: '14px', fontWeight: 500, color: '#067647' }}>Ativa</span><ChevronDown size={16} color="#067647" /></div>
        </div>
      </div>
      <p style={{ fontSize: '12px', color: '#667085', textAlign: 'right', marginTop: '-24px' }}>Publicada em 23/04/2024</p>

      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        {['Modo de Criação 🔒', 'Lista de Convidados', 'Respostas'].map((tab, i) => (
          <button key={i} style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: i === 2 ? '#456DFF' : '#FFF', color: i === 2 ? '#FFF' : '#363F72', border: 'none', borderRight: i < 2 ? '1px solid #E4E3FF' : 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>{tab}</button>
        ))}
      </div>

      <DataTable
        title="7 respostas"
        showCheckbox={false}
        searchPlaceholder="Pesquisar..."
        actions={<Button variant="secondary" size="sm" icon={<Download size={20} />}>Exportar arquivo CSV</Button>}
        columns={[
          { key: 'data', header: 'Data da resposta ↓' },
          { key: 'codigo', header: 'Código' },
          { key: 'email', header: 'E-mail' },
          { key: 'taxa', header: 'Taxa de resposta' },
        ]}
        data={respostas}
      />
    </div>
  )
}
