import { promisify } from 'node:util'
import { exec } from 'node:child_process'

import { PropertiesFile } from './Properties/PropertiesFile'
import { ComponentWikiFile } from './Component/ComponentWikiFile'

import { UI_DIR_DIST_TEMPORARY, UI_FILE_NAME_VITE, UI_FILE_NAME_VITE_WORKERS } from '../config'

/** Template vite config file path / Путь к файлу шаблона vite-конфига */
const FILE_VITE_SAMPLE = [__dirname, '..', 'media', 'templates', 'viteComponentTemplateConfig.ts']

/** Async exec wrapper / Обёртка для асинхронного exec */
const execAsync = promisify(exec)

/**
 * Builds a component using a temporary Vite config.
 *
 * Билдит компонент с использованием временного Vite-конфига.
 */
export class BuildItem {
  /** Template vite config file / Файл шаблона vite-конфига */
  protected readonly viteSample: ComponentWikiFile

  /** Aggregated built code file / Файл агрегированного собранного кода */
  protected readonly codeFile: ComponentWikiFile

  /**
   * Constructor
   * @param path component path / путь к компоненту
   */
  constructor(
    protected readonly path: string
  ) {
    this.viteSample = new ComponentWikiFile(FILE_VITE_SAMPLE)

    this.codeFile = new ComponentWikiFile([
      ...this.getPathTemporaryDist(),
      'code.txt'
    ])
  }

  /**
   * Returns distribution temp directory path segments.
   *
   * Возвращает сегменты пути дистрибутива (temp).
   */
  getPathTemporaryDist(): string[] {
    return [
      UI_DIR_DIST_TEMPORARY
    ]
  }

  /**
   * Returns aggregated built code content.
   *
   * Возвращает содержимое агрегированного собранного кода.
   */
  getCode(): string {
    return this.codeFile.read()
  }

  /**
   * Removes temporary distribution directory.
   *
   * Удаляет временную директорию дистрибутива.
   */
  removeDir(): void {
    PropertiesFile.removeDir(this.getPathTemporaryDist())
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
    this.readAndWriteALlFiles()

    if (!status) {
      process.exit(601)
    }

    return status
  }

  /**
   * Saves existing vite config aside (rename) before custom build.
   *
   * Сохраняет существующий vite-конфиг (переименовывает) перед кастомным билдом.
   */
  protected saveViteConfig() {
    if (!PropertiesFile.is(UI_FILE_NAME_VITE_WORKERS)) {
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
    if (PropertiesFile.is(UI_FILE_NAME_VITE_WORKERS)) {
      PropertiesFile.removeFile(UI_FILE_NAME_VITE)
      PropertiesFile.rename(
        UI_FILE_NAME_VITE_WORKERS,
        UI_FILE_NAME_VITE
      )
    }
  }

  /**
   * Reads built file content and wraps with header comment (file name).
   *
   * Читает содержимое собранного файла и оборачивает заголовком с именем файла.
   * @param path relative built file path / относительный путь собранного файла
   */
  protected readFile(path: string): string {
    const pathFull = PropertiesFile.joinPath([...this.getPathTemporaryDist(), path])
    const content = PropertiesFile.readFileOnly(pathFull)

    return `
// File: ${path}
${content}
    `.trim()
  }

  /**
   * Aggregates all built files into a single code snapshot file.
   *
   * Агрегирует все собранные файлы в единый снимок кода.
   */
  protected readAndWriteALlFiles(): void {
    const list = PropertiesFile.readDirRecursive(this.getPathTemporaryDist())
    const content: string[] = []

    list.forEach((file) => {
      content.push(this.readFile(file))
    })

    this.codeFile.write(content.join('\r\n'))
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
