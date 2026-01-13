import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { hasNativeDirname } from '../../functions/hasNativeDirname'
import { AiDocItemAbstract } from './AiDocItemAbstract'

const dirnamePath = hasNativeDirname()
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

/** Sample prompt template path / Путь к шаблону промпта */
const FILE_PROMPT_SAMPLE = [dirnamePath, '..', '..', 'media', 'templates', 'prompts']

const FILE_PROMPT_SAMPLE_COMPOSABLE = [...FILE_PROMPT_SAMPLE, 'aiDocComposablePrompt.en.txt']

const FILE_DEMO_SAMPLE_COMPOSABLE = [...FILE_PROMPT_SAMPLE, 'demoComposableEn.mdx']

export class AiDocItemComposables extends AiDocItemAbstract {
  protected pathDemo: string[] = FILE_DEMO_SAMPLE_COMPOSABLE
  protected pathPrompt: string[] = FILE_PROMPT_SAMPLE_COMPOSABLE
}
