<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-7.13-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
</p>

<h1 align="center">
  <br>
  <img src="https://img.shields.io/badge/HR-x-456DFF?style=for-the-badge&labelColor=363F72&color=456DFF" height="40" />
  <br>
  Sistema de Gestao de Recursos Humanos
  <br>
</h1>

<p align="center">
  <b>Plataforma completa de gestao de RH</b> com 9 modulos, 45 paginas e 46 rotas.<br>
  Design pixel-perfect baseado no Figma <i>Manar HRx (Arquivo Final)</i>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/paginas-45-456DFF?style=flat-square" />
  <img src="https://img.shields.io/badge/rotas-46-637BFF?style=flat-square" />
  <img src="https://img.shields.io/badge/componentes_UI-14-7A88FF?style=flat-square" />
  <img src="https://img.shields.io/badge/modulos-9-868EFF?style=flat-square" />
  <img src="https://img.shields.io/badge/arquivos_.tsx-64-363F72?style=flat-square" />
</p>

---

## Quickstart

```bash
git clone https://github.com/LucasSilvaDeFranca/HRx.git
cd HRx
npm install
npm run dev
```

Acesse `http://localhost:5173/` — Login > Dashboard

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de producao (tsc + vite) |
| `npm run preview` | Preview do build local |
| `npm run lint` | ESLint |

---

## Tech Stack

| Tecnologia | Versao | Finalidade |
|:----------:|:------:|:-----------|
| <img src="https://cdn.simpleicons.org/react/61DAFB" width="20" /> **React** | `19.2` | Biblioteca UI com componentes funcionais e hooks |
| <img src="https://cdn.simpleicons.org/typescript/3178C6" width="20" /> **TypeScript** | `5.9` | Tipagem estatica em todo o projeto |
| <img src="https://cdn.simpleicons.org/vite/646CFF" width="20" /> **Vite** | `8.0` | Build tool ultra-rapido com HMR instantaneo |
| <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="20" /> **Tailwind CSS** | `4.2` | Design system com `@theme` tokens nativos |
| <img src="https://cdn.simpleicons.org/reactrouter/CA4245" width="20" /> **React Router** | `7.13` | Roteamento SPA com layouts aninhados |
| <img src="https://cdn.simpleicons.org/lucide/F56565" width="20" /> **Lucide React** | `1.6` | +1000 icones SVG consistentes |

---

## Arquitetura

```
src/
 |- components/
 |   |- ui/                     14 componentes reutilizaveis
 |   |   |- Avatar.tsx          Iniciais + cor hash por nome
 |   |   |- Badge.tsx           Variantes: blue, success, warning, error
 |   |   |- Breadcrumbs.tsx     Navegacao com icones e separadores
 |   |   |- Button.tsx          primary | secondary | outline | ghost
 |   |   |- Card.tsx            Card + CardHeader (icone + titulo + acao)
 |   |   |- Checkbox.tsx        Com label e estados
 |   |   |- DataTable.tsx       Headers tipados + rows renderizaveis
 |   |   |- FormSection.tsx     Secao + FormRow com grid responsivo
 |   |   |- Input.tsx           Text, password, select, textarea
 |   |   |- MetricCard.tsx      Icone gradiente + label + valor
 |   |   |- Modal.tsx           Overlay + titulo + slot de acoes
 |   |   |- PageHeader.tsx      Breadcrumb + titulo + subtitulo + acoes
 |   |   |- PieChart.tsx        SVG donut com legenda automatica
 |   |   |- ProgressBar.tsx     Com icone, cor semantica e %
 |   |   '- index.ts            Barrel export
 |   |- AppLayout.tsx           Sidebar + <Outlet /> content area
 |   '- Sidebar.tsx             280px fixo, nav + user profile
 |
 |- pages/
 |   |- Login.tsx                       Autenticacao (sem sidebar)
 |   |- Dashboard.tsx                   Metricas + graficos + listas
 |   |- Colaboradores.tsx               Lista + metricas + modal import
 |   |- ColaboradoresCadastrar.tsx      10 secoes com scroll-to
 |   |- ColaboradoresVisualizacao.tsx   Perfil read-only
 |   |- desempenho/                     19 paginas
 |   |- hierarquia/                     5 paginas
 |   |- centro-custos/                  4 paginas
 |   |- organograma/                    1 pagina
 |   |- administracao/                  4 paginas
 |   '- pesquisas/                      7 paginas
 |
 |- index.css            Tailwind v4 @theme + design tokens + resets
 |- App.tsx              BrowserRouter com todas as 46 rotas
 '- main.tsx             Entry point React 19
```

---

## Design System

### Paleta de Cores

```
Primary (Azul/Roxo)
  #456DFF  700  Cor principal, botoes, titulos
  #637BFF  600  Hover states, acentos
  #7A88FF  500  Bordas ativas, focus rings
  #D2D1FF   50  Backgrounds suaves
  #E4E3FF   25  Bordas de cards e inputs

Gray (Neutros)
  #101828  900  Headings escuros
  #344054  700  Texto primario
  #667085  500  Texto secundario
  #98A2B3  400  Placeholders
  #EAECF0  200  Divisores e bordas
  #F9FAFB   50  Backgrounds alternados

Semanticos
  #363F72  Gray Blue 700  Texto sidebar/cards
  #067647  Success  700   Status positivo
  #F79009  Warning  500   Status atencao
  #D92D20  Error    600   Status negativo
  #F8FAFB  Page BG        Fundo da area de conteudo
```

### Tipografia

| Estilo | Font | Peso | Size | LH |
|--------|------|:----:|:----:|:--:|
| Display sm | DM Sans | **700** | 30px | 38px |
| Display xs | DM Sans | 500 | 24px | 32px |
| Text md | DM Sans | 500 | 16px | 24px |
| Text sm Semi | DM Sans | 500 | 14px | 20px |
| Text sm Reg | DM Sans | 400 | 14px | 21px |
| Text xs | DM Sans | 500 | 12px | 18px |
| Text xxs | DM Sans | 400 | 10px | 18px |
| Email (sidebar) | Inter | 400 | 14px | 20px |

### Espacamentos

| Elemento | Valor | Contexto |
|----------|:-----:|----------|
| Sidebar | `280px` | Largura fixa |
| Content px | `32px` | Padding horizontal |
| Content pt | `82px` | Padding top (abaixo do header) |
| Content pb | `48px` | Padding bottom |
| Card gap | `16px` | Entre todos os cards |
| Section gap | `32px` | Header para conteudo |
| Card padding | `24px` | Interno dos cards |
| Card radius | `12px` | Border radius |
| Nav item | `14px 18px` | Padding do item |
| Nav gap | `4px` | Entre itens de nav |
| Input | `10px 14px` | Padding dos inputs |

### Sombras e Gradientes

```css
/* Sombra padrao de cards */
shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);

/* Sombra do logo */
shadow-logo: 0px 1.5px 4.5px rgba(16,24,40,0.1),
             0px 1.5px 3px rgba(16,24,40,0.06);

/* Gradiente dos icones de metrica */
gradient-metric: linear-gradient(135deg, #868EFF 0%, #4318FF 100%);
```

---

## Mapa de Rotas

### 1. Autenticacao <sub>sem sidebar</sub>

| Rota | Pagina |
|------|--------|
| `/` | Login |
| `/login` | Login |

### 2. Dashboard

| Rota | Descricao |
|------|-----------|
| `/dashboard` | Metricas, listas de colaboradores, graficos PDI/Metas, progress bars |

### 3. Colaboradores <sub>3 paginas</sub>

| Rota | Pagina | Descricao |
|------|--------|-----------|
| `/colaboradores` | Lista | Metricas + tabela + modal importar CSV |
| `/colaboradores/cadastrar` | Cadastrar | 10 secoes com scroll-to (Dados Pessoais, Contratuais, Beneficios, Endereco, Educacao, Bancarios, Formacoes, Dependentes) |
| `/colaboradores/visualizacao` | Perfil | Visualizacao completa read-only |

### 4. Desempenho <sub>19 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/desempenho` | Principal (NavCards + tabela) |
| `/desempenho/metricas` | Metricas Lickert + Percentual |
| `/desempenho/configuracoes` | Configuracoes gerais |

**Metas**

| Rota | Pagina |
|------|--------|
| `/desempenho/avaliacao-metas` | Lista de avaliacoes |
| `/desempenho/avaliacao-metas/criar` | Criacao de avaliacao |
| `/desempenho/avaliacao-metas/visualizar` | Detalhes + perguntas |
| `/desempenho/avaliacao-metas/resposta` | Resposta colaborador/gestor |
| `/desempenho/avaliacao-metas/resultados` | Resultados com scores |

**Competencias**

| Rota | Pagina |
|------|--------|
| `/desempenho/avaliacao-competencias` | Lista de competencias |
| `/desempenho/avaliacao-competencias/criar` | Criacao com pesos |
| `/desempenho/avaliacao-competencias/visualizar` | Escala Lickert |

**PDI**

| Rota | Pagina |
|------|--------|
| `/desempenho/pdi` | Lista com status |
| `/desempenho/pdi/criar` | Formulario What/How |
| `/desempenho/pdi/resultado` | Progresso + slider |
| `/desempenho/pdi/configuracao` | Aprovacoes + periodo |
| `/desempenho/pdi/versoes` | Historico + 9Box snapshot |
| `/desempenho/pdi/validacao` | Progresso + comentarios |

**9Box / Sucessao**

| Rota | Pagina |
|------|--------|
| `/desempenho/9box` | Matriz 9Box + tabela |
| `/desempenho/sucessao` | Planejamento de sucessao |

### 5. Hierarquia <sub>5 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/hierarquia` | Principal (NavCards + tabela cargos) |
| `/hierarquia/tabela-salarial` | Faixa Salarial / Steps |
| `/hierarquia/niveis` | Cadastrar Niveis |
| `/hierarquia/cargos` | Cadastrar Cargos |
| `/hierarquia/steps` | Steps (% + R$) |

### 6. Centro de Custos <sub>4 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/centro-custos` | Metricas + movimentacoes |
| `/centro-custos/criar-movimentacao` | Nova movimentacao |
| `/centro-custos/tabela-calculo` | Tabela de encargos |
| `/centro-custos/aprovacao` | Aprovacao com modal |

### 7. Organograma <sub>1 pagina</sub>

| Rota | Pagina |
|------|--------|
| `/organograma` | Vertical + Radial + Side Panel |

### 8. Administracao <sub>4 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/administracao` | Lista de usuarios |
| `/administracao/dados-empresa` | Dados corporativos |
| `/administracao/campos-cadastro` | 4 tabs (Status, Contratacao, Unidades, Beneficios) |
| `/administracao/usuarios` | Novo usuario + permissoes |

### 9. Pesquisas <sub>7 paginas</sub>

| Rota | Pagina |
|------|--------|
| `/pesquisas` | Lista com filtros por status |
| `/pesquisas/nova` | Formulario de criacao |
| `/pesquisas/detalhe` | Detalhes (encerrada) |
| `/pesquisas/convidados` | Lista de convidados |
| `/pesquisas/respostas` | Respostas + export CSV |
| `/pesquisas/responder` | Resposta convidado <sub>sem sidebar</sub> |
| `/pesquisas/dashboard` | Dashboard de resultados |

---

## Navegacao (Sidebar)

```
  Dashboard          /dashboard
  Colaboradores      /colaboradores
  Desempenho         /desempenho
  Hierarquia         /hierarquia
  Centro de Custos   /centro-custos
  Organograma        /organograma
  Administracao      /administracao
  Pesquisas          /pesquisas
  ─────────────────
  Suporte
  Configuracoes
  ─────────────────
  [Avatar] Juliana Castilho
           juliana@hrx.com    [Logout]
```

---

## Numeros do Projeto

| | Quantidade |
|-|:----------:|
| Modulos | **9** |
| Paginas | **45** |
| Rotas | **46** |
| Componentes UI | **14** |
| Arquivos .tsx | **64** |
| Linhas de codigo | **12.000+** |

---

## Design Source

> Figma: **Manar HRx (Arquivo Final) - Copy - Copy**

Implementacao pixel-perfect incluindo:

- Paleta de cores extraida com tokens exatos
- Tipografia DM Sans + Inter com pesos corretos
- Espacamentos e paddings fieis ao design
- 14 componentes reutilizaveis do design system
- Icones Lucide mapeados 1:1 aos do Figma
- Gradientes, sombras e border-radius identicos
- Scrollbar invisivel em listas com overflow

---

<p align="center">
  Desenvolvido por <a href="https://github.com/LucasSilvaDeFranca">Lucas Silva de Franca</a>
</p>
