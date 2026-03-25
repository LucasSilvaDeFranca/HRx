import { ClipboardList, Download, Settings } from 'lucide-react'
import { Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Dashboard de Resultados
 * Figma: 8127:720 (1280x832)
 * Seções: Demográfico, Resumo, Confiança, Comunicação, Justiça, Pertencimento, Consolidação, etc.
 */

function MetricBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ flex: 1, padding: '16px', border: '1px solid #E4E3FF', borderRadius: '12px', textAlign: 'center' }}>
      <p style={{ fontSize: '12px', color: '#667085', margin: '0 0 4px' }}>{label}</p>
      <p style={{ fontSize: '24px', fontWeight: 700, color, margin: 0 }}>{value}</p>
    </div>
  )
}

function BarChart({ label, value, maxValue, color }: { label: string; value: number; maxValue: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '4px 0' }}>
      <span style={{ fontSize: '12px', color: '#667085', width: '120px', textAlign: 'right' }}>{label}</span>
      <div style={{ flex: 1, height: '20px', backgroundColor: '#F2F4F7', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${(value / maxValue) * 100}%`, height: '100%', backgroundColor: color, borderRadius: '4px' }} />
      </div>
      <span style={{ fontSize: '12px', fontWeight: 500, color: '#363F72', width: '30px' }}>{value}</span>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#FFF', border: '1px solid #E4E3FF', borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ fontSize: '20px', fontWeight: 700, color: '#363F72', margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{title}</p>
      {children}
    </div>
  )
}

export default function DashboardResultados() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <ClipboardList size={20} color="#344054" /> }, { label: 'Pesquisas' }, { label: 'Dashboard de Resultados', active: true }]} />}
        title="Devfy Tecnologia Ltda"
        subtitle="Pesquisa de Engajamento • Resultado"
        actions={<><Button variant="secondary" size="md" icon={<Download size={20} />}>Exportar</Button><Button variant="primary" size="md" icon={<Settings size={20} />}>Configurar</Button></>}
      />

      {/* Demográfico */}
      <Section title="Demográfico">
        <div style={{ display: 'flex', gap: '16px' }}>
          <MetricBox label="Total de Respostas" value="150" color="#456DFF" />
          <MetricBox label="Taxa de Resposta" value="87%" color="#17B26A" />
          <MetricBox label="Média Geral" value="4.2" color="#456DFF" />
          <MetricBox label="eNPS" value="+45" color="#17B26A" />
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 8px' }}>Por Departamento</p>
            <BarChart label="Tecnologia" value={45} maxValue={50} color="#456DFF" />
            <BarChart label="Comercial" value={32} maxValue={50} color="#456DFF" />
            <BarChart label="Marketing" value={28} maxValue={50} color="#456DFF" />
            <BarChart label="RH" value={25} maxValue={50} color="#456DFF" />
            <BarChart label="Financeiro" value={20} maxValue={50} color="#456DFF" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: '0 0 8px' }}>Por Tempo de Empresa</p>
            <BarChart label="0-1 ano" value={38} maxValue={50} color="#7A88FF" />
            <BarChart label="1-3 anos" value={42} maxValue={50} color="#7A88FF" />
            <BarChart label="3-5 anos" value={35} maxValue={50} color="#7A88FF" />
            <BarChart label="5+ anos" value={35} maxValue={50} color="#7A88FF" />
          </div>
        </div>
      </Section>

      {/* Resumo */}
      <Section title="Resumo">
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Confiança', 'Comunicação', 'Justiça', 'Pertencimento'].map((cat) => (
            <div key={cat} style={{ flex: 1, padding: '16px', border: '1px solid #E4E3FF', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: '0 0 4px' }}>{cat}</p>
              <p style={{ fontSize: '24px', fontWeight: 700, color: '#456DFF', margin: 0 }}>{(Math.random() * 2 + 3).toFixed(1)}</p>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#E4E3FF', borderRadius: '3px', marginTop: '8px' }}>
                <div style={{ width: `${Math.random() * 40 + 60}%`, height: '6px', backgroundColor: '#456DFF', borderRadius: '3px' }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Confiança */}
      <Section title="Confiança">
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 12px' }}>Perguntas sobre confiança organizacional</p>
            {['Confio na liderança', 'Me sinto seguro(a)', 'Transparência nas decisões'].map((q, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F2F4F7' }}>
                <span style={{ fontSize: '14px', color: '#363F72' }}>{q}</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#456DFF' }}>{(Math.random() * 2 + 3).toFixed(1)}</span>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <BarChart label="Muito satisfeito" value={45} maxValue={60} color="#17B26A" />
            <BarChart label="Satisfeito" value={55} maxValue={60} color="#456DFF" />
            <BarChart label="Neutro" value={25} maxValue={60} color="#F79009" />
            <BarChart label="Insatisfeito" value={15} maxValue={60} color="#F04438" />
            <BarChart label="Muito insatisfeito" value={10} maxValue={60} color="#D92D20" />
          </div>
        </div>
      </Section>

      {/* Consolidação */}
      <Section title="Consolidação">
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1, padding: '24px', backgroundColor: '#F6FEF9', borderRadius: '12px', border: '1px solid #DCFAE6', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#067647', margin: '0 0 4px' }}>Pontos fortes</p>
            <p style={{ fontSize: '20px', fontWeight: 700, color: '#067647', margin: 0 }}>Pertencimento</p>
          </div>
          <div style={{ flex: 1, padding: '24px', backgroundColor: '#FFFBFA', borderRadius: '12px', border: '1px solid #FEE4E2', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#D92D20', margin: '0 0 4px' }}>Pontos de melhoria</p>
            <p style={{ fontSize: '20px', fontWeight: 700, color: '#D92D20', margin: 0 }}>Comunicação</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
