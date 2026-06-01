<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AccordionExpose } from '@dxtmisha/constructor/Accordion'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()

/** Reactive value for manual v-model control / Реактивное значение для ручного управления v-model */
const openManual = ref(false)

/** Ref to the Accordion component instance / Ссылка на экземпляр компонента Accordion */
const accordionRef = ref<AccordionExpose | null>(null)

/** Reactive value for printing the component status / Реактивное значение для вывода статуса компонента */
const statusValue = computed<string>(() => {
  if (accordionRef.value) {
    const hasMotionElement = !!accordionRef.value.getMotionTransformElement()
    return `isOpen: ${accordionRef.value.getOpen()}, isShow: ${accordionRef.value.isShow()}, hasMotionElement: ${hasMotionElement}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Accordion">
    <D1Section>
      <D1Group label="Basic">
        <D1Accordion
          label="Default Accordion"
          description="Click header to toggle expansion / Нажмите на заголовок для открытия"
        >
          <span>This is the main expandable content of the Accordion. It opens and closes smoothly with a transition effect. By default, it features a border-divider.</span>
        </D1Accordion>

        <D1Accordion
          label="Without Divider"
          description="Divider property set to false / Свойство divider установлено в false"
          :divider="false"
        >
          <span>This accordion has the divider hidden. Useful for minimal or stacked list items.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="Icons and Arrow Customization">
        <D1Accordion
          label="Accordion with Left Icon"
          description="Features a custom start icon / Содержит иконку в начале"
          icon="settings"
        >
          <span>An icon can be defined to appear on the left side of the header.</span>
        </D1Accordion>

        <D1Accordion
          label="Custom Expand Arrow"
          description="Custom arrow indicator / Кастомный индикатор раскрытия"
          iconArrowDown="arrow_downward"
        >
          <span>The dropdown indicator icon can be changed using the iconArrowDown property.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="V-Model Control">
        <DemoFlex>
          <D1Button
            :label="openManual ? 'Close' : 'Open'"
            @click="openManual = !openManual"
          />
        </DemoFlex>
        <D1Accordion
          label="V-Model Controlled"
          v-model:open="openManual"
        >
          <span>This accordion's state is bound to a button using v-model:open. Try clicking either the button or the header.</span>
        </D1Accordion>
        <DemoValue :value="openManual"/>
      </D1Group>

      <D1Group label="Control via Ref Methods">
        <DemoFlex>
          <D1Button
            label="Open (toOpen)"
            @click="accordionRef?.toOpen()"
          />
          <D1Button
            label="Open (setOpen)"
            @click="accordionRef?.setOpen(true)"
          />
          <D1Button
            label="Close (toClose)"
            @click="accordionRef?.toClose()"
          />
          <D1Button
            label="Close (setOpen false)"
            @click="accordionRef?.setOpen(false)"
          />
          <D1Button
            label="Toggle (toggle)"
            @click="accordionRef?.toggle()"
          />
        </DemoFlex>
        <D1Accordion
          ref="accordionRef"
          label="Programmatic Control"
          description="Controlled via component's exposed methods / Управляется через экспортированные методы"
        >
          <span>This component is controlled using exposed methods: toOpen, toClose, toggle, setOpen, getOpen, isShow, and getMotionTransformElement. The computed status below updates reactively.</span>
        </D1Accordion>
        <DemoValue :value="statusValue"/>
      </D1Group>

      <D1Group label="Custom Slots">
        <D1Accordion>
          <template #label>
            <strong style="color: var(--d1-sys-palette-primary)">Custom Colored Label Slot</strong>
          </template>
          <template #description>
            <span style="font-style: italic">Custom italic description slot</span>
          </template>
          <template #caption>
            <span style="font-size: 0.8rem; opacity: 0.7">Header Caption Slot</span>
          </template>
          <template #default>
            <span>You can customize the accordion header and body extensively using slots: #label, #description, #caption, #trailing, and #default.</span>
          </template>
        </D1Accordion>
      </D1Group>

      <D1Group label="Header Cell Customization">
        <D1Accordion
          label="Customized Header Cell Attributes"
          description="Primary styling applied via cellAttrs / Основные стили через cellAttrs"
          :cellAttrs="{ primary: true }"
        >
          <span>The cellAttrs property allows you to customize the underlying Cell component used for the header.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="Events">
        <D1Accordion
          label="Event Tracking"
          @transform="onEvent('transform')"
          @transform-lite="onEvent('transformLite')"
        >
          <span>This accordion triggers transform events when it expands or collapses. Check the values below.</span>
        </D1Accordion>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
