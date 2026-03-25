import { TrendingUp, Save, Trash2, GripVertical, PlusSquare } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'
import FormSection, { FormRow } from '../../components/ui/FormSection'

/**
 * Métricas de Desempenho
 * Figma: 5659:26335 (1440x2023)
 */

function MetricItem({ name, onDelete }: { name: string; onDelete?: () => void }) {
  return (
    <div style={{
      border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
      display: 'flex', flexDirection: 'column', gap: '20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>
          {name}
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Button variant="secondary" size="sm" icon={<Trash2 size={16} />} onClick={onDelete}>Apagar</Button>
          <GripVertical size={20} color="#98A2B3" style={{ cursor: 'grab' }} />
        </div>
      </div>
      <Input label="Nome da Métrica" placeholder="Nome da Métrica" />
    </div>
  )
}

export default function Metricas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'Métricas de Desempenho', active: true },
        ]} />}
        title="Métricas de Desempenho"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      {/* Métrica de Lickert */}
      <FormSection title="Métrica de Lickert" subtitle="[texto de acompanhamento]">
        <MetricItem name="[Nome da Métrica]" />
        <div style={{
          border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          <Input label="Nome da Métrica" placeholder="Nome da Métrica" />
          <Input label="Níveis da Escala" placeholder="1 a 7 níveis" />
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: '0 0 4px' }}>
              Nomear Níveis
            </p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>
            {['01', '02', '03', '04', '05', '06', '07'].map(n => (
              <div key={n} style={{ marginBottom: '12px' }}>
                <Input label={`Nível ${n}`} placeholder="Nomear" />
              </div>
            ))}
          </div>
        </div>
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Nova Métrica de Lickert
        </Button>
      </FormSection>

      {/* Métrica de Percentual */}
      <FormSection title="Métrica de Percentual" subtitle="[texto de acompanhamento]">
        <div style={{
          border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Nome de Percentual]</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
              <GripVertical size={20} color="#98A2B3" />
            </div>
          </div>
          <Input label="Nome da Métrica" placeholder="Nome da Métrica" />
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Nomear Níveis</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>
            <FormRow>
              <Input label="Nível 0%" placeholder="Nomear" />
              <Input label="Nível 100%" placeholder="Nomear" />
            </FormRow>
          </div>
        </div>
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Nova Métrica de Percentual
        </Button>
      </FormSection>

      {/* Footer Actions */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
