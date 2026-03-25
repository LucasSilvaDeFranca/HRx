import { Network, Save, PlusSquare, XCircle, ChevronDown } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'


/**
 * Cadastrar Cargos
 * Figma: 5686:306072 (1440x2270)
 */

function RepeatableField({ label, placeholder, items }: { label: string; placeholder: string; items: number }) {
  return (
    <div style={{ display: 'flex', gap: '24px', width: '100%' }}>
      <div style={{ width: '200px', flexShrink: 0 }}>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>{label}</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {Array(items).fill(null).map((_, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <Input placeholder={placeholder} />
            </div>
            <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <XCircle size={20} color="#98A2B3" />
            </button>
          </div>
        ))}
        <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>
          Adicionar {label.split(' ')[0]}
        </Button>
      </div>
    </div>
  )
}

export default function CadastrarCargos() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Network size={20} color="#344054" /> },
          { label: 'Hierarquia' },
          { label: 'Cadastrar' },
          { label: 'Cargos', active: true },
        ]} />}
        title="Cadastrar Cargos"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      {/* Nível e Grade */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px',
      }}>
        {/* Nível e Grade */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Nível e Grade do Cargo</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Esse campo é opcional ou pode ser preenchido posteriormente.</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px',
              boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', cursor: 'pointer',
            }}>
              <span style={{ fontSize: '16px', color: '#667085' }}>Escolher Nível</span>
              <ChevronDown size={20} color="#667085" />
            </div>
          </div>
        </div>

        {/* Nome e Código */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Nome do Cargo</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Input placeholder="Inserir nome..." />
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#456DFF', margin: '0 0 6px' }}>Código do cargo</p>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: '#667085', padding: '10px 12px', border: '1px solid #E4E3FF', borderRadius: '8px 0 0 8px' }}>UI ▾</span>
                <div style={{ flex: 1 }}><Input placeholder="5454687" /></div>
              </div>
              <p style={{ fontSize: '12px', color: '#667085', marginTop: '4px' }}>Inserir numeração de sem caracteres especiais e até 6 dígitos</p>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: '0 0 6px' }}>CBO</p>
              <Input placeholder="Buscar Código..." />
            </div>
          </div>
        </div>

        {/* Sumário */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Sumário</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1 }}>
            <textarea
              placeholder="Inserir aqui..."
              style={{
                width: '100%', minHeight: '100px', padding: '10px 14px',
                border: '1px solid #E4E3FF', borderRadius: '8px',
                boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                fontSize: '16px', fontFamily: "'DM Sans', sans-serif",
                color: '#282A2F', resize: 'vertical',
              }}
            />
          </div>
        </div>

        {/* Responsabilidades */}
        <RepeatableField label="Responsabilidades Principais" placeholder="Inserir Responsabilidade..." items={3} />

        {/* Requisitos */}
        <RepeatableField label="Requisitos do cargo" placeholder="Inserir Requisito..." items={3} />

        {/* Competências Técnicas */}
        <RepeatableField label="Competências Técnicas" placeholder="Inserir Competência..." items={3} />

        {/* Competências Comportamentais */}
        <RepeatableField label="Competências Comportamentais" placeholder="Inserir Competência..." items={3} />
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
