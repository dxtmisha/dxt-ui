import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/# Ленивая загрузка элементов`}),`
`,(0,c.jsx)(t.h1,{id:`отслеживание-видимости-элементов-ленивая-загрузка`,children:`Отслеживание видимости элементов (Ленивая загрузка)`}),`
`,(0,c.jsxs)(t.p,{children:[`Это семейство хуков предоставляет производительную обертку над нативным браузерным API `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. Они используются для отслеживания появления DOM-элементов в зоне видимости экрана (или с заданным отступом).`]}),`
`,(0,c.jsx)(t.p,{children:`Главные сценарии применения:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ленивая загрузка изображений`}),`: загружать картинки только тогда, когда пользователь почти доскроллил до них.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Бесконечная лента (Infinite Scroll)`}),`: подгружать новые данные при приближении к концу списка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Анимации при прокрутке`}),`: запускать эффекты только тогда, когда блок реально виден глазам пользователя.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`особенности-и-какой-хук-выбрать`,children:`Особенности и какой хук выбрать?`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`}),` (Рекомендуемый)`]}),`: "Умный" синглтон-хук. Он `,(0,c.jsx)(t.strong,{children:`переиспользует`}),` один и тот же `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` для всех элементов, у которых совпадает настройка `,(0,c.jsx)(t.code,{children:`rootMargin`}),`. Это кардинально экономит потребление памяти и CPU. Если у вас список из 1000 ленивых картинок, будет создан только 1 обсервер, а не 1000.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`useLazyRef`}),` (Для сложных задач)`]}),`: Низкоуровневый базовый хук. Создает строго `,(0,c.jsx)(t.strong,{children:`индивидуальный`}),` `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` для конкретной задачи. Полезен, когда вам нужны специфические настройки (например, сложный массив `,(0,c.jsx)(t.code,{children:`threshold`}),`, кастомный `,(0,c.jsx)(t.code,{children:`root`}),` элемент) или полный ручной контроль над жизнью обсервера через метод `,(0,c.jsx)(t.code,{children:`disconnect`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,c.jsxs)(t.h3,{id:`1-массовое-отслеживание-uselazyitembymarginref`,children:[`1. Массовое отслеживание (`,(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Самый частый способ работы. Указываете элемент и желаемый отступ (на каком расстоянии до экрана сработает триггер). Возвращает реактивный флаг видимости.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
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
`,(0,c.jsxs)(t.h3,{id:`2-индивидуальный-обсервер-uselazyref`,children:[`2. Индивидуальный обсервер (`,(0,c.jsx)(t.code,{children:`useLazyRef`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Используется для точечных задач со специфическими настройками API `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};