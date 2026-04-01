import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
  title: '@dxtmisha/wiki/styles/layout',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Grid: Story = {
  name: 'Grid (Group)',
  render: () => ({
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Span 6 (sm) / 12 (xs)</div>
          <div class="wiki-storybook-dummy" style="width: 100%"></div>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Span 6 (sm) / 12 (xs)</div>
          <div class="wiki-storybook-dummy" style="width: 100%"></div>
        </div>
      </div>
    `
  })
}

export const Flex: Story = {
  name: 'Flex Layout',
  render: () => ({
    template: `
      <div class="wiki-storybook-flex">
        <button class="wiki-storybook-button">Action A</button>
        <button class="wiki-storybook-button">Action B</button>
        <button class="wiki-storybook-button">Action C</button>
      </div>
    `
  })
}

export const FlexCenter: Story = {
  name: 'Flex Center',
  render: () => ({
    template: `
      <div class="wiki-storybook-flex-center" style="height: 100px; border: 1px dashed #ccc">
        <div class="wiki-storybook-dummy" style="width: 50px"></div>
      </div>
    `
  })
}

export const FlexColumn: Story = {
  name: 'Flex Column',
  render: () => ({
    template: `
      <div class="wiki-storybook-flex-column">
        <div class="wiki-storybook-dummy" style="width: 100px">Item 1</div>
        <div class="wiki-storybook-dummy" style="width: 150px">Item 2</div>
        <div class="wiki-storybook-dummy" style="width: 80px">Item 3</div>
      </div>
    `
  })
}

export const Decreased: Story = {
  name: 'Decreased Width',
  render: () => ({
    template: `
      <div class="wiki-storybook-flex-column" style="gap: 16px">
        <div class="wiki-storybook-decreased" style="border: 1px solid #ccc; padding: 8px">
          <div class="wiki-storybook-item__label--static">.wiki-storybook-decreased (72%)</div>
          <div class="wiki-storybook-dummy"></div>
        </div>
        <div class="wiki-storybook-decreasedX2" style="border: 1px solid #ccc; padding: 8px">
          <div class="wiki-storybook-item__label--static">.wiki-storybook-decreasedX2 (64% md / 48% lg)</div>
          <div class="wiki-storybook-dummy"></div>
        </div>
      </div>
    `
  })
}
