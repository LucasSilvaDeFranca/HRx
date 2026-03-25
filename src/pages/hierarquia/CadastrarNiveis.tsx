import { Network, Save, Trash2, GripVertical, PlusSquare, DollarSign } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'


/**
 * Cadastrar Níveis e Salários
 * Figma: 5686:305168 (1440x1020)
 */

export default function CadastrarNiveis() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <Network size={20} color="#344054" /> },
          { label: 'Hierarquia' },
          { label: 'Cadastrar' },
          { label: 'Níveis e Salários', active: true },
        ]} />}
        title="Cadastrar Níveis e Salários"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md" icon={<DollarSign size={20} />}>Mudar regra de remuneração</Button>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px',
      }}>
        {/* Nível Item */}
        <div style={{
          border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Nome do Nível]</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
              <GripVertical size={20} color="#98A2B3" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ width: '200px' }}>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Informações Principais</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p>
            </div>
            <div style={{ flex: 1 }}>
              <Input label="Nome do Nível" placeholder="Inserir..." />
              <p style={{ fontSize: '14px', color: '#667085', marginTop: '8px' }}>[Texto de Acompanhamento]</p>
            </div>
          </div>
        </div>

        {/* Add button */}
        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>
          Adicionar Nível
        </Button>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
