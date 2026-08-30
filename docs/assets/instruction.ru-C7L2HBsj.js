import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`интеграция-компонента`,children:`Интеграция компонента`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),` построен по принципу `,(0,c.jsx)(t.em,{children:`renderless`}),`-архитектуры. Он инкапсулирует сложную логику перемещения и сортировки элементов (вычисление координат, расчеты перемещений, стили сдвигов), но полностью делегирует визуальный рендеринг вашему шаблону через свойства слота по умолчанию.`]}),`
`,(0,c.jsx)(t.p,{children:`Для корректной работы механизма сортировки необходимо связать передаваемые свойства с целевыми DOM-узлами.`}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация-элементов`,children:`Конфигурация элементов`}),`
`,(0,c.jsx)(t.p,{children:`Каждый перетаскиваемый элемент списка или зона сброса должны содержать следующие привязки:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`className`}),` — базовый идентификатор. Добавляется в атрибут `,(0,c.jsx)(t.code,{children:`class`}),`. Необходим для связывания перетаскиваемых элементов и зон сброса с логикой обертки и применения стилей сдвига.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classClick`}),` — идентификатор интерактивной зоны (области захвата). Добавляется в атрибут `,(0,c.jsx)(t.code,{children:`class`}),`. Указывает компоненту, какая именно область элемента (например, иконка ручки переноса) должна инициализировать перетаскивание. Если перенос должен происходить за весь элемент, класс привязывается к самому элементу списка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classPosition`}),` — маркер позиции сортировки. Добавляется в атрибут `,(0,c.jsx)(t.code,{children:`class`}),`. Используется компонентом для вычисления точек вставки элементов во время перемещения. Обязателен для всех сортируемых элементов списка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classDrop`}),` — маркер зоны сброса. Добавляется в атрибут `,(0,c.jsx)(t.code,{children:`class`}),`. Указывает на дополнительные контейнеры (например, корзину для удаления или внешнюю панель сброса), которые могут принимать переносимые элементы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-value`}),` — уникальный ключ элемента (строка). Передается как стандартный HTML-атрибут. Обязателен для идентификации элементов в событиях `,(0,c.jsx)(t.code,{children:`position`}),` и `,(0,c.jsx)(t.code,{children:`drop`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`управление-визуальным-состоянием`,children:`Управление визуальным состоянием`}),`
`,(0,c.jsxs)(t.p,{children:[`В целях достижения плавной анимации и максимальной производительности при перетаскивании `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),` `,(0,c.jsx)(t.strong,{children:`самостоятельно`}),` манипулирует DOM-деревом, напрямую применяя стили трансформации и сдвигая элементы. Это обеспечивает мгновенный отклик интерфейса во время быстрого перемещения.`]}),`
`,(0,c.jsx)(i,{code:`
<DraggableWrapper
@position="onPositionChange"
@drop="onItemDropped"
>
<template #default="{ className, classClick, classPosition, classDrop }">
  <div class="list">
    <div :class="['item', className, classPosition]" data-value="item-1">
      <span :class="classClick">☰</span>
      Элемент 1
    </div>
  </div>
</template>
</DraggableWrapper>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};