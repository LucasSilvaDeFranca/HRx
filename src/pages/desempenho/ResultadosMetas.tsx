import { TrendingUp, CheckSquare, Save, Clock, Calendar, TrendingUp as ChartIcon } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Resultados de Metas
 * Figma: 5676:56918 (1440x1084)
 *
 * Layout com tabs (Auto-avaliação | Gestor | Conciliação | Resultados)
 * + cards de resultado (Auto-Avaliação, Gestor, Conciliação) + feed
 */

const activities = [
  { name: 'João Aquino', time: '2 minutos atrás', action: 'Criou uma nova pergunta', link: 'Como você se encontra hoje?' },
  { name: 'João Aquino', time: '2 minutos atrás', action: 'Criou uma nova pergunta', link: 'Como você se encontra hoje?' },
  { name: 'João Aquino', time: '2 minutos atrás', action: 'Criou uma nova pergunta', link: 'Como você se encontra hoje?' },
]

function ResultCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px',
      display: 'flex', alignItems: 'center', gap: '16px',
    }}>
      <div style={{
        width: '48px', height: '48px', borderRadius: '10px',
        background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: 0 }}>{title}</p>
        <p style={{ fontSize: '24px', fontWeight: 500, color: '#456DFF', margin: '4px 0 0' }}>{value}</p>
      </div>
    </div>
  )
}

export default function ResultadosMetas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' },
          { label: 'Avaliação de Metas' },
          { label: 'Conciliação', active: true },
        ]} />}
        title="Avaliação de Metas João Aquino"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Cancelar</Button>
          <Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
      />

      {/* Info Cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{
          flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px',
          padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={24} color="white" />
          </div>
          <div><p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>Período da Avaliação</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>Trimestral</p></div>
        </div>
        <div style={{
          flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px',
          padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calendar size={24} color="white" />
          </div>
          <div><p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>Prazo da Avaliação</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>22 de Novembro de 2023</p></div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        {['Auto-avaliação', 'Avaliação do Gestor 🔒', 'Conciliação 🔒', 'Resultados'].map((tab, i) => (
          <button key={i} style={{
            flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500,
            backgroundColor: i === 3 ? '#456DFF' : '#FFFFFF',
            color: i === 3 ? '#FFFFFF' : '#363F72',
            border: 'none', borderRight: i < 3 ? '1px solid #E4E3FF' : 'none',
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
          }}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Left: Results */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>Resultado Metas</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>Segmento Corporativo</p>
          </div>
          <ResultCard title="Auto-Avaliação" value="12,45" icon={<ChartIcon size={24} color="white" />} />
          <ResultCard title="Avaliação do Gestor" value="12,45" icon={<ChartIcon size={24} color="white" />} />
          <ResultCard title="Conciliação" value="22,45" icon={<ChartIcon size={24} color="white" />} />
        </div>

        {/* Right: Feed */}
        <div style={{ width: '360px', flexShrink: 0 }}>
          <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>Feed de Atividades</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>
          {activities.map((act, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
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

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
