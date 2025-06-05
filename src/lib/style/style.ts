// 공통 스타일 변수들

// 트랜지션 스타일
export const transitions = {
  default: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-500 ease-in-out',
  transform: 'transition-transform duration-300',
  opacity: 'transition-opacity duration-200'
} as const;

// 포커스 스타일
export const focus = {
  default: 'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2',
  primary: 'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2 focus:border-primary-400',
  rounded: 'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2 rounded-lg'
} as const;

// 호버 효과
export const hover = {
  scale: 'hover:scale-105 active:scale-[0.98]',
  scaleSmall: 'active:scale-[0.98]',
  lift: 'hover:-translate-y-0.5',
  glow: 'hover:shadow-md hover:shadow-primary-500/10'
} as const;

// 그라데이션 배경
export const gradients = {
  primaryBg: 'bg-gradient-to-br from-primary-50 to-primary-100/50',
  primaryGlow: 'bg-gradient-to-r from-primary-500/10 to-primary-600/10',
  primaryLine: 'bg-gradient-to-r from-primary-500 to-primary-600'
} as const;

// 그림자 효과
export const shadows = {
  sm: 'shadow-sm shadow-gray-900/5',
  default: 'shadow-sm shadow-gray-900/5',
  md: 'shadow-md shadow-primary-500/10',
  glass: 'shadow-sm shadow-gray-900/5'
} as const;

// 배경 스타일
export const backgrounds = {
  glass: 'backdrop-blur-xl',
  glassBorder: 'bg-white/95 border-b border-gray-200/80',
  glassNoBorder: 'bg-white/90 border-b border-transparent'
} as const;

// 버튼 스타일
export const buttons = {
  base: 'group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-xl',
  primary: 'bg-white text-gray-700 border border-gray-300',
  primaryHover: 'hover:bg-gray-50 hover:text-primary-600 hover:border-primary-300',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300'
} as const;

// 레이아웃 스타일
export const layout = {
  container: 'max-w-7xl mx-auto',
  nav: 'flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8',
  sticky: 'sticky top-0 z-50 w-full'
} as const;

// 텍스트 스타일
export const text = {
  logo: 'text-2xl font-bold text-gray-900 tracking-tight',
  logoHover: 'hover:text-primary-500'
} as const;

// 애니메이션 효과
export const animations = {
  glowEffect: 'absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10',
  underline: 'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full rounded-full',
  buttonGlow: 'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100',
  iconMove: 'relative ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5'
} as const;

// 스타일 조합 함수들
export const combineStyles = (...styles: string[]) => styles.join(' ');

export const createNavStyles = (isScrolled: boolean) => 
  combineStyles(
    layout.sticky,
    backgrounds.glass,
    transitions.default,
    isScrolled ? backgrounds.glassBorder : backgrounds.glassNoBorder,
    isScrolled ? shadows.sm : ''
  );

export const createLogoStyles = () => 
  combineStyles(
    'group relative',
    text.logo,
    transitions.default,
    text.logoHover,
    focus.rounded,
    hover.scaleSmall
  );

export const createButtonStyles = () => 
  combineStyles(
    buttons.base,
    buttons.primary,
    shadows.default,
    transitions.fast,
    buttons.primaryHover,
    hover.glow,
    focus.primary,
    hover.scaleSmall,
    buttons.disabled
  );