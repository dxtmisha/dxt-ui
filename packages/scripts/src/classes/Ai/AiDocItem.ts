import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { hasNativeDirname } from '../../functions/hasNativeDirname'
import { AiDocItemAbstract } from './AiDocItemAbstract'

const dirnamePath = hasNativeDirname()
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

/** Sample prompt template path / Путь к шаблону промпта */
const FILE_PROMPT_SAMPLE = [dirnamePath, '..', '..', 'media', 'templates', 'prompts']

/** Sample prompt template path for functions / Путь к шаблону промпта для функций */
const FILE_PROMPT_SAMPLE_ITEM = [...FILE_PROMPT_SAMPLE, 'aiDocFunctionPrompt.en.txt']

/** Sample demo file path for functions / Путь к демо файлу для функций */
const FILE_DEMO_SAMPLE_ITEM = [...FILE_PROMPT_SAMPLE, 'demoDocEn.mdx']

/**
 * Class for generating documentation for Functions.
 *
 * Класс для генерации документации для Функций.
 */
export class AiDocItem extends AiDocItemAbstract {
  protected pathDemo: string[] = FILE_DEMO_SAMPLE_ITEM
  protected pathPrompt: string[] = FILE_PROMPT_SAMPLE_ITEM
}
