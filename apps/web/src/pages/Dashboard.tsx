import {
  Users, Award, Umbrella, Banknote,
  BarChart3, Pencil, Filter, ExternalLink,
  CheckCircle2, XCircle, Hourglass,
} from 'lucide-react'
import {
  MetricCard, Card, CardHeader, Avatar, Badge, Button,
  Breadcrumbs, PageHeader, PieChart, ProgressBar,
} from '../components/ui'

/**
 * HRx Dashboard — Pixel-perfect do Figma
 *
 * No Figma, TODOS os cards estão num ÚNICO container:
 *   display: flex; flex-wrap: wrap; gap: 16px; align-content: center;
 *
 * As larguras fixas fazem o wrap natural:
 * - 4 × 262px + 3 × 16px = 1096px (metrics row)
 * - 540px + 262px + 262px + 2 × 16px = 1096px (lists row)
 * - 2 × 540px + 16px = 1096px (charts row)
 *
 * Gap entre PageHeader e cards: 32px
 */

const myAreasData = [
  { name: 'João Aquino', area: '01 - Direção' },
  { name: 'Juliana Castilho', area: '01 - Direção' },
  { name: 'João Aquino', area: '03 - Coordenação' },
  { name: 'João Aquino', area: '04 - Analista' },
  { name: 'João Aquino', area: '02 - Gerência' },
  { name: 'João Aquino', area: '01 - Direção' },
  { name: 'João Aquino', area: '01 - Direção' },
]

const activeCollaborators = [
  'João Aquino', 'Juliana Castilho', 'João Aquino', 'João Aquino',
  'João Aquino', 'João Aquino', 'João Aquino',
]

const vacationCollaborators = [
  'Olivia Rhye', 'Juliana Castilho', 'João Aquino', 'João Aquino',
  'João Aquino', 'João Aquino', 'João Aquino',
]

function AvatarList({ names }: { names: string[] }) {
  return (
    <div className="hide-scrollbar" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
      {names.map((name, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            borderBottom: '1px solid #E4E3FF',
          }}
        >
          <Avatar name={name} size={40} />
          <span style={{
            fontSize: '14px', fontWeight: 500, lineHeight: '20px',
            color: '#363F72', fontFamily: "'DM Sans', sans-serif",
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            flex: 1, minWidth: 0,
          }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Page Header */}
      <PageHeader
        breadcrumbs={
          <Breadcrumbs items={[
            { icon: <BarChart3 size={20} className="text-gray-700" /> },
            { label: 'Dashboard', active: true },
          ]} />
        }
        title="Dashboard"
        subtitle="[Texto de Acompanhamento]"
        actions={
          <Button variant="primary" size="md" icon={<Pencil size={20} />}>
            Editar Dashboard
          </Button>
        }
      />

      {/* === SINGLE flex-wrap container — como no Figma === */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignContent: 'flex-start',
      }}>
        {/* ROW 1: 4 Metric Cards (262px each) */}
        <MetricCard icon={<Users size={24} color="white" />} label="Total de Colaboradores" value="125" />
        <MetricCard icon={<Award size={24} color="white" />} label="Cargos" value="32" />
        <MetricCard icon={<Umbrella size={24} color="white" />} label="Colabores de Férias" value="10" />
        <MetricCard icon={<Banknote size={24} color="white" />} label="Faixa Salarial Média" value="R$ 3.239,00" />

        {/* ROW 2: Minha Áreas (540) + Ativos (262) + Férias (262) */}
        <Card className="flex flex-col" style={{ width: '540px', height: '488px' }}>
          <CardHeader
            icon={<Users size={18} style={{ color: '#363F72' }} />}
            title="Minha Áreas"
            action={<Button variant="secondary" size="sm" icon={<Filter size={20} />}>Filtros</Button>}
          />
          <div className="hide-scrollbar" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
            {myAreasData.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 24px', borderBottom: '1px solid #E4E3FF',
              }}>
                <Avatar name={item.name} size={40} />
                <span style={{
                  fontSize: '14px', fontWeight: 500, lineHeight: '20px',
                  color: '#363F72', fontFamily: "'DM Sans', sans-serif",
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  flex: 1, minWidth: 0,
                }}>
                  {item.name}
                </span>
                <Badge variant="blue">{item.area}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col" style={{ width: '262px', height: '488px' }}>
          <CardHeader icon={<Users size={18} style={{ color: '#363F72' }} />} title="Colaboradores Ativos" />
          <AvatarList names={activeCollaborators} />
        </Card>

        <Card className="flex flex-col" style={{ width: '262px', height: '488px' }}>
          <CardHeader icon={<Umbrella size={18} style={{ color: '#363F72' }} />} title="Colaboradores de Férias" />
          <AvatarList names={vacationCollaborators} />
        </Card>

        {/* ROW 3: PDI Pie (540) + Metas Pie (540) */}
        <Card className="flex flex-col" style={{ width: '540px', height: '488px' }}>
          <CardHeader
            icon={<BarChart3 size={18} style={{ color: '#363F72' }} />}
            title="PDI Status"
            action={<Button variant="secondary" size="sm" icon={<ExternalLink size={20} />}>Ver avaliações</Button>}
          />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PieChart segments={[
              { label: 'Atingidas', percent: 65, color: '#456DFF' },
              { label: 'Não Atingidas', percent: 35, color: '#B9E6FE' },
            ]} />
          </div>
        </Card>

        <Card className="flex flex-col" style={{ width: '540px', height: '488px' }}>
          <CardHeader
            icon={<BarChart3 size={18} style={{ color: '#363F72' }} />}
            title="Metas Concluídas"
            action={<Button variant="secondary" size="sm" icon={<ExternalLink size={20} />}>Ver avaliações</Button>}
          />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PieChart segments={[
              { label: 'Concluídas', percent: 45, color: '#456DFF' },
              { label: 'Em andamento', percent: 30, color: '#B9E6FE' },
              { label: 'Não alcançadas', percent: 25, color: '#E4E3FF' },
            ]} />
          </div>
        </Card>

        {/* ROW 4: PDI Progress (540) + Metas Progress (540) */}
        <Card className="flex flex-col" style={{ width: '540px', height: '362px' }}>
          <CardHeader
            icon={<BarChart3 size={18} style={{ color: '#363F72' }} />}
            title="PDI Status"
            action={<Button variant="secondary" size="sm" icon={<ExternalLink size={20} />}>Ver avaliações</Button>}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
            <ProgressBar label="Atingidas" value="22%" percent={57.5} variant="success" icon={<CheckCircle2 size={20} color="#067647" />} />
            <ProgressBar label="Não Atingidas" value="78%" percent={74.66} variant="error" icon={<XCircle size={20} color="#D92D20" />} />
          </div>
        </Card>

        <Card className="flex flex-col" style={{ width: '540px', height: '362px' }}>
          <CardHeader
            icon={<BarChart3 size={18} style={{ color: '#363F72' }} />}
            title="Metas Concluídas"
            action={<Button variant="secondary" size="sm" icon={<ExternalLink size={20} />}>Ver avaliações</Button>}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
            <ProgressBar label="Concluídas" value="22%" percent={57.5} variant="success" icon={<CheckCircle2 size={20} color="#067647" />} />
            <ProgressBar label="Em Andamento" value="78%" percent={40.25} variant="warning" icon={<Hourglass size={20} color="#F79009" />} />
            <ProgressBar label="Não Alcançadas" value="78%" percent={74.66} variant="error" icon={<XCircle size={20} color="#D92D20" />} />
          </div>
        </Card>
      </div>
    </div>
  )
}
