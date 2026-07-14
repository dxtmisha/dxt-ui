import { executeUseLocal, useApiAsyncRef } from '@dxtmisha/functional'

export interface DemoApiData {
  status: string | number
  message: string
  version?: string
  description?: string
}

/**
 * Hook for managing the hello API data.
 *
 * Хук для управления данными API hello.
 */
const item = executeUseLocal(() => {
  const { data } = useApiAsyncRef<DemoApiData>('hello')

  return {
    /** The Hello API response data / Данные ответа API Hello */
    data
  }
})

/**
 * Composable for managing the hello API data.
 *
 * Композиция для управления данными API hello.
 */
export const useDemoApi = () => item()
