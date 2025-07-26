import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Cell from './D1Cell.vue'
import { CellWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Cell',
  component: D1Cell,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CellWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CellWikiStorybook.getWiki(),
  args: CellWikiStorybook.getValues()
} satisfies Meta<typeof D1Cell>

export default meta

type Story = StoryObj<typeof meta>

export const Cell: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Cell },
    setup: () => ({ args }),
    template: `
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CellBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Cell },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Simple cell</div>
            <D1Cell label="Cell label">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With description</div>
            <D1Cell label="Cell label" description="Cell description">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With caption</div>
            <D1Cell label="Cell label" description="Cell description" caption="Caption">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Cell label="Cell label" description="Cell description" icon="home">Cell</D1Cell>
          </div>
        </div>
    `
  })
}
export const CellStates: Story = {
  name: 'Состояния',
  render: () => ({
    components: { D1Cell },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Cell label="Cell label" description="Default state">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Cell label="Cell label" description="Selected state" :selected="true">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Disabled</div>
            <D1Cell label="Cell label" description="Disabled state" :disabled="true">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Read only</div>
            <D1Cell label="Cell label" description="Read only state" :readonly="true">Cell</D1Cell>
          </div>
        </div>
    `
  })
}
export const CellDivider: Story = {
  name: 'Варианты разделителей',
  render: () => ({
    components: { D1Cell },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With divider</div>
            <D1Cell label="Cell label" description="With divider" :divider="true">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Divider always</div>
            <D1Cell label="Cell label" description="Divider always visible" :divider="true" dividerLabel="always">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Divider none</div>
            <D1Cell label="Cell label" description="No divider label" :divider="true" dividerLabel="none">Cell</D1Cell>
          </div>
        </div>
    `
  })
}
export const CellDynamic: Story = {
  name: 'Динамическое поведение',
  render: () => ({
    components: { D1Cell },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <D1Cell label="Cell label" description="Dynamic cell" :dynamic="true">Cell</D1Cell>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Dynamic hover</div>
            <D1Cell label="Cell label" description="Dynamic with hover" :dynamic="true" :dynamicHover="true">Cell</D1Cell>
          </div>
        </div>
    `
  })
}
export const CellSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Cell },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With skeleton</div>
            <D1Skeleton :active="true">
              <D1Cell label="Cell label" description="Cell description" :isSkeleton="true">Cell</D1Cell>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Without skeleton</div>
            <D1Skeleton :active="true">
              <D1Cell label="Cell label" description="Cell description" :isSkeleton="false">Cell</D1Cell>
            </D1Skeleton>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
