import { random } from './random'
import { strFill } from './strFill'

/**
 * Generates text.
 *
 * Генерирует текст.
 * @param min minimum word/ минимальное слово
 * @param max maximum word/ максимальное слово
 * @param symbol symbol for replacing a letter/ символ для замены буквы
 * @param lengthMin minimum word length/ минимальная длина слова
 * @param lengthMax maximum word length/ максимальная длина слова
 */
export function getRandomText(
  min: number,
  max: number,
  symbol: string = '#',
  lengthMin: number = 2,
  lengthMax: number = 12
) {
  const rand = random(min, max)
  const label: string[] = []

  for (let i = 0; i < rand; i++) {
    label.push(strFill(symbol, random(lengthMin, lengthMax)))
  }

  return label.join(' ')
}
