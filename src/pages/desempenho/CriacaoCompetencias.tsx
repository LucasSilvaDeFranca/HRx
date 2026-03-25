import { TrendingUp, Save, Trash2, GripVertical, PlusSquare } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'
import FormSection, { FormRow } from '../../components/ui/FormSection'

/**
 * Criação de Avaliação de Competências
 * Figma: 5681:25570 (1440x3085)
 */

function SelectInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
      <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{label}</label>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', backgroundColor: '#FFF', border: '1px solid #E4E3FF',
        borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', cursor: 'pointer',
      }}>
        <span style={{ fontSize: '16px', color: '#667085' }}>{placeholder}</span>
      </div>
    </div>
  )
}

export default function CriacaoCompetencias() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'Avaliação de Competências' },
          { label: 'Criação de Avaliação', active: true },
        ]} />}
        title="Criação de Avaliação de Competências"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      {/* Informações Principais */}
      <FormSection title="Informações Principais" subtitle="[texto de acompanhamento]">
        <Input label="Nome da Avaliação" placeholder="Nome" />
        <SelectInput label="Selecionar período" placeholder="Escolha o período" />
      </FormSection>

      {/* Prazo */}
      <FormSection title="Prazo da Avaliação" subtitle="[texto de acompanhamento]">
        <FormRow>
          <Input label="Prazo de Entrega" placeholder="dia / mês / ano" />
          <SelectInput label="Escala de Lickert" placeholder="Escolha uma métrica" />
        </FormRow>
      </FormSection>

      {/* Competências */}
      <FormSection title="Competências" subtitle="[texto de acompanhamento]">
        <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Nome da Pergunta]</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
              <GripVertical size={20} color="#98A2B3" />
            </div>
          </div>
          <Input label="Nome da Pergunta" placeholder="Nome da Pergunta" />
          <Input label="Descrição" placeholder="Descrição da Pergunta..." />
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Comportamentos Esperados</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
            <Input label="Comportamento Esperado" placeholder="Descreva o comportamento..." />
            <div style={{ marginTop: '12px' }}>
              <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>
                Adicionar Comportamento Esperados
              </Button>
            </div>
          </div>
        </div>
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Competência
        </Button>
      </FormSection>

      {/* Pesos Gerais */}
      <FormSection title="Pesos Gerais" subtitle="[texto de acompanhamento]">
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* Cargos Disponíveis */}
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Cargos Disponíveis</p>
            <p style={{ fontSize: '12px', color: '#667085', margin: '0 0 12px' }}>[texto de acompanhamento]</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {['Comercial', 'Vendedor Externo', 'Vendedor Interno', 'Desenvolvedor Jr.', 'Desenvolvedor Sênior', 'Analista de Marketing', 'Vendedor Interno', 'Vendedor Externo'].map((cargo, i) => (
                <span key={i} style={{
                  fontSize: '12px', color: '#456DFF', padding: '2px 8px',
                  backgroundColor: '#F5F4FF', borderRadius: '4px',
                }}>
                  {cargo}
                </span>
              ))}
            </div>
          </div>

          {/* Selecionar Cargos */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: '0 0 12px' }}>Selecionar Cargos</p>
            <div style={{
              border: '1px solid #E4E3FF', borderRadius: '8px', padding: '12px',
              minHeight: '60px', display: 'flex', gap: '8px', flexWrap: 'wrap',
            }}>
              <span style={{ fontSize: '12px', color: '#363F72', padding: '4px 8px', backgroundColor: '#E4E3FF', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Design ✕
              </span>
              <span style={{ fontSize: '12px', color: '#363F72', padding: '4px 8px', backgroundColor: '#E4E3FF', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Software ✕
              </span>
            </div>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input label="Peso Corporativo" placeholder="Nome" />
              <Input label="Peso Área" placeholder="Nome" />
              <Input label="Peso Individual" placeholder="Nome" />
            </div>
          </div>
        </div>
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Novos Pesos
        </Button>
      </FormSection>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
