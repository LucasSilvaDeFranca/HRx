/**
 * HRx Design System — Design Tokens
 * Extraídos do Figma: Manar HRx - Arquivo Final
 *
 * Fonte primária: DM Sans (Google Fonts)
 * Base visual: Untitled UI, customizado com paleta HRx
 */

// ============================================================
// 1. PALETA DE CORES
// ============================================================

export const colors = {
  // --- Primary (Azul/Roxo) ---
  primary: {
    25: '#E4E3FF',   // Borders, dividers, input borders
    50: '#D2D1FF',   // Light backgrounds
    500: '#7A88FF',  // Avatar borders, focus rings
    600: '#637BFF',  // Botões primários, CTA
    700: '#456DFF',  // Sidebar ativo, títulos, links
  },

  // --- Gray (Neutros) ---
  gray: {
    50: '#F9FAFB',   // Breadcrumb bg, hover states
    100: '#F2F4F7',  // Subtle backgrounds
    200: '#EAECF0',  // Dividers (sidebar footer)
    300: '#D0D5DD',  // Social button border
    400: '#98A2B3',  // Placeholder text, chevrons
    500: '#667085',  // Supporting text, footer
    600: '#475467',  // Secondary text, email
    700: '#344054',  // Breadcrumb text, social btn text
    900: '#101828',  // Headings (login)
  },

  // --- Gray Blue ---
  grayBlue: {
    700: '#363F72',  // Sidebar text, labels, nav items, card titles, values
  },

  // --- Blue Light (Badges) ---
  blueLight: {
    50: '#F0F9FF',   // Badge bg
    200: '#B9E6FE',  // Badge border, pie chart segment
    700: '#026AA2',  // Badge text
  },

  // --- Success (Verde) ---
  success: {
    25: '#F6FEF9',   // Progress card bg (atingidas)
    100: '#DCFAE6',  // Progress card icon bg, progress bar bg
    700: '#067647',  // Progress card text, progress bar fill
  },

  // --- Warning (Amarelo/Laranja) ---
  warning: {
    25: '#FFFCF5',   // Progress card bg (em andamento)
    100: '#FEF0C7',  // Progress card icon bg, progress bar bg
    300: '#FEC84B',  // Accent
    500: '#F79009',  // Progress card text, progress bar fill
  },

  // --- Error (Vermelho) ---
  error: {
    25: '#FFFBFA',   // Progress card bg (não atingidas)
    100: '#FEE4E2',  // Progress card icon bg, progress bar bg
    300: '#FDA29B',  // Accent
    600: '#D92D20',  // Progress card text, progress bar fill
  },

  // --- Base ---
  white: '#FFFFFF',
  pageBg: '#F8FAFB',
  textDark: '#282A2F',  // Input value text, metric labels

  // --- Avatar ---
  avatarBg: '#CFCBDC',

  // --- Gradients ---
  gradients: {
    metricIcon: 'linear-gradient(135deg, #868EFF 0%, #4318FF 100%)',
  },
} as const

// ============================================================
// 2. TIPOGRAFIA — DM Sans
// ============================================================

export const typography = {
  fontFamily: "'DM Sans', sans-serif",
  fontFamilySecondary: "'Inter', sans-serif", // Usado só no email do sidebar

  // --- Escala Tipográfica ---
  // Formato: { size, lineHeight, weight, letterSpacing }

  'text-xxs': {
    regular: { size: 10, lineHeight: 18, weight: 400 }, // Footer ©
  },

  'text-xs': {
    medium: { size: 12, lineHeight: 18, weight: 500 },  // Metric labels, badge text
  },

  'text-sm': {
    regular:  { size: 14, lineHeight: 21, weight: 400 },  // Supporting text (line-height 1.5)
    medium:   { size: 14, lineHeight: 20, weight: 500 },  // Buttons sm, labels, nav items sm
    semibold: { size: 14, lineHeight: 20, weight: 500 },  // Input labels (DM Sans Medium = semibold)
    bold:     { size: 14, lineHeight: 20, weight: 700 },  // Checkbox label "Lembrar de mim"
  },

  'text-md': {
    regular:  { size: 16, lineHeight: 24, weight: 400 },  // Input placeholder, supporting text
    semibold: { size: 16, lineHeight: 24, weight: 500 },  // Sidebar nav items, card headers
  },

  'text-lg': {
    medium: { size: 18, lineHeight: 28, weight: 500 },    // Button CTA "Entrar" (underline)
  },

  'display-xs': {
    medium: { size: 24, lineHeight: 32, weight: 500 },    // Metric values "125", "R$ 3.239,00"
  },

  'display-sm': {
    medium: { size: 30, lineHeight: 38, weight: 500 },    // Login "Bem-vindo"
    bold:   { size: 30, lineHeight: 38, weight: 700 },    // Dashboard title
  },
} as const

// ============================================================
// 3. SOMBRAS
// ============================================================

export const shadows = {
  xs:   '0px 1px 2px rgba(16, 24, 40, 0.05)',
  logo: '0px 1.5px 4.5px rgba(16, 24, 40, 0.1), 0px 1.5px 3px rgba(16, 24, 40, 0.06)',
  sidebarLogo: '0px 1.188px 3.563px rgba(16, 24, 40, 0.1), 0px 1.188px 2.375px rgba(16, 24, 40, 0.06)',
} as const

// ============================================================
// 4. BORDER RADIUS
// ============================================================

export const radius = {
  xs:   4,   // Checkbox
  sm:   6,   // Nav items, breadcrumb items
  md:   8,   // Inputs, buttons, log-out btn
  lg:   10,  // Metric icon container
  xl:   12,  // Cards, form containers
  '2xl': 16, // Badges
  '3xl': 20, // Login image
  full: 9999, // Avatars
} as const

// ============================================================
// 5. ESPAÇAMENTOS (valores recorrentes em px)
// ============================================================

export const spacing = {
  // --- Page Layout ---
  sidebarWidth: 280,
  pageTopPadding: 82,
  pageHorizontalPadding: 32,
  pageBottomPadding: 48,
  sectionGap: 32,

  // --- Sidebar ---
  sidebarPaddingTop: 32,
  sidebarPaddingBottom: 32,
  sidebarNavPaddingX: 16,
  sidebarHeaderPaddingLeft: 24,
  sidebarHeaderPaddingRight: 20,
  sidebarNavItemGap: 4,
  sidebarSectionGap: 24,

  // --- Cards ---
  cardPadding: 24,
  cardHeaderPaddingTop: 14,
  cardHeaderPaddingX: 24,
  cardGap: 16,     // Gap entre cards no grid
  metricGap: 20,   // Gap entre icon e texto no metric card

  // --- Form ---
  formGap: 32,         // Gap entre seções do form (login)
  formInputGap: 20,    // Gap entre campos
  formLabelGap: 6,     // Gap entre label e input
  formActionsGap: 16,  // Gap entre botões de ação
  formSocialGap: 12,   // Gap entre social buttons

  // --- Componentes ---
  inputPaddingX: 14,
  inputPaddingY: 10,
  inputGap: 8,

  buttonPaddingXSm: 14,
  buttonPaddingXMd: 16,
  buttonPaddingXLg: 18,
  buttonPaddingY: 10,
  buttonGap: 8,

  badgePaddingX: 8,
  badgePaddingY: 2,

  navItemPaddingX: 18,
  navItemPaddingY: 14,
  navItemIconGap: 12,

  avatarSize: 40,
  avatarSizeSm: 36,
  metricIconSize: 48,
  iconSize: 24,
  iconSizeSm: 20,
  iconSizeXs: 18,
  iconSizeXxs: 16,

  tableRowPaddingX: 24,
  tableRowPaddingY: 12,
  tableRowGap: 12,

  progressBarHeight: 8,
  progressCardPadding: 16,
  progressCardGap: 18,
  progressCardIconSize: 40,
} as const

// ============================================================
// 6. DIMENSÕES DE COMPONENTES
// ============================================================

export const componentSizes = {
  // --- Layout ---
  screenWidth: 1440,
  sidebarWidth: 280,
  contentWidth: 1160,

  // --- Metric Cards ---
  metricCardWidth: 262,
  metricCardHeight: 110,

  // --- Table Cards ---
  tableCardLargeWidth: 540,
  tableCardSmallWidth: 262,
  tableCardTallHeight: 488,
  tableCardShortHeight: 362,

  // --- Login ---
  loginFormWidth: 360,
  loginImageWidth: 720,
  loginLogoSize: 48,

  // --- Sidebar ---
  sidebarLogoWidth: 109.25,
  sidebarLogoHeight: 38,
  sidebarLogoIconSize: 38,

  // --- Input ---
  inputHeight: 44,      // py-10 + line-height 24 = 44px

  // --- Button ---
  buttonHeightSm: 36,   // py-8 (padding 8px top+bottom) + 20px line
  buttonHeightMd: 40,   // py-10 + 20px line
  buttonHeightLg: 48,   // py-10 + 28px line

  // --- Checkbox ---
  checkboxSize: 16,

  // --- Card Header Icon ---
  cardHeaderIconSize: 36,
  cardHeaderIconBorder: 1.125,
  cardHeaderIconRadius: 6.75,
} as const
