<script setup lang="ts">
import { ref } from 'vue'
import type { ListMenuExpose } from '@dxtmisha/constructor/ListMenu'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const windowPayload = ref<string>('None')

const isOpenControlled = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)
const blockedTriggerCount = ref<number>(0)

const listMenuReference = ref<ListMenuExpose | null>(null)
const exposeStatus = ref<string>('Not checked')

const unbrokenText = 'A'.repeat(72)
const xssPayload = '<img src=x onerror=alert(1)>'

const onWindowEvent = (options: WindowEmitOptions): void => {
  windowPayload.value = `id=${options.id}, open=${options.open}`
  onEvent('window', options)
}

const onBlockedClick = (): void => {
  blockedTriggerCount.value += 1
}

const checkExposeState = (): void => {
  exposeStatus.value = listMenuReference.value
    ? `id=${listMenuReference.value.getId()}, open=${listMenuReference.value.getOpen()}, hasControl=${Boolean(listMenuReference.value.getControl())}, hasWindow=${Boolean(listMenuReference.value.getWindowElement())}`
    : 'Reference not initialized'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ListMenu">
    <D1Section class="demo-list-menu-page">
      <D1Group label="Basic">
        <DemoBox>
          <D1ListMenu>
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="File Options"
                :caption="open.value ? 'Open' : 'Closed'"
                icon="folder"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="New File" icon="note_add"/>
              <D1ListItem label="Duplicate" icon="content_copy"/>
              <D1ListItem label="Archive" icon="archive"/>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>

      <D1Group label="Open State">
        <DemoFlex>
          <D1Button
            :label="isOpenControlled ? 'Set open=false' : 'Set open=true'"
            @click="isOpenControlled = !isOpenControlled"
          />
          <DemoValue label="open" :value="isOpenControlled"/>
        </DemoFlex>

        <DemoBox>
          <D1ListMenu :open="isOpenControlled">
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Controlled Menu"
                :caption="open.value ? 'Open' : 'Closed'"
                icon="tune"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Action One" icon="check"/>
              <D1ListItem label="Action Two" icon="check"/>
            </template>
          </D1ListMenu>
        </DemoBox>

        <DemoBox>
          <D1ListMenu
            open
            :window-attrs="{ embedded: true }"
          >
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Initially Open Embedded Menu"
                :caption="open.value ? 'Open' : 'Closed'"
                icon="lock_open"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Visible Item 1" icon="visibility"/>
              <D1ListItem label="Visible Item 2" icon="layers"/>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>

      <D1Group label="Axis">
        <DemoFlex>
          <DemoBox>
            <D1ListMenu axis="y">
              <template #head="{ open, binds }">
                <D1ListItem
                  v-bind="binds"
                  label="Vertical Axis (axis=y)"
                  icon="swap_vert"
                  icon-trailing="keyboard_arrow_down"
                  :icon-turn="open.value"
                  tag="button"
                />
              </template>
              <template #list>
                <D1ListItem label="Top Option"/>
                <D1ListItem label="Bottom Option"/>
              </template>
            </D1ListMenu>
          </DemoBox>

          <DemoBox>
            <D1ListMenu axis="x">
              <template #head="{ open, binds }">
                <D1ListItem
                  v-bind="binds"
                  label="Horizontal Axis (axis=x)"
                  icon="swap_horiz"
                  icon-trailing="keyboard_arrow_right"
                  :icon-turn="open.value"
                  tag="button"
                />
              </template>
              <template #list>
                <D1ListItem label="Side Option A"/>
                <D1ListItem label="Side Option B"/>
              </template>
            </D1ListMenu>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Divider & Disabled">
        <DemoBox>
          <D1ListMenu divider>
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Menu with Divider"
                icon="horizontal_rule"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Divider Item 1"/>
              <D1ListItem label="Divider Item 2"/>
            </template>
          </D1ListMenu>

          <D1ListMenu disabled @window="onBlockedClick">
            <template #head="{ binds }">
              <D1ListItem
                v-bind="binds"
                label="Disabled Menu"
                icon="block"
                icon-trailing="keyboard_arrow_right"
                disabled
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Unreachable Item"/>
            </template>
          </D1ListMenu>
        </DemoBox>
        <DemoValue label="blockedWindowEvents" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Auto Close, Focus Return, Persistent & SSR inDom">
        <DemoFlex>
          <DemoBox>
            <D1ListMenu :auto-close="false" :window-attrs="{ inDom: true }">
              <template #head="{ open, binds }">
                <D1ListItem
                  v-bind="binds"
                  label="Persistent AutoClose=false (inDom)"
                  :caption="open.value ? 'Open' : 'Closed'"
                  icon="push_pin"
                  icon-trailing="keyboard_arrow_right"
                  :icon-turn="open.value"
                  tag="button"
                />
              </template>
              <template #list>
                <D1ListItem label="Keeps open on item click"/>
                <D1ListItem label="Kept in DOM after first open"/>
              </template>
            </D1ListMenu>
          </DemoBox>

          <DemoBox>
            <D1ListMenu disable-focus-return>
              <template #head="{ open, binds }">
                <D1ListItem
                  v-bind="binds"
                  label="Disable Focus Return"
                  :caption="open.value ? 'Open' : 'Closed'"
                  icon="center_focus_weak"
                  icon-trailing="keyboard_arrow_right"
                  :icon-turn="open.value"
                  tag="button"
                />
              </template>
              <template #list>
                <D1ListItem label="Focus Return Disabled 1"/>
                <D1ListItem label="Focus Return Disabled 2"/>
              </template>
            </D1ListMenu>
          </DemoBox>

          <DemoBox>
            <D1ListMenu :window-attrs="{ persistent: true }">
              <template #head="{ open, binds }">
                <D1ListItem
                  v-bind="binds"
                  label="Persistent Window"
                  :caption="open.value ? 'Open' : 'Closed'"
                  icon="lock"
                  icon-trailing="keyboard_arrow_right"
                  :icon-turn="open.value"
                  tag="button"
                />
              </template>
              <template #list>
                <D1ListItem label="Click outside keeps menu open"/>
                <D1ListItem label="Use trigger to close"/>
              </template>
            </D1ListMenu>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Nested Submenus">
        <DemoBox>
          <D1ListMenu axis="y">
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Parent Menu"
                icon="account_tree"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Root Action" icon="bolt"/>
              <D1ListMenu axis="x">
                <template #head="{ open: subOpen, binds: subBinds }">
                  <D1ListItem
                    v-bind="subBinds"
                    label="Nested Submenu"
                    icon="subdirectory_arrow_right"
                    icon-trailing="keyboard_arrow_right"
                    :icon-turn="subOpen.value"
                    tag="button"
                  />
                </template>
                <template #list>
                  <D1ListItem label="Submenu Item A" icon="label"/>
                  <D1ListItem label="Submenu Item B" icon="label"/>
                </template>
              </D1ListMenu>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoBox>
          <D1ListMenu>
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Accessible Menu Trigger"
                :caption="open.value ? 'Expanded' : 'Collapsed'"
                aria-label="Accessible file options menu"
                icon="accessibility_new"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
                tabindex="0"
              />
            </template>
            <template #list>
              <D1ListItem label="Keyboard Item 1" role="menuitem" tabindex="0"/>
              <D1ListItem label="Keyboard Item 2" role="menuitem" tabindex="0"/>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <DemoValue label="eventName" :value="eventName"/>
          <DemoValue label="payload" :value="windowPayload"/>
        </DemoFlex>
        <DemoBox>
          <D1ListMenu @window="onWindowEvent">
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Event Tracker Menu"
                :caption="open.value ? 'Open' : 'Closed'"
                icon="notifications"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Event Option 1"/>
              <D1ListItem label="Event Option 2"/>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>

      <D1Group label="Expose">
        <DemoFlex>
          <D1Button label="setOpen(true)" @click="listMenuReference?.setOpen(true)"/>
          <D1Button label="setOpen(false)" @click="listMenuReference?.setOpen(false)"/>
          <D1Button label="toOpen()" @click="listMenuReference?.toOpen()"/>
          <D1Button label="toClose()" @click="listMenuReference?.toClose()"/>
          <D1Button label="toggle()" @click="listMenuReference?.toggle()"/>
          <D1Button label="Check Expose" @click="checkExposeState"/>
        </DemoFlex>
        <DemoValue label="expose" :value="exposeStatus"/>
        <DemoBox>
          <D1ListMenu ref="listMenuReference">
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Expose Controlled Menu"
                :caption="open.value ? 'Open' : 'Closed'"
                icon="code"
                icon-trailing="keyboard_arrow_right"
                :icon-turn="open.value"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Expose Item 1"/>
              <D1ListItem label="Expose Item 2"/>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox>
            <D1ListMenu>
              <template #head="{ binds }">
                <D1ListItem
                  v-bind="binds"
                  label="Empty List Slot"
                  icon="inbox"
                  tag="button"
                />
              </template>
              <template #list/>
            </D1ListMenu>
          </DemoBox>

          <DemoBox>
            <div class="demo-list-menu-page__narrow">
              <D1ListMenu open :window-attrs="{ embedded: true }">
                <template #head="{ binds }">
                  <D1ListItem
                    v-bind="binds"
                    label="Narrow Container Menu (240px) with Long Wrapping Text"
                    icon="view_column"
                    tag="button"
                  />
                </template>
                <template #list>
                  <D1ListItem label="Học tiếng Việt / Привет мир 🚀🔥✨"/>
                  <D1ListItem :label="unbrokenText"/>
                  <D1ListItem :label="xssPayload"/>
                </template>
              </D1ListMenu>
            </div>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isLifecycleMounted ? 'Unmount ListMenu' : 'Mount ListMenu'"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox>
          <D1ListMenu v-if="isLifecycleMounted">
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Lifecycle Managed Menu"
                :caption="open.value ? 'Open' : 'Closed'"
                icon="autorenew"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Mounted Item A"/>
              <D1ListItem label="Mounted Item B"/>
            </template>
          </D1ListMenu>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-list-menu-page {
  &__narrow {
    max-width: 240px;
  }
}
</style>
