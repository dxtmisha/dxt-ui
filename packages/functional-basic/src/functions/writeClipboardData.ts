import { createElement } from './createElement'
import { isDomRuntime } from './isDomRuntime'
import { ErrorCenter } from '../classes/ErrorCenter'

/**
 * Fallback method to copy text to the clipboard using a temporary textarea and execCommand.
 *
 * Резервный метод копирования текста в буфер обмена с использованием временного textarea и execCommand.
 * @param text text for recording / текст для записи
 * @returns void / ничего не возвращает
 */
function copyByExecCommand(text: string): void {
  const textarea = createElement<HTMLTextAreaElement>(document.body, 'textarea', (element) => {
    element.value = text
    element.setAttribute('readonly', '')
    element.style.position = 'fixed'
    element.style.opacity = '0'
    element.style.pointerEvents = 'none'
  })

  try {
    textarea?.select()
    document?.execCommand?.('copy', false, text)
  } catch {
    // Fallback execution failed / Ошибка выполнения резервного копирования
  } finally {
    textarea?.remove()
  }
}

/**
 * Writes data to the buffer.
 *
 * Записывает данные в буфер.
 * @param text text for recording / текст для записи
 * @returns promise without return value / промис без возвращаемого значения
 */
export async function writeClipboardData(text: string): Promise<void> {
  if (isDomRuntime()) {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      copyByExecCommand(text)

      ErrorCenter.on({
        group: 'clipboard',
        code: 'error',
        details: error
      })
    }
  }
}
