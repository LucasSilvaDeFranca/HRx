import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Checkbox } from '../components/ui'

/**
 * HRx Login Page
 *
 * Specs do Figma:
 * - Layout: split 50/50 (flex-1 + 720px)
 * - Left: formulário centrado, max-width 360px
 * - Right: imagem com padding 24px (top/right/bottom), border-radius 20px
 * - Logo: 48x48 com shadow-logo
 * - Título: DM Sans Medium 30px, Gray/900
 * - Subtítulo: DM Sans Regular 16px, Gray/500
 * - Gaps: header 24px, content 32px, form-fields 20px, actions 16px
 */

const astronautImage = 'https://www.figma.com/api/mcp/asset/15e147f4-b5f8-4a98-8ad4-1ba9ccc00693'
const googleIcon = 'https://www.figma.com/api/mcp/asset/48c40cb9-88cd-424a-9817-57e268df2e04'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[360px] flex flex-col gap-8 items-center">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center w-full">
            {/* Logo */}
            <div className="shadow-logo">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="overflow-visible">
                <rect width="48" height="48" rx="10" fill="url(#login-logo-grad)" />
                <path d="M24 10L14 24L24 38L34 24L24 10Z" fill="white" fillOpacity="0.9" />
                <defs>
                  <linearGradient id="login-logo-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#868EFF" />
                    <stop offset="1" stopColor="#4318FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h1 className="text-[30px] font-medium leading-[38px] text-gray-900">
                Bem-vindo
              </h1>
              <p className="text-base text-gray-500 leading-6">
                Olá! Insira aqui seus dados.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full rounded-xl">
            {/* Fields */}
            <div className="flex flex-col gap-5">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira aqui seu email"
              />
              <Input
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <Checkbox
                label="Lembrar de mim"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <button
                type="button"
                className="text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <Button type="submit" size="lg" fullWidth className="underline">
                Entrar
              </Button>
              <Button type="button" variant="outline" size="md" fullWidth>
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
                Entrar com o Google
              </Button>
            </div>
          </form>

          {/* Sign Up */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-gray-600">Ainda não tem uma conta?</span>
            <button className="text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors">
              Cadastre-se
            </button>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-[720px] py-6 pr-6 shrink-0">
        <div className="w-full h-full rounded-3xl overflow-hidden">
          <img
            src={astronautImage}
            alt="Astronauta HRx"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
