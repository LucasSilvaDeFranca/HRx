import { useState } from 'react'
import { GitFork, ArrowDown, Globe, Search, Trash2, Pencil, Plus, User, Mail } from 'lucide-react'
import { Avatar, Button, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Organograma — Vertical + Radial + Menu Lateral
 * Figma: 5685:180682 (Vertical), 5686:300202 (Radial), 5686:190129 (Menu Lateral)
 */

interface OrgNode {
  title: string
  name: string
  date: string
  email: string
  children?: OrgNode[]
}

const orgData: OrgNode = {
  title: 'Creative Code', name: '', date: '', email: '',
  children: [
    {
      title: 'CEO', name: 'Lucas Gondin', date: 'Admissão 08/06/2023', email: 'lucasgondin@hrx.com',
      children: [
        {
          title: 'Gerente', name: 'Lucas Gondin', date: 'Admissão 08/06/2023', email: 'lucasgondin@hrx.com',
          children: [
            { title: 'Developer', name: 'Lucas Gondin', date: 'Admissão 08/06/2023', email: 'lucasgondin@hrx.com' },
          ],
        },
        {
          title: 'CFO', name: 'Lucas Gondin', date: 'Admissão 08/06/2023', email: 'lucasgondin@hrx.com',
          children: [
            { title: 'Outsourcing', name: 'Lucas Gondin', date: 'Admissão 08/06/2023', email: 'lucasgondin@hrx.com' },
          ],
        },
      ],
    },
  ],
}


function OrgCard({ node, level }: { node: OrgNode; level: number }) {
  const isCompany = level === 0
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
      {/* Card */}
      <div style={{
        border: '1px solid #E4E3FF', borderRadius: '12px', padding: isCompany ? '16px 24px' : '16px',
        backgroundColor: '#FFFFFF', minWidth: isCompany ? '280px' : '240px',
        display: 'flex', flexDirection: 'column', gap: '12px',
        boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          {isCompany ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <User size={24} color="#456DFF" />
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{node.title}</span>
            </div>
          ) : (
            <>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>{node.title}</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Trash2 size={16} color="#98A2B3" /></button>
                <button style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Pencil size={16} color="#98A2B3" /></button>
              </div>
            </>
          )}
        </div>
        {/* Person info */}
        {node.name && (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '8px', borderRadius: '8px', backgroundColor: '#F9FAFB' }}>
            <User size={20} color="#667085" />
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#363F72', margin: 0 }}>{node.name}</p>
              <p style={{ fontSize: '12px', color: '#667085', margin: '2px 0 0' }}>{node.date}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <Mail size={12} color="#667085" />
                <span style={{ fontSize: '12px', color: '#667085' }}>{node.email}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add button */}
      <div style={{ width: '2px', height: '16px', backgroundColor: '#E4E3FF' }} />
      <button style={{
        width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #E4E3FF',
        backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: '#667085',
      }}>
        <Plus size={14} />
      </button>

      {/* Nivel label */}
      {level < 3 && node.children && (
        <>
          <div style={{ width: '2px', height: '16px', backgroundColor: '#E4E3FF' }} />
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0',
            width: '100%', position: 'relative',
          }}>
            <span style={{
              fontSize: '12px', fontWeight: 500, color: '#667085',
              backgroundColor: '#F8FAFB', padding: '4px 12px',
              border: '1px dashed #E4E3FF', borderRadius: '4px',
              position: 'absolute', left: '-120px',
            }}>
              Nível {String(level + 1).padStart(2, '0')}
            </span>
            <div style={{ flex: 1, height: '1px', borderTop: '1px dashed #E4E3FF' }} />
          </div>
        </>
      )}

      {/* Children */}
      {node.children && (
        <div style={{ display: 'flex', gap: '32px', marginTop: '8px' }}>
          {node.children.map((child, i) => (
            <OrgCard key={i} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function SidePanel({ onClose: _onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, width: '320px', height: '100vh',
      backgroundColor: '#FFFFFF', boxShadow: '-4px 0 24px rgba(16,24,40,0.08)',
      zIndex: 20, display: 'flex', flexDirection: 'column', overflow: 'auto',
    }}>
      {/* Header bg */}
      <div style={{ height: '80px', backgroundColor: '#456DFF', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '-32px', left: '24px' }}>
          <Avatar name="Juliana Castilho" size={64} />
        </div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '8px' }}>
          {[Mail, Globe, Pencil].map((Icon, i) => (
            <button key={i} style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={16} color="white" />
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '48px 24px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <p style={{ fontSize: '20px', fontWeight: 700, color: '#363F72', margin: 0 }}>Juliana Castilho</p>
          <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>juliana@hrx.com</p>
        </div>

        {[
          { label: 'Data de Admissão', value: '28/08/1994' },
          { label: 'Nível', value: 'C Level' },
          { label: 'Cargo', value: 'Desenvolvedor' },
          { label: 'Grupo', value: 'Desenvolvedor' },
          { label: 'Tipo de Contratação', value: 'CLT' },
        ].map((item, i) => (
          <div key={i} style={{ borderBottom: i < 4 ? '1px solid #F2F4F7' : 'none', paddingBottom: '12px' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>{item.label}</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0' }}>{item.value}</p>
          </div>
        ))}

        <div>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#363F72', margin: 0 }}>Tipo de Contratação</p>
          <ul style={{ fontSize: '14px', color: '#667085', margin: '4px 0 0', paddingLeft: '20px' }}>
            <li>Periculosidade</li>
            <li>Insalubridade</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Organograma() {
  const [view, setView] = useState<'vertical' | 'radial'>('vertical')
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <GitFork size={20} color="#344054" /> }, { label: 'Organograma', active: true }]} />}
        title="Organograma"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button
            variant={view === 'vertical' ? 'primary' : 'secondary'} size="sm"
            icon={<ArrowDown size={16} />}
            onClick={() => setView('vertical')}
          >
            Vertical
          </Button>
          <Button
            variant={view === 'radial' ? 'primary' : 'secondary'} size="sm"
            icon={<Globe size={16} />}
            onClick={() => setView('radial')}
          >
            Radial
          </Button>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '8px 14px', backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
            borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          }}>
            <Search size={20} color="#667085" />
            <span style={{ fontSize: '14px', color: '#667085' }}>Search</span>
          </div>
        </>}
      />

      {view === 'vertical' ? (
        /* Vertical Org Chart */
        <div
          style={{
            backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
            borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
            padding: '48px', display: 'flex', justifyContent: 'center', overflow: 'auto',
            minHeight: '600px', cursor: 'pointer',
          }}
          onClick={() => setPanelOpen(!panelOpen)}
        >
          <OrgCard node={orgData} level={0} />
        </div>
      ) : (
        /* Radial View */
        <div style={{
          backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
          borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          padding: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center',
          minHeight: '600px', position: 'relative',
        }}>
          {/* Dashed circle */}
          <div style={{
            width: '500px', height: '500px', borderRadius: '50%',
            border: '2px dashed #E4E3FF', position: 'relative',
          }}>
            {/* Center node */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '80px', height: '80px', borderRadius: '50%',
              backgroundColor: '#7A88FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '12px', fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
            }}>
              Presidente
            </div>

            {/* Surrounding nodes */}
            {[
              { label: 'Direx', angle: 0 }, { label: 'Direx', angle: 40 },
              { label: 'Direx', angle: 80 }, { label: 'Direx', angle: 120 },
              { label: 'Direx', angle: 160 }, { label: 'Direx', angle: 200 },
              { label: 'Direx', angle: 240 }, { label: 'Direx 1', angle: 280 },
              { label: 'Direx', angle: 320 },
            ].map((node, i) => {
              const r = 200
              const rad = (node.angle * Math.PI) / 180
              const x = 250 + r * Math.cos(rad) - 30
              const y = 250 + r * Math.sin(rad) - 30
              return (
                <div key={i} style={{
                  position: 'absolute', left: `${x}px`, top: `${y}px`,
                  width: '60px', height: '60px', borderRadius: '50%',
                  backgroundColor: '#A0A8FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '10px', fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
                  textAlign: 'center',
                }}>
                  {node.label}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Side Panel */}
      {panelOpen && <SidePanel onClose={() => setPanelOpen(false)} />}
    </div>
  )
}
