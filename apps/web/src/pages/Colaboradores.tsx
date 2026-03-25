import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UserPlus, Users, UserCheck, User,
  Download, Upload, PlusSquare, FileDown,
  Filter, Settings2, Search,
  ExternalLink, Pencil,
  ArrowLeft, ArrowRight,
} from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader, Modal } from '../components/ui'

/**
 * Colaboradores — Lista principal
 *
 * Figma node: 5660:342072 (1440x1296)
 *
 * Layout:
 * - PageHeader com breadcrumbs + 3 actions (Importar, Exportar, Cadastrar)
 * - 3 MetricCards (flex-1, não fixed width)
 * - Card "Lista de Colaboradores" com:
 *   - Header: título + Filtros + Customizar + Search
 *   - Tabela: checkbox + Nome + Status + Cargo + Remuneração + Email + Ações
 *   - Paginação
 */

const collaborators = [
  { name: 'João Aquino', status: 'Ativo', statusColor: '#17B26A', cargo: 'CEO', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'Juliana Castilho', status: 'Cadastrando', statusColor: '#F79009', cargo: 'Auxiliar Técnico', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'João Aquino', status: 'Ativo', statusColor: '#17B26A', cargo: 'Auxiliar Técnico', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'João Aquino', status: 'Desligado', statusColor: '#F04438', cargo: 'CEO', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'João Aquino', status: 'Ativo', statusColor: '#17B26A', cargo: 'Desenvolvedor', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'João Aquino', status: 'Ativo', statusColor: '#17B26A', cargo: 'Auxiliar de Escritório', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'João Aquino', status: 'Desligado', statusColor: '#F04438', cargo: 'Designer', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
  { name: 'João Aquino', status: 'Desligado', statusColor: '#F04438', cargo: 'Auxiliar Técnico', salary: 'R$ 2.500,00', email: 'julia@hrx.com.br' },
]

const tableHeaders = ['Nome', 'Status ↓', 'Cargo ↓', 'Remuneração ↓', 'Email ↓', 'Ações']

function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: color }} />
      <span style={{
        fontSize: '12px', fontWeight: 500, lineHeight: '18px',
        color: '#344054', fontFamily: "'DM Sans', sans-serif",
      }}>
        {label}
      </span>
    </div>
  )
}

function PaginationButton({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div style={{
      width: '40px', height: '40px', borderRadius: '8px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: active ? '#E4E3FF' : 'transparent',
      cursor: 'pointer',
    }}>
      <span style={{
        fontSize: '14px', fontWeight: 500, lineHeight: '20px',
        color: active ? '#363F72' : '#667085', fontFamily: "'DM Sans', sans-serif",
      }}>
        {children}
      </span>
    </div>
  )
}

export default function Colaboradores() {
  const [importOpen, setImportOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Modal Importação */}
      <Modal
        open={importOpen}
        onClose={() => setImportOpen(false)}
        icon={<FileDown size={24} color="white" />}
        title="Importação de Dados"
        subtitle="Você pode importar vários tipos de dados, selecione o tipo de dado que você gostaria de importar a seguir"
      >
        <Button variant="primary" size="md" fullWidth>Importar Colaborador</Button>
        <Button variant="secondary" size="md" fullWidth>Importar Informações</Button>
        <Button variant="secondary" size="md" fullWidth>Importar Filhos</Button>
        <Button variant="secondary" size="md" fullWidth onClick={() => setImportOpen(false)}>Cancelar</Button>
      </Modal>

      {/* Page Header */}
      <PageHeader
        breadcrumbs={
          <Breadcrumbs items={[
            { icon: <UserPlus size={20} color="#344054" /> },
            { label: 'Colaboradores', active: true },
          ]} />
        }
        title="Colaboradores"
        subtitle="Gerencie todos os colaboradores"
        actions={
          <>
            <Button variant="secondary" size="md" icon={<Download size={20} />} onClick={() => setImportOpen(true)}>Importar</Button>
            <Button variant="secondary" size="md" icon={<Upload size={20} />}>Exportar</Button>
            <Button variant="primary" size="md" icon={<PlusSquare size={20} />} onClick={() => navigate('/colaboradores/cadastrar')}>Cadastrar</Button>
          </>
        }
      />

      {/* Metric Cards — flex-1 (não fixo) */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Colaboradores */}
        <div style={{
          flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
          borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          padding: '24px', display: 'flex', alignItems: 'center', gap: '20px',
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <User size={24} color="white" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            <span style={{ fontSize: '14px', lineHeight: '20px', color: '#282A2F' }}>Colaboradores</span>
            <span style={{ fontSize: '30px', lineHeight: '38px', color: '#363F72' }}>125</span>
          </div>
        </div>

        {/* Quadro de Pessoal */}
        <div style={{
          flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
          borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          padding: '24px', display: 'flex', alignItems: 'center', gap: '20px',
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Users size={24} color="white" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            <span style={{ fontSize: '14px', lineHeight: '20px', color: '#282A2F' }}>Quadro de Pessoal</span>
            <span style={{ fontSize: '30px', lineHeight: '38px', color: '#363F72' }}>R$ 11.500,00</span>
          </div>
        </div>

        {/* Contratações do Mês */}
        <div style={{
          flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
          borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
          padding: '24px', display: 'flex', alignItems: 'center', gap: '20px',
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <UserCheck size={24} color="white" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            <span style={{ fontSize: '14px', lineHeight: '20px', color: '#282A2F' }}>Contratações do Mês</span>
            <span style={{ fontSize: '30px', lineHeight: '38px', color: '#363F72' }}>32</span>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div style={{
        backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
        borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
        overflow: 'hidden',
      }}>
        {/* Table Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
        }}>
          <span style={{
            fontSize: '18px', fontWeight: 500, lineHeight: '28px',
            color: '#363F72', fontFamily: "'DM Sans', sans-serif",
          }}>
            Lista de Colaboradores
          </span>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="secondary" size="sm" icon={<Filter size={20} />}>Filtros</Button>
            <Button variant="secondary" size="sm" icon={<Settings2 size={20} />}>Customizar</Button>
            {/* Search */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 14px', backgroundColor: '#FFFFFF',
              border: '1px solid #E4E3FF', borderRadius: '8px',
              boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
            }}>
              <Search size={20} color="#667085" />
              <span style={{
                fontSize: '14px', fontWeight: 400, lineHeight: '20px',
                color: '#667085', fontFamily: "'DM Sans', sans-serif",
              }}>
                Pesquisar Colaborador
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #E4E3FF' }}>
              <th style={{ padding: '12px 24px', width: '44px' }}>
                <div style={{
                  width: '20px', height: '20px', backgroundColor: '#FFFFFF',
                  border: '1px solid #E4E3FF', borderRadius: '6px',
                }} />
              </th>
              {tableHeaders.map((h, i) => (
                <th key={i} style={{
                  padding: '12px 24px', textAlign: 'left',
                  fontSize: '12px', fontWeight: 500, lineHeight: '18px',
                  color: '#667085', whiteSpace: 'nowrap',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {collaborators.map((c, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #E4E3FF' }}>
                {/* Checkbox */}
                <td style={{ padding: '16px 24px', width: '44px' }}>
                  <div style={{
                    width: '20px', height: '20px', backgroundColor: '#FFFFFF',
                    border: '1px solid #E4E3FF', borderRadius: '6px',
                  }} />
                </td>
                {/* Nome + Avatar */}
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar name={c.name} size={40} />
                    <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#363F72' }}>
                      {c.name}
                    </span>
                  </div>
                </td>
                {/* Status */}
                <td style={{ padding: '16px 24px' }}>
                  <StatusDot color={c.statusColor} label={c.status} />
                </td>
                {/* Cargo */}
                <td style={{ padding: '16px 24px' }}>
                  <Badge variant="blue">{c.cargo}</Badge>
                </td>
                {/* Remuneração */}
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 400, color: '#667085' }}>{c.salary}</span>
                </td>
                {/* Email */}
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 400, color: '#667085' }}>{c.email}</span>
                </td>
                {/* Ações */}
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button
                      onClick={() => navigate('/colaboradores/visualizacao')}
                      style={{
                        width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '8px',
                      }}
                    >
                      <ExternalLink size={20} color="#667085" />
                    </button>
                    <button
                      onClick={() => navigate('/colaboradores/cadastrar')}
                      style={{
                        width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '8px',
                      }}
                    >
                      <Pencil size={20} color="#667085" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 24px 16px', borderTop: '1px solid #E4E3FF',
        }}>
          {/* Previous */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '8px 14px', backgroundColor: '#FFFFFF',
            border: '1px solid #E4E3FF', borderRadius: '8px',
            boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px', fontWeight: 500, color: '#363F72',
          }}>
            <ArrowLeft size={20} color="#363F72" />
            Anterior
          </button>

          {/* Page Numbers */}
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
            <PaginationButton active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton>...</PaginationButton>
            <PaginationButton>8</PaginationButton>
            <PaginationButton>9</PaginationButton>
            <PaginationButton>10</PaginationButton>
          </div>

          {/* Next */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '8px 14px', backgroundColor: '#FFFFFF',
            border: '1px solid #E4E3FF', borderRadius: '8px',
            boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px', fontWeight: 500, color: '#363F72',
          }}>
            Próxima
            <ArrowRight size={20} color="#363F72" />
          </button>
        </div>
      </div>
    </div>
  )
}
