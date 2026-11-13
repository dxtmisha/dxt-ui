import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Icon from './D1Icon.vue'
import { IconWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { image1, image2 } from '@dxtmisha/wiki/media'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ImageEventData } from '@dxtmisha/constructor/Image'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Icon',
  component: D1Icon,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: IconWikiStorybook.getDescription()
      }
    }
  },
  argTypes: IconWikiStorybook.getWiki(),
  args: IconWikiStorybook.getValues()
} satisfies Meta<typeof D1Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Icon },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
        <D1Icon v-bind="args"/>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-icon')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('d1-icon--animationType--type1')
    await expect(component).toHaveAttribute('aria-hidden', 'true')

    const mainIcon = component?.querySelector<HTMLElement>('.d1-icon__icon')
    const activeIcon = component?.querySelector<HTMLElement>('.d1-icon__iconActive')
    await expect(mainIcon).toBeInTheDocument()
    await expect(activeIcon).toBeInTheDocument()
    expect(mainIcon?.textContent?.trim()).toBe('visibility')
    expect(activeIcon?.textContent?.trim()).toBe('visibility_off')
    expect(activeIcon?.className).toContain('--hide')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const IconState: Story = {
  name: 'Состояние иконки',
  render: () => ({
    components: { D1Icon },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Icon icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Icon icon="heart_minus" icon-active="favorite" :active="true"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Turn (180°)</div>
            <D1Icon icon="expand_more" turn/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <D1Icon icon="home" disabled/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
    await expect(icons.length).toBe(4)

    // 0. Default icon: decorative aria-hidden, main icon visible, no active icon
    await expect(icons[0]).toHaveAttribute('aria-hidden', 'true')
    const defaultMain = icons[0].querySelector<HTMLElement>('.d1-icon__icon')
    await expect(defaultMain).toBeInTheDocument()
    expect(defaultMain?.textContent?.trim()).toBe('home')
    expect(defaultMain?.className).not.toContain('--hide')
    await expect(icons[0].querySelector('.d1-icon__iconActive')).toBeNull()

    // 1. Active state: main icon hidden, active icon visible
    const activeMain = icons[1].querySelector<HTMLElement>('.d1-icon__icon')
    const activeSecondary = icons[1].querySelector<HTMLElement>('.d1-icon__iconActive')
    await expect(activeMain).toBeInTheDocument()
    await expect(activeSecondary).toBeInTheDocument()
    expect(activeMain?.textContent?.trim()).toBe('heart_minus')
    expect(activeMain?.className).toContain('--hide')
    expect(activeSecondary?.textContent?.trim()).toBe('favorite')
    expect(activeSecondary?.className).not.toContain('--hide')

    // 2. Turn (180° rotation) propagated to root and child Image
    await expect(icons[2]).toHaveClass('d1-icon--turn')
    const turnedMain = icons[2].querySelector<HTMLElement>('.d1-icon__icon')
    expect(turnedMain?.className).toContain('--turn')

    // 3. Disabled state propagated to root and child Image
    await expect(icons[3]).toHaveClass('d1-icon--disabled')
    const disabledMain = icons[3].querySelector<HTMLElement>('.d1-icon__icon')
    expect(disabledMain?.className).toContain('--disabled')
  }
}
export const IconDynamic: Story = {
  name: 'Интерактивный режим (dynamic)',
  render: () => ({
    components: { D1Icon },
    setup() {
      const isVisible = ref(false)
      const lastClickedValue = ref('None')

      const onToggle = (_event: MouseEvent, payload: EventClickValue) => {
        isVisible.value = !isVisible.value
        lastClickedValue.value = String(payload.value ?? '')
      }

      return {
        isVisible,
        lastClickedValue,
        onToggle
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic toggle</div>
            <D1Icon
              icon="visibility"
              icon-active="visibility_off"
              :active="isVisible"
              dynamic
              aria-label="Toggle visibility"
              value="visibility-toggle"
              @click="onToggle"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + disabled</div>
            <D1Icon
              icon="lock"
              dynamic
              disabled
              aria-label="Locked action"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
    await expect(icons.length).toBe(2)

    // 0. Interactive dynamic icon: role="button", aria-label, tabindex="0", no aria-hidden
    const interactiveIcon = icons[0]
    await expect(interactiveIcon).toHaveClass('d1-icon--dynamic')
    await expect(interactiveIcon).toHaveAttribute('role', 'button')
    await expect(interactiveIcon).toHaveAttribute('aria-label', 'Toggle visibility')
    await expect(interactiveIcon).toHaveAttribute('tabindex', '0')
    await expect(interactiveIcon).not.toHaveAttribute('aria-hidden')

    const mainIcon = interactiveIcon.querySelector<HTMLElement>('.d1-icon__icon')
    const activeIcon = interactiveIcon.querySelector<HTMLElement>('.d1-icon__iconActive')
    expect(mainIcon?.className).not.toContain('--hide')
    expect(activeIcon?.className).toContain('--hide')

    await step('Click dynamic icon to toggle active state', async () => {
      await userEvent.click(interactiveIcon)
      expect(mainIcon?.className).toContain('--hide')
      expect(activeIcon?.className).not.toContain('--hide')
    })

    await step('Click dynamic icon again to restore initial state', async () => {
      await userEvent.click(interactiveIcon)
      expect(mainIcon?.className).not.toContain('--hide')
      expect(activeIcon?.className).toContain('--hide')
    })

    // 1. Disabled dynamic icon: aria-disabled="true" and tabindex omitted
    const disabledIcon = icons[1]
    await expect(disabledIcon).toHaveClass('d1-icon--dynamic')
    await expect(disabledIcon).toHaveClass('d1-icon--disabled')
    await expect(disabledIcon).toHaveAttribute('role', 'button')
    await expect(disabledIcon).toHaveAttribute('aria-label', 'Locked action')
    await expect(disabledIcon).toHaveAttribute('aria-disabled', 'true')
    await expect(disabledIcon).not.toHaveAttribute('tabindex')
  }
}
export const IconDirection: Story = {
  name: 'Направление компонента',
  render: () => ({
    components: { D1Icon },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <D1Icon dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <D1Icon dir icon="arrow_forward"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
    await expect(icons.length).toBe(2)

    await expect(icons[0]).toHaveClass('d1-icon--dir')
    await expect(icons[1]).toHaveClass('d1-icon--dir')
    expect(icons[0].querySelector('.d1-icon__icon')?.textContent?.trim()).toBe('arrow_forward')
    expect(icons[1].querySelector('.d1-icon__icon')?.textContent?.trim()).toBe('arrow_forward')
    await expect(icons[1].closest('.wiki-storybook-item--rtl')).toBeInTheDocument()
  }
}
export const IconPalette: Story = {
  name: 'Палитра',
  render: () => ({
    components: { D1Icon },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Icon icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <D1Icon icon="home" as-palette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Overlay</div>
            <D1Icon icon="home" as-palette overlay/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
    await expect(icons.length).toBe(3)

    await expect(icons[0]).not.toHaveClass('d1-icon--asPalette')
    await expect(icons[0]).not.toHaveClass('d1-icon--overlay')

    await expect(icons[1]).toHaveClass('d1-icon--asPalette')
    await expect(icons[1]).not.toHaveClass('d1-icon--overlay')

    await expect(icons[2]).toHaveClass('d1-icon--asPalette')
    await expect(icons[2]).toHaveClass('d1-icon--overlay')
  }
}
export const IconSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Icon, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Icon is-skeleton icon="home"/>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-icon')
    await expect(component).toBeInTheDocument()
    expect(component?.className).toContain('skeleton__backgroundVariant')
  }
}
export const IconTestNavigationTags: Story = {
  name: 'Тест: Корневой тег ссылки для href и целей роутера',
  render: () => ({
    components: { D1Icon },
    template: `

        <div class="wiki-storybook-group">
          <D1Icon icon="home"/>
          <D1Icon icon="open_in_new" dynamic href="https://example.com" aria-label="External link"/>
          <D1Icon icon="home" dynamic to="/" aria-label="Router link"/>
          <D1Icon icon="settings" :to="{ path: '/settings' }"/>
          <D1Icon icon="open_in_new" href="https://example.com"/>
        </div>

    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
      expect(icons.length).toBe(5)
      expect(icons[0].tagName).toBe('SPAN')
      expect(icons[1].tagName).toBe('A')
      expect(icons[1]).toHaveAttribute('href', 'https://example.com')
      expect(icons[2].tagName).toBe('A')
      expect(icons[3].tagName).toBe('A')
      expect(icons[4].tagName).toBe('A')
    })
  }
}
export const IconTestSourcesAndActive: Story = {
  name: 'Тест: Источники icon и iconActive (иконки, флаги, цвета, объекты ImageProps, файлы, слот default)',
  render: () => ({
    components: { D1Icon },
    setup() {
      const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#00897B"/><circle cx="32" cy="32" r="16" fill="#FFFFFF"/></svg>'
      const svgBytes = new Uint8Array([...svgMarkup].map(character => character.charCodeAt(0)))
      const svgFile = new File([svgMarkup], 'icon-badge.svg', { type: 'image/svg+xml' })

      return {
        image1,
        image2,
        svgBytes,
        svgFile
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">outlined -> filled (inactive)</div>
            <D1Icon icon="outlined-home" icon-active="filled-home" :active="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">round -> sharp (active)</div>
            <D1Icon icon="round-star" icon-active="sharp-star" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active without iconActive</div>
            <D1Icon icon="material-bookmark" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">flag-us -> flag-vn (active)</div>
            <D1Icon icon="flag-us" icon-active="flag-vn" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">f-us -> f-vn (active)</div>
            <D1Icon icon="f-us" icon-active="f-vn" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">color swatch</div>
            <D1Icon icon="#4CAF50" icon-active="#FF9800" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">ImageProps objects (inactive)</div>
            <D1Icon
              :icon="{ value: image1, size: 'contain', tagImg: true, alt: 'Primary icon image' }"
              :icon-active="{ value: image2, size: 'cover', tagImg: true, alt: 'Active icon image' }"
              :active="false"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">ImageProps objects (active)</div>
            <D1Icon
              :icon="{ value: image1, size: 'contain', tagImg: true, alt: 'Primary icon image' }"
              :icon-active="{ value: image2, size: 'cover', tagImg: true, alt: 'Active icon image' }"
              active
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Uint8Array & File (active)</div>
            <D1Icon
              :icon="{ value: svgBytes, size: 'contain', tagImg: true, alt: 'Binary icon' }"
              :icon-active="{ value: svgFile, size: 'contain', tagImg: true, alt: 'File icon' }"
              active
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">default slot + icon</div>
            <D1Icon icon="notifications">
              <span class="custom-slot-badge">3</span>
            </D1Icon>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
      expect(icons.length).toBe(10)

      // 0. Outlined -> Filled (active=false): main visible, active hidden
      const main0 = icons[0].querySelector<HTMLElement>('.d1-icon__icon')
      const active0 = icons[0].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main0).toHaveClass('material-symbols-outlined')
      expect(main0?.className).not.toContain('--hide')
      expect(active0).toHaveClass('material-icons')
      expect(active0?.className).toContain('--hide')

      // 1. Round -> Sharp (active=true): main hidden, active visible
      const main1 = icons[1].querySelector<HTMLElement>('.d1-icon__icon')
      const active1 = icons[1].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main1).toHaveClass('material-symbols-rounded')
      expect(main1?.className).toContain('--hide')
      expect(active1).toHaveClass('material-symbols-sharp')
      expect(active1?.className).not.toContain('--hide')

      // 2. active=true WITHOUT iconActive: isActive() is false, so main icon remains visible!
      const main2 = icons[2].querySelector<HTMLElement>('.d1-icon__icon')
      expect(main2).toHaveClass('material-icons')
      expect(main2?.className).not.toContain('--hide')
      expect(icons[2].querySelector('.d1-icon__iconActive')).toBeNull()

      // 3. Flag icons (active=true)
      const main3 = icons[3].querySelector<HTMLElement>('.d1-icon__icon')
      const active3 = icons[3].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main3?.className).toContain('--type--flag')
      expect(main3?.className).toContain('--hide')
      expect(active3?.className).toContain('--type--flag')
      expect(active3?.className).not.toContain('--hide')

      // 4. Compressed flags f-us -> f-vn (active=true)
      const main4 = icons[4].querySelector<HTMLElement>('.d1-icon__icon')
      const active4 = icons[4].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main4?.querySelector('.ui-sys-flags--US')).toBeInTheDocument()
      expect(main4?.className).toContain('--hide')
      expect(active4?.querySelector('.ui-sys-flags--VN')).toBeInTheDocument()
      expect(active4?.className).not.toContain('--hide')

      // 5. Color swatches (active=true)
      const main5 = icons[5].querySelector<HTMLElement>('.d1-icon__icon')
      const active5 = icons[5].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main5?.className).toContain('--type--color')
      expect(main5?.className).toContain('--hide')
      expect(active5?.className).toContain('--type--color')
      expect(active5?.className).not.toContain('--hide')

      // 6. ImageProps objects (active=false)
      const main6 = icons[6].querySelector<HTMLElement>('.d1-icon__icon')
      const active6 = icons[6].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main6?.querySelector('img')?.getAttribute('alt')).toBe('Primary icon image')
      expect(main6?.className).not.toContain('--hide')
      expect(active6?.querySelector('img')?.getAttribute('alt')).toBe('Active icon image')
      expect(active6?.className).toContain('--hide')

      // 7. ImageProps objects (active=true)
      const main7 = icons[7].querySelector<HTMLElement>('.d1-icon__icon')
      const active7 = icons[7].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main7?.className).toContain('--hide')
      expect(active7?.className).not.toContain('--hide')

      // 8. Uint8Array and File objects (active=true)
      const main8 = icons[8].querySelector<HTMLElement>('.d1-icon__icon')
      const active8 = icons[8].querySelector<HTMLElement>('.d1-icon__iconActive')
      expect(main8?.className).toContain('--type--array')
      expect(main8?.className).toContain('--hide')
      expect(active8?.className).toContain('--type--file')
      expect(active8?.className).not.toContain('--hide')

      // 9. Default slot alongside icon
      const slotBadge = icons[9].querySelector('.custom-slot-badge')
      expect(slotBadge?.textContent).toBe('3')
      expect(icons[9].querySelector('.d1-icon__icon')?.textContent?.trim()).toBe('notifications')
    })
  }
}
export const IconTestStatesAndAnimations: Story = {
  name: 'Тест: Визуальные состояния, модификаторы позиционирования и анимации (turn, disabled, hide, start, end, high, animationType, animationShow)',
  render: () => ({
    components: { D1Icon },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default (type1)</div>
            <D1Icon icon="expand_more"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">turn</div>
            <D1Icon icon="expand_more" icon-active="expand_less" turn/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">disabled</div>
            <D1Icon icon="expand_more" icon-active="expand_less" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">hide</div>
            <D1Icon icon="expand_more" hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">turn + disabled</div>
            <D1Icon icon="expand_more" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">turn + hide</div>
            <D1Icon icon="expand_more" turn hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">disabled + hide</div>
            <D1Icon icon="expand_more" disabled hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">turn + disabled + hide</div>
            <D1Icon icon="expand_more" turn disabled hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">asPalette + overlay + dir + turn</div>
            <D1Icon icon="arrow_forward" as-palette overlay dir turn/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">start + high</div>
            <D1Icon icon="chevron_left" start high/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">end + high</div>
            <D1Icon icon="chevron_right" end high/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">animationType="type2" + animationShow</div>
            <D1Icon icon="check" animation-type="type2" animation-show/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">type2 + hide + animationShow</div>
            <D1Icon icon="check" animation-type="type2" hide animation-show/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">custom --width var</div>
            <D1Icon icon="star" style="--d1-icon-width: 36px;"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
    await expect(icons.length).toBe(14)

    // 0. Default state: animationType--type1, no modifier flags
    await expect(icons[0]).toHaveClass('d1-icon--animationType--type1')
    await expect(icons[0]).not.toHaveClass('d1-icon--turn')
    await expect(icons[0]).not.toHaveClass('d1-icon--disabled')
    await expect(icons[0]).not.toHaveClass('d1-icon--hide')

    // 1. turn propagated to root, main icon, and active icon
    await expect(icons[1]).toHaveClass('d1-icon--turn')
    expect(icons[1].querySelector('.d1-icon__icon')?.className).toContain('--turn')
    expect(icons[1].querySelector('.d1-icon__iconActive')?.className).toContain('--turn')

    // 2. disabled propagated to root, main icon, and active icon
    await expect(icons[2]).toHaveClass('d1-icon--disabled')
    expect(icons[2].querySelector('.d1-icon__icon')?.className).toContain('--disabled')
    expect(icons[2].querySelector('.d1-icon__iconActive')?.className).toContain('--disabled')

    // 3. hide modifier
    await expect(icons[3]).toHaveClass('d1-icon--hide')

    // 4. turn + disabled
    await expect(icons[4]).toHaveClass('d1-icon--turn')
    await expect(icons[4]).toHaveClass('d1-icon--disabled')

    // 5. turn + hide
    await expect(icons[5]).toHaveClass('d1-icon--turn')
    await expect(icons[5]).toHaveClass('d1-icon--hide')

    // 6. disabled + hide
    await expect(icons[6]).toHaveClass('d1-icon--disabled')
    await expect(icons[6]).toHaveClass('d1-icon--hide')

    // 7. turn + disabled + hide
    await expect(icons[7]).toHaveClass('d1-icon--turn')
    await expect(icons[7]).toHaveClass('d1-icon--disabled')
    await expect(icons[7]).toHaveClass('d1-icon--hide')

    // 8. asPalette + overlay + dir + turn
    await expect(icons[8]).toHaveClass('d1-icon--asPalette')
    await expect(icons[8]).toHaveClass('d1-icon--overlay')
    await expect(icons[8]).toHaveClass('d1-icon--dir')
    await expect(icons[8]).toHaveClass('d1-icon--turn')

    // 9. start + high
    await expect(icons[9]).toHaveClass('d1-icon--start')
    await expect(icons[9]).toHaveClass('d1-icon--high')
    await expect(icons[9]).not.toHaveClass('d1-icon--end')

    // 10. end + high
    await expect(icons[10]).toHaveClass('d1-icon--end')
    await expect(icons[10]).toHaveClass('d1-icon--high')
    await expect(icons[10]).not.toHaveClass('d1-icon--start')

    // 11. animationType="type2" + animationShow
    await expect(icons[11]).toHaveClass('d1-icon--animationType--type2')
    await expect(icons[11]).toHaveClass('d1-icon--animationShow')

    // 12. animationType="type2" + hide + animationShow
    await expect(icons[12]).toHaveClass('d1-icon--animationType--type2')
    await expect(icons[12]).toHaveClass('d1-icon--hide')
    await expect(icons[12]).toHaveClass('d1-icon--animationShow')

    // 13. Custom CSS variable --d1-icon-width
    expect(icons[13].style.getPropertyValue('--d1-icon-width')).toBe('36px')
  }
}
export const IconTestAccessibilityAndDynamic: Story = {
  name: 'Тест: Режим dynamic, ARIA-атрибуты, role, tabindex и комбинации с href',
  render: () => ({
    components: { D1Icon },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">static ignores ARIA</div>
            <D1Icon icon="info" aria-label="Ignored label" role="img" :tabindex="0"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic default</div>
            <D1Icon icon="search" dynamic/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + custom role & tabindex</div>
            <D1Icon icon="dark_mode" dynamic aria-label="Theme switch" role="switch" :tabindex="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + tabindex="-1"</div>
            <D1Icon icon="close" dynamic aria-label="Programmatic focus only" :tabindex="-1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + string tabindex</div>
            <D1Icon icon="menu" dynamic aria-label="Menu" tabindex="0"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + href</div>
            <D1Icon icon="open_in_new" dynamic href="https://example.com/docs" aria-label="External docs"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + disabled</div>
            <D1Icon icon="delete" dynamic disabled aria-label="Delete item" :tabindex="3"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">dynamic + disabled + turn + overlay</div>
            <D1Icon icon="settings" dynamic disabled turn as-palette overlay aria-label="Disabled settings"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const icons = canvasElement.querySelectorAll<HTMLElement>('.d1-icon')
    await expect(icons.length).toBe(8)

    // 0. Static mode: always aria-hidden="true", ignores ariaLabel, role, and tabindex
    await expect(icons[0]).toHaveAttribute('aria-hidden', 'true')
    await expect(icons[0]).not.toHaveAttribute('aria-label')
    await expect(icons[0]).not.toHaveAttribute('role')
    await expect(icons[0]).not.toHaveAttribute('tabindex')

    // 1. Dynamic default: role="button", tabindex="0", no aria-hidden
    await expect(icons[1]).toHaveClass('d1-icon--dynamic')
    await expect(icons[1]).toHaveAttribute('role', 'button')
    await expect(icons[1]).toHaveAttribute('tabindex', '0')
    await expect(icons[1]).not.toHaveAttribute('aria-hidden')
    await expect(icons[1]).not.toHaveAttribute('aria-disabled')

    // 2. Dynamic + custom role="switch", aria-label, tabindex="2"
    await expect(icons[2]).toHaveAttribute('role', 'switch')
    await expect(icons[2]).toHaveAttribute('aria-label', 'Theme switch')
    await expect(icons[2]).toHaveAttribute('tabindex', '2')

    // 3. Dynamic + negative tabindex (-1 preserved without falsy trap)
    await expect(icons[3]).toHaveAttribute('role', 'button')
    await expect(icons[3]).toHaveAttribute('aria-label', 'Programmatic focus only')
    await expect(icons[3]).toHaveAttribute('tabindex', '-1')

    // 4. Dynamic + string tabindex="0"
    await expect(icons[4]).toHaveAttribute('tabindex', '0')
    await expect(icons[4]).toHaveAttribute('aria-label', 'Menu')

    // 5. Dynamic + href
    expect(icons[5].tagName).toBe('A')
    await expect(icons[5]).toHaveAttribute('role', 'button')
    await expect(icons[5]).toHaveAttribute('href', 'https://example.com/docs')
    await expect(icons[5]).toHaveAttribute('aria-label', 'External docs')
    await expect(icons[5]).toHaveAttribute('tabindex', '0')

    // 6. Dynamic + disabled: sets aria-disabled="true" and omits tabindex
    await expect(icons[6]).toHaveClass('d1-icon--dynamic')
    await expect(icons[6]).toHaveClass('d1-icon--disabled')
    await expect(icons[6]).toHaveAttribute('role', 'button')
    await expect(icons[6]).toHaveAttribute('aria-label', 'Delete item')
    await expect(icons[6]).toHaveAttribute('aria-disabled', 'true')
    await expect(icons[6]).not.toHaveAttribute('tabindex')

    // 7. Dynamic + disabled + turn + asPalette + overlay
    await expect(icons[7]).toHaveClass('d1-icon--dynamic')
    await expect(icons[7]).toHaveClass('d1-icon--disabled')
    await expect(icons[7]).toHaveClass('d1-icon--turn')
    await expect(icons[7]).toHaveClass('d1-icon--asPalette')
    await expect(icons[7]).toHaveClass('d1-icon--overlay')
    await expect(icons[7]).toHaveAttribute('aria-disabled', 'true')
  }
}
export const IconTestEventsAndExpose: Story = {
  name: 'Тест: События click, клавиатуры, load и публичные методы (isActive, getValue, getDetail)',
  render: () => ({
    components: { D1Icon },
    setup() {
      const iconRef = ref()
      const isActiveState = ref(false)
      const isDisabledState = ref(false)
      const clickCount = ref(0)
      const clickLiteCount = ref(0)
      const lastClickValue = ref('')
      const lastClickDetail = ref('')
      const loadEventType = ref('')
      const exposedActive = ref(false)
      const exposedValue = ref('')
      const exposedDetailSource = ref('')

      const syncExposed = () => {
        exposedActive.value = Boolean(iconRef.value?.isActive?.())
        exposedValue.value = String(iconRef.value?.getValue?.() ?? '')
        const detailRecord = iconRef.value?.getDetail?.() as Record<string, unknown> | undefined
        exposedDetailSource.value = String(detailRecord?.source ?? '')
      }

      const onClick = (_event: MouseEvent, payload: EventClickValue) => {
        clickCount.value += 1
        isActiveState.value = !isActiveState.value
        lastClickValue.value = String(payload.value ?? '')
        lastClickDetail.value = String((payload.detail as Record<string, unknown> | undefined)?.source ?? '')
        syncExposed()
      }

      const onClickLite = (payload: EventClickValue) => {
        clickLiteCount.value += 1
        lastClickValue.value = String(payload.value ?? '')
      }

      const onLoad = (event: ImageEventData) => {
        loadEventType.value = String(event.type)
        syncExposed()
      }

      return {
        image1,
        iconRef,
        isActiveState,
        isDisabledState,
        clickCount,
        clickLiteCount,
        lastClickValue,
        lastClickDetail,
        loadEventType,
        exposedActive,
        exposedValue,
        exposedDetailSource,
        syncExposed,
        onClick,
        onClickLite,
        onLoad
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="syncExposed()">Read Expose</button>
            <button class="wiki-storybook-button" @click="isDisabledState = !isDisabledState">Toggle Disabled</button>
            <span class="event-stats">Clicks: {{ clickCount }} | Lite: {{ clickLiteCount }} | Value: {{ lastClickValue }} | Detail: {{ lastClickDetail }}</span>
            <span class="expose-stats">Active: {{ exposedActive }} | getValue: {{ exposedValue }} | getDetail: {{ exposedDetailSource }} | Load: {{ loadEventType }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <D1Icon
              ref="iconRef"
              :icon="image1"
              icon-active="favorite"
              :active="isActiveState"
              :disabled="isDisabledState"
              dynamic
              aria-label="Interactive bookmark icon"
              value="bookmark-action"
              :detail="{ source: 'toolbar' }"
              @click="onClick"
              @click-lite="onClickLite"
              @load="onLoad"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const component = canvasElement.querySelector<HTMLElement>('.d1-icon')
    await expect(component).toBeInTheDocument()

    await step('Inspect initial exposed methods (isActive, getValue, getDetail)', async () => {
      const readButton = canvas.getByRole('button', { name: 'Read Expose' })
      await userEvent.click(readButton)
      const exposeStats = canvasElement.querySelector('.expose-stats')
      expect(exposeStats?.textContent).toContain('Active: false')
      expect(exposeStats?.textContent).toContain('getValue: bookmark-action')
      expect(exposeStats?.textContent).toContain('getDetail: toolbar')
    })

    await step('Trigger @click and @clickLite via mouse click and verify active state', async () => {
      if (component) {
        await userEvent.click(component)
      }
      const readButton = canvas.getByRole('button', { name: 'Read Expose' })
      await userEvent.click(readButton)

      const eventStats = canvasElement.querySelector('.event-stats')
      const exposeStats = canvasElement.querySelector('.expose-stats')
      expect(eventStats?.textContent).toContain('Clicks: 1')
      expect(eventStats?.textContent).toContain('Lite: 1')
      expect(eventStats?.textContent).toContain('Value: bookmark-action')
      expect(eventStats?.textContent).toContain('Detail: toolbar')
      expect(exposeStats?.textContent).toContain('Active: true')
    })

    await step('Trigger @click via Enter keyboard keydown in dynamic mode', async () => {
      component?.focus()
      await userEvent.keyboard('{Enter}')
      const readButton = canvas.getByRole('button', { name: 'Read Expose' })
      await userEvent.click(readButton)

      const eventStats = canvasElement.querySelector('.event-stats')
      const exposeStats = canvasElement.querySelector('.expose-stats')
      expect(eventStats?.textContent).toContain('Clicks: 2')
      expect(exposeStats?.textContent).toContain('Active: false')
    })

    await step('Disable icon and verify clicks are blocked', async () => {
      const disableButton = canvas.getByRole('button', { name: 'Toggle Disabled' })
      await userEvent.click(disableButton)
      await expect(component).toHaveAttribute('aria-disabled', 'true')

      if (component) {
        await userEvent.click(component)
      }
      const eventStats = canvasElement.querySelector('.event-stats')
      expect(eventStats?.textContent).toContain('Clicks: 2')
    })
  }
}
// :story-items [!] System label / Системная метка
