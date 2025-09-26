/**
 * Creates a base Vite config for libraries with only Vue components.
 *
 * Создаёт базовую конфигурацию Vite для библиотек только с Vue-компонентами.
 * @param path path to entry file / путь к входному файлу
 * @param packages path to packages / путь к пакетам
 */
export declare const viteComponentOnly: (
  path?: string,
  packages?: string
) => import('vite').UserConfig
