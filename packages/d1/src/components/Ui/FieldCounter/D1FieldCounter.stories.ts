import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FieldCounter from './D1FieldCounter.vue'
import { FieldCounterWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FieldCounter',
  component: D1FieldCounter,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldCounterWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldCounterWikiStorybook.getWiki(),
  args: FieldCounterWikiStorybook.getValues()
} satisfies Meta<typeof D1FieldCounter>

export default meta

type Story = StoryObj<typeof meta>

export const FieldCounter: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1FieldCounter },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
        <D1FieldCounter v-bind="args"/>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-fieldCounter')
    await expect(component).toBeInTheDocument()
    expect(component?.tagName).toBe('SPAN')
    expect(component?.textContent?.trim().length).toBeGreaterThan(0)
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldCounterBasic: Story = {
  name: 'Базовое отображение и режимы',
  render: () => ({
    components: { D1FieldCounter },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter & Limit (number)</div>
            <D1FieldCounter :counter="42" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter & Limit (string)</div>
            <D1FieldCounter counter="75" maxlength="200"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter Only</div>
            <D1FieldCounter :counter="42"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Zero Counter</div>
            <D1FieldCounter :counter="0" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Maxlength Only</div>
            <D1FieldCounter :maxlength="50"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const counters = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldCounter')
    await expect(counters.length).toBe(5)
    expect(counters[0].textContent?.trim()).toBe('42 / 100')
    expect(counters[1].textContent?.trim()).toBe('75 / 200')
    expect(counters[2].textContent?.trim()).toBe('42')
    expect(counters[3].textContent?.trim()).toBe('0 / 100')
    expect(counters[4].textContent?.trim()).toBe('0 / 50')
  }
}
export const FieldCounterTemplate: Story = {
  name: 'Пользовательский шаблон',
  render: () => ({
    components: { D1FieldCounter },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default template</div>
            <D1FieldCounter :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Word separator: "[c] of [m]"</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Compact: "[c]/[m]"</div>
            <D1FieldCounter :counter="42" :maxlength="100" template="[c]/[m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HTML template</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="<b>[c]</b> / <i>[m]</i> chars"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter only template</div>
            <D1FieldCounter :counter="42" template="Entered: [c] chars"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const counters = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldCounter')
    await expect(counters.length).toBe(5)
    expect(counters[0].textContent?.trim()).toBe('75 / 150')
    expect(counters[1].textContent?.trim()).toBe('Characters: 75 of 150')
    expect(counters[2].textContent?.trim()).toBe('42/100')
    expect(counters[3].textContent?.trim()).toBe('75 / 150 chars')
    await expect(counters[3].querySelector('b')).toBeInTheDocument()
    await expect(counters[3].querySelector('i')).toBeInTheDocument()
    expect(counters[4].textContent?.trim()).toBe('Entered: 42 chars')
  }
}
export const FieldCounterAccessibility: Story = {
  name: 'Пороги и доступность (ARIA)',
  render: () => ({
    components: { D1FieldCounter },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default 10% Threshold (92 / 100)</div>
            <D1FieldCounter :counter="92" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Remaining Text (maxlengthOnce="15")</div>
            <D1FieldCounter
              id="custom-counter-id"
              :counter="88"
              :maxlength="100"
              :maxlength-once="15"
              text-character-remaining="Only [left] chars left"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Limit Exceeded Text</div>
            <D1FieldCounter
              :counter="105"
              :maxlength="100"
              text-character-limit="Character limit reached!"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.wiki-storybook-item')
    await expect(items.length).toBe(3)

    const customCounter = canvasElement.querySelector<HTMLElement>('#custom-counter-id')
    await expect(customCounter).toBeInTheDocument()
    expect(customCounter?.textContent?.trim()).toBe('88 / 100')

    const ariaRegions = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldCounter__aria')
    await expect(ariaRegions.length).toBe(3)
    await expect(ariaRegions[0]).toHaveAttribute('aria-live', 'polite')
    expect(ariaRegions[0].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Remaining 8 characters')
    expect(ariaRegions[1].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Only 12 chars left')
    expect(ariaRegions[2].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Character limit reached!')
  }
}
export const FieldCounterTestReactivity: Story = {
  name: 'Тест: Реактивность счётчика и переходы ARIA',
  render: () => ({
    components: { D1FieldCounter },
    setup() {
      const count = ref(40)
      const limit = ref(100)
      const threshold = ref(15)
      return { count, limit, threshold }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1FieldCounter
            id="reactive-counter"
            :counter="count"
            :maxlength="limit"
            :maxlength-once="threshold"
            template="Chars: [c] of [m]"
            text-character-remaining="[left] chars remaining"
            text-character-limit="Limit exceeded!"
          />
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="count += 10">+10</button>
            <button type="button" class="wiki-storybook-button" @click="count = 90">Near Limit</button>
            <button type="button" class="wiki-storybook-button" @click="count = 100">At Limit</button>
            <button type="button" class="wiki-storybook-button" @click="count = 105">Exceed</button>
            <button type="button" class="wiki-storybook-button" @click="count = 0">Reset</button>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const counter = canvasElement.querySelector<HTMLElement>('#reactive-counter')
    await expect(counter).toBeInTheDocument()

    await step('Initial state in safe range has no active ARIA region', async () => {
      expect(counter?.textContent?.trim()).toBe('Chars: 40 of 100')
      expect(canvasElement.querySelector('.d1-fieldCounter__aria')).toBeNull()
    })

    await step('Increment stays in safe range', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '+10' }))
      expect(counter?.textContent?.trim()).toBe('Chars: 50 of 100')
      expect(canvasElement.querySelector('.d1-fieldCounter__aria')).toBeNull()
    })

    await step('Crossing maxlengthOnce mounts remaining ARIA live message', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Near Limit' }))
      expect(counter?.textContent?.trim()).toBe('Chars: 90 of 100')
      const ariaLabel = canvasElement.querySelector('.d1-fieldCounter__aria [aria-label]')?.getAttribute('aria-label')
      expect(ariaLabel).toBe('10 chars remaining')
    })

    await step('Reaching and exceeding limit announces limit text', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'At Limit' }))
      expect(counter?.textContent?.trim()).toBe('Chars: 100 of 100')
      expect(canvasElement.querySelector('.d1-fieldCounter__aria [aria-label]')?.getAttribute('aria-label')).toBe('Limit exceeded!')

      await userEvent.click(canvas.getByRole('button', { name: 'Exceed' }))
      expect(counter?.textContent?.trim()).toBe('Chars: 105 of 100')
      expect(canvasElement.querySelector('.d1-fieldCounter__aria [aria-label]')?.getAttribute('aria-label')).toBe('Limit exceeded!')
    })

    await step('Reset clears ARIA region and displays zero counter', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
      expect(counter?.textContent?.trim()).toBe('Chars: 0 of 100')
      expect(canvasElement.querySelector('.d1-fieldCounter__aria')).toBeNull()
    })
  }
}
export const FieldCounterTestBoundaries: Story = {
  name: 'Тест: Условное монтирование и граничные пропы',
  render: () => ({
    components: { D1FieldCounter },
    setup() {
      const enabled = ref(false)
      return { enabled }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="conditional-host">
            <D1FieldCounter
              :counter="enabled ? 5 : undefined"
              :maxlength="enabled ? 20 : undefined"
            />
          </div>
          <div class="edge-host">
            <D1FieldCounter counter="0"/>
            <D1FieldCounter :counter="75" maxlength="100" maxlength-once="25"/>
            <D1FieldCounter :counter="90" :maxlength="100" :maxlength-once="0"/>
          </div>
          <button type="button" class="wiki-storybook-button" @click="enabled = !enabled">Toggle Counter</button>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Initially unmounted when counter and maxlength are undefined', async () => {
      expect(canvasElement.querySelector('.conditional-host .d1-fieldCounter')).toBeNull()
    })

    await step('Toggling props mounts and unmounts the counter cleanly', async () => {
      const toggleBtn = canvas.getByRole('button', { name: 'Toggle Counter' })
      await userEvent.click(toggleBtn)
      const mounted = canvasElement.querySelector<HTMLElement>('.conditional-host .d1-fieldCounter')
      await expect(mounted).toBeInTheDocument()
      expect(mounted?.textContent?.trim()).toBe('5 / 20')

      await userEvent.click(toggleBtn)
      expect(canvasElement.querySelector('.conditional-host .d1-fieldCounter')).toBeNull()
    })

    await step('String zero and string/zero maxlengthOnce edge cases', async () => {
      const edges = canvasElement.querySelectorAll<HTMLElement>('.edge-host .d1-fieldCounter')
      await expect(edges.length).toBe(3)
      expect(edges[0].textContent?.trim()).toBe('0')
      expect(edges[1].textContent?.trim()).toBe('75 / 100')
      expect(edges[2].textContent?.trim()).toBe('90 / 100')

      const ariaRegions = canvasElement.querySelectorAll<HTMLElement>('.edge-host .d1-fieldCounter__aria')
      await expect(ariaRegions.length).toBe(1)
      expect(ariaRegions[0].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Remaining 25 characters')
    })
  }
}
// :story-items [!] System label / Системная метка
