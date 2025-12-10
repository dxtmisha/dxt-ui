import { promisify } from 'node:util'
import { exec } from 'node:child_process'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { ComponentWikiFile } from './ComponentWikiFile'

import { UI_FILE_NAME_VITE, UI_FILE_NAME_VITE_WORKERS } from '../../config'

// Sample Vite config template path / Путь к шаблону Vite-конфига
const FILE_VITE_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'viteComponentTemplateConfig.ts']

// Async exec wrapper / Обёртка для асинхронного exec
const execAsync = promisify(exec)

/**
 * Builds a component using a temporary Vite config.
 *
 * Билдит компонент с использованием временного Vite-конфига.
 */
export class ComponentBuild {
  // Template vite config file / Файл шаблона vite-конфига
  protected readonly viteSample: ComponentWikiFile

  constructor(
    protected readonly path: string
  ) {
    this.viteSample = new ComponentWikiFile(FILE_VITE_SAMPLE)
  }

  /**
   * Prepares temporary vite config, triggers build, then restores original.
   *
   * Готовит временный vite-конфиг, запускает билд, затем восстанавливает оригинал.
   */
  async make(): Promise<boolean> {
    this.saveViteConfig()

    const vite = this.viteSample
      .read()
      .replace('[path]', this.path)

    PropertiesFile.writeByPath(UI_FILE_NAME_VITE, vite)

    const status = await this.run()

    this.resetViteConfig()

    return status
  }

  /**
   * Saves existing vite config aside (rename) before custom build.
   *
   * Сохраняет существующий vite-конфиг (переименовывает) перед кастомным билдом.
   */
  protected saveViteConfig() {
    if (
      !PropertiesFile.is(UI_FILE_NAME_VITE_WORKERS)
    ) {
      PropertiesFile.rename(
        UI_FILE_NAME_VITE,
        UI_FILE_NAME_VITE_WORKERS
      )
    }
  }

  /**
   * Restores original vite config after build.
   *
   * Восстанавливает оригинальный vite-конфиг после билда.
   */
  protected resetViteConfig() {
    if (
      PropertiesFile.is(UI_FILE_NAME_VITE_WORKERS)
    ) {
      PropertiesFile.removeFile(UI_FILE_NAME_VITE)
      PropertiesFile.rename(
        UI_FILE_NAME_VITE_WORKERS,
        UI_FILE_NAME_VITE
      )
    }
  }

  /**
   * Runs build command (npm run build) capturing stdout/stderr.
   *
   * Запускает команду билда (npm run build), перехватывая stdout/stderr.
   */
  protected async run(): Promise<boolean> {
    try {
      const { stdout, stderr } = await execAsync('npm run build')

      console.info(stdout)

      if (stderr) {
        console.error('STD error', stderr)
      }

      return true
    } catch (error) {
      console.error('Error', error)
    }

    return false
  }
}
