import type { ReactNode } from 'react'
import { Filter, Search, ArrowLeft, ArrowRight } from 'lucide-react'
import Button from './Button'

/**
 * HRx DataTable — Tabela reutilizável pixel-perfect
 *
 * Usado em: Colaboradores, Desempenho, PDI, 9Box, etc.
 * Card com header (título + filtros + search) + tabela + paginação
 */

interface Column {
  key: string
  header: string
  render?: (value: unknown, row: Record<string, unknown>) => ReactNode
  width?: string
}

interface DataTableProps {
  title: string
  columns: Column[]
  data: Record<string, unknown>[]
  actions?: ReactNode
  showCheckbox?: boolean
  showSearch?: boolean
  searchPlaceholder?: string
}

function PaginationButton({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <div style={{
      width: '40px', height: '40px', borderRadius: '8px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: active ? '#E4E3FF' : 'transparent', cursor: 'pointer',
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

export default function DataTable({
  title, columns, data, actions,
  showCheckbox = true, showSearch = true,
  searchPlaceholder = 'Pesquisar Colaborador',
}: DataTableProps) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF', border: '1px solid #E4E3FF',
      borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 24px',
      }}>
        <span style={{
          fontSize: '18px', fontWeight: 500, lineHeight: '28px',
          color: '#363F72', fontFamily: "'DM Sans', sans-serif",
        }}>
          {title}
        </span>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {actions}
          <Button variant="secondary" size="sm" icon={<Filter size={20} />}>Filtros</Button>
          {showSearch && (
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
                {searchPlaceholder}
              </span>
            </div>
          )}
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #E4E3FF' }}>
            {showCheckbox && (
              <th style={{ padding: '12px 24px', width: '44px' }}>
                <div style={{
                  width: '20px', height: '20px', backgroundColor: '#FFFFFF',
                  border: '1px solid #E4E3FF', borderRadius: '6px',
                }} />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} style={{
                padding: '12px 24px', textAlign: 'left', width: col.width,
                fontSize: '12px', fontWeight: 500, lineHeight: '18px',
                color: '#667085', whiteSpace: 'nowrap',
              }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #E4E3FF' }}>
              {showCheckbox && (
                <td style={{ padding: '16px 24px', width: '44px' }}>
                  <div style={{
                    width: '20px', height: '20px', backgroundColor: '#FFFFFF',
                    border: '1px solid #E4E3FF', borderRadius: '6px',
                  }} />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} style={{ padding: '16px 24px' }}>
                  {col.render ? col.render(row[col.key], row) : (
                    <span style={{ fontSize: '14px', fontWeight: 400, color: '#667085' }}>
                      {String(row[col.key] ?? '')}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px 16px', borderTop: '1px solid #E4E3FF',
      }}>
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
        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
          <PaginationButton active>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <PaginationButton>...</PaginationButton>
          <PaginationButton>8</PaginationButton>
          <PaginationButton>9</PaginationButton>
          <PaginationButton>10</PaginationButton>
        </div>
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
  )
}
