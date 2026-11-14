<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WindowEmitOptions, WindowExpose } from '@dxtmisha/constructor/Window'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openControlled = ref(false)
const hideWindow = ref(false)
const allowClose = ref(true)
const hookLog = ref('Idle')
const windowRef = ref<WindowExpose | null>(null)

const handleWindowEmit = (options: WindowEmitOptions) => {
  onEvent('window', `id: ${options.id}, open: ${options.open}`)
}

const onPreparation = () => {
  hookLog.value = 'preparation -> ready'
}

const onBeforeOpening = (): boolean => {
  hookLog.value = 'beforeOpening -> allowed'
  return true
}

const onOpening = (): boolean => {
  hookLog.value = 'opening -> transition complete'
  return true
}

const onBeforeClosing = (): boolean => {
  hookLog.value = allowClose.value
    ? 'beforeClosing -> allowed'
    : 'beforeClosing -> blocked (Allow Close = false)'
  return allowClose.value
}

const onClosing = (): boolean => {
  hookLog.value = 'closing -> closed'
  return true
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
      <D1Group label="Basic Usage & Slots">
        <DemoFlex>
          <D1Window>
            <template #control="{ binds, open }">
              <D1Button
                :label="open.value ? 'Modal Opened' : 'Open Modal'"
                primary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Standard Modal Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Centered modal dialog with darkened scrim backdrop and automatic focus trapping.</p>
              <p>Includes <strong>#control</strong>, <strong>#title</strong>, <strong>#default</strong>, and <strong>#footer</strong> slots.</p>
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

          <D1Window>
            <template #control="{ binds }">
              <D1Button
                label="Nested Windows & Escape LIFO"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Parent Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Open a child overlay on top. Pressing Escape closes only the top-most window while keeping background inert.</p>
              <D1Window adaptive="menu">
                <template #control="{ binds: childBinds }">
                  <D1Button
                    label="Open Child Window"
                    primary
                    v-bind="childBinds"
                  />
                </template>
                <div class="demo-window-page__content">
                  <p>Child overlay inside Parent Window.</p>
                </div>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Close Parent"
                  secondary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Menu Mode & Cascading Submenus (Menu Inside Menu)">
        <DemoFlex>
          <D1Window adaptive="menu" :indent="8">
            <template #control="{ binds }">
              <D1Button label="Open Cascade Menu (3 Levels)" primary v-bind="binds" />
            </template>
            <template #default="{ classesWindow: menu1Classes }">
              <div class="demo-window-page__content" data-testid="cascade-menu-1">
                <h4 class="demo-window-page__title">Level 1 Menu</h4>
                <D1Button
                  label="Stay Open Item (block)"
                  secondary
                  :class="menu1Classes.static"
                />
                <D1Window adaptive="menu" axis="x" :indent="8">
                  <template #control="{ binds: sub1Binds }">
                    <D1Button label="Open Submenu L2 >" secondary v-bind="sub1Binds" />
                  </template>
                  <template #default="{ classesWindow: menu2Classes }">
                    <div class="demo-window-page__content" data-testid="cascade-menu-2">
                      <h4 class="demo-window-page__title">Level 2 Submenu</h4>
                      <D1Button
                        label="Keep L2 Open (block)"
                        secondary
                        :class="menu2Classes.static"
                      />
                      <D1Window adaptive="menu" axis="x" :indent="8" :autoClose="true">
                        <template #control="{ binds: sub2Binds }">
                          <D1Button label="Open Submenu L3 >" secondary v-bind="sub2Binds" />
                        </template>
                        <div class="demo-window-page__content" data-testid="cascade-menu-3">
                          <h4 class="demo-window-page__title">Level 3 Leaf Menu</h4>
                          <D1Button label="Select Leaf Item (autoClose)" primary />
                        </div>
                      </D1Window>
                    </div>
                  </template>
                </D1Window>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" :autoClose="true" widthMatch width="auto">
            <template #control="{ binds }">
              <D1Button label="Menu Mode + widthMatch + autoClose" secondary v-bind="binds" />
            </template>
            <template #default="{ classesWindow: singleMenuClasses }">
              <div class="demo-window-page__content" data-testid="single-menu-mode">
                <D1Button
                  label="Blocked Item (Stays Open)"
                  secondary
                  :class="singleMenuClasses.static"
                />
                <D1Button label="Action Item (Auto Closes)" primary />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Nesting Matrix: All Modes & Related Properties">
        <DemoFlex>
          <D1Window adaptive="modal">
            <template #control="{ binds }">
              <D1Button label="Nested: Modal -> Modal" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Parent Modal (Level 1)</h3>
            </template>
            <div class="demo-window-page__content" data-testid="nest-modal-parent">
              <p>Parent modal opening a second centered modal with WeakMap inert lock counting.</p>
              <D1Window adaptive="modal">
                <template #control="{ binds: childBinds }">
                  <D1Button label="Open Child Modal" primary v-bind="childBinds" />
                </template>
                <template #title>
                  <h3 class="demo-window-page__title">Child Modal (Level 2)</h3>
                </template>
                <div class="demo-window-page__content" data-testid="nest-modal-child">
                  <p>Stacked child modal dialog.</p>
                </div>
                <template #footer="{ classesWindow }">
                  <div class="demo-window-page__footer">
                    <D1Button label="Close Child Modal" primary :class="classesWindow.close" />
                  </div>
                </template>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Parent Modal" secondary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu">
            <template #control="{ binds }">
              <D1Button label="Nested: Menu -> Modal" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content" data-testid="nest-menu-to-modal">
              <p>Dropdown menu opening a full centered modal.</p>
              <D1Window adaptive="modal">
                <template #control="{ binds: modalBinds }">
                  <D1Button label="Open Modal from Menu" primary v-bind="modalBinds" />
                </template>
                <template #title>
                  <h3 class="demo-window-page__title">Modal Opened From Menu</h3>
                </template>
                <div class="demo-window-page__content">
                  <p>Verifies backdrop inert and Escape LIFO back to menu.</p>
                </div>
                <template #footer="{ classesWindow }">
                  <div class="demo-window-page__footer">
                    <D1Button label="Close Inner Modal" primary :class="classesWindow.close" />
                  </div>
                </template>
              </D1Window>
            </div>
          </D1Window>

          <D1Window adaptive="actionSheetRight">
            <template #control="{ binds }">
              <D1Button label="Nested: ActionSheetRight -> Menu" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Drawer With Nested Menu</h3>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="menu" widthMatch width="auto">
                <template #control="{ binds: drawerMenuBinds }">
                  <D1Button label="Open Drawer Menu" primary v-bind="drawerMenuBinds" />
                </template>
                <div class="demo-window-page__content">
                  <p>Menu positioned inside Right Action Sheet.</p>
                </div>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Drawer" secondary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window fullscreen>
            <template #control="{ binds }">
              <D1Button label="Nested: Fullscreen -> ModalDynamic" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Fullscreen With Nested ModalDynamic</h3>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="modalDynamic">
                <template #control="{ binds: dynBinds }">
                  <D1Button label="Open ModalDynamic Child" primary v-bind="dynBinds" />
                </template>
                <div class="demo-window-page__content">
                  <p>Child ModalDynamic inside Fullscreen.</p>
                </div>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Fullscreen" secondary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menuWindow">
            <template #control="{ binds }">
              <D1Button label="Nested: MenuWindow -> ActionSheetBottom" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="actionSheetBottom">
                <template #control="{ binds: sheetBinds }">
                  <D1Button label="Open ActionSheetBottom Child" primary v-bind="sheetBinds" />
                </template>
                <div class="demo-window-page__content">
                  <p>Child ActionSheetBottom inside MenuWindow.</p>
                </div>
              </D1Window>
            </div>
          </D1Window>

          <D1Window persistent>
            <template #control="{ binds }">
              <D1Button label="Nested Props: Persistent + closeOnEsc: false" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Persistent Parent Guard</h3>
            </template>
            <div class="demo-window-page__content" data-testid="nest-guards-parent">
              <p>Parent is persistent; child disables closeOnEsc and blocks auto-dismissal.</p>
              <D1Window :closeOnEsc="false" :autoClose="true" :inert="false">
                <template #control="{ binds: guardBinds }">
                  <D1Button label="Open Protected Child (no Esc)" primary v-bind="guardBinds" />
                </template>
                <template #default="{ classesWindow: guardChildClasses }">
                  <div class="demo-window-page__content" data-testid="nest-guards-child">
                    <p>Child with closeOnEsc: false, autoClose: true, and inert: false.</p>
                    <D1Button
                      label="Blocked Child Action"
                      secondary
                      :class="guardChildClasses.static"
                    />
                    <D1Button
                      label="Explicit Child Close"
                      primary
                      :class="guardChildClasses.close"
                    />
                  </div>
                </template>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Persistent Parent" secondary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window :staticMode="true" adaptive="static">
            <template #title>
              <h3 class="demo-window-page__title">Static Parent -> Menu</h3>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="menu">
                <template #control="{ binds: staticMenuBinds }">
                  <D1Button label="Open Menu From Static" secondary v-bind="staticMenuBinds" />
                </template>
                <div class="demo-window-page__content">
                  <p>Menu opened from inside static window.</p>
                </div>
              </D1Window>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive Responsive Modes">
        <DemoFlex>
          <D1Window adaptive="modal">
            <template #control="{ binds }">
              <D1Button label="Modal" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Adaptive mode: <strong>modal</strong>.</p>
            </div>
          </D1Window>

          <D1Window adaptive="modalDynamic">
            <template #control="{ binds }">
              <D1Button label="Modal Dynamic" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Adaptive mode: <strong>modalDynamic</strong>.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu">
            <template #control="{ binds }">
              <D1Button label="Menu (Dropdown)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <h4 class="demo-window-page__title">Contextual Menu</h4>
              <p>Attached to trigger button without backdrop scrim.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menuWindow">
            <template #control="{ binds }">
              <D1Button label="Menu Window" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Adaptive mode: <strong>menuWindow</strong>.</p>
            </div>
          </D1Window>

          <D1Window adaptive="actionSheetBottom">
            <template #control="{ binds }">
              <D1Button label="Action Sheet (Bottom)" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Bottom Action Sheet</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Slides up from the bottom of the screen. Mobile-optimized touch interface.</p>
            </div>
          </D1Window>

          <D1Window adaptive="actionSheetRight">
            <template #control="{ binds }">
              <D1Button label="Action Sheet (Right)" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Right Drawer Sheet</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Slides in from the right edge. Ideal for filters and secondary navigation.</p>
            </div>
          </D1Window>

          <D1Window fullscreen>
            <template #control="{ binds }">
              <D1Button label="Fullscreen Mode" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Fullscreen View</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Expands to fill 100% of the viewport width and height.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Positioning Axes (Menu Mode)">
        <DemoFlex>
          <D1Window adaptive="menu" axis="x" :indent="8">
            <template #control="{ binds }">
              <D1Button label="Horizontal (Axis X)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Aligns horizontally (left/right) relative to the control element.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" axis="y" :indent="8">
            <template #control="{ binds }">
              <D1Button label="Vertical (Axis Y)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Aligns vertically (top/bottom) relative to the control element.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" axis="on" overElement=".demo-window-page__target">
            <template #control="{ binds }">
              <D1Button label="Overlay Target (Axis On)" secondary v-bind="binds" />
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
          <D1Window alignment="center">
            <template #control="{ binds }">
              <D1Button label="Center" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Centered alignment in viewport.</p>
            </div>
          </D1Window>

          <D1Window alignment="top">
            <template #control="{ binds }">
              <D1Button label="Top" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Positioned at the top center of viewport.</p>
            </div>
          </D1Window>

          <D1Window alignment="bottom">
            <template #control="{ binds }">
              <D1Button label="Bottom" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Positioned at the bottom center of viewport.</p>
            </div>
          </D1Window>

          <D1Window alignment="leftFull">
            <template #control="{ binds }">
              <D1Button label="Left Full Drawer" secondary v-bind="binds" />
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
              <D1Button label="Right Full Drawer" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Right Sidebar</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Stretches full height docked to viewport right.</p>
            </div>
          </D1Window>

          <D1Window alignment="topFull">
            <template #control="{ binds }">
              <D1Button label="Top Full" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Stretches full width docked to viewport top.</p>
            </div>
          </D1Window>

          <D1Window alignment="bottomFull">
            <template #control="{ binds }">
              <D1Button label="Bottom Full Dock" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Bottom Dock</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Stretches full width docked to viewport bottom.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Width & Height Variants">
        <DemoFlex>
          <D1Window width="auto" height="auto">
            <template #control="{ binds }">
              <D1Button label="Width & Height: auto" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Automatically sized to content dimensions.</p>
            </div>
          </D1Window>

          <D1Window width="sm" height="sm">
            <template #control="{ binds }">
              <D1Button label="Preset: sm" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Small preset width and height.</p>
            </div>
          </D1Window>

          <D1Window width="md" height="md">
            <template #control="{ binds }">
              <D1Button label="Preset: md (default)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Standard medium preset size.</p>
            </div>
          </D1Window>

          <D1Window width="lg" height="lg">
            <template #control="{ binds }">
              <D1Button label="Preset: lg" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Large preset width and height.</p>
            </div>
          </D1Window>

          <D1Window width="max" height="max">
            <template #control="{ binds }">
              <D1Button label="Preset: max" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Maximum preset bounds within safe viewport padding.</p>
            </div>
          </D1Window>

          <D1Window width="420px" height="260px">
            <template #control="{ binds }">
              <D1Button label="Custom (420x260px)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Window with custom pixel width and height constraints.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Animation Origins">
        <DemoFlex>
          <D1Window origin="center">
            <template #control="{ binds }">
              <D1Button label="Center" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Scales smoothly from center origin.</p>
            </div>
          </D1Window>

          <D1Window origin="topToBottom">
            <template #control="{ binds }">
              <D1Button label="Top to Bottom" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding and scaling from top to bottom.</p>
            </div>
          </D1Window>

          <D1Window origin="bottomToTop">
            <template #control="{ binds }">
              <D1Button label="Bottom to Top" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding and scaling from bottom to top.</p>
            </div>
          </D1Window>

          <D1Window origin="leftToRight">
            <template #control="{ binds }">
              <D1Button label="Left to Right" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding from left to right.</p>
            </div>
          </D1Window>

          <D1Window origin="rightToLeft">
            <template #control="{ binds }">
              <D1Button label="Right to Left" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opens sliding from right to left.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="States: Disabled, Hide, Persistent & Interaction">
        <DemoFlex>
          <D1Window disabled>
            <template #control="{ binds }">
              <D1Button label="Disabled Window" disabled v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>This content cannot be opened because the window is disabled.</p>
            </div>
          </D1Window>

          <D1Button
            :label="hideWindow ? 'Show Hidden Window' : 'Hide Window Flag'"
            secondary
            @click="hideWindow = !hideWindow"
          />
          <D1Window :hide="hideWindow" staticMode adaptive="static">
            <div class="demo-window-page__content">
              <p>Static window with reactive <strong>hide</strong> modifier ({{ hideWindow }}).</p>
            </div>
          </D1Window>

          <D1Window persistent flash>
            <template #control="{ binds }">
              <D1Button label="Persistent (Wobble + Flash)" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Persistent Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Clicking outside does not close this window. Instead, it triggers a wobble animation and flash effect.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Explicit Close" primary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" widthMatch width="auto">
            <template #control="{ binds }">
              <D1Button label="Match Control Width (Width Match)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>The popup width automatically matches the trigger button's rendered width.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" contextmenu>
            <template #control="{ binds }">
              <D1Button label="Right Click Me (Context Menu)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opened via native right-click (contextmenu) event instead of standard click.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" :autoClose="true">
            <template #control="{ binds }">
              <D1Button label="Auto Close on Content Click" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <D1Button label="Click Inside (Closes Window)" primary />
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Keyboard, Accessibility & Helper Classes">
        <DemoFlex>
          <D1Window
            :closeOnEsc="false"
            role="alertdialog"
            ariaLabelledby="demo-alert-dialog-title"
            ariaDescribedby="demo-alert-dialog-desc"
          >
            <template #control="{ binds }">
              <D1Button label="closeOnEsc: false (alertdialog)" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 id="demo-alert-dialog-title" class="demo-window-page__title">Protected Alert Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p id="demo-alert-dialog-desc">Pressing Escape will not dismiss this dialog. Use the explicit close button.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Acknowledge & Close" primary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" openOnArrowDown>
            <template #control="{ binds }">
              <D1Button label="Focus + ArrowDown to Open" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opened via ArrowDown key on focused control element.</p>
            </div>
          </D1Window>

          <D1Window :inert="false" :autoTabIndex="false">
            <template #control="{ binds }">
              <D1Button label="Non-Inert Background" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>Opens without setting inert on background siblings.</p>
            </div>
          </D1Window>

          <D1Window autoClose>
            <template #control="{ binds }">
              <D1Button label="Slot Behavior Classes (autoClose / static / close)" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <D1Button label="Auto Close Action" secondary />
              <div class="demo-window-page__box">
                <p>Use classesWindow.static on inner elements to prevent autoClose dismissal.</p>
              </div>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Stay Open (classesWindow.static)" secondary :class="classesWindow.static" />
                <D1Button label="Close (classesWindow.close)" primary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Anatomy: Dividers, Close Button, Overscroll & Images">
        <DemoFlex>
          <D1Window
            divider
            closeButton
            dense
            overscroll
            textClose="Dismiss"
            iconClose="close"
          >
            <template #control="{ binds }">
              <D1Button label="Dividers + Close + Dense" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Dense Window with Dividers</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Includes header close button, border dividers between sections, overscroll containment, and compact padding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Done" primary :class="classesWindow.close" />
              </div>
            </template>
          </D1Window>

          <D1Window
            closeButton
            closeMobileHide
            :iconClose="{ value: 'cancel' }"
            :overscroll="false"
          >
            <template #control="{ binds }">
              <D1Button label="Object Icon + closeMobileHide" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Custom Icon Object Close</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Uses icon object syntax for close button and hides close icon on narrow viewports.</p>
            </div>
          </D1Window>

          <D1Window
            image="home"
            imagePosition="top"
            imageSize="sm"
          >
            <template #control="{ binds }">
              <D1Button label="Top Image (sm)" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Top Banner Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Header image positioned at top with size token <strong>sm</strong>.</p>
            </div>
          </D1Window>

          <D1Window
            image="home"
            imagePosition="left"
            imageSize="quarter"
          >
            <template #control="{ binds }">
              <D1Button label="Left Image (quarter)" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Left Banner Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Integrated side image banner occupying quarter width.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle Modes: Static, Embedded & inDom (SSR)">
        <DemoBox>
          <p><strong>Parent Container (Embedded Boundary):</strong></p>
          <D1Window embedded>
            <template #control="{ binds }">
              <D1Button label="Open Embedded Window" secondary v-bind="binds" />
            </template>
            <div class="demo-window-page__content">
              <p>This window renders inside its parent container without teleporting to document body.</p>
            </div>
          </D1Window>
        </DemoBox>

        <D1Window inDom>
          <template #control="{ binds }">
            <D1Button label="SSR Persistent inDom Window" secondary v-bind="binds" />
          </template>
          <template #title>
            <h3 class="demo-window-page__title">Always-Mounted Window (inDom)</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Keeps window DOM structure mounted for SSR pre-rendering and instant hydration.</p>
          </div>
        </D1Window>

        <D1Window :staticMode="true" adaptive="static">
          <template #title>
            <h3 class="demo-window-page__title">Static Window (Inline Flow)</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Renders directly inside normal document flow without modal overlays or toggle animations.</p>
          </div>
        </D1Window>
      </D1Group>

      <D1Group label="Lifecycle Hooks (Preparation, Opening & Closing Guards)">
        <DemoFlex>
          <D1Button
            :label="`Allow Close: ${allowClose}`"
            secondary
            @click="allowClose = !allowClose"
          />
          <D1Window
            :preparation="onPreparation"
            :beforeOpening="onBeforeOpening"
            :opening="onOpening"
            :beforeClosing="onBeforeClosing"
            :closing="onClosing"
          >
            <template #control="{ binds }">
              <D1Button label="Open Guarded Window" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Guarded Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Closing checks the reactive <strong>Allow Close</strong> flag ({{ allowClose }}). Toggle it to allow or block dismissal.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Allow & Close"
                  secondary
                  @click="allowClose = true"
                />
                <D1Button
                  label="Try Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
        <DemoValue label="Last Hook" :value="hookLog" />
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
              <D1Button label="Close via v-model" primary :class="classesWindow.close" />
            </div>
          </template>
        </D1Window>
        <DemoValue :value="openControlled" />
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <DemoFlex>
          <D1Button label="Open (toOpen)" @click="windowRef?.toOpen()" />
          <D1Button label="Open (setOpen)" @click="windowRef?.setOpen(true)" />
          <D1Button label="Close (toClose)" @click="windowRef?.toClose()" />
          <D1Button label="Close (setOpen false)" @click="windowRef?.setOpen(false)" />
          <D1Button label="Toggle (toggle)" @click="windowRef?.toggle()" />
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
              <D1Button label="Close" primary :class="classesWindow.close" />
            </div>
          </template>
        </D1Window>
        <DemoValue :value="statusValue" />
      </D1Group>

      <D1Group label="Events Tracking">
        <DemoFlex>
          <D1Window @window="handleWindowEmit">
            <template #control="{ binds }">
              <D1Button label="Trigger Window Events" secondary v-bind="binds" />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Event-Tracked Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Emits <code>@window</code> on every open/close transition with payload metadata.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close" />
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
}
</style>
