import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/Loading - Глобальная загрузка`}),`
`,(0,c.jsx)(t.h1,{id:`класс-loading`,children:`Класс Loading`}),`
`,(0,c.jsxs)(t.p,{children:[`Статичный класс для управления глобальным состоянием загрузки (использует `,(0,c.jsx)(t.code,{children:`LoadingInstance`}),`). Использует счётчик: загрузка активна, пока хотя бы один процесс её отображает. Оповещает слушателей через кастомное событие `,(0,c.jsx)(t.code,{children:`ui-loading`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Счётчик вложенности`}),` — несколько параллельных вызовов `,(0,c.jsx)(t.code,{children:`show()`}),` корректно обрабатываются: загрузка скроется только после одинакового числа вызовов `,(0,c.jsx)(t.code,{children:`hide()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальное событие`}),` — при изменении состояния диспетчеризуется событие `,(0,c.jsx)(t.code,{children:`ui-loading`}),` на объекте `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистрация слушателей`}),` — через `,(0,c.jsx)(t.code,{children:`registrationEvent`}),` можно подписаться на изменения состояния из любого компонента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`управление-состоянием`,children:`Управление состоянием`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если загрузка активна (счётчик > 0).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): number`}),` — возвращает текущее значение счётчика.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`show(): void`}),` — увеличивает счётчик на 1, оповещает слушателей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide(): void`}),` — уменьшает счётчик на 1. Если счётчик уже 0 — игнорируется.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`подписка-на-события`,children:`Подписка на события`}),`
`,(0,c.jsx)(t.h3,{id:`registrationevent`,children:(0,c.jsx)(t.code,{children:`registrationEvent`})}),`
`,(0,c.jsxs)(t.p,{children:[`Регистрирует слушателя изменений состояния загрузки. Работает через нативное событие `,(0,c.jsx)(t.code,{children:`ui-loading`}),` на объекте `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — функция-обработчик, получающая `,(0,c.jsx)(t.code,{children:`event.detail.loading: boolean`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<HTMLElement>`}),` — DOM-элемент-триггер: при его удалении из DOM слушатель автоматически останавливается.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`unregistrationevent`,children:(0,c.jsx)(t.code,{children:`unregistrationEvent`})}),`
`,(0,c.jsxs)(t.p,{children:[`Отменяет регистрацию слушателя, добавленного через `,(0,c.jsx)(t.code,{children:`registrationEvent`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener: EventListenerDetail<CustomEvent, { loading: boolean }>`}),` — функция-обработчик, которая была использована при регистрации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<HTMLElement>`}),` — DOM-элемент, который был использован при регистрации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`loadinginstance`,children:`LoadingInstance`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LoadingInstance`}),` можно использовать для создания отдельного экземпляра для отслеживания загрузки.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Загрузка:', event.detail.loading) // true или false
})

Loading.show()  // счётчик = 1
Loading.show()  // счётчик = 2
Loading.hide()  // счётчик = 1
Loading.hide()  // счётчик = 0 → событие: { loading: false }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};