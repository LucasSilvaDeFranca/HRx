import { NavLink } from 'react-router-dom'
import {
  BarChart3, UserPlus, TrendingUp, Network,
  PieChart, GitFork, Building2, ClipboardList,
  LifeBuoy, Settings, LogOut,
} from 'lucide-react'
import Avatar from './ui/Avatar'

/**
 * HRx Sidebar — Pixel-perfect do Figma
 *
 * Width: 280px | Height: 100vh | bg: white | fixed
 * Logo area: pl-24px pr-20px, pt-32px
 * Nav area: px-16px, gap 4px entre items
 * Nav item: px-18px py-14px, rounded 6px, gap 12px
 * Active: bg #456DFF text white
 * Inactive: bg white text #363F72
 * Footer: pb-32px, border-t #EAECF0, pt-24px
 * User: avatar 40px, name DM Sans Medium 14px, email Inter 14px
 */

const mainNav = [
  { label: 'Dashboard', icon: BarChart3, path: '/dashboard' },
  { label: 'Colaboradores', icon: UserPlus, path: '/colaboradores' },
  { label: 'Desempenho', icon: TrendingUp, path: '/desempenho' },
  { label: 'Hierarquia', icon: Network, path: '/hierarquia' },
  { label: 'Centro de Custos', icon: PieChart, path: '/centro-custos' },
  { label: 'Organograma', icon: GitFork, path: '/organograma' },
  { label: 'Administração', icon: Building2, path: '/administracao' },
  { label: 'Pesquisas', icon: ClipboardList, path: '/pesquisas' },
]

const footerNav = [
  { label: 'Suporte', icon: LifeBuoy, path: '/suporte' },
  { label: 'Configurações', icon: Settings, path: '/configuracoes' },
]

export default function Sidebar() {
  return (
    <aside
      style={{
        width: '280px',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top: Logo + Nav */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '32px' }}>
        {/* Logo */}
        <div style={{ paddingLeft: '24px', paddingRight: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '38px' }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{ flexShrink: 0, filter: 'drop-shadow(0px 1.188px 3.563px rgba(16,24,40,0.1)) drop-shadow(0px 1.188px 2.375px rgba(16,24,40,0.06))' }}>
              <rect width="38" height="38" rx="8" fill="url(#sb-logo)" />
              <path d="M19 8L11 19L19 30L27 19L19 8Z" fill="white" fillOpacity="0.9" />
              <defs>
                <linearGradient id="sb-logo" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#868EFF" />
                  <stop offset="1" stopColor="#4318FF" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#363F72', letterSpacing: '-0.5px', fontFamily: "'DM Sans', sans-serif" }}>
              HR<span style={{ color: '#456DFF' }}>x</span>
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '0 16px' }}>
          {mainNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '24px',
                textDecoration: 'none',
                transition: 'background-color 0.15s',
                backgroundColor: isActive ? '#456DFF' : 'transparent',
                color: isActive ? '#FFFFFF' : '#363F72',
              })}
            >
              <item.icon size={24} strokeWidth={1.67} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom: Footer Nav + User */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '32px', padding: '0 16px 32px 16px' }}>
        {/* Footer Nav */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {footerNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '24px',
                textDecoration: 'none',
                color: '#363F72',
              }}
            >
              <item.icon size={24} strokeWidth={1.67} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User */}
        <div style={{
          borderTop: '1px solid #EAECF0',
          paddingTop: '24px',
          paddingLeft: '8px',
          paddingRight: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Juliana Castilho" size={40} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#363F72', fontFamily: "'DM Sans', sans-serif" }}>
                Juliana Castilho
              </span>
              <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#475467', fontFamily: "'Inter', sans-serif" }}>
                juliana@hrx.com
              </span>
            </div>
          </div>
          <button style={{
            position: 'absolute',
            right: 0,
            top: '15px',
            padding: '8px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: '#667085',
            display: 'flex',
            alignItems: 'center',
          }}>
            <LogOut size={20} strokeWidth={1.67} />
          </button>
        </div>
      </div>
    </aside>
  )
}
