import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`метки-шаги-и-притягивание-marks`,children:[`Метки, шаги и притягивание (`,(0,c.jsx)(t.code,{children:`marks`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`marks`}),` позволяет задавать визуальные деления и текстовые подписи на шкале слайдера, а также связывать числовые позиции с пользовательскими значениями любого типа.`]}),`
`,(0,c.jsx)(t.h3,{id:`форматы-передачи-меток`,children:`Форматы передачи меток`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`marks`}),` принимает данные в нескольких форматах:`]}),`
`,(0,c.jsx)(t.h4,{id:`простой-массив-чисел`,children:`Простой массив чисел`}),`
`,(0,c.jsx)(t.p,{children:`Если передать простой массив чисел, слайдер построит деления в указанных точках и использует сами числа в качестве подписей.`}),`
`,(0,c.jsx)(i,{code:`
<Slider :marks="[0, 20, 50, 80, 100]" />
`,language:`html`}),`
`,(0,c.jsx)(t.h4,{id:`массив-объектов-расширенная-настройка`,children:`Массив объектов (расширенная настройка)`}),`
`,(0,c.jsx)(t.p,{children:`Каждый элемент массива может быть объектом со следующими свойствами:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mark`}),` `,(0,c.jsx)(t.em,{children:`(number)`}),` — числовая позиция метки на шкале (от `,(0,c.jsx)(t.code,{children:`min`}),` до `,(0,c.jsx)(t.code,{children:`max`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label`}),` `,(0,c.jsx)(t.em,{children:`(string)`}),` — текстовая подпись для отображения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` `,(0,c.jsx)(t.em,{children:`(any)`}),` — пользовательские данные или текстовый идентификатор, привязанный к этой метке.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const planMarks = [
{ mark: 0, value: 'free', label: 'Бесплатный' },
{ mark: 50, value: 'pro', label: 'Pro' },
{ mark: 100, value: 'enterprise', label: 'Enterprise' }
]
<\/script>

<template>
<Slider :marks="planMarks" magnet />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h4,{id:`объект-словарь-ключ-значение`,children:`Объект-словарь (ключ-значение)`}),`
`,(0,c.jsx)(t.p,{children:`Метки можно передать в виде объекта, где ключами являются позиции или идентификаторы:`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const speedMarks = {
0: '0 км/ч',
60: '60 км/ч',
110: '110 км/ч (Макс)'
}
<\/script>

<template>
<Slider :marks="speedMarks" />
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.h3,{id:`кастомные-ключи-keylabel-и-keyvalue`,children:[`Кастомные ключи (`,(0,c.jsx)(t.code,{children:`keyLabel`}),` и `,(0,c.jsx)(t.code,{children:`keyValue`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если структура входящих данных отличается от стандартных полей `,(0,c.jsx)(t.code,{children:`label`}),` и `,(0,c.jsx)(t.code,{children:`value`}),`, можно настроить имена ключей через свойства `,(0,c.jsx)(t.code,{children:`keyLabel`}),` и `,(0,c.jsx)(t.code,{children:`keyValue`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyLabel`}),` — имя свойства объекта, содержащего текст подписи (по умолчанию `,(0,c.jsx)(t.code,{children:`'label'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyValue`}),` — имя свойства объекта, содержащего полезную нагрузку (по умолчанию `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedCategory = ref(2)
const categories = [
{ id: 1, title: 'Эконом', position: 0 },
{ id: 2, title: 'Стандарт', position: 50 },
{ id: 3, title: 'Премиум', position: 100 }
]
<\/script>

<template>
<Slider
  v-model="selectedCategory"
  :marks="categories"
  keyLabel="title"
  keyValue="id"
  magnet
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.h3,{id:`режим-притягивания-magnet-и-шаг-step`,children:[`Режим притягивания (`,(0,c.jsx)(t.code,{children:`magnet`}),`) и шаг (`,(0,c.jsx)(t.code,{children:`step`}),`)`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — определяет дискретный шаг изменения значения при перетаскивании или нажатии клавиш стрелок (по умолчанию `,(0,c.jsx)(t.code,{children:`1`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`magnet`}),` — включается логическим флагом. В режиме `,(0,c.jsx)(t.code,{children:`magnet`}),` ползунок автоматически «прилипает» к ближайшей метке из списка `,(0,c.jsx)(t.code,{children:`marks`}),`, не позволяя выбрать промежуточные значения вне меток.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Ползунок передвигается строго по меткам -->
<Slider
v-model="volume"
:marks="[0, 25, 50, 75, 100]"
magnet
/>
`,language:`html`}),`
`,(0,c.jsxs)(t.h3,{id:`данные-в-событиях-input-и-change`,children:[`Данные в событиях (`,(0,c.jsx)(t.code,{children:`@input`}),` и `,(0,c.jsx)(t.code,{children:`@change`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`При изменении значения события `,(0,c.jsx)(t.code,{children:`@input`}),` и `,(0,c.jsx)(t.code,{children:`@change`}),` передают детальный объект `,(0,c.jsx)(t.code,{children:`detail`}),` со следующей структурой:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail.mark`}),` — числовое значение позиционирования (или массив `,(0,c.jsx)(t.code,{children:`[min, max]`}),` для `,(0,c.jsx)(t.code,{children:`multiple`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail.item`}),` — скомпилированный объект метки (`,(0,c.jsx)(t.code,{children:`{ mark, value, label, style }`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail.value`}),` — пользовательская полезная нагрузка из свойства `,(0,c.jsx)(t.code,{children:`value`}),` метки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Также доступны упрощенные события `,(0,c.jsx)(t.code,{children:`@inputLite`}),` и `,(0,c.jsx)(t.code,{children:`@changeLite`}),`, передающие только чистое значение `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`кастомизация-рендеринга-меток-через-слот-mark`,children:[`Кастомизация рендеринга меток через слот `,(0,c.jsx)(t.code,{children:`#mark`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете настроить внешний вид меток с помощью слота `,(0,c.jsx)(t.code,{children:`#mark`}),`, принимающего объект `,(0,c.jsx)(t.code,{children:`{ item }`}),`:`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Slider :marks="[0, 50, 100]">
  <template #mark="{ item }">
    <span class="custom-mark">
      <strong>{{ item.label }}</strong>
    </span>
  </template>
</Slider>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};