<script setup lang="ts">
import { ref } from 'vue'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const snackbarRef = ref()

const addSnackbar = (options: any = {}) => {
  const item = {
    label: options.label || 'Notification Title',
    description: options.description || 'This is a description of the notification event.',
    success: options.success,
    error: options.error,
    palette: options.palette,
    icon: options.icon,
    button: options.button,
    actions: options.actions,
    closeButton: options.closeButton !== undefined ? options.closeButton : true
  }

  snackbarRef.value?.add?.({
    data: item
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Snackbar">
    <D1Section>
      <D1Group label="Snackbar Item Types">
        <DemoFlex>
          <D1SnackbarItem label="Default Item" description="Basic notification message" />
          <D1SnackbarItem label="Success State" success description="Operation completed successfully" />
          <D1SnackbarItem label="Error State" error description="Something went wrong" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1SnackbarItem label="Blue Palette" palette="blue" description="Custom palette selection" />
          <D1SnackbarItem label="Amber Palette" palette="amber" description="Custom palette selection" />
          <D1SnackbarItem label="Purple Palette" palette="purple" description="Custom palette selection" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Content & Actions">
        <DemoFlex>
          <D1SnackbarItem
            label="With Icon"
            icon="info"
            description="Notification with a leading icon"
          />
          <D1SnackbarItem
            label="With Action Button"
            button="Undo"
            description="Clickable action on the right"
          />
          <D1SnackbarItem
            label="With Actions List"
            :actions="[{ label: 'Accept', primary: true }, { label: 'Decline' }]"
            description="Multiple actions available"
          />
          <D1SnackbarItem
            label="No Close Button"
            :closeButton="false"
            description="Sticky notification without close icon"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Live Controller (Dynamic)">
        <DemoFlex>
          <D1Button label="Push Success" palette="green" @click="addSnackbar({ label: 'Success!', success: true, icon: 'check_circle' })" />
          <D1Button label="Push Error" palette="red" @click="addSnackbar({ label: 'Error occurred', error: true, icon: 'error' })" />
          <D1Button label="Push with Actions" palette="blue" @click="addSnackbar({ label: 'Update Available', icon: 'system_update', actions: [{ label: 'Install' }] })" />
        </DemoFlex>
        <D1Snackbar ref="snackbarRef"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
