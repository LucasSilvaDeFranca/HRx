import { UserPlus, Pencil, Mail, Phone } from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader } from '../components/ui'
import FormSection, { FormRow } from '../components/ui/FormSection'

/**
 * Colaboradores / Visualização — Detalhes do Colaborador
 *
 * Figma node: 5659:25911 (1440x7137)
 *
 * Layout: Header com avatar grande + info + botão editar
 * Seções read-only com dados do colaborador
 */

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <p style={{
        fontSize: '14px', fontWeight: 500, lineHeight: '20px',
        color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: 0,
      }}>
        {label}
      </p>
      <p style={{
        fontSize: '16px', fontWeight: 400, lineHeight: '24px',
        color: '#667085', fontFamily: "'DM Sans', sans-serif", margin: '4px 0 0',
      }}>
        {value}
      </p>
    </div>
  )
}

export default function ColaboradoresVisualizacao() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Page Header */}
      <PageHeader
        breadcrumbs={
          <Breadcrumbs items={[
            { icon: <UserPlus size={20} color="#344054" /> },
            { label: 'Colaboradores' },
            { label: 'Visualização', active: true },
          ]} />
        }
        title="Juliana Castilho"
        subtitle="Visualização do perfil do colaborador"
        actions={
          <Button variant="primary" size="md" icon={<Pencil size={20} />}>
            Editar Colaborador
          </Button>
        }
      />

      {/* Profile Card */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', gap: '24px', alignItems: 'center',
      }}>
        <Avatar name="Juliana Castilho" size={80} />
        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: '20px', fontWeight: 700, lineHeight: '30px',
            color: '#363F72', fontFamily: "'DM Sans', sans-serif", margin: 0,
          }}>
            Juliana Castilho
          </p>
          <p style={{
            fontSize: '14px', color: '#667085', margin: '4px 0 0',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Auxiliar Técnico • Departamento de TI
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={16} color="#667085" />
              <span style={{ fontSize: '14px', color: '#667085' }}>juliana@hrx.com.br</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={16} color="#667085" />
              <span style={{ fontSize: '14px', color: '#667085' }}>43 99685-2401</span>
            </div>
          </div>
        </div>
        <Badge variant="success">Ativo</Badge>
      </div>

      {/* Dados Pessoais */}
      <FormSection title="Dados Pessoais" subtitle="Informações pessoais do colaborador">
        <FormRow>
          <InfoField label="Nome Civil" value="Juliana" />
          <InfoField label="Sobrenome" value="Castilho" />
          <InfoField label="Nome Social" value="Juliana Castilho" />
        </FormRow>
        <FormRow>
          <InfoField label="Gênero Civil" value="Feminino" />
          <InfoField label="Gênero Social" value="Feminino" />
          <InfoField label="Data de Nascimento" value="15/03/1990" />
        </FormRow>
        <FormRow>
          <InfoField label="Cidade de Nascimento" value="Londrina" />
          <InfoField label="Estado de Nascimento" value="Paraná" />
          <InfoField label="Estado Civil" value="Solteira" />
        </FormRow>
        <FormRow>
          <InfoField label="Email" value="juliana@hrx.com.br" />
          <InfoField label="Email Comercial" value="juliana@hrx.com.br" />
          <InfoField label="Cor" value="Branca" />
        </FormRow>
        <FormRow>
          <InfoField label="Celular" value="43 99685-2401" />
          <InfoField label="Telefone" value="43 3344-5566" />
        </FormRow>
      </FormSection>

      {/* Dados Contratuais */}
      <FormSection title="Dados Contratuais" subtitle="Informações do contrato de trabalho">
        <FormRow>
          <InfoField label="CPF" value="123.456.789-00" />
          <InfoField label="CTPS" value="12345678" />
          <InfoField label="Série CTPS" value="0001" />
        </FormRow>
        <FormRow>
          <InfoField label="RG" value="12.345.678-9" />
          <InfoField label="Órgão Emissor" value="SSP/PR" />
          <InfoField label="PIS" value="123.45678.90-1" />
        </FormRow>
        <FormRow>
          <InfoField label="Data de Admissão" value="01/02/2023" />
          <InfoField label="Tipo de Contrato" value="CLT" />
          <InfoField label="Título de Eleitor" value="1234 5678 9012" />
        </FormRow>
        <FormRow>
          <InfoField label="CNH" value="12345678900" />
          <InfoField label="Categoria CNH" value="B" />
          <InfoField label="Validade CNH" value="15/08/2028" />
        </FormRow>
      </FormSection>

      {/* Benefícios */}
      <FormSection title="Benefícios" subtitle="Benefícios do colaborador">
        <FormRow>
          <InfoField label="Vale Alimentação" value="R$ 450,00" />
          <InfoField label="Vale Refeição" value="R$ 350,00" />
          <InfoField label="Vale Transporte" value="R$ 200,00" />
        </FormRow>
        <FormRow>
          <InfoField label="Plano de Saúde" value="R$ 500,00" />
          <InfoField label="Plano Odontológico" value="R$ 80,00" />
          <InfoField label="Seguro de Vida" value="R$ 50,00" />
        </FormRow>
      </FormSection>

      {/* Endereço */}
      <FormSection title="Endereço" subtitle="Endereço residencial">
        <FormRow>
          <InfoField label="CEP" value="86010-000" />
          <InfoField label="Logradouro" value="Rua Sergipe" />
          <InfoField label="Número" value="1250" />
        </FormRow>
        <FormRow>
          <InfoField label="Complemento" value="Apto 302" />
          <InfoField label="Bairro" value="Centro" />
          <InfoField label="Cidade" value="Londrina" />
          <InfoField label="Estado" value="PR" />
        </FormRow>
      </FormSection>

      {/* Dados Bancários */}
      <FormSection title="Dados Bancários" subtitle="Dados para pagamento">
        <FormRow>
          <InfoField label="Banco" value="Banco do Brasil" />
          <InfoField label="Tipo de Conta" value="Corrente" />
        </FormRow>
        <FormRow>
          <InfoField label="Agência" value="1234" />
          <InfoField label="Conta" value="56789" />
          <InfoField label="Dígito" value="0" />
        </FormRow>
        <FormRow>
          <InfoField label="Chave PIX" value="juliana@hrx.com.br" />
          <InfoField label="Tipo PIX" value="Email" />
        </FormRow>
      </FormSection>

      {/* Educação */}
      <FormSection title="Educação" subtitle="Formação acadêmica">
        <FormRow>
          <InfoField label="Escolaridade" value="Ensino Superior Completo" />
          <InfoField label="Instituição" value="UEL" />
        </FormRow>
        <FormRow>
          <InfoField label="Curso" value="Administração" />
          <InfoField label="Ano de Conclusão" value="2015" />
        </FormRow>
      </FormSection>

      {/* Dependentes */}
      <FormSection title="Dependentes" subtitle="Dependentes vinculados">
        <FormRow>
          <InfoField label="Nome" value="Maria Clara Castilho" />
          <InfoField label="Parentesco" value="Filha" />
          <InfoField label="Data de Nascimento" value="10/05/2018" />
          <InfoField label="CPF" value="987.654.321-00" />
        </FormRow>
      </FormSection>

      {/* Saúde e Segurança */}
      <FormSection title="Saúde e Segurança" subtitle="Informações de saúde e emergência">
        <FormRow>
          <InfoField label="Tipo Sanguíneo" value="O" />
          <InfoField label="Fator RH" value="Positivo" />
        </FormRow>
        <FormRow>
          <InfoField label="Alergias" value="Nenhuma" />
          <InfoField label="Medicações" value="Nenhuma" />
        </FormRow>
        <FormRow>
          <InfoField label="Contato de Emergência" value="Maria Castilho" />
          <InfoField label="Telefone Emergência" value="43 99876-5432" />
        </FormRow>
      </FormSection>

      {/* Dados Empresariais */}
      <FormSection title="Dados Empresariais" subtitle="Vínculo organizacional">
        <FormRow>
          <InfoField label="Empresa" value="HRx Sistemas" />
          <InfoField label="Filial" value="Matriz" />
        </FormRow>
        <FormRow>
          <InfoField label="Departamento" value="Tecnologia" />
          <InfoField label="Centro de Custo" value="TI - Desenvolvimento" />
        </FormRow>
        <FormRow>
          <InfoField label="Matrícula" value="00125" />
          <InfoField label="Remuneração" value="R$ 3.500,00" />
        </FormRow>
      </FormSection>
    </div>
  )
}
