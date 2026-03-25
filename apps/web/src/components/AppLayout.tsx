import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

/**
 * HRx AppLayout — Pixel-perfect do Figma
 *
 * Sidebar: 280px fixed left
 * Content: ml 280px, bg #F8FAFB, min-width 1160px
 * Content padding: pt 82px, px 32px, pb 48px
 * Footer: text 10px, #667085
 */

export default function AppLayout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFB', minWidth: '1440px' }}>
      <Sidebar />
      <main style={{
        marginLeft: '280px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          flex: 1,
          paddingTop: '82px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingBottom: '48px',
        }}>
          <Outlet />
        </div>
        {/* Footer */}
        <footer style={{
          padding: '0 32px 32px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '10px',
          lineHeight: '18px',
          color: '#667085',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <span>© HRx Sistemas 2023. Todos os direitos reservados.</span>
          <div style={{ display: 'flex', gap: '32px' }}>
            <span style={{ cursor: 'pointer' }}>Termos de Uso</span>
            <span style={{ cursor: 'pointer' }}>Política de Privacidade</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
