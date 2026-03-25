# HRx Design System

> Extraído do Figma: **Manar HRx - Arquivo Final - Copy - Copy**
> Fonte: DM Sans | Base visual: Untitled UI customizado

---

## 1. Paleta de Cores

### Primary (Azul/Roxo)
| Token | Hex | Uso |
|-------|-----|-----|
| `primary-25` | `#E4E3FF` | Borders, dividers, input borders |
| `primary-50` | `#D2D1FF` | Light backgrounds |
| `primary-500` | `#7A88FF` | Avatar borders, focus rings |
| `primary-600` | `#637BFF` | Botões primários, CTA |
| `primary-700` | `#456DFF` | Sidebar ativo, títulos, links |

### Gray (Neutros)
| Token | Hex | Uso |
|-------|-----|-----|
| `gray-50` | `#F9FAFB` | Breadcrumb bg, hover states |
| `gray-100` | `#F2F4F7` | Subtle backgrounds |
| `gray-200` | `#EAECF0` | Dividers (sidebar footer) |
| `gray-300` | `#D0D5DD` | Social button border |
| `gray-400` | `#98A2B3` | Placeholder text, chevrons |
| `gray-500` | `#667085` | Supporting text, footer |
| `gray-600` | `#475467` | Secondary text, email |
| `gray-700` | `#344054` | Breadcrumb text |
| `gray-900` | `#101828` | Login heading |

### Gray Blue
| Token | Hex | Uso |
|-------|-----|-----|
| `gray-blue-700` | `#363F72` | Sidebar text, labels, card titles, metric values |

### Status Colors

#### Blue Light (Badges)
| `blue-light-50` | `#F0F9FF` | Badge bg |
| `blue-light-200` | `#B9E6FE` | Badge border |
| `blue-light-700` | `#026AA2` | Badge text |

#### Success
| `success-25` | `#F6FEF9` | Card bg | `success-100` | `#DCFAE6` | Icon bg, bar bg |
| `success-700` | `#067647` | Text, bar fill |

#### Warning
| `warning-25` | `#FFFCF5` | Card bg | `warning-100` | `#FEF0C7` | Icon bg |
| `warning-500` | `#F79009` | Text, bar fill |

#### Error
| `error-25` | `#FFFBFA` | Card bg | `error-100` | `#FEE4E2` | Icon bg |
| `error-600` | `#D92D20` | Text, bar fill |

### Semânticas
| Token | Hex | Uso |
|-------|-----|-----|
| `page-bg` | `#F8FAFB` | Background da área de conteúdo |
| `text-dark` | `#282A2F` | Texto de input, metric labels |
| `avatar-bg` | `#CFCBDC` | Fallback de avatar |

### Gradientes
| Nome | Valor | Uso |
|------|-------|-----|
| Metric Icon | `linear-gradient(135deg, #868EFF 0%, #4318FF 100%)` | Container de ícone nos cards de métricas |

---

## 2. Tipografia

**Fonte principal:** DM Sans (Google Fonts)
**Fonte secundária:** Inter (apenas email no sidebar)

| Token | Size | Weight | Line Height | Uso |
|-------|------|--------|-------------|-----|
| `text-xxs/regular` | 10px | 400 | 18px | Footer © |
| `text-xs/medium` | 12px | 500 | 18px | Metric labels, badge text |
| `text-sm/regular` | 14px | 400 | 1.5 (21px) | Supporting text |
| `text-sm/medium` | 14px | 500 | 20px | Buttons sm, labels |
| `text-sm/bold` | 14px | 700 | 20px | Checkbox label |
| `text-md/regular` | 16px | 400 | 24px | Input text, placeholder |
| `text-md/semibold` | 16px | 500 | 24px | Nav items, card headers |
| `text-lg/medium` | 18px | 500 | 28px | Button CTA (underline) |
| `display-xs/medium` | 24px | 500 | 32px | Metric values |
| `display-sm/medium` | 30px | 500 | 38px | Login título |
| `display-sm/bold` | 30px | 700 | 38px | Dashboard título |

---

## 3. Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-xs` | `0px 1px 2px rgba(16,24,40,0.05)` | Inputs, buttons, cards |
| `shadow-logo` | `0px 1.5px 4.5px rgba(16,24,40,0.1), 0px 1.5px 3px rgba(16,24,40,0.06)` | Logo mark |

---

## 4. Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-xs` | 4px | Checkbox |
| `radius-sm` | 6px | Nav items, breadcrumb |
| `radius-md` | 8px | Inputs, buttons |
| `radius-lg` | 10px | Metric icon container |
| `radius-xl` | 12px | Cards, form containers |
| `radius-2xl` | 16px | Badges |
| `radius-3xl` | 20px | Login image |
| `full` | 9999px | Avatars |

---

## 5. Espaçamentos Chave

### Layout
- **Sidebar width:** 280px
- **Content padding-top:** 82px
- **Content padding-x:** 32px
- **Content padding-bottom:** 48px
- **Section gap:** 32px

### Sidebar
- **Padding top/bottom:** 32px
- **Logo padding:** pl-24 pr-20
- **Nav padding-x:** 16px
- **Nav item gap:** 4px
- **Section gap:** 24px
- **Nav item padding:** 18px x, 14px y
- **Icon → Text gap:** 12px

### Cards
- **Card padding:** 24px
- **Card header pt:** 14px, px: 24px
- **Grid gap:** 16px
- **Metric card gap:** 20px (icon → text)

### Forms
- **Seção gap:** 32px
- **Campo gap:** 20px
- **Label → Input gap:** 6px
- **Actions gap:** 16px

---

## 6. Componentes

### Input
```
bg: white | border: 1px Primary/25 | radius: 8px
padding: 10px 14px | shadow: xs | height: 44px
text: DM Sans Regular 16px #282A2F
placeholder: Gray/400
label: DM Sans Medium 14px Gray-blue/700 (gap 6px)
```

### Button Primary
```
bg: Primary/600 | border: 1px Primary/600 | radius: 8px
padding: 10px 18px | shadow: xs
text: DM Sans Medium, white
```

### Button Secondary
```
bg: white | border: 1px Primary/25 | radius: 8px
padding: 8px 14px | shadow: xs
text: DM Sans Medium 14px Gray-blue/700
```

### Sidebar Nav Item
```
padding: 14px 18px | radius: 6px | gap: 12px
icon: 24x24 | text: DM Sans Medium 16px
active: bg Primary/700, text white
inactive: bg white, text Gray-blue/700
```

### Metric Card
```
width: 262px | height: 110px | padding: 24px | gap: 20px
border: 1px Primary/25 | radius: 12px | shadow: xs
icon container: 48x48, radius 10px, gradient
label: 12px Medium #282A2F | value: 24px Medium Gray-blue/700
```

### Badge
```
padding: 2px 8px | radius: 16px | mix-blend: multiply
text: DM Sans Medium 12px
blue: bg #F0F9FF, border #B9E6FE, text #026AA2
```

### Avatar
```
size: 40px | radius: full | bg fallback: #CFCBDC
contrast border: 0.75px solid rgba(54,63,114,0.08)
```

### Card
```
bg: white | border: 1px Primary/25 | radius: 12px | shadow: xs
header icon: 36x36, border 1.125px Primary/25, radius 6.75px
header text: DM Sans Medium 16px Gray-blue/700
divider: 1px Primary/25
```

### Progress Bar
```
container: rounded-xl, padding 16px
icon: 40x40 rounded-full | gap: 18px
bar: height 8px, radius 4px
```

### Checkbox
```
size: 16x16 | radius: 4px | border: 1px Primary/25
label: DM Sans Bold 14px Gray-blue/700 | gap: 8px
```

---

## 7. Dimensões de Tela

| Elemento | Largura | Altura |
|----------|---------|--------|
| Tela total | 1440px | 1020px |
| Sidebar | 280px | 100vh |
| Content area | 1160px | auto |
| Metric card | 262px | 110px |
| Table card (large) | 540px | 488px |
| Table card (small) | 262px | 488px |
| Progress card | 540px | 362px |
| Login form | 360px | auto |
| Login image | 720px | 100% |

---

## 8. Ícones

**Biblioteca:** Lucide React (mesmos ícones do Untitled UI)

Ícones usados no projeto:
- `BarChart3`, `Users`, `Award`, `Umbrella`, `Banknote`
- `UserPlus`, `TrendingUp`, `Network`, `PieChart`, `GitFork`
- `Building2`, `LifeBuoy`, `Settings`, `LogOut`
- `Pencil`, `Filter`, `ExternalLink`, `ChevronRight`
- `CheckCircle2`, `XCircle`, `Hourglass`

**Tamanhos padrão:**
- Sidebar nav: 24px, strokeWidth 1.67
- Card header: 18px
- Button icon: 20px
- Breadcrumb: 20px (icon) / 16px (chevron)

---

## 9. Arquivos do Design System

```
src/
├── index.css                    # Tailwind v4 @theme com todos os tokens
├── styles/
│   └── design-tokens.ts         # Tokens exportados como constantes TS
├── components/
│   ├── ui/
│   │   ├── index.ts             # Barrel export
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx             # Card + CardHeader
│   │   ├── Checkbox.tsx
│   │   ├── Input.tsx
│   │   ├── MetricCard.tsx
│   │   ├── PageHeader.tsx
│   │   ├── PieChart.tsx
│   │   └── ProgressBar.tsx
│   ├── Sidebar.tsx              # Navegação lateral
│   └── AppLayout.tsx            # Layout com sidebar + outlet
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
└── App.tsx                      # Rotas
```
