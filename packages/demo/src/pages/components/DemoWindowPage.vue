<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ImageEventData } from '@dxtmisha/constructor/Image'
import type { ScrollbarEdgeType } from '@dxtmisha/constructor/Scrollbar'
import type { WindowEmitOptions, WindowExpose } from '@dxtmisha/constructor/Window'
import type { WindowProps } from '@dxtmisha/d1/D1Window'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const alignmentList: NonNullable<WindowProps['alignment']>[] = [
  'center',
  'top',
  'topRight',
  'topLeft',
  'topFull',
  'right',
  'rightFull',
  'bottom',
  'bottomRight',
  'bottomLeft',
  'bottomFull',
  'left',
  'leftFull'
]

const originList: NonNullable<WindowProps['origin']>[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'topToBottom',
  'rightToLeft',
  'bottomToTop',
  'leftToRight'
]

const adaptiveOverlayModes: NonNullable<WindowProps['adaptive']>[] = [
  'modal',
  'modalDynamic',
  'menu',
  'menuWindow',
  'actionSheetBottom',
  'actionSheetRight',
  'actionSheet',
  'actionSheetToModal',
  'autoStaticSm',
  'autoStaticMd',
  'autoStaticLg',
  'autoStaticXl',
  'autoStatic2xl'
]

const imagePositionList: NonNullable<WindowProps['imagePosition']>[] = [
  'top',
  'left',
  'adaptiveSm',
  'adaptiveMd',
  'adaptiveLg',
  'adaptiveXl',
  'adaptive2xl'
]

const imageSizeList: NonNullable<WindowProps['imageSize']>[] = [
  'sm',
  'md',
  'lg',
  'quarter',
  'half'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const isOpenControlled = ref<boolean>(false)
const isWindowHidden = ref<boolean>(false)
const isCloseAllowed = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)
const hookHistory = ref<string>('Idle')
const windowReference = ref<WindowExpose | null>(null)

const xssPayload = '<img src=x onerror=alert(1)>'
const longUnbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const longSentenceText = 'This modal window contains extended multi-sentence copy to verify scrolling containers, overflow wrapping, and boundary containment across viewports.'

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = typeof payload === 'string' ? payload : JSON.stringify(payload)
}

const handleWindowEmit = (options: WindowEmitOptions): void => {
  trackEvent('window', `id: ${options.id}, open: ${options.open}`)
}

const handleUpdateOpen = (isOpen: boolean): void => {
  trackEvent('update:open', { open: isOpen })
}

const handleImageLoad = (imageData: ImageEventData): void => {
  trackEvent('load', { type: imageData.type })
}

const handleScrollbarEdge = (
  isTop: boolean,
  isBottom: boolean,
  edge: ScrollbarEdgeType
): void => {
  trackEvent('scrollbarEdge', { isTop, isBottom, edge })
}

const handleScrollbarReachBottom = (): void => {
  trackEvent('scrollbarReachBottom', { reached: true })
}

const getTextCloseLabel = (): string => 'Dismiss via Function'

const onPreparation = (): void => {
  hookHistory.value = 'preparation -> ready'
}

const onBeforeOpening = (): boolean => {
  hookHistory.value = 'beforeOpening -> allowed'
  return true
}

const onOpening = (): boolean => {
  hookHistory.value = 'opening -> transition complete'
  return true
}

const onBeforeClosing = (): boolean => {
  hookHistory.value = isCloseAllowed.value
    ? 'beforeClosing -> allowed'
    : 'beforeClosing -> blocked (Allow Close = false)'
  return isCloseAllowed.value
}

const onClosing = (): boolean => {
  hookHistory.value = 'closing -> closed'
  return true
}

const exposeStatus = computed<string>(() => {
  if (windowReference.value) {
    return `getId(): "${windowReference.value.getId()}", getOpen(): ${windowReference.value.getOpen()}, hasControl: ${Boolean(windowReference.value.getControl())}`
  }
  return 'Reference not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
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
              <D1Button label="Open Cascade Menu (3 Levels)" primary v-bind="binds"/>
            </template>
            <template #default="{ classesWindow: menuOneClasses }">
              <div class="demo-window-page__content" data-testid="cascade-menu-1">
                <h4 class="demo-window-page__title">Level 1 Menu</h4>
                <D1Button
                  label="Stay Open Item (block)"
                  secondary
                  :class="menuOneClasses.static"
                />
                <D1Window adaptive="menu" axis="x" :indent="8">
                  <template #control="{ binds: submenuTwoBinds }">
                    <D1Button label="Open Submenu L2 >" secondary v-bind="submenuTwoBinds"/>
                  </template>
                  <template #default="{ classesWindow: menuTwoClasses }">
                    <div class="demo-window-page__content" data-testid="cascade-menu-2">
                      <h4 class="demo-window-page__title">Level 2 Submenu</h4>
                      <D1Button
                        label="Keep L2 Open (block)"
                        secondary
                        :class="menuTwoClasses.static"
                      />
                      <D1Window adaptive="menu" axis="x" :indent="8" :auto-close="true">
                        <template #control="{ binds: submenuThreeBinds }">
                          <D1Button label="Open Submenu L3 >" secondary v-bind="submenuThreeBinds"/>
                        </template>
                        <div class="demo-window-page__content" data-testid="cascade-menu-3">
                          <h4 class="demo-window-page__title">Level 3 Leaf Menu</h4>
                          <D1Button label="Select Leaf Item (autoClose)" primary/>
                        </div>
                      </D1Window>
                    </div>
                  </template>
                </D1Window>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" :auto-close="true" width-match width="auto">
            <template #control="{ binds }">
              <D1Button label="Menu Mode + widthMatch + autoClose" secondary v-bind="binds"/>
            </template>
            <template #default="{ classesWindow: singleMenuClasses }">
              <div class="demo-window-page__content" data-testid="single-menu-mode">
                <D1Button
                  label="Blocked Item (Stays Open)"
                  secondary
                  :class="singleMenuClasses.static"
                />
                <D1Button label="Action Item (Auto Closes)" primary/>
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Nesting Matrix: All Modes & Related Properties">
        <DemoFlex>
          <D1Window adaptive="modal">
            <template #control="{ binds }">
              <D1Button label="Nested: Modal -> Modal" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Parent Modal (Level 1)</h3>
            </template>
            <div class="demo-window-page__content" data-testid="nest-modal-parent">
              <p>Parent modal opening a second centered modal with WeakMap inert lock counting.</p>
              <D1Window adaptive="modal">
                <template #control="{ binds: childBinds }">
                  <D1Button label="Open Child Modal" primary v-bind="childBinds"/>
                </template>
                <template #title>
                  <h3 class="demo-window-page__title">Child Modal (Level 2)</h3>
                </template>
                <div class="demo-window-page__content" data-testid="nest-modal-child">
                  <p>Stacked child modal dialog.</p>
                </div>
                <template #footer="{ classesWindow }">
                  <div class="demo-window-page__footer">
                    <D1Button label="Close Child Modal" primary :class="classesWindow.close"/>
                  </div>
                </template>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Parent Modal" secondary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu">
            <template #control="{ binds }">
              <D1Button label="Nested: Menu -> Modal" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content" data-testid="nest-menu-to-modal">
              <p>Dropdown menu opening a full centered modal.</p>
              <D1Window adaptive="modal">
                <template #control="{ binds: modalBinds }">
                  <D1Button label="Open Modal from Menu" primary v-bind="modalBinds"/>
                </template>
                <template #title>
                  <h3 class="demo-window-page__title">Modal Opened From Menu</h3>
                </template>
                <div class="demo-window-page__content">
                  <p>Verifies backdrop inert and Escape LIFO back to menu.</p>
                </div>
                <template #footer="{ classesWindow }">
                  <div class="demo-window-page__footer">
                    <D1Button label="Close Inner Modal" primary :class="classesWindow.close"/>
                  </div>
                </template>
              </D1Window>
            </div>
          </D1Window>

          <D1Window adaptive="actionSheetRight">
            <template #control="{ binds }">
              <D1Button label="Nested: ActionSheetRight -> Menu" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Drawer With Nested Menu</h3>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="menu" width-match width="auto">
                <template #control="{ binds: drawerMenuBinds }">
                  <D1Button label="Open Drawer Menu" primary v-bind="drawerMenuBinds"/>
                </template>
                <div class="demo-window-page__content">
                  <p>Menu positioned inside Right Action Sheet.</p>
                </div>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Drawer" secondary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window fullscreen>
            <template #control="{ binds }">
              <D1Button label="Nested: Fullscreen -> ModalDynamic" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Fullscreen With Nested ModalDynamic</h3>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="modalDynamic">
                <template #control="{ binds: dynamicModalBinds }">
                  <D1Button label="Open ModalDynamic Child" primary v-bind="dynamicModalBinds"/>
                </template>
                <div class="demo-window-page__content">
                  <p>Child ModalDynamic inside Fullscreen.</p>
                </div>
              </D1Window>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close Fullscreen" secondary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menuWindow">
            <template #control="{ binds }">
              <D1Button label="Nested: MenuWindow -> ActionSheetBottom" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="actionSheetBottom">
                <template #control="{ binds: sheetBinds }">
                  <D1Button label="Open ActionSheetBottom Child" primary v-bind="sheetBinds"/>
                </template>
                <div class="demo-window-page__content">
                  <p>Child ActionSheetBottom inside MenuWindow.</p>
                </div>
              </D1Window>
            </div>
          </D1Window>

          <D1Window persistent>
            <template #control="{ binds }">
              <D1Button label="Nested Props: Persistent + closeOnEsc: false" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Persistent Parent Guard</h3>
            </template>
            <div class="demo-window-page__content" data-testid="nest-guards-parent">
              <p>Parent is persistent; child disables closeOnEsc and blocks auto-dismissal.</p>
              <D1Window :close-on-esc="false" :auto-close="true" :inert="false">
                <template #control="{ binds: guardBinds }">
                  <D1Button label="Open Protected Child (no Esc)" primary v-bind="guardBinds"/>
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
                <D1Button label="Close Persistent Parent" secondary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window :static-mode="true" adaptive="static">
            <template #title>
              <h3 class="demo-window-page__title">Static Parent -> Menu</h3>
            </template>
            <div class="demo-window-page__content">
              <D1Window adaptive="menu">
                <template #control="{ binds: staticMenuBinds }">
                  <D1Button label="Open Menu From Static" secondary v-bind="staticMenuBinds"/>
                </template>
                <div class="demo-window-page__content">
                  <p>Menu opened from inside static window.</p>
                </div>
              </D1Window>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive Responsive Modes (All 14)">
        <DemoFlex>
          <D1Window
            v-for="adaptiveMode in adaptiveOverlayModes"
            :key="adaptiveMode"
            :adaptive="adaptiveMode"
          >
            <template #control="{ binds }">
              <D1Button :label="`Adaptive: ${adaptiveMode}`" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Adaptive Mode: {{ adaptiveMode }}</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Adaptive mode: <strong>{{ adaptiveMode }}</strong>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window fullscreen>
            <template #control="{ binds }">
              <D1Button label="Fullscreen Mode" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Fullscreen View</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Expands to fill 100% of the viewport width and height.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>
        </DemoFlex>

        <D1Window :static-mode="true" adaptive="static">
          <template #title>
            <h3 class="demo-window-page__title">Adaptive: static</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Adaptive mode: <strong>static</strong> inline window.</p>
          </div>
        </D1Window>
      </D1Group>

      <D1Group label="Positioning Axes (Menu Mode)">
        <DemoFlex>
          <D1Window adaptive="menu" axis="x" :indent="8">
            <template #control="{ binds }">
              <D1Button label="Horizontal (Axis X)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Aligns horizontally (left/right) relative to the control element.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" axis="y" :indent="8">
            <template #control="{ binds }">
              <D1Button label="Vertical (Axis Y)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Aligns vertically (top/bottom) relative to the control element.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" axis="on" over-element=".demo-window-page__target">
            <template #control="{ binds }">
              <D1Button label="Overlay Target (Axis On)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Positioned directly over target element.</p>
              <div class="demo-window-page__target">Target Element Focus</div>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Viewport Alignments (All 13)">
        <DemoFlex>
          <D1Window
            v-for="alignmentValue in alignmentList"
            :key="alignmentValue"
            :alignment="alignmentValue"
          >
            <template #control="{ binds }">
              <D1Button :label="`Alignment: ${alignmentValue}`" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Alignment: {{ alignmentValue }}</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Positioned using viewport alignment <strong>{{ alignmentValue }}</strong>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Width & Height Variants">
        <DemoFlex>
          <D1Window width="auto" height="auto">
            <template #control="{ binds }">
              <D1Button label="Width & Height: auto" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Automatically sized to content dimensions.</p>
            </div>
          </D1Window>

          <D1Window width="sm" height="sm">
            <template #control="{ binds }">
              <D1Button label="Preset: sm" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Small preset width and height.</p>
            </div>
          </D1Window>

          <D1Window width="md" height="md">
            <template #control="{ binds }">
              <D1Button label="Preset: md (default)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Standard medium preset size.</p>
            </div>
          </D1Window>

          <D1Window width="lg" height="lg">
            <template #control="{ binds }">
              <D1Button label="Preset: lg" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Large preset width and height.</p>
            </div>
          </D1Window>

          <D1Window width="max" height="max">
            <template #control="{ binds }">
              <D1Button label="Preset: max" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Maximum preset bounds within safe viewport padding.</p>
            </div>
          </D1Window>

          <D1Window width="420px" height="260px">
            <template #control="{ binds }">
              <D1Button label="Custom (420x260px)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Window with custom pixel width and height constraints.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Animation Origins (All 9)">
        <DemoFlex>
          <D1Window
            v-for="originValue in originList"
            :key="originValue"
            :origin="originValue"
          >
            <template #control="{ binds }">
              <D1Button :label="`Origin: ${originValue}`" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Animation origin: <strong>{{ originValue }}</strong>.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="States: Disabled, Hide, Persistent & Interaction">
        <DemoFlex>
          <D1Window disabled>
            <template #control="{ binds }">
              <D1Button label="Disabled Window" disabled v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>This content cannot be opened because the window is disabled.</p>
            </div>
          </D1Window>

          <D1Button
            :label="isWindowHidden ? 'Show Hidden Window' : 'Hide Window Flag'"
            secondary
            @click="isWindowHidden = !isWindowHidden"
          />
          <D1Window :hide="isWindowHidden" static-mode adaptive="static">
            <div class="demo-window-page__content">
              <p>Static window with reactive <strong>hide</strong> modifier ({{ isWindowHidden }}).</p>
            </div>
          </D1Window>

          <D1Window persistent flash>
            <template #control="{ binds }">
              <D1Button label="Persistent (Wobble + Flash)" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Persistent Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Clicking outside does not close this window. Instead, it triggers a wobble animation and flash effect.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Explicit Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" width-match width="auto">
            <template #control="{ binds }">
              <D1Button label="Match Control Width (Width Match)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>The popup width automatically matches the trigger button's rendered width.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" contextmenu>
            <template #control="{ binds }">
              <D1Button label="Right Click Me (Context Menu)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Opened via native right-click (contextmenu) event instead of standard click.</p>
            </div>
          </D1Window>

          <D1Window adaptive="menu" :auto-close="true">
            <template #control="{ binds }">
              <D1Button label="Auto Close on Content Click" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <D1Button label="Click Inside (Closes Window)" primary/>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Keyboard, Accessibility & Helper Classes">
        <DemoFlex>
          <D1Window
            :close-on-esc="false"
            role="alertdialog"
            aria-labelledby="demo-alert-dialog-title"
            aria-describedby="demo-alert-dialog-description"
          >
            <template #control="{ binds }">
              <D1Button label="closeOnEsc: false (alertdialog)" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 id="demo-alert-dialog-title" class="demo-window-page__title">Protected Alert Dialog</h3>
            </template>
            <div class="demo-window-page__content">
              <p id="demo-alert-dialog-description">Pressing Escape will not dismiss this dialog. Use the explicit close button.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Acknowledge & Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" open-on-arrow-down>
            <template #control="{ binds }">
              <D1Button label="Focus + ArrowDown to Open" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Opened via ArrowDown key on focused control element.</p>
            </div>
          </D1Window>

          <D1Window :inert="false" :auto-tab-index="false">
            <template #control="{ binds }">
              <D1Button label="Non-Inert Background" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Opens without setting inert on background siblings.</p>
            </div>
          </D1Window>

          <D1Window disable-focus-return>
            <template #control="{ binds }">
              <D1Button label="disableFocusReturn (No Focus Restore)" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Focus Return Disabled</h3>
            </template>
            <div class="demo-window-page__content">
              <p>After closing, focus is not returned to the control button.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window adaptive="menu" role="menu" aria-haspopup="menu">
            <template #control="{ binds }">
              <D1Button label="role: menu + ariaHaspopup: menu" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Menu role window: control exposes aria-haspopup="menu" and background stays interactive.</p>
            </div>
          </D1Window>

          <D1Window auto-close>
            <template #control="{ binds }">
              <D1Button label="Slot Behavior Classes (autoClose / static / close)" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <D1Button label="Auto Close Action" secondary/>
              <div class="demo-window-page__box">
                <p>Use classesWindow.static on inner elements to prevent autoClose dismissal.</p>
              </div>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Stay Open (classesWindow.static)" secondary :class="classesWindow.static"/>
                <D1Button label="Close (classesWindow.close)" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Anatomy: Dividers, Close Button, Scrollbar, Overscroll & Images">
        <DemoFlex>
          <D1Window
            divider
            close-button
            dense
            overscroll
            text-close="Dismiss"
            icon-close="close"
            :scrollbar-attrs="{ visible: true, divider: true }"
          >
            <template #control="{ binds }">
              <D1Button label="Dividers + Close + Dense + Scrollbar" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Dense Window with Dividers</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Includes header close button, border dividers between sections, overscroll containment, and compact padding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Done" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>

          <D1Window
            close-button
            close-mobile-hide
            :text-close="getTextCloseLabel"
            :icon-close="{ icon: 'cancel' }"
            :overscroll="false"
          >
            <template #control="{ binds }">
              <D1Button label="Object Icon + closeMobileHide" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Custom Icon Object Close</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Uses icon object syntax for close button and hides close icon on narrow viewports.</p>
            </div>
          </D1Window>

          <D1Window
            v-for="imagePositionValue in imagePositionList"
            :key="imagePositionValue"
            image="home"
            :image-position="imagePositionValue"
            image-size="sm"
          >
            <template #control="{ binds }">
              <D1Button :label="`Image Pos: ${imagePositionValue}`" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Image Position: {{ imagePositionValue }}</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Header image positioned as <strong>{{ imagePositionValue }}</strong>.</p>
            </div>
          </D1Window>

          <D1Window
            v-for="imageSizeValue in imageSizeList"
            :key="imageSizeValue"
            :image="{ value: 'star' }"
            :image-attrs="{ alt: `Banner ${imageSizeValue}` }"
            image-position="left"
            :image-size="imageSizeValue"
          >
            <template #control="{ binds }">
              <D1Button :label="`Image Size: ${imageSizeValue}`" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Image Size: {{ imageSizeValue }}</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Banner image with size token <strong>{{ imageSizeValue }}</strong> and object image syntax.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle Modes: Static, Embedded, inDom & Conditional Mount (v-if)">
        <DemoBox>
          <p><strong>Parent Container (Embedded Boundary):</strong></p>
          <D1Window embedded>
            <template #control="{ binds }">
              <D1Button label="Open Embedded Window" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>This window renders inside its parent container without teleporting to document body.</p>
            </div>
          </D1Window>
        </DemoBox>

        <DemoFlex align="center">
          <D1Window in-dom>
            <template #control="{ binds }">
              <D1Button label="SSR Persistent inDom Window" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Always-Mounted Window (inDom)</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Keeps window DOM structure mounted for SSR pre-rendering and instant hydration.</p>
            </div>
          </D1Window>

          <D1Button label="Toggle Lifecycle Mount" @click="isLifecycleMounted = !isLifecycleMounted"/>
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
          <D1Window v-if="isLifecycleMounted" in-dom>
            <template #control="{ binds }">
              <D1Button label="Conditional Mounted Window" secondary v-bind="binds"/>
            </template>
            <div class="demo-window-page__content">
              <p>Conditional v-if lifecycle test window.</p>
            </div>
          </D1Window>
        </DemoFlex>

        <D1Window :static-mode="true" adaptive="static">
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
            :label="`Allow Close: ${isCloseAllowed}`"
            secondary
            @click="isCloseAllowed = !isCloseAllowed"
          />
          <D1Window
            :preparation="onPreparation"
            :before-opening="onBeforeOpening"
            :opening="onOpening"
            :before-closing="onBeforeClosing"
            :closing="onClosing"
          >
            <template #control="{ binds }">
              <D1Button label="Open Guarded Window" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Guarded Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Closing checks the reactive <strong>Allow Close</strong> flag ({{ isCloseAllowed }}). Toggle it to allow or block dismissal.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Allow & Close"
                  secondary
                  @click="isCloseAllowed = true"
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
        <DemoValue label="Last Hook" :value="hookHistory"/>
      </D1Group>

      <D1Group label="Programmatic Control (v-model:open)">
        <DemoFlex>
          <D1Button
            :label="isOpenControlled ? 'Close via State' : 'Open via State'"
            primary
            @click="isOpenControlled = !isOpenControlled"
          />
        </DemoFlex>
        <D1Window v-model:open="isOpenControlled">
          <template #title>
            <h3 class="demo-window-page__title">Controlled Window</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Controlled externally via reactive v-model:open binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-window-page__footer">
              <D1Button label="Close via v-model" primary :class="classesWindow.close"/>
            </div>
          </template>
        </D1Window>
        <DemoValue :value="isOpenControlled"/>
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <DemoFlex>
          <D1Button label="Open (toOpen)" @click="windowReference?.toOpen()"/>
          <D1Button label="Open (setOpen)" @click="windowReference?.setOpen(true)"/>
          <D1Button label="Close (toClose)" @click="windowReference?.toClose()"/>
          <D1Button label="Close (setOpen false)" @click="windowReference?.setOpen(false)"/>
          <D1Button label="Toggle (toggle)" @click="windowReference?.toggle()"/>
        </DemoFlex>
        <D1Window id="demo-expose-window" ref="windowReference">
          <template #title>
            <h3 class="demo-window-page__title">Exposed Methods Window</h3>
          </template>
          <div class="demo-window-page__content">
            <p>Controlled programmatically via exposed instance methods: toOpen, toClose, setOpen, and toggle.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-window-page__footer">
              <D1Button label="Close" primary :class="classesWindow.close"/>
            </div>
          </template>
        </D1Window>
        <DemoValue :value="exposeStatus"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Empty, 0, Long Text, Unicode, XSS, Narrow Container)">
        <DemoFlex>
          <D1Window>
            <template #control="{ binds }">
              <D1Button label="Empty & Zero Content Window" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">{{ '' }}</h3>
            </template>
            <div class="demo-window-page__content">
              <p data-testid="window-empty-whitespace">{{ '   ' }}</p>
              <p data-testid="window-numeric-zero">{{ 0 }}</p>
            </div>
          </D1Window>

          <D1Window width="sm">
            <template #control="{ binds }">
              <D1Button label="Long, Unicode & XSS Content Window" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Привет / Học tiếng Việt / 🚀</h3>
            </template>
            <div class="demo-window-page__content">
              <p>{{ longSentenceText }}</p>
              <p class="demo-window-page__unbroken">{{ longUnbrokenText }}</p>
              <p data-testid="window-xss-text">{{ xssPayload }}</p>
            </div>
          </D1Window>
        </DemoFlex>

        <DemoBox class="demo-window-page__narrow">
          <D1Window static-mode adaptive="static" embedded>
            <template #title>
              <h3 class="demo-window-page__title">Narrow Static Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p class="demo-window-page__unbroken">{{ longUnbrokenText }}</p>
              <p>Привет / Học tiếng Việt / 🚀</p>
            </div>
          </D1Window>
        </DemoBox>
      </D1Group>

      <D1Group label="Events Tracking">
        <DemoFlex>
          <D1Window
            image="home"
            height="sm"
            :scrollbar-attrs="{ visible: true }"
            @window="handleWindowEmit"
            @update:open="handleUpdateOpen"
            @load="handleImageLoad"
            @scrollbar-edge="handleScrollbarEdge"
            @scrollbar-reach-bottom="handleScrollbarReachBottom"
          >
            <template #control="{ binds }">
              <D1Button label="Trigger Window Events" secondary v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Event-Tracked Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Emits <code>@window</code>, <code>@update:open</code>, <code>@load</code>, and scrollbar events.</p>
              <p>{{ longSentenceText }}</p>
              <p>{{ longSentenceText }}</p>
              <p>{{ longSentenceText }}</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Window>
        </DemoFlex>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-window-page {
  &__title {
    padding: ui.v('?sys.spacing.md') ui.v('?sys.spacing.lg') 0;
    margin: 0;
  }

  &__content {
    padding: ui.v('?sys.spacing.md') ui.v('?sys.spacing.lg');
    display: flex;
    flex-direction: column;
    gap: ui.v('?sys.spacing.xs');
  }

  &__footer {
    padding: ui.v('?sys.spacing.sm') ui.v('?sys.spacing.lg') ui.v('?sys.spacing.md');
    display: flex;
    justify-content: flex-end;
    gap: ui.v('?sys.spacing.md');
  }

  &__target {
    padding: 8px 12px;
    background: ui.v('?sys.background.3');
    border-radius: 4px;
    font-weight: 600;
  }

  &__narrow {
    max-width: 240px;
  }

  &__unbroken {
    overflow-wrap: anywhere;
  }
}
</style>
