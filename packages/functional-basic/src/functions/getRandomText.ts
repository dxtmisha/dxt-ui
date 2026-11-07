import { random } from './random'
import { strFill } from './strFill'

/**
 * Generates placeholder words by repeating a value and joining the words with spaces.
 *
 * Генерирует слова-заглушки повторением значения и соединяет их пробелами.
 * @param min minimum word count / минимальное количество слов
 * @param max maximum word count / максимальное количество слов
 * @param symbol value repeated within each word / значение для повторения внутри каждого слова
 * @param lengthMin minimum repetitions per word / минимальное количество повторений в слове
 * @param lengthMax maximum repetitions per word / максимальное количество повторений в слове
 * @returns generated text / сгенерированный текст
 */
export function getRandomText(
  min: number = 1,
  max: number = 10,
  symbol: unknown = '#',
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
