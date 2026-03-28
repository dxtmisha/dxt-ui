import type { ErrorCenterCauseList } from '../types/errorCenter'

export const errorCauseList: ErrorCenterCauseList = [
  // Unknown API error / Неизвестная ошибка API
  {
    group: 'api',
    code: 'unknown',
    label: 'Unknown Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Timeout error / Ошибка таймаута
  {
    group: 'api',
    code: 'timeout',
    label: 'Request Timeout',
    message: 'The request took too long to complete. Please check your connection.'
  },
  // No internet connection error / Ошибка при отсутствии подключения к интернету
  {
    group: 'api',
    code: 'offline',
    label: 'No Internet Connection',
    message: 'Your device is currently offline. Please check your network settings.'
  },
  // Resource not found (404) / Ресурс не найден (404)
  {
    group: 'api',
    code: 'notFound',
    label: 'Resource Not Found',
    message: 'The requested resource could not be found on the server.'
  },
  // Internal server error (500) / Внутренняя ошибка сервера (500)
  {
    group: 'api',
    code: 'server',
    label: 'Internal Server Error',
    message: 'Something went wrong on our end. We are working to fix it.'
  },

  // Broadcast error / Ошибка BroadcastChannel
  {
    group: 'broadcast',
    code: 'error',
    label: 'Broadcast Error',
    message: 'An unexpected error occurred. Please try again later.'
  },

  // Storage error / Ошибка хранилища
  {
    group: 'storage',
    code: 'error',
    label: 'Storage Error',
    message: 'An unexpected error occurred. Please try again later.'
  },

  // Intl display error / Ошибка Intl display
  {
    group: 'intl',
    code: 'display',
    label: 'Intl Display Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Intl plural error / Ошибка Intl plural
  {
    group: 'intl',
    code: 'plural',
    label: 'Intl Plural Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Intl relative error / Ошибка Intl relative
  {
    group: 'intl',
    code: 'relative',
    label: 'Intl Relative Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Intl datetime error / Ошибка Intl datetime
  {
    group: 'intl',
    code: 'datetime',
    label: 'Intl Datetime Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Intl number error / Ошибка Intl number
  {
    group: 'intl',
    code: 'number',
    label: 'Intl Number Error',
    message: 'An unexpected error occurred. Please try again later.'
  }
]
