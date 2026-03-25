import { Home, Save, CheckSquare } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * PDI Validação
 * Figma: 5724:19615 (1440x2142)
 * Tabs: PDI | Validação
 * Competências com progresso + área de comentários
 */

const activities = Array(3).fill({ name: 'João Aquino', time: '2 minutos atrás', action: 'Criou uma nova pergunta', link: 'Como você se encontra hoje?' })

function ProgressSlider({ percent }: { percent: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Progresso</p>
      <div style={{ position: 'relative', width: '100%', height: '8px' }}>
        <div style={{ width: '100%', height: '8px', borderRadius: '4px', backgroundColor: '#E4E3FF' }} />
        <div style={{ width: `${percent}%`, height: '8px', borderRadius: '4px', backgroundColor: '#456DFF', position: 'absolute', top: 0, left: 0 }} />
        <div style={{ position: 'absolute', top: '-4px', left: `calc(${percent}% - 8px)`, width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#FFF', border: '2px solid #456DFF' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '14px', fontWeight: 500, color: '#17B26A' }}>0%</span><span style={{ fontSize: '14px', fontWeight: 500, color: '#456DFF' }}>{percent}%</span></div>
      <p style={{ fontSize: '12px', color: '#667085' }}>[Texto de Explicação]</p>
    </div>
  )
}

export default function PDIValidacao() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <Home size={20} color="#344054" /> }, { label: 'Desempenho' }, { label: '...' }, { label: 'João Aquino' }, { label: 'Validação', active: true }]} />}
        title="Validação"
        subtitle="[Texto de Acompanhamento]"
        actions={<><Button variant="secondary" size="md">Cancelar</Button><Button variant="secondary" size="md" icon={<Save size={20} />}>Salvar</Button><Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button></>}
      />
      {/* Tabs */}
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        <button style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: '#456DFF', color: '#FFF', border: 'none', cursor: 'pointer' }}>PDI</button>
        <button style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: '#FFF', color: '#363F72', border: 'none', borderLeft: '1px solid #E4E3FF', cursor: 'pointer' }}>Validação</button>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '12px', color: '#667085' }}>PDI acordado na reunião de conciliação em <span style={{ fontWeight: 500, color: '#363F72' }}>22/06/2023</span></p>
          {/* Competência com progresso */}
          {[1, 2].map((n) => (
            <div key={n} style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div><p style={{ fontSize: '16px', fontWeight: 500, color: '#363F72', margin: 0 }}>[Nome da Competência]</p><p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>[Descrição da Competência]</p></div>
              <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>What</p><p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
              <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>How</p><p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
              <ProgressSlider percent={80} />
              <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Atualizações</p><p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p style={{ fontSize: '12px', color: '#667085', margin: '8px 0 0' }}>Comentário postado em <span style={{ fontWeight: 500, textDecoration: 'underline' }}>22/06/2023</span></p></div>
            </div>
          ))}
          {/* Área de comentários */}
          <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>Área para comentários</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Comentários e Justificativas</label>
              <textarea placeholder="Comentários sobre sua decisão" style={{ width: '100%', minHeight: '60px', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', resize: 'vertical' }} />
            </div>
            <div style={{ backgroundColor: '#F9FAFB', borderRadius: '8px', padding: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Comentário de João Aquino</p>
              <p style={{ fontSize: '12px', color: '#667085', margin: '0 0 8px' }}>Atualizada em 22/06/2023</p>
              <p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div style={{ width: '360px', flexShrink: 0 }}>
          <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>Feed de Atividades</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>
          {activities.map((act, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Avatar name={act.name} size={40} />
              <div><p style={{ fontSize: '14px', margin: 0 }}><span style={{ fontWeight: 500, color: '#363F72' }}>{act.name}</span> <span style={{ color: '#667085' }}>{act.time}</span></p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>{act.action} "<span style={{ color: '#456DFF' }}>{act.link}</span>"</p></div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="secondary" size="md" icon={<Save size={20} />}>Salvar</Button>
        <Button variant="primary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
      </div>
    </div>
  )
}
