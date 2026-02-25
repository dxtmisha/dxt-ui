/**
 * Generates the Vite configuration for Figma plugin development.
 *
 * Генерирует конфигурацию Vite для разработки плагинов Figma.
 * @param isWatch Whether the build is running in watch mode / Запущен ли билд в режиме наблюдения
 * @param dirname The absolute path to the current directory / Абсолютный путь к текущей директории
 * @returns The Vite configuration object or function / Объект конфигурации Vite или функция
 */
export declare const viteFigma: (isWatch: boolean, dirname: string) => import('vite').UserConfigExport
