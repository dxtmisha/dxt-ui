<script setup lang="ts">
import { ref } from 'vue'
import type { ListItemProps } from '@dxtmisha/d1/D1ListItem'
import type { MenuExpose } from '@dxtmisha/constructor/Menu'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

// 1. Common datasets
const menuItems = ref([
  { label: 'Play', value: 'play', icon: 'play_arrow' },
  { label: 'Edit', value: 'edit', icon: 'edit' },
  { label: 'Settings', value: 'settings', icon: 'settings', disabled: true },
  { label: 'Delete', value: 'delete', icon: 'delete' }
])

const recordItems = ref({
  alpha: { label: 'Record Alpha', icon: 'looks_one' },
  beta: { label: 'Record Beta', icon: 'looks_two' },
  gamma: { label: 'Record Gamma', icon: 'looks_3' }
})

const customKeyItems = ref([
  { title: 'Custom Key One', code: 'k1', icon: 'key' },
  { title: 'Custom Key Two', code: 'k2', icon: 'vpn_key' },
  { title: 'Custom Key Three', code: 'k3', icon: 'lock' }
])

const largeItems = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' }
])

const highlightItems = ref([
  { label: 'Project index example', value: 'projects', icon: 'folder' },
  { label: 'Advanced context options', value: 'experiments', icon: 'tune' },
  { label: 'Next examination notes', value: 'example', icon: 'description' }
])

// 2. States for variations
const selectedBasic = ref('play')
const selectedRecord = ref('beta')
const selectedCustomKey = ref('k2')

const selectedNone = ref('play')
const selectedCheckmark = ref('edit')
const selectedRadio = ref('delete')
const selectedCheckbox = ref(['play'])
const selectedMultiMax = ref(['play', 'edit'])

const selectedSearch = ref('cherry')
const selectedHighlight = ref('experiments')
const selectedHeader = ref('play')

const selectedAutoClose = ref('play')
const selectedPersistent = ref('play')
const selectedInDom = ref('play')

const selectedEmbedded = ref('play')
const selectedIndent = ref('play')
const selectedLite = ref('apple')

const largeIconPool = ['home', 'star', 'folder', 'settings', 'palette', 'bolt', 'favorite', 'bookmark', 'tune', 'work']
const picturePalettes = [
  { sky: '#1E88E5', hill: '#43A047', sun: '#FDD835' },
  { sky: '#8E24AA', hill: '#EC407A', sun: '#FFD54F' },
  { sky: '#00897B', hill: '#26A69A', sun: '#FFF176' },
  { sky: '#3949AB', hill: '#5C6BC0', sun: '#FFB74D' },
  { sky: '#F4511E', hill: '#FB8C00', sun: '#FFF59D' }
]

/**
 * Generates an inline multi-color SVG picture data URI for large menu testing.
 *
 * Генерирует встроенный многоцветный SVG data URI картинки для тестирования большого меню.
 * @param index item index / индекс элемента
 * @returns SVG picture data URI / data URI SVG-картинки
 */
const createPictureIcon = (index: number): string => {
  const palette = picturePalettes[index % picturePalettes.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="${palette.sky}"/><circle cx="15" cy="15" r="6" fill="${palette.sun}"/><path d="M0 36 L16 22 L28 32 L38 20 L48 30 L48 48 L0 48 Z" fill="${palette.hill}"/></svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const largePlainItems = ref(
  Array.from({ length: 60 }, (_, index) => ({
    label: `Plain Item ${index + 1}`,
    value: `plain-${index + 1}`
  }))
)

const largeIconItems = ref(
  Array.from({ length: 60 }, (_, index) => ({
    label: `Icon Item ${index + 1}`,
    value: `icon-${index + 1}`,
    icon: largeIconPool[index % largeIconPool.length]
  }))
)

const largePictureItems = ref(
  Array.from({ length: 60 }, (_, index) => ({
    label: `Picture Item ${index + 1}`,
    value: `picture-${index + 1}`,
    icon: createPictureIcon(index)
  }))
)

const cachedPictureIcons = picturePalettes.map((_, index) => createPictureIcon(index))

const largeMixed512Items = ref(
  Array.from({ length: 512 }, (_, index) => {
    const number = index + 1

    if (index % 5 === 4) {
      return {
        label: `Mixed 512 #${number} (Plain)`,
        value: `mixed-${number}`
      }
    }

    if (index % 2 === 0) {
      return {
        label: `Mixed 512 #${number} (Icon)`,
        value: `mixed-${number}`,
        icon: largeIconPool[index % largeIconPool.length]
      }
    }

    return {
      label: `Mixed 512 #${number} (Picture)`,
      value: `mixed-${number}`,
      icon: cachedPictureIcons[index % cachedPictureIcons.length]
    }
  })
)

const selectedLargePlain = ref('plain-1')
const selectedLargeIcons = ref('icon-1')
const selectedLargePictures = ref('picture-1')
const selectedLargeMixed512 = ref('mixed-1')
const selectedLargeMixed512Lazy = ref('mixed-1')
const selectedLargeMixed512LazyCustom = ref('mixed-1')
const selectedLargeMixed512NoLite = ref('mixed-1')
const selectedLargeMixed512NoLiteLazy = ref('mixed-1')

const selectedAjax = ref('settings')
const ajaxFetchCount = ref(0)

/**
 * Loads the menu items after a simulated request delay.
 *
 * Загружает пункты меню после имитации задержки запроса.
 * @returns menu items / пункты меню
 */
const loadMenuData = (): Promise<ListItemProps[]> => {
  ajaxFetchCount.value += 1

  return new Promise<ListItemProps[]>(resolve => setTimeout(() => resolve([
    { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
    { label: 'Users', value: 'users', icon: 'people' },
    { label: 'Settings', value: 'settings', icon: 'settings' },
    { label: 'Reports', value: 'reports', icon: 'assessment' }
  ]), 300))
}

const selectedNav = ref('color2')
const navItems = ref([
  { label: 'Red', value: 'color1', icon: 'palette' },
  { label: 'Green', value: 'color2', icon: 'palette' },
  { label: 'Blue', value: 'color3', icon: 'palette' },
  { label: 'Yellow', value: 'color4', icon: 'palette' }
])
const step = ref(1)

const selectedSlots = ref('play')
const selectedExpose = ref('edit')
const menuExposeRef = ref<MenuExpose | null>(null)
const exposeSummary = ref('Not checked')

const readExposeState = () => {
  if (menuExposeRef.value) {
    exposeSummary.value = `id=${menuExposeRef.value.getId()}, open=${menuExposeRef.value.getOpen()}, isSelected=${menuExposeRef.value.isSelected()}, values=${JSON.stringify(menuExposeRef.value.getSelectedValues())}, names=${JSON.stringify(menuExposeRef.value.getSelectedNames())}, loading=${menuExposeRef.value.loading()}`
  }
}

const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Menu">
    <D1Section>
      <!-- Basic Usage, Record List & Custom Keys -->
      <D1Group label="Basic, Record List & Custom Keys">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedBasic"
            :list="menuItems"
            :list-attrs="{ 'data-demo-list': 'true' }"
            :item-attrs="{ 'data-demo-item': 'true' }"
            is-selected-by-value
            tag="button"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Basic Menu"
                primary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedRecord"
            :list="recordItems"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Record Object List"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedCustomKey"
            :list="customKeyItems"
            key-label="title"
            key-value="code"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Custom Keys (title/code)"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="basic" :value="selectedBasic"/>
          <DemoValue label="record" :value="selectedRecord"/>
          <DemoValue label="customKey" :value="selectedCustomKey"/>
        </DemoFlex>
      </D1Group>

      <!-- Selection Styles & Max Limit -->
      <D1Group label="Selection Styles & Max Limit">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedNone"
            :list="menuItems"
            selection-style="none"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: none"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedCheckmark"
            :list="menuItems"
            selection-style="checkmark"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: checkmark"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedRadio"
            :list="menuItems"
            selection-style="radio"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: radio"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedCheckbox"
            :list="menuItems"
            selection-style="checkbox"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: checkbox"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedMultiMax"
            :list="menuItems"
            :max="2"
            selection-style="checkbox"
            role-list="listbox"
            role-item="option"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Multiple (max=2)"
                outline
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="none" :value="selectedNone"/>
          <DemoValue label="checkmark" :value="selectedCheckmark"/>
          <DemoValue label="radio" :value="selectedRadio"/>
          <DemoValue label="checkbox" :value="selectedCheckbox"/>
          <DemoValue label="max=2" :value="selectedMultiMax"/>
        </DemoFlex>
      </D1Group>

      <!-- Search, Filtering & Highlight -->
      <D1Group label="Search, Filtering & Highlight">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedSearch"
            :list="largeItems"
            show-search
            filter-mode
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Searchable Menu"
                tonal
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedHighlight"
            :list="highlightItems"
            highlight="exam"
            :highlight-length-start="4"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Highlight ('exam')"
                tonal
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="search" :value="selectedSearch"/>
          <DemoValue label="highlight" :value="selectedHighlight"/>
        </DemoFlex>
      </D1Group>

      <!-- Bars Header, Adaptive & Hide List -->
      <D1Group label="Bars Header, Adaptive & Hide List">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedHeader"
            :list="menuItems"
            is-selected-by-value
            :bars-hide="false"
            :bars-back-hide="false"
            bars-adaptive="showAlways"
            bars-label="Category Selection"
            bars-description="Select an active category action below"
            :bars-list="[{ icon: 'refresh', label: 'Reset' }]"
            :bars-attrs="{ 'data-demo-bars': 'true' }"
            @bars="onEvent('bars')"
            @bars-back="onEvent('barsBack')"
            @bars-lite="onEvent('barsLite')"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Menu with Bars"
                outline
              />
            </template>
          </D1Menu>

          <D1Menu
            :list="menuItems"
            :bars-hide="false"
            bars-adaptive="showAlways"
            bars-label="Header Only"
            bars-description="List is hidden via hide-list"
            hide-list
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open hideList Menu"
                outline
              />
            </template>
            <template #contextBottom>
              <DemoBox>
                <span>Custom context without list</span>
              </DemoBox>
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue label="header" :value="selectedHeader"/>
      </D1Group>

      <!-- Disabled, Auto Close, Persistent & SSR inDom -->
      <D1Group label="States: Disabled, autoClose, persistent & inDom">
        <DemoFlex>
          <D1Menu
            :list="menuItems"
            disabled
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Disabled Menu"
                disabled
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedAutoClose"
            :list="menuItems"
            is-selected-by-value
            :auto-close="false"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="autoClose: false"
                outline
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedPersistent"
            :list="menuItems"
            is-selected-by-value
            :window-attrs="{ persistent: true }"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="persistent: true"
                outline
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedInDom"
            :list="menuItems"
            is-selected-by-value
            :window-attrs="{ inDom: true }"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="SSR inDom: true"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            :list="menuItems"
            disable-focus-return
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="disableFocusReturn: true"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="autoClose" :value="selectedAutoClose"/>
          <DemoValue label="persistent" :value="selectedPersistent"/>
          <DemoValue label="inDom" :value="selectedInDom"/>
        </DemoFlex>
      </D1Group>

      <!-- Position Offset, Lite Threshold & Embedded -->
      <D1Group label="Offset, Lite Threshold & Embedded">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedIndent"
            :list="menuItems"
            is-selected-by-value
            :window-attrs="{ indent: 24 }"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Offset (indent: 24)"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLite"
            :list="largeItems"
            :lite-threshold="4"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Lite Mode (liteThreshold: 4)"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>

        <DemoBox>
          <D1Menu
            v-model:selected="selectedEmbedded"
            :list="menuItems"
            is-selected-by-value
            embedded
            :window-attrs="{ open: true }"
          />
        </DemoBox>
        <DemoFlex>
          <DemoValue label="indent" :value="selectedIndent"/>
          <DemoValue label="lite" :value="selectedLite"/>
          <DemoValue label="embedded" :value="selectedEmbedded"/>
        </DemoFlex>
      </D1Group>

      <!-- Large Lists (Plain, Icons & Pictures) -->
      <D1Group label="Large Lists (Plain, Icons & Pictures)">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedLargePlain"
            :list="largePlainItems"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Plain (60)"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargeIcons"
            :list="largeIconItems"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Icons (60)"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargePictures"
            :list="largePictureItems"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Pictures (60)"
                secondary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargeMixed512"
            :list="largeMixed512Items"
            :lazy="false"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Mixed 512 (Icons & Pictures)"
                primary
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargeMixed512Lazy"
            :list="largeMixed512Items"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Mixed 512 (Lazy)"
                tonal
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargeMixed512LazyCustom"
            :list="largeMixed512Items"
            lazy-margin="128px 0px"
            :lazy-cache-height="false"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Mixed 512 (Lazy, Custom Margin)"
                tonal
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargeMixed512NoLite"
            :list="largeMixed512Items"
            :lite-threshold="0"
            :lazy="false"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Mixed 512 (No Lite)"
                outline
              />
            </template>
          </D1Menu>

          <D1Menu
            v-model:selected="selectedLargeMixed512NoLiteLazy"
            :list="largeMixed512Items"
            :lite-threshold="0"
            is-selected-by-value
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Large List: Mixed 512 (No Lite, Lazy)"
                outline
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="largePlain" :value="selectedLargePlain"/>
          <DemoValue label="largeIcons" :value="selectedLargeIcons"/>
          <DemoValue label="largePictures" :value="selectedLargePictures"/>
          <DemoValue label="largeMixed512" :value="selectedLargeMixed512"/>
          <DemoValue label="largeMixed512Lazy" :value="selectedLargeMixed512Lazy"/>
          <DemoValue label="largeMixed512LazyCustom" :value="selectedLargeMixed512LazyCustom"/>
          <DemoValue label="largeMixed512NoLite" :value="selectedLargeMixed512NoLite"/>
          <DemoValue label="largeMixed512NoLiteLazy" :value="selectedLargeMixed512NoLiteLazy"/>
        </DemoFlex>
      </D1Group>

      <!-- AJAX Loading & Cache -->
      <D1Group label="AJAX Loading & Cache">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedAjax"
            :ajax="loadMenuData"
            cache
            is-selected-by-value
          >
            <template #control="{ binds, loading }">
              <D1Button
                v-bind="binds"
                :label="`Open AJAX Menu${loading.value ? ' (loading...)' : ''}`"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="selectedAjax" :value="selectedAjax"/>
          <DemoValue label="fetchCount" :value="ajaxFetchCount"/>
        </DemoFlex>
      </D1Group>

      <!-- Slots (title, contextTop, contextBottom, footer) -->
      <D1Group label="Slots & Slot Click">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedSlots"
            :list="menuItems"
            is-selected-by-value
            @click-slot="onEvent('clickSlot')"
          >
            <template #control="{ binds, open }">
              <D1Button
                v-bind="binds"
                :label="`Open Menu with Slots (${open.value ? 'open' : 'closed'})`"
                tonal
              />
            </template>
            <template #title>
              <DemoBox>
                <span>Custom Title Slot</span>
              </DemoBox>
            </template>
            <template #contextTop>
              <DemoBox>
                <span>Context Top Slot</span>
              </DemoBox>
            </template>
            <template #contextBottom>
              <DemoFlex>
                <div data-value="slot-action">
                  <D1Button
                    label="Trigger clickSlot"
                    outline
                  />
                </div>
              </DemoFlex>
            </template>
            <template #footer>
              <DemoBox>
                <span>Custom Footer Slot</span>
              </DemoBox>
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue label="selectedSlots" :value="selectedSlots"/>
      </D1Group>

      <!-- Navigation & Step -->
      <D1Group label="Navigation & Step">
        <DemoFlex>
          <D1Button label="Step 1" @click="step = 1"/>
          <D1Button label="Step 2" @click="step = 2"/>
        </DemoFlex>
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedNav"
            :list="navItems"
            :step="step"
            is-selected-by-value
          >
            <template #control="{ previous, next, selectedNames }">
              <DemoFlex align="center">
                <D1Button
                  label="Previous"
                  outline
                  @click="previous"
                />
                <span>{{ selectedNames.value[0] || 'None' }}</span>
                <D1Button
                  label="Next"
                  outline
                  @click="next"
                />
              </DemoFlex>
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="selectedNav" :value="selectedNav"/>
          <DemoValue label="step" :value="step"/>
        </DemoFlex>
      </D1Group>

      <!-- Expose API & Events -->
      <D1Group label="Expose API & Events">
        <DemoFlex>
          <D1Button label="toOpen()" @click="menuExposeRef?.toOpen()"/>
          <D1Button label="toClose()" @click="menuExposeRef?.toClose()"/>
          <D1Button label="toggle()" @click="menuExposeRef?.toggle()"/>
          <D1Button label="previous()" @click="menuExposeRef?.previous()"/>
          <D1Button label="next()" @click="menuExposeRef?.next()"/>
          <D1Button label="Read Expose" @click="readExposeState"/>
        </DemoFlex>
        <DemoFlex>
          <D1Menu
            ref="menuExposeRef"
            v-model:selected="selectedExpose"
            :list="menuItems"
            is-selected-by-value
            @click="onEvent('click')"
            @click-lite="onEvent('clickLite')"
            @click-slot="onEvent('clickSlot')"
            @update-value="onEvent('updateValue')"
            @window="onEvent('window')"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Expose & Events Menu"
                tonal
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue label="expose" :value="exposeSummary"/>
        <DemoValue label="lastEvent" :value="eventName || 'No events triggered yet'"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
