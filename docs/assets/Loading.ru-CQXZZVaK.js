import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Loading - Глобальная загрузка`}),`
`,(0,c.jsx)(n.h1,{id:`класс-loading`,children:`Класс Loading`}),`
`,(0,c.jsxs)(n.p,{children:[`Статичный класс для управления глобальным состоянием загрузки (использует `,(0,c.jsx)(n.code,{children:`LoadingInstance`}),`). Использует счётчик: загрузка активна, пока хотя бы один процесс её отображает. Оповещает слушателей через кастомное событие `,(0,c.jsx)(n.code,{children:`ui-loading`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Счётчик вложенности`}),` — несколько параллельных вызовов `,(0,c.jsx)(n.code,{children:`show()`}),` корректно обрабатываются: загрузка скроется только после одинакового числа вызовов `,(0,c.jsx)(n.code,{children:`hide()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальное событие`}),` — при изменении состояния диспетчеризуется событие `,(0,c.jsx)(n.code,{children:`ui-loading`}),` на объекте `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Регистрация слушателей`}),` — через `,(0,c.jsx)(n.code,{children:`registrationEvent`}),` можно подписаться на изменения состояния из любого компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`управление-состоянием`,children:`Управление состоянием`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если загрузка активна (счётчик > 0).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): number`}),` — возвращает текущее значение счётчика.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`show(): void`}),` — увеличивает счётчик на 1, оповещает слушателей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hide(): void`}),` — уменьшает счётчик на 1. Если счётчик уже 0 — игнорируется.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`подписка-на-события`,children:`Подписка на события`}),`
`,(0,c.jsx)(n.h3,{id:`registrationevent`,children:(0,c.jsx)(n.code,{children:`registrationEvent`})}),`
`,(0,c.jsxs)(n.p,{children:[`Регистрирует слушателя изменений состояния загрузки. Работает через нативное событие `,(0,c.jsx)(n.code,{children:`ui-loading`}),` на объекте `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — функция-обработчик, получающая `,(0,c.jsx)(n.code,{children:`event.detail.loading: boolean`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<HTMLElement>`}),` — DOM-элемент-триггер: при его удалении из DOM слушатель автоматически останавливается.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`unregistrationevent`,children:(0,c.jsx)(n.code,{children:`unregistrationEvent`})}),`
`,(0,c.jsxs)(n.p,{children:[`Отменяет регистрацию слушателя, добавленного через `,(0,c.jsx)(n.code,{children:`registrationEvent`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — функция-обработчик, которая была использована при регистрации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<HTMLElement>`}),` — DOM-элемент, который был использован при регистрации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`loadinginstance`,children:`LoadingInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LoadingInstance`}),` можно использовать для создания отдельного экземпляра для отслеживания загрузки.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Загрузка:', event.detail.loading) // true или false
})

Loading.show()  // счётчик = 1
Loading.show()  // счётчик = 2
Loading.hide()  // счётчик = 1
Loading.hide()  // счётчик = 0 → событие: { loading: false }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};