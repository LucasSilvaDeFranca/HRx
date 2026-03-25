import { PieChart, Send, ChevronDown } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'
import FormSection, { FormRow } from '../../components/ui/FormSection'

/**
 * Criar Movimentação
 * Figma: 5686:307125 (1440x3004)
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
        <span style={{ fontSize: '16px', color: '#282A2F', fontFamily: "'DM Sans', sans-serif" }}>{placeholder}</span>
        <ChevronDown size={20} color="#667085" />
      </div>
    </div>
  )
}

function RadioOption({ label, description, checked }: { label: string; description?: string; checked?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '4px 0' }}>
      <div style={{
        width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
        border: checked ? '6px solid #456DFF' : '2px solid #E4E3FF', backgroundColor: '#FFF',
      }} />
      <div>
        <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>{label}</p>
        {description && <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>{description}</p>}
      </div>
    </div>
  )
}

export default function CriarMovimentacao() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <PieChart size={20} color="#344054" /> },
          { label: 'Centro de Custos' },
          { label: 'Criar Movimentação', active: true },
        ]} />}
        title="Criar Movimentação"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Send size={20} />}>Enviar Movimentação</Button>
        </>}
      />

      {/* Informações Essenciais */}
      <FormSection title="Informações Essenciais" subtitle="[Texto de Acompanhamento]">
        <Input label="Nome do Colaborador" placeholder="Contratação" />
        <Input label="Cargo Atual" placeholder="Contratação" />
        <FormRow>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Salário Atual</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', color: '#363F72', padding: '10px 12px', backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF', borderRadius: '8px 0 0 8px', borderRight: 'none' }}>R$</span>
              <input placeholder="" style={{ flex: 1, padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', outline: 'none' }} />
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Salário Proposto</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', color: '#363F72', padding: '10px 12px', backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF', borderRadius: '8px 0 0 8px', borderRight: 'none' }}>R$</span>
              <input placeholder="" style={{ flex: 1, padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', outline: 'none' }} />
            </div>
          </div>
        </FormRow>
      </FormSection>

      {/* Tipo de Movimentação */}
      <FormSection title="Tipo de Movimentação" subtitle="[Texto de Acompanhamento]">
        <SelectInput label="" placeholder="Reajuste Salarial" />

        <div style={{ marginTop: '8px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Justificativos de Reajuste Salarial</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[Texto de Acompanhamento]</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioOption label="Mérito" checked />
            <RadioOption label="CTT / Antecipação" />
            <RadioOption label="Promoção" description="Será necessário selecionar novo cargo" />
          </div>
          <div style={{ marginTop: '16px' }}>
            <SelectInput label="Novo Cargo" placeholder="Selecionar" />
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Justificativos de Movimentação</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[Texto de Acompanhamento]</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioOption label="Mudança de função" />
            <RadioOption label="Sem reajuste salarial" />
            <RadioOption label="Com reajuste salarial" />
            <RadioOption label="Promoção" description="Será necessário selecionar novo cargo" />
          </div>
          <div style={{ marginTop: '16px' }}>
            <SelectInput label="Novo Cargo" placeholder="Selecionar" />
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Justificativos de Desligamento</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[Texto de Acompanhamento]</p>
          <RadioOption label="Pedido de Desligamento" description="Será necessário selecionar novo cargo" />
          <div style={{ marginTop: '16px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Motivo</label>
            <textarea placeholder="Insira aqui o motivo..." style={{ width: '100%', minHeight: '80px', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', resize: 'vertical', marginTop: '6px' }} />
          </div>
          <div style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Demissão do Empregador</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>Será necessário selecionar novo cargo</p>
            <RadioOption label="Aviso prévio cumprido" />
            <RadioOption label="Aviso prévio dispensado" />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Input label="Data do Desligamento" placeholder="Inserir data..." />
          </div>
        </div>
      </FormSection>

      {/* Justificativas */}
      <FormSection title="Justificativas" subtitle="As justificativas devem ser mencionadas em todas as movimentações, incluindo os motivos das demissões.">
        <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Contratação</label>
        <textarea placeholder="" style={{ width: '100%', minHeight: '100px', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', resize: 'vertical' }} />
      </FormSection>

      {/* Autorizações */}
      <FormSection title="Autorizações" subtitle="[Texto de Acompanhamento]">
        <SelectInput label="Gestor Requisitante" placeholder="Selecionar" />
        <SelectInput label="Recursos Humanos" placeholder="Selecionar" />
        <SelectInput label="Diretoria" placeholder="Selecionar" />
      </FormSection>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Send size={20} />}>Enviar Movimentação</Button>
      </div>
    </div>
  )
}
