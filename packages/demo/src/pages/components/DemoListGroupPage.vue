<script setup lang="ts">
import { ref } from 'vue'
import type { ListGroupExpose, ListGroupSlotsPropsInclude } from '@dxtmisha/constructor/ListGroup'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isOpenControlled = ref<boolean>(false)
const blockedTriggerCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

const listGroupRef = ref<ListGroupExpose | null>(null)
const exposeStatus = ref<string>('Not checked')

const nestedListItems = [
  { label: 'Integrated Item One', value: 'item-1', icon: 'star' },
  { label: 'Integrated Item Two', value: 'item-2', icon: 'bookmark' }
]

const checkExposeOpen = (): void => {
  exposeStatus.value = listGroupRef.value
    ? `getOpen(): ${listGroupRef.value.getOpen()}`
    : 'Ref not initialized'
}

const handleBlockedClick = (): void => {
  blockedTriggerCount.value += 1
}

const formatSlotPropsSummary = (slotProps: ListGroupSlotsPropsInclude): string => {
  return JSON.stringify({
    open: slotProps.open,
    isOpen: slotProps.isOpen,
    isShow: slotProps.isShow,
    idControl: slotProps.idControl,
    idBody: slotProps.idBody,
    binds: slotProps.binds
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ListGroup">
    <D1Section class="demo-list-group-page">
      <D1Group label="Basic">
        <DemoBox>
          <D1ListGroup>
            <template #head="{ open }">
              <D1ListItem
                label="Collapsible Group"
                :caption="open ? 'Expanded' : 'Collapsed'"
                icon="folder"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Overview" icon="article"/>
              <D1ListItem label="Settings" icon="settings"/>
              <D1ListItem label="Members" icon="group"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Open State & Dynamic Controls">
        <DemoFlex>
          <D1Button
            label="Set open=true"
            size="sm"
            outline
            @click="isOpenControlled = true"
          />
          <D1Button
            label="Set open=false"
            size="sm"
            outline
            @click="isOpenControlled = false"
          />
          <D1Button
            :label="isOpenControlled ? 'Toggle (Close)' : 'Toggle (Open)'"
            size="sm"
            @click="isOpenControlled = !isOpenControlled"
          />
        </DemoFlex>
        <DemoValue label="open" :value="isOpenControlled"/>

        <DemoBox>
          <D1ListGroup :open="isOpenControlled">
            <template #head="{ open }">
              <D1ListItem
                label="Controlled Open Group"
                :caption="open ? 'Open' : 'Closed'"
                icon="tune"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="First Item" icon="check"/>
              <D1ListItem label="Second Item" icon="check"/>
            </template>
          </D1ListGroup>
        </DemoBox>

        <DemoBox>
          <D1ListGroup :open="true">
            <template #head="{ open }">
              <D1ListItem
                label="Initially Open Group"
                :caption="open ? 'Open' : 'Closed'"
                icon="lock_open"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Visible on Mount" icon="visibility"/>
              <D1ListItem label="Always Expanded when open=true" icon="layers"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Dividers (Group & ListItem Adjacency)">
        <DemoBox>
          <D1ListGroup>
            <template #head="{ open }">
              <D1ListItem
                label="First Group"
                icon="looks_one"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Item 1.1"/>
              <D1ListItem label="Item 1.2"/>
            </template>
          </D1ListGroup>

          <D1ListGroup divider>
            <template #head="{ open }">
              <D1ListItem
                label="Second Group (divider=true)"
                icon="looks_two"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Item 2.1"/>
              <D1ListItem label="Item 2.2"/>
            </template>
          </D1ListGroup>

          <D1ListGroup :divider="false">
            <template #head="{ open }">
              <D1ListItem
                label="Third Group (divider=false)"
                icon="looks_3"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Item 3.1"/>
              <D1ListItem label="Item 3.2"/>
            </template>
          </D1ListGroup>

          <D1ListItem label="Preceding ListItem" icon="list"/>
          <D1ListGroup divider>
            <template #head="{ open }">
              <D1ListItem
                label="Group After ListItem (divider=true)"
                icon="subdirectory_arrow_right"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Item 4.1"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Blocked & Disabled Trigger">
        <DemoBox>
          <D1ListGroup>
            <template #head="{ open }">
              <D1ListItem
                label="Disabled Group Header"
                :caption="open ? 'Expanded' : 'Locked Closed'"
                icon="block"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                disabled
                tag="button"
                @click="handleBlockedClick"
              />
            </template>
            <template #list>
              <D1ListItem label="Should remain hidden"/>
            </template>
          </D1ListGroup>
        </DemoBox>
        <DemoValue label="Blocked Trigger Clicks" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Slots & Scoped Bindings">
        <DemoBox>
          <D1ListGroup>
            <template #head="slotProps">
              <D1ListItem
                v-bind="slotProps.binds"
                label="Scoped Slot Group"
                :description="formatSlotPropsSummary(slotProps)"
                icon="data_object"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="slotProps.open"
                tag="button"
              />
            </template>
            <template #list>
              <D1List :list="nestedListItems" selection-style="checkmark"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Nested Groups">
        <DemoBox>
          <D1ListGroup :open="true">
            <template #head="{ open }">
              <D1ListItem
                label="Parent Category"
                icon="account_tree"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Root Item" icon="subdirectory_arrow_right"/>
              <D1ListGroup divider>
                <template #head="{ open: childOpen }">
                  <D1ListItem
                    label="Nested Child Group"
                    :caption="childOpen ? 'Expanded' : 'Collapsed'"
                    icon="folder_open"
                    icon-trailing="keyboard_arrow_down"
                    :icon-turn="childOpen"
                    tag="button"
                  />
                </template>
                <template #list>
                  <D1ListItem label="Nested Leaf A" icon="label"/>
                  <D1ListItem label="Nested Leaf B" icon="label"/>
                </template>
              </D1ListGroup>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Expose">
        <DemoFlex>
          <D1Button label="Check getOpen()" size="sm" outline @click="checkExposeOpen"/>
          <DemoValue label="expose" :value="exposeStatus"/>
        </DemoFlex>
        <DemoBox>
          <D1ListGroup ref="listGroupRef" divider>
            <template #head="{ open }">
              <D1ListItem
                label="Inspectable Group"
                :caption="open ? 'Expanded' : 'Collapsed'"
                icon="code"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Expose Item 1"/>
              <D1ListItem label="Expose Item 2"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility (ARIA & Keyboard)">
        <DemoBox>
          <D1ListGroup aria-label="Workspace navigation group">
            <template #head="{ open, binds }">
              <D1ListItem
                v-bind="binds"
                label="Accessible Group Trigger"
                :caption="open ? 'Expanded (Enter/Space to collapse)' : 'Collapsed (Enter/Space to expand)'"
                icon="accessibility_new"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Keyboard Item 1" tag="button"/>
              <D1ListItem label="Keyboard Item 2" tag="button"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1ListGroup>
            <template #head="{ open }">
              <D1ListItem
                label="Empty List Slot"
                :caption="open ? 'Open (no items)' : 'Closed'"
                icon="inbox"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list/>
          </D1ListGroup>

          <D1ListGroup divider :open="true">
            <template #head="{ open }">
              <D1ListItem
                :label="0"
                caption="Numeric zero label"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="" description="Empty label item"/>
              <D1ListItem label="   " description="Whitespace label item"/>
              <D1ListItem :label="0" description="Numeric zero list item"/>
              <D1ListItem label="Tiếng Việt / Кириллица / 🚀"/>
              <D1ListItem label="<img src=x onerror=alert(1)>"/>
            </template>
          </D1ListGroup>
        </DemoBox>

        <DemoBox class="demo-list-group-page__narrow" size="sm">
          <D1ListGroup :open="true">
            <template #head="{ open }">
              <D1ListItem
                label="Very long multi-sentence group title verifying wrapping inside narrow 240px box"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"/>
            </template>
          </D1ListGroup>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1ListGroup :open="true">
            <template #head="{ open }">
              <D1ListItem
                label="Mounted ListGroup"
                icon-trailing="keyboard_arrow_down"
                :icon-turn="open"
                tag="button"
              />
            </template>
            <template #list>
              <D1ListItem label="Mounted Child Item"/>
            </template>
          </D1ListGroup>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-list-group-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
