import { random } from './random'
import { strFill } from './strFill'

/**
 * Generates text.
 *
 * Генерирует текст.
 * @param min minimum word / минимальное слово
 * @param max maximum word / максимальное слово
 * @param symbol symbol for replacing a letter / символ для замены буквы
 * @param lengthMin minimum word length / минимальная длина слова
 * @param lengthMax maximum word length / максимальная длина слова
 * @returns generated text / сгенерированный текст
 */
export function getRandomText(
  min: number,
  max: number,
  symbol: string = '#',
  lengthMin: number = 2,
  lengthMax: number = 12
): string {
  const wordCount = random(min, max)
  const label: string[] = []

  for (let index = 0; index < wordCount; index++) {
    label.push(strFill(symbol, random(lengthMin, lengthMax)))
  }

  return label.join(' ')
}
