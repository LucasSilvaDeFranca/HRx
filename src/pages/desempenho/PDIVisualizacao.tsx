import { Home, Save, CheckSquare, Pencil, Trash2 } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'
import FormSection from '../../components/ui/FormSection'
import { FormRow } from '../../components/ui/FormSection'

/**
 * PDI Visualização / Criação
 * Figma: 5683:60198 (1440x2198)
 *
 * Layout: info do colaborador + planos importados (cards com What/How)
 * + criação de novos planos
 */

function CompetenciaCard({ title, readOnly }: { title: string; readOnly?: boolean }) {
  return (
    <div style={{
      border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
      display: 'flex', flexDirection: 'column', gap: '16px',
    }}>
      <div>
        <p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: 0 }}>{title}</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>[Descrição da Competência]</p>
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>What</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>How</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      {readOnly && (
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="secondary" size="sm" icon={<Pencil size={16} />} fullWidth>Editar</Button>
          <Button variant="secondary" size="sm" icon={<Trash2 size={16} />} fullWidth>Apagar</Button>
        </div>
      )}
    </div>
  )
}

export default function PDIVisualizacao() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Home size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'PDI' },
          { label: 'Criação', active: true },
        ]} />}
        title="Criação de PDI para João Aquino"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="secondary" size="md" icon={<Save size={20} />}>Salvar</Button>
          <Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
        </>}
      />

      {/* Colaborador */}
      <FormSection title="Colaborador a ser avaliado" subtitle="[texto de acompanhamento]">
        <FormRow>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Escolha o Colaborador</label>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px',
              boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
            }}>
              <span style={{ fontSize: '16px', color: '#282A2F' }}>João Aquino</span>
            </div>
          </div>
          <Input label="Prazo de Entrega" placeholder="45 dias..." />
        </FormRow>
      </FormSection>

      {/* Planos importados */}
      <FormSection title="Planos importados das Metas" subtitle="[texto de acompanhamento]">
        <CompetenciaCard title="[Nome da Competência]" readOnly />
        <CompetenciaCard title="[Nome da Competência]" readOnly />
      </FormSection>

      {/* Criação de novos planos */}
      <FormSection title="Criação de novos planos" subtitle="[texto de acompanhamento]">
        <div style={{
          border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Nome da Competência]</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
            </div>
          </div>
          <Input label="Nome da Métrica" placeholder="Nome da Métrica" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>What (O que, Entrega e Resultados)</label>
            <textarea
              placeholder="Escrever aqui..."
              style={{
                width: '100%', minHeight: '80px', padding: '10px 14px',
                border: '1px solid #E4E3FF', borderRadius: '8px',
                boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                fontSize: '16px', fontFamily: "'DM Sans', sans-serif",
                color: '#282A2F', resize: 'vertical',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>How (Como, Competência e Comportamentos)</label>
            <textarea
              placeholder="Escrever aqui..."
              style={{
                width: '100%', minHeight: '80px', padding: '10px 14px',
                border: '1px solid #E4E3FF', borderRadius: '8px',
                boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                fontSize: '16px', fontFamily: "'DM Sans', sans-serif",
                color: '#282A2F', resize: 'vertical',
              }}
            />
          </div>
        </div>
        <Button variant="secondary" size="md" icon={<CheckSquare size={20} />} fullWidth>
          Criar novo Plano
        </Button>
      </FormSection>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="secondary" size="md" icon={<Save size={20} />}>Salvar</Button>
        <Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
      </div>
    </div>
  )
}
