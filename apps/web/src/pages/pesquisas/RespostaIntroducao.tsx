import { Eye, Clock } from 'lucide-react'
import { Button, Input } from '../../components/ui'

/**
 * Resposta do Colaborador — Introdução
 * Figma: 7299:3395 (1440x768)
 * Layout sem sidebar — tela de resposta do convidado
 */

export default function RespostaIntroducao() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex' }}>
      {/* Sidebar de seções */}
      <div style={{ width: '280px', padding: '32px 24px', borderRight: '1px solid #F2F4F7', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
          <svg width="25" height="38" viewBox="0 0 25 38" fill="none"><path d="M12.5 0L25 19L12.5 38L0 19L12.5 0Z" fill="url(#resp-logo)" /><defs><linearGradient id="resp-logo" x1="0" y1="0" x2="25" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#868EFF" /><stop offset="1" stopColor="#4318FF" /></linearGradient></defs></svg>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#363F72' }}>HR<span style={{ color: '#456DFF' }}>x</span></span>
        </div>
        <p style={{ fontSize: '16px', fontWeight: 700, color: '#363F72', margin: '0 0 4px' }}>[Título da pesquisa]</p>
        <p style={{ fontSize: '14px', color: '#667085', margin: '0 0 24px' }}>[Nome da empresa]</p>
        {['Introdução', '[Nome da Seção]', '[Nome da Seção]', 'Agradecimento'].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: i === 0 ? '4px solid #456DFF' : '2px solid #E4E3FF', backgroundColor: i === 0 ? '#456DFF' : '#FFF' }} />
            <span style={{ fontSize: '14px', color: i === 0 ? '#363F72' : '#667085', fontWeight: i === 0 ? 500 : 400 }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 32px' }}>
        {/* Top bar */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid #E4E3FF', borderRadius: '8px' }}>
            <Eye size={16} color="#667085" />
            <span style={{ fontSize: '14px', color: '#363F72' }}>Pré-Visualização</span>
          </div>
          <p style={{ fontSize: '12px', color: '#667085', marginLeft: '16px', alignSelf: 'center' }}>Suas respostas não serão salvas.</p>
        </div>

        <div style={{ maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          {/* Logo */}
          <div style={{ width: '120px', height: '120px', borderRadius: '16px', background: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '32px', fontWeight: 700, color: '#FFF' }}>Devfy.</span>
          </div>

          {/* Título */}
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#363F72', margin: 0, textAlign: 'center' }}>[Título da pesquisa]</h1>

          {/* Descrição */}
          <p style={{ fontSize: '16px', color: '#667085', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Lorem ipsum dolor sit amet consectetur. Senectus sed lorem nulla vestibulum sit mi massa lacus porttitor. Sed arcu justo nisl nisl pharetra pretium amet. Dapibus eu neque aliquam erat volutpat. Tristique tincidunt mauris turpis ut convallis. Id fermentum pretium felis faucibus in. Facilisis risus in in tincidunt aliquam lobortis dolor pharetra leo.
          </p>

          {/* Input código */}
          <div style={{ width: '100%' }}>
            <Input label="Insira o seu código para começar" placeholder="Insira o seu código" />
            <p style={{ fontSize: '14px', color: '#667085', marginTop: '8px' }}>Essa informação deve constar no e-mail do convite da pesquisa. Se tiver dúvidas, entre em contato com o seu supervisor.</p>
          </div>

          {/* Alert */}
          <div style={{
            width: '100%', padding: '16px', backgroundColor: '#FFFCF5', border: '1px solid #FEF0C7',
            borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start',
          }}>
            <Clock size={20} color="#F79009" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#F79009', margin: 0 }}>Reserve um tempo para responder até o final</p>
              <p style={{ fontSize: '14px', color: '#F79009', margin: '4px 0 0' }}>Se você fechar essa aba, suas respostas não serão salvas.</p>
            </div>
          </div>

          {/* Botão */}
          <Button variant="primary" size="lg">Continuar</Button>
        </div>
      </div>
    </div>
  )
}
