import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Avatar component properties
 *
 * Описания свойств компонента Avatar
 */
export const wikiDescriptionsAvatar: StorybookComponentsDescriptionItem = {
  name: 'Avatar',
  description: {
    en: 'Visual representation of a user or entity, supporting initials shortening, fallback images, loading skeletons, badges, and interactive navigation',
    ru: 'Визуальное представление пользователя или сущности с поддержкой сокращения инициалов, резервных изображений, скелетонов загрузки, бейджей и интерактивной навигации'
  },
  possibilities: {
    en: [
      'display initials dynamically from label text',
      'automatic text shortening to 1-2 letters',
      'avatar image with skeleton loading support',
      'connected badge element for status indication',
      'interactive states with event handling and links'
    ],
    ru: [
      'динамическое отображение инициалов из текста метки',
      'автоматическое сокращение текста до 1-2 букв',
      'изображение аватара с поддержкой скелетона при загрузке',
      'подключенный элемент бейджа для отображения статуса',
      'интерактивные состояния с обработкой событий и ссылок'
    ]
  },
  stories: [
    {
      id: 'AvatarBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="John Doe"/>
          <DesignComponent src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <DesignComponent label="Online User" badgeDot/>
        </div>
      `
    },
    {
      id: 'AvatarReduction',
      name: {
        en: 'Reduction',
        ru: 'Сокращение (reduction)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="Иван Иванович" :reduction="true"/>
          <DesignComponent label="Иван Иванович" :reduction="false"/>
        </div>
      `
    },
    {
      id: 'AvatarSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent :isSkeleton="true" label="JD"/>
          </div>
        </DesignSkeleton>
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
The Avatar component visually represents a user, contact, or brand. It automatically renders a rounded shape, fallback initials dynamically generated from a name label, or a high-quality profile image.
Supports connecting status badges (like online indicator dot), dynamic click event listeners and router navigation (rendering as an anchor tag), and skeleton loading state out of the box.
    `
  }
}
