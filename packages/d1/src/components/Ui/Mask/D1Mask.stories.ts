import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Mask from './D1Mask.vue'
import { MaskWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Mask',
  component: D1Mask,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MaskWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MaskWikiStorybook.getWiki(),
  args: MaskWikiStorybook.getValues()
} satisfies Meta<typeof D1Mask>

export default meta

type Story = StoryObj<typeof meta>

export const Mask: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Mask },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group" >
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MaskBasic: Story = {
  name: 'Примеры масок',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <D1Mask :mask="'+1 *** *** ** **'" placeholder="Enter phone number"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <D1Mask
              :mask="['*** *** ***', '**** **** ****']"
              placeholder="Auto format selection"
            />
          </div>
        </div>
    `
  })
}
export const MaskSpecial: Story = {
  name: 'Специальные символы',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <D1Mask :mask="'+7 *** *** ** **'" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <D1Mask :mask="'XX.XX.XXXX'" special="X" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <D1Mask :mask="'***-###-XXX'" :special="['*', '#', 'X']" />
          </div>
        </div>
    `
  })
}
export const MaskValidation: Story = {
  name: 'Валидация',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <D1Mask :mask="'*** *** ***'" pattern="[6-9]+" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <D1Mask :mask="'**:##'" :special="['*', '#']" :pattern="'[6-9]+'"/>
          </div>
        </div>
    `
  })
}
export const MaskGroupSave: Story = {
  name: 'Навигация по группам (groupSave)',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="true" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="false" />
          </div>
        </div>
    `
  })
}
export const MaskMatch: Story = {
  name: 'Допустимые символы (match)',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <D1Mask :mask="'***-***'" match="[A-F0-9]" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <D1Mask :mask="'***-***'" match="[A-Za-z]" />
          </div>
        </div>
    `
  })
}
export const MaskNumberTypes: Story = {
  name: 'Числовые типы',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <D1Mask type="number" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <D1Mask type="number-format" language="ru" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <D1Mask type="currency" currency="RUB" language="ru" />
          </div>
        </div>
    `
  })
}
export const MaskDateTypes: Story = {
  name: 'Типы дат и времени',
  render: () => ({
    components: { D1Mask },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <D1Mask type="date" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <D1Mask type="datetime" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <D1Mask type="hour-minute" />
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
