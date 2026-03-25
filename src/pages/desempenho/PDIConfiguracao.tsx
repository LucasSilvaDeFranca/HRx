import { Home, Save, CheckSquare, ChevronDown } from 'lucide-react'
import { Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Configurações de PDI
 * Figma: 5724:19220 (1440x1020)
 */

function CheckboxOption({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '8px 0' }}>
      <div style={{ width: '20px', height: '20px', borderRadius: '6px', border: checked ? 'none' : '2px solid #E4E3FF', backgroundColor: checked ? '#456DFF' : '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {checked && <span style={{ color: '#FFF', fontSize: '12px' }}>✓</span>}
      </div>
      <span style={{ fontSize: '14px', color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
    </div>
  )
}

export default function PDIConfiguracao() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <Home size={20} color="#344054" /> }, { label: 'Desempenho' }, { label: 'PDI' }, { label: 'Configurações', active: true }]} />}
        title="Configurações de PDI"
        subtitle="[Texto de Acompanhamento]"
        actions={<><Button variant="secondary" size="md">Cancelar</Button><Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button></>}
      />
      <div style={{ backgroundColor: '#FFF', border: '1px solid #E4E3FF', borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Aprovações</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1 }}>
            <CheckboxOption label="Exigir aprovação do Gestor para finalizar uma avaliação de PDI" />
            <CheckboxOption label="Não é necessária a aprovação do Gestor" checked />
          </div>
        </div>
        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Período das Avaliações</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Duração do Período</label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', cursor: 'pointer' }}>
              <span style={{ fontSize: '16px', color: '#282A2F' }}>30 dias</span>
              <ChevronDown size={20} color="#667085" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="secondary" size="md" icon={<Save size={20} />}>Salvar</Button>
        <Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
      </div>
    </div>
  )
}
