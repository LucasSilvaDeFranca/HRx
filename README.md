# HRx - Sistema de Gestao de Recursos Humanos

Sistema completo de gestao de RH desenvolvido em React + TypeScript, baseado no design Figma **Manar HRx (Arquivo Final)**.

## Tech Stack

| Tecnologia | Versao | Uso |
|-----------|--------|-----|
| React | 19.2 | UI Library |
| TypeScript | 5.9 | Tipagem estatica |
| Vite | 8.0 | Build tool + HMR |
| Tailwind CSS | 4.2 | Design system / utility-first |
| React Router | 7.13 | Roteamento SPA |
| Lucide React | 1.6 | Icones SVG |

## Como rodar

```bash
# Instalar dependencias
npm install

# Servidor de desenvolvimento
npm run dev

# Build de producao
npm run build

# Preview do build
npm run preview
```

O servidor roda em `http://localhost:5173/`

## Estrutura do Projeto

```
src/
  components/
    ui/                    # 14 componentes reutilizaveis do Design System
      Avatar.tsx           # Avatar com iniciais + cor baseada no nome
      Badge.tsx            # Badge colorido (blue, success, warning, error)
      Breadcrumbs.tsx      # Navegacao breadcrumb com icones
      Button.tsx           # Botao (primary, secondary, outline, ghost)
      Card.tsx             # Card + CardHeader com icone e acao
      Checkbox.tsx         # Checkbox com label
      DataTable.tsx        # Tabela de dados com headers e rows
      FormSection.tsx      # Secao de formulario + FormRow (grid)
      Input.tsx            # Input com label, placeholder, select
      MetricCard.tsx       # Card de metrica com icone gradiente
      Modal.tsx            # Modal overlay com titulo e acoes
      PageHeader.tsx       # Header de pagina com breadcrumb + titulo + acoes
      PieChart.tsx         # Grafico de pizza SVG com legenda
      ProgressBar.tsx      # Barra de progresso com icone e cor
    AppLayout.tsx          # Layout com Sidebar + Outlet (conteudo)
    Sidebar.tsx            # Menu lateral fixo 280px
  pages/
    Login.tsx              # Tela de login (sem sidebar)
    Dashboard.tsx          # Dashboard principal com metricas e graficos
    Colaboradores.tsx      # Lista de colaboradores + metricas + modal importar
    ColaboradoresCadastrar.tsx    # Formulario completo (10 secoes scroll)
    ColaboradoresVisualizacao.tsx # Perfil do colaborador (read-only)
    desempenho/            # 19 paginas
    hierarquia/            # 5 paginas
    centro-custos/         # 4 paginas
    organograma/           # 1 pagina
    administracao/         # 4 paginas
    pesquisas/             # 7 paginas
  index.css                # Design tokens + Tailwind v4 theme
  App.tsx                  # Router principal com todas as rotas
  main.tsx                 # Ponto de entrada React
```

## Design System

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `primary-700` | `#456DFF` | Cor principal, botoes, titulos |
| `primary-600` | `#637BFF` | Botoes hover, acentos |
| `primary-500` | `#7A88FF` | Bordas ativas |
| `primary-50` | `#D2D1FF` | Backgrounds suaves |
| `primary-25` | `#E4E3FF` | Bordas de cards |
| `gray-blue-700` | `#363F72` | Texto principal em cards/sidebar |
| `gray-900` | `#101828` | Texto escuro (titulos) |
| `gray-700` | `#344054` | Texto medio |
| `gray-500` | `#667085` | Texto secundario |
| `gray-200` | `#EAECF0` | Bordas e divisores |
| `success-700` | `#067647` | Status positivo |
| `warning-500` | `#F79009` | Status atencao |
| `error-600` | `#D92D20` | Status negativo |
| `page-bg` | `#F8FAFB` | Fundo da area de conteudo |

### Tipografia

| Estilo | Font | Peso | Tamanho | Line Height |
|--------|------|------|---------|-------------|
| Display sm Bold | DM Sans | 700 | 30px | 38px |
| Display xs Medium | DM Sans | 500 | 24px | 32px |
| Text md Semibold | DM Sans | 500 | 16px | 24px |
| Text sm Semibold | DM Sans | 500 | 14px | 20px |
| Text sm Regular | DM Sans | 400 | 14px | 21px |
| Text xs Medium | DM Sans | 500 | 12px | 18px |
| Text xxs Regular | DM Sans | 400 | 10px | 18px |

### Espacamentos

| Elemento | Valor |
|----------|-------|
| Sidebar width | 280px |
| Content padding-x | 32px |
| Content padding-top | 82px |
| Content padding-bottom | 48px |
| Gap entre cards | 16px |
| Gap header-conteudo | 32px |
| Card padding | 24px |
| Card border-radius | 12px |
| Nav item padding | 14px 18px |
| Nav item gap | 4px |
| Input padding | 10px 14px |

### Sombras

| Nome | Valor |
|------|-------|
| `shadow-xs` | `0px 1px 2px rgba(16, 24, 40, 0.05)` |
| `shadow-logo` | `0px 1.5px 4.5px rgba(16,24,40,0.1), 0px 1.5px 3px rgba(16,24,40,0.06)` |

### Gradiente

| Nome | Valor |
|------|-------|
| Metric icon | `linear-gradient(135deg, #868EFF 0%, #4318FF 100%)` |

---

## Mapa Completo de Rotas

### 1. Autenticacao (sem sidebar)

| Rota | Pagina | Arquivo |
|------|--------|---------|
| `/` | Login | `pages/Login.tsx` |
| `/login` | Login | `pages/Login.tsx` |

### 2. Dashboard

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/dashboard` | Dashboard | Metricas, listas de colaboradores, graficos PDI/Metas |

### 3. Colaboradores

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/colaboradores` | Lista | Metricas + tabela de colaboradores + modal importar CSV |
| `/colaboradores/cadastrar` | Cadastrar | Formulario com 10 secoes (Dados Pessoais, Contratuais, Beneficios, Endereco, Educacao, Dados Bancarios, Formacoes, Dependentes) |
| `/colaboradores/visualizacao` | Visualizacao | Perfil completo read-only do colaborador |

### 4. Desempenho

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/desempenho` | Principal | 3 NavCards (Metas, Competencias, PDI) + tabela avaliacoes |
| `/desempenho/metricas` | Metricas | Configuracao de metricas Lickert e Percentual |
| `/desempenho/configuracoes` | Configuracoes | Configuracoes gerais (limites, pesos, periodos) |

#### 4.1 Metas

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/desempenho/avaliacao-metas` | Lista | Tabela de avaliacoes de metas com status |
| `/desempenho/avaliacao-metas/criar` | Criar | Formulario de criacao de avaliacao de metas |
| `/desempenho/avaliacao-metas/visualizar` | Visualizar | Detalhes da avaliacao com perguntas + feed |
| `/desempenho/avaliacao-metas/resposta` | Resposta | Resposta do colaborador/gestor |
| `/desempenho/avaliacao-metas/resultados` | Resultados | Resultados com tabs e scores |

#### 4.2 Competencias

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/desempenho/avaliacao-competencias` | Lista | Tabela de avaliacoes de competencias |
| `/desempenho/avaliacao-competencias/criar` | Criar | Formulario com pesos e cargos |
| `/desempenho/avaliacao-competencias/visualizar` | Visualizar | Competencias com escala Lickert |

#### 4.3 PDI (Plano de Desenvolvimento Individual)

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/desempenho/pdi` | Lista | Lista de PDIs com status e badges |
| `/desempenho/pdi/criar` | Criar/Visualizar | Formulario PDI (What/How) |
| `/desempenho/pdi/resultado` | Resultado | Progresso com slider e metricas |
| `/desempenho/pdi/configuracao` | Configuracao | Aprovacoes e periodos |
| `/desempenho/pdi/versoes` | Versoes | Historico com snapshot 9Box |
| `/desempenho/pdi/validacao` | Validacao | Progresso com comentarios |

#### 4.4 9Box e Sucessao

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/desempenho/9box` | 9Box | Matriz 9Box + tabela + atividades recentes |
| `/desempenho/sucessao` | Sucessao | Planejamento de sucessao (similar ao 9Box) |

### 5. Hierarquia

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/hierarquia` | Principal | 5 NavCards + tabela de cargos cadastrados |
| `/hierarquia/tabela-salarial` | Tabela Salarial | Tabs Faixa Salarial / Steps |
| `/hierarquia/niveis` | Cadastrar Niveis | Formulario de niveis e salarios |
| `/hierarquia/cargos` | Cadastrar Cargos | Formulario de cargos com hierarquia |
| `/hierarquia/steps` | Cadastrar Steps | Steps com % e R$ |

### 6. Centro de Custos

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/centro-custos` | Principal | Metricas + tabela de movimentacoes |
| `/centro-custos/criar-movimentacao` | Criar Movimentacao | Formulario de nova movimentacao |
| `/centro-custos/tabela-calculo` | Tabela de Calculo | Tabela com calculos e encargos |
| `/centro-custos/aprovacao` | Aprovacao | Status de aprovacao com modal |

### 7. Organograma

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/organograma` | Organograma | Visualizacao vertical + radial + side panel |

### 8. Administracao

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/administracao` | Lista Usuarios | Lista de usuarios do sistema |
| `/administracao/dados-empresa` | Dados da Empresa | Formulario com dados corporativos |
| `/administracao/campos-cadastro` | Campos de Cadastro | 4 tabs (Status, Contratacao, Unidades, Beneficios) |
| `/administracao/usuarios` | Novo Usuario | Criacao de usuario com tipo e permissoes |

### 9. Pesquisas

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/pesquisas` | Lista | Lista de pesquisas com filtros por status |
| `/pesquisas/nova` | Nova Pesquisa | Formulario completo de criacao |
| `/pesquisas/detalhe` | Detalhe | Detalhes da pesquisa encerrada |
| `/pesquisas/convidados` | Convidados | Lista de convidados da pesquisa |
| `/pesquisas/respostas` | Respostas | Tabela de respostas com export CSV |
| `/pesquisas/responder` | Responder (sem sidebar) | Formulario de resposta do convidado |
| `/pesquisas/dashboard` | Dashboard Resultados | Graficos e metricas dos resultados |

---

## Resumo Numerico

| Metrica | Quantidade |
|---------|-----------|
| Modulos | 9 |
| Paginas | 45 |
| Rotas | 46 |
| Componentes UI | 14 |
| Arquivos .tsx | 64 |

## Sidebar - Itens de Navegacao

### Menu Principal
1. Dashboard (`/dashboard`)
2. Colaboradores (`/colaboradores`)
3. Desempenho (`/desempenho`)
4. Hierarquia (`/hierarquia`)
5. Centro de Custos (`/centro-custos`)
6. Organograma (`/organograma`)
7. Administracao (`/administracao`)
8. Pesquisas (`/pesquisas`)

### Menu Inferior
- Suporte
- Configuracoes
- Perfil do usuario com logout

---

## Design Source

Figma: **Manar HRx (Arquivo Final) - Copy - Copy**

Todas as telas foram implementadas pixel-perfect a partir do design original, incluindo:
- Paleta de cores exata
- Tipografia DM Sans com pesos corretos
- Espacamentos e paddings fieis ao Figma
- Componentes reutilizaveis extraidos do design system
- Icones Lucide React mapeados aos icones do Figma
- Gradientes e sombras identicos
