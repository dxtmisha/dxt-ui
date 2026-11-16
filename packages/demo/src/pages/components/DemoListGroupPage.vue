<script setup lang="ts">
import { ref } from 'vue'
import type { ListGroupExpose } from '@dxtmisha/constructor/ListGroup'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isOpenControlled = ref(false)
const listGroupRef = ref<ListGroupExpose | null>(null)
const exposeStatus = ref<string>('Not checked')

const checkExposeOpen = () => {
  exposeStatus.value = listGroupRef.value
    ? `getOpen(): ${listGroupRef.value.getOpen()}`
    : 'Ref not initialized'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ListGroup">
    <D1Section>
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

      <D1Group label="Open State">
        <DemoFlex>
          <D1Button
            :label="isOpenControlled ? 'Set open=false' : 'Set open=true'"
            @click="isOpenControlled = !isOpenControlled"
          />
          <DemoValue label="open" :value="isOpenControlled"/>
        </DemoFlex>

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

      <D1Group label="Dividers">
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
          <D1Button label="Check getOpen()" @click="checkExposeOpen"/>
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
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-list-group-page {
}
</style>
