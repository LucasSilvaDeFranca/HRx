import { useState } from 'react'
import { PieChart, CheckCircle2, XCircle, ChevronDown } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader, Modal } from '../../components/ui'
import FormSection from '../../components/ui/FormSection'

/**
 * Aprovação de Movimentação
 * Figma: 5686:307774 (1440x2003) + 5686:308750 (modal)
 */

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

function SelectInput({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{label}</label>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', backgroundColor: '#FFF', border: '1px solid #E4E3FF',
        borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
      }}>
        <span style={{ fontSize: '16px', color: '#282A2F' }}>{value}</span>
        <ChevronDown size={20} color="#667085" />
      </div>
    </div>
  )
}

function StatusBanner({ type, message, details }: { type: 'success' | 'error'; message: string; details?: string }) {
  const isSuccess = type === 'success'
  return (
    <div style={{
      display: 'flex', gap: '12px', padding: '12px 16px', borderRadius: '8px',
      backgroundColor: isSuccess ? '#F6FEF9' : '#FFFBFA',
      border: `1px solid ${isSuccess ? '#DCFAE6' : '#FEE4E2'}`,
      alignItems: 'flex-start',
    }}>
      {isSuccess ? <CheckCircle2 size={20} color="#067647" /> : <XCircle size={20} color="#D92D20" />}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '14px', fontWeight: 500, color: isSuccess ? '#067647' : '#D92D20', margin: 0 }}>{message}</p>
        {details && <p style={{ fontSize: '14px', color: isSuccess ? '#067647' : '#D92D20', margin: '4px 0 0' }}>{details}</p>}
      </div>
      {!isSuccess && <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#D92D20' }}>✕</button>}
    </div>
  )
}

export default function AprovacaoMovimentacao() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Modal Aprovar */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        icon={<CheckCircle2 size={24} color="#067647" />}
        title="Aprovar Movimentação"
        subtitle="This blog post has been published. Team members will be able to edit this post and republish changes."
      >
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="secondary" size="md" fullWidth onClick={() => setModalOpen(false)}>Cancelar</Button>
          <Button variant="primary" size="md" fullWidth onClick={() => setModalOpen(false)}>Confirmar</Button>
        </div>
      </Modal>

      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <PieChart size={20} color="#344054" /> },
          { label: 'Centro de Custos' },
          { label: 'Criar Movimentação', active: true },
        ]} />}
        title="Criar Movimentação"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button variant="secondary" size="md">Voltar</Button>
          <Button variant="primary" size="md" style={{ backgroundColor: '#D92D20', borderColor: '#D92D20', color: '#FFF' }}>Rejeitar</Button>
          <Button variant="primary" size="md" style={{ backgroundColor: '#067647', borderColor: '#067647' }} onClick={() => setModalOpen(true)}>Aceitar</Button>
        </>}
      />

      {/* Info Essenciais */}
      <FormSection title="Informações Essenciais" subtitle="[Texto de Acompanhamento]">
        <Input label="Nome do Colaborador" placeholder="João Aquino" />
        <Input label="Cargo Atual" placeholder="Designer" />
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Salário Atual</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ padding: '10px 12px', backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF', borderRadius: '8px 0 0 8px', borderRight: 'none' }}>R$</span>
              <input defaultValue="2.500" style={{ flex: 1, padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", outline: 'none' }} />
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Salário Proposto</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ padding: '10px 12px', backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF', borderRadius: '8px 0 0 8px', borderRight: 'none' }}>R$</span>
              <input defaultValue="5.000" style={{ flex: 1, padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", outline: 'none' }} />
            </div>
          </div>
        </div>
      </FormSection>

      {/* Tipo */}
      <FormSection title="Tipo de Movimentação" subtitle="[Texto de Acompanhamento]">
        <SelectInput label="" value="Reajuste Salarial" />
        <div style={{ marginTop: '8px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 12px' }}>Justificativos do Reajuste Salarial</p>
          <RadioOption label="Mérito" checked />
          <RadioOption label="CTT / Antecipação" />
          <RadioOption label="Promoção" description="Será necessário selecionar novo cargo" />
        </div>
      </FormSection>

      {/* Justificativas */}
      <FormSection title="Justificativas" subtitle="As justificativas devem ser mencionadas em todas as movimentações, incluindo os motivos das demissões.">
        <div style={{
          padding: '16px', border: '1px solid #E4E3FF', borderRadius: '8px',
          fontSize: '14px', color: '#667085', lineHeight: '1.6',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </FormSection>

      {/* Autorizações */}
      <FormSection title="Autorizações" subtitle="[Texto de Acompanhamento]">
        <SelectInput label="Gestor Requisitante" value="Felipe Amorim" />
        <StatusBanner type="success" message="Aprovou essa movimentação" />

        <SelectInput label="Recursos Humanos" value="Kathia Zufo" />
        <StatusBanner type="error" message="Rejeitou essa movimentação" details="Justificativa: Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquip pariatur, ipsum dolor." />

        <SelectInput label="Diretoria" value="Juliana Castilho" />
      </FormSection>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" style={{ backgroundColor: '#D92D20', borderColor: '#D92D20' }}>Rejeitar</Button>
        <Button variant="primary" size="md" style={{ backgroundColor: '#067647', borderColor: '#067647' }} onClick={() => setModalOpen(true)}>Aprovar</Button>
      </div>
    </div>
  )
}
