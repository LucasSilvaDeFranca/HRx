import { Network, Save, PlusSquare } from 'lucide-react'
import { Button,  Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Cadastrar Steps
 * Figma: 5686:305769 (1440x1119)
 */

export default function CadastrarSteps() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Network size={20} color="#344054" /> },
          { label: 'Hierarquia' },
          { label: 'Cadastrar' },
          { label: 'Steps', active: true },
        ]} />}
        title="Cadastrar Steps"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px',
      }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Steps Salariais</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
          </div>

          <div style={{
            flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px',
            padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px',
          }}>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>Qual vai ser o aumento percentual</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>[texto de acompanhamento]</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  fontSize: '16px', color: '#363F72', padding: '10px 12px',
                  backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF',
                  borderRadius: '8px 0 0 8px', borderRight: 'none',
                }}>
                  %
                </span>
                <div style={{ flex: 1 }}>
                  <input
                    placeholder=""
                    style={{
                      width: '100%', padding: '10px 14px',
                      border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0',
                      boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                      fontSize: '16px', fontFamily: "'DM Sans', sans-serif",
                      color: '#282A2F', outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>Amplitude</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>

              {['01', '02', '03'].map((step) => (
                <div key={step} style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: '0 0 6px' }}>Step {step}</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '16px', color: '#363F72', padding: '10px 12px',
                      backgroundColor: '#F9FAFB', border: '1px solid #E4E3FF',
                      borderRadius: '8px 0 0 8px', borderRight: 'none',
                    }}>
                      R$
                    </span>
                    <input
                      placeholder=""
                      style={{
                        flex: 1, padding: '10px 14px',
                        border: '1px solid #E4E3FF', borderRadius: '0 8px 8px 0',
                        boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                        fontSize: '16px', fontFamily: "'DM Sans', sans-serif",
                        color: '#282A2F', outline: 'none',
                      }}
                    />
                  </div>
                  {step === '01' && (
                    <p style={{ fontSize: '12px', color: '#667085', marginTop: '4px' }}>
                      Insira o valor do primeiro step para liberar os seguintes
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

            <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
              Adicionar Step
            </Button>
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
