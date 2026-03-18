import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional-basic/Classes/Loading - Глобальная загрузка"}),`
`,n.jsx(e.h1,{id:"класс-loading",children:"Класс Loading"}),`
`,n.jsxs(e.p,{children:["Статический класс для управления глобальным состоянием загрузки. Использует счётчик: загрузка активна, пока хотя бы один процесс её отображает. Оповещает слушателей через кастомное событие ",n.jsx(e.code,{children:"ui-loading"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Счётчик вложенности"})," — несколько параллельных вызовов ",n.jsx(e.code,{children:"show()"})," корректно обрабатываются: загрузка скроется только после одинакового числа вызовов ",n.jsx(e.code,{children:"hide()"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальное событие"})," — при изменении состояния диспетчеризуется событие ",n.jsx(e.code,{children:"ui-loading"})," на объекте ",n.jsx(e.code,{children:"window"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Регистрация слушателей"})," — через ",n.jsx(e.code,{children:"registrationEvent"})," можно подписаться на изменения состояния из любого компонента."]}),`
`]}),`
`,n.jsx(e.h2,{id:"управление-состоянием",children:"Управление состоянием"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(): boolean"})," — возвращает ",n.jsx(e.code,{children:"true"}),", если загрузка активна (счётчик > 0)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): number"})," — возвращает текущее значение счётчика."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"show(): void"})," — увеличивает счётчик на 1, оповещает слушателей."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hide(): void"})," — уменьшает счётчик на 1. Если счётчик уже 0 — игнорируется."]}),`
`]}),`
`,n.jsx(e.h2,{id:"подписка-на-события",children:"Подписка на события"}),`
`,n.jsx(e.h3,{id:"registrationevent",children:n.jsx(e.code,{children:"registrationEvent"})}),`
`,n.jsxs(e.p,{children:["Регистрирует слушателя изменений состояния загрузки. Работает через нативное событие ",n.jsx(e.code,{children:"ui-loading"})," на объекте ",n.jsx(e.code,{children:"window"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener: EventListenerDetail<CustomEvent, { loading: boolean }>"})," — функция-обработчик, получающая ",n.jsx(e.code,{children:"event.detail.loading: boolean"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<HTMLElement>"})," — DOM-элемент-триггер: при его удалении из DOM слушатель автоматически останавливается."]}),`
`]}),`
`,n.jsx(e.h3,{id:"unregistrationevent",children:n.jsx(e.code,{children:"unregistrationEvent"})}),`
`,n.jsxs(e.p,{children:["Отменяет регистрацию слушателя, добавленного через ",n.jsx(e.code,{children:"registrationEvent"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener: EventListenerDetail<CustomEvent, { loading: boolean }>"})," — функция-обработчик, которая была использована при регистрации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<HTMLElement>"})," — DOM-элемент, который был использован при регистрации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional-basic'

Loading.registrationEvent((event) => {
  console.log('Загрузка:', event.detail.loading) // true или false
})

Loading.show()  // счётчик = 1
Loading.show()  // счётчик = 2
Loading.hide()  // счётчик = 1
Loading.hide()  // счётчик = 0 → событие: { loading: false }
`})})]})}function j(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
