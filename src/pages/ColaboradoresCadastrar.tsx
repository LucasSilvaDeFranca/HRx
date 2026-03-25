import { useRef, useState, useEffect } from 'react'
import { UserPlus, Save, Upload, ChevronDown } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../components/ui'
import FormSection, { FormRow } from '../components/ui/FormSection'

/**
 * Colaboradores / Cadastrar — Formulário extenso
 *
 * Figma node: 5659:25627 (1440x7906)
 *
 * Layout sidebar com tabs à esquerda:
 * - Dados Pessoais | Dados Contratuais | Benefícios
 * - Endereço | Educação | Dados Bancários | etc.
 *
 * Cada seção é um FormSection (card com título + campos)
 * Campos usam Input component com label
 * Selects têm ícone chevron-down
 */

const sidebarTabs = [
  'Dados Pessoais', 'Dados Contratuais', 'Benefícios', 'Endereço',
  'Educação', 'Dados Bancários', 'Formações e Idiomas', 'Dependentes',
  'Saúde e Segurança', 'Dados Empresariais',
]

function toSectionId(tab: string) {
  return tab.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-')
}

function SelectInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
      <label style={{
        fontSize: '14px', fontWeight: 500, lineHeight: '20px',
        color: '#363F72', fontFamily: "'DM Sans', sans-serif",
      }}>
        {label}
      </label>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', backgroundColor: '#FFFFFF',
        border: '1px solid #E4E3FF', borderRadius: '8px',
        boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', cursor: 'pointer',
      }}>
        <span style={{
          fontSize: '16px', fontWeight: 400, lineHeight: '24px',
          color: '#667085', fontFamily: "'DM Sans', sans-serif",
        }}>
          {placeholder}
        </span>
        <ChevronDown size={20} color="#667085" />
      </div>
    </div>
  )
}

export default function ColaboradoresCadastrar() {
  const [activeTab, setActiveTab] = useState('Dados Pessoais')
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollToSection = (tab: string) => {
    setActiveTab(tab)
    const id = toSectionId(tab)
    const el = sectionRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Observe which section is visible to update active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const tab = sidebarTabs.find(t => toSectionId(t) === entry.target.id)
            if (tab) setActiveTab(tab)
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Page Header */}
      <PageHeader
        breadcrumbs={
          <Breadcrumbs items={[
            { icon: <UserPlus size={20} color="#344054" /> },
            { label: 'Colaboradores' },
            { label: 'Cadastrar', active: true },
          ]} />
        }
        title="Cadastramento de Colaborador"
        subtitle="Preencha as informações do colaborador"
        actions={
          <Button variant="primary" size="md" icon={<Save size={20} />}>
            Salvar Colaborador
          </Button>
        }
      />

      {/* Content: Sidebar Tabs + Form */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Left: Tabs */}
        <div style={{
          width: '200px', flexShrink: 0,
          display: 'flex', flexDirection: 'column', gap: '4px',
          position: 'sticky', top: '100px', alignSelf: 'flex-start',
        }}>
          {sidebarTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              style={{
                padding: '10px 16px', borderRadius: '6px',
                border: 'none', cursor: 'pointer', textAlign: 'left',
                fontSize: '14px', fontWeight: 500, lineHeight: '20px',
                fontFamily: "'DM Sans', sans-serif",
                backgroundColor: activeTab === tab ? '#456DFF' : 'transparent',
                color: activeTab === tab ? '#FFFFFF' : '#363F72',
                transition: 'background-color 0.15s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right: Form Sections */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', minWidth: 0 }}>
          {/* Dados Pessoais */}
          <FormSection
            id={toSectionId('Dados Pessoais')}
            ref={(el) => { sectionRefs.current[toSectionId('Dados Pessoais')] = el }}
            title="Dados Pessoais"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <SelectInput label="Cargo" placeholder="Selecione um departamento" />
            <FormRow>
              <Input label="Nome Civil" placeholder="Inserir Aqui" />
              <Input label="Sobrenome" placeholder="Inserir Aqui" />
            </FormRow>
            <Input label="Nome Social" placeholder="Inserir Aqui" />

            {/* Avatar Upload */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '200px',
                backgroundColor: '#CFCBDC', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', fontWeight: 600, color: '#363F72',
              }}>
                JC
              </div>
              <div style={{
                flex: 1, border: '1px solid #EAECF0', borderRadius: '12px',
                padding: '16px 24px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '12px',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '8px',
                  border: '1px solid #E4E3FF', backgroundColor: '#FFF',
                  boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Upload size={20} color="#667085" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#344054' }}>Clique subir o arquivo</span>
                  <span style={{ fontSize: '14px', color: '#475467' }}> ou arraste e solte</span>
                  <p style={{ fontSize: '12px', color: '#475467', marginTop: '4px' }}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
            </div>

            <FormRow>
              <SelectInput label="Gênero Civil" placeholder="Masculino" />
              <Input label="Gênero Social" placeholder="Inserir Aqui" />
              <Input label="Data de Nascimento" placeholder="dia / mês / ano" />
            </FormRow>
            <FormRow>
              <Input label="Cidade de Nascimento" placeholder="Londrina" />
              <SelectInput label="Estado de Nascimento" placeholder="Paraná" />
            </FormRow>
            <FormRow>
              <SelectInput label="Estado Civil" placeholder="Selecione o Estado Civil" />
              <SelectInput label="Cor" placeholder="Selecionar a cor" />
            </FormRow>
            <FormRow>
              <Input label="Email" placeholder="olivia@hrx.com" type="email" />
              <Input label="Email Comercial" placeholder="olivia@hrx.com" type="email" />
            </FormRow>
            <FormRow>
              <Input label="Celular" placeholder="43 99685-2401" />
              <Input label="Telefone" placeholder="43 99685-2401" />
            </FormRow>
          </FormSection>

          {/* Dados Contratuais */}
          <FormSection
            id={toSectionId('Dados Contratuais')}
            ref={(el) => { sectionRefs.current[toSectionId('Dados Contratuais')] = el }}
            title="Dados Contratuais"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <Input label="CPF" placeholder="000.000.000-00" />
              <Input label="CTPS" placeholder="Inserir Aqui" />
              <Input label="Série CTPS" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="RG" placeholder="Inserir Aqui" />
              <Input label="Órgão Emissor" placeholder="SSP" />
              <Input label="PIS" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="Data de Admissão" placeholder="dia / mês / ano" />
              <Input label="Data de Demissão" placeholder="dia / mês / ano" />
            </FormRow>
            <FormRow>
              <SelectInput label="Tipo de Contrato" placeholder="Selecione" />
              <Input label="Título de Eleitor" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="CNH" placeholder="Inserir Aqui" />
              <SelectInput label="Categoria CNH" placeholder="Selecione" />
              <Input label="Validade CNH" placeholder="dia / mês / ano" />
            </FormRow>
          </FormSection>

          {/* Benefícios */}
          <FormSection
            id={toSectionId('Benefícios')}
            ref={(el) => { sectionRefs.current[toSectionId('Benefícios')] = el }}
            title="Benefícios"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <Input label="Vale Alimentação" placeholder="R$ 0,00" />
              <Input label="Vale Refeição" placeholder="R$ 0,00" />
            </FormRow>
            <FormRow>
              <Input label="Vale Transporte" placeholder="R$ 0,00" />
              <Input label="Plano de Saúde" placeholder="R$ 0,00" />
            </FormRow>
            <FormRow>
              <Input label="Plano Odontológico" placeholder="R$ 0,00" />
              <Input label="Seguro de Vida" placeholder="R$ 0,00" />
            </FormRow>
          </FormSection>

          {/* Endereço */}
          <FormSection
            id={toSectionId('Endereço')}
            ref={(el) => { sectionRefs.current[toSectionId('Endereço')] = el }}
            title="Endereço"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <Input label="CEP" placeholder="00000-000" />
              <Input label="Logradouro" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="Número" placeholder="0" />
              <Input label="Complemento" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="Bairro" placeholder="Inserir Aqui" />
              <Input label="Cidade" placeholder="Inserir Aqui" />
              <SelectInput label="Estado" placeholder="Selecione" />
            </FormRow>
          </FormSection>

          {/* Educação */}
          <FormSection
            id={toSectionId('Educação')}
            ref={(el) => { sectionRefs.current[toSectionId('Educação')] = el }}
            title="Educação"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <SelectInput label="Escolaridade" placeholder="Selecione" />
              <Input label="Instituição" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="Curso" placeholder="Inserir Aqui" />
              <Input label="Ano de Conclusão" placeholder="Inserir Aqui" />
            </FormRow>
          </FormSection>

          {/* Dados Bancários */}
          <FormSection
            id={toSectionId('Dados Bancários')}
            ref={(el) => { sectionRefs.current[toSectionId('Dados Bancários')] = el }}
            title="Dados Bancários"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <SelectInput label="Banco" placeholder="Selecione o banco" />
              <SelectInput label="Tipo de Conta" placeholder="Selecione" />
            </FormRow>
            <FormRow>
              <Input label="Agência" placeholder="Inserir Aqui" />
              <Input label="Conta" placeholder="Inserir Aqui" />
              <Input label="Dígito" placeholder="0" />
            </FormRow>
            <FormRow>
              <Input label="Chave PIX" placeholder="Inserir Aqui" />
              <SelectInput label="Tipo PIX" placeholder="Selecione" />
            </FormRow>
          </FormSection>

          {/* Formações e Idiomas */}
          <FormSection
            id={toSectionId('Formações e Idiomas')}
            ref={(el) => { sectionRefs.current[toSectionId('Formações e Idiomas')] = el }}
            title="Formações e Idiomas"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <SelectInput label="Idioma" placeholder="Selecione" />
              <SelectInput label="Nível" placeholder="Selecione" />
            </FormRow>
          </FormSection>

          {/* Dependentes */}
          <FormSection
            id={toSectionId('Dependentes')}
            ref={(el) => { sectionRefs.current[toSectionId('Dependentes')] = el }}
            title="Dependentes"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <Input label="Nome do Dependente" placeholder="Inserir Aqui" />
              <SelectInput label="Grau de Parentesco" placeholder="Selecione" />
            </FormRow>
            <FormRow>
              <Input label="Data de Nascimento" placeholder="dia / mês / ano" />
              <Input label="CPF do Dependente" placeholder="000.000.000-00" />
            </FormRow>
          </FormSection>

          {/* Saúde e Segurança */}
          <FormSection
            id={toSectionId('Saúde e Segurança')}
            ref={(el) => { sectionRefs.current[toSectionId('Saúde e Segurança')] = el }}
            title="Saúde e Segurança"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <SelectInput label="Tipo Sanguíneo" placeholder="Selecione" />
              <SelectInput label="Fator RH" placeholder="Selecione" />
            </FormRow>
            <FormRow>
              <Input label="Alergias" placeholder="Inserir Aqui" />
              <Input label="Medicações" placeholder="Inserir Aqui" />
            </FormRow>
            <FormRow>
              <Input label="Contato de Emergência" placeholder="Inserir Aqui" />
              <Input label="Telefone Emergência" placeholder="43 99685-2401" />
            </FormRow>
          </FormSection>

          {/* Dados Empresariais */}
          <FormSection
            id={toSectionId('Dados Empresariais')}
            ref={(el) => { sectionRefs.current[toSectionId('Dados Empresariais')] = el }}
            title="Dados Empresariais"
            subtitle="[Texto de Acompanhamento]"
            actions={<Button variant="primary" size="sm" icon={<Save size={20} />}>Salvar</Button>}
          >
            <FormRow>
              <SelectInput label="Empresa" placeholder="Selecione" />
              <SelectInput label="Filial" placeholder="Selecione" />
            </FormRow>
            <FormRow>
              <SelectInput label="Departamento" placeholder="Selecione" />
              <SelectInput label="Centro de Custo" placeholder="Selecione" />
            </FormRow>
            <FormRow>
              <Input label="Matrícula" placeholder="Inserir Aqui" />
              <Input label="Remuneração" placeholder="R$ 0,00" />
            </FormRow>
          </FormSection>
        </div>
      </div>
    </div>
  )
}
