import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Button from './D1Button.vue'
import { ButtonWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Button',
  component: D1Button,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ButtonWikiStorybook.getWiki(),
  args: ButtonWikiStorybook.getValues()
} satisfies Meta<typeof D1Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ButtonBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-flex">
          <D1Button>Button</D1Button>
          <D1Button icon="home">Button</D1Button>
          <D1Button icon-trailing="arrow_forward">Button</D1Button>
        </div>
    `
  })
}
export const ButtonPrimary: Story = {
  name: 'Основные (primary)',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-flex">
          <D1Button primary>Button</D1Button>
          <D1Button primary icon="home">Button</D1Button>
          <D1Button primary selected>Button</D1Button>
          <D1Button primary disabled>Button</D1Button>
        </div>
    `
  })
}
export const ButtonSecondary: Story = {
  name: 'Второстепенные (secondary)',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-flex">
          <D1Button secondary>Button</D1Button>
          <D1Button secondary icon="home">Button</D1Button>
          <D1Button secondary selected>Button</D1Button>
          <D1Button secondary disabled>Button</D1Button>
        </div>
    `
  })
}
export const ButtonOutline: Story = {
  name: 'Контурные (outline)',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-flex">
          <D1Button outline>Button</D1Button>
          <D1Button outline icon="home">Button</D1Button>
          <D1Button outline selected>Button</D1Button>
          <D1Button outline disabled>Button</D1Button>
        </div>
    `
  })
}
export const ButtonText: Story = {
  name: 'Текстовые (text)',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-flex">
          <D1Button text>Button</D1Button>
          <D1Button text icon="home">Button</D1Button>
          <D1Button text selected>Button</D1Button>
          <D1Button text disabled>Button</D1Button>
        </div>
    `
  })
}
export const ButtonAdaptive: Story = {
  name: 'Адаптивные',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Button icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Button adaptive="fullSm" icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Button container="fullSm" icon="home" label="Button"/>
          </div>
        </div>
    `
  })
}
export const ButtonSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Button, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1Button isSkeleton>Button</D1Button>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
