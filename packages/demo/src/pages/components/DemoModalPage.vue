<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WindowExposeInclude } from '@dxtmisha/constructor/Window'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openBasic = ref(false)

const openSm = ref(false)
const openMd = ref(false)
const openLg = ref(false)
const openXl = ref(false)
const openAuto = ref(false)

const openImageTop = ref(false)
const openImageLeft = ref(false)

const openPersistent = ref(false)
const openNoCloseButton = ref(false)

const openVModel = ref(false)

const openEvents = ref(false)

const modalRef = ref<WindowExposeInclude | null>(null)

const statusValue = computed<string>(() => {
  if (modalRef.value) {
    const id = modalRef.value.getId()
    const open = modalRef.value.getOpen()
    const hasControl = !!modalRef.value.getControl()
    const hasWindowEl = !!modalRef.value.getWindowElement()
    return `getId(): "${id}", getOpen(): ${open}, hasControl: ${hasControl}, hasWindowElement(): ${hasWindowEl}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Modal">
    <D1Section>
      <D1Group label="Basic Usage">
        <DemoFlex>
          <D1Modal v-model:open="openBasic">
            <template #control="{ binds }">
              <D1Button
                label="Open Basic Modal"
                primary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Basic Modal Dialog</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This is a standard modal dialog. It aligns in the center of the screen, darkens the background with a scrim overlay, and traps focus inside.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Cancel"
                  secondary
                  :class="classesWindow.close"
                />
                <D1Button
                  label="Confirm"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Predefined Widths">
        <DemoFlex>
          <!-- Width SM -->
          <D1Modal v-model:open="openSm" width="sm">
            <template #control="{ binds }">
              <D1Button
                label="Small (sm)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Small Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is configured with <code>width="sm"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <!-- Width MD -->
          <D1Modal v-model:open="openMd" width="md">
            <template #control="{ binds }">
              <D1Button
                label="Medium (md)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Medium Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal has <code>width="md"</code> configuration (standard default size).</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <!-- Width LG -->
          <D1Modal v-model:open="openLg" width="lg">
            <template #control="{ binds }">
              <D1Button
                label="Large (lg)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Large Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is configured with <code>width="lg"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <!-- Width XL -->
          <D1Modal v-model:open="openXl" width="xl">
            <template #control="{ binds }">
              <D1Button
                label="Extra Large (xl)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Extra Large Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is configured with <code>width="xl"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <!-- Width Auto -->
          <D1Modal v-model:open="openAuto" width="auto">
            <template #control="{ binds }">
              <D1Button
                label="Auto Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Auto Width Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal fits to its content width dynamically using <code>width="auto"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Image & Layout Positions">
        <DemoFlex>
          <!-- Image Position Top -->
          <D1Modal
            v-model:open="openImageTop"
            image="https://picsum.photos/600/300?random=1"
            imagePosition="top"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Position Top"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Top Image Header</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal has a top image header styled dynamically via <code>imagePosition="top"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <!-- Image Position Left -->
          <D1Modal
            v-model:open="openImageLeft"
            image="https://picsum.photos/300/400?random=2"
            imagePosition="left"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Position Left"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Left Image</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal places the image on the left column using <code>imagePosition="left"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Persistent & Dismiss Behavior">
        <DemoFlex>
          <!-- Persistent -->
          <D1Modal
            v-model:open="openPersistent"
            :persistent="true"
          >
            <template #control="{ binds }">
              <D1Button
                label="Persistent Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Persistent Dialog</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is persistent. It cannot be dismissed by clicking outside the scrim or hitting Esc. It must be explicitly dismissed.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Dismiss Explicitly"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <!-- Hiding Close Button (barsBackHide) -->
          <D1Modal
            v-model:open="openNoCloseButton"
            :barsBackHide="true"
          >
            <template #control="{ binds }">
              <D1Button
                label="Hide Header Close Button"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">No Header Close Button</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal hides the close icon in the top right corner by setting <code>:barsBackHide="true"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Dismiss"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Control (V-Model)">
        <DemoFlex>
          <D1Button
            :label="openVModel ? 'Close Programmatically' : 'Open Programmatically'"
            primary
            @click="openVModel = !openVModel"
          />
        </DemoFlex>
        <D1Modal v-model:open="openVModel">
          <template #title>
            <h3 class="demo-modal-page__title">Controlled Modal</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal is dynamically driven by a simple external reactive <code>v-model:open</code> binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-modal-page__footer">
              <D1Button
                label="Close via v-model"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Modal>
        <DemoValue :value="openVModel" />
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Modal
            v-model:open="openEvents"
            @window="onEvent('window event')"
          >
            <template #control="{ binds }">
              <D1Button
                label="Open Event Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Event Logger</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal fires standard events during lifecycle transitions (e.g., open/close).</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
        <DemoValue :value="eventName" />
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <DemoFlex>
          <D1Button
            label="Open (toOpen)"
            @click="modalRef?.toOpen()"
          />
          <D1Button
            label="Open (setOpen)"
            @click="modalRef?.setOpen(true)"
          />
          <D1Button
            label="Close (toClose)"
            @click="modalRef?.toClose()"
          />
          <D1Button
            label="Close (setOpen false)"
            @click="modalRef?.setOpen(false)"
          />
          <D1Button
            label="Toggle (toggle)"
            @click="modalRef?.toggle()"
          />
        </DemoFlex>
        <D1Modal
          ref="modalRef"
          id="demo-expose-modal"
          @window="onEvent('window')"
        >
          <template #title>
            <h3 class="demo-modal-page__title">Expose Methods Modal</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal dialog is controlled programmatically via exposed methods like `toOpen`, `toClose`, `toggle`, `setOpen`, and `getWindowElement`.</p>
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
        </D1Modal>
        <DemoValue :value="statusValue" />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-modal-page {
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
}
</style>
