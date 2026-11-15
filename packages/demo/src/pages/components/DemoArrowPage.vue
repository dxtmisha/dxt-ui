<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { ArrowExpose, ArrowProps } from '@dxtmisha/d1/Arrow'

import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const targetRefElement = ref<HTMLElement>()
const interactiveArenaRef = ref<HTMLElement>()
const interactiveTargetRef = ref<HTMLElement>()
const interactiveArrowRef = ref<ArrowExpose>()

const targetLeft = ref(16)
const targetTop = ref(16)
const updateCallCount = ref(0)

const dynamicPosition = ref<ArrowProps['position']>('top')
const dynamicPositions: NonNullable<ArrowProps['position']>[] = ['top', 'bottom', 'left', 'right', 'auto']

const onArenaClick = (event: PointerEvent) => {
  if (!interactiveArenaRef.value || !interactiveTargetRef.value) {
    return
  }

  const arenaRect = interactiveArenaRef.value.getBoundingClientRect()
  const targetRect = interactiveTargetRef.value.getBoundingClientRect()

  const rawLeft = event.clientX - arenaRect.left - targetRect.width / 2
  const rawTop = event.clientY - arenaRect.top - targetRect.height / 2

  targetLeft.value = Math.max(8, Math.min(arenaRect.width - targetRect.width - 8, Math.round(rawLeft)))
  targetTop.value = Math.max(8, Math.min(arenaRect.height - targetRect.height - 8, Math.round(rawTop)))

  void nextTick(() => {
    interactiveArrowRef.value?.update()
    updateCallCount.value += 1
    onEvent('update')
  })
}

const onMoveTargetPreset = (left: number, top: number) => {
  targetLeft.value = left
  targetTop.value = top

  void nextTick(() => {
    interactiveArrowRef.value?.update()
    updateCallCount.value += 1
    onEvent('update')
  })
}

const onManualUpdate = () => {
  interactiveArrowRef.value?.update()
  updateCallCount.value += 1
  onEvent('update')
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Arrow">
    <D1Section>
      <D1Group label="Static Positions">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
                Top
                <D1Arrow position="top"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
                Bottom
                <D1Arrow position="bottom"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
                Left
                <D1Arrow position="left"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
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
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
                Size sm
                <D1Arrow position="top" size="sm"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
                Size md (default)
                <D1Arrow position="top" size="md"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card">
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
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card demo-arrow__card--solid">
                Solid Surface
                <D1Arrow position="top"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card demo-arrow__card--bordered">
                Bordered 2px
                <D1Arrow position="top"/>
              </div>
            </div>
            <div class="demo-arrow__slot">
              <div class="demo-arrow__card demo-arrow__card--rounded">
                Rounded 20px + Border
                <D1Arrow position="bottom"/>
              </div>
            </div>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Auto Position by Element Target Formats">
        <DemoBox>
          <DemoFlex align="center" justify="around">
            <div class="demo-arrow__auto-pair">
              <div id="demo-arrow-selector-target" class="demo-arrow__target">
                Selector Target
              </div>
              <div class="demo-arrow__card demo-arrow__card--bordered">
                CSS Selector
                <D1Arrow
                  element-target="#demo-arrow-selector-target"
                  position="auto"
                />
              </div>
            </div>

            <div class="demo-arrow__auto-pair">
              <div ref="targetRefElement" class="demo-arrow__target">
                HTMLElement Ref
              </div>
              <div class="demo-arrow__card demo-arrow__card--bordered">
                Element Ref
                <D1Arrow
                  :element-target="targetRefElement"
                  position="auto"
                />
              </div>
            </div>

            <div class="demo-arrow__auto-row">
              <div id="demo-arrow-horizontal-target" class="demo-arrow__target">
                Side Target
              </div>
              <div class="demo-arrow__card demo-arrow__card--bordered">
                Auto Horizontal
                <D1Arrow
                  element-target="#demo-arrow-horizontal-target"
                  position="auto"
                />
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
            </DemoFlex>

            <div
              ref="interactiveArenaRef"
              class="demo-arrow__arena"
              @click="onArenaClick"
            >
              <div
                id="demo-arrow-interactive-target"
                ref="interactiveTargetRef"
                class="demo-arrow__target demo-arrow__target--movable"
                :style="{ left: `${targetLeft}px`, top: `${targetTop}px` }"
              >
                Click arena to move target
              </div>

              <div class="demo-arrow__card demo-arrow__card--bordered demo-arrow__card--centered">
                Popover Surface (auto)
                <D1Arrow
                  ref="interactiveArrowRef"
                  element-target="#demo-arrow-interactive-target"
                  position="auto"
                />
              </div>
            </div>

            <DemoFlex>
              <DemoValue label="Target Coordinates" :value="`x=${targetLeft}px, y=${targetTop}px`"/>
              <DemoValue label="update() calls" :value="updateCallCount"/>
              <DemoValue label="Last Event" :value="eventName"/>
            </DemoFlex>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Dynamic Position Switching & Edge Cases">
        <DemoBox>
          <DemoFlex direction="column">
            <DemoFlex align="center">
              <D1Button
                v-for="item in dynamicPositions"
                :key="item"
                :label="`position='${item}'`"
                :primary="dynamicPosition === item"
                :outline="dynamicPosition !== item"
                size="sm"
                @click="dynamicPosition = item"
              />
            </DemoFlex>

            <DemoFlex align="center" justify="around">
              <div class="demo-arrow__auto-pair">
                <div id="demo-arrow-dynamic-target" class="demo-arrow__target">
                  Dynamic Target
                </div>
                <div class="demo-arrow__card demo-arrow__card--bordered">
                  Mode: {{ dynamicPosition }}
                  <D1Arrow
                    element-target="#demo-arrow-dynamic-target"
                    :position="dynamicPosition"
                  />
                </div>
              </div>

              <div class="demo-arrow__slot">
                <div class="demo-arrow__card demo-arrow__card--bordered">
                  No Target (auto)
                  <D1Arrow position="auto"/>
                </div>
              </div>

              <div class="demo-arrow__slot">
                <div class="demo-arrow__card demo-arrow__card--bordered">
                  Missing Selector (auto)
                  <D1Arrow
                    element-target="#demo-arrow-non-existent-target"
                    position="auto"
                  />
                </div>
              </div>
            </DemoFlex>
          </DemoFlex>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-arrow {
  &__slot {
    padding: 20px;
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
    align-items: center;
    gap: 24px;
    padding: 16px;
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
    border-radius: ui.v('?sys.rounded.xl');
    border-style: dashed;
    border-width: ui.v('?sys.spacing.outline');
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.surface.disabled'));
    cursor: crosshair;
  }
}
</style>
