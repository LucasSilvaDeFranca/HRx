import { TrendingUp, CheckSquare, Save, Clock, Calendar, TrendingUp as ChartIcon } from 'lucide-react'
import { Avatar, Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Resposta de Metas — Colaborador / Gestor (mesma estrutura, tab diferente)
 * Figma: 5676:51850 (Colaborador) + 5676:55680 (Gestor)
 * Tabs: Auto-avaliação | Avaliação do Gestor | Conciliação | Resultados
 * Perguntas com inputs de percentual + comentários + resultados
 */

const activities = Array(8).fill({ name: 'João Aquino', time: '2 minutos atrás', action: 'Criou uma nova pergunta', link: 'Como você se encontra hoje?' })

function PerguntaResposta({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>{title}</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>{subtitle}</p>
      </div>
      <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Descrição</p><p style={{ fontSize: '14px', color: '#667085', margin: 0, lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
      <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Ações Necessárias</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p></div>
      <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Resultados Esperados</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p></div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Tipo de Métrica</p><p style={{ fontSize: '14px', color: '#667085' }}>Porcentagem</p></div>
        <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Peso</p><p style={{ fontSize: '14px', color: '#667085' }}>30%</p></div>
        <div><p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Limitador</p><p style={{ fontSize: '14px', color: '#667085' }}>110%</p></div>
      </div>
      <Input label="Percentual Atingido" placeholder="Inserir Percentual" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Comentários e Justificativas</label>
        <textarea placeholder="Comentários sobre sua decisão" style={{ width: '100%', minHeight: '60px', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', resize: 'vertical' }} />
      </div>
      <div style={{ display: 'flex', gap: '24px', padding: '12px', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
        <div><p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Percentual Mínimo</p><p style={{ fontSize: '14px', fontWeight: 500, color: '#456DFF', margin: 0 }}>45%</p></div>
        <div><p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Percentual de Atingimento</p><p style={{ fontSize: '14px', fontWeight: 500, color: '#667085', margin: 0 }}>--%</p></div>
        <div><p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Percentual Ponderado</p><p style={{ fontSize: '14px', fontWeight: 500, color: '#667085', margin: 0 }}>--%</p></div>
      </div>
    </div>
  )
}

export default function RespostaMetasColaborador() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <TrendingUp size={20} color="#344054" /> }, { label: 'Desempenho' }, { label: 'Avaliação de Metas' }, { label: 'João Aquino', active: true }]} />}
        title="Avaliação de Metas João Aquino"
        subtitle="[Texto de Acompanhamento]"
        actions={<><Button variant="secondary" size="md">Cancelar</Button><Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button><Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button></>}
      />
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={24} color="white" /></div>
          <div><p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>Período da Avaliação</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>Trimestral</p></div>
        </div>
        <div style={{ flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Calendar size={24} color="white" /></div>
          <div><p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>Prazo da Avaliação</p><p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>22 de Novembro de 2023</p></div>
        </div>
      </div>
      <div style={{ display: 'flex', border: '1px solid #E4E3FF', borderRadius: '8px', overflow: 'hidden' }}>
        {['Auto-avaliação', 'Avaliação do Gestor 🔒', 'Conciliação 🔒', 'Resultados'].map((tab, i) => (
          <button key={i} style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: i === 0 ? '#456DFF' : '#FFF', color: i === 0 ? '#FFF' : '#363F72', border: 'none', borderRight: i < 3 ? '1px solid #E4E3FF' : 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>{tab}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div><p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: 0 }}>Perguntas</p><p style={{ fontSize: '14px', color: '#667085' }}>Segmento Corporativo</p></div>
          <PerguntaResposta title="Como você se encontra" subtitle="Pergunta 01" />
          <PerguntaResposta title="O que você faz em certa situação" subtitle="Pergunta 01" />
          <div style={{ backgroundColor: '#F9FAFB', borderRadius: '12px', padding: '24px', marginTop: '16px' }}>
            <p style={{ fontSize: '20px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>Resultados</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[Objetivo da Avaliação]</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px', padding: '16px', backgroundColor: '#FFF', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#E4E3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChartIcon size={20} color="#456DFF" /></div>
                <div><p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Percentual de Atingimento</p><p style={{ fontSize: '20px', fontWeight: 700, color: '#456DFF', margin: 0 }}>43,55%</p></div>
              </div>
              <div style={{ flex: 1, border: '1px solid #E4E3FF', borderRadius: '12px', padding: '16px', backgroundColor: '#FFF', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#E4E3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChartIcon size={20} color="#456DFF" /></div>
                <div><p style={{ fontSize: '12px', color: '#667085', margin: 0 }}>Percentual Ponderado</p><p style={{ fontSize: '20px', fontWeight: 700, color: '#456DFF', margin: 0 }}>112,45%</p></div>
              </div>
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
        <Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
