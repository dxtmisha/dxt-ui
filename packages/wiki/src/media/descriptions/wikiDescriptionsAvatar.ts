import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Avatar component properties
 *
 * Описания свойств компонента Avatar
 */
export const wikiDescriptionsAvatar: StorybookComponentsDescriptionItem = {
  name: 'Avatar',
  description: {
    en: 'Visual representation of a user or entity, supporting initials shortening, images, loading skeletons, badges, and interactive navigation',
    ru: 'Визуальное представление пользователя или сущности с поддержкой сокращения инициалов, изображений, скелетонов загрузки, бейджей и интерактивной навигации'
  },
  possibilities: {
    en: [
      'display initials dynamically from label text with Unicode-safe reduction',
      'automatic text shortening to 1-2 letters via reduction prop',
      'avatar image and icon rendering with skeleton loading support',
      'connected circular badge element for status indication',
      'interactive states with click events, expose API, and native anchor links'
    ],
    ru: [
      'динамическое отображение инициалов из текста метки с поддержкой Unicode',
      'автоматическое сокращение текста до 1-2 букв через свойство reduction',
      'отображение изображений и иконок с поддержкой скелетона при загрузке',
      'подключённый круговой элемент бейджа для отображения статуса',
      'интерактивные состояния с событиями клика, expose API и нативными ссылками'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1, image2 } from \'@dxtmisha/wiki/media\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { AvatarExpose as AvatarExposeType } from \'@dxtmisha/constructor/Avatar\''
  ],
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'AvatarBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      propsName: ['label', 'image', 'badgeDot'],
      setup: `
      return { image1 }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="John Doe"/>
          <DesignComponent :image="image1" aria-label="User Image"/>
          <DesignComponent label="Online User" badge-dot/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveTextContent('JD')
await expect(items[1]).toHaveAttribute('aria-label', 'User Image')
await expect(items[2]).toHaveTextContent('OU')
      `
    },
    {
      id: 'AvatarReduction',
      name: {
        en: 'Reduction',
        ru: 'Сокращение (reduction)'
      },
      propsName: ['label', 'reduction'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="Иван Иванович" :reduction="true"/>
          <DesignComponent label="Иван Иванович" :reduction="false"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)
await expect(items[0]).toHaveTextContent('ИИ')
await expect(items[1]).toHaveTextContent('Иван Иванович')
      `
    },
    {
      id: 'AvatarSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      propsName: ['isSkeleton'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent :is-skeleton="true" label="John Doe"/>
          </div>
        </DesignSkeleton>
      `,
      play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveTextContent('JD')
      `
    },
    {
      id: 'AvatarEvents',
      name: {
        en: 'Events & Expose API',
        ru: 'События и Expose API'
      },
      propsName: ['value', 'detail'],
      setup: `
      const avatarElement = ref<AvatarExposeType | null>(null)
      const clickedValue = ref<string>('none')
      const onClickLite = (payload: EventClickValue) => {
        clickedValue.value = String(payload.value ?? 'empty')
      }
      return { avatarElement, clickedValue, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              ref="avatarElement"
              label="Alex Kim"
              value="user-99"
              :detail="{ role: 'admin' }"
              @click-lite="onClickLite"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="avatar-event-output">
            Clicked: {{ clickedValue }}
          </div>
        </div>
      `,
      play: `
const avatar = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(avatar).toBeInTheDocument()
await userEvent.click(avatar!)
await expect(canvasElement.querySelector('[data-testid="avatar-event-output"]')).toHaveTextContent('Clicked: user-99')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'AvatarTestStatesAndLinks',
      name: {
        en: 'Test: States, links, badges, numeric zero, and Unicode',
        ru: 'Тест: Состояния, ссылки, бейджи, ноль и Unicode'
      },
      propsName: ['disabled', 'readonly', 'focus', 'href', 'badge', 'labelId', 'ariaLabel', 'tabindex'],
      setup: `
      return { image2 }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">disabled + readonly</div>
            <DesignComponent label="Disabled User" disabled/>
            <DesignComponent label="Readonly User" readonly/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">focus + link</div>
            <DesignComponent label="Focus User" focus/>
            <DesignComponent label="Anchor User" href="#avatar-link"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">zero + unicode + badge</div>
            <DesignComponent :label="0" :badge="0"/>
            <DesignComponent label="Nguyễn Văn" :image="image2" aria-label="Vietnamese User" label-id="avatar-custom-id"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(6)

await expect(items[0]).toHaveClass('design-component--disabled')
await expect(items[0]).toHaveAttribute('role', 'img')

await expect(items[1]).toHaveClass('design-component--readonly')
await expect(items[1]).toHaveAttribute('role', 'img')

await expect(items[2]).toHaveClass('design-component--focus')
await expect(items[3].tagName).toBe('A')
await expect(items[3]).not.toHaveAttribute('role')

await expect(items[4]).toHaveTextContent('0')
await expect(items[5]).toHaveAttribute('aria-label', 'Vietnamese User')
await expect(canvasElement.querySelector('#avatar-custom-id')).toBeInTheDocument()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Avatar'} type={'avatar'}/>
<Canvas of={Component.AvatarBasic}/>

<StorybookDescriptions componentName={'Avatar'} type={'reduction'}/>
<Canvas of={Component.AvatarReduction}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.AvatarSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<Canvas of={Component.AvatarEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
The Avatar component visually represents a user, contact, or brand. It automatically renders a rounded shape, fallback initials dynamically generated from a name label, or a profile image.
Supports connecting circular status badges, dynamic click event listeners and anchor/router navigation, and skeleton loading state out of the box.
    `
  }
}
