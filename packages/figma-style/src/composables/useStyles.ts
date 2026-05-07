import { computed, shallowRef, watch } from 'vue'
import { Datetime, getColumn } from '@dxtmisha/functional-basic'
import { executeUseLocal } from '@dxtmisha/functional'
import { Zip } from '@dxtmisha/zip'
import { type UiFigmaFrameStylesItem } from '@dxtmisha/figma'
import { useFigmaFrameSelection, useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const item = executeUseLocal(() => {
  const { send, styles } = useFigmaFrameStyles()
  const { selection } = useFigmaFrameSelection()

  /** Status of the style update process / Статус процесса обновления стилей */
  const loading = shallowRef<boolean>(false)

  /** Checks if there is a selection of elements / Проверяет наличие выделения элементов */
  const isSelection = computed(() => selection.value && selection.value.length > 0)

  /**
   * Checks if there is data in the styles.
   *
   * Проверяет наличие данных в стилях.
   * @returns true if data exists / true, если данные существуют
   */
  const isData = () => styles.value
    && styles.value.length > 0

  /**
   * Formats the style item data.
   *
   * Форматирует данные элемента стиля.
   * @param item style item / элемент стиля
   * @returns formatted data object / отформатированный объект данных
   */
  const getData = (item: UiFigmaFrameStylesItem) => ({
    id: item.id,
    name: item.name,
    json: item.json,
    styles: item.styles,
    childrenStyles: item.childrenStyles
  })

  /**
   * Converts ID to a valid filename.
   *
   * Преобразует ID в допустимое имя файла.
   * @param id node ID / идентификатор узла
   * @returns formatted name / отформатированное имя
   */
  const idToName = (id: string): string => id.replace(':', '-')

  /**
   * Initializes the ZIP file with styles.
   *
   * Инициализирует ZIP-файл со стилями.
   * @returns Zip instance / экземпляр Zip
   */
  const initFile = () => {
    const zip = new Zip(`layout-${new Datetime().standard()}`)

    if (isData()) {
      styles.value.forEach((style) => {
        style.data.forEach((item) => {
          const name = `${idToName(item.id)}__`

          zip
            .addFile(`${name}style.json`, JSON.stringify(getData(item)))
            .addFile(`${name}preview.jpg`, item.image)
        })
      })
    }

    return zip
  }

  /**
   * Downloads the generated styles file.
   *
   * Скачивает сгенерированный файл со стилями.
   */
  const download = () => {
    initFile().save()
    loading.value = false
  }

  /**
   * Updates the styles based on the current selection.
   *
   * Обновляет стили на основе текущего выделения.
   */
  const update = () => {
    loading.value = true
    send({
      ids: getColumn(selection.value, 'id') as string[],
      children: false
    })
  }

  watch(styles, () => download())

  return {
    isSelection,
    styles,
    selection,
    loading,
    update
  }
})

/**
 * Composable for working with Figma frame styles and exporting them.
 *
 * Composable-функция для работы со стилями фреймов Figma и их экспорта.
 * @returns styles state and control methods / состояние стилей и методы управления
 */
export const useStyles = () => item()
