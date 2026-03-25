import { TrendingUp, Save } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'
import FormSection from '../../components/ui/FormSection'

/**
 * Configurações Gerais de Desempenho
 * Figma: 5659:26371 (1440x1020)
 */

export default function ConfiguracoesGerais() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'Configurações Gerais', active: true },
        ]} />}
        title="Configurações Gerais"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      <FormSection title="Limitação de Avaliações" subtitle="[texto de acompanhamento]">
        <Input label="Limite Mínimo de Perguntas" placeholder="Inserir quantidade" />
        <Input label="Limite Máximo de Perguntas" placeholder="Inserir quantidade" />
      </FormSection>

      <FormSection title="Peso das Avaliações" subtitle="[texto de acompanhamento]">
        <Input label="Peso da Avaliação de Competências" placeholder="Inserir quantidade" />
        <Input label="Peso da Avaliação de Metas" placeholder="Inserir quantidade" />
      </FormSection>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
