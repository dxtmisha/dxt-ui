import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { getNameDirByPaths } from '../../functions/getNameDirByPaths'
import { useAi } from '../../composables/useAi'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { ComponentWikiFile } from './ComponentWikiFile'

import {
  UI_DIR_DIST,
  UI_DIR_TEMPORARY,
  UI_DIR_WIKI,
  UI_DIRS_COMPONENTS,
  UI_FILE_NAME_VITE,
  UI_FILE_NAME_VITE_WORKERS
} from '../../config'

const FILE_VITE_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'viteComponentTemplateConfig.ts']
const FILE_PROMPT_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'componentPrompt.txt']

const execAsync = promisify(exec)

export class ComponentWiki {
  protected readonly viteSample: ComponentWikiFile
  protected readonly promptSample: ComponentWikiFile

  protected readonly codeFile: ComponentWikiFile
  protected readonly typesFile: ComponentWikiFile
  protected readonly storiesFile: ComponentWikiFile
  protected readonly mdFile: ComponentWikiFile

  protected readonly promptFile: ComponentWikiFile
  protected readonly aiFile: ComponentWikiFile

  constructor(
    protected readonly path: string
  ) {
    this.viteSample = new ComponentWikiFile(FILE_VITE_SAMPLE)
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

  make(): void {
    console.log('Component wiki: ', this.path)

    this.build()
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

  protected getRootComponent(): string[] {
    return [
      ...UI_DIRS_COMPONENTS,
      ...this.path.split('/')
    ]
  }

  protected getPathWiki(): string[] {
    return [
      ...this.getRootComponent(),
      UI_DIR_WIKI
    ]
  }

  protected getPathTemporary(): string[] {
    return [
      ...this.getPathWiki(),
      UI_DIR_TEMPORARY
    ]
  }

  protected getPathTemporaryDist(): string[] {
    return [
      ...this.getPathTemporary(),
      UI_DIR_DIST
    ]
  }

  protected getName(): string {
    return String(getNameDirByPaths(this.getRootComponent()))
  }

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

  protected async build(): Promise<boolean> {
    this.saveViteConfig()

    const path = this.getRootComponent().join('/')
    const vite = this.viteSample
      .read()
      .replace('[path]', path)

    PropertiesFile.writeByPath(UI_FILE_NAME_VITE, vite)

    const status = await this.run()

    this.resetViteConfig()

    return status
  }

  protected readFile(path: string): string {
    const pathFull = PropertiesFile.joinPath([...this.getPathTemporaryDist(), path])
    const content = PropertiesFile.readFileOnly(pathFull)

    return `
// File: ${path}
${content}
    `.trim()
  }

  protected readAndWriteALlFiles(): void {
    const list = PropertiesFile.readDirRecursive(this.getPathTemporaryDist())
    const content: string[] = []

    list.forEach((file) => {
      content.push(this.readFile(file))
    })

    this.codeFile.write(content.join('\r\n'))
  }

  protected readAndWritePrompt(): void {
    this.promptFile.write(
      this.promptSample
        .read()
        .replace('[code]', this.codeFile.read())
        .replace('[types]', this.typesFile.read())
        .replace('[stories]', this.storiesFile.read())
        .replace('[md]', this.mdFile.read())
        .replace(/\[wikiLanguage]/g, PropertiesConfig.getWikiLanguage())
    )
  }

  protected async aiGenerate(): Promise<void> {
    const prompt = this.promptFile.read()
    const generate = await useAi()?.generate(prompt)

    if (generate) {
      const files = generate.split('#########')

      this.typesFile.write(files[0] ?? '')
      this.storiesFile.write(files[1] ?? '')
      this.mdFile.write(files[2] ?? '')

      this.aiFile.write(generate)
    }
  }
}
