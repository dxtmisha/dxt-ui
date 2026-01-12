import { AiDocItemAbstract } from './AiDocItemAbstract'
import { getDirname } from '../../functions/getDirname'

/** Sample prompt template path / Путь к шаблону промпта */
const FILE_PROMPT_SAMPLE = [getDirname(), '..', '..', 'media', 'templates', 'prompts']

const FILE_PROMPT_SAMPLE_COMPOSABLE = [...FILE_PROMPT_SAMPLE, 'aiDocComposablePrompt.en.txt']

const FILE_DEMO_SAMPLE_COMPOSABLE = [...FILE_PROMPT_SAMPLE, 'demoComposableEn.mdx']

export class AiDocItemComposables extends AiDocItemAbstract {
  protected pathDemo: string[] = FILE_DEMO_SAMPLE_COMPOSABLE
  protected pathPrompt: string[] = FILE_PROMPT_SAMPLE_COMPOSABLE
}
