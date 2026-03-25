import { useState } from 'react'
import { ClipboardList, Eye, Upload, ChevronDown } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Pesquisa de Engajamento — Detalhe (Modo Encerrada)
 * Figma: 8098:386 (1280x832)
 *
 * Tabs: Modo de Criação 🔒 | Lista de Convidados 🔒 | Respostas
 * Content: Título, Descrição, Imagem, Pré-Visualizar
 */

const tabs = ['Modo de Criação 🔒', 'Lista de Convidados 🔒', 'Respostas']

export default function PesquisaDetalhe() {
  const [activeTab, setActiveTab] = useState('Modo de Criação 🔒')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <ClipboardList size={20} color="#344054" /> },
          { label: 'Pesquisas' },
          { label: 'Pesquisa de Engajamento', active: true },
        ]} />}
        title=""
        subtitle=""
      />

      {/* Custom Header with icon + status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '-16px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <ClipboardList size={28} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '30px', fontWeight: 700, lineHeight: '38px', color: '#456DFF', margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
            Pesquisa de Engajamento
          </p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>Criada em 23/04/2024</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary" size="md">Dashboard</Button>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '10px 16px', backgroundColor: '#F6FEF9', border: '1px solid #DCFAE6',
            borderRadius: '8px', cursor: 'pointer',
          }}>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#067647' }}>Encerrada</span>
            <ChevronDown size={16} color="#067647" />
          </div>
        </div>
      </div>
      <div style={{ fontSize: '12px', color: '#667085', textAlign: 'right', marginTop: '-24px' }}>
        <p style={{ margin: 0 }}>Publicada em 23/04/2024</p>
        <p style={{ margin: '2px 0 0' }}>Encerrada em 23/04/2024</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500,
              backgroundColor: activeTab === tab ? '#456DFF' : '#FFFFFF',
              color: activeTab === tab ? '#FFFFFF' : '#363F72',
              border: 'none', borderRight: i < tabs.length - 1 ? '1px solid #E4E3FF' : 'none',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notice */}
      <p style={{ fontSize: '14px', color: '#667085', fontStyle: 'italic' }}>
        O Modo de Criação está desabilitado pois a pesquisa foi encerrada.
      </p>

      {/* Content */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px',
      }}>
        {/* Pré-Visualizar */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="secondary" size="sm" icon={<Eye size={20} />}>Pré-Visualizar</Button>
        </div>

        {/* Título */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: 0 }}>Título da pesquisa</p>
          </div>
          <div style={{ flex: 1 }}>
            <Input placeholder="Pesquisa Exemplo" />
          </div>
        </div>

        {/* Descrição */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: 0 }}>Descrição</p>
          </div>
          <div style={{ flex: 1 }}>
            <textarea
              defaultValue="Lorem ipsum dolor sit amet consectetur. Sociis ultricies praesent egestas nisi lacus tortor. Id purus sed turpis mollis. Fringilla tristique neque lorem massa orci velit. Nec cras ornare auctor adipiscing. Ut ut viverra risus massa. Justo elementum tellus."
              style={{
                width: '100%', minHeight: '120px', padding: '10px 14px',
                border: '1px solid #E4E3FF', borderRadius: '8px',
                boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                fontSize: '16px', fontFamily: "'DM Sans', sans-serif",
                color: '#282A2F', resize: 'vertical', lineHeight: '1.6',
              }}
            />
          </div>
        </div>

        {/* Imagem */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: 0 }}>Imagem</p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              border: '1px solid #EAECF0', borderRadius: '12px',
              padding: '24px', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '12px', backgroundColor: '#F9FAFB',
            }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #FF6B6B 0%, #456DFF 100%)',
              }} />
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px',
                border: '1px solid #E4E3FF', backgroundColor: '#FFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Upload size={20} color="#667085" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '14px', color: '#456DFF', fontWeight: 500 }}>Clique ou arraste e solte</span>
                <span style={{ fontSize: '14px', color: '#475467' }}> aqui seu arquivo</span>
                <p style={{ fontSize: '12px', color: '#475467', marginTop: '4px' }}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
