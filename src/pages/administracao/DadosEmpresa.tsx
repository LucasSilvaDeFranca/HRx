import { Building2, Save, Upload, Mail } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Dados da Empresa
 * Figma: 5703:56979 (1440x1020)
 */

export default function DadosEmpresa() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Building2 size={20} color="#344054" /> },
          { label: 'Administração' },
          { label: 'Dados da Empresa', active: true },
        ]} />}
        title="Dados da Empresa"
        subtitle="[Texto de Acompanhamento]"
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
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Dados da Empresa</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input label="Nome da Empresa" placeholder="Nome Completo" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Email da Empresa</label>
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
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Logo da Empresa</label>
              <div style={{
                border: '1px solid #EAECF0', borderRadius: '12px',
                padding: '24px', display: 'flex', flexDirection: 'column',
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
                  <span style={{ fontSize: '14px', color: '#456DFF', fontWeight: 500 }}>Clique ou arraste e solte</span>
                  <span style={{ fontSize: '14px', color: '#475467' }}> aqui seu arquivo</span>
                  <p style={{ fontSize: '12px', color: '#475467', marginTop: '4px' }}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
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
