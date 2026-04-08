import { FigmaItem } from '../classes/FigmaItem'
import type { UiFigmaNode } from '../types/figmaTypes'

/**
 * Returns the Figma item by ID.
 *
 * Возвращает узел Figma по идентификатору.
 * @param id node ID/ идентификатор узла
 */
export async function getFigmaItemById<
  T extends UiFigmaNode = UiFigmaNode
>(id: string): Promise<FigmaItem<T> | undefined> {
  const node = await figma.getNodeByIdAsync(id)

  if (node) {
    return new FigmaItem(node) as FigmaItem<T>
  }

  return undefined
}
