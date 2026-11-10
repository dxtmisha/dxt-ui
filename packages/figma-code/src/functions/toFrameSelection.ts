import { getFigmaItemById } from './getFigmaItemById'

/**
 * Moves the view to the specified item and selects it.
 *
 * Перемещает вид на указанный элемент и выбирает его.
 * @param id node ID / идентификатор узла
 * @returns promise that resolves when navigation and selection complete / промис, завершающийся после перехода и выделения
 */
export async function toFrameSelection(id?: string): Promise<void> {
  if (id) {
    const item = await getFigmaItemById(id)

    if (item) {
      await item.toPageAndSelection()
    }
  }
}
