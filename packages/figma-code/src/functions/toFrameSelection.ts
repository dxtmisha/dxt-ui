import { getFigmaItemById } from './getFigmaItemById'

/**
 * Moves the view to the specified item and selects it.
 *
 * Перемещает вид на указанный элемент и выбирает его.
 */
export async function toFrameSelection(id?: string) {
  if (id) {
    const item = await getFigmaItemById(id)

    if (item) {
      item.toPageAndSelection()
    }
  }
}
