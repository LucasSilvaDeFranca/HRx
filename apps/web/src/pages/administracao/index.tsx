import { useNavigate } from 'react-router-dom'
import { Building2, Pencil, Trash2, UserPlus, Settings2 } from 'lucide-react'
import { Avatar, Badge, Button, Breadcrumbs, PageHeader } from '../../components/ui'
import DataTable from '../../components/ui/DataTable'

/**
 * Administração — Página principal
 * Figma: 5685:156220 (1440x1154)
 */

const users = Array(8).fill(null).map((_, i) => ({
  name: i === 1 ? 'Juliana Castilho' : 'João Aquino',
  permissao: i % 2 === 0 ? 'Administrador' : 'Editor',
  permColor: i % 2 === 0 ? 'blue' as const : 'success' as const,
  email: 'julia@hrx.com.br',
  addedAt: '22/06/2023',
  updatedAt: '22/06/2023',
}))

export default function Administracao() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <Building2 size={20} color="#344054" /> }, { label: 'Administração', active: true }]} />}
        title="Administração"
        subtitle="Gerencie todos os colaboradores"
        actions={<>
          <Button variant="secondary" size="md" icon={<Pencil size={20} />} onClick={() => navigate('/administracao/dados-empresa')}>Editar Dados da Empresa</Button>
          <Button variant="primary" size="md" icon={<UserPlus size={20} />} onClick={() => navigate('/administracao/usuarios')}>Novo Usuário</Button>
        </>}
      />

      <DataTable
        title="Lista de Usuários"
        actions={<Button variant="secondary" size="sm" icon={<Settings2 size={20} />}>Customizar</Button>}
        columns={[
          {
            key: 'name', header: 'Nome',
            render: (_, row) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar name={String(row.name)} size={40} />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>{String(row.name)}</span>
              </div>
            ),
          },
          { key: 'permissao', header: 'Permissões ↓', render: (_, row) => <Badge variant={row.permColor as 'blue'}>{String(row.permissao)}</Badge> },
          { key: 'email', header: 'Email ↓' },
          { key: 'addedAt', header: 'Adicionado em ↓' },
          { key: 'updatedAt', header: 'Atualizado em ↓' },
          {
            key: 'actions', header: 'Ações',
            render: () => (
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Trash2 size={20} color="#667085" /></button>
                <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Pencil size={20} color="#667085" /></button>
              </div>
            ),
          },
        ]}
        data={users}
      />
    </div>
  )
}
