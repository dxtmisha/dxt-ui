import type { ErrorCenterCauseList } from '../types/errorCenter'

export const errorCauseList: ErrorCenterCauseList = [
  // ApiCache background cleaning error / Ошибка фоновой очистки ApiCache
  {
    group: 'api',
    code: 'cacheClear',
    label: 'Cache Clearing Error',
    message: 'An error occurred during background cache cleaning.'
  },
  // ApiCache get error / Ошибка получения из кэша
  {
    group: 'api',
    code: 'cacheGet',
    label: 'Cache Get Error',
    message: 'Failed to retrieve data from the cache.'
  },
  // ApiCache remove error / Ошибка удаления из кэша
  {
    group: 'api',
    code: 'cacheRemove',
    label: 'Cache Remove Error',
    message: 'Failed to remove data from the cache.'
  },
  // ApiCache set error / Ошибка сохранения в кэш
  {
    group: 'api',
    code: 'cacheSet',
    label: 'Cache Set Error',
    message: 'Failed to save data to cache.'
  },
  // Forbidden error (403) / Доступ запрещен (403)
  {
    group: 'api',
    code: 'forbidden',
    label: 'Forbidden',
    message: 'You do not have the necessary permissions to access this resource.'
  },
  // Resource not found (404) / Ресурс не найден (404)
  {
    group: 'api',
    code: 'notFound',
    label: 'Resource Not Found',
    message: 'The requested resource could not be found on the server.'
  },
  // No internet connection error / Ошибка при отсутствии подключения к интернету
  {
    group: 'api',
    code: 'offline',
    label: 'No Internet Connection',
    message: 'Your device is currently offline. Please check your network settings.'
  },
  // Internal server error (500) / Внутренняя ошибка сервера (500)
  {
    group: 'api',
    code: 'server',
    label: 'Internal Server Error',
    message: 'Something went wrong on our end. We are working to fix it.'
  },
  // Timeout error / Ошибка таймаута
  {
    group: 'api',
    code: 'timeout',
    label: 'Request Timeout',
    message: 'The request took too long to complete. Please check your connection.'
  },
  // Unauthorized error (401) / Ошибка авторизации (401)
  {
    group: 'api',
    code: 'unauthorized',
    label: 'Unauthorized access',
    message: 'Your session has expired, or you do not have permission to access this resource.'
  },
  // Unknown API error / Неизвестная ошибка API
  {
    group: 'api',
    code: 'unknown',
    label: 'Unknown Error',
    message: 'An unexpected error occurred. Please try again later.'
  },

  // Broadcast error / Ошибка BroadcastChannel
  {
    group: 'broadcast',
    code: 'error',
    label: 'Broadcast Error',
    message: 'An unexpected error occurred. Please try again later.'
  },

  // Clipboard error / Ошибка буфера обмена
  {
    group: 'clipboard',
    code: 'error',
    label: 'Clipboard Error',
    message: 'An unexpected error occurred while accessing the clipboard.'
  },

  // Hydration error / Ошибка гидратации
  {
    group: 'hydration',
    code: 'error',
    label: 'Hydration Error',
    message: 'An error occurred during data hydration.'
  },

  // Intl datetime error / Ошибка Intl datetime
  {
    group: 'intl',
    code: 'datetime',
    label: 'Intl Datetime Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Intl invalid date error / Ошибка невалидной даты
  {
    group: 'intl',
    code: 'invalid',
    label: 'Invalid Date',
    message: 'The provided date is invalid or in an incorrect format.'
  },
  // Intl display error / Ошибка Intl display
  {
    group: 'intl',
    code: 'display',
    label: 'Intl Display Error',
    message: 'An unexpected error occurred. Please try again later.'
  },
  // Intl number error / Ошибка Intl number
  {
    group: 'intl',
    code: 'number',
    label: 'Intl Number Error',
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

  // Share error / Ошибка Share
  {
    group: 'share',
    code: 'error',
    label: 'Share Error',
    message: 'An unexpected error occurred during sharing.'
  },

  // ServerStorage context missing error / Ошибка отсутствия контекста ServerStorage
  {
    group: 'storage',
    code: 'context',
    label: 'Context Missing Error',
    message: 'Storage context is missing (is init() called?). Isolation failed: data will not be saved for this request.'
  },
  // Storage error / Ошибка хранилища
  {
    group: 'storage',
    code: 'error',
    label: 'Storage Error',
    message: 'An unexpected error occurred. Please try again later.'
  },

  // Transformation error / Ошибка преобразования
  {
    group: 'transformation',
    code: 'error',
    label: 'Transformation Error',
    message: 'An error occurred during data transformation.'
  },

  // Translate loading error / Ошибка загрузки перевода
  {
    group: 'translate',
    code: 'error',
    label: 'Translate Error',
    message: 'An error occurred while loading translations.'
  }
]
