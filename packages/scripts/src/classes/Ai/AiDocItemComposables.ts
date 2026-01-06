import { AiDocItemAbstract } from './AiDocItemAbstract'

/** Sample prompt template path / Путь к шаблону промпта */
const FILE_PROMPT_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'prompts']

/** Sample prompt template for classes / Шаблон промпта для классов */
const FILE_PROMPT_SAMPLE_CLASS = [...FILE_PROMPT_SAMPLE, 'aiDocComposablePrompt.en.txt']

/** Sample demo file for classes / Пример демонстрационного файла для классов */
const FILE_DEMO_SAMPLE_CLASS = [...FILE_PROMPT_SAMPLE, 'demoComposableEn.mdx']

/**
 * AI Documentation Item for Classes.
 *
 * Элемент документации AI для классов.
 */
export class AiDocItemComposables extends AiDocItemAbstract {
  protected pathDemo: string[] = FILE_DEMO_SAMPLE_CLASS
  protected pathPrompt: string[] = FILE_PROMPT_SAMPLE_CLASS
}
