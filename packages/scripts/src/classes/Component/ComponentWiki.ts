// export:none

import { isFilled } from '@dxtmisha/functional-basic'
import { getNameDirByPaths } from '../../functions/getNameDirByPaths'
import { useAi } from '../../composables/useAi'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { ComponentWikiFile } from './ComponentWikiFile'
import { ComponentBuild } from './ComponentBuild'

import {
  UI_DIR_DIST,
  UI_DIR_TEMPORARY,
  UI_DIR_WIKI,
  UI_DIRS_COMPONENTS
} from '../../config'

// Sample AI prompt template path / Путь к шаблону AI-промпта
const FILE_PROMPT_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'componentPrompt.en.txt']

/**
 * Generates wiki artifacts (code snapshot, stories, mdx) for a component.
 * Uses a temporary build + AI prompt to (re)create documentation.
 *
 * Генерирует wiki-артефакты (снимок кода, stories, mdx) для компонента.
 * Использует временный билд + AI промпт для (пере)создания документации.
 */
export class ComponentWiki {
  protected readonly build: ComponentBuild

  // Template prompt file / Файл шаблона промпта
  protected readonly promptSample: ComponentWikiFile

  // Aggregated built code file / Файл агрегированного собранного кода
  protected readonly codeFile: ComponentWikiFile
  // Types file (original or AI regenerated) / Файл типов (оригинал или пересозданный ИИ)
  protected readonly typesFile: ComponentWikiFile
  // Stories file (Storybook) / Файл сторис (Storybook)
  protected readonly storiesFile: ComponentWikiFile
  // MDX documentation file / Файл MDX документации
  protected readonly mdFile: ComponentWikiFile

  // Prepared AI prompt file / Файл подготовленного AI промпта
  protected readonly promptFile: ComponentWikiFile
  // Raw AI output file / Файл «сырого» вывода ИИ
  protected readonly aiFile: ComponentWikiFile

  /**
   * Constructor
   * @param path component relative path inside components dirs/ относительный путь компонента внутри директорий компонентов
   * @param prompt additional custom prompt text to append/ дополнительный кастомный текст промпта для добавления
   */
  constructor(
    protected readonly path: string,
    protected readonly prompt: string = ''
  ) {
    this.build = new ComponentBuild(this.getRootComponent().join('/'))
    this.promptSample = new ComponentWikiFile(FILE_PROMPT_SAMPLE)

    this.codeFile = new ComponentWikiFile([
      ...this.getPathTemporary(),
      'code.txt'
    ])

    this.typesFile = new ComponentWikiFile([
      ...this.getRootComponent(),
      'types.ts'
    ])

    this.storiesFile = new ComponentWikiFile([
      ...this.getPathWiki(),
      `${this.getName()}.stories.ts`
    ])

    this.mdFile = new ComponentWikiFile([
      ...this.getPathWiki(),
      `${this.getName()}.mdx`
    ])

    this.promptFile = new ComponentWikiFile([
      ...this.getPathTemporary(),
      'prompt.txt'
    ])

    this.aiFile = new ComponentWikiFile([
      ...this.getPathTemporary(),
      'ai.txt'
    ])
  }

  /**
   * Orchestrates build + file extraction + AI generation.
   *
   * Оркестрирует билд + извлечение файлов + генерацию через ИИ.
   */
  make(): void {
    console.log('Component wiki:', this.path)

    this.build
      .make()
      .then((status) => {
        if (status) {
          this.readAndWriteALlFiles()
          this.readAndWritePrompt()

          this.aiGenerate().then(() => console.log('End'))
        } else {
          console.log('Error!', this.path)
        }
      })
  }

  /**
   * Returns root path segments for the component.
   *
   * Возвращает сегменты корневого пути компонента.
   */
  protected getRootComponent(): string[] {
    return [
      ...UI_DIRS_COMPONENTS,
      ...this.path.split('/')
    ]
  }

  /**
   * Returns wiki directory path segments.
   *
   * Возвращает сегменты пути wiki директории.
   */
  protected getPathWiki(): string[] {
    return [
      ...this.getRootComponent(),
      UI_DIR_WIKI
    ]
  }

  /**
   * Returns temporary directory path segments.
   *
   * Возвращает сегменты пути временной директории.
   */
  protected getPathTemporary(): string[] {
    return [
      ...this.getPathWiki(),
      UI_DIR_TEMPORARY
    ]
  }

  /**
   * Returns distribution temp directory path segments.
   *
   * Возвращает сегменты пути дистрибутива (temp).
   */
  protected getPathTemporaryDist(): string[] {
    return [
      ...this.getPathTemporary(),
      UI_DIR_DIST
    ]
  }

  /**
   * Derives component folder name.
   *
   * Получает имя директории компонента.
   */
  protected getName(): string {
    return String(getNameDirByPaths(this.getRootComponent()))
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
   * Builds AI prompt by injecting dynamic code/types/stories/mdx content.
   *
   * Формирует AI промпт, подставляя динамический код/типы/stories/mdx.
   */
  protected readAndWritePrompt(): void {
    this.promptFile.write(
      this.promptSample
        .read()
        .replace('[code]', this.codeFile.read())
        .replace('[types]', this.typesFile.read())
        .replace('[stories]', this.storiesFile.read())
        .replace('[md]', this.mdFile.read())
        .replace(/\[wikiLanguage]/g, PropertiesConfig.getWikiLanguage())
        + (isFilled(this.prompt) ? `Additional conditions (these conditions take priority): ${this.prompt}` : '')
    )
  }

  /**
   * Invokes AI generation and splits result into types / stories / mdx.
   *
   * Вызывает генерацию через ИИ и делит результат на types / stories / mdx.
   */
  protected async aiGenerate(): Promise<void> {
    const prompt = this.promptFile.read()
    const generate = await useAi()?.generate(prompt)

    if (generate) {
      const files = generate.split('#########')

      this.typesFile.write(files[0] ?? '')
      this.storiesFile.write(files[1] ?? '')
      this.mdFile.write(files[2] ?? '')

      this.aiFile.write(generate)

      PropertiesFile.removeDir(this.getPathTemporary())
    }
  }
}
