import { useState } from 'react'
import { Building2, Save, Trash2, PlusSquare, GripVertical, ChevronDown } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Campos de Cadastro de Colaborador — 4 tabs
 * Figma: Status (5685:178833), Tipos de Contratação (5685:179402),
 *        Unidades (5685:179761), Variáveis e Benefícios (5685:180059)
 */

const tabs = ['Status', 'Tipos de Contratação', 'Unidades', 'Variáveis e Benefícios']

function Toggle({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
      <div style={{
        width: '44px', height: '24px', borderRadius: '12px',
        backgroundColor: checked ? '#456DFF' : '#E4E3FF',
        position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s',
      }}>
        <div style={{
          width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFFFFF',
          position: 'absolute', top: '2px', left: checked ? '22px' : '2px',
          boxShadow: '0px 1px 2px rgba(16,24,40,0.1)', transition: 'left 0.2s',
        }} />
      </div>
      <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
    </div>
  )
}

function StatusTab() {
  const statuses = [
    { color: '#17B26A', label: 'Ativo' },
    { color: '#F04438', label: 'Desligado' },
    { color: '#F79009', label: 'Cadastrando' },
  ]
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '200px' }}>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Status</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {statuses.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: s.color }} />
              <ChevronDown size={16} color="#667085" />
            </div>
            <input defaultValue={s.label} style={{
              flex: 1, padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px',
              boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px',
              fontFamily: "'DM Sans', sans-serif", color: '#282A2F', outline: 'none',
            }} />
            <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <Trash2 size={20} color="#98A2B3" />
            </button>
          </div>
        ))}
        <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>Adicionar Status</Button>
      </div>
    </div>
  )
}

function TiposContratacaoTab() {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '200px' }}>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Status</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: 0 }}>[Nome do Tipo de Contratação]</p>
          <Input label="Nome da Contratação" placeholder="CLT" />
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Adicionais por Lei</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[texto de acompanhamento]</p>
            <Toggle label="Periculosidade" checked />
            <Toggle label="Insalubridade" />
            <Toggle label="Salário Família" checked />
            <div style={{ marginTop: '12px' }}>
              <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>Novos Adicionais</Button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '16px' }}>
          <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>Adicionar Tipos de Contratação</Button>
        </div>
      </div>
    </div>
  )
}

function VariaveisTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Benefícios */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ width: '200px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Benefícios</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Nome do Benefício]</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
                <GripVertical size={20} color="#98A2B3" />
              </div>
            </div>
            <Input label="Nome do Benefícios" placeholder="Nome Completo" />
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Regras do Benefício</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[texto de acompanhamento]</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}><Input label="Nome" placeholder="São Paulo - Leste" /></div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', display: 'block', marginBottom: '6px' }}>Valor</label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ padding: '10px', backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF', borderRadius: '8px 0 0 8px', borderRight: 'none', fontSize: '14px', color: '#363F72' }}>R$</span>
                    <input style={{ flex: 1, padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", outline: 'none' }} />
                  </div>
                </div>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', marginTop: '24px' }}>
                  <Trash2 size={20} color="#98A2B3" />
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '16px' }}><Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>Adicionar Benefício</Button></div>
        </div>
      </div>

      {/* Variável */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ width: '200px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Variável</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Nome da Variável]</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
                <GripVertical size={20} color="#98A2B3" />
              </div>
            </div>
            <Input label="Nome do Benefícios" placeholder="Nome Completo" />
          </div>
          <div style={{ marginTop: '16px' }}><Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>Adicionar Variável</Button></div>
        </div>
      </div>
    </div>
  )
}

export default function CamposCadastro() {
  const [activeTab, setActiveTab] = useState('Status')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Building2 size={20} color="#344054" /> },
          { label: 'Administração' },
          { label: 'Cadastro de Campos', active: true },
        ]} />}
        title="Campos de Cadastro de Colaborador"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500,
              backgroundColor: activeTab === tab ? '#456DFF' : '#FFFFFF',
              color: activeTab === tab ? '#FFFFFF' : '#363F72',
              border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              borderRight: '1px solid #E4E3FF',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px',
      }}>
        {activeTab === 'Status' && <StatusTab />}
        {activeTab === 'Tipos de Contratação' && <TiposContratacaoTab />}
        {activeTab === 'Unidades' && (
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ width: '200px' }}>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Unidades</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input label="Nome da Unidade" placeholder="Matriz" />
              <Input label="Endereço" placeholder="Rua exemplo, 123" />
              <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>Adicionar Unidade</Button>
            </div>
          </div>
        )}
        {activeTab === 'Variáveis e Benefícios' && <VariaveisTab />}
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
