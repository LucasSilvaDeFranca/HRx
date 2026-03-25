<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-4.21-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-5.22-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

<h1 align="center">
  <br>
  <img src="https://img.shields.io/badge/HR-x-456DFF?style=for-the-badge&labelColor=363F72&color=456DFF" height="40" />
  <br>
  Sistema de Gestao de Recursos Humanos
  <br>
</h1>

<p align="center">
  <b>Monorepo fullstack</b> com backend Express + Prisma e frontend React + Vite + Tailwind.<br>
  9 modulos, 45 paginas, 46 rotas. Design pixel-perfect do Figma <i>Manar HRx</i>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/paginas-45-456DFF?style=flat-square" />
  <img src="https://img.shields.io/badge/rotas-46-637BFF?style=flat-square" />
  <img src="https://img.shields.io/badge/componentes_UI-14-7A88FF?style=flat-square" />
  <img src="https://img.shields.io/badge/modulos-9-868EFF?style=flat-square" />
  <img src="https://img.shields.io/badge/arquivos_.tsx-64-363F72?style=flat-square" />
</p>

---

## Estrutura do Monorepo

```
HRX/
├── apps/
│   ├── api/                → Backend (Express + Prisma + PostgreSQL)
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── src/
│   │       ├── lib/
│   │       │   └── prisma.ts
│   │       ├── middlewares/
│   │       │   └── auth.ts        → requireAuth, requireRole, signToken
│   │       ├── routes/
│   │       │   ├── auth.ts        → /register, /login, /me
│   │       │   └── index.ts       → Router central
│   │       ├── services/          → (logica de negocio)
│   │       ├── utils/             → (helpers)
│   │       └── server.ts          → Entry point :3333
│   │
│   └── web/                → Frontend (React + Vite + TailwindCSS)
│       └── src/
│           ├── components/
│           │   ├── ui/            → 14 componentes reutilizaveis
│           │   ├── AppLayout.tsx  → Sidebar + Outlet
│           │   └── Sidebar.tsx    → Menu lateral 280px
│           ├── pages/
│           │   ├── Login.tsx
│           │   ├── Dashboard.tsx
│           │   ├── Colaboradores*.tsx
│           │   ├── desempenho/    → 19 paginas
│           │   ├── hierarquia/    → 5 paginas
│           │   ├── centro-custos/ → 4 paginas
│           │   ├── organograma/   → 1 pagina
│           │   ├── administracao/ → 4 paginas
│           │   └── pesquisas/     → 7 paginas
│           ├── styles/
│           │   └── index.css      → Tailwind v4 @theme + tokens
│           ├── App.tsx            → Router com 46 rotas
│           └── main.tsx
│
├── docker-compose.yml      → PostgreSQL 16 local
├── Dockerfile.back         → Deploy backend
├── Dockerfile.front        → Deploy frontend (nginx)
├── package.json            → Workspaces root
└── tsconfig.json           → Referencias ambos apps
```

---

## Quickstart

```bash
git clone https://github.com/LucasSilvaDeFranca/HRx.git
cd HRx
npm install
```

### Desenvolvimento

```bash
# 1. Subir banco de dados
docker compose up -d

# 2. Gerar Prisma client + push schema
npm run db:push

# 3. Rodar backend e frontend
npm run dev:api          # Express → http://localhost:3333
npm run dev:web          # Vite   → http://localhost:5173
```

### Comandos

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Roda api + web simultaneamente |
| `npm run dev:api` | Apenas backend (Express :3333) |
| `npm run dev:web` | Apenas frontend (Vite :5173) |
| `npm run build` | Build de producao (api + web) |
| `npm run db:push` | Sincroniza schema Prisma com banco |
| `npm run db:migrate` | Cria migration Prisma |
| `npm run db:studio` | Abre Prisma Studio (GUI do banco) |
| `npm run db:seed` | Roda seed do banco |

---

## Tech Stack

### Backend (`apps/api`)

| Tecnologia | Versao | Finalidade |
|:----------:|:------:|:-----------|
| <img src="https://cdn.simpleicons.org/express/000000" width="20" /> **Express** | `4.21` | Framework HTTP |
| <img src="https://cdn.simpleicons.org/prisma/2D3748" width="20" /> **Prisma** | `5.22` | ORM + migrations |
| <img src="https://cdn.simpleicons.org/postgresql/4169E1" width="20" /> **PostgreSQL** | `16` | Banco de dados |
| <img src="https://cdn.simpleicons.org/typescript/3178C6" width="20" /> **TypeScript** | `5.7` | Tipagem |
| <img src="https://cdn.simpleicons.org/jsonwebtokens/000000" width="20" /> **JWT** | `9.0` | Autenticacao |
| **Zod** | `3.24` | Validacao de dados |
| **bcryptjs** | `2.4` | Hash de senhas |
| **Multer** | `1.4` | Upload de arquivos |

### Frontend (`apps/web`)

| Tecnologia | Versao | Finalidade |
|:----------:|:------:|:-----------|
| <img src="https://cdn.simpleicons.org/react/61DAFB" width="20" /> **React** | `19.2` | UI Library |
| <img src="https://cdn.simpleicons.org/vite/646CFF" width="20" /> **Vite** | `8.0` | Build + HMR |
| <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="20" /> **Tailwind CSS** | `4.2` | Design system |
| <img src="https://cdn.simpleicons.org/reactrouter/CA4245" width="20" /> **React Router** | `7.13` | Roteamento SPA |
| <img src="https://cdn.simpleicons.org/lucide/F56565" width="20" /> **Lucide React** | `1.6` | Icones SVG |

### Infraestrutura

| Tecnologia | Finalidade |
|:----------:|:-----------|
| <img src="https://cdn.simpleicons.org/docker/2496ED" width="20" /> **Docker Compose** | PostgreSQL local |
| **Dockerfile.back** | Deploy backend (Node 20 Alpine) |
| **Dockerfile.front** | Deploy frontend (Nginx Alpine) |

---

## Backend — API

### Autenticacao (JWT)

| Endpoint | Metodo | Descricao |
|----------|--------|-----------|
| `/api/auth/register` | POST | Cadastro de usuario |
| `/api/auth/login` | POST | Login (retorna JWT) |
| `/api/auth/me` | GET | Dados do usuario logado |
| `/api/health` | GET | Health check |

### Prisma Schema

```prisma
enum Role { USER, ADMIN, SUPER_ADMIN }

model AuthUser {
  id, email, password, name, role, active, phone, createdAt, updatedAt
}
```

### Middleware

- `requireAuth` — Valida JWT no header Authorization
- `requireRole(...roles)` — Verifica role do usuario
- `signToken(userId, role)` — Gera JWT com expiracao de 7 dias

---

## Frontend — Componentes UI

14 componentes reutilizaveis em `apps/web/src/components/ui/`:

| Componente | Descricao |
|------------|-----------|
| `Avatar` | Iniciais + cor hash por nome |
| `Badge` | Variantes: blue, success, warning, error |
| `Breadcrumbs` | Navegacao com icones e separadores |
| `Button` | primary, secondary, outline, ghost |
| `Card` + `CardHeader` | Card com icone + titulo + acao |
| `Checkbox` | Com label e estados |
| `DataTable` | Headers tipados + rows renderizaveis |
| `FormSection` + `FormRow` | Secao + grid responsivo |
| `Input` | Text, password, select, textarea |
| `MetricCard` | Icone gradiente + label + valor |
| `Modal` | Overlay + titulo + slot de acoes |
| `PageHeader` | Breadcrumb + titulo + subtitulo + acoes |
| `PieChart` | SVG donut com legenda automatica |
| `ProgressBar` | Com icone, cor semantica e % |

---

## Design System

### Paleta de Cores

```
Primary (Azul/Roxo)
  #456DFF  700   Cor principal
  #637BFF  600   Hover
  #7A88FF  500   Focus
  #D2D1FF   50   Background
  #E4E3FF   25   Bordas

Gray
  #101828  900   Headings
  #344054  700   Texto primario
  #667085  500   Texto secundario
  #EAECF0  200   Divisores
  #F8FAFB  BG    Fundo conteudo

Semanticos
  #067647  Success    #F79009  Warning    #D92D20  Error
```

### Tipografia

| Estilo | Font | Peso | Size | LH |
|--------|------|:----:|:----:|:--:|
| Display sm | DM Sans | **700** | 30px | 38px |
| Display xs | DM Sans | 500 | 24px | 32px |
| Text md | DM Sans | 500 | 16px | 24px |
| Text sm | DM Sans | 500/400 | 14px | 20px |
| Text xs | DM Sans | 500 | 12px | 18px |

---

## Mapa de Rotas (Frontend)

### 1. Autenticacao <sub>sem sidebar</sub>

| Rota | Pagina |
|------|--------|
| `/` | Login |
| `/login` | Login |

### 2. Dashboard

| Rota | Descricao |
|------|-----------|
| `/dashboard` | Metricas, listas, graficos PDI/Metas |

### 3. Colaboradores <sub>3 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/colaboradores` | Lista + metricas + modal importar |
| `/colaboradores/cadastrar` | 10 secoes com scroll-to |
| `/colaboradores/visualizacao` | Perfil read-only |

### 4. Desempenho <sub>19 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/desempenho` | Principal (NavCards + tabela) |
| `/desempenho/metricas` | Metricas Lickert + Percentual |
| `/desempenho/configuracoes` | Configuracoes gerais |
| `/desempenho/avaliacao-metas` | Lista de metas |
| `/desempenho/avaliacao-metas/criar` | Criacao |
| `/desempenho/avaliacao-metas/visualizar` | Detalhes |
| `/desempenho/avaliacao-metas/resposta` | Resposta |
| `/desempenho/avaliacao-metas/resultados` | Resultados |
| `/desempenho/avaliacao-competencias` | Lista |
| `/desempenho/avaliacao-competencias/criar` | Criacao |
| `/desempenho/avaliacao-competencias/visualizar` | Escala Lickert |
| `/desempenho/pdi` | Lista PDI |
| `/desempenho/pdi/criar` | Formulario |
| `/desempenho/pdi/resultado` | Progresso |
| `/desempenho/pdi/configuracao` | Aprovacoes |
| `/desempenho/pdi/versoes` | Historico |
| `/desempenho/pdi/validacao` | Validacao |
| `/desempenho/9box` | Matriz 9Box |
| `/desempenho/sucessao` | Sucessao |

### 5. Hierarquia <sub>5 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/hierarquia` | Principal + tabela cargos |
| `/hierarquia/tabela-salarial` | Faixa / Steps |
| `/hierarquia/niveis` | Cadastrar Niveis |
| `/hierarquia/cargos` | Cadastrar Cargos |
| `/hierarquia/steps` | Steps (% + R$) |

### 6. Centro de Custos <sub>4 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/centro-custos` | Metricas + movimentacoes |
| `/centro-custos/criar-movimentacao` | Nova movimentacao |
| `/centro-custos/tabela-calculo` | Tabela encargos |
| `/centro-custos/aprovacao` | Aprovacao |

### 7. Organograma <sub>1 pagina</sub>

| Rota | Pagina |
|------|--------|
| `/organograma` | Vertical + Radial |

### 8. Administracao <sub>4 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/administracao` | Lista usuarios |
| `/administracao/dados-empresa` | Dados corporativos |
| `/administracao/campos-cadastro` | 4 tabs |
| `/administracao/usuarios` | Novo usuario |

### 9. Pesquisas <sub>7 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/pesquisas` | Lista com filtros |
| `/pesquisas/nova` | Criacao |
| `/pesquisas/detalhe` | Detalhes |
| `/pesquisas/convidados` | Convidados |
| `/pesquisas/respostas` | Respostas + CSV |
| `/pesquisas/responder` | Resposta <sub>sem sidebar</sub> |
| `/pesquisas/dashboard` | Dashboard resultados |

---

## Numeros do Projeto

| | Quantidade |
|-|:----------:|
| Modulos | **9** |
| Paginas | **45** |
| Rotas frontend | **46** |
| Componentes UI | **14** |
| Arquivos .tsx | **64** |
| Linhas de codigo | **14.000+** |

---

## Deploy

```bash
# Build com Docker
docker build -f Dockerfile.back -t hrx-api .
docker build -f Dockerfile.front -t hrx-web .

# Ou via docker-compose (banco local)
docker compose up -d
```

---

## Design Source

> Figma: **Manar HRx (Arquivo Final) - Copy - Copy**

---

<p align="center">
  Desenvolvido por <a href="https://github.com/LucasSilvaDeFranca">Lucas Silva de Franca</a>
</p>
