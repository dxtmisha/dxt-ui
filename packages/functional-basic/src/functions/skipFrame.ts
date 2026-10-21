import { executePromise } from './executePromise'
import { isDomRuntime } from './isDomRuntime'

/**
 * Asynchronously skips the specified number of animation frames or executes a callback within them.
 * In non-DOM environments (such as SSR), resolves immediately without calling requestAnimationFrame.
 *
 * Асинхронно пропускает указанное количество кадров анимации или выполняет функцию обратного вызова внутри них.
 * В средах без DOM (например, SSR) разрешается немедленно без вызова requestAnimationFrame.
 * @param callback optional function to execute on the animation frame / опциональная функция для выполнения на кадре анимации
 * @param count number of frames to skip / количество кадров для пропуска
 * @returns promise resolving on the animation frame / промис, разрешающийся на кадре анимации
 */
export function skipFrame<T = void>(
  callback?: () => T | Promise<T>,
  count = 1
): Promise<T | void> {
  const init = () => executePromise(callback)

  if (isDomRuntime() && count > 0) {
    return new Promise<T | void>((resolve, reject) => {
      let current = 0

      const next = (): void => {
        requestAnimationFrame(async () => {
          try {
            current++

            if (current < count) {
              next()
            } else {
              resolve(await init())
            }
          } catch (error) {
            reject(error)
          }
        })
      }

      next()
    })
  }

  return init()
}
