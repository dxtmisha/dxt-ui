// export:none

import { getNameDirByPaths } from '../../functions/getNameDirByPaths'
import { useAi } from '../../composables/useAi'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { BuildItem } from '../BuildItem'
import { ComponentWikiFile } from './ComponentWikiFile'

import type { AiAbstract } from '../Ai/AiAbstract'

import {
  UI_DIR_TEMPORARY,
  UI_DIR_WIKI,
  UI_DIRS_COMPONENTS
} from '../../config'

/** Sample templates directory / Директория с шаблонами */
const DIR_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'prompts']
/** Sample AI prompt template path / Путь к шаблону AI-промпта */
const FILE_PROMPT_SAMPLE = [...DIR_SAMPLE, 'componentPrompt.ru.txt']
/** Sample demo component MDX path / Путь к MDX демо-компоненту */
const FILE_DEMO_SAMPLE = [...DIR_SAMPLE, 'demoComponentRu.mdx']
/** Marker indicating no changes needed / Метка, указывающая на отсутствие изменений */
const MARK_FULL = '--FULL--'

/**
 * Generates wiki artifacts (code snapshot, stories, mdx) for a component.
 * Uses a temporary build + AI prompt to (re)create documentation.
 *
 * Генерирует wiki-артефакты (снимок кода, stories, mdx) для компонента.
 * Использует временный билд + AI промпт для (пере)создания документации.
 */
export class ComponentWiki {
  protected readonly build: BuildItem

  /** Code file (original or AI regenerated) / Файл кода (оригинал или пересозданный ИИ) */
  protected readonly codeFile: ComponentWikiFile
  /** Types file (original or AI regenerated) / Файл типов (оригинал или пересозданный ИИ) */
  protected readonly typesFile: ComponentWikiFile
  /** Stories file (Storybook) / Файл сторис (Storybook) */
  protected readonly storiesFile: ComponentWikiFile
  /** MDX documentation file / Файл MDX документации */
  protected readonly mdFile: ComponentWikiFile

  /** Raw AI output file / Файл «сырого» вывода ИИ */
  protected readonly aiFile: ComponentWikiFile

  /** AI instance / Экземпляр ИИ */
  protected readonly ai?: AiAbstract

  /** Description from AI / Описание от ИИ */
  protected description?: string

  /**
   * Constructor
   * @param path component relative path inside components dirs/ относительный путь компонента внутри директорий компонентов
   * @param prompt additional custom prompt text to append/ дополнительный кастомный текст промпта для добавления
   */
  constructor(
    protected readonly path: string,
    protected readonly prompt: string = ''
  ) {
    this.build = new BuildItem(
      `${this.getRootComponent().join('/')}/index.ts`
    )

    this.codeFile = new ComponentWikiFile([
      ...this.getRootComponent(),
      `${this.getName()}.vue`
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

    this.aiFile = new ComponentWikiFile([
      ...this.getPathTemporary(),
      'ai.txt'
    ])

    this.ai = useAi()
  }

  /**
   * Orchestrates build + file extraction + AI generation.
   *
   * Оркестрирует билд + извлечение файлов + генерацию через ИИ.
   */
  make(): void {
    console.log('Component wiki:', this.path, '...')

    if (this.ai) {
      this.build
        .make()
        .then((status) => {
          if (status) {
            this.makeAi()
            this.aiGenerate()
              .then(() => {
                console.log('...', 'End')
                this.build.removeDir()
              })
          } else {
            console.log('Error!', this.path)
          }
        })
    } else {
      console.error('AI is not configured.')
    }
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
   * Derives component folder name.
   *
   * Получает имя директории компонента.
   */
  protected getName(): string {
    return String(getNameDirByPaths(this.getRootComponent()))
  }

  /**
   * Reads the demo file content.
   *
   * Читает содержимое демо-файла.
   */
  protected readDemo(): string {
    return new ComponentWikiFile(FILE_DEMO_SAMPLE).read()
  }

  /**
   * Reads the prompt template.
   *
   * Читает шаблон промпта.
   */
  protected readPrompt(): string {
    return new ComponentWikiFile(FILE_PROMPT_SAMPLE)
      .read()
      .replace(/\[wikiLanguage]/g, PropertiesConfig.getWikiLanguage())
  }

  /**
   * Prepares context for AI.
   *
   * Подготавливает контекст для ИИ.
   */
  protected makeAi(): void {
    if (this.ai) {
      this.ai.addContent(`Code: ${this.build.getCode()}`)
      this.ai.addContent(`Original code: ${this.codeFile.read()}`)
      this.ai.addContent(`Original types.ts: ${this.typesFile.read()}`)
      this.ai.addContent(`Demo: ${this.readDemo()}`)
      this.ai.addContent(`Original *.stories.ts: ${this.storiesFile.read()}`)
      this.ai.addContent(`Original MDX: ${this.mdFile.read()}`)
    }
  }

  /**
   * Invokes AI generation and splits result into types / stories / mdx.
   *
   * Вызывает генерацию через ИИ и делит результат на types / stories / mdx.
   */
  protected async aiGenerate(): Promise<void> {
    if (this.ai) {
      const generate = await this.ai.generate(
        this.readPrompt()
      )

      if (generate) {
        const read = generate.split('#########')

        if (read?.[0]) {
          this.description = read[0].trim()
        }

        if (
          read?.[1]
          && !read[1].match(MARK_FULL)
        ) {
          this.codeFile.write(read[1])
        }

        if (
          read?.[2]
          && !read[2].match(MARK_FULL)
        ) {
          this.typesFile.write(read[2])
        }

        if (
          read?.[3]
          && !read[3].match(MARK_FULL)
        ) {
          this.storiesFile.write(read[3])
        }

        if (read?.[4]) {
          this.mdFile.write(read[4])
        }

        this.aiFile.write(generate)
      }
    }
  }
}
