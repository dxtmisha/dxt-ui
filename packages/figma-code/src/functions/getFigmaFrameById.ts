import { FigmaFrame } from '../classes/FigmaFrame'

/**
 * Returns a FigmaFrame object by its ID.
 *
 * Возвращает объект FigmaFrame по его идентификатору.
 * @param id node ID / идентификатор узла
 * @returns promise with FigmaFrame object or undefined /
 * промис с объектом FigmaFrame или undefined
 */
export async function getFigmaFrameById(id: string): Promise<FigmaFrame | undefined> {
  const node = await figma.getNodeByIdAsync(id)

  if (node) {
    return new FigmaFrame(node)
  }

  return undefined
}
