<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { MotionFlipExpose } from '@dxtmisha/constructor/MotionFlip'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface FlipDemoItem {
  id: number | string
  label: string
  description?: string
}

const createInitialBasicItems = (): FlipDemoItem[] => [
  { id: 1, label: 'Alpha' },
  { id: 2, label: 'Beta' },
  { id: 3, label: 'Gamma' },
  { id: 4, label: 'Delta' },
  { id: 5, label: 'Epsilon' }
]

const shuffleArray = <T>(source: T[]): T[] => {
  const result = [...source]

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = result[index]
    const targetItem = result[swapIndex]

    if (currentItem !== undefined && targetItem !== undefined) {
      result[index] = targetItem
      result[swapIndex] = currentItem
    }
  }

  return result
}

const formatItemsOrder = (items: FlipDemoItem[]): string => {
  if (items.length === 0) {
    return 'Empty'
  }

  return items.map(item => item.label).join(', ')
}

const basicItems = ref<FlipDemoItem[]>(createInitialBasicItems())
let nextBasicId = 6

const basicOrderText = computed<string>(() => formatItemsOrder(basicItems.value))

const shuffleBasicItems = (): void => {
  basicItems.value = shuffleArray(basicItems.value)
}

const reverseBasicItems = (): void => {
  basicItems.value = [...basicItems.value].reverse()
}

const moveFirstBasicToLast = (): void => {
  if (basicItems.value.length > 1) {
    const [firstItem, ...restItems] = basicItems.value
    if (firstItem) {
      basicItems.value = [...restItems, firstItem]
    }
  }
}

const addBasicItem = (): void => {
  const insertIndex = Math.floor(Math.random() * (basicItems.value.length + 1))
  const updatedItems = [...basicItems.value]

  updatedItems.splice(insertIndex, 0, {
    id: nextBasicId,
    label: `Item ${nextBasicId}`
  })
  nextBasicId += 1
  basicItems.value = updatedItems
}

const removeLastBasicItem = (): void => {
  if (basicItems.value.length > 0) {
    basicItems.value = basicItems.value.slice(0, -1)
  }
}

const resetBasicItems = (): void => {
  basicItems.value = createInitialBasicItems()
  nextBasicId = 6
}

const manualFlipReference = ref<MotionFlipExpose | null>(null)
const manualItems = ref<FlipDemoItem[]>([
  { id: 101, label: 'Manual 1' },
  { id: 102, label: 'Manual 2' },
  { id: 103, label: 'Manual 3' },
  { id: 104, label: 'Manual 4' }
])
let nextManualId = 105
const manualExposeStatus = ref<string>('Idle')

const manualOrderText = computed<string>(() => formatItemsOrder(manualItems.value))

const runManualUpdateShuffle = async (): Promise<void> => {
  if (!manualFlipReference.value) {
    return
  }

  manualExposeStatus.value = 'Running update() shuffle...'
  await manualFlipReference.value.update(async () => {
    manualItems.value = shuffleArray(manualItems.value)
    await nextTick()
  })
  manualExposeStatus.value = 'Completed update() shuffle'
}

const runManualAsyncUpdate = async (): Promise<void> => {
  if (!manualFlipReference.value) {
    return
  }

  manualExposeStatus.value = 'Waiting 120ms async callback...'
  await manualFlipReference.value.update(async () => {
    await new Promise<void>(resolve => setTimeout(resolve, 120))
    manualItems.value = [...manualItems.value].reverse()
    await nextTick()
  })
  manualExposeStatus.value = 'Completed async update() reverse'
}

const runManualUpdateAdd = async (): Promise<void> => {
  if (!manualFlipReference.value) {
    return
  }

  await manualFlipReference.value.update(async () => {
    manualItems.value = [
      { id: nextManualId, label: `Manual ${nextManualId - 100}` },
      ...manualItems.value
    ]
    nextManualId += 1
    await nextTick()
  })
  manualExposeStatus.value = 'Completed update() add'
}

const runManualUpdateRemove = async (): Promise<void> => {
  if (!manualFlipReference.value || manualItems.value.length === 0) {
    return
  }

  await manualFlipReference.value.update(async () => {
    manualItems.value = manualItems.value.slice(0, -1)
    await nextTick()
  })
  manualExposeStatus.value = 'Completed update() remove'
}

const mutateManualWithoutUpdate = (): void => {
  manualItems.value = [...manualItems.value].reverse()
  manualExposeStatus.value = 'Mutated without update() (auto=false, no FLIP)'
}

const stopManualFlip = (): void => {
  manualFlipReference.value?.stop()
  manualExposeStatus.value = 'Called stop()'
}

const startAndStopManualFlip = async (): Promise<void> => {
  if (!manualFlipReference.value) {
    return
  }

  await manualFlipReference.value.update(async () => {
    manualItems.value = shuffleArray(manualItems.value)
    await nextTick()
  })
  manualFlipReference.value.stop()
  manualExposeStatus.value = 'Started update() and immediately called stop()'
}

const isAutoMode = ref<boolean>(true)
const dynamicAutoItems = ref<FlipDemoItem[]>([
  { id: 201, label: 'One' },
  { id: 202, label: 'Two' },
  { id: 203, label: 'Three' },
  { id: 204, label: 'Four' }
])
let nextDynamicAutoId = 205

const dynamicAutoOrderText = computed<string>(() => formatItemsOrder(dynamicAutoItems.value))

const toggleAutoMode = (): void => {
  isAutoMode.value = !isAutoMode.value
}

const shuffleDynamicAutoItems = (): void => {
  dynamicAutoItems.value = shuffleArray(dynamicAutoItems.value)
}

const addDynamicAutoItem = (): void => {
  dynamicAutoItems.value = [
    ...dynamicAutoItems.value,
    { id: nextDynamicAutoId, label: `Added ${nextDynamicAutoId - 200}` }
  ]
  nextDynamicAutoId += 1
}

const removeDynamicAutoItem = (): void => {
  if (dynamicAutoItems.value.length > 0) {
    dynamicAutoItems.value = dynamicAutoItems.value.slice(0, -1)
  }
}

const layoutFlipReference = ref<MotionFlipExpose | null>(null)
const isColumnLayout = ref<boolean>(false)
const expandedItemId = ref<number | string | null>(null)
const layoutItems = ref<FlipDemoItem[]>([
  { id: 'card-1', label: 'Analytics', description: 'Tracks real-time dimensions and position shifts.' },
  { id: 'card-2', label: 'Storage', description: 'Animates width and height transitions smoothly.' },
  { id: 'card-3', label: 'Network', description: 'Maintains layout stability across breakpoints.' }
])

const layoutListClasses = computed<Record<string, boolean>>(() => ({
  'demo-motion-flip-page__list': true,
  'demo-motion-flip-page__list--column': isColumnLayout.value
}))

const expandedItemLabel = computed<string>(() => {
  return expandedItemId.value === null ? 'None' : String(expandedItemId.value)
})

const toggleLayoutOrientation = async (): Promise<void> => {
  if (!layoutFlipReference.value) {
    return
  }

  await layoutFlipReference.value.update(async () => {
    isColumnLayout.value = !isColumnLayout.value
    await nextTick()
  })
}

const toggleExpandedLayoutItem = async (itemId: number | string): Promise<void> => {
  if (!layoutFlipReference.value) {
    return
  }

  await layoutFlipReference.value.update(async () => {
    expandedItemId.value = expandedItemId.value === itemId ? null : itemId
    await nextTick()
  })
}

const shuffleLayoutItems = async (): Promise<void> => {
  if (!layoutFlipReference.value) {
    return
  }

  await layoutFlipReference.value.update(async () => {
    layoutItems.value = shuffleArray(layoutItems.value)
    await nextTick()
  })
}

const staticDisabledItems = ref<FlipDemoItem[]>([
  { id: 301, label: 'Locked A' },
  { id: 302, label: 'Locked B' },
  { id: 303, label: 'Locked C' }
])

const staticDisabledOrderText = computed<string>(() => formatItemsOrder(staticDisabledItems.value))

const shuffleStaticDisabled = (): void => {
  staticDisabledItems.value = [...staticDisabledItems.value].reverse()
}

const disabledFlipReference = ref<MotionFlipExpose | null>(null)
const isFlipDisabled = ref<boolean>(true)
const dynamicDisabledItems = ref<FlipDemoItem[]>([
  { id: 401, label: 'State 1' },
  { id: 402, label: 'State 2' },
  { id: 403, label: 'State 3' },
  { id: 404, label: 'State 4' }
])

const dynamicDisabledOrderText = computed<string>(() => formatItemsOrder(dynamicDisabledItems.value))

const toggleDisabledState = (): void => {
  isFlipDisabled.value = !isFlipDisabled.value
}

const shuffleDynamicDisabled = async (): Promise<void> => {
  if (disabledFlipReference.value) {
    await disabledFlipReference.value.update(async () => {
      dynamicDisabledItems.value = shuffleArray(dynamicDisabledItems.value)
      await nextTick()
    })
  }
}

const slotItems = ref<FlipDemoItem[]>([
  { id: 'slot-1', label: 'Slot Item 1' },
  { id: 'slot-2', label: 'Slot Item 2' },
  { id: 'slot-3', label: 'Slot Item 3' }
])

const shuffleSlotItems = (): void => {
  slotItems.value = [...slotItems.value].reverse()
}

const accessibleItems = ref<FlipDemoItem[]>([
  { id: 'task-1', label: 'Review pull request' },
  { id: 'task-2', label: 'Verify contrast ratio' },
  { id: 'task-3', label: 'Publish release notes' }
])

const accessibleOrderText = computed<string>(() => formatItemsOrder(accessibleItems.value))

const moveAccessibleItem = (index: number, direction: -1 | 1): void => {
  const targetIndex = index + direction

  if (targetIndex < 0 || targetIndex >= accessibleItems.value.length) {
    return
  }

  const updatedItems = [...accessibleItems.value]
  const currentItem = updatedItems[index]
  const targetItem = updatedItems[targetIndex]

  if (currentItem && targetItem) {
    updatedItems[index] = targetItem
    updatedItems[targetIndex] = currentItem
    accessibleItems.value = updatedItems
  }
}

const shuffleAccessibleItems = (): void => {
  accessibleItems.value = shuffleArray(accessibleItems.value)
}

const emptyItems = ref<FlipDemoItem[]>([])
let nextEmptyId = 1

const emptyOrderText = computed<string>(() => formatItemsOrder(emptyItems.value))

const addToEmptyList = (): void => {
  emptyItems.value = [
    ...emptyItems.value,
    { id: nextEmptyId, label: `Item ${nextEmptyId}` }
  ]
  nextEmptyId += 1
}

const clearEmptyList = (): void => {
  emptyItems.value = []
}

const singleItems = ref<FlipDemoItem[]>([
  { id: 'only-1', label: 'Single Item' }
])
const singleActionCount = ref<number>(0)

const triggerSingleUpdate = (): void => {
  singleItems.value = [...singleItems.value]
  singleActionCount.value += 1
}

const boundaryItems = ref<FlipDemoItem[]>([
  { id: 0, label: '0' },
  { id: -1, label: '-1' },
  { id: 'unicode', label: 'Tiếng Việt / Кириллица / 🚀' },
  { id: 'xss', label: '<img src=x onerror=alert(1)>' },
  { id: 'unbroken', label: 'SuperLongUnbrokenFlipItemIdentifierWithoutSpaces1234567890' }
])

const boundaryOrderText = computed<string>(() => formatItemsOrder(boundaryItems.value))

const shuffleBoundaryItems = (): void => {
  boundaryItems.value = [...boundaryItems.value].reverse()
}

const narrowItems = ref<FlipDemoItem[]>([
  { id: 'narrow-1', label: 'Compact Tile A' },
  { id: 'narrow-2', label: 'Compact Tile B' },
  { id: 'narrow-3', label: 'Compact Tile C with longer text wrapping inside narrow container' }
])

const narrowOrderText = computed<string>(() => formatItemsOrder(narrowItems.value))

const shuffleNarrowItems = (): void => {
  narrowItems.value = [...narrowItems.value].reverse()
}

const isLifecycleMounted = ref<boolean>(true)
const lifecycleItems = ref<FlipDemoItem[]>([
  { id: 'life-1', label: 'Mounted 1' },
  { id: 'life-2', label: 'Mounted 2' },
  { id: 'life-3', label: 'Mounted 3' }
])

const lifecycleOrderText = computed<string>(() => formatItemsOrder(lifecycleItems.value))

const toggleLifecycleMount = (): void => {
  isLifecycleMounted.value = !isLifecycleMounted.value
}

const shuffleLifecycleItems = (): void => {
  lifecycleItems.value = [...lifecycleItems.value].reverse()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MotionFlip" class="demo-motion-flip-page">
    <D1Section>
      <D1Group label="Basic Usage (Auto FLIP)">
        <DemoFlex>
          <D1Button label="Shuffle" size="sm" @click="shuffleBasicItems"/>
          <D1Button label="Reverse" size="sm" secondary @click="reverseBasicItems"/>
          <D1Button label="Move First to Last" size="sm" outline @click="moveFirstBasicToLast"/>
          <D1Button label="Add Item" size="sm" @click="addBasicItem"/>
          <D1Button label="Remove Last" size="sm" outline @click="removeLastBasicItem"/>
          <D1Button label="Reset" size="sm" text @click="resetBasicItems"/>
        </DemoFlex>
        <D1MotionFlip class="demo-motion-flip-page__list">
          <div
            v-for="item in basicItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Current Order" :value="basicOrderText"/>
        <DemoValue label="Item Count" :value="basicItems.length"/>
      </D1Group>

      <D1Group label="Manual Mode (auto=false) & Expose (update, stop)">
        <DemoFlex>
          <D1Button label="update() Shuffle" size="sm" @click="runManualUpdateShuffle"/>
          <D1Button label="update() Async 120ms" size="sm" secondary @click="runManualAsyncUpdate"/>
          <D1Button label="update() Add" size="sm" outline @click="runManualUpdateAdd"/>
          <D1Button label="update() Remove" size="sm" outline @click="runManualUpdateRemove"/>
          <D1Button label="Mutate Without update()" size="sm" text @click="mutateManualWithoutUpdate"/>
          <D1Button label="stop()" size="sm" palette="red" outline @click="stopManualFlip"/>
          <D1Button label="Start & Immediate stop()" size="sm" palette="red" text @click="startAndStopManualFlip"/>
        </DemoFlex>
        <D1MotionFlip
          ref="manualFlipReference"
          :auto="false"
          class="demo-motion-flip-page__list"
        >
          <div
            v-for="item in manualItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Manual Order" :value="manualOrderText"/>
        <DemoValue label="Expose Status" :value="manualExposeStatus"/>
      </D1Group>

      <D1Group label="Dynamic auto Prop Toggle">
        <DemoFlex>
          <D1Button
            :label="isAutoMode ? 'Set auto=false' : 'Set auto=true'"
            size="sm"
            :primary="isAutoMode"
            :outline="!isAutoMode"
            @click="toggleAutoMode"
          />
          <D1Button label="Shuffle" size="sm" secondary @click="shuffleDynamicAutoItems"/>
          <D1Button label="Add" size="sm" outline @click="addDynamicAutoItem"/>
          <D1Button label="Remove" size="sm" outline @click="removeDynamicAutoItem"/>
        </DemoFlex>
        <D1MotionFlip :auto="isAutoMode" class="demo-motion-flip-page__list">
          <div
            v-for="item in dynamicAutoItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="auto" :value="isAutoMode"/>
        <DemoValue label="Dynamic Order" :value="dynamicAutoOrderText"/>
      </D1Group>

      <D1Group label="Size & Layout Transitions (Width, Height & Position)">
        <DemoFlex>
          <D1Button
            :label="isColumnLayout ? 'Switch to Grid' : 'Switch to Column'"
            size="sm"
            @click="toggleLayoutOrientation"
          />
          <D1Button label="Shuffle Cards" size="sm" secondary @click="shuffleLayoutItems"/>
          <D1Button
            v-for="item in layoutItems"
            :key="item.id"
            :label="expandedItemId === item.id ? `Collapse ${item.label}` : `Expand ${item.label}`"
            size="sm"
            outline
            @click="toggleExpandedLayoutItem(item.id)"
          />
        </DemoFlex>
        <D1MotionFlip
          ref="layoutFlipReference"
          :auto="false"
          :class="layoutListClasses"
        >
          <div
            v-for="item in layoutItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div
              :class="{
                'demo-motion-flip-page__card': true,
                'demo-motion-flip-page__card--expanded': expandedItemId === item.id
              }"
            >
              <div class="demo-motion-flip-page__card-title">{{ item.label }}</div>
              <div
                v-if="expandedItemId === item.id"
                class="demo-motion-flip-page__card-description"
              >
                {{ item.description }}
              </div>
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Layout Mode" :value="isColumnLayout ? 'column' : 'grid'"/>
        <DemoValue label="Expanded Item" :value="expandedItemLabel"/>
      </D1Group>

      <D1Group label="Disabled State (Blocked FLIP Animation)">
        <DemoFlex>
          <D1Button label="Reverse Static Disabled" size="sm" outline @click="shuffleStaticDisabled"/>
        </DemoFlex>
        <D1MotionFlip disabled class="demo-motion-flip-page__list">
          <div
            v-for="item in staticDisabledItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Static Disabled Order" :value="staticDisabledOrderText"/>

        <DemoFlex>
          <D1Button
            :label="isFlipDisabled ? 'Enable FLIP (:disabled=false)' : 'Disable FLIP (:disabled=true)'"
            size="sm"
            :primary="!isFlipDisabled"
            :outline="isFlipDisabled"
            @click="toggleDisabledState"
          />
          <D1Button label="Shuffle via update()" size="sm" secondary @click="shuffleDynamicDisabled"/>
        </DemoFlex>
        <D1MotionFlip
          ref="disabledFlipReference"
          :disabled="isFlipDisabled"
          class="demo-motion-flip-page__list"
        >
          <div
            v-for="item in dynamicDisabledItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="disabled" :value="isFlipDisabled"/>
        <DemoValue label="Dynamic Disabled Order" :value="dynamicDisabledOrderText"/>
      </D1Group>

      <D1Group label="Default & Scoped Slots">
        <DemoFlex>
          <D1Button label="Reverse Slot Items" size="sm" @click="shuffleSlotItems"/>
        </DemoFlex>
        <D1MotionFlip class="demo-motion-flip-page__list">
          <template #default="slotProps">
            <div
              v-for="item in slotItems"
              :key="item.id"
              class="demo-motion-flip-page__item"
            >
              <div class="demo-motion-flip-page__card">
                <span>{{ item.label }}</span>
                <span class="demo-motion-flip-page__slot-meta">
                  (slotProps: {{ slotProps }})
                </span>
              </div>
            </div>
          </template>
        </D1MotionFlip>
      </D1Group>

      <D1Group label="Accessibility (Semantic List & ARIA)">
        <DemoFlex>
          <D1Button label="Shuffle Accessible List" size="sm" @click="shuffleAccessibleItems"/>
        </DemoFlex>
        <D1MotionFlip
          role="list"
          aria-label="Sortable accessible tasks"
          class="demo-motion-flip-page__list demo-motion-flip-page__list--column"
        >
          <div
            v-for="(item, index) in accessibleItems"
            :key="item.id"
            role="listitem"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card demo-motion-flip-page__card--row">
              <span>{{ item.label }}</span>
              <DemoFlex>
                <D1Button
                  label="Up"
                  size="xs"
                  outline
                  :disabled="index === 0"
                  :aria-label="`Move ${item.label} up`"
                  @click="moveAccessibleItem(index, -1)"
                />
                <D1Button
                  label="Down"
                  size="xs"
                  outline
                  :disabled="index === accessibleItems.length - 1"
                  :aria-label="`Move ${item.label} down`"
                  @click="moveAccessibleItem(index, 1)"
                />
              </DemoFlex>
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Accessible Order" :value="accessibleOrderText"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Empty, Single, 0 Keys, Unicode, XSS, Narrow)">
        <DemoFlex>
          <D1Button label="Add to Empty List" size="sm" @click="addToEmptyList"/>
          <D1Button label="Clear to Empty" size="sm" outline @click="clearEmptyList"/>
        </DemoFlex>
        <D1MotionFlip class="demo-motion-flip-page__list" data-testid="motion-flip-empty">
          <div
            v-for="item in emptyItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Empty List State" :value="emptyOrderText"/>

        <DemoFlex>
          <D1Button label="Trigger Single Item Update" size="sm" secondary @click="triggerSingleUpdate"/>
        </DemoFlex>
        <D1MotionFlip class="demo-motion-flip-page__list" data-testid="motion-flip-single">
          <div
            v-for="item in singleItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Single Item Updates" :value="singleActionCount"/>

        <DemoFlex>
          <D1Button label="Reverse Boundary Items (0, -1, Unicode, XSS, Long)" size="sm" @click="shuffleBoundaryItems"/>
        </DemoFlex>
        <D1MotionFlip class="demo-motion-flip-page__list">
          <div
            v-for="item in boundaryItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card demo-motion-flip-page__wrap">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Boundary Order" :value="boundaryOrderText"/>

        <DemoFlex>
          <D1Button label="Reverse Narrow Container" size="sm" outline @click="shuffleNarrowItems"/>
        </DemoFlex>
        <DemoBox class="demo-motion-flip-page__narrow">
          <D1MotionFlip class="demo-motion-flip-page__list">
            <div
              v-for="item in narrowItems"
              :key="item.id"
              class="demo-motion-flip-page__item"
            >
              <div class="demo-motion-flip-page__card demo-motion-flip-page__wrap">
                {{ item.label }}
              </div>
            </div>
          </D1MotionFlip>
        </DemoBox>
        <DemoValue label="Narrow Order" :value="narrowOrderText"/>
      </D1Group>

      <D1Group label="SSR & DOM Lifecycle (v-if Mount / Unmount)">
        <DemoFlex align="center">
          <D1Button
            :label="isLifecycleMounted ? 'Unmount MotionFlip' : 'Mount MotionFlip'"
            size="sm"
            outline
            @click="toggleLifecycleMount"
          />
          <D1Button
            label="Reverse Mounted Items"
            size="sm"
            :disabled="!isLifecycleMounted"
            @click="shuffleLifecycleItems"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <D1MotionFlip
          v-if="isLifecycleMounted"
          class="demo-motion-flip-page__list"
        >
          <div
            v-for="item in lifecycleItems"
            :key="item.id"
            class="demo-motion-flip-page__item"
          >
            <div class="demo-motion-flip-page__card">
              {{ item.label }}
            </div>
          </div>
        </D1MotionFlip>
        <DemoValue label="Lifecycle Order" :value="lifecycleOrderText"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-motion-flip-page {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--d1-sys-spacing-sm);
    align-items: flex-start;

    &--column {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: stretch;
    }
  }

  &__item {
    position: relative;
  }

  &__card {
    box-sizing: border-box;
    @include ui.paddingX(var(--d1-sys-spacing-md));
    @include ui.paddingY(var(--d1-sys-spacing-sm));
    border-style: solid;
    border-width: var(--d1-sys-spacing-outline);
    @include ui.borderColor(#{var(--d1-sys-palette-outline)});
    @include ui.borderOpacity(#{var(--d1-sys-opacity-outline)});
    border-radius: var(--d1-sys-rounded-md);
    @include ui.backgroundColor(#{var(--d1-sys-palette-surface)});

    &--expanded {
      width: 280px;
      min-height: 96px;
      @include ui.borderColor(#{var(--d1-sys-palette-primary)});
      @include ui.borderOpacity(#{var(--d1-sys-opacity-primary-high)});
    }

    &--row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--d1-sys-spacing-sm);
      width: 100%;
    }
  }

  &__card-title {
    font-weight: 600;
  }

  &__card-description {
    @include ui.marginTop(var(--d1-sys-spacing-xs));
  }

  &__slot-meta {
    @include ui.marginLeft(var(--d1-sys-spacing-x));
    opacity: 0.7;
  }

  &__wrap {
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
