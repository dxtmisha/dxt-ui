<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { ArrowExpose } from '@dxtmisha/constructor/Arrow'
import type { ArrowProps } from '@dxtmisha/d1/D1Arrow'

import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('')

const targetReferenceElement = ref<HTMLElement>()
const interactiveArenaReference = ref<HTMLElement>()
const interactiveTargetReference = ref<HTMLElement>()
const interactiveArrowReference = ref<ArrowExpose>()
const dynamicTargetArrowReference = ref<ArrowExpose>()

const targetLeft = ref<number>(16)
const targetTop = ref<number>(16)
const updateCallCount = ref<number>(0)
const activeDynamicTargetSelector = ref<string>('#demo-arrow-switch-target-first')
const isArrowMounted = ref<boolean>(true)

const dynamicPosition = ref<NonNullable<ArrowProps['position']>>('top')
const dynamicPositions: NonNullable<ArrowProps['position']>[] = ['top', 'bottom', 'left', 'right', 'auto']

const movableTargetStyle = computed<Record<string, string>>(() => ({
  left: `${targetLeft.value}px`,
  top: `${targetTop.value}px`
}))

const recordUpdateEvent = (source: string): void => {
  const payload = {
    source,
    left: targetLeft.value,
    top: targetTop.value,
    targetSelector: activeDynamicTargetSelector.value
  }

  updateCallCount.value += 1
  onEvent('update', payload)
  eventPayload.value = JSON.stringify(payload)
}

const onArenaClick = async (event: PointerEvent): Promise<void> => {
  if (!interactiveArenaReference.value || !interactiveTargetReference.value) {
    return
  }

  const arenaRect = interactiveArenaReference.value.getBoundingClientRect()
  const targetRect = interactiveTargetReference.value.getBoundingClientRect()

  const rawLeft = event.clientX - arenaRect.left - targetRect.width / 2
  const rawTop = event.clientY - arenaRect.top - targetRect.height / 2

  targetLeft.value = Math.max(8, Math.min(arenaRect.width - targetRect.width - 8, Math.round(rawLeft)))
  targetTop.value = Math.max(8, Math.min(arenaRect.height - targetRect.height - 8, Math.round(rawTop)))

  await nextTick()
  interactiveArrowReference.value?.update()
  recordUpdateEvent('arena-click')
}

const onMoveTargetPreset = async (left: number, top: number): Promise<void> => {
  targetLeft.value = left
  targetTop.value = top

  await nextTick()
  interactiveArrowReference.value?.update()
  recordUpdateEvent('preset-button')
}

const onManualUpdate = (): void => {
  interactiveArrowReference.value?.update()
  recordUpdateEvent('manual-expose-update')
}

const onSwitchDynamicTarget = async (): Promise<void> => {
  activeDynamicTargetSelector.value = activeDynamicTargetSelector.value === '#demo-arrow-switch-target-first'
    ? '#demo-arrow-switch-target-second'
    : '#demo-arrow-switch-target-first'

  await nextTick()
  dynamicTargetArrowReference.value?.update()
  recordUpdateEvent('switch-target')
}

const onToggleMounted = (): void => {
  isArrowMounted.value = !isArrowMounted.value
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Arrow">
    <D1Section>
      <D1Group label="Static Positions">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Top
                <D1Arrow position="top"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Bottom
                <D1Arrow position="bottom"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Left
                <D1Arrow position="left"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Right
                <D1Arrow position="right"/>
              </div>
            </div>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Sizes">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Size sm
                <D1Arrow position="top" size="sm"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Size md (default)
                <D1Arrow position="top" size="md"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card">
                Size lg
                <D1Arrow position="top" size="lg"/>
              </div>
            </div>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Parent Surface, Border & Radius Inheritance">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--solid">
                Solid Surface
                <D1Arrow position="top"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Bordered 2px
                <D1Arrow position="top"/>
              </div>
            </div>
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--rounded">
                Rounded + Border (lg)
                <D1Arrow position="bottom" size="lg"/>
              </div>
            </div>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Auto Position by Element Target Formats">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow-page__auto-pair">
              <div id="demo-arrow-selector-target" class="demo-arrow-page__target">
                Selector Target (Top)
              </div>
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                CSS Selector
                <D1Arrow
                  element-target="#demo-arrow-selector-target"
                  position="auto"
                />
              </div>
            </div>

            <div class="demo-arrow-page__auto-pair">
              <div ref="targetReferenceElement" class="demo-arrow-page__target">
                HTMLElement Ref (Top)
              </div>
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Element Ref
                <D1Arrow
                  :element-target="targetReferenceElement"
                  position="auto"
                />
              </div>
            </div>

            <div class="demo-arrow-page__auto-pair">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Auto Bottom
                <D1Arrow
                  element-target="#demo-arrow-bottom-target"
                  position="auto"
                />
              </div>
              <div id="demo-arrow-bottom-target" class="demo-arrow-page__target">
                Bottom Target
              </div>
            </div>

            <div class="demo-arrow-page__auto-row">
              <div id="demo-arrow-horizontal-target" class="demo-arrow-page__target">
                Side Target (Left)
              </div>
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Auto Horizontal Left
                <D1Arrow
                  element-target="#demo-arrow-horizontal-target"
                  position="auto"
                />
              </div>
            </div>

            <div class="demo-arrow-page__auto-row">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Auto Horizontal Right
                <D1Arrow
                  element-target="#demo-arrow-horizontal-right-target"
                  position="auto"
                />
              </div>
              <div id="demo-arrow-horizontal-right-target" class="demo-arrow-page__target">
                Side Target (Right)
              </div>
            </div>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Interactive Target & Exposed update()">
        <DemoBox>
          <DemoFlex direction="column">
            <DemoFlex align="center">
              <D1Button
                label="Top Left"
                size="sm"
                @click="onMoveTargetPreset(16, 16)"
              />
              <D1Button
                label="Top Right"
                size="sm"
                @click="onMoveTargetPreset(220, 16)"
              />
              <D1Button
                label="Bottom Center"
                size="sm"
                @click="onMoveTargetPreset(120, 152)"
              />
              <D1Button
                label="Force update()"
                outline
                size="sm"
                @click="onManualUpdate"
              />
              <D1Button
                label="Switch Target & update()"
                outline
                size="sm"
                @click="onSwitchDynamicTarget"
              />
            </DemoFlex>

            <div
              ref="interactiveArenaReference"
              class="demo-arrow-page__arena"
              @click="onArenaClick"
            >
              <div
                id="demo-arrow-interactive-target"
                ref="interactiveTargetReference"
                class="demo-arrow-page__target demo-arrow-page__target--movable"
                :style="movableTargetStyle"
              >
                Click arena to move target
              </div>

              <div class="demo-arrow-page__card demo-arrow-page__card--bordered demo-arrow-page__card--centered">
                Popover Surface (auto)
                <D1Arrow
                  ref="interactiveArrowReference"
                  element-target="#demo-arrow-interactive-target"
                  position="auto"
                />
              </div>
            </div>

            <DemoFlex align="center" justify="around">
              <div id="demo-arrow-switch-target-first" class="demo-arrow-page__target">
                Target Alpha
              </div>
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Dynamic Target Arrow
                <D1Arrow
                  ref="dynamicTargetArrowReference"
                  :element-target="activeDynamicTargetSelector"
                  position="auto"
                />
              </div>
              <div id="demo-arrow-switch-target-second" class="demo-arrow-page__target">
                Target Beta
              </div>
            </DemoFlex>

            <DemoFlex>
              <DemoValue label="Target Coordinates" :value="`x=${targetLeft}px, y=${targetTop}px`"/>
              <DemoValue label="update() calls" :value="updateCallCount"/>
              <DemoValue label="Event" :value="eventName"/>
              <DemoValue label="Payload" :value="eventPayload"/>
            </DemoFlex>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Dynamic Position Switching">
        <DemoBox>
          <DemoFlex direction="column">
            <DemoFlex align="center">
              <D1Button
                v-for="positionOption in dynamicPositions"
                :key="positionOption"
                :label="`position='${positionOption}'`"
                :primary="dynamicPosition === positionOption"
                :outline="dynamicPosition !== positionOption"
                size="sm"
                @click="dynamicPosition = positionOption"
              />
            </DemoFlex>

            <DemoFlex align="center" justify="around">
              <div class="demo-arrow-page__auto-pair">
                <div id="demo-arrow-dynamic-target" class="demo-arrow-page__target">
                  Dynamic Target
                </div>
                <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                  Mode: {{ dynamicPosition }}
                  <D1Arrow
                    element-target="#demo-arrow-dynamic-target"
                    :position="dynamicPosition"
                  />
                </div>
              </div>
            </DemoFlex>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoBox>
          <DemoFlex align="center">
            <div class="demo-arrow-page__slot">
              <div
                class="demo-arrow-page__card demo-arrow-page__card--bordered"
                role="status"
                aria-label="Popover surface with decorative aria-hidden arrow"
              >
                Decorative Arrow (aria-hidden="true")
                <D1Arrow position="top"/>
              </div>
            </div>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                No Target (auto)
                <D1Arrow position="auto"/>
              </div>
            </div>

            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Empty Target ""
                <D1Arrow element-target="" position="auto"/>
              </div>
            </div>

            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Whitespace Target
                <D1Arrow element-target="   " position="auto"/>
              </div>
            </div>

            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Missing Selector
                <D1Arrow
                  element-target="#demo-arrow-non-existent-target"
                  position="auto"
                />
              </div>
            </div>

            <div class="demo-arrow-page__slot">
              <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
                Default Position (omitted)
                <D1Arrow/>
              </div>
            </div>

            <DemoBox size="sm" class="demo-arrow-page__narrow">
              <div class="demo-arrow-page__slot">
                <div class="demo-arrow-page__card demo-arrow-page__card--rounded">
                  Narrow Box
                  <D1Arrow position="top" size="sm"/>
                </div>
              </div>
            </DemoBox>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isArrowMounted ? 'Unmount Arrow' : 'Mount Arrow'"
            size="sm"
            @click="onToggleMounted"
          />
          <DemoValue label="Mounted" :value="isArrowMounted"/>
        </DemoFlex>
        <DemoBox v-if="isArrowMounted">
          <div class="demo-arrow-page__slot">
            <div class="demo-arrow-page__card demo-arrow-page__card--bordered">
              Mounted Arrow
              <D1Arrow
                element-target="#demo-arrow-selector-target"
                position="top"
              />
            </div>
          </div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-arrow-page {
  &__slot {
    padding: 20px;
  }

  &__narrow {
    max-width: 180px;
  }

  &__auto-pair {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 16px;
  }

  &__auto-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 12px;
  }

  &__target {
    padding: 6px 12px;
    border-radius: ui.v('?sys.rounded.lg');
    font-size: 13px;
    font-weight: 500;
    @include ui.color(ui.v('?sys.palette.primary'));
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.focus'));
    border-style: solid;
    border-width: ui.v('?sys.spacing.outline');
    @include ui.borderColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.scrim'));
    white-space: nowrap;

    &--movable {
      position: absolute;
      z-index: 2;
      pointer-events: none;
    }
  }

  &__card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    min-height: 52px;
    padding: 12px 16px;
    border-radius: ui.v('?sys.rounded.lg');
    font-size: 14px;
    font-weight: 500;
    @include ui.color(ui.v('?sys.palette.inverseOnSurface'));
    @include ui.backgroundColor(ui.v('?sys.palette.inverseSurface'));
    box-shadow: ui.v('?sys.shadow.sm');

    &--solid {
      @include ui.color(ui.v('?sys.palette.onPrimary'));
      @include ui.backgroundColor(ui.v('?sys.palette.primary'));
    }

    &--bordered {
      @include ui.color(ui.v('?sys.palette.onSurface'));
      @include ui.backgroundColor(ui.v('?sys.palette.surface'));
      border-style: solid;
      border-width: ui.v('?ref.spacing.2px');
      @include ui.borderColor(ui.v('?sys.palette.outline'), 1);
    }

    &--rounded {
      border-radius: ui.v('?sys.spacing.lg');
      @include ui.color(ui.v('?sys.palette.onSurface'));
      @include ui.backgroundColor(ui.v('?sys.palette.surface'));
      border-style: solid;
      border-width: ui.v('?ref.spacing.2px');
      @include ui.borderColor(ui.v('?sys.palette.primary'), 1);
    }

    &--centered {
      min-width: 180px;
      min-height: 64px;
    }
  }

  &__arena {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 420px;
    height: 200px;
    overflow: hidden;
    border-radius: ui.v('?sys.rounded.xl');
    border-style: dashed;
    border-width: ui.v('?sys.spacing.outline');
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.surface.disabled'));
    cursor: crosshair;
  }
}
</style>
