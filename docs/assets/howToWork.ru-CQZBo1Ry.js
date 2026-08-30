import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`интеграция-компонента`,children:`Интеграция компонента`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент `,(0,c.jsx)(t.code,{children:`SelectableArea`}),` построен по принципу `,(0,c.jsx)(t.em,{children:`renderless`}),`-архитектуры. Он инкапсулирует сложную логику выделения (вычисление координат, работу с лассо, обработку модификаторов клавиатуры), но полностью делегирует визуальный рендеринг вашему шаблону через свойства слота по умолчанию.`]}),`
`,(0,c.jsx)(t.p,{children:`Для корректной работы механизма выделения необходимо связать передаваемые свойства с целевыми DOM-узлами.`}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация-элементов`,children:`Конфигурация элементов`}),`
`,(0,c.jsx)(t.p,{children:`Каждый интерактивный элемент внутри области должен содержать следующие привязки:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`className`}),` — базовый идентификатор. Добавляется в атрибут `,(0,c.jsx)(t.code,{children:`class`}),`. Необходим для регистрации элемента во внутренней системе координат компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classClick`}),` — идентификатор интерактивной зоны. Добавляется в атрибут `,(0,c.jsx)(t.code,{children:`class`}),`. Указывает компоненту, какая именно область элемента должна реагировать на события мыши.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-value`}),` — уникальный ключ элемента (строка или число). Передается как стандартный HTML-атрибут. Именно это значение добавляется в массив `,(0,c.jsx)(t.code,{children:`selected`}),` при выделении.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onClick`}),` — внутренний обработчик событий. Передается в директиву `,(0,c.jsx)(t.code,{children:`@click`}),` и отвечает за логику выделения одиночным кликом, а также множественного выбора с использованием клавиш Shift и Cmd/Ctrl.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`управление-визуальным-состоянием`,children:`Управление визуальным состоянием`}),`
`,(0,c.jsxs)(t.p,{children:[`В целях максимальной производительности (особенно при обработке сотен элементов с помощью лассо) `,(0,c.jsx)(t.code,{children:`SelectableArea`}),` `,(0,c.jsx)(t.strong,{children:`самостоятельно`}),` манипулирует DOM-деревом, напрямую добавляя и удаляя классы активного состояния. Это позволяет избежать дорогостоящих циклов рендеринга виртуального DOM во Vue.`]}),`
`,(0,c.jsxs)(t.h4,{id:`кастомная-логика-стилизации-classselection`,children:[`Кастомная логика стилизации (`,(0,c.jsx)(t.code,{children:`classSelection`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`classSelection`}),`, предоставляемое слотом, `,(0,c.jsx)(t.strong,{children:`не является обязательным`}),` для базовой работы компонента. Оно предназначено исключительно для продвинутых случаев, когда архитектура вашего приложения требует переопределения стандартного поведения. Вы можете использовать `,(0,c.jsx)(t.code,{children:`classSelection`}),` для применения готовых дизайн-токенов к элементам, чье активное состояние контролируется вашей собственной внешней бизнес-логикой.`]}),`
`,(0,c.jsx)(i,{code:`
<template #default="{ className, classClick, classSelection, onClick }">
<div class="my-grid-container">
  <div
    v-for="item in items"
    :key="item.id"
    :class="[
      className,
      classClick,
      /* Используйте classSelection только если внедряете собственную логику отображения состояния */
      isCustomActive(item) ? classSelection : ''
    ]"
    :data-value="item.id"
    @click="onClick"
  >
    {{ item.name }}
  </div>
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};