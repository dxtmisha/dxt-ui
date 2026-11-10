<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WindowEmitOptions, WindowExpose } from '@dxtmisha/constructor/Window'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openControlled = ref(false)
const windowRef = ref<WindowExpose | null>(null)

const handleWindowEmit = (options: WindowEmitOptions) => {
  onEvent('window', `id: ${options.id}, open: ${options.open}`)
}

const beforeClosingHook = (): boolean => {
  return window.confirm('Are you sure you want to close this window?')
}

const statusValue = computed<string>(() => {
  if (windowRef.value) {
    return `getId(): "${windowRef.value.getId()}", getOpen(): ${windowRef.value.getOpen()}, hasControl: ${Boolean(windowRef.value.getControl())}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Window">
    <D1Section>
      <D1Group label="Basic Usage (Modal Dialog)">
        <DemoFlex>
          <D1Window>
            <template #control="{ binds }">
              <D1Button
                label="Open Modal"
                primary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Standard Modal Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Centered modal dialog with darkened scrim backdrop and automatic focus trapping.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Cancel"
                  secondary
                  :class="classesWindow.close"
                />
                <D1Button
                  label="Confirm"
                  primary
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive Responsive Modes">
        <DemoFlex>
          <!-- Menu (Popover) -->
          <D1Window adaptive="menu">
            <template #control="{ binds }">
              <D1Button
                label="Menu (Dropdown)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <h4 class="demo-window-page__title">Contextual Menu</h4>
              <p>Attached to trigger button without backdrop scrim.</p>
            </div>
          </D1Window>

          <!-- Action Sheet Bottom -->
          <D1Window adaptive="actionSheetBottom">
            <template #control="{ binds }">
              <D1Button
                label="Action Sheet (Bottom)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Bottom Action Sheet</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Slides up from the bottom of the screen. Mobile-optimized touch interface.</p>
            </div>
          </D1Window>

          <!-- Action Sheet Right -->
          <D1Window adaptive="actionSheetRight">
            <template #control="{ binds }">
              <D1Button
                label="Action Sheet (Right)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Right Drawer Sheet</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Slides in from the right edge. Ideal for filters and secondary navigation.</p>
            </div>
          </D1Window>

          <!-- Fullscreen -->
          <D1Window fullscreen>
            <template #control="{ binds }">
              <D1Button
                label="Fullscreen Mode"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Fullscreen View</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Expands to fill 100% of the viewport width and height.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Positioning Axes (Menu Mode)">
        <DemoFlex>
          <!-- Axis X -->
          <D1Window
            adaptive="menu"
            axis="x"
            :indent="8"
          >
            <template #control="{ binds }">
              <D1Button
                label="Horizontal (Axis X)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Aligns horizontally (left/right) relative to the control element.</p>
            </div>
          </D1Window>

          <!-- Axis Y -->
          <D1Window
            adaptive="menu"
            axis="y"
            :indent="8"
          >
            <template #control="{ binds }">
              <D1Button
                label="Vertical (Axis Y)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Aligns vertically (top/bottom) relative to the control element.</p>
            </div>
          </D1Window>

          <!-- Axis On (Over Element) -->
          <D1Window
            adaptive="menu"
            axis="on"
            overElement=".demo-window-page__target"
          >
            <template #control="{ binds }">
              <D1Button
                label="Overlay Target (Axis On)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Positioned directly over target element.</p>
              <div class="demo-window-page__target">Target Element Focus</div>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Viewport Alignments">
        <DemoFlex>
          <D1Window alignment="leftFull">
            <template #control="{ binds }">
              <D1Button
                label="Left Full Drawer"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Left Sidebar</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Stretches full height docked to viewport left.</p>
            </div>
          </D1Window>

          <D1Window alignment="rightFull">
            <template #control="{ binds }">
              <D1Button
                label="Right Full Drawer"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Right Sidebar</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Stretches full height docked to viewport right.</p>
            </div>
          </D1Window>

          <D1Window alignment="bottomFull">
            <template #control="{ binds }">
              <D1Button
                label="Bottom Full Dock"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Bottom Dock</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Stretches full width docked to viewport bottom.</p>
            </div>
          </D1Window>

          <D1Window alignment="top">
            <template #control="{ binds }">
              <D1Button
                label="Top Banner"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Positioned at the top center of viewport.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Width & Height Variants">
        <DemoFlex>
          <D1Window width="sm">
            <template #control="{ binds }">
              <D1Button
                label="Width: sm"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Small preset width.</p>
            </div>
          </D1Window>

          <D1Window width="md">
            <template #control="{ binds }">
              <D1Button
                label="Width: md (default)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Standard medium width.</p>
            </div>
          </D1Window>

          <D1Window width="lg">
            <template #control="{ binds }">
              <D1Button
                label="Width: lg"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Large preset width.</p>
            </div>
          </D1Window>

          <D1Window width="420px" height="260px">
            <template #control="{ binds }">
              <D1Button
                label="Custom (420x260px)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Window with custom pixel width and height constraints.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Animation Origins">
        <DemoFlex>
          <D1Window origin="topToBottom">
            <template #control="{ binds }">
              <D1Button
                label="Top to Bottom"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding and scaling from top to bottom.</p>
            </div>
          </D1Window>

          <D1Window origin="bottomToTop">
            <template #control="{ binds }">
              <D1Button
                label="Bottom to Top"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding and scaling from bottom to top.</p>
            </div>
          </D1Window>

          <D1Window origin="leftToRight">
            <template #control="{ binds }">
              <D1Button
                label="Left to Right"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding from left to right.</p>
            </div>
          </D1Window>

          <D1Window origin="rightToLeft">
            <template #control="{ binds }">
              <D1Button
                label="Right to Left"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding from right to left.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="States: Disabled & Persistent">
        <DemoFlex>
          <!-- Disabled Window -->
          <D1Window disabled>
            <template #control="{ binds }">
              <D1Button
                label="Disabled Window"
                disabled
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>This content cannot be opened because the window is disabled.</p>
            </div>
          </D1Window>

          <!-- Persistent Window with Flash Effect -->
          <D1Window
            persistent
            flash
          >
            <template #control="{ binds }">
              <D1Button
                label="Persistent (Wobble + Flash)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Persistent Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Clicking outside does not close this window. Instead, it triggers a wobble animation and flash effect.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Explicit Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>

          <!-- Width Match -->
          <D1Window
            adaptive="menu"
            widthMatch
          >
            <template #control="{ binds }">
              <D1Button
                label="Match Control Width (Width Match)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>The popup width automatically matches the trigger button's rendered width.</p>
            </div>
          </D1Window>

          <!-- Context Menu Trigger -->
          <D1Window
            adaptive="menu"
            contextmenu
          >
            <template #control="{ binds }">
              <D1Button
                label="Right Click Me (Context Menu)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Opened via native right-click (contextmenu) event instead of standard click.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Anatomy: Dividers, Close Button & Dense Layout">
        <DemoFlex>
          <D1Window
            divider
            closeButton
            dense
          >
            <template #control="{ binds }">
              <D1Button
                label="Dividers + Close Button + Dense"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Dense Window with Dividers</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Includes header close button, border dividers between sections, and compact padding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Done"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>

          <!-- Image Integration -->
          <D1Window
            image="home"
            imagePosition="left"
          >
            <template #control="{ binds }">
              <D1Button
                label="Window with Left Image/Icon"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Image Banner Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Integrated side image banner rendered alongside the main body.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle Modes: Static & Embedded">
        <div class="demo-window-page__embedded-container">
          <p><strong>Parent Container (Embedded Boundary):</strong></p>
          <D1Window embedded>
            <template #control="{ binds }">
              <D1Button
                label="Open Embedded Window"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>This window renders inside its parent container without teleporting to document body.</p>
            </div>
          </D1Window>
        </div>

        <D1Window
          :staticMode="true"
          adaptive="static"
        >
          <template #title>
            <h3 class="demo-window-page__title">Static Window (Inline Flow)</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Renders directly inside normal document flow without modal overlays or toggle animations.</p>
          </div>
        </D1Window>
      </D1Group>

      <D1Group label="Lifecycle Hooks (Before Closing Guard)">
        <DemoFlex>
          <D1Window :beforeClosing="beforeClosingHook">
            <template #control="{ binds }">
              <D1Button
                label="Window with Before Closing Guard"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Guarded Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Closing triggers a confirmation dialog. Canceling prevents the window from closing.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Try Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Control (v-model:open)">
        <DemoFlex>
          <D1Button
            :label="openControlled ? 'Close via State' : 'Open via State'"
            primary
            @click="openControlled = !openControlled"
          />
        </DemoFlex>
        <D1Window v-model:open="openControlled">
          <template #title>
            <h3 class="demo-window-page__title">Controlled Window</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Controlled externally via reactive v-model:open binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-window-page__footer">
              <D1Button
                label="Close via v-model"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Window>
        <DemoValue :value="openControlled" />
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <DemoFlex>
          <D1Button
            label="Open (toOpen)"
            @click="windowRef?.toOpen()"
          />
          <D1Button
            label="Open (setOpen)"
            @click="windowRef?.setOpen(true)"
          />
          <D1Button
            label="Close (toClose)"
            @click="windowRef?.toClose()"
          />
          <D1Button
            label="Close (setOpen false)"
            @click="windowRef?.setOpen(false)"
          />
          <D1Button
            label="Toggle (toggle)"
            @click="windowRef?.toggle()"
          />
        </DemoFlex>
        <D1Window ref="windowRef" id="demo-expose-window">
          <template #title>
            <h3 class="demo-window-page__title">Exposed Methods Window</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Controlled programmatically via exposed instance methods: toOpen, toClose, setOpen, and toggle.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-window-page__footer">
              <D1Button
                label="Close"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Window>
        <DemoValue :value="statusValue" />
      </D1Group>

      <D1Group label="Events Tracking">
        <DemoFlex>
          <D1Window @window="handleWindowEmit">
            <template #control="{ binds }">
              <D1Button
                label="Trigger Window Events"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Event-Tracked Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Emits `@window` on every open/close transition with payload metadata.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-window-page {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  &__title {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg) 0;
    margin: 0;
  }

  &__content {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--d1-sys-spacing-xs);
  }

  &__footer {
    padding: var(--d1-sys-spacing-sm) var(--d1-sys-spacing-lg) var(--d1-sys-spacing-md);
    display: flex;
    justify-content: flex-end;
    gap: var(--d1-sys-spacing-md);
  }

  &__target {
    padding: 8px 12px;
    background: var(--d1-sys-palette-primary-container, #e0e7ff);
    border-radius: 4px;
    font-weight: 600;
  }

  &__embedded-container {
    width: 100%;
    min-height: 180px;
    border: 2px dashed var(--d1-sys-palette-outline, #ccc);
    border-radius: 8px;
    padding: 16px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
