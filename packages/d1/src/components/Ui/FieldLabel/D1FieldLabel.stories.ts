import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FieldLabel from './D1FieldLabel.vue'
import { FieldLabelWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FieldLabel',
  component: D1FieldLabel,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldLabelWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldLabelWikiStorybook.getWiki(),
  args: FieldLabelWikiStorybook.getValues()
} satisfies Meta<typeof D1FieldLabel>

export default meta

type Story = StoryObj<typeof meta>

export const FieldLabel: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1FieldLabel },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
        <D1FieldLabel v-bind="args"/>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-fieldLabel')
    if (component) {
      expect(component.tagName).toBe('LABEL')
    }
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldLabelBasic: Story = {
  name: 'Базовое отображение и связка for',
  render: () => ({
    components: { D1FieldLabel },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Text Label</div>
            <D1FieldLabel label="Username"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Numeric Label</div>
            <D1FieldLabel :label="42"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Required Label</div>
            <D1FieldLabel label="Email Address" required/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Linked Input (for + labelId)</div>
            <D1FieldLabel
              label="Focus Target Label"
              for="wiki-field-label-target"
              label-id="wiki-field-label-heading"
              required
            />
            <input
              id="wiki-field-label-target"
              type="text"
              placeholder="Click label above"
              aria-labelledby="wiki-field-label-heading"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labels = canvasElement.querySelectorAll<HTMLLabelElement>('.d1-fieldLabel')
    await expect(labels.length).toBe(4)
    expect(labels[0].textContent?.trim()).toBe('Username')
    expect(labels[1].textContent?.trim()).toBe('42')
    expect(labels[2].textContent?.trim()).toBe('Email Address*')

    const requiredMark = labels[2].querySelector<HTMLElement>('.d1-fieldLabel__required')
    await expect(requiredMark).toBeInTheDocument()
    await expect(requiredMark).toHaveAttribute('aria-hidden', 'true')

    const linkedLabel = labels[3]
    await expect(linkedLabel).toHaveAttribute('for', 'wiki-field-label-target')
    const headingSpan = linkedLabel.querySelector<HTMLElement>('#wiki-field-label-heading')
    await expect(headingSpan).toBeInTheDocument()

    const targetInput = canvasElement.querySelector<HTMLInputElement>('#wiki-field-label-target')
    await expect(targetInput).toBeInTheDocument()
    expect(targetInput?.labels?.[0]).toBe(linkedLabel)
    linkedLabel.click()
    targetInput?.focus()
    expect(document.activeElement).toBe(targetInput)
  }
}
export const FieldLabelCounter: Story = {
  name: 'Счётчик символов и шаблоны',
  render: () => ({
    components: { D1FieldLabel },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Label + Counter</div>
            <D1FieldLabel label="Bio" counter-show :counter="42" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Zero Counter</div>
            <D1FieldLabel label="Notes" counter-show :counter="0" :maxlength="50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Template, Once & ID</div>
            <D1FieldLabel
              label="Custom"
              counter-show
              :counter="92"
              :maxlength="100"
              :maxlength-once="10"
              counter-template="[c] of [m] chars"
              counter-id="wiki-field-label-counter-custom"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom fieldCounterAttrs</div>
            <D1FieldLabel
              label="Counter Attrs"
              counter-show
              :counter="12"
              :maxlength="30"
              :field-counter-attrs="{ class: 'wiki-custom-counter-attr', textCharacterRemaining: '[left] left' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter Only</div>
            <D1FieldLabel counter-show :counter="15" :maxlength="80"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Hidden When counterShow=false</div>
            <D1FieldLabel label="No Counter Shown" :counter="42" :maxlength="100"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labels = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldLabel')
    await expect(labels.length).toBe(6)

    const customCounter = labels[2].querySelector<HTMLElement>('#wiki-field-label-counter-custom')
    await expect(customCounter).toBeInTheDocument()
    expect(customCounter?.textContent?.trim()).toBe('92 of 100 chars')

    const customAttrCounter = labels[3].querySelector<HTMLElement>('.wiki-custom-counter-attr')
    await expect(customAttrCounter).toBeInTheDocument()
    expect(customAttrCounter?.textContent?.trim()).toBe('12 / 30')

    expect(labels[4].querySelector('.d1-fieldLabel__label')).toBeNull()
    expect(labels[4].textContent?.trim()).toBe('15 / 80')

    expect(labels[5].textContent?.trim()).toBe('No Counter Shown')
  }
}
export const FieldLabelLoadingSkeleton: Story = {
  name: 'Состояния загрузки и скелетона',
  render: () => ({
    components: { D1FieldLabel },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Loading Boolean</div>
            <D1FieldLabel label="Syncing Data" loading/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Loading + Required + Counter</div>
            <D1FieldLabel
              label="Uploading"
              required
              loading
              counter-show
              :counter="24"
              :maxlength="60"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Loading Object Props</div>
            <D1FieldLabel
              label="Custom Progress"
              :loading="{ visible: true, circular: true, dense: true, inverse: false }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Skeleton State</div>
            <D1FieldLabel label="Skeleton Field" required is-skeleton/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labels = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldLabel')
    await expect(labels.length).toBe(4)
    await expect(labels[0].querySelector('[role="progressbar"], svg, .d1-fieldLabel__loading')).toBeTruthy()
    await expect(labels[1].querySelector('.d1-fieldLabel__required')).toBeInTheDocument()
    await expect(labels[2].textContent?.trim()).toContain('Custom Progress')
    expect(labels[3].className).toContain('skeleton')
  }
}
export const FieldLabelSlots: Story = {
  name: 'Пользовательский слот #label',
  render: () => ({
    components: { D1FieldLabel },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Slot Only</div>
            <D1FieldLabel required counter-show :counter="10" :maxlength="50">
              <template #label>
                <span>Custom <strong>Label Slot</strong> Content</span>
              </template>
            </D1FieldLabel>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Label Prop + Slot</div>
            <D1FieldLabel label="Prefix: " required>
              <template #label>
                <span>Appended Slot</span>
              </template>
            </D1FieldLabel>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labels = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldLabel')
    await expect(labels.length).toBe(2)
    await expect(labels[0].querySelector('strong')).toBeInTheDocument()
    expect(labels[0].textContent?.trim()).toContain('Custom Label Slot Content')
    expect(labels[1].textContent?.trim()).toContain('Prefix: Appended Slot')
  }
}
export const FieldLabelTestReactivity: Story = {
  name: 'Тест: Реактивность и условное размонтирование',
  render: () => ({
    components: { D1FieldLabel },
    setup() {
      const labelText = ref('Profile Name')
      const required = ref(true)
      const loading = ref(false)
      const isSkeleton = ref(false)
      const counterShow = ref(true)
      const counter = ref(18)

      return {
        labelText,
        required,
        loading,
        isSkeleton,
        counterShow,
        counter
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="labelText = labelText ? '' : 'Profile Name'">Toggle Label</button>
            <button type="button" class="wiki-storybook-button" @click="required = !required">Toggle Required</button>
            <button type="button" class="wiki-storybook-button" @click="loading = !loading">Toggle Loading</button>
            <button type="button" class="wiki-storybook-button" @click="isSkeleton = !isSkeleton">Toggle Skeleton</button>
            <button type="button" class="wiki-storybook-button" @click="counterShow = !counterShow">Toggle Counter</button>
            <button type="button" class="wiki-storybook-button" @click="counter = counter + 10">Increment Counter</button>
          </div>
          <div class="reactive-host">
            <D1FieldLabel
              :label="labelText"
              :required="required"
              :loading="loading"
              :is-skeleton="isSkeleton"
              :counter-show="counterShow"
              :counter="counter"
              :maxlength="50"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const host = canvasElement.querySelector<HTMLElement>('.reactive-host')!

    await step('Initial state renders label, required marker, and counter', async () => {
      const rootLabel = host.querySelector<HTMLElement>('.d1-fieldLabel')
      await expect(rootLabel).toBeInTheDocument()
      await expect(rootLabel?.querySelector('.d1-fieldLabel__required')).toBeInTheDocument()
      expect(rootLabel?.textContent?.trim()).toContain('18 / 50')
    })

    await step('Incrementing counter updates rendered counter text', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Increment Counter' }))
      expect(host.textContent?.trim()).toContain('28 / 50')
    })

    await step('Toggling required removes and restores the asterisk', async () => {
      const toggleRequiredButton = canvas.getByRole('button', { name: 'Toggle Required' })
      await userEvent.click(toggleRequiredButton)
      expect(host.querySelector('.d1-fieldLabel__required')).toBeNull()
      await userEvent.click(toggleRequiredButton)
      await expect(host.querySelector('.d1-fieldLabel__required')).toBeInTheDocument()
    })

    await step('Turning off label and counterShow before loading unmounts root completely', async () => {
      const toggleLabelButton = canvas.getByRole('button', { name: 'Toggle Label' })
      const toggleCounterButton = canvas.getByRole('button', { name: 'Toggle Counter' })
      await userEvent.click(toggleLabelButton)
      await userEvent.click(toggleCounterButton)
      expect(host.querySelector('.d1-fieldLabel')).toBeNull()
      await userEvent.click(toggleLabelButton)
      await userEvent.click(toggleCounterButton)
      await expect(host.querySelector('.d1-fieldLabel')).toBeInTheDocument()
    })

    await step('Toggling loading and skeleton applies and cleans up states', async () => {
      const toggleSkeletonButton = canvas.getByRole('button', { name: 'Toggle Skeleton' })
      await userEvent.click(toggleSkeletonButton)
      expect(host.querySelector('.d1-fieldLabel')?.className).toContain('skeleton')
      await userEvent.click(toggleSkeletonButton)
      expect(host.querySelector('.d1-fieldLabel')?.className).not.toContain('skeleton')

      const toggleLoadingButton = canvas.getByRole('button', { name: 'Toggle Loading' })
      await userEvent.click(toggleLoadingButton)
      await expect(host.querySelector('.d1-fieldLabel')).toBeInTheDocument()
      await userEvent.click(toggleLoadingButton)
      await expect(host.querySelector('.d1-fieldLabel')).toBeInTheDocument()
    })
  }
}
export const FieldLabelTestBoundaries: Story = {
  name: 'Тест: Граничные значения, RTL и безопасность XSS',
  render: () => ({
    components: { D1FieldLabel },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="empty-host">
            <D1FieldLabel label=""/>
          </div>
          <div class="multilingual-host">
            <D1FieldLabel
              label="Học tiếng Việt — Метка поля 🚀✨"
              required
              counter-show
              :counter="31"
              :maxlength="100"
            />
          </div>
          <div class="rtl-host" dir="rtl">
            <D1FieldLabel
              label="اسم المستخدم المطلوب"
              required
              counter-show
              :counter="12"
              :maxlength="50"
            />
          </div>
          <div class="xss-host">
            <D1FieldLabel label="<img src=x onerror=alert(1)>"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    await step('Empty label without counter or loading renders nothing in DOM', async () => {
      expect(canvasElement.querySelector('.empty-host .d1-fieldLabel')).toBeNull()
    })

    await step('Multilingual diacritics, Cyrillic, Emoji, and RTL render cleanly', async () => {
      const multi = canvasElement.querySelector<HTMLElement>('.multilingual-host .d1-fieldLabel')
      await expect(multi).toBeInTheDocument()
      expect(multi?.textContent?.trim()).toContain('Học tiếng Việt — Метка поля 🚀✨')

      const rtl = canvasElement.querySelector<HTMLElement>('.rtl-host .d1-fieldLabel')
      await expect(rtl).toBeInTheDocument()
      expect(window.getComputedStyle(rtl!).direction).toBe('rtl')
    })

    await step('HTML/XSS string renders strictly as escaped text', async () => {
      const xss = canvasElement.querySelector<HTMLElement>('.xss-host .d1-fieldLabel')
      await expect(xss).toBeInTheDocument()
      expect(xss?.textContent?.trim()).toBe('<img src=x onerror=alert(1)>')
      expect(xss?.querySelector('img')).toBeNull()
    })
  }
}
// :story-items [!] System label / Системная метка
