export const API_CONFIG = {
  BASE_URL: '/api',
  TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3,
} as const

export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 300,
  MAX_CHAT_MESSAGES: 50,
} as const

export const DATE_FORMATS = {
  DISPLAY: 'PPP',
  ISO: 'yyyy-MM-dd',
  TIME: 'HH:mm',
} as const