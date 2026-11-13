// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  type VNodeChild
} from 'vue'
import {
  type ConstrClasses,
  type ConstrExpose,
  type ConstrStyles,
  DesignName
} from '@dxtmisha/functional'

import { IconDesign, type IconClasses, type IconComponents, type IconExpose, type IconProps } from '../../Icon'
import { Skeleton } from '../Skeleton'
import { SkeletonDesign } from '../SkeletonDesign'
import { SkeletonInclude } from '../SkeletonInclude'
import { defaultsSkeleton, type SkeletonProps } from '../props'
import type { SkeletonClassesList, SkeletonPropsInclude } from '../basicTypes'
import type { SkeletonClasses, SkeletonComponents, SkeletonExpose } from '../types'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

/**
 * Result of mounting a complete SkeletonDesign component.
 *
 * Результат монтирования полного компонента SkeletonDesign.
 */
type MountedSkeleton = {
  /** Host container element / Элемент хост-контейнера */
  host: HTMLDivElement
  /** Rendered root Skeleton element / Отрендеренный корневой элемент Skeleton */
  root: HTMLDivElement
  /** Exposed public API / Открытый публичный API */
  expose: ConstrExpose<HTMLDivElement, SkeletonExpose>
  /** Unmount function / Функция размонтирования */
  unmount: () => void
}

/**
 * Mounts a full SkeletonDesign component with token classes, styles, attributes, and slot content.
 *
 * Монтирует полный компонент SkeletonDesign с классами токенов, стилями, атрибутами и содержимым слота.
 * @param props reactive skeleton properties / реактивные свойства скелетона
 * @param slotBuilder optional default slot builder / необязательный построитель слота по умолчанию
 * @param rootAttrs optional fallthrough HTML attributes / необязательные сквозные HTML-атрибуты
 * @param ItemConstructor optional custom Skeleton logic class / необязательный пользовательский класс логики Skeleton
 * @returns mounted skeleton fixture / смонтированная фикстура скелетона
 */
function mountSkeleton(
  props: SkeletonProps,
  slotBuilder?: (slotProps: SkeletonClassesList) => VNodeChild,
  rootAttrs?: Record<string, unknown>,
  ItemConstructor?: typeof Skeleton
): MountedSkeleton {
  let expose!: ConstrExpose<HTMLDivElement, SkeletonExpose>

  const SkeletonComponent = defineComponent({
    name: 'TestSkeleton',
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-skeleton': true,
          'd1-skeleton--active': Boolean(props.active)
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-skeleton-opacity': '0.32'
      }))

      const design = new SkeletonDesign<
        SkeletonComponents,
        SkeletonExpose,
        SkeletonClasses,
        SkeletonProps
      >(
        'd1.skeleton',
        props,
        {
          classes: classesToken,
          styles: stylesToken
        },
        ItemConstructor
      )

      expose = design.expose()
      return design.render()
    }
  })

  const HostComponent = defineComponent({
    setup() {
      return () => h(
        SkeletonComponent,
        rootAttrs ?? null,
        slotBuilder ? { default: slotBuilder } : undefined
      )
    }
  })

  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp(HostComponent)
  app.mount(host)

  const unmount = (): void => {
    app.unmount()
    host.remove()
  }

  mountedCleanups.push(unmount)

  return {
    host,
    root: host.firstElementChild as HTMLDivElement,
    expose,
    unmount
  }
}

describe('Skeleton (complete component integration)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render root div with token classes, inline styles, fallthrough attributes, elementHtml ref, and all 9 slot classes', async () => {
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false
      })

      let capturedSlotProps: SkeletonClassesList | undefined

      const fixture = mountSkeleton(
        props,
        (slotProps) => {
          capturedSlotProps = slotProps
          return [
            h('h2', { class: slotProps.classText }, 'Title'),
            h('p', { class: slotProps.classTextVariant }, 'Subtitle'),
            h('div', { class: slotProps.classBackground }, 'Avatar'),
            h('div', { class: slotProps.classBackgroundAfter }, 'After'),
            h('div', { class: slotProps.classBackgroundBefore }, 'Before'),
            h('div', { class: slotProps.classBackgroundVariant }, 'Badge'),
            h('div', { class: slotProps.classBorder }, 'Card'),
            h('div', { class: slotProps.classBorderVariant }, 'Outline'),
            h('span', { class: slotProps.classNone }, 'Decorative')
          ]
        },
        {
          'id': 'profile-skeleton',
          'data-testid': 'skeleton-root'
        }
      )

      expect(fixture.root.tagName.toLowerCase()).toBe('div')
      expect(fixture.root.id).toBe('profile-skeleton')
      expect(fixture.root.getAttribute('data-testid')).toBe('skeleton-root')
      expect(fixture.root.getAttribute('aria-busy')).toBe('false')
      expect(fixture.root.getAttribute('aria-live')).toBe('polite')
      expect(fixture.root.style.getPropertyValue('--d1-skeleton-opacity')).toBe('0.32')
      expect(fixture.root.classList.contains('d1-skeleton')).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--active')).toBe(false)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(false)
      expect(fixture.root.classList.contains('d1-skeleton--invisible')).toBe(false)

      expect(fixture.expose.elementHtml?.value).toBe(fixture.root)
      expect(fixture.expose.isActive()).toBe(false)
      expect(capturedSlotProps).toEqual(Skeleton.getClassesListByDesign('d1'))

      expect(fixture.root.querySelector('.d1-skeleton__text')?.textContent).toBe('Title')
      expect(fixture.root.querySelector('.d1-skeleton__textVariant')?.textContent).toBe('Subtitle')
      expect(fixture.root.querySelector('.d1-skeleton__background')?.textContent).toBe('Avatar')
      expect(fixture.root.querySelector('.d1-skeleton__backgroundAfter')?.textContent).toBe('After')
      expect(fixture.root.querySelector('.d1-skeleton__backgroundBefore')?.textContent).toBe('Before')
      expect(fixture.root.querySelector('.d1-skeleton__backgroundVariant')?.textContent).toBe('Badge')
      expect(fixture.root.querySelector('.d1-skeleton__border')?.textContent).toBe('Card')
      expect(fixture.root.querySelector('.d1-skeleton__borderVariant')?.textContent).toBe('Outline')
      expect(fixture.root.querySelector('.d1-skeleton__none')?.textContent).toBe('Decorative')

      props.active = true
      await nextTick()

      expect(fixture.expose.isActive()).toBe(true)
      expect(fixture.root.getAttribute('aria-busy')).toBe('true')
      expect(fixture.root.classList.contains('d1-skeleton--active')).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--invisible')).toBe(true)

      props.invisible = false
      await nextTick()

      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--invisible')).toBe(false)
    })

    it('should coordinate full component tree with child IconDesign and custom SkeletonInclude components across delay and delayHide', async () => {
      vi.useFakeTimers()

      const skeletonProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 200,
        delayHide: 300
      })
      const iconProps: IconProps = reactive({
        icon: 'star',
        isSkeleton: true
      })
      const buttonProps = reactive<SkeletonPropsInclude>({
        isSkeleton: true
      })

      let childSkeletonInclude!: SkeletonInclude

      const ChildIcon = defineComponent({
        setup() {
          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            iconProps
          )
          return design.render()
        }
      })

      const ChildButton = defineComponent({
        setup() {
          childSkeletonInclude = new SkeletonInclude(
            buttonProps,
            new DesignName('d1.button'),
            ['classText', 'classBorder']
          )

          return () => h(
            'button',
            {
              'class': ['d1-button', childSkeletonInclude.classes],
              'data-skeleton-status': String(childSkeletonInclude.isSkeleton())
            },
            'Save'
          )
        }
      })

      const fixture = mountSkeleton(skeletonProps, slotProps => [
        h('h3', { class: slotProps.classText }, 'Card Heading'),
        h(ChildIcon),
        h(ChildButton)
      ])

      const iconElement = fixture.root.querySelector('span')!
      const buttonElement = fixture.root.querySelector('button')!

      expect(iconElement.classList.contains('d1-skeleton__backgroundVariant')).toBe(true)
      expect(buttonElement.classList.contains('d1-skeleton__text')).toBe(true)
      expect(buttonElement.classList.contains('d1-skeleton__border')).toBe(true)
      expect(childSkeletonInclude.isSkeleton()).toBe(false)
      expect(buttonElement.getAttribute('data-skeleton-status')).toBe('false')

      // Activate parent Skeleton with delay=200ms
      skeletonProps.active = true
      await nextTick()

      expect(fixture.expose.isActive()).toBe(true)
      expect(fixture.root.getAttribute('aria-busy')).toBe('true')
      expect(fixture.root.classList.contains('d1-skeleton--invisible')).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(false)
      expect(childSkeletonInclude.isSkeleton()).toBe(false)

      vi.advanceTimersByTime(199)
      await nextTick()
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(false)
      expect(childSkeletonInclude.isSkeleton()).toBe(false)

      vi.advanceTimersByTime(1)
      await nextTick()
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(childSkeletonInclude.isSkeleton()).toBe(true)
      expect(buttonElement.getAttribute('data-skeleton-status')).toBe('true')

      // Toggling isSkeleton prop on child component removes skeleton classes while keeping status reactive
      buttonProps.isSkeleton = false
      await nextTick()
      expect(buttonElement.classList.contains('d1-skeleton__text')).toBe(false)
      expect(buttonElement.classList.contains('d1-skeleton__border')).toBe(false)

      buttonProps.isSkeleton = true
      await nextTick()
      expect(buttonElement.classList.contains('d1-skeleton__text')).toBe(true)

      // Deactivate parent Skeleton with delayHide=300ms
      skeletonProps.active = false
      await nextTick()

      expect(fixture.expose.isActive()).toBe(false)
      expect(fixture.root.getAttribute('aria-busy')).toBe('true')
      expect(fixture.root.classList.contains('d1-skeleton--invisible')).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(childSkeletonInclude.isSkeleton()).toBe(true)

      vi.advanceTimersByTime(300)
      await nextTick()
      expect(fixture.root.getAttribute('aria-busy')).toBe('false')
      expect(fixture.root.classList.contains('d1-skeleton--invisible')).toBe(false)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(false)
      expect(childSkeletonInclude.isSkeleton()).toBe(false)
      expect(buttonElement.getAttribute('data-skeleton-status')).toBe('false')
    })

    it('should cascade visibility across nested SkeletonDesign components and grandchild SkeletonInclude', async () => {
      vi.useFakeTimers()

      const outerProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 100,
        delayHide: 150
      })
      const innerProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 0,
        delayHide: 0
      })

      let innerExpose!: ConstrExpose<HTMLDivElement, SkeletonExpose>
      let grandchildInclude!: SkeletonInclude

      const GrandchildItem = defineComponent({
        setup() {
          grandchildInclude = new SkeletonInclude(
            { isSkeleton: true },
            new DesignName('d1.cell'),
            ['classTextVariant']
          )
          return () => h('div', { class: ['grandchild', grandchildInclude.classes] }, 'Nested item')
        }
      })

      const InnerSkeleton = defineComponent({
        setup() {
          const design = new SkeletonDesign<
            SkeletonComponents,
            SkeletonExpose,
            SkeletonClasses,
            SkeletonProps
          >('d1.skeleton', innerProps, {
            classes: computed(() => ({ main: { 'inner-skeleton': true } }))
          })
          innerExpose = design.expose()
          return design.render()
        }
      })

      const fixture = mountSkeleton(outerProps, () => [
        h(InnerSkeleton, null, {
          default: () => [h(GrandchildItem)]
        })
      ])

      const innerRoot = fixture.root.querySelector('.inner-skeleton') as HTMLDivElement

      expect(fixture.expose.isActive()).toBe(false)
      expect(innerExpose.isActive()).toBe(false)
      expect(grandchildInclude.isSkeleton()).toBe(false)

      outerProps.active = true
      await nextTick()

      // Outer has delay=100ms, so outer visible is false -> inner status is still false
      expect(fixture.expose.isActive()).toBe(true)
      expect(innerExpose.isActive()).toBe(false)
      expect(grandchildInclude.isSkeleton()).toBe(false)

      vi.advanceTimersByTime(100)
      await nextTick()

      // Outer becomes visible -> inner inherits active status and becomes visible -> grandchild receives true
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(innerExpose.isActive()).toBe(true)
      expect(innerRoot.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(innerRoot.getAttribute('aria-busy')).toBe('true')
      expect(grandchildInclude.isSkeleton()).toBe(true)

      outerProps.active = false
      await nextTick()

      // During outer delayHide=150ms, outer visible stays true -> inner stays active and visible
      vi.advanceTimersByTime(149)
      await nextTick()
      expect(innerExpose.isActive()).toBe(true)
      expect(grandchildInclude.isSkeleton()).toBe(true)

      vi.advanceTimersByTime(1)
      await nextTick()
      expect(innerExpose.isActive()).toBe(false)
      expect(innerRoot.classList.contains('d1-skeleton--visible')).toBe(false)
      expect(innerRoot.getAttribute('aria-busy')).toBe('false')
      expect(grandchildInclude.isSkeleton()).toBe(false)
    })

    it('should support injecting a custom ItemConstructor into SkeletonDesign', () => {
      /**
       * Custom Skeleton logic subclass for DI testing.
       *
       * Пользовательский подкласс логики Skeleton для тестирования DI.
       */
      class CustomSkeleton extends Skeleton {}

      const fixture = mountSkeleton(
        reactive({ ...defaultsSkeleton, active: true }),
        slotProps => h('span', { class: slotProps.classText }, 'Custom DI'),
        undefined,
        CustomSkeleton
      )

      expect(fixture.expose.isActive()).toBe(true)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
      expect(fixture.root.querySelector('.d1-skeleton__text')?.textContent).toBe('Custom DI')
    })
  })

  describe('Empty, nullish, and slotless rendering', () => {
    it('should render an empty root div cleanly when no default slot is provided', () => {
      const fixture = mountSkeleton(reactive({ ...defaultsSkeleton, active: true }))

      expect(fixture.root.tagName.toLowerCase()).toBe('div')
      expect(fixture.root.children).toHaveLength(0)
      expect(fixture.root.getAttribute('aria-busy')).toBe('true')
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(true)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it.each([
      ['Загрузка профиля пользователя', 'Пожалуйста, подождите...'],
      ['Đang tải hồ sơ người dùng 🇻🇳', 'Vui lòng chờ trong giây lát...'],
      ['正在加载用户资料 🚀', '请稍候...']
    ])('should render Unicode text "%s" and "%s" inside skeleton slots without corruption', (title, description) => {
      const fixture = mountSkeleton(
        reactive({ ...defaultsSkeleton, active: true }),
        slotProps => [
          h('h4', { class: slotProps.classText }, title),
          h('p', { class: slotProps.classTextVariant }, description)
        ]
      )

      expect(fixture.root.querySelector('h4')?.textContent).toBe(title)
      expect(fixture.root.querySelector('p')?.textContent).toBe(description)
    })
  })

  describe('Lifecycle cleanup on full component unmount', () => {
    it('should clean up pending timers when unmounted during active delay', async () => {
      vi.useFakeTimers()

      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: 500
      })

      const fixture = mountSkeleton(props)
      expect(fixture.root.classList.contains('d1-skeleton--visible')).toBe(false)
      expect(vi.getTimerCount()).toBe(1)
      const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout')

      fixture.unmount()

      expect(clearTimeoutSpy).toHaveBeenCalled()
      expect(vi.getTimerCount()).toBe(0)
      expect(() => vi.advanceTimersByTime(1000)).not.toThrow()
    })
  })
})
