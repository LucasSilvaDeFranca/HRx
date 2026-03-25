import { TrendingUp, CheckSquare, Save, Clock, Calendar } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Visualização de Competências
 * Figma: 5681:29072 (1440x1949)
 * Competências com escala Lickert (01-04) + feed
 */

const activities = Array(6).fill({ name: 'João Aquino', time: '2 minutos atrás', action: 'Criou uma nova pergunta', link: 'Como você se encontra hoje?' })

function LickertScale({ value }: { value: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
      <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>Comportamento Observado</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', position: 'relative' }}>
        <div style={{ flex: 1, height: '4px', backgroundColor: '#E4E3FF', position: 'relative' }}>
          <div style={{ width: `${((value - 1) / 3) * 100}%`, height: '4px', backgroundColor: '#456DFF', borderRadius: '2px' }} />
        </div>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} style={{
            position: 'absolute', left: `${((n - 1) / 3) * 100}%`, transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <div style={{
              width: '16px', height: '16px', borderRadius: '50%',
              backgroundColor: n <= value ? '#456DFF' : '#E4E3FF', border: '2px solid #FFF',
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#667085', marginTop: '4px' }}>
        <span>01<br />Não Apresenta</span>
        <span style={{ textAlign: 'center' }}>02<br />Apresenta Eventualmente</span>
        <span style={{ textAlign: 'center' }}>03<br />Apresenta</span>
        <span style={{ textAlign: 'right' }}>04<br />Apresenta Frequentemente</span>
      </div>
    </div>
  )
}

function CompetenciaBlock({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <p style={{ fontSize: '16px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>{title}</p>
      <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px', lineHeight: '1.6' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {[3, 2].map((val, i) => (
        <div key={i} style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
          <p style={{ fontSize: '14px', color: '#667085', lineHeight: '1.6', margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: '12px 0 0' }}>Comportamento Observado</p>
          <LickertScale value={val} />
        </div>
      ))}
    </div>
  )
}

export default function VisualizacaoCompetencias() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[
          { icon: <TrendingUp size={20} color="#344054" /> },
          { label: 'Desempenho' }, { label: 'Avaliação de Competências', active: true },
        ]} />}
        title="Criação de Avaliação de Competências"
        subtitle="[Texto de Acompanhamento]"
        actions={<>
          <Button variant="secondary" size="md">Voltar</Button>
          <Button variant="secondary" size="md" icon={<CheckSquare size={20} />}>Finalizar</Button>
          <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
        </>}
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
        <button style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: '#FFF', color: '#363F72', border: 'none', cursor: 'pointer', borderRight: '1px solid #E4E3FF' }}>Visualização</button>
        <button style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 500, backgroundColor: '#456DFF', color: '#FFF', border: 'none', cursor: 'pointer' }}>Colaboradores Avaliados</button>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: 1 }}>
          <CompetenciaBlock title="[Nome da Competência]" />
          <CompetenciaBlock title="[Nome da Competência]" />
        </div>
        <div style={{ width: '360px', flexShrink: 0 }}>
          <p style={{ fontSize: '18px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>Feed de Atividades</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 16px' }}>[texto de acompanhamento]</p>
          {activities.map((act, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Avatar name={act.name} size={40} />
              <div>
                <p style={{ fontSize: '14px', margin: 0 }}><span style={{ fontWeight: 500, color: '#363F72' }}>{act.name}</span> <span style={{ color: '#667085' }}>{act.time}</span></p>
                <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>{act.action} "<span style={{ color: '#456DFF' }}>{act.link}</span>"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
