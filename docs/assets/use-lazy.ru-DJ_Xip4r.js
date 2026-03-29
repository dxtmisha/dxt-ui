import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/# Ленивая загрузка элементов`}),`
`,(0,c.jsx)(n.h1,{id:`отслеживание-видимости-элементов-ленивая-загрузка`,children:`Отслеживание видимости элементов (Ленивая загрузка)`}),`
`,(0,c.jsxs)(n.p,{children:[`Это семейство хуков предоставляет производительную обертку над нативным браузерным API `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`. Они используются для отслеживания появления DOM-элементов в зоне видимости экрана (или с заданным отступом).`]}),`
`,(0,c.jsx)(n.p,{children:`Главные сценарии применения:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивая загрузка изображений`}),`: загружать картинки только тогда, когда пользователь почти доскроллил до них.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Бесконечная лента (Infinite Scroll)`}),`: подгружать новые данные при приближении к концу списка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анимации при прокрутке`}),`: запускать эффекты только тогда, когда блок реально виден глазам пользователя.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`особенности-и-какой-хук-выбрать`,children:`Особенности и какой хук выбрать?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`}),` (Рекомендуемый)`]}),`: "Умный" синглтон-хук. Он `,(0,c.jsx)(n.strong,{children:`переиспользует`}),` один и тот же `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` для всех элементов, у которых совпадает настройка `,(0,c.jsx)(n.code,{children:`rootMargin`}),`. Это кардинально экономит потребление памяти и CPU. Если у вас список из 1000 ленивых картинок, будет создан только 1 обсервер, а не 1000.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`useLazyRef`}),` (Для сложных задач)`]}),`: Низкоуровневый базовый хук. Создает строго `,(0,c.jsx)(n.strong,{children:`индивидуальный`}),` `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` для конкретной задачи. Полезен, когда вам нужны специфические настройки (например, сложный массив `,(0,c.jsx)(n.code,{children:`threshold`}),`, кастомный `,(0,c.jsx)(n.code,{children:`root`}),` элемент) или полный ручной контроль над жизнью обсервера через метод `,(0,c.jsx)(n.code,{children:`disconnect`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,c.jsxs)(n.h3,{id:`1-массовое-отслеживание-uselazyitembymarginref`,children:[`1. Массовое отслеживание (`,(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Самый частый способ работы. Указываете элемент и желаемый отступ (на каком расстоянии до экрана сработает триггер). Возвращает реактивный флаг видимости.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<script setup lang="ts">
import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const imageRef = ref<HTMLElement>()

// Параметр '128px' означает, что статус станет true, 
// когда до элемента останется 128px скролла.
const { lazyItemStatus } = useLazyItemByMarginRef(imageRef, '128px')
<\/script>

<template>
  <!-- Рендерим тяжелый контент только если мы к нему приблизились -->
  <img 
    ref="imageRef" 
    :src="lazyItemStatus ? 'heavy-image.jpg' : 'placeholder.jpg'" 
  />
</template>
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-индивидуальный-обсервер-uselazyref`,children:[`2. Индивидуальный обсервер (`,(0,c.jsx)(n.code,{children:`useLazyRef`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Используется для точечных задач со специфическими настройками API `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const myContainer = ref<HTMLElement>()

// 1. Создаем уникальный обсервер
const observer = useLazyRef({
  root: document.getElementById('scrollable-area'),
  rootMargin: '0px',
  threshold: [0, 0.5, 1.0] // Отслеживаем каждые 50% видимости
})

// 2. Добавляем элемент для слежения
const isVisible = observer.addLazyItem(myContainer)

// 3. Вы можете получить сырые данные IntersectionObserverEntry:
// observer.getItem(myContainer.value)

// 4. Ручная очистка при необходимости:
// observer.removeLazyItem(myContainer.value)
// observer.disconnectLazy()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};