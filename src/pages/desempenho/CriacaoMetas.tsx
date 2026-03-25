import { TrendingUp, Save, Trash2, GripVertical, PlusSquare, CheckSquare } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'
import FormSection, { FormRow } from '../../components/ui/FormSection'

/**
 * Criação de Avaliação de Metas
 * Figma: 5676:41393 (1440x3626)
 */

function SelectInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
      <label style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{label}</label>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', cursor: 'pointer',
      }}>
        <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: '#667085', fontFamily: "'DM Sans', sans-serif" }}>{placeholder}</span>
      </div>
    </div>
  )
}

function PerguntaCard({ title }: { title: string }) {
  return (
    <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>{title}</span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
          <GripVertical size={20} color="#98A2B3" />
        </div>
      </div>
      <Input label="Nome da Pergunta" placeholder="Nome da Pergunta" />
      <Input label="Descrição" placeholder="Descrição da Pergunta..." />
      <Input label="Ações Necessárias" placeholder="Descrever ações necessárias..." />
      <Input label="Resultados Esperados" placeholder="Descrever resultados esperados..." />
      <SelectInput label="Tipo de Métrica" placeholder="Escolha o tipo de métrica" />
      <div>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Métricas</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[texto de acompanhamento]</p>
        <Input label="Percentual Mínimo" placeholder="Inserir Mínimo" />
        <div style={{ marginTop: '12px' }}>
          <FormRow>
            <Input label="Peso" placeholder="..." />
            <Input label="Limitador" placeholder="..." />
          </FormRow>
        </div>
      </div>
    </div>
  )
}

export default function CriacaoMetas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'Criação de Avaliação de Metas', active: true },
        ]} />}
        title="Criação de Avaliação de Metas"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="secondary" size="md" icon={<Save size={20} />}>Salvar</Button>
          <Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
        </>}
      />

      {/* Informações Principais */}
      <FormSection title="Informações Principais" subtitle="[texto de acompanhamento]">
        <FormRow>
          <Input label="Nome da Avaliação" placeholder="Nome" />
          <SelectInput label="Selecionar período" placeholder="Escolha o período" />
        </FormRow>
      </FormSection>

      {/* Prazo da Avaliação */}
      <FormSection title="Prazo da Avaliação" subtitle="[texto de acompanhamento]">
        <Input label="Prazo de Entrega" placeholder="dia / mês / ano" />
        <Input label="Score de Entrega antes Do prazo" placeholder="[texto de acompanhamento]" />
        <Input label="Score Adicional" placeholder="Adicionar valores aqui..." />
        <FormRow>
          <Input label="Score de Entrega após o prazo" placeholder="Dias de Atraso" />
          <Input label="Score a ser descontado" placeholder="Adicionar valores aqui..." />
        </FormRow>
      </FormSection>

      {/* Perguntas - Seção 1 */}
      <FormSection title="Perguntas" subtitle="[texto de acompanhamento]">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SelectInput label="Objetivo da Avaliação" placeholder="Corporativas, Áreas e Individual" />
          <div style={{ textAlign: 'right', marginLeft: '24px' }}>
            <p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Peso Total das Perguntas</p>
            <p style={{ fontSize: '24px', fontWeight: 700, color: '#456DFF', margin: 0 }}>112%</p>
          </div>
        </div>
        <PerguntaCard title="[Nome da Pergunta]" />
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Pergunta
        </Button>
      </FormSection>

      {/* Perguntas - Seção 2 */}
      <FormSection title="Perguntas" subtitle="[texto de acompanhamento]">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SelectInput label="Objetivo da Avaliação" placeholder="Corporativas, Áreas e Individual" />
          <div style={{ textAlign: 'right', marginLeft: '24px' }}>
            <p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Peso Total das Perguntas</p>
            <p style={{ fontSize: '24px', fontWeight: 700, color: '#456DFF', margin: 0 }}>130%</p>
          </div>
        </div>
        <PerguntaCard title="[Nome da Pergunta]" />
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Novas Perguntas
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
