import { ClipboardList, Link2, ChevronDown } from 'lucide-react'
import { Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Lista de Convidados
 * Figma: 7298:1823 (1440x960)
 */

const convidados = Array(5).fill({ codigo: '000 000 000-00', email: 'exemplo@gmail.com' })

export default function PesquisaConvidados() {
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#F0F9FF', border: '1px solid #B9E6FE', borderRadius: '8px' }}><span style={{ fontSize: '14px', fontWeight: 500, color: '#026AA2' }}>Em análise</span><ChevronDown size={16} color="#026AA2" /></div>
      </div>
      <p style={{ fontSize: '12px', color: '#667085', textAlign: 'right', marginTop: '-24px' }}>Publicada em 23/04/2024</p>

      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        {['Modo de Criação 🔒', 'Lista de convidados 🔒', 'Respostas'].map((tab, i) => (
          <button key={i} style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: i === 1 ? '#456DFF' : '#FFF', color: i === 1 ? '#FFF' : '#363F72', border: 'none', borderRight: i < 2 ? '1px solid #E4E3FF' : 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>{tab}</button>
        ))}
      </div>

      <p style={{ fontSize: '14px', color: '#667085', fontStyle: 'italic' }}>A Lista de Convidados está desabilitada pois a pesquisa já foi realizada e desativada.</p>

      <DataTable
        title="5 convidados"
        showCheckbox={false}
        searchPlaceholder="Pesquisar..."
        columns={[
          { key: 'codigo', header: 'Código' },
          { key: 'email', header: 'E-mail' },
          {
            key: 'action', header: '',
            render: () => (
              <button style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, backgroundColor: '#F9FAFB', border: '1px solid #F2F4F7', color: '#98A2B3', cursor: 'default', fontFamily: "'DM Sans', sans-serif" }}>Reenviar</button>
            ),
          },
        ]}
        data={convidados}
      />

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button style={{ padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, backgroundColor: '#F9FAFB', border: '1px solid #F2F4F7', color: '#98A2B3', cursor: 'default', fontFamily: "'DM Sans', sans-serif" }}>Enviar convites para novos convidados</button>
        <button style={{ padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, backgroundColor: '#F9FAFB', border: '1px solid #F2F4F7', color: '#98A2B3', cursor: 'default', fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: '8px' }}><Link2 size={16} />Copiar link</button>
      </div>
    </div>
  )
}
