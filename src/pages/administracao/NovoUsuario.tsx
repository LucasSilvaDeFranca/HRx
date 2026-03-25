import { Building2, Save, Upload, Mail } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Novo Usuário
 * Figma: 5685:176436 (1440x1662)
 */

function Toggle({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0' }}>
      <div style={{
        width: '44px', height: '24px', borderRadius: '12px',
        backgroundColor: checked ? '#456DFF' : '#E4E3FF',
        position: 'relative', cursor: 'pointer',
      }}>
        <div style={{
          width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFFFFF',
          position: 'absolute', top: '2px', left: checked ? '22px' : '2px',
          boxShadow: '0px 1px 2px rgba(16,24,40,0.1)',
        }} />
      </div>
      <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
    </div>
  )
}

function CheckboxOption({ label, description, checked }: { label: string; description: string; checked?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px 0' }}>
      <div style={{
        width: '20px', height: '20px', borderRadius: '6px', flexShrink: 0, marginTop: '2px',
        border: checked ? 'none' : '2px solid #E4E3FF',
        backgroundColor: checked ? '#456DFF' : '#FFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && <span style={{ color: '#FFF', fontSize: '12px' }}>✓</span>}
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>{label}</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>{description}</p>
      </div>
    </div>
  )
}

export default function NovoUsuario() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Building2 size={20} color="#344054" /> },
          { label: 'Administração' },
          { label: 'Novo Usuário', active: true },
        ]} />}
        title="Novo Usuário"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px',
      }}>
        {/* Informações Principais */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Informações Principais</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input label="Nome Completo" placeholder="Nome Completo" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Email</label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px',
                boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
              }}>
                <Mail size={20} color="#667085" />
                <input defaultValue="juliana@hrx.com" style={{
                  flex: 1, border: 'none', outline: 'none', fontSize: '16px',
                  fontFamily: "'DM Sans', sans-serif", color: '#282A2F',
                }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Foto de Perfil</label>
              <div style={{
                border: '1px solid #EAECF0', borderRadius: '12px',
                padding: '24px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '12px',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '8px',
                  border: '1px solid #E4E3FF', backgroundColor: '#FFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Upload size={20} color="#667085" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '14px', color: '#456DFF', fontWeight: 500 }}>Clique ou arraste e solte</span>
                  <span style={{ fontSize: '14px', color: '#475467' }}> aqui seu arquivo</span>
                  <p style={{ fontSize: '12px', color: '#475467', marginTop: '4px' }}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

        {/* Tipo de Usuário */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Tipo de Usuário</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1 }}>
            <CheckboxOption label="Administrador" description="[Escrever o que o usuário vai ter acesso]" />
            <CheckboxOption label="Gerente de Colaboradores" description="[Escrever o que o usuário vai ter acesso]" checked />
            <CheckboxOption label="Editor" description="[Escrever o que o usuário vai ter acesso]" />
            <CheckboxOption label="Visualizador" description="[Escrever o que o usuário vai ter acesso]" />
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

        {/* Permissões */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Permissões</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Usuários */}
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Usuários</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 8px' }}>[texto de acompanhamento]</p>
              <Toggle label="Editar Usuários" />
              <Toggle label="Adicionar Novos Usuário" checked />
              <Toggle label="Excluir Usuários" />
            </div>

            <div style={{ height: '1px', backgroundColor: '#F2F4F7' }} />

            {/* Colaboradores */}
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Colaboradores</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 8px' }}>[texto de acompanhamento]</p>
              <Toggle label="Cadastrar Novos Colaboradores" />
              <Toggle label="Excluir Colaboradores" checked />
            </div>

            <div style={{ height: '1px', backgroundColor: '#F2F4F7' }} />

            {/* Desempenho */}
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Desempenho</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 8px' }}>[texto de acompanhamento]</p>
              <Toggle label="Criar Novos Avaliações de Meta" checked />
              <Toggle label="Criar Novos Avaliações de Competência" />
              <Toggle label="Acessar e Visualizar Resultados" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
