import { TrendingUp, CheckSquare, Save, Clock, Calendar } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Visualização de Metas / Resultados
 * Figma: 5676:43690 (1440x1800) + 5676:56918 (Resultados)
 *
 * Layout com tabs: Visualização | Colaboradores Avaliados
 * + cards de período/prazo + perguntas + feed de atividades
 */

const activities = Array(8).fill(null).map(() => ({
  name: 'João Aquino',
  time: '2 minutos atrás',
  action: 'Criou uma nova pergunta',
  link: 'Como você se encontra hoje?',
}))

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div style={{
      flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px',
      padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px',
    }}>
      <div style={{
        width: '48px', height: '48px', borderRadius: '10px',
        background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>{title}</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>{value}</p>
      </div>
    </div>
  )
}

function PerguntaView({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{
      border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
      display: 'flex', flexDirection: 'column', gap: '16px',
    }}>
      <div>
        <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>{title}</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>{subtitle}</p>
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Descrição</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Ações Necessárias</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Resultados Esperados</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Tipo de Métrica</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>Porcentagem</p></div>
        <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Peso</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>30%</p></div>
        <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Limitador</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>110%</p></div>
      </div>
    </div>
  )
}

export default function VisualizacaoMetas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: '[Nome da Avaliação]', active: true },
        ]} />}
        title="[Nome da Avaliação]"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
          <Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
        </>}
      />

      {/* Info Cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <InfoCard icon={<Clock size={24} color="white" />} title="Período da Avaliação" value="Trimestral" />
        <InfoCard icon={<Calendar size={24} color="white" />} title="Prazo da Avaliação" value="22 de Novembro de 2023" />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        <button style={{
          flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500,
          backgroundColor: '#FFFFFF', color: '#363F72', border: 'none', cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif", borderRight: '1px solid #E4E3FF',
        }}>
          Visualização
        </button>
        <button style={{
          flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500,
          backgroundColor: '#456DFF', color: '#FFFFFF', border: 'none', cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Colaboradores Avaliados
        </button>
      </div>

      {/* Content: Perguntas + Feed */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Left: Perguntas */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>Perguntas</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>Segmento Corporativo</p>
          </div>
          <PerguntaView title="Como você se encontra" subtitle="Pergunta 01" />
          <PerguntaView title="O que você faz em certa situação" subtitle="Pergunta 01" />
        </div>

        {/* Right: Feed */}
        <div style={{ width: '360px', flexShrink: 0 }}>
          <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>Feed de Atividades</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activities.map((act, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Avatar name={act.name} size={40} />
                <div>
                  <p style={{ fontSize: '14px', margin: 0 }}>
                    <span style={{ fontWeight: 500, color: '#363F72' }}>{act.name}</span>
                    <span style={{ color: '#667085' }}> {act.time}</span>
                  </p>
                  <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>
                    {act.action} "<span style={{ color: '#456DFF' }}>{act.link}</span>"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
