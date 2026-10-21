// @vitest-environment node
import { assert, describe, expect, it, vi } from 'vitest'
import { createSSRApp, ref, type Ref } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { DesignLogicAbstract } from '../DesignLogicAbstract'
import { DesignLifecycleAbstract } from '../DesignLifecycleAbstract'
import { DesignName } from '../DesignName'
import type { ConstrComponent, ConstrItem } from '../../../types/constructorTypes'

/**
 * Dependency whose client callbacks must stay inactive on the server.
 *
 * Зависимость, клиентские обработчики которой должны оставаться неактивными на сервере.
 */
class ServerDependency extends DesignLifecycleAbstract {
  /** Client mount callback / Клиентский обработчик монтирования */
  override readonly onMounted = vi.fn()
  /** Client unmount callback / Клиентский обработчик демонтирования */
  override readonly onUnmounted = vi.fn()
}

/**
 * Logic fixture for rendering without browser globals.
 *
 * Тестовая логика для отрисовки без глобальных объектов браузера.
 */
class ServerLogic extends DesignLogicAbstract<
  HTMLElement,
  ConstrComponent,
  ConstrItem,
  ConstrItem,
  ConstrItem,
  { dependency: typeof ServerDependency }
> {
  /** Dependency item configuration / Конфигурация элемента зависимости */
  protected readonly constructorItems = {
    dependency: {
      parameters: (): [] => []
    }
  }

  /**
   * Registers the server-rendered dependency.
   *
   * Регистрирует зависимость, создаваемую при серверной отрисовке.
   */
  constructor() {
    super({}, ref<HTMLElement>(), new DesignName('d1.ssr'), undefined, undefined, undefined, {
      dependency: ServerDependency
    })
  }

  /** Observable mount state / Наблюдаемое состояние монтирования */
  declare readonly isMounted: Ref<boolean>
}

describe('DesignLogicAbstract in Node SSR', () => {
  it('isolates requests without browser globals or client lifecycle callbacks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    const logics: ServerLogic[] = []
    const dependencies: ServerDependency[] = []

    const markup = await Promise.all([0, 1].map(() => renderToString(createSSRApp({
      setup(): () => null {
        const logic = new ServerLogic()
        const dependency = logic.getInstance('dependency')
        assert(dependency)
        logics.push(logic)
        dependencies.push(dependency)
        return () => null
      }
    }))))

    expect(markup).toEqual(['<!---->', '<!---->'])
    expect(logics).toHaveLength(2)
    expect(logics[0]).not.toBe(logics[1])
    expect(dependencies).toHaveLength(2)
    expect(dependencies[0]).not.toBe(dependencies[1])
    expect(logics[0]?.isMounted).not.toBe(logics[1]?.isMounted)
    logics.forEach(logic => expect(logic.isMounted.value).toBe(false))
    dependencies.forEach((dependency) => {
      expect(dependency.onMounted).not.toHaveBeenCalled()
      expect(dependency.onUnmounted).not.toHaveBeenCalled()
    })
  })
})
