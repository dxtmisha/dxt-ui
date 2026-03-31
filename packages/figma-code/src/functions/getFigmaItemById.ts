import { FigmaItem } from '../classes/FigmaItem'

/**
 * Returns the Figma item by ID.
 *
 * Возвращает узел Figma по идентификатору.
 * @param id node ID/ идентификатор узла
 */
export async function getFigmaItemById(id: string): Promise<FigmaItem | undefined> {
  const node = await figma.getNodeByIdAsync(id)

  if (node) {
    return new FigmaItem(node)
  }

  return undefined
}
