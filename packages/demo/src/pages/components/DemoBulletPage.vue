<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'

const basicList = [
  'First standard list item',
  'Second standard list item',
  'Third standard list item'
]

const htmlContent = `
  <li>Custom HTML List Item A</li>
  <li>Custom HTML List Item B</li>
  <li>Custom HTML List Item C</li>
`
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Bullet">
    <D1Section>
      <D1Group label="Basic List (Array)">
        <DemoFlex direction="column">
          <D1Bullet :list="basicList" />
        </DemoFlex>
      </D1Group>

      <D1Group label="HTML List">
        <DemoFlex direction="column">
          <D1Bullet :html="htmlContent" />
        </DemoFlex>
      </D1Group>

      <D1Group label="List Item Customization (Attributes)">
        <DemoFlex direction="column">
          <D1Bullet
            :list="basicList"
            :itemAttrs="{ size: 'lg', palette: 'blue' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Standalone Bullet Items">
        <DemoFlex direction="column">
          <D1Bullet>
          <D1BulletItem description="Small item with primary palette" size="sm" palette="red" />
          <D1BulletItem description="Medium item with green palette" size="md" palette="green" />
          <D1BulletItem description="Large item with orange palette" size="lg" palette="orange" />
          </D1Bullet>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
