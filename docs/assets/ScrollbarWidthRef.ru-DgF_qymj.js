import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/ScrollbarWidthRef - Ширина скролла`}),`
`,(0,c.jsx)(t.h1,{id:`класс-scrollbarwidthref`,children:`Класс ScrollbarWidthRef`}),`
`,(0,c.jsx)(t.p,{children:`Реактивная надстройка над базовой утилитой для определения параметров полосы прокрутки. Класс позволяет отслеживать как наличие скроллбара (его тип), так и его фактическую ширину в пикселях. Это критично для предотвращения «прыжков» верстки (layout shift) при скрытии или появлении скролла, например, при открытии модальных окон.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивность`}),` — автоматическое обновление значений `,(0,c.jsx)(t.code,{children:`item`}),` и `,(0,c.jsx)(t.code,{children:`width`}),` при получении данных от браузера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматический расчет`}),` — класс самостоятельно инициирует замер ширины скролла сразу после создания экземпляра.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Состояние готовности`}),` — наличие вычисляемого свойства `,(0,c.jsx)(t.code,{children:`is`}),` позволяет безопасно использовать данные только после их инициализации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кроссплатформенность`}),` — корректно определяет «тонкие» и скрывающиеся скроллбары (macOS, мобильные устройства).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(t.code,{children:`ScrollbarWidthRef`}),` и запускает асинхронный процесс замера ширины скролла.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`Нет`})}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()
`})}),`
`,(0,c.jsx)(t.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsx)(t.h3,{id:`состояние`,children:`Состояние`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<boolean | undefined>`}),` — Флаг, определяющий результат проверки `,(0,c.jsx)(t.code,{children:`ScrollbarWidth.is()`}),`. Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если скроллбар считается «специальным» (например, автоскрывающийся в macOS или мобильный, где ширина обычно `,(0,c.jsx)(t.code,{children:`<= 8px`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: Ref<number>`}),` — Фактическая ширина полосы прокрутки в пикселях. По умолчанию `,(0,c.jsx)(t.code,{children:`0`}),`. Обновляется асинхронно после замера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is: Computed<boolean>`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, когда расчет ширины завершен и значения `,(0,c.jsx)(t.code,{children:`item`}),` и `,(0,c.jsx)(t.code,{children:`width`}),` актуальны.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`динамическая-компенсация-скролла-в-css`,children:`Динамическая компенсация скролла в CSS`}),`
`,(0,c.jsx)(t.p,{children:`Использование реактивной ширины для создания CSS-переменной, которая компенсирует отступ при блокировке скролла.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<template>
  <div :style="style" class="container">
    Контент с динамическим отступом
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

// Рассчитываем переменную только после того, как ширина определена
const style = computed(() => ({
  '--scrollbar-width': scrollbar.is.value ? \`\${scrollbar.width.value}px\` : '0px'
}))
<\/script>

<style scoped>
.container {
  /* Пример использования для отступа справа */
  padding-right: var(--scrollbar-width);
}
</style>
`})}),`
`,(0,c.jsx)(t.h3,{id:`отслеживание-типа-скроллбара`,children:`Отслеживание типа скроллбара`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { watch } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

watch(() => scrollbar.is.value, (ready) => {
  if (ready) {
    if (scrollbar.item.value) {
      console.log('Используется системный/скрывающийся скроллбар')
    } else {
      console.log(\`Стандартный скроллбар шириной \${scrollbar.width.value}px\`)
    }
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};