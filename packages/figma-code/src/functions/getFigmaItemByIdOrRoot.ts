import { getFigmaItemById } from './getFigmaItemById'
import type { UiFigmaNode } from '../types/figmaTypes'

/**
 * Returns the Figma node used for storage by ID or figma.root.
 *
 * Возвращает узел Figma, используемый для хранения, по идентификатору или figma.root.
 * @param id node ID/ идентификатор узла
 */
export async function getFigmaItemByIdOrRoot<
  T extends UiFigmaNode = UiFigmaNode
>(id?: string): Promise<T> {
  const figmaItem = id ? await getFigmaItemById(id) : undefined

  return figmaItem ? figmaItem.get() as T : figma.root as T
}
