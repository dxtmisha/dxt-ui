import{n as e}from"./chunk-DnJy8xQt.js";import{S as t,et as n,f as r,ht as ee}from"./iframe-UEhCQgdF.js";import{t as i}from"./react-BOlUYkhK.js";import{t as te}from"./jsx-runtime-CDg9WaeQ.js";import{c as a,f as ne,i as re,l as ie,n as ae,u as oe}from"./blocks-PB3deeuo.js";import{i as o,n as se,r as ce,t as le}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";function s(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`actions`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when clicking on an action button in the Actions component, passing the original DOM event and click data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string`}),` — action/button type (e.g., `,(0,$.jsx)(t.code,{children:`'confirm'`}),`, `,(0,$.jsx)(t.code,{children:`'cancel'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — arbitrary button value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional event data`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleActions = (event, value) => {
console.log('DOM event:', event)
console.log('Action type:', value.type)
console.log('Value:', value.value)
console.log('Details:', value.detail)

if (value.type === 'confirm') {
  console.log('Confirm button pressed')
}
}
<\/script>

<template>
<Actions @actions="handleActions" :list="[
  { text: 'Cancel', type: 'cancel' },
  { text: 'Confirm', type: 'confirm' }
]" />
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`actionsLite`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when clicking on an action button in the Actions component, passing only data without the original DOM event (lightweight version).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Actions component can be hidden with `,(0,$.jsx)(t.code,{children:`actionsHide`}),` property.`]}),`
`]})]})}function ue(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(s,{...e})}):s(e)}function c(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`actions`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку действия в компоненте Actions, передавая оригинальное DOM событие и данные о клике.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное DOM событие мыши`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string`}),` — тип действия/кнопки (например, `,(0,$.jsx)(t.code,{children:`'confirm'`}),`, `,(0,$.jsx)(t.code,{children:`'cancel'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — произвольное значение кнопки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные события`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleActions = (event, value) => {
console.log('DOM событие:', event)
console.log('Тип действия:', value.type)
console.log('Значение:', value.value)
console.log('Детали:', value.detail)

if (value.type === 'confirm') {
  console.log('Нажата кнопка "Подтвердить"')
}
}
<\/script>

<template>
<Actions @actions="handleActions" :list="[
  { text: 'Отмена', type: 'cancel' },
  { text: 'Подтвердить', type: 'confirm' }
]" />
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`actionsLite`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку действия в компоненте Actions, передавая только данные без оригинального DOM события (облегченная версия).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Компонент Actions можно скрыть свойством `,(0,$.jsx)(t.code,{children:`actionsHide`}),`.`]}),`
`]})]})}function de(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(c,{...e})}):c(e)}function l(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`bars`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when clicking on a Bars panel element, passing the original DOM event and click data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string`}),` — click/button type (e.g., `,(0,$.jsx)(t.code,{children:`'back'`}),` for back button)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — arbitrary button value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional event data`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleBars = (event, value) => {
console.log('DOM event:', event)
console.log('Button type:', value.type)
console.log('Value:', value.value)
console.log('Details:', value.detail)

if (value.type === 'back') {
  console.log('Back button pressed')
}
}
<\/script>

<template>
<Bars @bars="handleBars">
  <button data-event-type="back">Back</button>
</Bars>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`barsLite`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when clicking on a Bars panel element, passing only data without the original DOM event (lightweight version).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`barsBack`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the "Back" button in Bars panel is clicked, passing only click data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Back button can be hidden with `,(0,$.jsx)(t.code,{children:`barsBackHide`}),` property.`]}),`
`]})]})}function fe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(l,{...e})}):l(e)}function u(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`bars`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на элемент панели Bars, передавая оригинальное DOM событие и данные о клике.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное DOM событие мыши`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string`}),` — тип клика/кнопки (например, `,(0,$.jsx)(t.code,{children:`'back'`}),` для кнопки назад)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — произвольное значение кнопки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные события`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleBars = (event, value) => {
console.log('DOM событие:', event)
console.log('Тип кнопки:', value.type)
console.log('Значение:', value.value)
console.log('Детали:', value.detail)

if (value.type === 'back') {
  console.log('Нажата кнопка "Назад"')
}
}
<\/script>

<template>
<Bars @bars="handleBars">
  <button data-event-type="back">Назад</button>
</Bars>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`barsLite`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на элемент панели Bars, передавая только данные без оригинального DOM события (облегченная версия).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`barsBack`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике по кнопке «Назад» в панели Bars, передавая только данные о клике.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Кнопку «Назад» можно скрыть свойством `,(0,$.jsx)(t.code,{children:`barsBackHide`}),`.`]}),`
`]})]})}function pe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(u,{...e})}):u(e)}function d(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`beforeinput`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires before the value in the input field changes, allowing you to prevent or modify data input.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — original DOM input event`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Input type examples (inputType):`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`insertText`}),` — text input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`insertFromPaste`}),` — paste from clipboard`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`deleteContentBackward`}),` — delete character backward (Backspace)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`deleteContentForward`}),` — delete character forward (Delete)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`insertLineBreak`}),` — insert line break`]}),`
`]})]})}function me(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(d,{...e})}):d(e)}function f(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`beforeinput`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает перед изменением значения в поле ввода, позволяя предотвратить или модифицировать ввод данных.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — оригинальное DOM событие ввода`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Примеры типов ввода (inputType):`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`insertText`}),` — ввод текста`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`insertFromPaste`}),` — вставка из буфера обмена`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`deleteContentBackward`}),` — удаление символа назад (Backspace)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`deleteContentForward`}),` — удаление символа вперед (Delete)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`insertLineBreak`}),` — вставка переноса строки`]}),`
`]})]})}function he(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(f,{...e})}):f(e)}function p(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`click`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when clicking on the component, passing the original DOM event and component data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with component data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string`}),` — click location identifier, set through `,(0,$.jsx)(t.code,{children:`data-event-type`}),` attribute on the element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — component value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional event data`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleClick = (event, value) => {
console.log('DOM event:', event)
console.log('Click type:', value.type)
console.log('Value:', value.value)
console.log('Details:', value.detail)
}
<\/script>

<template>
<Component @click="handleClick">
  <button data-event-type="action">Click me</button>
</Component>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`clickLite`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when clicking on the component, passing only data without the original DOM event (lightweight version).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — object with component data`]}),`
`]})]})}function ge(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(p,{...e})}):p(e)}function m(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`click`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на компонент, передавая оригинальное DOM событие и данные компонента.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное DOM событие мыши`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными компонента`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string`}),` — идентификатор места нажатия, задается через атрибут `,(0,$.jsx)(t.code,{children:`data-event-type`}),` у элемента`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — значение компонента`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные события`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleClick = (event, value) => {
console.log('DOM событие:', event)
console.log('Тип клика:', value.type)
console.log('Значение:', value.value)
console.log('Детали:', value.detail)
}
<\/script>

<template>
<Component @click="handleClick">
  <button data-event-type="action">Нажми меня</button>
</Component>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`clickLite`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на компонент, передавая только данные без оригинального DOM события (облегченная версия).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными компонента`]}),`
`]})]})}function _e(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(m,{...e})}):m(e)}function h(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`focus`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the input element receives focus, passing the original DOM event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: FocusEvent`}),` — original DOM focus event`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`blur`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the input element loses focus, passing the original DOM event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: FocusEvent`}),` — original DOM blur event`]}),`
`]})]})}function ve(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(h,{...e})}):h(e)}function g(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`focus`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при получении фокуса элементом ввода, передавая оригинальное DOM событие.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: FocusEvent`}),` — оригинальное DOM событие фокуса`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`blur`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при потере фокуса элементом ввода, передавая оригинальное DOM событие.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: FocusEvent`}),` — оригинальное DOM событие потери фокуса`]}),`
`]})]})}function ye(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(g,{...e})}):g(e)}function _(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`input`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the value in the input field changes, passing the original DOM event and validation data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — original DOM input event`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`FieldValidationItem structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`group: string | undefined`}),` — mask group key`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`input: HTMLInputElement | HTMLTextAreaElement | undefined`}),` — related input element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`pattern: FieldPatternItemOrFunction | undefined`}),` — validation pattern used`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string | undefined`}),` — custom type`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`status: boolean | undefined`}),` — validation success status`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`required: boolean | undefined`}),` — field required flag`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isFull: boolean | undefined`}),` — value completion flag`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validationMessage: string | undefined`}),` — error message text`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validity: ValidityState | undefined`}),` — native validity state`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validityMessage: string | undefined`}),` — custom validity message`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — original value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueInput: any | undefined`}),` — entered value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional data`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleInput = (event, value) => {
console.log('DOM event:', event)
console.log('Value:', value.value)
console.log('Validation:', value.status)
console.log('Complete:', value.isFull)

if (!value.status) {
  console.log('Error:', value.validationMessage)
}
}
<\/script>

<template>
<Mask
  mask="+1 (***) ***-****"
  @input="handleInput"
/>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`inputLite`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the value in the input field changes, passing only validation data without the original DOM event (lightweight version).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`change`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when input is completed and focus is lost, passing the original DOM event and validation data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — original DOM input event`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`FieldValidationItem structure:`}),` same as for `,(0,$.jsx)(t.code,{children:`input`}),` event`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleChange = (event, value) => {
console.log('DOM event:', event)
console.log('Final value:', value.value)

if (value.status && value.isFull) {
  // Submit data to server
  submitForm(value.value)
}
}
<\/script>

<template>
<Mask
  mask="+1 (***) ***-****"
  @change="handleChange"
/>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`changeLite`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when input is completed and focus is lost, passing only validation data without the original DOM event (lightweight version).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — object with validation data`]}),`
`]})]})}function be(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_,{...e})}):_(e)}function v(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`input`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие и данные валидации.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — оригинальное DOM событие ввода`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура FieldValidationItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`group: string | undefined`}),` — ключ группы маски`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`input: HTMLInputElement | HTMLTextAreaElement | undefined`}),` — связанный элемент ввода`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`pattern: FieldPatternItemOrFunction | undefined`}),` — используемый паттерн валидации`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: string | undefined`}),` — произвольный тип`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`status: boolean | undefined`}),` — статус успешности валидации`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`required: boolean | undefined`}),` — флаг обязательности поля`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isFull: boolean | undefined`}),` — флаг полноты заполнения значения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validationMessage: string | undefined`}),` — текст сообщения об ошибке`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validity: ValidityState | undefined`}),` — нативное состояние валидности`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validityMessage: string | undefined`}),` — кастомное сообщение валидности`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — исходное значение`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueInput: any | undefined`}),` — введённое значение`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleInput = (event, value) => {
console.log('DOM событие:', event)
console.log('Значение:', value.value)
console.log('Валидация:', value.status)
console.log('Заполнено:', value.isFull)

if (!value.status) {
  console.log('Ошибка:', value.validationMessage)
}
}
<\/script>

<template>
<Component
  @input="handleInput"
/>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`inputLite`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении значения в поле ввода, передавая только данные валидации без оригинального DOM события (облегченная версия).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`change`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при завершении ввода и потере фокуса, передавая оригинальное DOM событие и данные валидации.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — оригинальное DOM событие ввода`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Структура FieldValidationItem:`}),` такая же как у события `,(0,$.jsx)(t.code,{children:`input`})]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleChange = (event, value) => {
console.log('DOM событие:', event)
console.log('Финальное значение:', value.value)

if (value.status && value.isFull) {
  // Отправка данных на сервер
  submitForm(value.value)
}
}
<\/script>

<template>
<Component
  @change="handleChange"
/>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`changeLite`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при завершении ввода и потере фокуса, передавая только данные валидации без оригинального DOM события (облегченная версия).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]})]})}function xe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(v,{...e})}):v(e)}function y(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`input`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the value in the input field changes, passing the original DOM event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — original DOM input event`]}),`
`]})]})}function Se(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(y,{...e})}):y(e)}function b(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`input`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: InputEvent`}),` — оригинальное DOM событие ввода`]}),`
`]})]})}function Ce(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(b,{...e})}):b(e)}function x(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`keydown`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when a key is pressed in the input field, passing the original DOM keyboard event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: KeyboardEvent`}),` — original DOM keyboard event`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`keyup`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when a key is released in the input field, passing the original DOM keyboard event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: KeyboardEvent`}),` — original DOM keyboard event`]}),`
`]})]})}function we(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(x,{...e})}):x(e)}function S(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`keydown`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при нажатии клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: KeyboardEvent`}),` — оригинальное DOM событие клавиатуры`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`keyup`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при отпускании клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: KeyboardEvent`}),` — оригинальное DOM событие клавиатуры`]}),`
`]})]})}function Te(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(S,{...e})}):S(e)}function C(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`paste`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when data is pasted from clipboard into the input field, passing the original DOM event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: ClipboardEvent`}),` — original DOM clipboard event`]}),`
`]})]})}function Ee(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(C,{...e})}):C(e)}function w(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`paste`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при вставке данных из буфера обмена в поле ввода, передавая оригинальное DOM событие.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: ClipboardEvent`}),` — оригинальное DOM событие буфера обмена`]}),`
`]})]})}function De(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(w,{...e})}):w(e)}function T(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`reset`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the component value is reset, passing the original DOM event.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: Event`}),` — original DOM event`]}),`
`]})]})}function Oe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(T,{...e})}):T(e)}function E(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`reset`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при сбросе значения компонента, передавая оригинальное DOM событие.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: Event`}),` — оригинальное DOM событие`]}),`
`]})]})}function ke(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(E,{...e})}):E(e)}function D(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`checkValidity(): boolean`}),` — Checks whether the component's value satisfies its validation constraints. Returns `,(0,$.jsx)(t.code,{children:`true`}),` if valid, otherwise `,(0,$.jsx)(t.code,{children:`false`}),`.`]}),`
`]})}function Ae(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(D,{...e})}):D(e)}function O(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`checkValidity(): boolean`}),` — Проверяет, удовлетворяет ли значение компонента его ограничениям проверки. Возвращает `,(0,$.jsx)(t.code,{children:`true`}),`, если оно действительно, в противном случае `,(0,$.jsx)(t.code,{children:`false`}),`.`]}),`
`]})}function je(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(O,{...e})}):O(e)}function k(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`clear(): void`}),` — Clears the component value by default and focuses the input field.`]}),`
`]})}function Me(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(k,{...e})}):k(e)}function A(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`clear(): void`}),` — Очищает значение компонента до значения по умолчанию и устанавливает фокус на поле ввода.`]}),`
`]})}function Ne(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(A,{...e})}):A(e)}function j(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`descriptionId: string`}),` — Unique identifier for the description element. Used for accessibility attributes like `,(0,$.jsx)(t.code,{children:`aria-describedby`}),`.`]}),`
`]})}function Pe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(j,{...e})}):j(e)}function M(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`descriptionId: string`}),` — Уникальный идентификатор элемента описания. Используется для атрибутов доступности, таких как `,(0,$.jsx)(t.code,{children:`aria-describedby`}),`.`]}),`
`]})}function Fe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(M,{...e})}):M(e)}function N(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — Additional component data.`]}),`
`]})}function Ie(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(N,{...e})}):N(e)}function P(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — Дополнительные данные компонента.`]}),`
`]})}function Le(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(P,{...e})}):P(e)}function F(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — Unique identifier for the component element. Used as the DOM element's `,(0,$.jsx)(t.code,{children:`id`}),` attribute.`]}),`
`]})}function Re(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(F,{...e})}):F(e)}function I(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор элемента компонента. Используется в качестве атрибута `,(0,$.jsx)(t.code,{children:`id`}),` DOM-элемента.`]}),`
`]})}function ze(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(I,{...e})}):I(e)}function L(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`labelId: string`}),` — Unique identifier for the label element. Used for accessibility attributes like `,(0,$.jsx)(t.code,{children:`aria-labelledby`}),`.`]}),`
`]})}function Be(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(L,{...e})}):L(e)}function R(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`labelId: string`}),` — Уникальный идентификатор элемента метки. Используется для атрибутов доступности, таких как `,(0,$.jsx)(t.code,{children:`aria-labelledby`}),`.`]}),`
`]})}function Ve(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(R,{...e})}):R(e)}function z(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: ComputedRef<boolean>`}),` — Reactive open/close state of the component.`]}),`
`]})}function He(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(z,{...e})}):z(e)}function B(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: ComputedRef<boolean>`}),` — Реактивное состояние открытия/закрытия компонента.`]}),`
`]})}function Ue(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(B,{...e})}):B(e)}function V(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — Computed property indicating whether there are selected items in the component.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedList: Ref<any[]>`}),` — Reactive list of selected component items.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedNames: Ref<string[]>`}),` — Reactive list of labels (names) of selected items.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedValues: Ref<any[]>`}),` — Reactive array of values of selected items.`]}),`
`]})}function We(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(V,{...e})}):V(e)}function H(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — Вычисляемое свойство, указывающее наличие выбранных элементов в компоненте.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedList: Ref<any[]>`}),` — Реактивный список выбранных элементов компонента.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedNames: Ref<string[]>`}),` — Реактивный список меток (имён) выбранных элементов.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedValues: Ref<any[]>`}),` — Реактивный массив значений выбранных элементов.`]}),`
`]})}function Ge(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(H,{...e})}):H(e)}function U(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validationMessage: string`}),` — Returns a validation error message describing why the component's value fails validation. If the value is valid, it returns an empty string.`]}),`
`]})}function Ke(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(U,{...e})}):U(e)}function W(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validationMessage: string`}),` — Возвращает сообщение об ошибке проверки, в котором описывается, почему значение компонента не прошло проверку. Если значение действительно, возвращается пустая строка.`]}),`
`]})}function qe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(W,{...e})}):W(e)}function G(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — Current component value.`]}),`
`]})}function Je(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(G,{...e})}):G(e)}function K(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: any`}),` — Текущее значение компонента.`]}),`
`]})}function Ye(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(K,{...e})}):K(e)}function q(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`body: VNode`}),` — Slot for the main content of the component.`]}),`
`]})}function Xe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(q,{...e})}):q(e)}function J(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`body: VNode`}),` — Слот для основного содержимого компонента.`]}),`
`]})}function Ze(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(J,{...e})}):J(e)}function Y(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`caption: VNode`}),` — Slot for placing a caption or additional explanatory text for the component.`]}),`
`]})}function Qe(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Y,{...e})}):Y(e)}function X(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`caption: VNode`}),` — Слот для размещения подписи или дополнительного пояснительного текста к компоненту.`]}),`
`]})}function $e(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(X,{...e})}):X(e)}function Z(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: ControlItem): VNode`}),` — Slot for placing component control elements (buttons, switches, etc.).`]}),`
`]})}function et(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Z,{...e})}):Z(e)}function Q(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: ControlItem): VNode`}),` — Слот для размещения элементов управления компонентом (кнопки, переключатели и т.д.).`]}),`
`]})}function tt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Q,{...e})}):Q(e)}function nt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default: VNode`}),` — Main slot for placing the primary component content.`]}),`
`]})}function rt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nt,{...e})}):nt(e)}function it(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default: VNode`}),` — Основной слот для размещения главного содержимого компонента.`]}),`
`]})}function at(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(it,{...e})}):it(e)}function ot(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`description: VNode`}),` — Slot for placing component description or additional information.`]}),`
`]})}function st(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ot,{...e})}):ot(e)}function ct(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`description: VNode`}),` — Слот для размещения описания компонента или дополнительной информации.`]}),`
`]})}function lt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ct,{...e})}):ct(e)}function ut(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`footer(props: ControlItem): VNode`}),` — Slot for placing content at the bottom of the component.`]}),`
`]})}function dt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ut,{...e})}):ut(e)}function ft(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`footer(props: ControlItem): VNode`}),` — Слот для размещения содержимого в нижней части компонента.`]}),`
`]})}function pt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ft,{...e})}):ft(e)}function mt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`headline: VNode`}),` — Slot for placing custom headline content.`]}),`
`]})}function ht(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(mt,{...e})}):mt(e)}function gt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`headline: VNode`}),` — Слот для размещения пользовательского содержимого заголовка.`]}),`
`]})}function _t(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(gt,{...e})}):gt(e)}function vt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`label: VNode`}),` — Slot for placing custom label content instead of text value.`]}),`
`]})}function yt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vt,{...e})}):vt(e)}function bt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`label: VNode`}),` — Слот для размещения пользовательского содержимого метки компонента вместо текстового значения.`]}),`
`]})}function xt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bt,{...e})}):bt(e)}function St(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`leading: any`}),` — Slot for placing content at the start of the interactive field area, before the main input element.`]}),`
`]})}function Ct(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(St,{...e})}):St(e)}function wt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`leading: any`}),` — Слот для размещения контента в начале интерактивной области поля, перед основным элементом ввода.`]}),`
`]})}function Tt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(wt,{...e})}):wt(e)}function Et(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`prefix: VNode`}),` — Slot for placing content at the beginning of the component, before the main content.`]}),`
`]})}function Dt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Et,{...e})}):Et(e)}function Ot(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`prefix: VNode`}),` — Слот для размещения контента в начале компонента, перед основным содержимым.`]}),`
`]})}function kt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ot,{...e})}):Ot(e)}function At(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`secondary: VNode`}),` — Slot for placing secondary content or additional component elements.`]}),`
`]})}function jt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(At,{...e})}):At(e)}function Mt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`secondary: VNode`}),` — Слот для размещения вторичного содержимого или дополнительных элементов компонента.`]}),`
`]})}function Nt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Mt,{...e})}):Mt(e)}function Pt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`suffix: VNode`}),` — Slot for placing content at the end of the component, after the main content.`]}),`
`]})}function Ft(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Pt,{...e})}):Pt(e)}function It(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`suffix: VNode`}),` — Слот для размещения контента в конце компонента, после основного содержимого.`]}),`
`]})}function Lt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(It,{...e})}):It(e)}function Rt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing: any`}),` — Slot for placing content at the end of the interactive field area, after the main input element.`]}),`
`]})}function zt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Rt,{...e})}):Rt(e)}function Bt(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing: any`}),` — Слот для размещения контента в конце интерактивной области поля, после основного элемента ввода.`]}),`
`]})}function Vt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bt,{...e})}):Bt(e)}function Ht(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Adaptive Behavior`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`adaptive`}),` and `,(0,$.jsx)(t.code,{children:`container`}),` properties are designed to control component behavior at different screen sizes and container constraints.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptive`}),` — controls adaptive behavior for different screen sizes and media queries`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`container`}),` — controls container layout with adaptive width constraints`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`adaptive`}),` provides automatic component adaptation to different screen sizes with media query support for precise display control. `,(0,$.jsx)(t.code,{children:`container`}),` creates a container layout with automatic width constraints, adaptive behavior, and content centering. Both properties can be used together to create complex adaptive layouts, where `,(0,$.jsx)(t.code,{children:`container`}),` provides the structural foundation and `,(0,$.jsx)(t.code,{children:`adaptive`}),` adds flexible behavior for different devices.`]})]})}function Ut(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ht,{...e})}):Ht(e)}function Wt(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Адаптивное поведение`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`adaptive`}),` и `,(0,$.jsx)(t.code,{children:`container`}),` предназначены для управления поведением компонентов при различных размерах экрана и контейнерных ограничениях.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptive`}),` — управляет адаптивным поведением для различных размеров экрана и медиа-запросов`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`container`}),` — управляет контейнерной раскладкой с адаптивными ограничениями ширины`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`adaptive`}),` обеспечивает автоматическую адаптацию компонента под различные размеры экрана с поддержкой медиа-запросов для точного контроля отображения. `,(0,$.jsx)(t.code,{children:`container`}),` создает контейнерную раскладку с автоматическими ограничениями ширины, адаптивным поведением и центрированием содержимого. Оба свойства могут использоваться вместе для создания сложных адаптивных раскладок, где `,(0,$.jsx)(t.code,{children:`container`}),` обеспечивает структурную основу, а `,(0,$.jsx)(t.code,{children:`adaptive`}),` добавляет гибкое поведение для разных устройств.`]})]})}function Gt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Wt,{...e})}):Wt(e)}function Kt(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Color Palette`}),`
`,(0,$.jsxs)(t.p,{children:[`Property `,(0,$.jsx)(t.code,{children:`asPalette`}),` enables color scheme inheritance from the parent element while maintaining base saturation.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Usage:`})}),`
`,(0,$.jsx)(t.p,{children:`Allows automatic color adaptation to placement context. The element adopts the parent's color palette without losing its saturation characteristics.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` (default) — uses its own color scheme`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — inherits palette from parent element`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Inherit palette from parent -->
<Component asPalette />
`,language:`html`})]})}function qt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Kt,{...e})}):Kt(e)}function Jt(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Цветовая палитра`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`asPalette`}),` активирует наследование цветовой схемы от родительского элемента с сохранением базовой насыщенности.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Применение:`})}),`
`,(0,$.jsx)(t.p,{children:`Позволяет автоматически адаптировать цвета к контексту размещения. Элемент принимает цветовую палитру родителя, не теряя своих характеристик насыщенности.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` (по умолчанию) — используется собственная цветовая схема`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — наследует палитру от родительского элемента`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Наследование палитры от родителя -->
<Component asPalette />
`,language:`html`})]})}function Yt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Jt,{...e})}):Jt(e)}function Xt(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Direction`}),`
`,(0,$.jsxs)(t.p,{children:[`Property `,(0,$.jsx)(t.code,{children:`dir`}),` controls mirroring of the element based on text direction (LTR/RTL).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Usage:`})}),`
`,(0,$.jsx)(t.p,{children:`Automatically inverts the visual representation when switching between left-to-right and right-to-left languages. Especially important for elements containing directional graphic symbols (arrows, pointers).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` (default) — standard display`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — enables text direction adaptation`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Text direction adaptation -->
<Component dir />
`,language:`html`})]})}function Zt(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xt,{...e})}):Xt(e)}function Qt(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Направление`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`dir`}),` управляет зеркальным отображением элемента в зависимости от направления текста (LTR/RTL).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Применение:`})}),`
`,(0,$.jsx)(t.p,{children:`Автоматически инвертирует визуальное представление при переключении между языками с левосторонним и правосторонним письмом. Особенно важно для элементов, содержащих направленные графические символы (стрелки, указатели).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` (по умолчанию) — стандартное отображение`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — включает адаптацию к направлению текста`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Адаптация под направление текста -->
<Component dir />
`,language:`html`})]})}function $t(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Qt,{...e})}):Qt(e)}function en(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Skeleton mode`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`isSkeleton`}),` property defines element behavior when interacting with the parent Skeleton component.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — element displays as skeleton when Skeleton is in active state`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — element becomes invisible when Skeleton is in active state`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Works in conjunction with the Skeleton component to control visibility and display mode of child elements. When parent Skeleton has `,(0,$.jsx)(t.code,{children:`active=false`}),`, all child elements display normally regardless of `,(0,$.jsx)(t.code,{children:`isSkeleton`}),` value. When `,(0,$.jsx)(t.code,{children:`active=true`}),`, elements with `,(0,$.jsx)(t.code,{children:`isSkeleton=true`}),` are shown as skeleton placeholders, while elements with `,(0,$.jsx)(t.code,{children:`isSkeleton=false`}),` are completely hidden.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Element will display as skeleton -->
<Skeleton active>
<Component isSkeleton text="Loading..." />
</Skeleton>

<!-- Element will be hidden -->
<Skeleton active>
<Component :isSkeleton="false" text="Hidden text" />
</Skeleton>
`,language:`html`})]})}function tn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(en,{...e})}):en(e)}function nn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Режим скелетона`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`isSkeleton`}),` определяет поведение элемента при взаимодействии с родительским компонентом Skeleton.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — элемент отображается как скелетон при активном состоянии Skeleton`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — элемент становится невидимым при активном состоянии Skeleton`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Работает в паре с компонентом Skeleton для управления видимостью и режимом отображения дочерних элементов. При `,(0,$.jsx)(t.code,{children:`active=false`}),` у родительского Skeleton все дочерние элементы отображаются нормально независимо от значения `,(0,$.jsx)(t.code,{children:`isSkeleton`}),`. При `,(0,$.jsx)(t.code,{children:`active=true`}),` элементы с `,(0,$.jsx)(t.code,{children:`isSkeleton=true`}),` показываются как скелетон-заглушки, а элементы с `,(0,$.jsx)(t.code,{children:`isSkeleton=false`}),` скрываются полностью.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Элемент будет отображаться как скелетон -->
<Skeleton active>
<Component isSkeleton text="Загрузка..." />
</Skeleton>

<!-- Элемент будет скрыт -->
<Skeleton active>
<Component :isSkeleton="false" text="Скрытый текст" />
</Skeleton>
`,language:`html`})]})}function rn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nn,{...e})}):nn(e)}function an(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Managing search and highlighting`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`highlight`}),` and `,(0,$.jsx)(t.code,{children:`highlightLengthStart`}),` properties work together to control match highlighting when searching through list items. They set the search string and minimum query length for activating visual highlighting of found fragments.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`highlight`}),` — search string for finding and highlighting in list items`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`highlightLengthStart`}),` — minimum search string length to start highlighting, defaults to `,(0,$.jsx)(t.code,{children:`2`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Match highlighting is activated automatically: when the `,(0,$.jsx)(t.code,{children:`highlight`}),` length is less than `,(0,$.jsx)(t.code,{children:`highlightLengthStart`}),`, search works but visual highlighting is not applied. When the minimum length is reached, the component begins highlighting found fragments across the entire list hierarchy. Search works in real-time and considers nested items in groups and menus. Use `,(0,$.jsx)(t.code,{children:`highlightLengthStart`}),` to prevent excessive highlighting with short queries.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Standard search with highlighting from 2 characters -->
<List :list="items" highlight="text" />

<!-- Search with highlighting from 3 characters -->
<List :list="items" highlight="abc" :highlightLengthStart="3" />

<!-- Dynamic search with v-model -->
<List :list="items" :highlight="searchQuery" :highlightLengthStart="1" />

<!-- Search without minimum threshold -->
<List :list="products" :highlight="filter" :highlightLengthStart="0" />
`,language:`html`})]})}function on(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(an,{...e})}):an(e)}function sn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление поиском и выделением`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`highlight`}),` и `,(0,$.jsx)(t.code,{children:`highlightLengthStart`}),` работают в связке для управления подсветкой совпадений при поиске по элементам списка. Они устанавливают строку поиска и минимальную длину запроса для активации визуального выделения найденных фрагментов.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`highlight`}),` — строка для поиска и подсветки в элементах списка`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`highlightLengthStart`}),` — минимальная длина строки поиска для начала выделения, по умолчанию `,(0,$.jsx)(t.code,{children:`2`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Выделение совпадений активируется автоматически: когда длина `,(0,$.jsx)(t.code,{children:`highlight`}),` меньше `,(0,$.jsx)(t.code,{children:`highlightLengthStart`}),`, поиск работает, но визуальное выделение не применяется. При достижении минимальной длины компонент начинает подсвечивать найденные фрагменты во всей иерархии списка. Поиск работает в реальном времени и учитывает вложенные элементы в группах и меню. Используйте `,(0,$.jsx)(t.code,{children:`highlightLengthStart`}),` для предотвращения чрезмерного выделения при коротких запросах.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Стандартный поиск с выделением от 2 символов -->
<List :list="items" highlight="текст" />

<!-- Поиск с выделением от 3 символов -->
<List :list="items" highlight="abc" :highlightLengthStart="3" />

<!-- Динамический поиск с v-model -->
<List :list="items" :highlight="searchQuery" :highlightLengthStart="1" />

<!-- Поиск без минимального порога -->
<List :list="products" :highlight="filter" :highlightLengthStart="0" />
`,language:`html`})]})}function cn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sn,{...e})}):sn(e)}function ln(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Working with text labels and numbers`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`label`}),`, `,(0,$.jsx)(t.code,{children:`labelMax`}),`, and `,(0,$.jsx)(t.code,{children:`formatting`}),` properties are designed to manage the display of textual and numerical content in interface components.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`label`}),` — text label or numeric value to display`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`labelMax`}),` — maximum value for numeric labels (adds "+" indicator when exceeded)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`formatting`}),` — enables formatting of numeric values according to user locale`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together for flexible content management: `,(0,$.jsx)(t.code,{children:`label`}),` accepts both textual and numeric values. When a number is passed, automatic processing is applied with localization consideration. The `,(0,$.jsx)(t.code,{children:`labelMax`}),` property limits the display of large numbers — when the value is exceeded, a "+" symbol is added (e.g., "99+"). The `,(0,$.jsx)(t.code,{children:`formatting`}),` property controls number formatting according to user regional settings, ensuring correct display of separators and numeric formats.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const count = ref(5)
const largeNumber = ref(1234)
<\/script>

<template>
<!-- Basic usage with text -->
<Component label="Text" />

<!-- Numeric value -->
<Component :label="count" />

<!-- Maximum value limitation -->
<Component :label="150" :label-max="99" />
<!-- Displays: 99+ -->

<!-- With number formatting -->
<Component
  :label="largeNumber"
  :formatting="true"
/>
<!-- Displays: 1,234 (depending on locale) -->

<!-- Combined usage -->
<Component
  :label="999"
  :label-max="99"
  :formatting="true"
/>
<!-- Displays: 99+ -->
</template>
`,language:`html`})]})}function un(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ln,{...e})}):ln(e)}function dn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Работа с текстовыми метками и числами`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`label`}),`, `,(0,$.jsx)(t.code,{children:`labelMax`}),` и `,(0,$.jsx)(t.code,{children:`formatting`}),` предназначены для управления отображением текстового и числового контента в компонентах интерфейса.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`label`}),` — текстовая метка или числовое значение для отображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`labelMax`}),` — максимальное значение для числовых меток (при превышении добавляется индикатор "+")`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`formatting`}),` — включает форматирование числовых значений согласно локали пользователя`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно для гибкого управления контентом: `,(0,$.jsx)(t.code,{children:`label`}),` принимает как текстовые, так и числовые значения. При передаче числа применяется автоматическая обработка с учётом локализации. Свойство `,(0,$.jsx)(t.code,{children:`labelMax`}),` ограничивает отображение больших чисел — при превышении значения добавляется символ "+" (например, "99+"). Свойство `,(0,$.jsx)(t.code,{children:`formatting`}),` контролирует форматирование чисел согласно региональным настройкам пользователя, обеспечивая корректное отображение разделителей и числовых форматов.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const count = ref(5)
const largeNumber = ref(1234)
<\/script>

<template>
<!-- Базовое использование с текстом -->
<Component label="Текст" />

<!-- Числовое значение -->
<Component :label="count" />

<!-- Ограничение максимального значения -->
<Component :label="150" :label-max="99" />
<!-- Отобразит: 99+ -->

<!-- С форматированием чисел -->
<Component
  :label="largeNumber"
  :formatting="true"
/>
<!-- Отобразит: 1 234 (в зависимости от локали) -->

<!-- Комбинированное использование -->
<Component
  :label="999"
  :label-max="99"
  :formatting="true"
/>
<!-- Отобразит: 99+ -->
</template>
`,language:`html`})]})}function fn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(dn,{...e})}):dn(e)}function pn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Value and Data Passing`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`value`}),` and `,(0,$.jsx)(t.code,{children:`detail`}),` properties are designed to transfer information when interacting with components and handling events.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — main component value (string, number, object)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail`}),` — additional data and contextual information`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`value`}),` contains the main component value, which is passed during events and accessible via the expose API. `,(0,$.jsx)(t.code,{children:`detail`}),` extends `,(0,$.jsx)(t.code,{children:`value`}),` with additional data such as metadata, identifiers, or other auxiliary information. Both properties are available for programmatic reading and passed in component events, providing complete information about the state and context during interaction.`]})]})}function mn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pn,{...e})}):pn(e)}function hn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Передача значений и данных`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`value`}),` и `,(0,$.jsx)(t.code,{children:`detail`}),` предназначены для передачи информации при взаимодействии с компонентами и обработке событий.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — основное значение компонента (строка, число, объект)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`detail`}),` — дополнительные данные и контекстная информация`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`value`}),` содержит основное значение компонента, которое передаётся при событиях и доступно через expose API. `,(0,$.jsx)(t.code,{children:`detail`}),` расширяет `,(0,$.jsx)(t.code,{children:`value`}),` дополнительными данными, такими как метаданные, идентификаторы или другая вспомогательная информация. Оба свойства доступны для программного чтения и передаются в события компонента, обеспечивая полную информацию о состоянии и контексте при взаимодействии.`]})]})}function gn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hn,{...e})}):hn(e)}function _n(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Managing value via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way value binding using `,(0,$.jsx)(t.code,{children:`v-model`}),` (component uses standard `,(0,$.jsx)(t.code,{children:`modelValue`}),`).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`modelValue: string | number`}),` — current value`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
<\/script>

<template>
<div>
  <button @click="value = 'Example'">Set value</button>
  <button @click="value = ''">Clear</button>
</div>

<Component v-model="value" />

<div>Current value: {{ value }}</div>
</template>
`,language:`html`})]})}function vn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_n,{...e})}):_n(e)}function yn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление значением через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка значения через `,(0,$.jsx)(t.code,{children:`v-model`}),` (компонент использует стандартный `,(0,$.jsx)(t.code,{children:`modelValue`}),`).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`modelValue: string | number`}),` — текущее значение`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
<\/script>

<template>
<div>
  <button @click="value = 'Пример'">Установить значение</button>
  <button @click="value = ''">Очистить</button>
</div>

<Component v-model="value" />

<div>Текущее значение: {{ value }}</div>
</template>
`,language:`html`})]})}function bn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(yn,{...e})}):yn(e)}function xn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Managing selection via v-model:selected`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding for selected value using `,(0,$.jsx)(t.code,{children:`v-model:selected`}),` (component uses `,(0,$.jsx)(t.code,{children:`modelSelected`}),`).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`modelSelected: string | number | string[] | number[] | undefined`}),` — current selected value`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('')
<\/script>

<template>
<div>
  <button @click="selected = 'option1'">Select Option 1</button>
  <button @click="selected = 'option2'">Select Option 2</button>
  <button @click="selected = undefined">Clear</button>
</div>

<Component v-model:selected="selected" :list="['Option 1', 'Option 2', 'Option 3']" />

<div>Current selected value: {{ selected }}</div>
</template>
`,language:`html`})]})}function Sn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xn,{...e})}):xn(e)}function Cn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление выбором через v-model:selected`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка выбранного значения через `,(0,$.jsx)(t.code,{children:`v-model:selected`}),` (компонент использует `,(0,$.jsx)(t.code,{children:`modelSelected`}),`).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`modelSelected: string | number | string[] | number[] | undefined`}),` — текущее выбранное значение`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('')
<\/script>

<template>
<div>
  <button @click="selected = 'option1'">Выбрать Option 1</button>
  <button @click="selected = 'option2'">Выбрать Option 2</button>
  <button @click="selected = undefined">Очистить</button>
</div>

<Component v-model:selected="selected" :list="['Option 1', 'Option 2', 'Option 3']" />

<div>Текущее выбранное значение: {{ selected }}</div>
</template>
`,language:`html`})]})}function wn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Cn,{...e})}):Cn(e)}function Tn(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Expandable container for organizing content with smooth opening and closing animations, simplifying information structuring in the interface.`}),`
`,(0,$.jsx)(t.p,{children:`Accordion allows creating expandable sections with automatic animations, interactive header, and state management via v-model. The component supports padding configuration, visual dividers, and content customization through slots.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Smooth expand and collapse animations`}),`
`,(0,$.jsx)(t.li,{children:`Header with label, description, and icons`}),`
`,(0,$.jsx)(t.li,{children:`State management via v-model:open`}),`
`,(0,$.jsx)(t.li,{children:`Programmatic control (toggle, toOpen, toClose)`}),`
`,(0,$.jsx)(t.li,{children:`Internal padding configuration (padding)`}),`
`,(0,$.jsx)(t.li,{children:`Visual divider between sections`}),`
`,(0,$.jsx)(t.li,{children:`Customization via head and default slots`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`FAQ sections`}),`
`,(0,$.jsx)(t.li,{children:`Settings panels`}),`
`,(0,$.jsx)(t.li,{children:`Product filters`}),`
`,(0,$.jsx)(t.li,{children:`Information blocks`}),`
`,(0,$.jsx)(t.li,{children:`Menus with subsections`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Basic accordion -->
<Accordion label="Question 1">
  <p>Answer to the question.</p>
</Accordion>

<!-- With state management -->
<Accordion
  v-model:open="isOpen"
  label="Settings"
  icon="settings"
>
  <p>Settings content.</p>
</Accordion>

<!-- With custom header -->
<Accordion>
  <template #head>
    <div>Custom header</div>
  </template>
  <template #default>
    <p>Section content.</p>
  </template>
</Accordion>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Accordion is a component for creating expandable sections with animation support, state management, and flexible customization.`}),`
`]})]})}function En(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Tn,{...e})}):Tn(e)}function Dn(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Раскрывающийся контейнер для организации контента с плавными анимациями открытия и закрытия, упрощающий структурирование информации в интерфейсе.`}),`
`,(0,$.jsx)(t.p,{children:`Accordion позволяет создавать раскрывающиеся секции с автоматическими анимациями, интерактивным заголовком и возможностью управления через v-model. Компонент поддерживает настройку отступов, визуальных разделителей и кастомизацию содержимого через слоты.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Плавные анимации раскрытия и сворачивания`}),`
`,(0,$.jsx)(t.li,{children:`Заголовок с меткой, описанием и иконками`}),`
`,(0,$.jsx)(t.li,{children:`Управление состоянием через v-model:open`}),`
`,(0,$.jsx)(t.li,{children:`Программное управление (toggle, toOpen, toClose)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка внутренних отступов (padding)`}),`
`,(0,$.jsx)(t.li,{children:`Визуальный разделитель между секциями`}),`
`,(0,$.jsx)(t.li,{children:`Кастомизация через слоты head и default`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`FAQ секции`}),`
`,(0,$.jsx)(t.li,{children:`Панели настроек`}),`
`,(0,$.jsx)(t.li,{children:`Фильтры товаров`}),`
`,(0,$.jsx)(t.li,{children:`Информационные блоки`}),`
`,(0,$.jsx)(t.li,{children:`Меню с подразделами`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Базовый аккордеон -->
<Accordion label="Вопрос 1">
  <p>Ответ на вопрос.</p>
</Accordion>

<!-- С управлением состоянием -->
<Accordion
  v-model:open="isOpen"
  label="Настройки"
  icon="settings"
>
  <p>Содержимое настроек.</p>
</Accordion>

<!-- С кастомным заголовком -->
<Accordion>
  <template #head>
    <div>Свой заголовок</div>
  </template>
  <template #default>
    <p>Содержимое секции.</p>
  </template>
</Accordion>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Accordion — компонент для создания раскрывающихся секций с поддержкой анимаций, управления состоянием и гибкой кастомизации.`}),`
`]})]})}function On(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Dn,{...e})}):Dn(e)}function kn(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default(props: MotionTransformControlItem): any`}),` — Slot for placing the main accordion content that appears when the section is expanded.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MotionTransformControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isOpen: ComputedRef<boolean>`}),` — reactive open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isShow: ComputedRef<boolean>`}),` — visible or preparing to show.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classes: MotionTransformClassList`}),` — helper CSS classes.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`idControl: string`}),` — identifier for the control element.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`idBody: string`}),` — identifier for the body element.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: AriaRoleControlPropsInclude`}),` — binding attributes for accessibility.`]}),`
`]}),`
`]})]})}function An(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(kn,{...e})}):kn(e)}function jn(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default(props: MotionTransformControlItem): any`}),` — Слот для размещения основного содержимого аккордеона, которое появляется при раскрытии секции.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MotionTransformControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isOpen: ComputedRef<boolean>`}),` — реактивное состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isShow: ComputedRef<boolean>`}),` — видим либо готовится к показу.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classes: MotionTransformClassList`}),` — вспомогательные CSS‑классы.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`idControl: string`}),` — идентификатор элемента управления.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`idBody: string`}),` — идентификатор элемента тела.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: AriaRoleControlPropsInclude`}),` — атрибуты привязки для доступности.`]}),`
`]}),`
`]})]})}function Mn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(jn,{...e})}):jn(e)}function Nn(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A component for dynamic content switching based on the area context.`}),`
`,(0,$.jsx)(t.p,{children:`Area acts as a smart slot switcher. It retrieves the current area value from the injection context or uses a default value. The component then renders the slot whose name matches the current area value. If no matching slot is found, the default slot is displayed.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic slot selection based on the injected area value`}),`
`,(0,$.jsxs)(t.li,{children:[`Ability to specify a default area via the `,(0,$.jsx)(t.code,{children:`areaDefault`}),` property`]}),`
`,(0,$.jsx)(t.li,{children:`Support for nested areas and context inheritance`}),`
`,(0,$.jsx)(t.li,{children:`Seamless integration into complex layouts (e.g., Window)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Creating dynamic headers and footers`}),`
`,(0,$.jsx)(t.li,{children:`Adapting content based on the component's placement`}),`
`,(0,$.jsx)(t.li,{children:`Organizing complex layouts with dynamic content zones`}),`
`,(0,$.jsx)(t.li,{children:`Implementing extension slots in base components`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<Area area-default="header">
  <template #header>
    Header Content
  </template>
  <template #footer>
    Footer Content
  </template>
  <template #default>
    Default Content
  </template>
</Area>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Area is an essential tool for creating flexible and extensible interfaces, allowing components to react to their environment.`}),`
`]})]})}function Pn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Nn,{...e})}):Nn(e)}function Fn(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компонент для динамического переключения контента на основе контекста области (area).`}),`
`,(0,$.jsx)(t.p,{children:`Area выступает в роли умного переключателя слотов. Он получает текущее значение области из контекста внедрения или использует значение по умолчанию. Затем компонент отображает тот слот, имя которого совпадает с текущим значением области. Если подходящий слот не найден, отображается слот по умолчанию.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматический выбор слота на основе внедренного значения области`}),`
`,(0,$.jsxs)(t.li,{children:[`Возможность указания области по умолчанию через свойство `,(0,$.jsx)(t.code,{children:`areaDefault`})]}),`
`,(0,$.jsx)(t.li,{children:`Поддержка вложенных областей и наследования контекста`}),`
`,(0,$.jsx)(t.li,{children:`Плавная интеграция в сложные макеты (например, Window)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Создание динамических шапок и подвалов`}),`
`,(0,$.jsx)(t.li,{children:`Адаптация контента в зависимости от места размещения компонента`}),`
`,(0,$.jsx)(t.li,{children:`Организация сложных макетов с динамическими зонами контента`}),`
`,(0,$.jsx)(t.li,{children:`Реализация слотов расширения в базовых компонентах`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<Area area-default="header">
  <template #header>
    Контент для шапки
  </template>
  <template #footer>
    Контент для подвала
  </template>
  <template #default>
    Контент по умолчанию
  </template>
</Area>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Area является важным инструментом для создания гибких и расширяемых интерфейсов, позволяя компонентам реагировать на их окружение.`}),`
`]})]})}function In(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fn,{...e})}):Fn(e)}function Ln(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[area]: any`}),` — Dynamic slot for rendering content. The current area value is used as the slot name to select the appropriate content.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default: any`}),` — Default slot, which is displayed if no specific slot is provided for the current area value or if the area value is undefined.`]}),`
`]})}function Rn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ln,{...e})}):Ln(e)}function zn(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[area]: any`}),` — Динамический слот для рендеринга контента. Текущее значение области (area) используется как имя слота для выбора соответствующего контента.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default: any`}),` — Слот по умолчанию, который отображается, если для текущего значения области не предоставлен специфический слот или если значение области не определено.`]}),`
`]})}function Bn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zn,{...e})}):zn(e)}function Vn(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Container for organizing action buttons with support for primary and secondary grouping, various alignment modes, and adaptive behavior.`}),`
`,(0,$.jsx)(t.p,{children:`Actions centralizes the management of interactive button placement in dialogs, forms, and panels, automatically distributes space between groups, supports flexible adaptation to available space, and provides a unified API for creating consistent action sets. It serves as a fundamental component for building user interfaces with clear button hierarchy.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Core capabilities:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Button grouping (primary group via list, secondary via listSecondary)`}),`
`,(0,$.jsx)(t.li,{children:`Alignment control (left, right, center, block, none)`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive behavior through flexible property (adaptive/container)`}),`
`,(0,$.jsx)(t.li,{children:`Automatic spacer between button groups`}),`
`,(0,$.jsx)(t.li,{children:`Separate attribute configuration (buttonAttrs, buttonSecondaryAttrs)`}),`
`,(0,$.jsx)(t.li,{children:`Slot support for custom content (default, secondary)`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Button component with all its features`}),`
`,(0,$.jsx)(t.li,{children:`Flexible layout with automatic transition to block mode`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Action panels in dialogs and modal windows`}),`
`,(0,$.jsx)(t.li,{children:`Button sets in forms (cancel, save, apply)`}),`
`,(0,$.jsx)(t.li,{children:`Control panels with primary and auxiliary actions`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive interfaces with automatic restructuring on mobile devices`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { Actions } from '@dxtmisha/constructor'

const isLoading = ref(false)

const handleSave = async () => {
isLoading.value = true
await saveData()
isLoading.value = false
}
<\/script>

<template>
<Actions
  align="right"
  :list="[
    { label: 'Cancel' },
    { label: 'Save', primary: true, loading: isLoading }
  ]"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Actions is a smart container: it automatically manages button placement, adapts to screen size, and provides visual hierarchy between primary and secondary actions.`}),`
`]})]})}function Hn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Vn,{...e})}):Vn(e)}function Un(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Контейнер для организации кнопок действий с поддержкой основной и вторичной группировки, различных режимов выравнивания и адаптивного поведения.`}),`
`,(0,$.jsx)(t.p,{children:`Actions централизует управление расположением интерактивных кнопок в диалогах, формах и панелях, автоматически распределяет пространство между группами, поддерживает гибкую адаптацию к доступному месту и предоставляет единый API для создания консистентных наборов действий. Является фундаментальным компонентом для построения пользовательских интерфейсов с четкой иерархией кнопок.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Группировка кнопок (основная группа через list, вторичная через listSecondary)`}),`
`,(0,$.jsx)(t.li,{children:`Управление выравниванием (left, right, center, block, none)`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивное поведение через свойство flexible (adaptive/container)`}),`
`,(0,$.jsx)(t.li,{children:`Автоматический спейсер между группами кнопок`}),`
`,(0,$.jsx)(t.li,{children:`Раздельная настройка атрибутов (buttonAttrs, buttonSecondaryAttrs)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слотов для кастомного контента (default, secondary)`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с компонентом Button со всеми его возможностями`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая раскладка с автоматическим переходом в блочный режим`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Панели действий в диалоговых окнах и модальных окнах`}),`
`,(0,$.jsx)(t.li,{children:`Наборы кнопок в формах (отмена, сохранение, применение)`}),`
`,(0,$.jsx)(t.li,{children:`Панели управления с основными и дополнительными действиями`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивные интерфейсы с автоматической перестройкой на мобильных устройствах`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { Actions } from '@dxtmisha/constructor'

const isLoading = ref(false)

const handleSave = async () => {
isLoading.value = true
await saveData()
isLoading.value = false
}
<\/script>

<template>
<Actions
  align="right"
  :list="[
    { label: 'Отмена' },
    { label: 'Сохранить', primary: true, loading: isLoading }
  ]"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Actions — это умный контейнер: он автоматически управляет расположением кнопок, адаптируется к размеру экрана и обеспечивает визуальную иерархию между основными и вторичными действиями.`}),`
`]})]})}function Wn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Un,{...e})}):Un(e)}function Gn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Adaptive layout behavior`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`flexible`}),` property determines automatic switching to block mode when space is limited.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'adaptive'`}),` — uses media queries to determine breakpoint`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'container'`}),` — uses container queries to adapt to parent size`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Automatically applies `,(0,$.jsx)(t.code,{children:`align="block"`}),` property when available space becomes smaller than a defined breakpoint. With `,(0,$.jsx)(t.code,{children:`adaptive`}),` it tracks screen width through media queries, with `,(0,$.jsx)(t.code,{children:`container`}),` it adapts to parent container size. Suitable for creating adaptive interfaces that display correctly on both desktop and mobile devices without additional code.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Automatic transition on narrow screens -->
<Actions flexible="adaptive" :list="[...]" />

<!-- Adapts to parent size -->
<Actions flexible="container" :list="[...]" />
`,language:`html`})]})}function Kn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Gn,{...e})}):Gn(e)}function qn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Адаптивное поведение раскладки`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`flexible`}),` определяет автоматическое переключение раскладки в блочный режим при нехватке места.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'adaptive'`}),` — использует медиа-запросы для определения точки перехода`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'container'`}),` — использует container queries для адаптации к размеру родителя`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Автоматически применяет свойство `,(0,$.jsx)(t.code,{children:`align="block"`}),` когда доступное пространство становится меньше определенного брейкпоинта. При `,(0,$.jsx)(t.code,{children:`adaptive`}),` отслеживает ширину экрана через медиа-запросы, при `,(0,$.jsx)(t.code,{children:`container`}),` адаптируется к размеру родительского контейнера. Подходит для создания адаптивных интерфейсов, которые корректно отображаются как на десктопе, так и на мобильных устройствах без дополнительного кода.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Автоматический переход на узких экранах -->
<Actions flexible="adaptive" :list="[...]" />

<!-- Адаптация к размеру родителя -->
<Actions flexible="container" :list="[...]" />
`,language:`html`})]})}function Jn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qn,{...e})}):qn(e)}function Yn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Managing action button groups`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`list`}),` and `,(0,$.jsx)(t.code,{children:`listSecondary`}),` properties work together to organize buttons in the Actions container. They manage the rendering of primary and secondary button groups with automatic attribute application and visual separation.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`list`}),` — array of configurations for primary action buttons (Cancel, Save, Apply)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`listSecondary`}),` — array of configurations for secondary buttons (Delete, Reset, Export)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Each array element represents an object with button configuration, supporting all Button component properties (label, icon, disabled, primary, loading, and others). The component automatically applies base attributes from `,(0,$.jsx)(t.code,{children:`buttonAttrs`}),` to primary buttons and from `,(0,$.jsx)(t.code,{children:`buttonSecondaryAttrs`}),` to secondary ones. Secondary buttons are positioned separately with an automatic spacer and are hidden in `,(0,$.jsx)(t.code,{children:`align="center"`}),` and `,(0,$.jsx)(t.code,{children:`align="block"`}),` modes. Use `,(0,$.jsx)(t.code,{children:`list`}),` for primary actions and `,(0,$.jsx)(t.code,{children:`listSecondary`}),` for destructive or less important operations.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Primary buttons -->
<Actions
:list="[
  { label: 'Cancel', onClick: () => close() },
  { label: 'Save', primary: true, onClick: () => save() }
]"
/>

<!-- Primary and secondary buttons -->
<Actions
:list="[
  { label: 'Cancel' },
  { label: 'Save', primary: true }
]"
:list-secondary="[
  { label: 'Delete', text: true, icon: 'delete', palette: 'error' }
]"
/>

<!-- Buttons with dynamic state -->
<Actions
:list="[
  { label: 'Cancel', disabled: isProcessing },
  { label: 'Save', primary: true, loading: isLoading }
]"
:button-attrs="{ size: 'medium' }"
/>

<!-- Secondary buttons with settings -->
<Actions
:list="[{ label: 'Close' }]"
:list-secondary="[
  { label: 'Export', icon: 'download' },
  { label: 'Help', icon: 'help' }
]"
:button-secondary-attrs="{ size: 'small', text: true }"
/>
`,language:`html`})]})}function Xn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Yn,{...e})}):Yn(e)}function Zn(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление группами кнопок действий`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`list`}),` и `,(0,$.jsx)(t.code,{children:`listSecondary`}),` работают в связке для организации кнопок в контейнере Actions. Они управляют рендерингом основной и вторичной групп кнопок с автоматическим применением атрибутов и визуальным разделением.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`list`}),` — массив конфигураций для основных кнопок действий (Отмена, Сохранить, Применить)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`listSecondary`}),` — массив конфигураций для вторичных кнопок (Удалить, Сбросить, Экспорт)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Каждый элемент массива представляет собой объект с конфигурацией кнопки, поддерживающий все свойства компонента Button (label, icon, disabled, primary, loading и другие). Компонент автоматически применяет базовые атрибуты из `,(0,$.jsx)(t.code,{children:`buttonAttrs`}),` к основным кнопкам и из `,(0,$.jsx)(t.code,{children:`buttonSecondaryAttrs`}),` к вторичным. Вторичные кнопки располагаются отдельно с автоматическим спейсером и скрываются в режимах `,(0,$.jsx)(t.code,{children:`align="center"`}),` и `,(0,$.jsx)(t.code,{children:`align="block"`}),`. Используйте `,(0,$.jsx)(t.code,{children:`list`}),` для основных действий и `,(0,$.jsx)(t.code,{children:`listSecondary`}),` для деструктивных или менее важных операций.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Основные кнопки -->
<Actions
:list="[
  { label: 'Отмена', onClick: () => close() },
  { label: 'Сохранить', primary: true, onClick: () => save() }
]"
/>

<!-- Основные и вторичные кнопки -->
<Actions
:list="[
  { label: 'Отмена' },
  { label: 'Сохранить', primary: true }
]"
:list-secondary="[
  { label: 'Удалить', text: true, icon: 'delete', palette: 'error' }
]"
/>

<!-- Кнопки с динамическим состоянием -->
<Actions
:list="[
  { label: 'Отмена', disabled: isProcessing },
  { label: 'Сохранить', primary: true, loading: isLoading }
]"
:button-attrs="{ size: 'medium' }"
/>

<!-- Вторичные кнопки с настройками -->
<Actions
:list="[{ label: 'Закрыть' }]"
:list-secondary="[
  { label: 'Экспорт', icon: 'download' },
  { label: 'Справка', icon: 'help' }
]"
:button-secondary-attrs="{ size: 'small', text: true }"
/>
`,language:`html`})]})}function Qn(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Zn,{...e})}):Zn(e)}function $n(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating mobile-optimized action panels that slide up from the bottom of the screen with smooth animation.`}),`
`,(0,$.jsxs)(t.p,{children:[`ActionSheet is a specialized wrapper over the Window component with a preset `,(0,$.jsx)(t.code,{children:`actionSheet`}),` adaptive mode. The component automatically positions itself at the bottom of the screen and slides up when opened, following iOS and Material Design mobile interface patterns. Supports swipe gestures for closing, integration with the Bars component for the header, and automatic focus management.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Positioning at the bottom of the screen with slide-up animation`}),`
`,(0,$.jsx)(t.li,{children:`Touch gesture support for closing by swiping down`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Bars for header display`}),`
`,(0,$.jsx)(t.li,{children:`Automatic background blocking when opened`}),`
`,(0,$.jsx)(t.li,{children:`Closing by clicking on overlay or close button`}),`
`,(0,$.jsx)(t.li,{children:`Lifecycle events (opening, closing)`}),`
`,(0,$.jsx)(t.li,{children:`Slot support for content customization`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive height based on content size`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Action menus for mobile applications`}),`
`,(0,$.jsx)(t.li,{children:`Option and selection lists`}),`
`,(0,$.jsx)(t.li,{children:`Forms and filters on mobile devices`}),`
`,(0,$.jsx)(t.li,{children:`Context menus for touch interfaces`}),`
`,(0,$.jsx)(t.li,{children:`Confirmations and notifications`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleAction = (action) => {
console.log('Selected action:', action)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Open Actions</button>

<ActionSheet
  v-model:open="isOpen"
  :touchClose="true"
>
  <template #title>
    <h3>Choose Action</h3>
  </template>

  <template #default>
    <div class="action-list">
      <button @click="handleAction('share')">Share</button>
      <button @click="handleAction('copy')">Copy Link</button>
      <button @click="handleAction('download')">Download</button>
    </div>
  </template>

  <template #footer>
    <button @click="isOpen = false">Cancel</button>
  </template>
</ActionSheet>
</template>
`,language:`html`})]})}function er(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($n,{...e})}):$n(e)}function tr(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания мобильно-оптимизированных панелей действий, выдвигающихся снизу экрана с плавной анимацией.`}),`
`,(0,$.jsxs)(t.p,{children:[`ActionSheet представляет собой специализированную обертку над компонентом Window с предустановленным адаптивным режимом `,(0,$.jsx)(t.code,{children:`actionSheet`}),`. Компонент автоматически позиционируется внизу экрана и выдвигается вверх при открытии, следуя паттернам мобильных интерфейсов iOS и Material Design. Поддерживает жесты свайпа для закрытия, интеграцию с компонентом Bars для заголовка и автоматическое управление фокусом.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Позиционирование внизу экрана с анимацией выдвижения`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка touch-жестов для закрытия свайпом вниз`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с Bars для отображения заголовка`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическая блокировка фона при открытии`}),`
`,(0,$.jsx)(t.li,{children:`Закрытие по клику на overlay или кнопке закрытия`}),`
`,(0,$.jsx)(t.li,{children:`События жизненного цикла (открытие, закрытие)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слотов для кастомизации контента`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивная высота под размер контента`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Меню действий для мобильных приложений`}),`
`,(0,$.jsx)(t.li,{children:`Списки опций и выборов`}),`
`,(0,$.jsx)(t.li,{children:`Формы и фильтры на мобильных устройствах`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные меню для touch-интерфейсов`}),`
`,(0,$.jsx)(t.li,{children:`Подтверждения и уведомления`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleAction = (action) => {
console.log('Выбрано действие:', action)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Открыть действия</button>

<ActionSheet
  v-model:open="isOpen"
  :touchClose="true"
>
  <template #title>
    <h3>Выберите действие</h3>
  </template>

  <template #default>
    <div class="action-list">
      <button @click="handleAction('share')">Поделиться</button>
      <button @click="handleAction('copy')">Копировать ссылку</button>
      <button @click="handleAction('download')">Скачать</button>
    </div>
  </template>

  <template #footer>
    <button @click="isOpen = false">Отмена</button>
  </template>
</ActionSheet>
</template>
`,language:`html`})]})}function nr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(tr,{...e})}):tr(e)}function rr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Touch Close Gesture`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`touchClose`}),` property enables closing the ActionSheet with a swipe-down gesture.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — enables closing by swiping down (default)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — disables gesture closing`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`When enabled, a special tab indicator (drag handle) is displayed in the header area, which users can pull down to close the panel. This follows iOS and Material Design mobile interface patterns, providing intuitive interaction on touch devices.`}),`
`,(0,$.jsx)(a,{code:`
<!-- With gesture closing enabled -->
<ActionSheet :touchClose="true" />

<!-- Without gesture closing -->
<ActionSheet :touchClose="false" />
`,language:`html`}),`
`,(0,$.jsx)(t.p,{children:`The closing gesture is triggered by swiping down in the header area. The component automatically manages touch events and closing animation, ensuring smooth follow-through with the user's finger movement.`})]})}function ir(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(rr,{...e})}):rr(e)}function ar(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Закрытие жестом`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`touchClose`}),` включает возможность закрытия ActionSheet жестом свайпа вниз.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — включает закрытие свайпом вниз (по умолчанию)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — отключает закрытие жестом`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`При включенном свойстве в области заголовка отображается специальная tab-полоска (индикатор перетаскивания), за которую пользователь может потянуть вниз для закрытия панели. Это следует паттернам мобильных интерфейсов iOS и Material Design, обеспечивая интуитивное взаимодействие на сенсорных устройствах.`}),`
`,(0,$.jsx)(a,{code:`
<!-- С возможностью закрытия жестом -->
<ActionSheet :touchClose="true" />

<!-- Без возможности закрытия жестом -->
<ActionSheet :touchClose="false" />
`,language:`html`}),`
`,(0,$.jsx)(t.p,{children:`Жест закрытия срабатывает при свайпе вниз в области заголовка. Компонент автоматически управляет touch-событиями и анимацией закрытия, обеспечивая плавное следование за пальцем пользователя.`})]})}function or(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ar,{...e})}):ar(e)}function sr(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating anchor links with smooth scrolling and URL copying capabilities.`}),`
`,(0,$.jsx)(t.p,{children:`Anchor provides interactive anchor links for navigating through page sections. The component automatically handles clicks, updates the URL address, supports smooth scrolling with customizable offset, and integrates with Tooltip for displaying copy notifications. It can work both in regular navigation mode and in link copying mode to clipboard.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Smooth scrolling to target element with configurable parameters`}),`
`,(0,$.jsx)(t.li,{children:`Automatic navigation on page load based on URL hash`}),`
`,(0,$.jsx)(t.li,{children:`Copy mode for copying full link to clipboard`}),`
`,(0,$.jsx)(t.li,{children:`Tooltip integration for copy notifications`}),`
`,(0,$.jsx)(t.li,{children:`Icon support for visual styling`}),`
`,(0,$.jsx)(t.li,{children:`Hidden anchors for creating invisible navigation points`}),`
`,(0,$.jsx)(t.li,{children:`URL updates via history API without page reload`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Navigation through documentation sections and long pages`}),`
`,(0,$.jsx)(t.li,{children:`Anchors for headings with copy link button`}),`
`,(0,$.jsx)(t.li,{children:`Table of contents and page navigation menu`}),`
`,(0,$.jsx)(t.li,{children:`"Share link to section" buttons`}),`
`,(0,$.jsx)(t.li,{children:`Creating invisible anchor points for programmatic navigation`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Regular anchor -->
<Anchor name="section-1" text="Go to section" />

<!-- With copy mode -->
<Anchor name="section-2" text="Copy link" isCopy />

<!-- Hidden anchor -->
<Anchor name="section-3" hide />
</template>
`,language:`html`})]})}function cr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sr,{...e})}):sr(e)}function lr(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания якорных ссылок с плавной прокруткой и возможностью копирования URL.`}),`
`,(0,$.jsx)(t.p,{children:`Anchor предоставляет интерактивные якорные ссылки для навигации по разделам страницы. Компонент автоматически обрабатывает клики, обновляет URL-адрес, поддерживает плавную прокрутку с настраиваемым отступом и интегрируется с Tooltip для отображения уведомлений при копировании. Может работать как в режиме обычной навигации, так и в режиме копирования ссылки в буфер обмена.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Плавная прокрутка к целевому элементу с настройкой параметров`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическая навигация при загрузке страницы по хешу в URL`}),`
`,(0,$.jsx)(t.li,{children:`Режим копирования полной ссылки в буфер обмена`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с Tooltip для уведомлений о копировании`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок для визуального оформления`}),`
`,(0,$.jsx)(t.li,{children:`Скрытые якоря для создания невидимых точек навигации`}),`
`,(0,$.jsx)(t.li,{children:`Обновление URL через history API без перезагрузки страницы`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Навигация по разделам документации и длинных страниц`}),`
`,(0,$.jsx)(t.li,{children:`Якоря для заголовков с кнопкой копирования ссылки`}),`
`,(0,$.jsx)(t.li,{children:`Оглавление и меню навигации по странице`}),`
`,(0,$.jsx)(t.li,{children:`Кнопки "Поделиться ссылкой на раздел"`}),`
`,(0,$.jsx)(t.li,{children:`Создание невидимых якорных точек для программной навигации`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Обычный якорь -->
<Anchor name="section-1" text="Перейти к разделу" />

<!-- С копированием -->
<Anchor name="section-2" text="Скопировать ссылку" isCopy />

<!-- Скрытый якорь -->
<Anchor name="section-3" hide />
</template>
`,language:`html`})]})}function ur(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(lr,{...e})}):lr(e)}function dr(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`go(): void`}),` — Method for scrolling the page to the current anchor element. Uses scroll settings (`,(0,$.jsx)(t.code,{children:`behavior`}),`, `,(0,$.jsx)(t.code,{children:`block`}),`, `,(0,$.jsx)(t.code,{children:`inline`}),`, `,(0,$.jsx)(t.code,{children:`shift`}),`) and updates the page URL.`]}),`
`]})}function fr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(dr,{...e})}):dr(e)}function pr(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`go(): void`}),` — Метод для прокрутки страницы к текущему элементу якоря. Использует настройки прокрутки (`,(0,$.jsx)(t.code,{children:`behavior`}),`, `,(0,$.jsx)(t.code,{children:`block`}),`, `,(0,$.jsx)(t.code,{children:`inline`}),`, `,(0,$.jsx)(t.code,{children:`shift`}),`) и обновляет URL страницы.`]}),`
`]})}function mr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pr,{...e})}):pr(e)}function hr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Hidden anchors`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`hide`}),` property creates an invisible anchor point for programmatic navigation without visual representation.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`hide`}),` — hides the visual representation of the component (default `,(0,$.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`name`}),` — anchor name for navigation (required property)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`When `,(0,$.jsx)(t.code,{children:`hide`}),` is enabled, the component renders as a hidden `,(0,$.jsx)(t.code,{children:`<a name="...">`}),` element without text, icons, or styling. This is useful for creating invisible navigation points that can be programmatically scrolled to or used as target elements for other anchors. The hidden anchor remains in the DOM and is accessible for navigation via URL hash or scroll methods.`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Hidden anchor in section -->
<section>
  <Anchor name="section-start" hide />
  <h2>Section heading</h2>
</section>

<!-- Combination of hidden and visible -->
<h3>
  <Anchor name="heading" hide />
  Heading
  <Anchor name="heading" isCopy iconTag="link" />
</h3>
</template>
`,language:`html`})]})}function gr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hr,{...e})}):hr(e)}function _r(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Скрытые якоря`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`hide`}),` создаёт невидимую якорную точку для программной навигации без визуального представления.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`hide`}),` — скрывает визуальное представление компонента (по умолчанию `,(0,$.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`name`}),` — имя якоря для навигации (обязательное свойство)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`При включённом `,(0,$.jsx)(t.code,{children:`hide`}),` компонент рендерится как скрытый элемент `,(0,$.jsx)(t.code,{children:`<a name="...">`}),` без текста, иконок и стилей оформления. Это полезно для создания невидимых точек навигации, к которым можно программно прокручивать страницу или использовать их как целевые элементы для других якорей. Скрытый якорь остаётся в DOM и доступен для навигации через URL хеш или методы прокрутки.`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Скрытый якорь в секции -->
<section>
  <Anchor name="section-start" hide />
  <h2>Заголовок раздела</h2>
</section>

<!-- Комбинация скрытого и видимого -->
<h3>
  <Anchor name="heading" hide />
  Заголовок
  <Anchor name="heading" isCopy iconTag="link" />
</h3>
</template>
`,language:`html`})]})}function vr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_r,{...e})}):_r(e)}function yr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Copy link`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`isCopy`}),` property switches the component to anchor link copying mode to clipboard.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isCopy`}),` — enables link copying mode (default `,(0,$.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconTag`}),` — icon displayed in copy mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconContentCopy`}),` — icon shown after successful copy`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`delayHide`}),` — delay before hiding notification in milliseconds (default `,(0,$.jsx)(t.code,{children:`3072`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`When `,(0,$.jsx)(t.code,{children:`isCopy`}),` is enabled, clicking the component doesn't scroll to the anchor but copies the full link (including origin and pathname) to clipboard. After copying, a Tooltip with notification automatically opens and closes after the time specified in `,(0,$.jsx)(t.code,{children:`delayHide`}),`. The icon changes from `,(0,$.jsx)(t.code,{children:`iconTag`}),` to `,(0,$.jsx)(t.code,{children:`iconContentCopy`}),` for visual confirmation of the action.`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Basic mode -->
<Anchor name="section" text="Copy link" isCopy />

<!-- With custom icons -->
<Anchor name="heading" isCopy iconTag="share" iconContentCopy="check" />
</template>
`,language:`html`})]})}function br(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(yr,{...e})}):yr(e)}function xr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Копирование ссылки`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`isCopy`}),` переключает компонент в режим копирования ссылки на якорь в буфер обмена.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isCopy`}),` — включает режим копирования ссылки (по умолчанию `,(0,$.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconTag`}),` — иконка, отображаемая в режиме копирования`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconContentCopy`}),` — иконка, показываемая после успешного копирования`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`delayHide`}),` — задержка перед скрытием уведомления в миллисекундах (по умолчанию `,(0,$.jsx)(t.code,{children:`3072`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`При включённом `,(0,$.jsx)(t.code,{children:`isCopy`}),` клик по компоненту не выполняет прокрутку к якорю, а копирует полную ссылку (включая origin и pathname) в буфер обмена. После копирования автоматически открывается Tooltip с уведомлением, который закрывается через время, указанное в `,(0,$.jsx)(t.code,{children:`delayHide`}),`. Иконка меняется с `,(0,$.jsx)(t.code,{children:`iconTag`}),` на `,(0,$.jsx)(t.code,{children:`iconContentCopy`}),` для визуального подтверждения действия.`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Базовый режим -->
<Anchor name="section" text="Скопировать ссылку" isCopy />

<!-- С кастомными иконками -->
<Anchor name="heading" isCopy iconTag="share" iconContentCopy="check" />
</template>
`,language:`html`})]})}function Sr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xr,{...e})}):xr(e)}function Cr(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Scroll Settings`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`behavior`}),`, `,(0,$.jsx)(t.code,{children:`block`}),`, `,(0,$.jsx)(t.code,{children:`inline`}),`, and `,(0,$.jsx)(t.code,{children:`shift`}),` properties control the scrolling behavior to the element when navigating via an anchor.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`behavior`}),` — defines the scroll transition animation (`,(0,$.jsx)(t.code,{children:`auto`}),`, `,(0,$.jsx)(t.code,{children:`smooth`}),`, `,(0,$.jsx)(t.code,{children:`instant`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`block`}),` — vertical alignment of the element (`,(0,$.jsx)(t.code,{children:`start`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`end`}),`, `,(0,$.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`inline`}),` — horizontal alignment of the element (`,(0,$.jsx)(t.code,{children:`start`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`end`}),`, `,(0,$.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`shift`}),` — scroll offset from the top edge (in pixels)`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Note:`}),` If the `,(0,$.jsx)(t.code,{children:`shift`}),` property is set, the component uses `,(0,$.jsx)(t.code,{children:`window.scrollTo`}),` instead of `,(0,$.jsx)(t.code,{children:`element.scrollIntoView`}),`. In this case, the `,(0,$.jsx)(t.code,{children:`block`}),` and `,(0,$.jsx)(t.code,{children:`inline`}),` properties are ignored, and scrolling is always aligned to the top edge of the element with the specified offset.`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`These properties allow you to customize exactly how the page scrolls to the target element. For example, you can enable smooth scrolling or change the positioning of the element on the screen after scrolling.`}),`
`,(0,$.jsx)(a,{code:`
<template>
<Anchor
  href="#target"
  behavior="smooth"
  block="center"
  inline="nearest"
>
  Go to element
</Anchor>

<Anchor
  href="#target"
  :shift="100"
>
  Go with offset
</Anchor>
</template>
`,language:`html`})]})}function wr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Cr,{...e})}):Cr(e)}function Tr(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Настройка прокрутки`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`behavior`}),`, `,(0,$.jsx)(t.code,{children:`block`}),`, `,(0,$.jsx)(t.code,{children:`inline`}),` и `,(0,$.jsx)(t.code,{children:`shift`}),` управляют поведением прокрутки к элементу при переходе по якорю.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`behavior`}),` — определяет анимацию прокрутки (`,(0,$.jsx)(t.code,{children:`auto`}),`, `,(0,$.jsx)(t.code,{children:`smooth`}),`, `,(0,$.jsx)(t.code,{children:`instant`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`block`}),` — вертикальное выравнивание элемента (`,(0,$.jsx)(t.code,{children:`start`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`end`}),`, `,(0,$.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`inline`}),` — горизонтальное выравнивание элемента (`,(0,$.jsx)(t.code,{children:`start`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`end`}),`, `,(0,$.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`shift`}),` — смещение прокрутки от верхнего края (в пикселях)`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Примечание:`}),` Если задано свойство `,(0,$.jsx)(t.code,{children:`shift`}),`, компонент использует `,(0,$.jsx)(t.code,{children:`window.scrollTo`}),` вместо `,(0,$.jsx)(t.code,{children:`element.scrollIntoView`}),`. В этом случае свойства `,(0,$.jsx)(t.code,{children:`block`}),` и `,(0,$.jsx)(t.code,{children:`inline`}),` игнорируются, и прокрутка всегда выполняется к верхней границе элемента с учетом указанного смещения.`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Эти свойства позволяют настроить, как именно страница будет прокручиваться к целевому элементу. Например, можно сделать плавную прокрутку или изменить позиционирование элемента на экране после прокрутки.`}),`
`,(0,$.jsx)(a,{code:`
<template>
<Anchor
  href="#target"
  behavior="smooth"
  block="center"
  inline="nearest"
>
  Перейти к элементу
</Anchor>

<Anchor
  href="#target"
  :shift="100"
>
  Перейти со смещением
</Anchor>
</template>
`,language:`html`})]})}function Er(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Tr,{...e})}):Tr(e)}function Dr(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for displaying a graphical indicator (arrow) used to visually link floating elements to their target.`}),`
`,(0,$.jsx)(t.p,{children:`Arrow provides automatic or manual positioning of the indicator. It is often used within Tooltip, Popover, and Dropdown components to indicate the direction towards the trigger or target element. The component supports adaptation to various sizes and styles, and can dynamically update its position.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic and manual positioning (top, bottom, left, right)`}),`
`,(0,$.jsx)(t.li,{children:`Support for inverted style`}),`
`,(0,$.jsx)(t.li,{children:`Binding to a target element (elementTarget)`}),`
`,(0,$.jsx)(t.li,{children:`Dynamic position updates`}),`
`,(0,$.jsx)(t.li,{children:`Customizable SVG arrow graphics`}),`
`,(0,$.jsx)(t.li,{children:`Integration with positioning components`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Indicators in tooltips`}),`
`,(0,$.jsx)(t.li,{children:`Arrows in dropdown menus and popovers`}),`
`,(0,$.jsx)(t.li,{children:`Visual links in tour guides`}),`
`,(0,$.jsx)(t.li,{children:`Directional indicators in the interface`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { Arrow } from 'dxt-ui'
<\/script>

<template>
<div class="relative p-4 border rounded">
  Content with arrow
  <Arrow position="top" />
</div>
</template>
`,language:`html`})]})}function Or(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Dr,{...e})}):Dr(e)}function kr(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для отображения графического указателя (стрелки), используемого для визуальной связи всплывающих элементов с их целью.`}),`
`,(0,$.jsx)(t.p,{children:`Arrow обеспечивает автоматическое или ручное позиционирование указателя. Часто применяется в составе компонентов Tooltip, Popover и Dropdown для указания направления на триггер или целевой элемент. Компонент поддерживает адаптацию под различные размеры и стили, а также может динамически обновлять свое положение.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое и ручное позиционирование (top, bottom, left, right)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка инвертированного стиля`}),`
`,(0,$.jsx)(t.li,{children:`Привязка к целевому элементу (elementTarget)`}),`
`,(0,$.jsx)(t.li,{children:`Динамическое обновление положения`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемая SVG-графика стрелки`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с компонентами позиционирования`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Указатели во всплывающих подсказках`}),`
`,(0,$.jsx)(t.li,{children:`Стрелки в выпадающих меню и поповерах`}),`
`,(0,$.jsx)(t.li,{children:`Визуальные связи в пошаговых руководствах`}),`
`,(0,$.jsx)(t.li,{children:`Индикаторы направления в интерфейсе`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { Arrow } from 'dxt-ui'
<\/script>

<template>
<div class="relative p-4 border rounded">
  Контент с указателем
  <Arrow position="top" />
</div>
</template>
`,language:`html`})]})}function Ar(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(kr,{...e})}):kr(e)}function jr(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Compact visual indicator for displaying status, notification counts, or markers on interface elements with support for various display modes and automatic overflow management.`}),`
`,(0,$.jsx)(t.p,{children:`Badge provides a universal solution for creating informative indicators with flexible content configuration, positioning, and appearance. The component supports displaying text, numbers with maximum value limits, icons, and dot indicators, automatically hides when content is absent, and integrates with the slot system for customization.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Multiple display modes (text, numbers, icons, dot indicator)`}),`
`,(0,$.jsx)(t.li,{children:`Automatic overflow management with maximum value configuration`}),`
`,(0,$.jsx)(t.li,{children:`Flexible positioning relative to parent elements (overlap, vertical, horizontal)`}),`
`,(0,$.jsx)(t.li,{children:`Automatic hiding when content is absent (dot, icon, label)`}),`
`,(0,$.jsx)(t.li,{children:`Integration with LabelNumberInclude for numeric value processing`}),`
`,(0,$.jsx)(t.li,{children:`Icon support through IconInclude`}),`
`,(0,$.jsx)(t.li,{children:`Color variants for different status types`}),`
`,(0,$.jsx)(t.li,{children:`Visibility control via hide property`}),`
`,(0,$.jsx)(t.li,{children:`Customization through slots for complete content control`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Unread notification count indicators`}),`
`,(0,$.jsx)(t.li,{children:`Status markers on user avatars (online/offline)`}),`
`,(0,$.jsx)(t.li,{children:`Item counters in shopping carts or lists`}),`
`,(0,$.jsx)(t.li,{children:`New message indicators in chats`}),`
`,(0,$.jsx)(t.li,{children:`Status markers on product cards`}),`
`,(0,$.jsx)(t.li,{children:`Visual hints about available updates`}),`
`,(0,$.jsx)(t.li,{children:`Numeric indicators on tabs and menu items`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const cartCount = ref(5)
const unreadMessages = ref(127)
const isOnline = ref(true)

const addToCart = () => {
cartCount.value++
}
<\/script>

<template>
<div class="badge-examples">
  <!-- Basic badge with number -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="shopping_cart" @click="addToCart"/>
    <Badge :label="cartCount"/>
  </div>

  <!-- Badge with maximum value limit -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="notifications"/>
    <Badge :label="unreadMessages" :label-max="99"/>
  </div>

  <!-- Dot status indicator -->
  <div style="position: relative; display: inline-block;">
    <Avatar src="/user-avatar.jpg"/>
    <Badge
      dot
      :selected="isOnline"
      overlap="circular"
    />
  </div>

  <!-- Badge with icon and text -->
  <div style="position: relative; display: inline-block;">
    <Button>Profile</Button>
    <Badge
      icon="verified"
      label="Pro"
      overlap="static"
    />
  </div>

  <!-- Badge with custom positioning -->
  <div style="position: relative; display: inline-block;">
    <Card>Content</Card>
    <Badge
      label="New"
      vertical="bottom"
      horizontal="left"
    />
  </div>
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Badge is designed as a universal UI component for creating compact visual indicators with comprehensive support for various content types, automatic display management, and flexible positioning settings.`}),`
`]})]})}function Mr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(jr,{...e})}):jr(e)}function Nr(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компактный визуальный индикатор для отображения статуса, количества уведомлений или маркеров на элементах интерфейса с поддержкой различных режимов отображения и автоматическим управлением переполнением.`}),`
`,(0,$.jsx)(t.p,{children:`Badge предоставляет универсальное решение для создания информативных индикаторов с гибкой настройкой содержимого, позиционирования и внешнего вида. Компонент поддерживает отображение текста, чисел с ограничением максимального значения, иконок и точечных индикаторов, автоматически скрывается при отсутствии контента и интегрируется с системой слотов для кастомизации.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Множественные режимы отображения (текст, числа, иконки, точечный индикатор)`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое управление переполнением с настройкой максимального значения`}),`
`,(0,$.jsx)(t.li,{children:`Гибкое позиционирование относительно родительских элементов (overlap, vertical, horizontal)`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое скрытие при отсутствии контента (dot, icon, label)`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с LabelNumberInclude для обработки числовых значений`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок через IconInclude`}),`
`,(0,$.jsx)(t.li,{children:`Цветовые варианты для различных типов статуса`}),`
`,(0,$.jsx)(t.li,{children:`Управление видимостью через свойство hide`}),`
`,(0,$.jsx)(t.li,{children:`Кастомизация через слоты для полного контроля над содержимым`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Индикаторы количества непрочитанных уведомлений`}),`
`,(0,$.jsx)(t.li,{children:`Маркеры статуса на аватарах пользователей (онлайн/оффлайн)`}),`
`,(0,$.jsx)(t.li,{children:`Счетчики элементов в корзине или списках`}),`
`,(0,$.jsx)(t.li,{children:`Индикаторы новых сообщений в чатах`}),`
`,(0,$.jsx)(t.li,{children:`Статусные маркеры на карточках товаров`}),`
`,(0,$.jsx)(t.li,{children:`Визуальные подсказки о наличии обновлений`}),`
`,(0,$.jsx)(t.li,{children:`Числовые индикаторы на вкладках и пунктах меню`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const cartCount = ref(5)
const unreadMessages = ref(127)
const isOnline = ref(true)

const addToCart = () => {
cartCount.value++
}
<\/script>

<template>
<div class="badge-examples">
  <!-- Базовый бейдж с числом -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="shopping_cart" @click="addToCart"/>
    <Badge :label="cartCount"/>
  </div>

  <!-- Бейдж с ограничением максимального значения -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="notifications"/>
    <Badge :label="unreadMessages" :label-max="99"/>
  </div>

  <!-- Точечный индикатор статуса -->
  <div style="position: relative; display: inline-block;">
    <Avatar src="/user-avatar.jpg"/>
    <Badge
      dot
      :selected="isOnline"
      overlap="circular"
    />
  </div>

  <!-- Бейдж с иконкой и текстом -->
  <div style="position: relative; display: inline-block;">
    <Button>Профиль</Button>
    <Badge
      icon="verified"
      label="Pro"
      overlap="static"
    />
  </div>

  <!-- Бейдж с кастомным позиционированием -->
  <div style="position: relative; display: inline-block;">
    <Card>Контент</Card>
    <Badge
      label="Новое"
      vertical="bottom"
      horizontal="left"
    />
  </div>
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Badge разработан как универсальный UI-компонент для создания компактных визуальных индикаторов с комплексной поддержкой различных типов контента, автоматическим управлением отображением и гибкими настройками позиционирования.`}),`
`]})]})}function Pr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Nr,{...e})}):Nr(e)}function Fr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Dot indicator`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`dot`}),` property transforms Badge into a compact circular indicator without text content, used for simple visual status notifications.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — displays Badge as a dot indicator`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — displays Badge in standard mode with content (default)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Creates a minimalist visual marker for indicating states, activity, or notifications without displaying specific values. Ideal for user presence indicators (online/offline), unread notification markers, and status dots on interface elements. When the `,(0,$.jsx)(t.code,{children:`dot`}),` property is activated, any text content or numeric values are ignored, displaying only the color indicator.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Standard Badge with content -->
<Badge label="5" />

<!-- Dot indicator -->
<Badge dot />

<!-- Dot indicator for online status -->
<Badge dot :selected="isOnline" overlap="circular" />
`,language:`html`})]})}function Ir(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fr,{...e})}):Fr(e)}function Lr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Точечный индикатор`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`dot`}),` преобразует Badge в компактный круглый индикатор без текстового содержимого, используемый для простых визуальных уведомлений о статусе.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — отображает Badge как точечный индикатор`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — отображает Badge в стандартном режиме с контентом (по умолчанию)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Создает минималистичный визуальный маркер для индикации состояний, активности или уведомлений без отображения конкретных значений. Идеально подходит для индикаторов присутствия пользователей (онлайн/оффлайн), маркеров непрочитанных уведомлений и статусных точек на элементах интерфейса. При активации свойства `,(0,$.jsx)(t.code,{children:`dot`}),` любое текстовое содержимое или числовые значения игнорируются, отображается только цветовой индикатор.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Стандартный Badge с контентом -->
<Badge label="5" />

<!-- Точечный индикатор -->
<Badge dot />

<!-- Точечный индикатор статуса онлайн -->
<Badge dot :selected="isOnline" overlap="circular" />
`,language:`html`})]})}function Rr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Lr,{...e})}):Lr(e)}function zr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Outline badges (outline)`}),`
`,(0,$.jsxs)(t.p,{children:[`The Badge component supports outline mode via the `,(0,$.jsx)(t.code,{children:`outline`}),` property. In this mode, badges have a minimalist visual style with transparent background and colored border:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Minimalist design`}),` - suitable for interfaces requiring reduced visual load`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Transparent background`}),` - maintains clean appearance when displaying secondary information`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Subtle presence`}),` - less visually prominent than filled variants`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Flexible adaptation`}),` - works well with various background colors and themes`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Outline mode is especially useful for creating secondary indicators, informational labels, and status markers that should be noticeable but not dominant in the interface's visual hierarchy.`}),`
`,(0,$.jsx)(a,{code:`
<Badge outline overlap="static">99+</Badge>
<Badge outline overlap="static" icon="info">Info</Badge>
<Badge outline dot overlap="static"/>
`,language:`html`})]})}function Br(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zr,{...e})}):zr(e)}function Vr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Контурные бейджи (outline)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Badge поддерживает контурный режим через свойство `,(0,$.jsx)(t.code,{children:`outline`}),`. В этом режиме бейджи имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Минималистичный дизайн`}),` - подходит для интерфейсов, требующих сниженной визуальной нагрузки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Прозрачный фон`}),` - поддерживает чистый внешний вид при отображении второстепенной информации`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Тонкое присутствие`}),` - менее визуально заметный, чем заполненные варианты`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Гибкая адаптация`}),` - хорошо работает с различными цветами фона и темами`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Outline режим особенно полезен для создания второстепенных индикаторов, информационных меток и статусных маркеров, которые должны быть заметными, но не доминирующими в визуальной иерархии интерфейса.`}),`
`,(0,$.jsx)(a,{code:`
<Badge outline overlap="static">99+</Badge>
<Badge outline overlap="static" icon="info">Инфо</Badge>
<Badge outline dot overlap="static"/>
`,language:`html`})]})}function Hr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Vr,{...e})}):Vr(e)}function Ur(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Primary badges (primary)`}),`
`,(0,$.jsxs)(t.p,{children:[`The Badge component supports primary mode via the `,(0,$.jsx)(t.code,{children:`primary`}),` property. In this mode, badges have the most prominent visual style with bright brand colors:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`High contrast`}),` - uses primary brand colors for maximum visibility`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Bold appearance`}),` - draws attention to important information`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Enhanced visibility`}),` - designed to stand out against various backgrounds`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Accessibility support`}),` - strong contrast ratios for readability`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Primary mode is especially useful for creating critical notification indicators, active statuses, and high-priority markers that require immediate user attention in the interface.`}),`
`,(0,$.jsx)(a,{code:`
<Badge primary overlap="static">5</Badge>
<Badge primary overlap="static" icon="warning">Important</Badge>
<Badge primary dot overlap="static"/>
`,language:`html`})]})}function Wr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ur,{...e})}):Ur(e)}function Gr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Основные бейджи (primary)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Badge поддерживает основной режим через свойство `,(0,$.jsx)(t.code,{children:`primary`}),`. В этом режиме бейджи имеют наиболее заметный визуальный стиль с яркими цветами бренда:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Высокий контраст`}),` - использует основные цвета бренда для максимальной видимости`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Яркий внешний вид`}),` - привлекает внимание к важной информации`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Повышенная видимость`}),` - разработан для выделения на различных фонах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Поддержка доступности`}),` - сильные контрастные соотношения для читаемости`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Primary режим особенно полезен для создания критических индикаторов уведомлений, активных статусов и высокоприоритетных маркеров, которые требуют немедленного внимания пользователя в интерфейсе.`}),`
`,(0,$.jsx)(a,{code:`
<Badge primary overlap="static">5</Badge>
<Badge primary overlap="static" icon="warning">Важно</Badge>
<Badge primary dot overlap="static"/>
`,language:`html`})]})}function Kr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Gr,{...e})}):Gr(e)}function qr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Secondary badges (secondary)`}),`
`,(0,$.jsxs)(t.p,{children:[`The Badge component supports secondary mode via the `,(0,$.jsx)(t.code,{children:`secondary`}),` property. In this mode, badges have a balanced visual style between primary and outline variants:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Moderate contrast`}),` - balanced color treatment for noticeability without overwhelming`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Softer appearance`}),` - less intense than primary while maintaining clear visibility`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Versatile styling`}),` - works well in various interface contexts`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Content harmony`}),` - complements primary elements without visual competition`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Secondary mode is especially useful for creating supporting information indicators, status updates, and categorical labels that are important but don't require critical attention in the visual hierarchy.`}),`
`,(0,$.jsx)(a,{code:`
<Badge secondary overlap="static">12</Badge>
<Badge secondary overlap="static" icon="info">Updated</Badge>
<Badge secondary dot overlap="static"/>
`,language:`html`})]})}function Jr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qr,{...e})}):qr(e)}function Yr(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Второстепенные бейджи (secondary)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Badge поддерживает второстепенный режим через свойство `,(0,$.jsx)(t.code,{children:`secondary`}),`. В этом режиме бейджи имеют сбалансированный визуальный стиль между primary и outline вариантами:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Умеренный контраст`}),` - сбалансированная цветовая обработка для заметности без подавления`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Более мягкий внешний вид`}),` - менее интенсивный, чем primary, сохраняя четкую видимость`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Универсальная стилизация`}),` - хорошо работает в различных контекстах интерфейса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Гармония контента`}),` - дополняет основные элементы без визуальной конкуренции`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Secondary режим особенно полезен для создания поддерживающих индикаторов информации, статусных обновлений и категориальных меток, которые важны, но не требуют критического внимания в визуальной иерархии.`}),`
`,(0,$.jsx)(a,{code:`
<Badge secondary overlap="static">12</Badge>
<Badge secondary overlap="static" icon="info">Обновлено</Badge>
<Badge secondary dot overlap="static"/>
`,language:`html`})]})}function Xr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Yr,{...e})}):Yr(e)}function Zr(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Versatile bar component for application headers, toolbars, and contextual action bars with support for navigation, action buttons, and bulk operation modes.`}),`
`,(0,$.jsx)(t.p,{children:`Bars provides a comprehensive solution for creating consistent top-level interface elements with structured layout for titles, descriptions, back navigation, and interactive button sets. The component integrates action mode switching for contextual operations, unified button configuration, and skeleton loading states for creating modern application headers and toolbars.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Structured text hierarchy (label and description with dynamic updates)`}),`
`,(0,$.jsx)(t.li,{children:`Configurable back button with navigation and close icon switching`}),`
`,(0,$.jsx)(t.li,{children:`Flexible button arrays (bars) for primary actions on the right side`}),`
`,(0,$.jsx)(t.li,{children:`Action mode with separate content and button set for bulk operations`}),`
`,(0,$.jsx)(t.li,{children:`Two-way binding (v-model:action) for state synchronization`}),`
`,(0,$.jsx)(t.li,{children:`Unified button attributes (buttonAttrs) for consistent styling`}),`
`,(0,$.jsx)(t.li,{children:`Event handling for click interactions and navigation`}),`
`,(0,$.jsx)(t.li,{children:`Skeleton system integration for loading states`}),`
`,(0,$.jsx)(t.li,{children:`Icon customization for back and close buttons`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Application screen headers with navigation and actions`}),`
`,(0,$.jsx)(t.li,{children:`Toolbar panels for sections and pages`}),`
`,(0,$.jsx)(t.li,{children:`Contextual action bars for selected item operations`}),`
`,(0,$.jsx)(t.li,{children:`Search headers with filter and sort controls`}),`
`,(0,$.jsx)(t.li,{children:`Settings screens with back navigation`}),`
`,(0,$.jsx)(t.li,{children:`List headers with bulk action support`}),`
`,(0,$.jsx)(t.li,{children:`Multi-selection interfaces with action mode`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const actionMode = ref(false)
const selectedCount = ref(0)

const handleSearch = () => {
console.log('Search clicked')
}

const handleFilter = () => {
console.log('Filter clicked')
}

const handleDelete = () => {
console.log('Delete selected items')
actionMode.value = false
selectedCount.value = 0
}
<\/script>

<template>
<div class="app-layout">
  <!-- Standard header with navigation and actions -->
  <Bars
    label="Messages"
    description="Your conversations"
    icon-back="arrow_back"
    :bars="[
      { icon: 'search', onClick: handleSearch },
      { icon: 'filter_list', onClick: handleFilter },
      { icon: 'more_vert' }
    ]"
  />

  <!-- Header with action mode for bulk operations -->
  <Bars
    v-model:action="actionMode"
    label="Contacts"
    description="Manage your contacts"
    :action-label="\`\${selectedCount} selected\`"
    action-description="Choose an action"
    icon-back="arrow_back"
    icon-close="close"
    :bars="[
      { icon: 'add' },
      { icon: 'search' }
    ]"
    :action-bars="[
      { icon: 'share' },
      { icon: 'delete', onClick: handleDelete }
    ]"
  />

  <!-- Toolbar with custom button attributes -->
  <Bars
    label="Settings"
    :button-attrs="{ secondary: true }"
    :bars="[
      { icon: 'sync', label: 'Sync' },
      { icon: 'info', label: 'Info' }
    ]"
  />
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Bars is designed as a top-level UI component for creating consistent application headers, toolbars, and contextual action interfaces with comprehensive navigation, action management, and bulk operation support.`}),`
`]})]})}function Qr(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Zr,{...e})}):Zr(e)}function $r(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Универсальный компонент панели для заголовков приложений, панелей инструментов и контекстных панелей действий с поддержкой навигации, кнопок действий и режимов массовых операций.`}),`
`,(0,$.jsx)(t.p,{children:`Bars предоставляет комплексное решение для создания согласованных элементов интерфейса верхнего уровня со структурированным макетом для заголовков, описаний, обратной навигации и интерактивных наборов кнопок. Компонент интегрирует переключение режима действий для контекстных операций, единую конфигурацию кнопок и состояния загрузки скелетонов для создания современных заголовков приложений и панелей инструментов.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Структурированная текстовая иерархия (метка и описание с динамическим обновлением)`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемая кнопка назад с навигацией и переключением иконки закрытия`}),`
`,(0,$.jsx)(t.li,{children:`Гибкие массивы кнопок (bars) для основных действий справа`}),`
`,(0,$.jsx)(t.li,{children:`Режим действий с отдельным контентом и набором кнопок для массовых операций`}),`
`,(0,$.jsx)(t.li,{children:`Двусторонняя привязка (v-model:action) для синхронизации состояния`}),`
`,(0,$.jsx)(t.li,{children:`Единые атрибуты кнопок (buttonAttrs) для согласованной стилизации`}),`
`,(0,$.jsx)(t.li,{children:`Обработка событий для взаимодействий кликов и навигации`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция системы скелетонов для состояний загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Кастомизация иконок для кнопок назад и закрытия`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Заголовки экранов приложения с навигацией и действиями`}),`
`,(0,$.jsx)(t.li,{children:`Панели инструментов для разделов и страниц`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные панели действий для операций с выбранными элементами`}),`
`,(0,$.jsx)(t.li,{children:`Заголовки поиска с элементами управления фильтрами и сортировкой`}),`
`,(0,$.jsx)(t.li,{children:`Экраны настроек с обратной навигацией`}),`
`,(0,$.jsx)(t.li,{children:`Заголовки списков с поддержкой массовых действий`}),`
`,(0,$.jsx)(t.li,{children:`Интерфейсы множественного выбора с режимом действий`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const actionMode = ref(false)
const selectedCount = ref(0)

const handleSearch = () => {
console.log('Нажат поиск')
}

const handleFilter = () => {
console.log('Нажат фильтр')
}

const handleDelete = () => {
console.log('Удалить выбранные элементы')
actionMode.value = false
selectedCount.value = 0
}
<\/script>

<template>
<div class="app-layout">
  <!-- Стандартный заголовок с навигацией и действиями -->
  <Bars
    label="Сообщения"
    description="Ваши беседы"
    icon-back="arrow_back"
    :bars="[
      { icon: 'search', onClick: handleSearch },
      { icon: 'filter_list', onClick: handleFilter },
      { icon: 'more_vert' }
    ]"
  />

  <!-- Заголовок с режимом действий для массовых операций -->
  <Bars
    v-model:action="actionMode"
    label="Контакты"
    description="Управление контактами"
    :action-label="\`Выбрано: \${selectedCount}\`"
    action-description="Выберите действие"
    icon-back="arrow_back"
    icon-close="close"
    :bars="[
      { icon: 'add' },
      { icon: 'search' }
    ]"
    :action-bars="[
      { icon: 'share' },
      { icon: 'delete', onClick: handleDelete }
    ]"
  />

  <!-- Панель инструментов с пользовательскими атрибутами кнопок -->
  <Bars
    label="Настройки"
    :button-attrs="{ secondary: true }"
    :bars="[
      { icon: 'sync', label: 'Синхр.' },
      { icon: 'info', label: 'Инфо' }
    ]"
  />
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Bars разработан как UI-компонент верхнего уровня для создания согласованных заголовков приложений, панелей инструментов и контекстных интерфейсов действий с комплексной поддержкой навигации, управления действиями и массовых операций.`}),`
`]})]})}function ei(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($r,{...e})}):$r(e)}function ti(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Action mode`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`action`}),`, `,(0,$.jsx)(t.code,{children:`actionLabel`}),`, `,(0,$.jsx)(t.code,{children:`actionDescription`}),`, and `,(0,$.jsx)(t.code,{children:`actionBars`}),` are designed for switching Bars into contextual action mode when selecting items or performing bulk operations.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`action`}),` — activates action mode with full content replacement`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionLabel`}),` — primary title for action mode (typically count of selected items)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionDescription`}),` — additional description or instruction for current action`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionBars`}),` — array of action buttons for operations on selected elements`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: when `,(0,$.jsx)(t.code,{children:`action = true`}),`, the component replaces standard content (label, description, bars) with action variants (actionLabel, actionDescription, actionBars). The back button automatically transforms into an exit button (iconClose) for leaving action mode. All shared button attributes from `,(0,$.jsx)(t.code,{children:`buttonAttrs`}),` apply to `,(0,$.jsx)(t.code,{children:`actionBars`}),`, maintaining consistent styling. Action mode is typically controlled by external selection state and is used for temporary focused operations with the ability to exit back to normal view.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref, computed } from 'vue'

const selectedItems = ref([])
const actionMode = computed(() => selectedItems.value.length > 0)

const handleSelect = (id) => {
const index = selectedItems.value.indexOf(id)
if (index > -1) {
  selectedItems.value.splice(index, 1)
} else {
  selectedItems.value.push(id)
}
}

const handleShare = () => {
console.log('Share selected:', selectedItems.value)
}

const handleDelete = () => {
console.log('Delete selected:', selectedItems.value)
selectedItems.value = []
}
<\/script>

<template>
<!-- Standard mode with regular navigation -->
<Bars
  :action="actionMode"
  label="Contacts"
  description="Manage your contacts"
  icon-back="arrow_back"
  icon-close="close"
  :bars="[
    { icon: 'add', label: 'Add' },
    { icon: 'search', label: 'Search' }
  ]"
  :action-label="\`\${selectedItems.length} selected\`"
  action-description="Choose an action to apply"
  :action-bars="[
    { icon: 'share', onClick: handleShare },
    { icon: 'delete', onClick: handleDelete }
  ]"
/>

<!-- Action mode always active -->
<Bars
  action
  action-label="5 items selected"
  action-description="Select an action"
  icon-close="close"
  :action-bars="[
    { icon: 'edit', label: 'Edit' },
    { icon: 'archive', label: 'Archive' },
    { icon: 'delete', label: 'Delete' }
  ]"
/>

<!-- With v-model for two-way binding -->
<Bars
  v-model:action="actionMode"
  label="Messages"
  :action-label="\`\${selectedItems.length} messages\`"
  :action-bars="[
    { icon: 'mark_email_read' },
    { icon: 'delete' }
  ]"
/>
</template>
`,language:`html`})]})}function ni(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ti,{...e})}):ti(e)}function ri(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Режим действий`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`action`}),`, `,(0,$.jsx)(t.code,{children:`actionLabel`}),`, `,(0,$.jsx)(t.code,{children:`actionDescription`}),` и `,(0,$.jsx)(t.code,{children:`actionBars`}),` предназначены для переключения Bars в контекстный режим действий при выборе элементов или выполнении массовых операций.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`action`}),` — активирует режим действий с полной заменой контента`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionLabel`}),` — основной заголовок для режима действий (обычно счётчик выбранных элементов)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionDescription`}),` — дополнительное описание или инструкция для текущего действия`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionBars`}),` — массив кнопок действий для операций над выбранными элементами`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: когда `,(0,$.jsx)(t.code,{children:`action = true`}),`, компонент заменяет стандартный контент (label, description, bars) на варианты для действий (actionLabel, actionDescription, actionBars). Кнопка назад автоматически трансформируется в кнопку выхода (iconClose) для возврата из режима действий. Все общие атрибуты кнопок из `,(0,$.jsx)(t.code,{children:`buttonAttrs`}),` применяются к `,(0,$.jsx)(t.code,{children:`actionBars`}),`, сохраняя согласованную стилизацию. Режим действий обычно контролируется внешним состоянием выбора и используется для временных фокусированных операций с возможностью выхода обратно в обычный вид.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref, computed } from 'vue'

const selectedItems = ref([])
const actionMode = computed(() => selectedItems.value.length > 0)

const handleSelect = (id) => {
const index = selectedItems.value.indexOf(id)
if (index > -1) {
  selectedItems.value.splice(index, 1)
} else {
  selectedItems.value.push(id)
}
}

const handleShare = () => {
console.log('Поделиться выбранными:', selectedItems.value)
}

const handleDelete = () => {
console.log('Удалить выбранные:', selectedItems.value)
selectedItems.value = []
}
<\/script>

<template>
<!-- Стандартный режим с обычной навигацией -->
<Bars
  :action="actionMode"
  label="Контакты"
  description="Управление контактами"
  icon-back="arrow_back"
  icon-close="close"
  :bars="[
    { icon: 'add', label: 'Добавить' },
    { icon: 'search', label: 'Поиск' }
  ]"
  :action-label="\`Выбрано: \${selectedItems.length}\`"
  action-description="Выберите действие"
  :action-bars="[
    { icon: 'share', onClick: handleShare },
    { icon: 'delete', onClick: handleDelete }
  ]"
/>

<!-- Режим действий всегда активен -->
<Bars
  action
  action-label="Выбрано 5 элементов"
  action-description="Выберите действие"
  icon-close="close"
  :action-bars="[
    { icon: 'edit', label: 'Изменить' },
    { icon: 'archive', label: 'Архивировать' },
    { icon: 'delete', label: 'Удалить' }
  ]"
/>

<!-- С v-model для двусторонней привязки -->
<Bars
  v-model:action="actionMode"
  label="Сообщения"
  :action-label="\`Сообщений: \${selectedItems.length}\`"
  :action-bars="[
    { icon: 'mark_email_read' },
    { icon: 'delete' }
  ]"
/>
</template>
`,language:`html`})]})}function ii(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ri,{...e})}):ri(e)}function ai(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`bars: any`}),` — Slot for placing action buttons in regular mode.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionBars: any`}),` — Slot for placing buttons in action mode.`]}),`
`]})}function oi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ai,{...e})}):ai(e)}function si(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`bars: any`}),` — Слот для размещения кнопок панели действий в обычном режиме.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionBars: any`}),` — Слот для размещения кнопок в режиме действий (action mode).`]}),`
`]})}function ci(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(si,{...e})}):si(e)}function li(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`State management via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding of action mode state via `,(0,$.jsx)(t.code,{children:`v-model:action`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`action: boolean`}),` — action mode state of the bar`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isAction = ref(false)
<\/script>

<template>
<button @click="isAction = true">Enable action mode</button>

<Bars v-model:action="isAction">
  <template #bars>
    <Button>Regular button</Button>
  </template>
  <template #actionBars>
    <Button>Action button</Button>
    <Button @click="isAction = false">Close</Button>
  </template>
</Bars>
</template>
`,language:`html`})]})}function ui(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(li,{...e})}):li(e)}function di(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление состоянием через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка состояния action-режима через `,(0,$.jsx)(t.code,{children:`v-model:action`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`action: boolean`}),` — состояние action-режима панели`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isAction = ref(false)
<\/script>

<template>
<button @click="isAction = true">Включить action-режим</button>

<Bars v-model:action="isAction">
  <template #bars>
    <Button>Обычная кнопка</Button>
  </template>
  <template #actionBars>
    <Button>Action-кнопка</Button>
    <Button @click="isAction = false">Закрыть</Button>
  </template>
</Bars>
</template>
`,language:`html`})]})}function fi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(di,{...e})}):di(e)}function pi(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines.`}),`
`,(0,$.jsx)(t.p,{children:`Block provides a flexible foundation for building complex interface components, allowing you to combine various information elements into a single unit. The component supports HTML tag customization and provides slots for content customization.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Display of headline, label, description, and caption`}),`
`,(0,$.jsx)(t.li,{children:`Icon support`}),`
`,(0,$.jsx)(t.li,{children:`Customizable HTML tag`}),`
`,(0,$.jsx)(t.li,{children:`Flexible layout for content organization`}),`
`,(0,$.jsx)(t.li,{children:`Slot support for functionality extension`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Content cards`}),`
`,(0,$.jsx)(t.li,{children:`List items`}),`
`,(0,$.jsx)(t.li,{children:`Information blocks`}),`
`,(0,$.jsx)(t.li,{children:`Sections with headers and descriptions`}),`
`,(0,$.jsx)(t.li,{children:`Basic building block for other components`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Block
  headline="Block Headline"
  label="Label"
  description="Block description with detailed information"
  caption="Caption"
  icon="info"
>
  Main block content
</Block>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Block is a fundamental component for creating structured interfaces.`}),`
`]})]})}function mi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pi,{...e})}):pi(e)}function hi(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков.`}),`
`,(0,$.jsx)(t.p,{children:`Block обеспечивает гибкую основу для построения сложных компонентов интерфейса, позволяя комбинировать различные информационные элементы в едином блоке. Компонент поддерживает настройку HTML-тега и предоставляет слоты для кастомизации контента.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение заголовка, метки, описания и подписи`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемый HTML-тег`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая компоновка для организации контента`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слотов для расширения функциональности`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Карточки контента`}),`
`,(0,$.jsx)(t.li,{children:`Элементы списков`}),`
`,(0,$.jsx)(t.li,{children:`Информационные блоки`}),`
`,(0,$.jsx)(t.li,{children:`Секции с заголовками и описаниями`}),`
`,(0,$.jsx)(t.li,{children:`Базовый строительный блок для других компонентов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Block
  headline="Заголовок блока"
  label="Метка"
  description="Описание блока с подробной информацией"
  caption="Подпись"
  icon="info"
>
  Основной контент блока
</Block>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Block является фундаментальным компонентом для создания структурированных интерфейсов.`}),`
`]})]})}function gi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hi,{...e})}):hi(e)}function _i(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Differences between Page, Section, Block, and Group`}),`
`,(0,$.jsxs)(t.p,{children:[`All components are built on top of `,(0,$.jsx)(t.strong,{children:`Block`}),` and differ in semantics and header levels:`]}),`
`,(0,$.jsx)(t.h3,{children:`Page`}),`
`,(0,$.jsxs)(t.p,{children:[`This is the root structural component that serves as the main wrapper for all page content. Its primary purpose is to define the main theme and semantically link content to the first-level heading. Its main difference is its uniqueness (used once per page); therefore, choose it as the primary container when creating a new page (`,(0,$.jsx)(t.code,{children:`<main>`}),`, `,(0,$.jsx)(t.code,{children:`h1`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Section`}),`
`,(0,$.jsxs)(t.p,{children:[`A container for major thematic division of the page into independent semantic blocks. It is needed for logical partitioning of content into parts like "About Us" or "Services". Unlike Block and Group, it carries higher semantic weight, so use it to form the page structure and highlight its main sections (`,(0,$.jsx)(t.code,{children:`<section>`}),`, `,(0,$.jsx)(t.code,{children:`h2`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Block`}),`
`,(0,$.jsxs)(t.p,{children:[`A universal and highly flexible building block for grouping any related content. It is the base element for creating independent functional units, cards, or informational inserts. Use it in any scenario where you need to organize content without strict adherence to global page divisions (`,(0,$.jsx)(t.code,{children:`<div>`}),`, `,(0,$.jsx)(t.code,{children:`h3`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Group`}),`
`,(0,$.jsxs)(t.p,{children:[`An auxiliary component for combining small thematic elements into logical groups. Its main goal is to structure details, such as form fields or sub-sections within a card. It ranks at the bottom of the hierarchy and is used for fine-tuning content structure within larger blocks or sections (`,(0,$.jsx)(t.code,{children:`<div>`}),`, `,(0,$.jsx)(t.code,{children:`h4`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Hierarchy Example`}),`
`,(0,$.jsx)(a,{code:`
<Page headline="User Account">
<Section label="User Profile" description="Manage personal data" icon="person">
  <Block label="Basic Information">
    <p>Configure your display name and bio for other users.</p>
    
    <Group label="Contact Details">
      <p>Email: user@example.com</p>
      <p>Phone: +7 (999) 000-00-00</p>
    </Group>
  </Block>
  
  <Block label="Security" description="Password and authentication settings">
    <p>Regular password updates improve your account security.</p>
  </Block>
</Section>

<Section label="Notifications" icon="notifications">
  <Block label="Subscriptions">
    <Group label="Email">
      <p>Weekly news and promotions.</p>
    </Group>
    <Group label="SMS">
      <p>Critical system messages only.</p>
    </Group>
  </Block>
</Section>
</Page>
`,language:`html`})]})}function vi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_i,{...e})}):_i(e)}function yi(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Различия между Page, Section, Block и Group`}),`
`,(0,$.jsxs)(t.p,{children:[`Все компоненты построены на базе `,(0,$.jsx)(t.strong,{children:`Block`}),` и различаются семантикой и уровнями заголовков:`]}),`
`,(0,$.jsx)(t.h3,{children:`Page`}),`
`,(0,$.jsxs)(t.p,{children:[`Это корневой структурный компонент, который служит главной оберткой для всего контента страницы. Он предназначен для определения основной темы и семантической привязки содержимого к заголовку первого уровня. Его главное отличие — уникальность (используется один раз), поэтому выбирайте его как основной контейнер при создании новой страницы (`,(0,$.jsx)(t.code,{children:`<main>`}),`, `,(0,$.jsx)(t.code,{children:`h1`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Section`}),`
`,(0,$.jsxs)(t.p,{children:[`Раздел для крупного тематического деления страницы на независимые смысловые блоки. Он нужен для логического разграничения контента на такие части, как «О нас» или «Услуги». В отличие от Block и Group, имеет более высокую семантическую значимость, поэтому используйте его для формирования скелета страницы и выделения её основных разделов (`,(0,$.jsx)(t.code,{children:`<section>`}),`, `,(0,$.jsx)(t.code,{children:`h2`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Block`}),`
`,(0,$.jsxs)(t.p,{children:[`Универсальный и максимально гибкий строительный блок для группировки любого связанного контента. Это базовый элемент для создания независимых функциональных единиц, карточек или информационных вставок. Используйте его в любых сценариях, где требуется организовать контент без строгой привязки к глобальным разделам страницы (`,(0,$.jsx)(t.code,{children:`<div>`}),`, `,(0,$.jsx)(t.code,{children:`h3`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Group`}),`
`,(0,$.jsxs)(t.p,{children:[`Вспомогательный компонент для объединения мелких тематических элементов в логические группы. Его основная цель — структурирование деталей, таких как поля формы или подразделы внутри карточки. Он находится внизу иерархии и применяется для тонкой настройки структуры контента внутри более крупных блоков или секций (`,(0,$.jsx)(t.code,{children:`<div>`}),`, `,(0,$.jsx)(t.code,{children:`h4`}),`).`]}),`
`,(0,$.jsx)(t.h3,{children:`Пример иерархии`}),`
`,(0,$.jsx)(a,{code:`
<Page headline="Личный кабинет">
<Section label="Профиль пользователя" description="Управление персональными данными" icon="person">
  <Block label="Основная информация">
    <p>Настройте свое отображаемое имя и биографию для других пользователей.</p>
    
    <Group label="Контактные данные">
      <p>Email: user@example.com</p>
      <p>Телефон: +7 (999) 000-00-00</p>
    </Group>
  </Block>
  
  <Block label="Безопасность" description="Настройки пароля и аутентификации">
    <p>Регулярное обновление пароля повышает защищенность вашего аккаунта.</p>
  </Block>
</Section>

<Section label="Уведомления" icon="notifications">
  <Block label="Рассылки">
    <Group label="Email">
      <p>Еженедельные новости и акции.</p>
    </Group>
    <Group label="SMS">
      <p>Только критические системные сообщения.</p>
    </Group>
  </Block>
</Section>
</Page>
`,language:`html`})]})}function bi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(yi,{...e})}):yi(e)}function xi(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Interactive button component for triggering user actions with support for multiple visual variants, states, and accessibility features.`}),`
`,(0,$.jsx)(t.p,{children:`Button provides a comprehensive solution for creating consistent, accessible action elements with built-in support for icons, loading states, ripple effects, and skeleton placeholders. The component integrates visual variants (primary, secondary, outline, text), state management (focus, hover, disabled, selected), and adaptive behavior for responsive interfaces.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Multiple visual variants (primary, secondary, outline, text)`}),`
`,(0,$.jsx)(t.li,{children:`Comprehensive state support (focus, hover, active, disabled, selected, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in icon positioning (leading and trailing)`}),`
`,(0,$.jsx)(t.li,{children:`Progress indicator integration for loading states`}),`
`,(0,$.jsx)(t.li,{children:`Ripple effect for tactile feedback`}),`
`,(0,$.jsx)(t.li,{children:`Skeleton system for loading placeholders`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive and responsive behavior options`}),`
`,(0,$.jsx)(t.li,{children:`Full accessibility support (ARIA, keyboard navigation)`}),`
`,(0,$.jsx)(t.li,{children:`Customizable through design tokens`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Primary actions in forms and dialogs`}),`
`,(0,$.jsx)(t.li,{children:`Navigation and menu items`}),`
`,(0,$.jsx)(t.li,{children:`Toolbars and action bars`}),`
`,(0,$.jsx)(t.li,{children:`Call-to-action elements`}),`
`,(0,$.jsx)(t.li,{children:`Icon-only action buttons`}),`
`,(0,$.jsx)(t.li,{children:`Loading state indicators`}),`
`,(0,$.jsx)(t.li,{children:`Confirmation and cancellation actions`}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Button is designed as a universal interactive element with comprehensive state management, visual variants, and accessibility features for creating consistent action interfaces.`}),`
`]})]})}function Si(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xi,{...e})}):xi(e)}function Ci(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Интерактивный компонент кнопки для инициирования действий пользователя с поддержкой множественных визуальных вариантов, состояний и функций доступности.`}),`
`,(0,$.jsx)(t.p,{children:`Button предоставляет комплексное решение для создания согласованных, доступных элементов действий со встроенной поддержкой иконок, состояний загрузки, эффектов ripple и плейсхолдеров-скелетонов. Компонент интегрирует визуальные варианты (primary, secondary, outline, text), управление состояниями (focus, hover, disabled, selected) и адаптивное поведение для отзывчивых интерфейсов.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Множественные визуальные варианты (primary, secondary, outline, text)`}),`
`,(0,$.jsx)(t.li,{children:`Комплексная поддержка состояний (focus, hover, active, disabled, selected, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенное позиционирование иконок (в начале и в конце)`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция индикатора прогресса для состояний загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Эффект ripple для тактильной обратной связи`}),`
`,(0,$.jsx)(t.li,{children:`Система скелетонов для плейсхолдеров загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Опции адаптивного и отзывчивого поведения`}),`
`,(0,$.jsx)(t.li,{children:`Полная поддержка доступности (ARIA, клавиатурная навигация)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка через токены дизайна`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Основные действия в формах и диалогах`}),`
`,(0,$.jsx)(t.li,{children:`Элементы навигации и меню`}),`
`,(0,$.jsx)(t.li,{children:`Панели инструментов и действий`}),`
`,(0,$.jsx)(t.li,{children:`Элементы призыва к действию`}),`
`,(0,$.jsx)(t.li,{children:`Кнопки только с иконками`}),`
`,(0,$.jsx)(t.li,{children:`Индикаторы состояния загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Действия подтверждения и отмены`}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Button разработан как универсальный интерактивный элемент с комплексным управлением состояниями, визуальными вариантами и функциями доступности для создания согласованных интерфейсов действий.`}),`
`]})]})}function wi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ci,{...e})}):Ci(e)}function Ti(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Primary buttons`}),`
`,(0,$.jsxs)(t.p,{children:[`Button component supports primary mode through the `,(0,$.jsx)(t.code,{children:`primary`}),` property. In this mode, buttons have a distinctive visual style for the most important actions:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Visual emphasis`}),` - stands out prominently among other interface elements`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Action hierarchy`}),` - indicates the main or priority action on the page`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`High contrast`}),` - automatically applies high-contrast colors for better visibility`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Icon support`}),` - enhances understanding of purpose through visual elements`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Primary mode is especially useful for creating main call-to-action buttons, form submissions, and confirmation actions that require user attention and should be immediately recognizable in the interface.`}),`
`,(0,$.jsx)(a,{code:`
<Button primary icon="send">Submit</Button>
<Button primary icon="save">Save</Button>
<Button primary>Confirm</Button>
`,language:`html`})]})}function Ei(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ti,{...e})}):Ti(e)}function Di(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Основные кнопки (primary)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Button поддерживает основной режим через свойство `,(0,$.jsx)(t.code,{children:`primary`}),`. В этом режиме кнопки имеют выделяющийся визуальный стиль для самых важных действий:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Визуальный акцент`}),` - выделяются заметно среди других элементов интерфейса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Иерархия действий`}),` - указывают на основное или приоритетное действие на странице`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Высокая контрастность`}),` - автоматически применяются высококонтрастные цвета для лучшей видимости`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Поддержка иконок`}),` - улучшают понимание назначения через визуальные элементы`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Primary режим особенно полезен для создания основных кнопок призыва к действию, отправки форм и подтверждающих действий, которые требуют внимания пользователя и должны быть сразу узнаваемы в интерфейсе.`}),`
`,(0,$.jsx)(a,{code:`
<Button primary icon="send">Отправить</Button>
<Button primary icon="save">Сохранить</Button>
<Button primary>Подтвердить</Button>
`,language:`html`})]})}function Oi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Di,{...e})}):Di(e)}function ki(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Secondary buttons`}),`
`,(0,$.jsxs)(t.p,{children:[`Button component supports secondary mode through the `,(0,$.jsx)(t.code,{children:`secondary`}),` property. In this mode, buttons have a less prominent visual style for alternative or supporting actions:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Moderate emphasis`}),` - less intrusive than primary buttons while remaining clear`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Action alternatives`}),` - provides users with alternative choices without overwhelming them`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Balanced contrast`}),` - uses colors with moderate contrast for better visual hierarchy`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Icon support`}),` - maintains consistency with other button variants through visual elements`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Secondary mode is especially useful for creating cancel buttons, reset actions, and alternative choices that support the main flow without competing for primary attention in the interface.`}),`
`,(0,$.jsx)(a,{code:`
<Button secondary icon="close">Cancel</Button>
<Button secondary icon="refresh">Reset</Button>
<Button secondary>Skip</Button>
`,language:`html`})]})}function Ai(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ki,{...e})}):ki(e)}function ji(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Второстепенные кнопки (secondary)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Button поддерживает второстепенный режим через свойство `,(0,$.jsx)(t.code,{children:`secondary`}),`. В этом режиме кнопки имеют менее заметный визуальный стиль для альтернативных или поддерживающих действий:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Умеренный акцент`}),` - менее навязчивы чем основные кнопки, оставаясь при этом понятными`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Альтернативные действия`}),` - предоставляют пользователям альтернативный выбор без перегрузки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Сбалансированная контрастность`}),` - используют цвета с умеренным контрастом для лучшей визуальной иерархии`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Поддержка иконок`}),` - поддерживают согласованность с другими вариантами кнопок через визуальные элементы`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Secondary режим особенно полезен для создания кнопок отмены, действий сброса и альтернативных вариантов выбора, которые поддерживают основной поток без конкуренции за первичное внимание в интерфейсе.`}),`
`,(0,$.jsx)(a,{code:`
<Button secondary icon="close">Отмена</Button>
<Button secondary icon="refresh">Сброс</Button>
<Button secondary>Пропустить</Button>
`,language:`html`})]})}function Mi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ji,{...e})}):ji(e)}function Ni(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Outline buttons`}),`
`,(0,$.jsxs)(t.p,{children:[`Button component supports outline mode through the `,(0,$.jsx)(t.code,{children:`outline`}),` property. In this mode, buttons have a minimalist visual style with transparent background and colored border:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Minimalist design`}),` - suitable for interfaces requiring reduced visual load`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Transparent background`}),` - maintains clean appearance while remaining interactive`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Hover feedback`}),` - background appears on hover for better user interaction`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Icon support`}),` - works seamlessly with icons for enhanced clarity`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Outline mode is especially useful for creating tertiary actions, filter controls, and secondary options in cards or lists that need to be accessible without excessive visual noise.`}),`
`,(0,$.jsx)(a,{code:`
<Button outline icon="filter">Filter</Button>
<Button outline icon="sort">Sort</Button>
<Button outline>More options</Button>
`,language:`html`})]})}function Pi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ni,{...e})}):Ni(e)}function Fi(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Контурные кнопки (outline)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Button поддерживает контурный режим через свойство `,(0,$.jsx)(t.code,{children:`outline`}),`. В этом режиме кнопки имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Минималистичный дизайн`}),` - подходит для интерфейсов, требующих сниженной визуальной нагрузки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Прозрачный фон`}),` - поддерживает чистый внешний вид, оставаясь интерактивными`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Обратная связь при наведении`}),` - фон появляется при наведении для лучшего взаимодействия с пользователем`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Поддержка иконок`}),` - бесшовно работает с иконками для улучшенной ясности`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Outline режим особенно полезен для создания третичных действий, элементов управления фильтрами и второстепенных опций в карточках или списках, которые должны быть доступны без излишнего визуального шума.`}),`
`,(0,$.jsx)(a,{code:`
<Button outline icon="filter">Фильтр</Button>
<Button outline icon="sort">Сортировка</Button>
<Button outline>Дополнительно</Button>
`,language:`html`})]})}function Ii(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fi,{...e})}):Fi(e)}function Li(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Text buttons`}),`
`,(0,$.jsxs)(t.p,{children:[`Button component supports text mode through the `,(0,$.jsx)(t.code,{children:`text`}),` property. In this mode, buttons have a minimalist text-only style resembling links for the most unobtrusive actions:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Unobtrusive design`}),` - looks like plain text while remaining interactive`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`No background or border`}),` - maintains clean appearance without visual weight`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Hover feedback`}),` - subtle background appears on hover for better interaction clarity`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Icon support`}),` - seamlessly integrates icons while maintaining minimal visual impact`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Text mode is especially useful for creating tertiary actions, inline navigation links, and supplementary options within text content or footers that need to be accessible without drawing excessive attention.`}),`
`,(0,$.jsx)(a,{code:`
<Button text icon="info">Learn more</Button>
<Button text icon="help">Help</Button>
<Button text>Read details</Button>
`,language:`html`})]})}function Ri(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Li,{...e})}):Li(e)}function zi(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Текстовые кнопки (text)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Button поддерживает текстовый режим через свойство `,(0,$.jsx)(t.code,{children:`text`}),`. В этом режиме кнопки имеют минималистичный текстовый стиль, напоминающий ссылки, для самых ненавязчивых действий:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Ненавязчивый дизайн`}),` - выглядит как обычный текст, оставаясь интерактивным`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Без фона и рамки`}),` - поддерживает чистый внешний вид без визуальной нагрузки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Обратная связь при наведении`}),` - тонкий фон появляется при наведении для лучшей ясности взаимодействия`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Поддержка иконок`}),` - бесшовно интегрирует иконки, сохраняя минимальное визуальное воздействие`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Text режим особенно полезен для создания третичных действий, встроенных навигационных ссылок и дополнительных опций внутри текстового контента или футеров, которые должны быть доступны без привлечения чрезмерного внимания.`}),`
`,(0,$.jsx)(a,{code:`
<Button text icon="info">Узнать больше</Button>
<Button text icon="help">Справка</Button>
<Button text>Читать детали</Button>
`,language:`html`})]})}function Bi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zi,{...e})}):zi(e)}function Vi(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Universal container component for displaying structured content with labels, descriptions, and interactive actions in lists and interface elements.`}),`
`,(0,$.jsx)(t.p,{children:`Cell provides a consistent way to represent information blocks with support for text hierarchy (label, description, caption), interactive states, icons, and progress indicators. The component integrates ripple effects, skeleton states, and flexible content positioning for creating modern interface lists.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Structured content hierarchy (label, description, caption)`}),`
`,(0,$.jsx)(t.li,{children:`Interactive states (focus, selected, disabled, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in icon and progress indicator support`}),`
`,(0,$.jsx)(t.li,{children:`Ripple effect integration for tactile feedback`}),`
`,(0,$.jsx)(t.li,{children:`Skeleton system for loading states`}),`
`,(0,$.jsx)(t.li,{children:`Customizable dividers and dynamic behavior`}),`
`,(0,$.jsx)(t.li,{children:`Flexible slot system for custom content`}),`
`,(0,$.jsx)(t.li,{children:`Optimized for list and menu interfaces`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`List items in navigation menus and settings`}),`
`,(0,$.jsx)(t.li,{children:`Contact cards and profile entries`}),`
`,(0,$.jsx)(t.li,{children:`Action sheets and selection lists`}),`
`,(0,$.jsx)(t.li,{children:`Settings panels and configuration items`}),`
`,(0,$.jsx)(t.li,{children:`Data tables and structured information displays`}),`
`,(0,$.jsx)(t.li,{children:`Mobile-first interface components`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(false)
const loading = ref(false)

const handleClick = () => {
console.log('Cell clicked')
selected.value = !selected.value
}
<\/script>

<template>
<Cell
  label="Notification Settings"
  description="Manage how you receive notifications"
  caption="Updated today"
  icon="notifications"
  :selected="selected"
  :skeleton="loading"
  @click="handleClick"
>
  <template #trailing>
    <Icon name="chevron_right" />
  </template>
</Cell>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Cell is designed as a universal building block for creating consistent list-based interfaces with rich content and interactive states.`}),`
`]})]})}function Hi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Vi,{...e})}):Vi(e)}function Ui(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и интерактивными действиями в списках и элементах интерфейса.`}),`
`,(0,$.jsx)(t.p,{children:`Cell обеспечивает единообразное представление информационных блоков с поддержкой текстовой иерархии (метка, описание, подпись), интерактивных состояний, иконок и индикаторов прогресса. Компонент интегрирует эффекты ripple, состояния скелетонов и гибкое позиционирование контента для создания современных интерфейсных списков.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Структурированная иерархия контента (метка, описание, подпись)`}),`
`,(0,$.jsx)(t.li,{children:`Интерактивные состояния (focus, selected, disabled, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная поддержка иконок и индикаторов прогресса`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция эффекта ripple для тактильной обратной связи`}),`
`,(0,$.jsx)(t.li,{children:`Система скелетонов для состояний загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемые разделители и динамическое поведение`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая система слотов для пользовательского контента`}),`
`,(0,$.jsx)(t.li,{children:`Оптимизирован для списковых и меню интерфейсов`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Элементы списков в меню навигации и настройках`}),`
`,(0,$.jsx)(t.li,{children:`Карточки контактов и профильные записи`}),`
`,(0,$.jsx)(t.li,{children:`Списки действий и выбора элементов`}),`
`,(0,$.jsx)(t.li,{children:`Панели настроек и элементы конфигурации`}),`
`,(0,$.jsx)(t.li,{children:`Таблицы данных и структурированные информационные блоки`}),`
`,(0,$.jsx)(t.li,{children:`Компоненты интерфейса mobile-first`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(false)
const loading = ref(false)

const handleClick = () => {
console.log('Ячейка нажата')
selected.value = !selected.value
}
<\/script>

<template>
<Cell
  label="Настройки уведомлений"
  description="Управление способами получения уведомлений"
  caption="Обновлено сегодня"
  icon="notifications"
  :selected="selected"
  :skeleton="loading"
  @click="handleClick"
>
  <template #trailing>
    <Icon name="chevron_right" />
  </template>
</Cell>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Cell разработан как универсальный строительный блок для создания единообразных списковых интерфейсов с богатым контентом и интерактивными состояниями.`}),`
`]})]})}function Wi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ui,{...e})}):Ui(e)}function Gi(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing(props: CellClassesSub): any`}),` — Slot for placing control elements or indicators at the end of the cell (icons, switches, buttons).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`body(props: CellClassesSub): any`}),` — Slot for placing additional content at the bottom of the cell (metadata, secondary actions, details).`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`CellClassesSub:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`label: string`}),` — CSS class for the label element (`,(0,$.jsx)(t.code,{children:`{className}__label`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`description: string`}),` — CSS class for the description element (`,(0,$.jsx)(t.code,{children:`{className}__description`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`caption: string`}),` — CSS class for the caption element (`,(0,$.jsx)(t.code,{children:`{className}__caption`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing: string`}),` — CSS class for the trailing area element (`,(0,$.jsx)(t.code,{children:`{className}__trailing`}),`).`]}),`
`]}),`
`]})]})}function Ki(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Gi,{...e})}):Gi(e)}function qi(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing(props: CellClassesSub): any`}),` — Слот для размещения элементов управления или индикаторов в конце ячейки (иконки, переключатели, кнопки).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`body(props: CellClassesSub): any`}),` — Слот для размещения дополнительного контента в нижней части ячейки (метаданные, вторичные действия, детали).`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`CellClassesSub:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`label: string`}),` — CSS-класс для элемента метки (`,(0,$.jsx)(t.code,{children:`{className}__label`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`description: string`}),` — CSS-класс для элемента описания (`,(0,$.jsx)(t.code,{children:`{className}__description`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`caption: string`}),` — CSS-класс для элемента подписи (`,(0,$.jsx)(t.code,{children:`{className}__caption`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing: string`}),` — CSS-класс для элемента области trailing (`,(0,$.jsx)(t.code,{children:`{className}__trailing`}),`).`]}),`
`]}),`
`]})]})}function Ji(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qi,{...e})}):qi(e)}function Yi(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating interactive checkboxes with support for multiple selection, validation, and state customization.`}),`
`,(0,$.jsx)(t.p,{children:`Checkbox manages the selection state of elements (checked, unchecked, indeterminate state), supports validation, form integration, customizable icons, and transition animations. The component automatically handles state changes, focus management, and event generation during user interaction.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Three states: checked, unchecked, indeterminate`}),`
`,(0,$.jsx)(t.li,{children:`Built-in validation with custom error messages`}),`
`,(0,$.jsx)(t.li,{children:`Support for labels and descriptions`}),`
`,(0,$.jsx)(t.li,{children:`Customizable icons for different states`}),`
`,(0,$.jsx)(t.li,{children:`Form integration via name and value attributes`}),`
`,(0,$.jsx)(t.li,{children:`Disabled, loading, and skeleton states`}),`
`,(0,$.jsx)(t.li,{children:`Ripple effect on interaction`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive layout and styling`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Agreement with terms and policies`}),`
`,(0,$.jsx)(t.li,{children:`Multiple item selection from lists`}),`
`,(0,$.jsx)(t.li,{children:`Settings and feature toggles`}),`
`,(0,$.jsx)(t.li,{children:`Forms with checkboxes for confirmation`}),`
`,(0,$.jsx)(t.li,{children:`Group selection with parent indeterminate state`}),`
`]})]})}function Xi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Yi,{...e})}):Yi(e)}function Zi(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания интерактивных чекбоксов с поддержкой множественного выбора, валидации и настройки состояний.`}),`
`,(0,$.jsx)(t.p,{children:`Checkbox управляет состоянием выбора элементов (отмечен, не отмечен, неопределённое состояние), поддерживает валидацию, интеграцию с формами, настраиваемые иконки и анимацию переходов. Компонент автоматически обрабатывает изменение состояний, управление фокусом и генерацию событий при взаимодействии пользователя.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Три состояния: отмечен, не отмечен, неопределённое (indeterminate)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная валидация с пользовательскими сообщениями об ошибках`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка меток (label) и описания (description)`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемые иконки для разных состояний`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с формами через name и value`}),`
`,(0,$.jsx)(t.li,{children:`Состояния disabled, loading и skeleton`}),`
`,(0,$.jsx)(t.li,{children:`Эффект ripple при взаимодействии`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивная раскладка и стилизация`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Согласие с условиями и политиками`}),`
`,(0,$.jsx)(t.li,{children:`Множественный выбор элементов из списка`}),`
`,(0,$.jsx)(t.li,{children:`Настройки и переключение функций`}),`
`,(0,$.jsx)(t.li,{children:`Формы с чекбоксами для подтверждения`}),`
`,(0,$.jsx)(t.li,{children:`Групповой выбор с родительским indeterminate состоянием`}),`
`]})]})}function Qi(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Zi,{...e})}):Zi(e)}function $i(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Indeterminate state`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`indeterminate`}),` property controls the third checkbox state — indeterminate (partially selected). This state is visually displayed as a horizontal line instead of a checkmark.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`indeterminate`}),` — enables the indeterminate state of the checkbox`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconIndeterminate`}),` — custom icon for the indeterminate state`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — remains `,(0,$.jsx)(t.code,{children:`null`}),` or a special value in the indeterminate state`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`The indeterminate state is typically used for parent checkboxes in a group when only some child elements are selected.`}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref, computed } from 'vue'

const items = ref([
{ id: 1, label: 'Item 1', checked: true },
{ id: 2, label: 'Item 2', checked: false },
{ id: 3, label: 'Item 3', checked: true }
])

const allChecked = computed({
get: () => items.value.every(item => item.checked),
set: (value) => {
  items.value.forEach(item => item.checked = value)
}
})

const indeterminate = computed(() => {
const checkedCount = items.value.filter(item => item.checked).length
return checkedCount > 0 && checkedCount < items.value.length
})
<\/script>

<template>
<!-- Parent checkbox with partial selection indicator -->
<Checkbox
  v-model="allChecked"
  :indeterminate="indeterminate"
  label="Select all"
/>

<!-- Child checkboxes -->
<div style="margin-left: 24px">
  <Checkbox
    v-for="item in items"
    :key="item.id"
    v-model="item.checked"
    :label="item.label"
  />
</div>

<!-- Using with custom icon -->
<Checkbox
  indeterminate
  iconIndeterminate="remove"
  label="Partially selected"
/>
</template>
`,language:`html`})]})}function ea(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($i,{...e})}):$i(e)}function ta(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Неопределённое состояние`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`indeterminate`}),` управляет третьим состоянием чекбокса — неопределённым (частично выбранным). Это состояние визуально отображается как горизонтальная линия вместо галочки.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`indeterminate`}),` — включает неопределённое состояние чекбокса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconIndeterminate`}),` — пользовательская иконка для неопределённого состояния`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — остается `,(0,$.jsx)(t.code,{children:`null`}),` или специальное значение в неопределённом состоянии`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Неопределённое состояние обычно используется для родительских чекбоксов в группе, когда выбраны только некоторые дочерние элементы.`}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref, computed } from 'vue'

const items = ref([
{ id: 1, label: 'Пункт 1', checked: true },
{ id: 2, label: 'Пункт 2', checked: false },
{ id: 3, label: 'Пункт 3', checked: true }
])

const allChecked = computed({
get: () => items.value.every(item => item.checked),
set: (value) => {
  items.value.forEach(item => item.checked = value)
}
})

const indeterminate = computed(() => {
const checkedCount = items.value.filter(item => item.checked).length
return checkedCount > 0 && checkedCount < items.value.length
})
<\/script>

<template>
<!-- Родительский чекбокс с индикатором частичного выбора -->
<Checkbox
  v-model="allChecked"
  :indeterminate="indeterminate"
  label="Выбрать все"
/>

<!-- Дочерние чекбоксы -->
<div style="margin-left: 24px">
  <Checkbox
    v-for="item in items"
    :key="item.id"
    v-model="item.checked"
    :label="item.label"
  />
</div>

<!-- Использование с пользовательской иконкой -->
<Checkbox
  indeterminate
  iconIndeterminate="remove"
  label="Частично выбрано"
/>
</template>
`,language:`html`})]})}function na(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ta,{...e})}):ta(e)}function ra(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Value Management`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`value`}),`, `,(0,$.jsx)(t.code,{children:`valueVariant`}),`, and `,(0,$.jsx)(t.code,{children:`valueVariantHide`}),` properties are designed for managing checkbox values during form submission and two-way data binding.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — current checkbox state (true/false or custom values)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueVariant`}),` — value passed when checkbox is checked`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueVariantHide`}),` — value passed when checkbox is unchecked (default: "0")`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`value`}),` determines the current checkbox state and works with `,(0,$.jsx)(t.code,{children:`v-model`}),` for two-way binding. `,(0,$.jsx)(t.code,{children:`valueVariant`}),` allows setting a custom value for the checked state (e.g., "yes", "1", "active"), which will be passed during form submission. `,(0,$.jsx)(t.code,{children:`valueVariantHide`}),` automatically creates a hidden input field with the specified value, which is submitted when the checkbox is unchecked, ensuring data presence in the form even with an inactive checkbox.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const agreed = ref(false)
const formData = ref({})

const handleSubmit = () => {
console.log('Form data:', formData.value)
}
<\/script>

<template>
<!-- Standard usage with boolean -->
<Checkbox
  v-model="agreed"
  name="terms"
  label="I agree to the terms"
/>
<!-- value: true/false -->

<!-- Custom values for form -->
<Checkbox
  name="subscribe"
  label="Subscribe to newsletter"
  valueVariant="yes"
  valueVariantHide="no"
/>
<!-- When checked sends: subscribe=yes -->
<!-- When unchecked sends: subscribe=no -->

<!-- Numeric values -->
<Checkbox
  name="notification"
  label="Enable notifications"
  valueVariant="1"
  valueVariantHide="0"
/>
<!-- When checked sends: notification=1 -->
<!-- When unchecked sends: notification=0 -->

<!-- Without hidden value -->
<Checkbox
  name="optional"
  label="Optional setting"
  valueVariant="enabled"
  :valueVariantHide="null"
/>
<!-- Only sent when checked: optional=enabled -->
<!-- When unchecked field is not sent -->
</template>
`,language:`html`})]})}function ia(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ra,{...e})}):ra(e)}function aa(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление значениями`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`value`}),`, `,(0,$.jsx)(t.code,{children:`valueVariant`}),` и `,(0,$.jsx)(t.code,{children:`valueVariantHide`}),` предназначены для управления значениями чекбокса при отправке форм и работе с двусторонней привязкой данных.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — текущее состояние чекбокса (true/false или пользовательские значения)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueVariant`}),` — значение, которое передаётся при отмеченном чекбоксе`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueVariantHide`}),` — значение, которое передаётся при неотмеченном чекбоксе (по умолчанию: "0")`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`value`}),` определяет текущее состояние чекбокса и работает с `,(0,$.jsx)(t.code,{children:`v-model`}),` для двусторонней привязки. `,(0,$.jsx)(t.code,{children:`valueVariant`}),` позволяет установить пользовательское значение для отмеченного состояния (например, "yes", "1", "active"), которое будет передано при отправке формы. `,(0,$.jsx)(t.code,{children:`valueVariantHide`}),` автоматически создаёт скрытое поле input с указанным значением, которое отправляется, когда чекбокс не отмечен, обеспечивая наличие данных в форме даже при неактивном чекбоксе.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const agreed = ref(false)
const formData = ref({})

const handleSubmit = () => {
console.log('Form data:', formData.value)
}
<\/script>

<template>
<!-- Стандартное использование с boolean -->
<Checkbox
  v-model="agreed"
  name="terms"
  label="Согласен с условиями"
/>
<!-- value: true/false -->

<!-- Пользовательские значения для формы -->
<Checkbox
  name="subscribe"
  label="Подписаться на рассылку"
  valueVariant="yes"
  valueVariantHide="no"
/>
<!-- При отметке отправит: subscribe=yes -->
<!-- Без отметки отправит: subscribe=no -->

<!-- Числовые значения -->
<Checkbox
  name="notification"
  label="Включить уведомления"
  valueVariant="1"
  valueVariantHide="0"
/>
<!-- При отметке отправит: notification=1 -->
<!-- Без отметки отправит: notification=0 -->

<!-- Без скрытого значения -->
<Checkbox
  name="optional"
  label="Опциональная настройка"
  valueVariant="enabled"
  :valueVariantHide="null"
/>
<!-- Отправляется только при отметке: optional=enabled -->
<!-- Без отметки поле не отправляется -->
</template>
`,language:`html`})]})}function oa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(aa,{...e})}):aa(e)}function sa(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Compact interactive element for representing input, attributes, actions, and filters in the user interface.`}),`
`,(0,$.jsx)(t.p,{children:`Chip provides a unified component for displaying discrete information in a compact format with support for selection states, icons, adaptive behavior, and various visual variants (input, assistive). Inherits Button functionality while adding specialized styling and semantics for working with tags, filters, statuses, and user input. Ensures a consistent API for creating interactive chips with support for clicks, disabled/selected states, and icon integration.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Core capabilities:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Button inheritance (icons, progress, click events)`}),`
`,(0,$.jsx)(t.li,{children:`Visual variants (input, assistive) for different contexts`}),`
`,(0,$.jsx)(t.li,{children:`State management (selected, disabled, focus, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive behavior (adaptive, container) for different screen sizes`}),`
`,(0,$.jsx)(t.li,{children:`Customizable text alignment (textAlign: left/center/right)`}),`
`,(0,$.jsx)(t.li,{children:`Icon support (icon, iconTrailing) and progress indicator`}),`
`,(0,$.jsx)(t.li,{children:`Skeleton state integration for loading`}),`
`,(0,$.jsx)(t.li,{children:`Value and detail passing for element identification`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Tags and labels for content categorization`}),`
`,(0,$.jsx)(t.li,{children:`Filters in search interfaces and catalogs`}),`
`,(0,$.jsx)(t.li,{children:`Displaying user-entered data (emails, contacts)`}),`
`,(0,$.jsx)(t.li,{children:`Statuses and state indicators`}),`
`,(0,$.jsx)(t.li,{children:`Assistive elements (hints, recommendations)`}),`
`,(0,$.jsx)(t.li,{children:`Selectable options in forms and lists`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedFilters = ref(['active', 'verified'])
const tags = ref(['Vue', 'TypeScript', 'UI'])

const toggleFilter = (filter) => {
const index = selectedFilters.value.indexOf(filter)
if (index > -1) {
  selectedFilters.value.splice(index, 1)
} else {
  selectedFilters.value.push(filter)
}
}
<\/script>

<template>
<!-- Basic chip -->
<Chip>Standard</Chip>

<!-- Input chip for user input -->
<Chip input icon="person">Contact</Chip>

<!-- Assistive chip for hints -->
<Chip assistive icon="lightbulb">Recommendation</Chip>

<!-- Filters with selection state -->
<Chip
  v-for="filter in ['active', 'pending', 'verified']"
  :key="filter"
  :selected="selectedFilters.includes(filter)"
  @click="toggleFilter(filter)"
>
  {{ filter }}
</Chip>

<!-- With data passing -->
<Chip
  value="filter-tag"
  :detail="{ category: 'status', type: 'active' }"
  @click="handleChipClick"
>
  Active
</Chip>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Chip inherits all Button functionality, including events, icons, and progress indicators, while adding specialized styling for compact interface elements.`}),`
`]})]})}function ca(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sa,{...e})}):sa(e)}function la(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компактный интерактивный элемент для представления ввода, атрибутов, действий и фильтров в пользовательском интерфейсе.`}),`
`,(0,$.jsx)(t.p,{children:`Chip предоставляет унифицированный компонент для отображения дискретной информации в компактном формате с поддержкой состояний выбора, иконок, адаптивного поведения и различных визуальных вариантов (input, assistive). Наследует функциональность Button, добавляя специализированную стилизацию и семантику для работы с тегами, фильтрами, статусами и пользовательским вводом. Обеспечивает согласованный API для создания интерактивных чипов с поддержкой кликов, состояния disabled/selected и интеграцией иконок.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Наследование от Button (иконки, прогресс, события клика)`}),`
`,(0,$.jsx)(t.li,{children:`Визуальные варианты (input, assistive) для разных контекстов`}),`
`,(0,$.jsx)(t.li,{children:`Управление состояниями (selected, disabled, focus, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивное поведение (adaptive, container) для разных размеров экрана`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемое выравнивание текста (textAlign: left/center/right)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок (icon, iconTrailing) и прогресс-индикатора`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция скелетон-состояния для загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Передача value и detail для идентификации элементов`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Теги и метки для категоризации контента`}),`
`,(0,$.jsx)(t.li,{children:`Фильтры в поисковых интерфейсах и каталогах`}),`
`,(0,$.jsx)(t.li,{children:`Отображение введенных пользователем данных (email, контакты)`}),`
`,(0,$.jsx)(t.li,{children:`Статусы и индикаторы состояния`}),`
`,(0,$.jsx)(t.li,{children:`Вспомогательные элементы (подсказки, рекомендации)`}),`
`,(0,$.jsx)(t.li,{children:`Выбираемые опции в формах и списках`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedFilters = ref(['active', 'verified'])
const tags = ref(['Vue', 'TypeScript', 'UI'])

const toggleFilter = (filter) => {
const index = selectedFilters.value.indexOf(filter)
if (index > -1) {
  selectedFilters.value.splice(index, 1)
} else {
  selectedFilters.value.push(filter)
}
}
<\/script>

<template>
<!-- Базовый чип -->
<Chip>Стандарт</Chip>

<!-- Input чип для пользовательского ввода -->
<Chip input icon="person">Контакт</Chip>

<!-- Assistive чип для подсказок -->
<Chip assistive icon="lightbulb">Рекомендация</Chip>

<!-- Фильтры с состоянием выбора -->
<Chip
  v-for="filter in ['active', 'pending', 'verified']"
  :key="filter"
  :selected="selectedFilters.includes(filter)"
  @click="toggleFilter(filter)"
>
  {{ filter }}
</Chip>

<!-- С передачей данных -->
<Chip
  value="filter-tag"
  :detail="{ category: 'status', type: 'active' }"
  @click="handleChipClick"
>
  Активный
</Chip>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Chip наследует всю функциональность Button, включая события, иконки и прогресс-индикаторы, добавляя специализированную стилизацию для компактных элементов интерфейса.`}),`
`]})]})}function ua(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(la,{...e})}):la(e)}function da(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Assistive chips (assistive)`}),`
`,(0,$.jsxs)(t.p,{children:[`The Chip component supports assistive mode through the `,(0,$.jsx)(t.code,{children:`assistive`}),` property. In this mode, chips have a special visual style to help users complete tasks:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Distinctive style`}),` - visually stand out among other elements`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Hints and recommendations`}),` - suggest action options or auto-completion`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`User guidance`}),` - help navigate the interface`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Icon support`}),` - improve understanding of purpose through visual elements`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Assistive mode is especially useful for creating hint systems, recommendations, and helper actions that guide users to the right solutions without excessive visual noise.`}),`
`,(0,$.jsx)(a,{code:`
<Chip assistive icon="lightbulb">Recommendation</Chip>
<Chip assistive icon="check">Hint</Chip>
<Chip assistive>Auto-complete</Chip>
`,language:`html`})]})}function fa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(da,{...e})}):da(e)}function pa(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Вспомогательные чипы (assistive)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Chip поддерживает вспомогательный режим через свойство `,(0,$.jsx)(t.code,{children:`assistive`}),`. В этом режиме чипы имеют специальный визуальный стиль для помощи пользователям в выполнении задач:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Отличительный стиль`}),` - визуально выделяются среди других элементов`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Подсказки и рекомендации`}),` - предлагают варианты действий или автодополнения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Направление пользователя`}),` - помогают ориентироваться в интерфейсе`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Поддержка иконок`}),` - улучшают понимание назначения через визуальные элементы`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Assistive режим особенно полезен для создания систем подсказок, рекомендаций и вспомогательных действий, которые направляют пользователя к нужным решениям без излишнего визуального шума.`}),`
`,(0,$.jsx)(a,{code:`
<Chip assistive icon="lightbulb">Рекомендация</Chip>
<Chip assistive icon="check">Подсказка</Chip>
<Chip assistive>Автодополнение</Chip>
`,language:`html`})]})}function ma(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pa,{...e})}):pa(e)}function ha(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Input chips (input)`}),`
`,(0,$.jsxs)(t.p,{children:[`The Chip component supports input mode through the `,(0,$.jsx)(t.code,{children:`input`}),` property. In this mode, chips have an input field style and represent discrete information entered by the user:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Form-like appearance`}),` - visually resemble input elements`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`User data`}),` - display tags, contacts, keywords`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Interactivity`}),` - can be removed or edited`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Grouping`}),` - often used in sets for multiple selections`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Input mode is especially useful for displaying data that users have actively entered or selected, making them visually distinct from static interface elements.`}),`
`,(0,$.jsx)(a,{code:`
<Chip input icon="person">Contact</Chip>
<Chip input icon="tag">Tag</Chip>
<Chip input selected>Selected</Chip>
`,language:`html`})]})}function ga(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ha,{...e})}):ha(e)}function _a(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Input чипы (input)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Chip поддерживает режим input через свойство `,(0,$.jsx)(t.code,{children:`input`}),`. В этом режиме чипы имеют стиль полей ввода и представляют дискретную информацию, введенную пользователем:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Внешний вид формы`}),` - визуально напоминают элементы ввода`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Пользовательские данные`}),` - отображают теги, контакты, ключевые слова`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Интерактивность`}),` - могут быть удалены или отредактированы`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Группировка`}),` - часто используются в наборах для множественного выбора`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Input режим особенно полезен для отображения данных, которые пользователь активно вводил или выбирал, делая их визуально отличимыми от статических элементов интерфейса.`}),`
`,(0,$.jsx)(a,{code:`
<Chip input icon="person">Контакт</Chip>
<Chip input icon="tag">Тег</Chip>
<Chip input selected>Выбранный</Chip>
`,language:`html`})]})}function va(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_a,{...e})}):_a(e)}function ya(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for managing a collection of chips with selection functionality and flexible data binding.`}),`
`,(0,$.jsx)(t.p,{children:`ChipGroup renders multiple Chip components from a data array, handles single or multiple selection states, and provides customization options for each chip. The component supports dynamic list rendering, conditional icon display based on selection, and flexible data structure mapping through key properties.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Single or multiple item selection`}),`
`,(0,$.jsx)(t.li,{children:`Dynamic list rendering from data array`}),`
`,(0,$.jsx)(t.li,{children:`Customizable chip appearance through chipAttrs`}),`
`,(0,$.jsx)(t.li,{children:`Conditional icon display based on selection state`}),`
`,(0,$.jsx)(t.li,{children:`Flexible data binding with keyLabel and keyValue`}),`
`,(0,$.jsx)(t.li,{children:`Event handling for user interactions`}),`
`,(0,$.jsx)(t.li,{children:`Support for complex data structures`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Filter chips for search and filtering`}),`
`,(0,$.jsx)(t.li,{children:`Tag selection in forms`}),`
`,(0,$.jsx)(t.li,{children:`Category selection interfaces`}),`
`,(0,$.jsx)(t.li,{children:`Multiple choice options`}),`
`,(0,$.jsx)(t.li,{children:`Status or type selectors`}),`
`,(0,$.jsx)(t.li,{children:`Dynamic lists with selection`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])

const options = [
{ value: 'option1', label: 'Option 1', icon: 'star' },
{ value: 'option2', label: 'Option 2', icon: 'favorite' },
{ value: 'option3', label: 'Option 3', icon: 'bookmark' }
]

const handleClick = (event) => {
console.log('Chip clicked:', event)
}
<\/script>

<template>
<ChipGroup
  v-model:selected="selected"
  :list="options"
  key-value="value"
  key-label="label"
  :icon-when-selected="true"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function ba(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ya,{...e})}):ya(e)}function xa(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для управления коллекцией чипов с функциональностью выбора и гибким связыванием данных.`}),`
`,(0,$.jsx)(t.p,{children:`ChipGroup отображает множество компонентов Chip из массива данных, управляет одиночным или множественным выбором и предоставляет возможности настройки каждого чипа. Компонент поддерживает динамический рендеринг списка, условное отображение иконок в зависимости от выбора и гибкое сопоставление структуры данных через ключевые свойства.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Одиночный или множественный выбор элементов`}),`
`,(0,$.jsx)(t.li,{children:`Динамический рендеринг списка из массива данных`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемый внешний вид чипов через chipAttrs`}),`
`,(0,$.jsx)(t.li,{children:`Условное отображение иконок в зависимости от состояния выбора`}),`
`,(0,$.jsx)(t.li,{children:`Гибкое связывание данных через keyLabel и keyValue`}),`
`,(0,$.jsx)(t.li,{children:`Обработка событий для взаимодействия пользователя`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка сложных структур данных`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Фильтр-чипы для поиска и фильтрации`}),`
`,(0,$.jsx)(t.li,{children:`Выбор тегов в формах`}),`
`,(0,$.jsx)(t.li,{children:`Интерфейсы выбора категорий`}),`
`,(0,$.jsx)(t.li,{children:`Варианты множественного выбора`}),`
`,(0,$.jsx)(t.li,{children:`Селекторы статусов или типов`}),`
`,(0,$.jsx)(t.li,{children:`Динамические списки с выбором`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])

const options = [
{ value: 'option1', label: 'Опция 1', icon: 'star' },
{ value: 'option2', label: 'Опция 2', icon: 'favorite' },
{ value: 'option3', label: 'Опция 3', icon: 'bookmark' }
]

const handleClick = (event) => {
console.log('Чип нажат:', event)
}
<\/script>

<template>
<ChipGroup
  v-model:selected="selected"
  :list="options"
  key-value="value"
  key-label="label"
  :icon-when-selected="true"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function Sa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xa,{...e})}):xa(e)}function Ca(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Selection Management`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`selected`}),` and `,(0,$.jsx)(t.code,{children:`iconWhenSelected`}),` are designed for managing chip selection state.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected`}),` — identifier(s) of selected item (string, number, array of strings/numbers, or `,(0,$.jsx)(t.code,{children:`undefined`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconWhenSelected`}),` — shows chip icons only when item is selected (default: icons always visible)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`selected`}),` property determines which chips will be highlighted. Accepts a single value for single selection or an array of values for multiple selection. Values are matched with list items by their index or value if the list contains simple data types.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])
<\/script>

<template>
<!-- Simple array selection -->
<ChipGroup
  v-model:selected="selected"
  :list="['Option 1', 'Option 2']"
/>

<!-- Object array with keys -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'First Option' },
    { id: 'option2', name: 'Second Option' }
  ]"
  key-value="id"
  key-label="name"
/>

<!-- Icons only when selected -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'Option 1', icon: 'check' },
    { id: 'option2', name: 'Option 2', icon: 'check' }
  ]"
  key-value="id"
  key-label="name"
  :icon-when-selected="true"
/>
</template>
`,language:`html`})]})}function wa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ca,{...e})}):Ca(e)}function Ta(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление выбором`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`selected`}),` и `,(0,$.jsx)(t.code,{children:`iconWhenSelected`}),` предназначены для управления состоянием выбора чипов.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected`}),` — идентификатор(ы) выбранного элемента (строка, число, массив строк/чисел или `,(0,$.jsx)(t.code,{children:`undefined`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconWhenSelected`}),` — показывает иконки чипов только при выборе элемента (по умолчанию: иконки всегда видимы)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`selected`}),` определяет, какие чипы будут выделены. Принимает одно значение для единичного выбора или массив значений для множественного выбора. Значения сопоставляются с элементами списка по их индексу или значению, если список содержит простые типы данных.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])
<\/script>

<template>
<!-- Выбор из простого массива -->
<ChipGroup
  v-model:selected="selected"
  :list="['Опция 1', 'Опция 2']"
/>

<!-- Массив объектов с ключами -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'Первая опция' },
    { id: 'option2', name: 'Вторая опция' }
  ]"
  key-value="id"
  key-label="name"
/>

<!-- Иконки только при выборе -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'Опция 1', icon: 'check' },
    { id: 'option2', name: 'Опция 2', icon: 'check' }
  ]"
  key-value="id"
  key-label="name"
  :icon-when-selected="true"
/>
</template>
`,language:`html`})]})}function Ea(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ta,{...e})}):Ta(e)}function Da(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A component for managing content rendering exclusively on the client side.`}),`
`,(0,$.jsx)(t.p,{children:`ClientOnly is an essential tool for ensuring compatibility with Server-Side Rendering (SSR) and Static Site Generation (SSG). It prevents code that depends on browser APIs (such as window or document) from executing on the server side, thereby avoiding hydration mismatch errors.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Deferred rendering until the component is mounted in the browser`}),`
`,(0,$.jsx)(t.li,{children:`Prevention of hydration mismatch errors`}),`
`,(0,$.jsx)(t.li,{children:`Ability to force enable/disable via the clientOnly property`}),`
`,(0,$.jsx)(t.li,{children:`Easy integration of any third-party libraries that do not support SSR`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Interactive maps and charts`}),`
`,(0,$.jsx)(t.li,{children:`Components using localStorage or other Web APIs`}),`
`,(0,$.jsx)(t.li,{children:`Third-party widgets requiring the window object`}),`
`,(0,$.jsx)(t.li,{children:`Performance optimization in SSR environments`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ClientOnly } from 'your-library'
<\/script>

<template>
<ClientOnly>
  <!-- This content will only appear in the browser -->
  <MyBrowserSpecificComponent />
</ClientOnly>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`ClientOnly is an indispensable helper when developing modern isomorphic applications.`}),`
`]})]})}function Oa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Da,{...e})}):Da(e)}function ka(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компонент для управления рендерингом контента исключительно на стороне клиента.`}),`
`,(0,$.jsx)(t.p,{children:`ClientOnly является важным инструментом для обеспечения совместимости с Server-Side Rendering (SSR) и Static Site Generation (SSG). Он предотвращает попытки выполнения кода, зависящего от браузерных API (например, window или document), на стороне сервера, тем самым избегая ошибок гидратации.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отложенный рендеринг до момента монтирования в браузере`}),`
`,(0,$.jsx)(t.li,{children:`Предотвращение ошибок рассогласования гидратации (hydration mismatch)`}),`
`,(0,$.jsx)(t.li,{children:`Возможность принудительного включения/выключения через свойство clientOnly`}),`
`,(0,$.jsx)(t.li,{children:`Легкая интеграция любых сторонних библиотек, не поддерживающих SSR`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Интерактивные карты и графики`}),`
`,(0,$.jsx)(t.li,{children:`Компоненты, использующие localStorage или другие Web API`}),`
`,(0,$.jsx)(t.li,{children:`Сторонние виджеты, требующие наличия объекта window`}),`
`,(0,$.jsx)(t.li,{children:`Оптимизация производительности в средах SSR`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ClientOnly } from 'your-library'
<\/script>

<template>
<ClientOnly>
  <!-- Этот контент появится только в браузере -->
  <MyBrowserSpecificComponent />
</ClientOnly>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`ClientOnly — незаменимый помощник при разработке современных изоморфных приложений.`}),`
`]})]})}function Aa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ka,{...e})}):ka(e)}function ja(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`Container is a base layout component used to constrain content width and control horizontal spacing.
By default, it helps keep a readable content width and ensures consistent layout rhythm across screens.`}),`
`,(0,$.jsxs)(t.p,{children:[`The component supports alignment via `,(0,$.jsx)(t.code,{children:`align`}),` (`,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`}),`) and works with `,(0,$.jsx)(t.code,{children:`width`}),` and `,(0,$.jsx)(t.code,{children:`marginX`}),` design tokens.
You can also use the `,(0,$.jsx)(t.code,{children:`area`}),` prop to integrate with area context.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Constrain content width with the `,(0,$.jsx)(t.code,{children:`width`}),` token`]}),`
`,(0,$.jsxs)(t.li,{children:[`Manage horizontal spacing via `,(0,$.jsx)(t.code,{children:`marginX`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Container alignment options: `,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default`}),` slot support for arbitrary content`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`area`}),` prop support for context-based placement`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Outer wrapper for page sections`}),`
`,(0,$.jsx)(t.li,{children:`Limiting text and form width`}),`
`,(0,$.jsx)(t.li,{children:`Aligning content inside grid and block structures`}),`
`,(0,$.jsx)(t.li,{children:`Base container for reusable layout blocks`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<Container
  align="center"
  area="container"
>
  <p>Content inside a width-constrained container.</p>
</Container>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Use Container as a foundational layout layer, while semantic sectioning is handled by outer components (`,(0,$.jsx)(t.code,{children:`Section`}),`, `,(0,$.jsx)(t.code,{children:`Group`}),`, `,(0,$.jsx)(t.code,{children:`Page`}),`).`]}),`
`]})]})}function Ma(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ja,{...e})}):ja(e)}function Na(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Container - это базовый layout-компонент для ограничения ширины контента и управления горизонтальными отступами.
По умолчанию он помогает держать читаемую ширину блока и обеспечивает единый ритм макета между экранами.`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент поддерживает выравнивание через `,(0,$.jsx)(t.code,{children:`align`}),` (`,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`}),`) и работает с дизайн-токенами `,(0,$.jsx)(t.code,{children:`width`}),` и `,(0,$.jsx)(t.code,{children:`marginX`}),`.
Также можно использовать свойство `,(0,$.jsx)(t.code,{children:`area`}),` для интеграции с контекстом областей.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Ограничение ширины контента через токен `,(0,$.jsx)(t.code,{children:`width`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Управление горизонтальными отступами через `,(0,$.jsx)(t.code,{children:`marginX`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Выравнивание контейнера: `,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка слота `,(0,$.jsx)(t.code,{children:`default`}),` для произвольного содержимого`]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка свойства `,(0,$.jsx)(t.code,{children:`area`}),` для контекстного размещения`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Внешняя обертка секций страницы`}),`
`,(0,$.jsx)(t.li,{children:`Ограничение ширины текста и форм`}),`
`,(0,$.jsx)(t.li,{children:`Выравнивание контента в сетке и блочной структуре`}),`
`,(0,$.jsx)(t.li,{children:`Базовый контейнер для повторно используемых layout-блоков`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<Container
  align="center"
  area="container"
>
  <p>Контент внутри контейнера с ограниченной шириной.</p>
</Container>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Используйте Container как базовый слой компоновки, а семантику секции задавайте внешними компонентами (`,(0,$.jsx)(t.code,{children:`Section`}),`, `,(0,$.jsx)(t.code,{children:`Group`}),`, `,(0,$.jsx)(t.code,{children:`Page`}),`).`]}),`
`]})]})}function Pa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Na,{...e})}):Na(e)}function Fa(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating modal dialog windows with icon support, titles, and predefined action buttons.`}),`
`,(0,$.jsx)(t.p,{children:`Dialog is a specialized wrapper over the Modal component with additional capabilities for displaying informational messages, confirmations, and notifications. The component automatically displays an information block with icon, title, and description, and provides predefined OK and Close buttons. Supports success and error states with automatic icon switching, image positioning, and full content customization.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Modal window with centering and background blocking`}),`
`,(0,$.jsx)(t.li,{children:`Icon support with automatic switching for success/error states`}),`
`,(0,$.jsx)(t.li,{children:`Information block with icon, title, and description`}),`
`,(0,$.jsx)(t.li,{children:`Predefined OK and Close buttons with customization options`}),`
`,(0,$.jsx)(t.li,{children:`Image positioning at top or left`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Window, Bars, Actions, Icon components`}),`
`,(0,$.jsx)(t.li,{children:`Closing by ESC key and overlay click`}),`
`,(0,$.jsx)(t.li,{children:`ok and close events for handling user actions`}),`
`,(0,$.jsx)(t.li,{children:`Slot support for content customization`}),`
`,(0,$.jsx)(t.li,{children:`Responsive design for mobile devices`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`User action confirmations`}),`
`,(0,$.jsx)(t.li,{children:`Success or error notifications`}),`
`,(0,$.jsx)(t.li,{children:`Informational messages`}),`
`,(0,$.jsx)(t.li,{children:`Warnings and alerts`}),`
`,(0,$.jsx)(t.li,{children:`Simple forms with minimal fields`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const showSuccess = ref(false)

const handleConfirm = () => {
console.log('Action confirmed')
isOpen.value = false
showSuccess.value = true
}
<\/script>

<template>
<button @click="isOpen = true">Open Dialog</button>

<Dialog
  v-model:open="isOpen"
  label="Confirmation"
  description="Are you sure you want to perform this action?"
  @ok="handleConfirm"
  @close="isOpen = false"
>
  <template #default>
    <div class="additional-info">
      Additional information can be placed here.
    </div>
  </template>
</Dialog>

<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Success"
  description="Your action has been completed successfully."
  :buttonClose="null"
/>
</template>
`,language:`html`})]})}function Ia(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fa,{...e})}):Fa(e)}function La(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания модальных диалоговых окон с поддержкой иконок, заголовков и предустановленных кнопок действий.`}),`
`,(0,$.jsx)(t.p,{children:`Dialog представляет собой специализированную обертку над компонентом Modal с дополнительными возможностями для отображения информационных сообщений, подтверждений и уведомлений. Компонент автоматически отображает информационный блок с иконкой, заголовком и описанием, а также предоставляет предустановленные кнопки OK и Закрыть. Поддерживает состояния успеха и ошибки с автоматическим переключением иконок, позиционирование изображения и полную кастомизацию контента.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Модальное окно с центрированием и блокировкой фона`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок с автоматическим переключением для состояний успеха/ошибки`}),`
`,(0,$.jsx)(t.li,{children:`Информационный блок с иконкой, заголовком и описанием`}),`
`,(0,$.jsx)(t.li,{children:`Предустановленные кнопки OK и Закрыть с возможностью кастомизации`}),`
`,(0,$.jsx)(t.li,{children:`Позиционирование изображения сверху или слева`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с компонентами Window, Bars, Actions, Icon`}),`
`,(0,$.jsx)(t.li,{children:`Закрытие по ESC и клику на overlay`}),`
`,(0,$.jsx)(t.li,{children:`События ok и close для обработки действий пользователя`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слотов для кастомизации контента`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивный дизайн для мобильных устройств`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Подтверждения действий пользователя`}),`
`,(0,$.jsx)(t.li,{children:`Уведомления об успехе или ошибке`}),`
`,(0,$.jsx)(t.li,{children:`Информационные сообщения`}),`
`,(0,$.jsx)(t.li,{children:`Предупреждения и алерты`}),`
`,(0,$.jsx)(t.li,{children:`Простые формы с минимальным количеством полей`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const showSuccess = ref(false)

const handleConfirm = () => {
console.log('Действие подтверждено')
isOpen.value = false
showSuccess.value = true
}
<\/script>

<template>
<button @click="isOpen = true">Открыть диалог</button>

<Dialog
  v-model:open="isOpen"
  label="Подтверждение"
  description="Вы уверены, что хотите выполнить это действие?"
  @ok="handleConfirm"
  @close="isOpen = false"
>
  <template #default>
    <div class="additional-info">
      Дополнительная информация может быть размещена здесь.
    </div>
  </template>
</Dialog>

<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Успешно"
  description="Ваше действие выполнено успешно."
  :buttonClose="null"
/>
</template>
`,language:`html`})]})}function Ra(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(La,{...e})}):La(e)}function za(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Success and error states`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`success`}),`, `,(0,$.jsx)(t.code,{children:`error`}),`, `,(0,$.jsx)(t.code,{children:`iconSuccess`}),` and `,(0,$.jsx)(t.code,{children:`iconError`}),` are designed to control the visual state of the dialog and automatically display corresponding icons.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`success`}),` — sets the dialog to success state with automatic icon`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`error`}),` — sets the dialog to error state with automatic icon`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconSuccess`}),` — sets the icon for success state (default 'check_circle')`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconError`}),` — sets the icon for error state (default 'error')`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: if `,(0,$.jsx)(t.code,{children:`success`}),` or `,(0,$.jsx)(t.code,{children:`error`}),` are not set or equal to `,(0,$.jsx)(t.code,{children:`false`}),`, the dialog is displayed in a neutral state. When `,(0,$.jsx)(t.code,{children:`success="true"`}),` is activated, the component automatically displays the success icon from `,(0,$.jsx)(t.code,{children:`iconSuccess`}),`. When `,(0,$.jsx)(t.code,{children:`error="true"`}),` is activated, the error icon from `,(0,$.jsx)(t.code,{children:`iconError`}),` is displayed. Properties `,(0,$.jsx)(t.code,{children:`iconSuccess`}),` and `,(0,$.jsx)(t.code,{children:`iconError`}),` allow overriding standard icons with custom ones, providing flexibility in visual design of dialog messages.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showSuccess = ref(false)
const showError = ref(false)
<\/script>

<template>
<!-- Success dialog -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Operation completed"
  description="Your changes have been saved successfully."
/>

<!-- Error dialog -->
<Dialog
  v-model:open="showError"
  :error="true"
  label="Operation failed"
  description="Unable to complete the operation. Please try again."
/>

<!-- With custom icons -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  iconSuccess="done_all"
  label="All done"
  description="Process completed successfully."
/>

<!-- Error with custom icon -->
<Dialog
  v-model:open="showError"
  :error="true"
  iconError="warning"
  label="Warning"
  description="Issues detected during data processing."
/>
</template>
`,language:`html`})]})}function Ba(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(za,{...e})}):za(e)}function Va(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Состояния успеха и ошибки`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`success`}),`, `,(0,$.jsx)(t.code,{children:`error`}),`, `,(0,$.jsx)(t.code,{children:`iconSuccess`}),` и `,(0,$.jsx)(t.code,{children:`iconError`}),` предназначены для управления визуальным состоянием диалога и автоматического отображения соответствующих иконок.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`success`}),` — переводит диалог в состояние успеха с автоматической иконкой`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`error`}),` — переводит диалог в состояние ошибки с автоматической иконкой`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconSuccess`}),` — задаёт иконку для состояния успеха (по умолчанию 'check_circle')`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`iconError`}),` — задаёт иконку для состояния ошибки (по умолчанию 'error')`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,$.jsx)(t.code,{children:`success`}),` или `,(0,$.jsx)(t.code,{children:`error`}),` не заданы или равны `,(0,$.jsx)(t.code,{children:`false`}),`, диалог отображается в нейтральном состоянии. При активации `,(0,$.jsx)(t.code,{children:`success="true"`}),`, компонент автоматически отображает иконку успеха из `,(0,$.jsx)(t.code,{children:`iconSuccess`}),`. При активации `,(0,$.jsx)(t.code,{children:`error="true"`}),`, отображается иконка ошибки из `,(0,$.jsx)(t.code,{children:`iconError`}),`. Свойства `,(0,$.jsx)(t.code,{children:`iconSuccess`}),` и `,(0,$.jsx)(t.code,{children:`iconError`}),` позволяют переопределить стандартные иконки на пользовательские, обеспечивая гибкость визуального оформления диалоговых сообщений.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showSuccess = ref(false)
const showError = ref(false)
<\/script>

<template>
<!-- Диалог успеха -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Операция выполнена"
  description="Ваши изменения успешно сохранены."
/>

<!-- Диалог ошибки -->
<Dialog
  v-model:open="showError"
  :error="true"
  label="Ошибка выполнения"
  description="Не удалось выполнить операцию. Попробуйте ещё раз."
/>

<!-- С пользовательскими иконками -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  iconSuccess="done_all"
  label="Всё готово"
  description="Процесс завершён успешно."
/>

<!-- Ошибка с кастомной иконкой -->
<Dialog
  v-model:open="showError"
  :error="true"
  iconError="warning"
  label="Внимание"
  description="Обнаружены проблемы при обработке данных."
/>
</template>
`,language:`html`})]})}function Ha(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Va,{...e})}):Va(e)}function Ua(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Action buttons`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`buttonOk`}),`, `,(0,$.jsx)(t.code,{children:`buttonClose`}),`, and `,(0,$.jsx)(t.code,{children:`actionsList`}),` control action buttons in the dialog window through the built-in Actions component.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`buttonOk`}),` — confirmation button`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`buttonClose`}),` — close button`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`clickOkAndClose`}),` — automatic dialog closing when OK button is clicked`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionsList`}),` — direct access to the Actions component button list`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`With `,(0,$.jsx)(t.code,{children:`clickOkAndClose="true"`}),` OK button automatically closes the dialog after clicking.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<!-- Basic usage -->
<Dialog
  buttonOk="Confirm"
  buttonClose="Cancel"
  label="Delete file"
  @ok="handleDelete"
/>

<!-- Hide close button -->
<Dialog
  buttonOk="Got it"
  :buttonClose="null"
  label="Information"
/>

<!-- Using actionsList -->
<Dialog
  :actionsList="[
    { label: 'Save', onClick: handleSave },
    { label: 'Cancel', outline: true, onClick: handleCancel }
  ]"
  label="Save"
/>
</template>
`,language:`html`})]})}function Wa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ua,{...e})}):Ua(e)}function Ga(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Кнопки действий`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`buttonOk`}),`, `,(0,$.jsx)(t.code,{children:`buttonClose`}),` и `,(0,$.jsx)(t.code,{children:`actionsList`}),` управляют кнопками действий в диалоговом окне через встроенный компонент Actions.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`buttonOk`}),` — кнопка подтверждения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`buttonClose`}),` — кнопка закрытия`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`clickOkAndClose`}),` — автоматическое закрытие диалога при нажатии кнопки OK`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`actionsList`}),` — прямой доступ к списку кнопок компонента Actions`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`При `,(0,$.jsx)(t.code,{children:`clickOkAndClose="true"`}),` кнопка OK автоматически закрывает диалог после нажатия.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<!-- Базовое использование -->
<Dialog
  buttonOk="Подтвердить"
  buttonClose="Отмена"
  label="Удаление файла"
  @ok="handleDelete"
/>

<!-- Скрытие кнопки закрытия -->
<Dialog
  buttonOk="Понятно"
  :buttonClose="null"
  label="Информация"
/>

<!-- Использование actionsList -->
<Dialog
  :actionsList="[
    { label: 'Сохранить', onClick: handleSave },
    { label: 'Отмена', outline: true, onClick: handleCancel }
  ]"
  label="Сохранение"
/>
</template>
`,language:`html`})]})}function Ka(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ga,{...e})}):Ga(e)}function qa(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`ok`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the confirmation (OK) button in the dialog is clicked.`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Parameters:`}),`
Event does not pass parameters.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleOk = () => {
console.log('User confirmed action')
showDialog.value = false
// Execute action after confirmation
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonOk="Confirm"
  label="Delete file"
  description="Are you sure you want to delete this file?"
  @ok="handleOk"
/>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`close`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the close button in the dialog is clicked.`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Parameters:`}),`
Event does not pass parameters.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleClose = () => {
console.log('User cancelled action')
showDialog.value = false
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonClose="Cancel"
  label="Confirmation"
  @close="handleClose"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Buttons can be configured via `,(0,$.jsx)(t.code,{children:`buttonOk`}),` and `,(0,$.jsx)(t.code,{children:`buttonClose`}),` properties, or hidden by passing `,(0,$.jsx)(t.code,{children:`null`}),`.`]}),`
`]})]})}function Ja(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qa,{...e})}):qa(e)}function Ya(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`ok`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку подтверждения (OK) в диалоговом окне.`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Параметры:`}),`
Событие не передаёт параметров.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleOk = () => {
console.log('Пользователь подтвердил действие')
showDialog.value = false
// Выполнение действия после подтверждения
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonOk="Подтвердить"
  label="Удаление файла"
  description="Вы действительно хотите удалить этот файл?"
  @ok="handleOk"
/>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`close`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку закрытия в диалоговом окне.`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Параметры:`}),`
Событие не передаёт параметров.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleClose = () => {
console.log('Пользователь отменил действие')
showDialog.value = false
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonClose="Отмена"
  label="Подтверждение"
  @close="handleClose"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Кнопки можно настроить через свойства `,(0,$.jsx)(t.code,{children:`buttonOk`}),` и `,(0,$.jsx)(t.code,{children:`buttonClose`}),`, либо скрыть, передав `,(0,$.jsx)(t.code,{children:`null`}),`.`]}),`
`]})]})}function Xa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ya,{...e})}):Ya(e)}function Za(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`A basic Dummy placeholder component for interface prototyping and visual testing. Allows you to quickly create blocks of specific sizes and colors.`}),`
`,(0,$.jsx)(t.p,{children:`Dummy is designed as a tool for developers to help structure views before actual components are implemented.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Size customization via the size property`}),`
`,(0,$.jsx)(t.li,{children:`Color scheme configuration via the palette property`}),`
`,(0,$.jsx)(t.li,{children:`Use as a space filler in layouts`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Prototyping grids and layouts`}),`
`,(0,$.jsx)(t.li,{children:`Visual testing of spacing and alignment`}),`
`,(0,$.jsx)(t.li,{children:`Placeholders for components not yet implemented`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
<\/script>

<template>
<div class="dummy-examples" style="display: flex; gap: 16px; flex-direction: column;">
  <!-- Basic Dummy -->
  <Dummy />

  <!-- Custom Size and Palette -->
  <Dummy size="lg" palette="blue" />

  <!-- Small Red Dummy -->
  <Dummy size="sm" palette="red" />
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Dummy is designed as a universal utility component for visual planning of interface structure.`}),`
`]})]})}function Qa(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Za,{...e})}):Za(e)}function $a(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Базовый компонент-заглушка (Dummy) для прототипирования и визуального тестирования интерфейсов. Позволяет быстро создавать блоки определенных размеров и цветов.`}),`
`,(0,$.jsx)(t.p,{children:`Dummy разработан как инструмент для разработчиков, помогающий структурировать интерфейсы до внедрения реальных компонентов.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Настройка размеров через свойство size`}),`
`,(0,$.jsx)(t.li,{children:`Установка цветовых схем через свойство palette`}),`
`,(0,$.jsx)(t.li,{children:`Использование в качестве заполнителя пространства в макетах`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Прототипирование сеток и макетов`}),`
`,(0,$.jsx)(t.li,{children:`Визуальное тестирование отступов и выравнивания`}),`
`,(0,$.jsx)(t.li,{children:`Заглушки для еще не реализованных компонентов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
<\/script>

<template>
<div class="dummy-examples" style="display: flex; gap: 16px; flex-direction: column;">
  <!-- Базовая заглушка -->
  <Dummy />

  <!-- Настройка размера и палитры -->
  <Dummy size="lg" palette="blue" />

  <!-- Маленькая красная заглушка -->
  <Dummy size="sm" palette="red" />
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Dummy разработан как универсальный вспомогательный компонент для визуального планирования структуры интерфейса.`}),`
`]})]})}function eo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($a,{...e})}):$a(e)}function to(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Base container for form controls that composes label, messages, counter, icons, and progress into a unified structure.`}),`
`,(0,$.jsx)(t.p,{children:`Field centralizes the visual representation management of input fields, handles focus and validation states, coordinates auxiliary element positioning, and provides a consistent API for building any type of inputs. It serves as the fundamental foundation for creating consistent forms with slot support, control icons, and subcomponent integration.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Core capabilities:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Subcomponent composition (FieldLabel, FieldMessage, FieldCounter, Progress)`}),`
`,(0,$.jsx)(t.li,{children:`State management (focus, disabled, readonly, selected, block)`}),`
`,(0,$.jsx)(t.li,{children:`Slot coordination (caption, prefix, suffix, leading, trailing)`}),`
`,(0,$.jsx)(t.li,{children:`Validation highlighting based on validationMessage and forceShowMessage`}),`
`,(0,$.jsx)(t.li,{children:`Control icons with customizable visibility (cancel, arrows)`}),`
`,(0,$.jsx)(t.li,{children:`Flexible counter positioning via counterTop`}),`
`,(0,$.jsx)(t.li,{children:`Built-in helpers for sizing and icons (FieldSize, FieldIcons)`}),`
`,(0,$.jsx)(t.li,{children:`Loading progress integration and skeleton state`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Base container for Input, Select, Textarea, and other form controls`}),`
`,(0,$.jsx)(t.li,{children:`Building custom form components with unified styling`}),`
`,(0,$.jsx)(t.li,{children:`Creating fields with validation and character counters`}),`
`,(0,$.jsx)(t.li,{children:`Developing component libraries with consistent UI`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { Field } from '@dxtmisha/constructor'

const value = ref('')

// Field provides structure and management
<\/script>

<template>
<Field
  label="Username"
  helper-message="Enter your name"
  :counter="value.length"
  counter-max="50"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      v-model="value"
      maxlength="50"
    />
  </template>
</Field>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Field is a constructor container: it does not handle data input directly, but organizes structure, classes, and auxiliary element display for any type of input fields.`}),`
`]})]})}function no(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(to,{...e})}):to(e)}function ro(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Базовый контейнер для полей формы, который композирует метку, сообщения, счётчик, иконки и прогресс в единую структуру.`}),`
`,(0,$.jsx)(t.p,{children:`Field централизует управление визуальным представлением полей ввода, обрабатывает состояния фокуса и валидации, координирует расположение вспомогательных элементов и предоставляет согласованный API для построения любых типов инпутов. Является фундаментальной основой для создания консистентных форм с поддержкой слотов, иконок управления и интеграцией подкомпонентов.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Композиция подкомпонентов (FieldLabel, FieldMessage, FieldCounter, Progress)`}),`
`,(0,$.jsx)(t.li,{children:`Управление состояниями (focus, disabled, readonly, selected, block)`}),`
`,(0,$.jsx)(t.li,{children:`Координация слотов (caption, prefix, suffix, leading, trailing)`}),`
`,(0,$.jsx)(t.li,{children:`Подсветка валидации на основе validationMessage и forceShowMessage`}),`
`,(0,$.jsx)(t.li,{children:`Иконки управления с настраиваемой видимостью (cancel, arrows)`}),`
`,(0,$.jsx)(t.li,{children:`Гибкое позиционирование счётчика через counterTop`}),`
`,(0,$.jsx)(t.li,{children:`Встроенные помощники для размеров и иконок (FieldSize, FieldIcons)`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция прогресса загрузки и скелетон-состояния`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Базовый контейнер для Input, Select, Textarea и других полей ввода`}),`
`,(0,$.jsx)(t.li,{children:`Построение кастомных компонентов форм с единым стилем`}),`
`,(0,$.jsx)(t.li,{children:`Создание полей с валидацией и счётчиками символов`}),`
`,(0,$.jsx)(t.li,{children:`Разработка библиотек компонентов с консистентным UI`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { Field } from '@dxtmisha/constructor'

const value = ref('')

// Field предоставляет структуру и управление
<\/script>

<template>
<Field
  label="Имя пользователя"
  helper-message="Введите ваше имя"
  :counter="value.length"
  counter-max="50"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      v-model="value"
      maxlength="50"
    />
  </template>
</Field>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Field — это контейнер-конструктор: он не обрабатывает ввод данных напрямую, а организует структуру, классы и отображение вспомогательных элементов для любых типов полей ввода.`}),`
`]})]})}function io(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ro,{...e})}):ro(e)}function ao(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Clear button`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`cancel`}),` and `,(0,$.jsx)(t.code,{children:`cancelShow`}),` are designed to control the display of the field clear icon.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`cancel`}),` — clear button display mode (`,(0,$.jsx)(t.code,{children:`auto`}),` or `,(0,$.jsx)(t.code,{children:`always`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`cancelShow`}),` — conditional visibility flag, used only in `,(0,$.jsx)(t.code,{children:`auto`}),` mode`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: if `,(0,$.jsx)(t.code,{children:`cancel`}),` is set to `,(0,$.jsx)(t.code,{children:`auto`}),`, the clear icon is displayed only when the conditions `,(0,$.jsx)(t.code,{children:`cancelShow = true`}),` are met, the field is active (not `,(0,$.jsx)(t.code,{children:`disabled`}),`/`,(0,$.jsx)(t.code,{children:`readonly`}),`), and arrow mode (`,(0,$.jsx)(t.code,{children:`arrowCarousel`}),`/`,(0,$.jsx)(t.code,{children:`arrowStepper`}),`) is not enabled. When `,(0,$.jsx)(t.code,{children:`cancel = always`}),`, the icon is displayed forcibly (except for `,(0,$.jsx)(t.code,{children:`disabled`}),`/`,(0,$.jsx)(t.code,{children:`readonly`}),` or active arrows), the `,(0,$.jsx)(t.code,{children:`cancelShow`}),` value is ignored. Arrow modes take priority over the clear button — when navigation is active, cancel is hidden regardless of settings.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref, computed } from 'vue'

const value = ref('')
const hasValue = computed(() => value.value.length > 0)
<\/script>

<template>
<!-- Automatic mode with condition -->
<Field
  label="Search"
  cancel="auto"
  :cancel-show="hasValue"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Forced display -->
<Field
  label="Filter"
  cancel="always"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- With event handler -->
<Field
  label="Input"
  cancel="auto"
  :cancel-show="hasValue"
  @click="value = ''"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function oo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ao,{...e})}):ao(e)}function so(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Кнопка очистки`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`cancel`}),` и `,(0,$.jsx)(t.code,{children:`cancelShow`}),` предназначены для управления отображением иконки очистки поля.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`cancel`}),` — режим отображения кнопки очистки (`,(0,$.jsx)(t.code,{children:`auto`}),` или `,(0,$.jsx)(t.code,{children:`always`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`cancelShow`}),` — условный флаг видимости, используется только в режиме `,(0,$.jsx)(t.code,{children:`auto`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,$.jsx)(t.code,{children:`cancel`}),` установлен в `,(0,$.jsx)(t.code,{children:`auto`}),`, иконка очистки отображается только при выполнении условий `,(0,$.jsx)(t.code,{children:`cancelShow = true`}),`, поле активно (не `,(0,$.jsx)(t.code,{children:`disabled`}),`/`,(0,$.jsx)(t.code,{children:`readonly`}),`) и не включён режим стрелок (`,(0,$.jsx)(t.code,{children:`arrowCarousel`}),`/`,(0,$.jsx)(t.code,{children:`arrowStepper`}),`). При `,(0,$.jsx)(t.code,{children:`cancel = always`}),` иконка отображается принудительно (кроме случаев `,(0,$.jsx)(t.code,{children:`disabled`}),`/`,(0,$.jsx)(t.code,{children:`readonly`}),` или активных стрелок), значение `,(0,$.jsx)(t.code,{children:`cancelShow`}),` игнорируется. Режимы стрелок имеют приоритет над кнопкой очистки — при активной навигации cancel скрывается независимо от настроек.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref, computed } from 'vue'

const value = ref('')
const hasValue = computed(() => value.value.length > 0)
<\/script>

<template>
<!-- Автоматический режим с условием -->
<Field
  label="Поиск"
  cancel="auto"
  :cancel-show="hasValue"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Принудительный показ -->
<Field
  label="Фильтр"
  cancel="always"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- С обработчиком события -->
<Field
  label="Ввод"
  cancel="auto"
  :cancel-show="hasValue"
  @click="value = ''"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function co(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(so,{...e})}):so(e)}function lo(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Navigation and arrows`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`arrowCarousel`}),`, `,(0,$.jsx)(t.code,{children:`arrowStepper`}),`, `,(0,$.jsx)(t.code,{children:`arrowAlign`}),`, `,(0,$.jsx)(t.code,{children:`disabledPrevious`}),`, and `,(0,$.jsx)(t.code,{children:`disabledNext`}),` are designed to control built-in navigation elements.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowCarousel`}),` — enables navigation arrows (left/right) for switching elements`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowStepper`}),` — enables numeric step buttons (minus/plus)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowAlign`}),` — controls horizontal position of navigation arrows (`,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`disabledPrevious`}),` — disables the left button (back/minus)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`disabledNext`}),` — disables the right button (forward/plus)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: only one arrow mode is active — if `,(0,$.jsx)(t.code,{children:`arrowCarousel = true`}),`, the `,(0,$.jsx)(t.code,{children:`arrowStepper`}),` mode is ignored and vice versa. When navigation mode is active, the clear button (`,(0,$.jsx)(t.code,{children:`cancel`}),`) is automatically hidden, as the control area takes priority. The `,(0,$.jsx)(t.code,{children:`disabledPrevious`}),` and `,(0,$.jsx)(t.code,{children:`disabledNext`}),` flags apply only to the currently active arrow mode.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const items = ['Item 1', 'Item 2', 'Item 3']
const count = ref(5)
<\/script>

<template>
<!-- Carousel with navigation -->
<Field
  label="Item"
  arrow-carousel
  :disabled-previous="currentIndex === 0"
  :disabled-next="currentIndex === items.length - 1"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="items[currentIndex]"
      readonly
    />
  </template>
</Field>

<!-- Numeric stepper -->
<Field
  label="Quantity"
  arrow-stepper
  :disabled-previous="count <= 0"
  :disabled-next="count >= 99"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Stepper with left-aligned arrows -->
<Field
  label="Value"
  arrow-stepper
  arrow-align="left"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Stepper with centered arrows -->
<Field
  label="Value"
  arrow-stepper
  arrow-align="center"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>
</template>
`,language:`html`})]})}function uo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(lo,{...e})}):lo(e)}function fo(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Навигация и стрелки`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`arrowCarousel`}),`, `,(0,$.jsx)(t.code,{children:`arrowStepper`}),`, `,(0,$.jsx)(t.code,{children:`arrowAlign`}),`, `,(0,$.jsx)(t.code,{children:`disabledPrevious`}),` и `,(0,$.jsx)(t.code,{children:`disabledNext`}),` предназначены для управления встроенными элементами навигации.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowCarousel`}),` — включает стрелки навигации (влево/вправо) для переключения элементов`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowStepper`}),` — включает числовые шаговые кнопки (минус/плюс)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowAlign`}),` — управляет горизонтальным расположением стрелок навигации (`,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`disabledPrevious`}),` — отключает левую кнопку (назад/минус)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`disabledNext`}),` — отключает правую кнопку (вперёд/плюс)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: активен только один режим стрелок — если `,(0,$.jsx)(t.code,{children:`arrowCarousel = true`}),`, режим `,(0,$.jsx)(t.code,{children:`arrowStepper`}),` игнорируется и наоборот. При активном режиме навигации кнопка очистки (`,(0,$.jsx)(t.code,{children:`cancel`}),`) автоматически скрывается, так как область управления имеет приоритет. Флаги `,(0,$.jsx)(t.code,{children:`disabledPrevious`}),` и `,(0,$.jsx)(t.code,{children:`disabledNext`}),` применяются только к текущему активному режиму стрелок.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const items = ['Item 1', 'Item 2', 'Item 3']
const count = ref(5)
<\/script>

<template>
<!-- Карусель с навигацией -->
<Field
  label="Элемент"
  arrow-carousel
  :disabled-previous="currentIndex === 0"
  :disabled-next="currentIndex === items.length - 1"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="items[currentIndex]"
      readonly
    />
  </template>
</Field>

<!-- Числовой степпер -->
<Field
  label="Количество"
  arrow-stepper
  :disabled-previous="count <= 0"
  :disabled-next="count >= 99"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Степпер со стрелками слева -->
<Field
  label="Значение"
  arrow-stepper
  arrow-align="left"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Степпер с центрированными стрелками -->
<Field
  label="Значение"
  arrow-stepper
  arrow-align="center"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>
</template>
`,language:`html`})]})}function po(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(fo,{...e})}):fo(e)}function mo(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Value state`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`value`}),` and `,(0,$.jsx)(t.code,{children:`isValue`}),` are designed to control the visual filled state of the field independently of the actual content.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — actual field content (string/number) passed to the inner element via slot`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isValue`}),` — forcibly activates the visual "filled" state even when the value is empty`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`Field`}),` reads `,(0,$.jsx)(t.code,{children:`value`}),` reactively through `,(0,$.jsx)(t.code,{children:`focusValue`}),` for visual purposes (displaying text in scoreboard, caption handling), but does not manage it directly or validate it. If the real value is non-empty, the field automatically receives the visual "filled" state regardless of `,(0,$.jsx)(t.code,{children:`isValue`}),`. When the value is empty, the `,(0,$.jsx)(t.code,{children:`isValue = true`}),` flag forcibly activates the visual filled mode (floating label, corresponding classes), which is useful for preloads, masks, or delayed data insertion.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
const isLoading = ref(true)
<\/script>

<template>
<!-- Normal behavior -->
<Field label="Name">
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Forced "filled" state -->
<Field
  label="Email"
  :value="value"
  :is-value="true"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Preload with visual state -->
<Field
  label="Data"
  :is-value="isLoading"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function ho(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(mo,{...e})}):mo(e)}function go(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Состояние значения`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`value`}),` и `,(0,$.jsx)(t.code,{children:`isValue`}),` предназначены для управления визуальным состоянием заполненности поля независимо от фактического содержимого.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — фактическое содержимое поля (строка/число), передаваемое во внутренний элемент через слот`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isValue`}),` — принудительно активирует визуальное состояние "заполнено" даже при пустом значении`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`Field`}),` считывает `,(0,$.jsx)(t.code,{children:`value`}),` реактивно через `,(0,$.jsx)(t.code,{children:`focusValue`}),` для визуальных целей (отображение текста в scoreboard, работа с caption), но не управляет им напрямую и не валидирует. Если реальное значение непустое, поле автоматически получает визуальное состояние "заполнено" независимо от `,(0,$.jsx)(t.code,{children:`isValue`}),`. При пустом значении флаг `,(0,$.jsx)(t.code,{children:`isValue = true`}),` принудительно активирует визуальный режим заполненности (плавающая метка, соответствующие классы), что полезно для прелоадов, масок или отложенной подстановки данных.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
const isLoading = ref(true)
<\/script>

<template>
<!-- Обычное поведение -->
<Field label="Имя">
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Принудительное состояние "заполнено" -->
<Field
  label="Email"
  :value="value"
  :is-value="true"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Прелоад с визуальным состоянием -->
<Field
  label="Данные"
  :is-value="isLoading"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function _o(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(go,{...e})}):go(e)}function vo(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Field width`}),`
`,(0,$.jsxs)(t.p,{children:[`Property `,(0,$.jsx)(t.code,{children:`width`}),` defines the horizontal size of the Field container.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`any valid CSS value (`,(0,$.jsx)(t.code,{children:`'320px'`}),`, `,(0,$.jsx)(t.code,{children:`'48rem'`}),`, `,(0,$.jsx)(t.code,{children:`'50%'`}),`, `,(0,$.jsx)(t.code,{children:`'min(100%,320px)'`}),`, `,(0,$.jsx)(t.code,{children:`'clamp(240px,40vw,480px)'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`design system tokens (e.g., `,(0,$.jsx)(t.code,{children:`'sm'`}),`, `,(0,$.jsx)(t.code,{children:`'md'`}),`, `,(0,$.jsx)(t.code,{children:`'lg'`}),` if supported)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'custom'`}),` — internal technical marker (not used directly)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Controls the fixed or relative width of the field, applying the value directly without additional wrappers. When the property is not set, the width remains flexible and depends on the parent container. When the `,(0,$.jsx)(t.code,{children:`block`}),` property is active (set to `,(0,$.jsx)(t.code,{children:`true`}),`), the field takes 100% width regardless of the specified `,(0,$.jsx)(t.code,{children:`width`}),` value, with block mode taking priority.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Automatic width -->
<Field label="auto" />

<!-- Fixed width -->
<Field width="320px" label="320px" />

<!-- Relative width -->
<Field width="50%" label="50%" />

<!-- CSS functions -->
<Field width="min(100%, 320px)" label="min(...)" />
<Field width="clamp(240px, 40vw, 480px)" label="clamp(...)" />
`,language:`html`})]})}function yo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vo,{...e})}):vo(e)}function bo(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Ширина поля`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`width`}),` определяет горизонтальный размер контейнера Field.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`любое валидное CSS-значение (`,(0,$.jsx)(t.code,{children:`'320px'`}),`, `,(0,$.jsx)(t.code,{children:`'48rem'`}),`, `,(0,$.jsx)(t.code,{children:`'50%'`}),`, `,(0,$.jsx)(t.code,{children:`'min(100%,320px)'`}),`, `,(0,$.jsx)(t.code,{children:`'clamp(240px,40vw,480px)'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`дизайн-токены системы (например, `,(0,$.jsx)(t.code,{children:`'sm'`}),`, `,(0,$.jsx)(t.code,{children:`'md'`}),`, `,(0,$.jsx)(t.code,{children:`'lg'`}),` при поддержке)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'custom'`}),` — внутренняя техническая метка (не используется напрямую)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Контролирует фиксированную или относительную ширину поля, применяя значение напрямую без дополнительных обёрток. При отсутствии свойства ширина остаётся гибкой и зависит от родительского контейнера. При активном свойстве `,(0,$.jsx)(t.code,{children:`block`}),` (установлено в `,(0,$.jsx)(t.code,{children:`true`}),`) поле занимает 100% ширины независимо от заданного значения `,(0,$.jsx)(t.code,{children:`width`}),`, приоритет имеет блочный режим.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Автоматическая ширина -->
<Field label="auto" />

<!-- Фиксированная ширина -->
<Field width="320px" label="320px" />

<!-- Относительная ширина -->
<Field width="50%" label="50%" />

<!-- CSS-функции -->
<Field width="min(100%, 320px)" label="min(...)" />
<Field width="clamp(240px, 40vw, 480px)" label="clamp(...)" />
`,language:`html`})]})}function xo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bo,{...e})}):bo(e)}function So(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default(props: FieldControl): any`}),` — Default slot for the main input element.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`leading(props: FieldControl): any`}),` — Slot for displaying content before the input area.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing(props: FieldControl): any`}),` — Slot for displaying content after the input area.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`FieldControl:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — unique identifier for binding label and input.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`className: string`}),` — CSS classes for the visible input area.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classHidden: string`}),` — CSS classes for the hidden native input element.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classForFocus: string`}),` — CSS classes applied when the field is focused.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: Record<string, any>`}),` — properties bound to the input element.`]}),`
`]}),`
`]})]})}function Co(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(So,{...e})}):So(e)}function wo(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default(props: FieldControl): any`}),` — Слот по умолчанию для основного элемента ввода (input, select, textarea).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`leading(props: FieldControl): any`}),` — Слот для отображения контента перед областью ввода.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing(props: FieldControl): any`}),` — Слот для отображения контента после области ввода.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`FieldControl:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — уникальный идентификатор элемента для связывания label и input.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`className: string`}),` — CSS-классы для видимой зоны ввода.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classHidden: string`}),` — CSS-классы для скрытого нативного элемента ввода.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classForFocus: string`}),` — CSS-классы, применяемые при фокусировке на поле.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: Record<string, any>`}),` — свойства, привязанные к элементу ввода.`]}),`
`]}),`
`]})]})}function To(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(wo,{...e})}):wo(e)}function Eo(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for displaying character count and input limits in form fields with customizable formatting templates.`}),`
`,(0,$.jsx)(t.p,{children:`FieldCounter provides visual feedback about the number of entered characters, automatically formats display depending on the presence of a maximum limit, and supports flexible customization through templates with placeholders. The component integrates with text fields and text areas, providing users with information about restrictions and remaining input space.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Display current number of entered characters`}),`
`,(0,$.jsx)(t.li,{children:`Automatic maximum limit display when present`}),`
`,(0,$.jsx)(t.li,{children:`Flexible formatting templates with [c] and [m] placeholders`}),`
`,(0,$.jsx)(t.li,{children:`Automatic format detection (50 / 100 or just 50)`}),`
`,(0,$.jsx)(t.li,{children:`Support for string and numeric counter and maxlength values`}),`
`,(0,$.jsx)(t.li,{children:`Smart visibility management via counterShow property`}),`
`,(0,$.jsx)(t.li,{children:`Compact display for space efficiency`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Text fields with character count limits`}),`
`,(0,$.jsx)(t.li,{children:`Multi-line text areas (textarea) for descriptions`}),`
`,(0,$.jsx)(t.li,{children:`Comment input fields with limits`}),`
`,(0,$.jsx)(t.li,{children:`Forms with minimum/maximum length requirements`}),`
`,(0,$.jsx)(t.li,{children:`SMS editors with character counting`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Basic counter -->
<Component :counter="10" />

<!-- With limit -->
<Component :counter="10" :maxlength="100" />

<!-- Custom template -->
<Component :counter="5" :maxlength="50" template="[c] of [m]" />
</template>
`,language:`html`})]})}function Do(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Eo,{...e})}):Eo(e)}function Oo(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для отображения счетчика символов и лимитов ввода в полях форм с поддержкой настраиваемых шаблонов форматирования.`}),`
`,(0,$.jsx)(t.p,{children:`FieldCounter обеспечивает визуальную обратную связь о количестве введенных символов, автоматически форматирует отображение в зависимости от наличия максимального лимита и поддерживает гибкую настройку через шаблоны с плейсхолдерами. Компонент интегрируется с текстовыми полями и областями ввода, предоставляя пользователю информацию об ограничениях и оставшемся месте для ввода.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение текущего количества введенных символов`}),`
`,(0,$.jsx)(t.li,{children:`Автоматический показ максимального лимита при его наличии`}),`
`,(0,$.jsx)(t.li,{children:`Гибкие шаблоны форматирования с плейсхолдерами [c] и [m]`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое определение формата (50 / 100 или просто 50)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка строковых и числовых значений counter и maxlength`}),`
`,(0,$.jsx)(t.li,{children:`Умное управление видимостью через свойство counterShow`}),`
`,(0,$.jsx)(t.li,{children:`Компактное отображение для экономии пространства`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Текстовые поля с ограничением по количеству символов`}),`
`,(0,$.jsx)(t.li,{children:`Многострочные текстовые области (textarea) для описаний`}),`
`,(0,$.jsx)(t.li,{children:`Поля ввода комментариев с лимитами`}),`
`,(0,$.jsx)(t.li,{children:`Формы с требованиями к минимальной/максимальной длине`}),`
`,(0,$.jsx)(t.li,{children:`SMS-редакторы с подсчетом символов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Базовый счетчик -->
<Component :counter="10" />

<!-- С лимитом -->
<Component :counter="10" :maxlength="100" />

<!-- Кастомный шаблон -->
<Component :counter="5" :maxlength="50" template="[c] / [m]" />
</template>
`,language:`html`})]})}function ko(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Oo,{...e})}):Oo(e)}function Ao(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Custom Display Templates`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`template`}),` property allows you to customize the counter display format using placeholders.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Available placeholders:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[c]`}),` — current number of entered characters`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[m]`}),` — maximum character limit`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Uses string interpolation to replace placeholders with actual counter values. Supports HTML markup inside the template for customizing styles of individual parts. When no template is provided, the component automatically determines the format: displays "50 / 100" when `,(0,$.jsx)(t.code,{children:`maxlength`}),` is present or just "50" when it's absent.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Descriptive format -->
<FieldCounter
:counter="75"
:maxlength="150"
template="Characters: [c] of [m]"
/>

<!-- Compact format -->
<FieldCounter
:counter="42"
:maxlength="100"
template="[c]/[m]"
/>

<!-- With HTML for styling -->
<FieldCounter
:counter="75"
:maxlength="150"
template="<b>[c]</b> of <i>[m]</i> characters"
/>

<!-- Current counter only with text -->
<FieldCounter
:counter="42"
template="Characters entered: [c]"
/>
`,language:`html`})]})}function jo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ao,{...e})}):Ao(e)}function Mo(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Настраиваемые шаблоны отображения`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`template`}),` позволяет настроить формат отображения счетчика символов с использованием плейсхолдеров.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Доступные плейсхолдеры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[c]`}),` — текущее количество введенных символов`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[m]`}),` — максимальный лимит символов`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Использует строковую интерполяцию для замены плейсхолдеров на актуальные значения счетчика. Поддерживает HTML-разметку внутри шаблона для кастомизации стилей отдельных частей. При отсутствии шаблона компонент автоматически определяет формат: отображает "50 / 100" при наличии `,(0,$.jsx)(t.code,{children:`maxlength`}),` или просто "50" при его отсутствии.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Описательный формат -->
<FieldCounter
:counter="75"
:maxlength="150"
template="Символов: [c] из [m]"
/>

<!-- Компактный формат -->
<FieldCounter
:counter="42"
:maxlength="100"
template="[c]/[m]"
/>

<!-- С HTML для стилизации -->
<FieldCounter
:counter="75"
:maxlength="150"
template="<b>[c]</b> из <i>[m]</i> символов"
/>

<!-- Только текущий счетчик с текстом -->
<FieldCounter
:counter="42"
template="Введено символов: [c]"
/>
`,language:`html`})]})}function No(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Mo,{...e})}):Mo(e)}function Po(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for displaying input field labels with support for required indicator, character counter, and progress indicator.`}),`
`,(0,$.jsx)(t.p,{children:`FieldLabel provides uniform display of form field captions, automatically integrates with FieldCounter for character counting and Progress for loading indication. The component supports skeleton loading, customizable slots, and ensures consistent visual styling of form elements.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Text label display for input fields`}),`
`,(0,$.jsx)(t.li,{children:`Required field indicator (required marker)`}),`
`,(0,$.jsx)(t.li,{children:`FieldCounter integration for character counting`}),`
`,(0,$.jsx)(t.li,{children:`Built-in Progress indicator support`}),`
`,(0,$.jsx)(t.li,{children:`Skeleton loading support for pending states`}),`
`,(0,$.jsx)(t.li,{children:`Flexible customization via slots (leading, trailing)`}),`
`,(0,$.jsx)(t.li,{children:`Consistent spacing and styles within forms`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Labels for text fields and textareas`}),`
`,(0,$.jsx)(t.li,{children:`Forms with required fields`}),`
`,(0,$.jsx)(t.li,{children:`Fields with character count limits`}),`
`,(0,$.jsx)(t.li,{children:`Forms with file upload progress indication`}),`
`,(0,$.jsx)(t.li,{children:`Dynamic forms with skeleton loading`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Basic label -->
<Component label="Username" />

<!-- Required field label -->
<Component label="Email" required />

<!-- With progress and counter -->
<Component
  label="Loading"
  :progress="45"
  :counter="10"
  :maxlength="100"
/>
</template>
`,language:`html`})]})}function Fo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Po,{...e})}):Po(e)}function Io(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для отображения меток полей ввода с поддержкой индикатора обязательности, счетчика символов и прогресс-индикатора.`}),`
`,(0,$.jsx)(t.p,{children:`FieldLabel предоставляет единообразное отображение подписей к полям форм, автоматически интегрируется с FieldCounter для подсчета символов и Progress для индикации загрузки. Компонент поддерживает скелетон-загрузку, настраиваемые слоты и обеспечивает согласованное визуальное оформление элементов формы.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение текстовой метки для полей ввода`}),`
`,(0,$.jsx)(t.li,{children:`Индикатор обязательности поля (required marker)`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция со счетчиком символов FieldCounter`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная поддержка прогресс-индикатора Progress`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка скелетон-загрузки для состояния ожидания`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая настройка через слоты (leading, trailing)`}),`
`,(0,$.jsx)(t.li,{children:`Единообразные отступы и стили в составе форм`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Подписи к текстовым полям и textarea`}),`
`,(0,$.jsx)(t.li,{children:`Формы с обязательными полями`}),`
`,(0,$.jsx)(t.li,{children:`Поля с ограничением количества символов`}),`
`,(0,$.jsx)(t.li,{children:`Формы с индикацией процесса загрузки файлов`}),`
`,(0,$.jsx)(t.li,{children:`Динамические формы со скелетон-загрузкой`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Базовая метка -->
<Component label="Username" />

<!-- Обязательное поле -->
<Component label="Email" required />

<!-- С прогрессом и счетчиком -->
<Component
  label="Загрузка"
  :progress="45"
  :counter="10"
  :maxlength="100"
/>
</template>
`,language:`html`})]})}function Lo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Io,{...e})}):Io(e)}function Ro(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for displaying helper and validation messages below form fields.`}),`
`,(0,$.jsx)(t.p,{children:`FieldMessage centralizes management of text hints and error messages in forms. The component automatically determines display priority (validation errors take precedence over hints), supports forced display via forceShow, and integrates with input fields and character counters. It provides a flexible slot system for customization and works with both static and reactive values.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Two message types: helper and validation`}),`
`,(0,$.jsx)(t.li,{children:`Message priority — validation message overrides helper message`}),`
`,(0,$.jsx)(t.li,{children:`Smart visibility — automatic display logic based on provided values`}),`
`,(0,$.jsx)(t.li,{children:`Forced display via forceShow property`}),`
`,(0,$.jsx)(t.li,{children:`Flexible sources — support for static and reactive values`}),`
`,(0,$.jsx)(t.li,{children:`Integration with FieldCounter for complex forms`}),`
`,(0,$.jsx)(t.li,{children:`Customizable rendering through design system and slots`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Helper hints below input fields`}),`
`,(0,$.jsx)(t.li,{children:`Displaying validation errors in forms`}),`
`,(0,$.jsx)(t.li,{children:`Dynamic messages with reactive content`}),`
`,(0,$.jsx)(t.li,{children:`Complex forms with counters and validation`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Helper message -->
<Component helper="Enter your name" />

<!-- Validation message -->
<Component validation="Minimum 3 characters" />

<!-- Slots -->
<Component>
  <template #helper>💡 Hint</template>
  <template #validation>⚠️ Error</template>
</Component>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`The component focuses on text messages and should be used together with input control elements.`}),`
`]})]})}function zo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ro,{...e})}):Ro(e)}function Bo(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для отображения вспомогательных и валидационных сообщений под полями формы.`}),`
`,(0,$.jsx)(t.p,{children:`FieldMessage централизует управление текстовыми подсказками и сообщениями об ошибках в формах. Компонент автоматически определяет приоритет отображения (ошибки валидации выше подсказок), поддерживает принудительное показ через forceShow и интегрируется с полями ввода и счетчиками символов. Предоставляет гибкую систему слотов для кастомизации и работает как со статическими, так и с реактивными значениями.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Два типа сообщений: вспомогательное (helper) и валидационное (validation)`}),`
`,(0,$.jsx)(t.li,{children:`Приоритет сообщений — валидационное сообщение перекрывает вспомогательное`}),`
`,(0,$.jsx)(t.li,{children:`Умная видимость — автоматическая логика отображения на основе переданных значений`}),`
`,(0,$.jsx)(t.li,{children:`Принудительное отображение через свойство forceShow`}),`
`,(0,$.jsx)(t.li,{children:`Гибкие источники — поддержка статических и реактивных значений`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с FieldCounter для комплексных форм`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемый рендеринг через систему дизайна и слоты`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Вспомогательные подсказки под полями ввода`}),`
`,(0,$.jsx)(t.li,{children:`Отображение ошибок валидации в формах`}),`
`,(0,$.jsx)(t.li,{children:`Динамические сообщения с реактивным контентом`}),`
`,(0,$.jsx)(t.li,{children:`Комплексные формы с счетчиками и валидацией`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Подсказка -->
<Component helper="Введите ваше имя" />

<!-- Ошибка валидации -->
<Component validation="Минимум 3 символа" />

<!-- Слоты -->
<Component>
  <template #helper>💡 Подсказка</template>
  <template #validation>⚠️ Ошибка</template>
</Component>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Компонент фокусируется на текстовых сообщениях и должен использоваться совместно с элементами управления вводом.`}),`
`]})]})}function Vo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bo,{...e})}):Bo(e)}function Ho(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`helper(props: FieldMessageSlot): any`}),` — Slot for custom helper message content.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validation(props: FieldMessageSlot): any`}),` — Slot for custom validation message content.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`FieldMessageSlot:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`message: string`}),` — current message (helper or validation).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`helperMessage: string`}),` — helper message text.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validationMessage: string`}),` — validation message text.`]}),`
`]}),`
`]})]})}function Uo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ho,{...e})}):Ho(e)}function Wo(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`helper(props: FieldMessageSlot): any`}),` — Слот для пользовательского содержимого вспомогательного сообщения.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validation(props: FieldMessageSlot): any`}),` — Слот для пользовательского содержимого сообщения валидации.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`FieldMessageSlot:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`message: string`}),` — текущее сообщение (вспомогательное или валидация).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`helperMessage: string`}),` — текст вспомогательного сообщения.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`validationMessage: string`}),` — текст сообщения валидации.`]}),`
`]}),`
`]})]})}function Go(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Wo,{...e})}):Wo(e)}function Ko(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Layout component for creating grid structures with customizable columns.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Flexible grid system (defaults to 12 columns)`}),`
`,(0,$.jsx)(t.li,{children:`Gap customization`}),`
`,(0,$.jsx)(t.li,{children:`Responsive layout building`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
<\/script>

<template>
<Grid>
  <GridItem columnBase="6">Item 1</GridItem>
  <GridItem columnBase="6">Item 2</GridItem>
</Grid>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Grid is the foundation for creating aligned and structured layouts across different screen sizes.`}),`
`]})]})}function qo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ko,{...e})}):Ko(e)}function Jo(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компонент макета для создания сеточных структур с настраиваемыми колонками.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Гибкая сеточная система (по умолчанию 12 колонок)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка отступов между элементами`}),`
`,(0,$.jsx)(t.li,{children:`Создание адаптивных интерфейсов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
<\/script>

<template>
<Grid>
  <GridItem columnBase="6">Элемент 1</GridItem>
  <GridItem columnBase="6">Элемент 2</GridItem>
</Grid>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Grid является основой для создания упорядоченных и структурированных макетов для различных размеров экранов.`}),`
`]})]})}function Yo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Jo,{...e})}):Jo(e)}function Xo(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Individual item within a Grid component. Controls how many columns the element should take across different screen sizes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Customizable column span (1 to 12)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in responsive support for all major breakpoints`}),`
`,(0,$.jsx)(t.li,{children:`Granular control over layout density`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
<\/script>

<template>
<Grid>
  <!-- Full width on mobile, half on desktop -->
  <GridItem base="12" md="6">Item 1</GridItem>
  <GridItem base="12" md="6">Item 2</GridItem>

  <!-- Different spans for different screen sizes -->
  <GridItem base="12" sm="6" lg="3">Responsive item</GridItem>
</Grid>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`GridItem allows for granular control over element sizing within a Grid container, enabling complex responsive layouts with zero custom CSS.`}),`
`]})]})}function Zo(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xo,{...e})}):Xo(e)}function Qo(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Отдельный элемент внутри компонента Grid. Управляет тем, сколько колонок должен занимать элемент на различных размерах экрана.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Настраиваемый охват колонок (от 1 до 12)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная поддержка адаптивности для всех основных брейкпоинтов`}),`
`,(0,$.jsx)(t.li,{children:`Детальный контроль над плотностью макета`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
<\/script>

<template>
<Grid>
  <!-- Полная ширина на мобильных, половина на десктопе -->
  <GridItem base="12" md="6">Элемент 1</GridItem>
  <GridItem base="12" md="6">Элемент 2</GridItem>

  <!-- Различный охват для разных размеров экрана -->
  <GridItem base="12" sm="6" lg="3">Адаптивный элемент</GridItem>
</Grid>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`GridItem обеспечивает детальный контроль над размером элементов внутри контейнера Grid, позволяя создавать сложные адаптивные макеты без написания дополнительного CSS.`}),`
`]})]})}function $o(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Qo,{...e})}):Qo(e)}function es(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It is a semantic alias for the Block component, with a default header level of h4.`}),`
`,(0,$.jsx)(t.p,{children:`Group provides a standardized way to organize information within a page or another component, ensuring a consistent visual hierarchy. It inherits all the capabilities of the Block component, including support for icons, captions, and slot-based customization.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Standardized grouping of content using `,(0,$.jsx)(t.code,{children:`<div>`}),` tag`]}),`
`,(0,$.jsxs)(t.li,{children:[`Support for titles (`,(0,$.jsx)(t.code,{children:`h4`}),` by default), labels, descriptions, and captions`]}),`
`,(0,$.jsx)(t.li,{children:`Icon support`}),`
`,(0,$.jsx)(t.li,{children:`Fully inherits Block component capabilities`}),`
`,(0,$.jsx)(t.li,{children:`Flexible layout for content organization`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Subsections within a page`}),`
`,(0,$.jsx)(t.li,{children:`Grouping elements within a card or modal`}),`
`,(0,$.jsx)(t.li,{children:`Organizing complex forms into thematic areas`}),`
`,(0,$.jsx)(t.li,{children:`Creating structured content blocks with smaller headers`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Group
  headline="Group Headline"
  label="Group Label"
  description="Detailed description for the group content"
  caption="Auxiliary text"
  icon="folder"
>
  Main group content goes here
</Group>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Group is an ideal choice for creating semantic sub-structures within your application.`}),`
`]})]})}function ts(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(es,{...e})}):es(e)}function ns(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. Это семантический псевдоним компонента Block с уровнем заголовка h4 по умолчанию.`}),`
`,(0,$.jsx)(t.p,{children:`Group обеспечивает стандартизированный способ организации информации внутри страницы или другого компонента, гарантируя согласованную визуальную иерархию. Он наследует все возможности компонента Block, включая поддержку иконок, подписей и кастомизацию на основе слотов.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Стандартизированная группировка контента с использованием тега `,(0,$.jsx)(t.code,{children:`<div>`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка заголовков (`,(0,$.jsx)(t.code,{children:`h4`}),` по умолчанию), меток, описаний и подписей`]}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,$.jsx)(t.li,{children:`Полностью наследует возможности компонента Block`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая компоновка для организации контента`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Подразделы внутри страницы`}),`
`,(0,$.jsx)(t.li,{children:`Группировка элементов внутри карточки или модального окна`}),`
`,(0,$.jsx)(t.li,{children:`Организация сложных форм в тематические области`}),`
`,(0,$.jsx)(t.li,{children:`Создание структурированных блоков контента с заголовками меньшего уровня`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Group
  headline="Заголовок группы"
  label="Метка группы"
  description="Подробное описание для содержимого группы"
  caption="Вспомогательный текст"
  icon="folder"
>
  Основной контент группы располагается здесь
</Group>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Group является идеальным выбором для создания семантических подструктур в вашем приложении.`}),`
`]})]})}function rs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ns,{...e})}):ns(e)}function is(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toSelected(): void`}),` — A method for programmatically scrolling the container to the selected element.`]}),`
`]})}function as(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(is,{...e})}):is(e)}function os(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toSelected(): void`}),` — Метод для программной прокрутки контейнера к выбранному элементу.`]}),`
`]})}function ss(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(os,{...e})}):os(e)}function cs(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating a horizontally scrollable container with support for smooth scrolling and automatic positioning.`}),`
`,(0,$.jsx)(t.p,{children:`HorizontalScroll provides a convenient way to display content that exceeds the screen width, such as image galleries, card lists, or navigation menus. The component supports automatic scrolling to the selected element upon initialization and provides methods for programmatic scroll control.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Horizontal content scrolling`}),`
`,(0,$.jsx)(t.li,{children:`Smooth scrolling`}),`
`,(0,$.jsx)(t.li,{children:`Automatic scrolling to the active element on load`}),`
`,(0,$.jsx)(t.li,{children:`Support for custom container tags`}),`
`,(0,$.jsx)(t.li,{children:`Slot with bindings (binds) for child elements`}),`
`,(0,$.jsx)(t.li,{children:`Scrollbar visibility control (flush mode)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Image and media galleries`}),`
`,(0,$.jsx)(t.li,{children:`Horizontal product card lists`}),`
`,(0,$.jsx)(t.li,{children:`Scrollable navigation menus (tabs)`}),`
`,(0,$.jsx)(t.li,{children:`Tag or category lists`}),`
`,(0,$.jsx)(t.li,{children:`Timelines and step sequences`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ id: 1, title: 'Item 1' },
{ id: 2, title: 'Item 2' },
{ id: 3, title: 'Item 3' },
{ id: 4, title: 'Item 4' },
{ id: 5, title: 'Item 5' }
])
<\/script>

<template>
<HorizontalScroll>
  <template #default="{ binds }">
    <div
      v-for="item in items"
      :key="item.id"
      v-bind="binds"
      class="scroll-item"
    >
      {{ item.title }}
    </div>
  </template>
</HorizontalScroll>
</template>

<style scoped>
.scroll-item {
min-width: 150px;
height: 100px;
margin-right: 16px;
background: #f5f5f5;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
}
</style>
`,language:`html`})]})}function ls(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(cs,{...e})}):cs(e)}function us(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания горизонтально прокручиваемого контейнера с поддержкой плавного скролла и автоматического позиционирования.`}),`
`,(0,$.jsx)(t.p,{children:`HorizontalScroll предоставляет удобный способ отображения контента, который не помещается по ширине экрана, например, галерей изображений, списков карточек или навигационных меню. Компонент поддерживает автоматическую прокрутку к выбранному элементу при инициализации и предоставляет методы для программного управления скроллом.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Горизонтальная прокрутка контента`}),`
`,(0,$.jsx)(t.li,{children:`Плавный скролл (smooth scrolling)`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическая прокрутка к активному элементу при загрузке`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка пользовательских тегов для контейнера`}),`
`,(0,$.jsx)(t.li,{children:`Слот с передачей привязок (binds) для дочерних элементов`}),`
`,(0,$.jsx)(t.li,{children:`Управление видимостью скроллбара (flush режим)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Галереи изображений и медиа-контента`}),`
`,(0,$.jsx)(t.li,{children:`Горизонтальные списки карточек товаров`}),`
`,(0,$.jsx)(t.li,{children:`Навигационные меню с прокруткой (табы)`}),`
`,(0,$.jsx)(t.li,{children:`Списки тегов или категорий`}),`
`,(0,$.jsx)(t.li,{children:`Таймлайны и последовательности шагов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ id: 1, title: 'Элемент 1' },
{ id: 2, title: 'Элемент 2' },
{ id: 3, title: 'Элемент 3' },
{ id: 4, title: 'Элемент 4' },
{ id: 5, title: 'Элемент 5' }
])
<\/script>

<template>
<HorizontalScroll>
  <template #default="{ binds }">
    <div
      v-for="item in items"
      :key="item.id"
      v-bind="binds"
      class="scroll-item"
    >
      {{ item.title }}
    </div>
  </template>
</HorizontalScroll>
</template>

<style scoped>
.scroll-item {
min-width: 150px;
height: 100px;
margin-right: 16px;
background: #f5f5f5;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
}
</style>
`,language:`html`})]})}function ds(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(us,{...e})}):us(e)}function fs(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Selected Element`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`selected`}),` property allows you to control the visual state of the component, indicating that it is in a selected or active state.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected`}),` — a boolean value determining whether the element is selected`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`When the `,(0,$.jsx)(t.code,{children:`selected`}),` property is set to `,(0,$.jsx)(t.code,{children:`true`}),`, a special class (usually `,(0,$.jsx)(t.code,{children:`--selected`}),`) is added to the component, which changes its appearance (e.g., background color, border, or text) to highlight it among other elements. This is useful for implementing selection lists, active input fields, or other interactive elements where it is necessary to visually indicate the user's current choice.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isSelected = ref(true)
<\/script>

<template>
<!-- Selected state -->
<Textarea
  v-model="value"
  :selected="isSelected"
  label="Active field"
/>

<!-- Normal state -->
<Textarea
  v-model="value2"
  :selected="false"
  label="Normal field"
/>
</template>
`,language:`html`})]})}function ps(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(fs,{...e})}):fs(e)}function ms(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Выбранный элемент`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`selected`}),` позволяет управлять визуальным состоянием компонента, указывая, что он находится в выбранном или активном состоянии.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected`}),` — булево значение, определяющее, выбран ли элемент`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Когда свойство `,(0,$.jsx)(t.code,{children:`selected`}),` установлено в `,(0,$.jsx)(t.code,{children:`true`}),`, к компоненту добавляется специальный класс (обычно `,(0,$.jsx)(t.code,{children:`--selected`}),`), который изменяет его внешний вид (например, цвет фона, границы или текста), чтобы выделить его среди других элементов. Это полезно для реализации списков выбора, активных полей ввода или других интерактивных элементов, где необходимо визуально обозначить текущий выбор пользователя.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isSelected = ref(true)
<\/script>

<template>
<!-- Выбранное состояние -->
<Textarea
  v-model="value"
  :selected="isSelected"
  label="Активное поле"
/>

<!-- Обычное состояние -->
<Textarea
  v-model="value2"
  :selected="false"
  label="Обычное поле"
/>
</template>
`,language:`html`})]})}function hs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ms,{...e})}):ms(e)}function gs(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A component for displaying headers with integrated support for icons and captions.`}),`
`,(0,$.jsx)(t.p,{children:`Header provides flexible control over the HTML tag (h1-h6, div), which is essential for maintaining document hierarchy. The component supports automatic area management (area) and provides a slot for customizing content on the right side.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Display of title (label), caption, and icon`}),`
`,(0,$.jsx)(t.li,{children:`HTML tag configuration (h1, h2, h3, h4, h5, h6, div, etc.)`}),`
`,(0,$.jsx)(t.li,{children:`Automatic area value management via AreaInclude`}),`
`,(0,$.jsx)(t.li,{children:`Support for trailing slot for additional content`}),`
`,(0,$.jsx)(t.li,{children:`Standardized typography and spacing`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Section and page headings`}),`
`,(0,$.jsx)(t.li,{children:`Grouping content with explanatory captions`}),`
`,(0,$.jsx)(t.li,{children:`Navigational headers with icons`}),`
`,(0,$.jsx)(t.li,{children:`Card and block headers`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Header
  label="Page Title"
  caption="Additional information or section description"
  icon="description"
  tag="h1"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Header is a key component for organizing text hierarchy and visually highlighting interface sections.`}),`
`]})]})}function _s(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(gs,{...e})}):gs(e)}function vs(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компонент для отображения заголовков с интегрированной поддержкой иконок и подписей.`}),`
`,(0,$.jsx)(t.p,{children:`Header позволяет гибко управлять HTML-тегом (h1-h6, div), что важно для соблюдения иерархии документа. Компонент поддерживает автоматическое управление областями (area) и предоставляет слот для кастомизации контента в правой части.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение заголовка (label), подписи (caption) и иконки`}),`
`,(0,$.jsx)(t.li,{children:`Настройка HTML-тега (h1, h2, h3, h4, h5, h6, div и др.)`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое управление значением области через AreaInclude`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слота trailing для дополнительного контента`}),`
`,(0,$.jsx)(t.li,{children:`Стандартизированная типографика и отступы`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Заголовки разделов и страниц`}),`
`,(0,$.jsx)(t.li,{children:`Группировка контента с поясняющими подписями`}),`
`,(0,$.jsx)(t.li,{children:`Навигационные заголовки с иконками`}),`
`,(0,$.jsx)(t.li,{children:`Шапки карточек и блоков`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Header
  label="Заголовок страницы"
  caption="Дополнительная информация или описание раздела"
  icon="description"
  tag="h1"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Header является ключевым компонентом для организации текстовой иерархии и визуального выделения разделов интерфейса.`}),`
`]})]})}function ys(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vs,{...e})}):vs(e)}function bs(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Icon State Management`}),`
`,(0,$.jsx)(t.p,{children:`A component for displaying icons with support for active state, rotation, loading, and skeleton integration.`}),`
`,(0,$.jsx)(t.p,{children:`Icon provides a unified interface for working with icons in the design system, supporting both the main icon and an alternative for the active state. The component automatically manages switching between icons, handles loading events, and integrates with the skeleton system to display loading states.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Display of main and active icons with smooth transitions`}),`
`,(0,$.jsx)(t.li,{children:`Icon rotation at a specified angle`}),`
`,(0,$.jsx)(t.li,{children:`Disabled and hide states for visibility control`}),`
`,(0,$.jsx)(t.li,{children:`Image loading events for icons`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Skeleton for loading states`}),`
`,(0,$.jsx)(t.li,{children:`Support within other components (Button, Cell, Chip, Field)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Icons in buttons and navigation elements`}),`
`,(0,$.jsx)(t.li,{children:`Interactive icons with state changes`}),`
`,(0,$.jsx)(t.li,{children:`State indicators in forms and lists`}),`
`,(0,$.jsx)(t.li,{children:`Decorative interface elements with animation`}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Properties`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`icon`})}),` — The main icon displayed by default.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`iconActive`})}),` — The icon that is displayed when the component is in an active state (`,(0,$.jsx)(t.code,{children:`active`}),` = `,(0,$.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`active`})}),` — A boolean property that toggles the component's state between normal and active.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Description`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`The `,(0,$.jsx)(t.code,{children:`icon`}),` property is essential for displaying the icon.`]}),`
`,(0,$.jsxs)(t.li,{children:[`If `,(0,$.jsx)(t.code,{children:`iconActive`}),` is not provided, there will be no visual change when the `,(0,$.jsx)(t.code,{children:`active`}),` state changes.`]}),`
`,(0,$.jsxs)(t.li,{children:[`When `,(0,$.jsx)(t.code,{children:`active`}),` is set to `,(0,$.jsx)(t.code,{children:`true`}),`, the component will attempt to display the icon specified in `,(0,$.jsx)(t.code,{children:`iconActive`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`The `,(0,$.jsx)(t.code,{children:`active`}),` property can be used to create toggles, indicators, and other interactive elements.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Recommendations`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`iconActive`}),` to provide visual feedback upon user interaction (e.g., on click or selection).`]}),`
`,(0,$.jsxs)(t.li,{children:[`Ensure that `,(0,$.jsx)(t.code,{children:`icon`}),` and `,(0,$.jsx)(t.code,{children:`iconActive`}),` are visually distinct enough for the user to easily identify the state change.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Usage Example`}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { D1Icon } from '@dxtmisha/d1'

const isActive = ref(false)
<\/script>

<template>
<!-- Normal icon -->
<D1Icon icon="home" />

<!-- Active icon -->
<!-- \`favorite\` will be displayed because active=true -->
<D1Icon icon="favorite_border" icon-active="favorite" :active="true" />

<!-- Dynamic state toggle -->
<D1Icon
  icon="visibility"
  icon-active="visibility_off"
  :active="isVisible"
  @click="isVisible = !isVisible"
/>

<D1Icon
  icon="home"
  icon-active="favorite"
  :active="isActive"
  turn="90"
  @load="onIconLoad"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`The Icon component can be used both standalone and as part of other UI components through the `,(0,$.jsx)(t.code,{children:`icon`}),`, `,(0,$.jsx)(t.code,{children:`icon-trailing`}),`, and `,(0,$.jsx)(t.code,{children:`icon-active`}),` properties.`]}),`
`]})]})}function xs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bs,{...e})}):bs(e)}function Ss(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Icon`}),`
`,(0,$.jsx)(t.p,{children:`Компонент для отображения иконок с поддержкой активного состояния, поворота, загрузки и интеграции со скелетоном.`}),`
`,(0,$.jsx)(t.p,{children:`Icon предоставляет унифицированный интерфейс для работы с иконками в дизайн-системе, поддерживая как основную иконку, так и альтернативную для активного состояния. Компонент автоматически управляет переключением между иконками, обрабатывает события загрузки и интегрируется с системой скелетонов для отображения состояния загрузки.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение основной и активной иконки с плавным переключением`}),`
`,(0,$.jsx)(t.li,{children:`Поворот иконки на заданный угол`}),`
`,(0,$.jsx)(t.li,{children:`Состояния disabled и hide для управления видимостью`}),`
`,(0,$.jsx)(t.li,{children:`События загрузки изображений иконок`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция со Skeleton для состояний загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка в составе других компонентов (Button, Cell, Chip, Field)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Иконки в кнопках и навигационных элементах`}),`
`,(0,$.jsx)(t.li,{children:`Интерактивные иконки с изменением состояния`}),`
`,(0,$.jsx)(t.li,{children:`Индикаторы состояния в формах и списках`}),`
`,(0,$.jsx)(t.li,{children:`Декоративные элементы интерфейса с анимацией`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { D1Icon } from '@dxtmisha/d1'

const isActive = ref(false)
<\/script>

<template>
<D1Icon
  icon="home"
  icon-active="favorite"
  :active="isActive"
  turn="90"
  @load="onIconLoad"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Компонент Icon может использоваться как самостоятельно, так и в составе других UI-компонентов через свойства `,(0,$.jsx)(t.code,{children:`icon`}),`, `,(0,$.jsx)(t.code,{children:`icon-trailing`}),` и `,(0,$.jsx)(t.code,{children:`icon-active`}),`.`]}),`
`]})]})}function Cs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ss,{...e})}):Ss(e)}function ws(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isActive: ComputedRef<boolean>`}),` — Computed state indicating whether the alternative representation is active (when both `,(0,$.jsx)(t.code,{children:`active`}),` and `,(0,$.jsx)(t.code,{children:`iconActive`}),` are set).`]}),`
`]})}function Ts(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ws,{...e})}):ws(e)}function Es(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isActive: ComputedRef<boolean>`}),` — Вычисляемое состояние, указывающее активно ли альтернативное представление (когда одновременно установлены `,(0,$.jsx)(t.code,{children:`active`}),` и `,(0,$.jsx)(t.code,{children:`iconActive`}),`).`]}),`
`]})}function Ds(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Es,{...e})}):Es(e)}function Os(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Universal component for displaying images, icons, flags, and PDF documents with advanced size, positioning, and adaptability controls.`}),`
`,(0,$.jsxs)(t.p,{children:[`Image provides a flexible API for working with various types of visual content. The component automatically detects the source type (image, icon, color, file), selects the optimal rendering method (`,(0,$.jsx)(t.code,{children:`<img>`}),`, `,(0,$.jsx)(t.code,{children:`background-image`}),`, `,(0,$.jsx)(t.code,{children:`<picture>`}),`, `,(0,$.jsx)(t.code,{children:`<object>`}),`, or icon font), and supports advanced cropping and adaptation features.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Support for multiple source types (URL, File, PDF, Material Icons, flags, colors)`}),`
`,(0,$.jsx)(t.li,{children:`Flexible rendering with automatic choice between background and img tag`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive scaling with aspect ratio preservation and srcset support`}),`
`,(0,$.jsx)(t.li,{children:`Display control via fill modes and coordinate cropping`}),`
`,(0,$.jsx)(t.li,{children:`Styling support with masks and color filling`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Material Symbols and system flags`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Responsive images with picture and srcset`}),`
`,(0,$.jsx)(t.li,{children:`Interface icons (Material Design or SVG masks)`}),`
`,(0,$.jsx)(t.li,{children:`User avatars with automatic cropping`}),`
`,(0,$.jsx)(t.li,{children:`Previews of uploaded files and PDF documents`}),`
`,(0,$.jsx)(t.li,{children:`Background images with complex positioning`}),`
`,(0,$.jsx)(t.li,{children:`Displaying country flags via CSS sprites`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { Image } from '@dxtmisha/constructor'

const imageUrl = ref('https://example.com/image.jpg')
<\/script>

<template>
<!-- Background image with cropping -->
<Image
  :value="imageUrl"
  size="cover"
  :coordinator="[10, 10, 10, 10]"
/>

<!-- SEO-friendly image -->
<Image
  :value="imageUrl"
  tag-img
  alt="Description"
/>

<!-- Material Design Icon -->
<Image value="filled-home" />
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`The component automatically manages content type and optimizes display based on the source.`}),`
`]})]})}function ks(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Os,{...e})}):Os(e)}function As(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Универсальный компонент для отображения изображений, иконок, флагов и PDF-документов с расширенными возможностями управления размером, позиционированием и адаптивностью.`}),`
`,(0,$.jsxs)(t.p,{children:[`Image предоставляет гибкий API для работы с различными типами визуального контента. Компонент автоматически определяет тип источника (изображение, иконка, цвет, файл), выбирает оптимальный способ рендеринга (`,(0,$.jsx)(t.code,{children:`<img>`}),`, `,(0,$.jsx)(t.code,{children:`background-image`}),`, `,(0,$.jsx)(t.code,{children:`<picture>`}),`, `,(0,$.jsx)(t.code,{children:`<object>`}),` или иконочный шрифт) и поддерживает продвинутые функции кадрирования и адаптации.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Поддержка множества типов источников (URL, File, PDF, Material Icons, флаги, цвета)`}),`
`,(0,$.jsx)(t.li,{children:`Гибкий рендеринг с автоматическим выбором между фоном и тегом img`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивное масштабирование с сохранением пропорций и поддержкой srcset`}),`
`,(0,$.jsx)(t.li,{children:`Управление отображением через режимы заполнения и координатное кадрирование`}),`
`,(0,$.jsx)(t.li,{children:`Стилизация с поддержкой масок и заливки цветом`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с Material Symbols и системными флагами`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Адаптивные изображения с picture и srcset`}),`
`,(0,$.jsx)(t.li,{children:`Иконки интерфейса (Material Design или SVG маски)`}),`
`,(0,$.jsx)(t.li,{children:`Аватары пользователей с автоматическим кадрированием`}),`
`,(0,$.jsx)(t.li,{children:`Превью загружаемых файлов и PDF документов`}),`
`,(0,$.jsx)(t.li,{children:`Фоновые изображения со сложным позиционированием`}),`
`,(0,$.jsx)(t.li,{children:`Отображение флагов стран через CSS спрайты`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { Image } from '@dxtmisha/constructor'

const imageUrl = ref('https://example.com/image.jpg')
<\/script>

<template>
<!-- Фоновое изображение с кадрированием -->
<Image
  :value="imageUrl"
  size="cover"
  :coordinator="[10, 10, 10, 10]"
/>

<!-- SEO-дружественное изображение -->
<Image
  :value="imageUrl"
  tag-img
  alt="Описание"
/>

<!-- Иконка Material Design -->
<Image value="filled-home" />
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Компонент автоматически управляет типом контента и оптимизирует отображение в зависимости от источника.`}),`
`]})]})}function js(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(As,{...e})}):As(e)}function Ms(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Main value`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`value`}),` property defines the image content. This universal property supports multiple source types for maximum flexibility.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Supported types:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Icon name`}),` — built-in or custom icon from the design system`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Image URL`}),` — direct link to file (PNG, JPG, SVG, GIF, WebP, etc.)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`File object`}),` — JavaScript File object obtained from `,(0,$.jsx)(t.code,{children:`<input type="file">`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`PDF document`}),` — direct link to PDF file with automatic display`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`The component automatically detects the source type and selects the optimal display method. When passing a File object, the content is read and previewed. The property is reactive and supports dynamic updates.`}),`
`,(0,$.jsx)(a,{code:`
<!-- Icon by name -->
<Image value="icon-user" />

<!-- Image by URL -->
<Image value="https://example.com/image.png" />

<!-- User file -->
<Image :value="fileFromInput" />
`,language:`html`})]})}function Ns(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ms,{...e})}):Ms(e)}function Ps(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Основное значение`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`value`}),` определяет контент изображения. Это универсальное свойство, поддерживающее несколько типов источников для максимальной гибкости.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Поддерживаемые типы:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Имя иконки`}),` — встроенная или пользовательская иконка из системы дизайна`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`URL изображения`}),` — прямая ссылка на файл (PNG, JPG, SVG, GIF, WebP и др.)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Объект File`}),` — JavaScript-объект File, полученный из `,(0,$.jsx)(t.code,{children:`<input type="file">`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`PDF-документ`}),` — прямая ссылка на PDF-файл с автоматическим отображением`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Компонент автоматически определяет тип источника и выбирает оптимальный способ отображения. При передаче объекта File происходит чтение и предпросмотр содержимого. Свойство реактивно и поддерживает динамическое обновление.`}),`
`,(0,$.jsx)(a,{code:`
<!-- Иконка по имени -->
<Image value="icon-user" />

<!-- Изображение по URL -->
<Image value="https://example.com/image.png" />

<!-- Файл от пользователя -->
<Image :value="fileFromInput" />
`,language:`html`})]})}function Fs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ps,{...e})}):Ps(e)}function Is(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Image display control`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`size`}),`, `,(0,$.jsx)(t.code,{children:`coordinator`}),`, `,(0,$.jsx)(t.code,{children:`x`}),`, and `,(0,$.jsx)(t.code,{children:`y`}),` properties allow you to precisely control image scaling, visible area, and positioning within the container.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`size`}),` — scaling and fill mode of the image (`,(0,$.jsx)(t.code,{children:`auto`}),`, `,(0,$.jsx)(t.code,{children:`contain`}),`, `,(0,$.jsx)(t.code,{children:`cover`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`coordinator`}),` — array of coordinates for cropping the display area `,(0,$.jsx)(t.code,{children:`[left, top, right, bottom]`}),` in percentages`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`x`}),` — horizontal offset of the image (pixels, percentages)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`y`}),` — vertical offset of the image (pixels, percentages)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together or individually. The `,(0,$.jsx)(t.code,{children:`size`}),` value defines the scaling mode: `,(0,$.jsx)(t.code,{children:`auto`}),` uses the original size, `,(0,$.jsx)(t.code,{children:`contain`}),` fits the image completely, `,(0,$.jsx)(t.code,{children:`cover`}),` fills the container with possible cropping. The `,(0,$.jsx)(t.code,{children:`coordinator`}),` property sets the visible area by cropping the image at specified coordinates. The `,(0,$.jsx)(t.code,{children:`x`}),` and `,(0,$.jsx)(t.code,{children:`y`}),` parameters shift the image relative to the container for precise positioning.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Scaling mode -->
<Image value="image.png" size="contain" />

<!-- Cropping by coordinates -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Position offset -->
<Image value="image.png" x="15" y="-10" />

<!-- Combined parameters -->
<Image
value="image.png"
size="cover"
:coordinator="[0, 0, 100, 50]"
x="10"
y="5"
/>
`,language:`html`})]})}function Ls(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Is,{...e})}):Is(e)}function Rs(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление отображением изображения`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`size`}),`, `,(0,$.jsx)(t.code,{children:`coordinator`}),`, `,(0,$.jsx)(t.code,{children:`x`}),` и `,(0,$.jsx)(t.code,{children:`y`}),` позволяют детально управлять масштабированием, областью видимости и позиционированием изображения внутри контейнера.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`size`}),` — режим масштабирования и заполнения изображения (`,(0,$.jsx)(t.code,{children:`auto`}),`, `,(0,$.jsx)(t.code,{children:`contain`}),`, `,(0,$.jsx)(t.code,{children:`cover`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`coordinator`}),` — массив координат для обрезки области отображения `,(0,$.jsx)(t.code,{children:`[left, top, right, bottom]`}),` в процентах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`x`}),` — смещение изображения по горизонтали (пиксели, проценты)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`y`}),` — смещение изображения по вертикали (пиксели, проценты)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно или по отдельности. Значение `,(0,$.jsx)(t.code,{children:`size`}),` определяет режим масштабирования: `,(0,$.jsx)(t.code,{children:`auto`}),` использует исходный размер, `,(0,$.jsx)(t.code,{children:`contain`}),` вписывает изображение полностью, `,(0,$.jsx)(t.code,{children:`cover`}),` заполняет контейнер с возможной обрезкой. Свойство `,(0,$.jsx)(t.code,{children:`coordinator`}),` задаёт видимую область, обрезая изображение по указанным координатам. Параметры `,(0,$.jsx)(t.code,{children:`x`}),` и `,(0,$.jsx)(t.code,{children:`y`}),` смещают изображение относительно контейнера для точного позиционирования.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Режим масштабирования -->
<Image value="image.png" size="contain" />

<!-- Обрезка по координатам -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Смещение позиции -->
<Image value="image.png" x="15" y="-10" />

<!-- Комбинация параметров -->
<Image
value="image.png"
size="cover"
:coordinator="[0, 0, 100, 50]"
x="10"
y="5"
/>
`,language:`html`})]})}function zs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Rs,{...e})}):Rs(e)}function Bs(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Adaptive scaling`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`adaptive`}),`, `,(0,$.jsx)(t.code,{children:`adaptiveGroup`}),`, `,(0,$.jsx)(t.code,{children:`adaptiveAlways`}),`, `,(0,$.jsx)(t.code,{children:`objectWidth`}),`, and `,(0,$.jsx)(t.code,{children:`objectHeight`}),` properties control automatic image scaling to ensure visual consistency of physical object sizes across different images.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptive`}),` — enables adaptive scaling mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptiveGroup`}),` — group name for scale synchronization (default `,(0,$.jsx)(t.code,{children:`'basic'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`objectWidth`}),` — physical width of the object in the image in millimeters`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`objectHeight`}),` — physical height of the object in the image in millimeters`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptiveAlways`}),` — perform calculations even for invisible elements`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together to ensure proportional display of images with objects of different physical sizes. When `,(0,$.jsx)(t.code,{children:`adaptive`}),` is activated, the component starts tracking element dimensions and comparing them with other images in the same group, automatically selecting the optimal scale for each element.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`objectWidth`}),` or `,(0,$.jsx)(t.code,{children:`objectHeight`}),` properties specify the real physical dimensions of the object in the image in millimeters. These values are necessary for calculating the scaling coefficient — the component uses them to determine how much to enlarge or reduce the image so that objects in different images appear the same size. It is sufficient to specify only one property — either width or height.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The component automatically determines which axis (horizontal or vertical) to scale on, based on available dimensions and image proportions. If `,(0,$.jsx)(t.code,{children:`objectWidth`}),` is specified, scaling will occur horizontally, if `,(0,$.jsx)(t.code,{children:`objectHeight`}),` — vertically. This allows flexible work with images of different orientations.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Elements with the same `,(0,$.jsx)(t.code,{children:`adaptiveGroup`}),` value scale synchronously, ensuring consistent visual object sizes across all images in the group. This is especially useful when displaying product galleries or comparison tables where maintaining visual size correspondence is important.`]}),`
`,(0,$.jsxs)(t.p,{children:[`For performance optimization, scaling calculations are performed only for visible elements within the viewport plus a small margin. If an element is outside the visible area, calculations are paused until the element appears on screen. The `,(0,$.jsx)(t.code,{children:`adaptiveAlways`}),` property disables this optimization and forces the component to constantly recalculate the scale regardless of element visibility.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const phone1 = ref('/images/phone-model-a.png')
const phone2 = ref('/images/phone-model-b.png')
const phone3 = ref('/images/phone-model-c.png')
<\/script>

<template>
<!-- Basic usage with object width -->
<Image
  :value="phone1"
  adaptive
  object-width="76.2"
/>

<!-- Multiple images in one group -->
<Image
  :value="phone1"
  adaptive
  adaptive-group="phones"
  object-width="76.2"
/>
<Image
  :value="phone2"
  adaptive
  adaptive-group="phones"
  object-width="71.9"
/>
<Image
  :value="phone3"
  adaptive
  adaptive-group="phones"
  object-width="129.9"
/>

<!-- With height instead of width -->
<Image
  adaptive
  object-height="154.8"
  :value="phone1"
/>

<!-- Constant scaling -->
<Image
  adaptive
  adaptive-always
  object-width="76.2"
  :value="phone1"
/>
</template>
`,language:`html`})]})}function Vs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bs,{...e})}):Bs(e)}function Hs(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Адаптивное масштабирование`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`adaptive`}),`, `,(0,$.jsx)(t.code,{children:`adaptiveGroup`}),`, `,(0,$.jsx)(t.code,{children:`adaptiveAlways`}),`, `,(0,$.jsx)(t.code,{children:`objectWidth`}),` и `,(0,$.jsx)(t.code,{children:`objectHeight`}),` управляют автоматическим масштабированием изображений для обеспечения визуального соответствия физических размеров объектов на разных изображениях.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptive`}),` — включает режим адаптивного масштабирования`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptiveGroup`}),` — название группы для синхронизации масштаба (по умолчанию `,(0,$.jsx)(t.code,{children:`'basic'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`objectWidth`}),` — физическая ширина объекта на изображении в миллиметрах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`objectHeight`}),` — физическая высота объекта на изображении в миллиметрах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`adaptiveAlways`}),` — выполнять расчёты даже для невидимых элементов`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно для обеспечения пропорционального отображения изображений с объектами разных физических размеров. При активации `,(0,$.jsx)(t.code,{children:`adaptive`}),` компонент начинает отслеживать размеры элемента и сравнивать их с другими изображениями в той же группе, автоматически подбирая оптимальный масштаб для каждого элемента.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`objectWidth`}),` или `,(0,$.jsx)(t.code,{children:`objectHeight`}),` задают реальные физические размеры объекта на изображении в миллиметрах. Эти значения необходимы для расчёта коэффициента масштабирования — компонент использует их для определения, во сколько раз нужно увеличить или уменьшить изображение, чтобы объекты на разных изображениях выглядели одинакового размера. Достаточно указать только одно из свойств — либо ширину, либо высоту.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент автоматически определяет, по какой оси (горизонтальной или вертикальной) производить масштабирование, основываясь на доступных размерах и пропорциях изображения. Если указан `,(0,$.jsx)(t.code,{children:`objectWidth`}),`, масштабирование будет происходить по горизонтали, если `,(0,$.jsx)(t.code,{children:`objectHeight`}),` — по вертикали. Это позволяет гибко работать с изображениями разных ориентаций.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Элементы с одинаковым значением `,(0,$.jsx)(t.code,{children:`adaptiveGroup`}),` масштабируются синхронно, обеспечивая одинаковый визуальный размер объектов на всех изображениях группы. Это особенно полезно при отображении галерей продуктов или сравнительных таблиц, где важно сохранить визуальное соответствие размеров.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Для оптимизации производительности расчёты масштабирования выполняются только для видимых элементов в пределах области просмотра (viewport) плюс небольшой запас. Если элемент находится за пределами видимой области, расчёты приостанавливаются до момента, когда элемент появится на экране. Свойство `,(0,$.jsx)(t.code,{children:`adaptiveAlways`}),` отключает эту оптимизацию и заставляет компонент постоянно пересчитывать масштаб независимо от видимости элемента.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const phone1 = ref('/images/phone-model-a.png')
const phone2 = ref('/images/phone-model-b.png')
const phone3 = ref('/images/phone-model-c.png')
<\/script>

<template>
<!-- Базовое использование с шириной объекта -->
<Image
  :value="phone1"
  adaptive
  object-width="76.2"
/>

<!-- Несколько изображений в одной группе -->
<Image
  :value="phone1"
  adaptive
  adaptive-group="phones"
  object-width="76.2"
/>
<Image
  :value="phone2"
  adaptive
  adaptive-group="phones"
  object-width="71.9"
/>
<Image
  :value="phone3"
  adaptive
  adaptive-group="phones"
  object-width="129.9"
/>

<!-- С высотой вместо ширины -->
<Image
  adaptive
  object-height="154.8"
  :value="phone1"
/>

<!-- Постоянное масштабирование -->
<Image
  adaptive
  adaptive-always
  object-width="76.2"
  :value="phone1"
/>
</template>
`,language:`html`})]})}function Us(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Hs,{...e})}):Hs(e)}function Ws(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Using the img tag`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`tagImg`}),`, `,(0,$.jsx)(t.code,{children:`srcset`}),`, `,(0,$.jsx)(t.code,{children:`picture`}),`, `,(0,$.jsx)(t.code,{children:`alt`}),`, `,(0,$.jsx)(t.code,{children:`lazy`}),`, `,(0,$.jsx)(t.code,{children:`preloadOffset`}),` and `,(0,$.jsx)(t.code,{children:`fetchPriority`}),` properties are designed to control the image display mode using the HTML `,(0,$.jsx)(t.code,{children:`<img>`}),` tag instead of a background image.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`tagImg`}),` — use the `,(0,$.jsx)(t.code,{children:`<img>`}),` tag instead of a background image`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`srcset`}),` — set of image sources for different screen resolutions`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`picture`}),` — sources for different display conditions using the `,(0,$.jsx)(t.code,{children:`<picture>`}),` tag`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`alt`}),` — alternative text for the image`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`lazy`}),` — enables lazy loading of the image`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`preloadOffset`}),` — offset for image preloading (default `,(0,$.jsx)(t.code,{children:`1024px`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`fetchPriority`}),` — image loading priority (`,(0,$.jsx)(t.code,{children:`low`}),`, `,(0,$.jsx)(t.code,{children:`high`}),`, `,(0,$.jsx)(t.code,{children:`auto`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The properties work together: if `,(0,$.jsx)(t.code,{children:`tagImg`}),` is not set or equals `,(0,$.jsx)(t.code,{children:`false`}),`, the image is displayed as a CSS background via `,(0,$.jsx)(t.code,{children:`background-image`}),`. When `,(0,$.jsx)(t.code,{children:`tagImg`}),` is activated (value `,(0,$.jsx)(t.code,{children:`true`}),`), the component uses the semantic HTML `,(0,$.jsx)(t.code,{children:`<img>`}),` tag, providing better accessibility and SEO optimization. The `,(0,$.jsx)(t.code,{children:`alt`}),` property defines alternative text that is displayed when the image is unavailable and is used by screen readers for people with disabilities.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`srcset`}),` property allows you to provide multiple versions of an image for different pixel densities and screen sizes. It accepts a string in the standard `,(0,$.jsx)(t.code,{children:`srcset`}),` attribute format or an object where keys are width descriptors (numbers or strings like `,(0,$.jsx)(t.code,{children:`'2x'`}),`) and values are image URLs. When using numeric keys, the `,(0,$.jsx)(t.code,{children:`w`}),` suffix (width descriptor) is automatically added. The browser automatically selects the optimal image based on screen size and pixel density.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`picture`}),` property enables the use of the HTML `,(0,$.jsx)(t.code,{children:`<picture>`}),` tag for art direction — when you need to load different images depending on screen size or other media query conditions. It accepts an object where keys are media conditions (such as screen width in pixels) and values are image URLs, or an array of objects with `,(0,$.jsx)(t.code,{children:`<source>`}),` attributes. When using an object, media queries like `,(0,$.jsx)(t.code,{children:`(width >= 768px)`}),` are automatically generated. The `,(0,$.jsx)(t.code,{children:`<picture>`}),` tag provides more flexible control over image selection compared to `,(0,$.jsx)(t.code,{children:`srcset`}),`, allowing you to load images with different aspect ratios or content for various viewing conditions.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`lazy`}),` property activates native browser lazy loading via the `,(0,$.jsx)(t.code,{children:`loading="lazy"`}),` attribute. Images with this attribute are loaded only when approaching the visible screen area, which significantly speeds up initial page load and reduces traffic consumption. It is especially effective for pages with a large number of images or long lists.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`preloadOffset`}),` property defines the pixel offset for preloading images when using lazy loading. The default value is `,(0,$.jsx)(t.code,{children:`1024px`}),`, which means the image starts loading 1024 pixels before it enters the visible area. This ensures smooth image loading without delays during scrolling. You can specify either a numeric value or a string with a unit of measurement.`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`fetchPriority`}),` property allows you to control the browser's image loading priority. It accepts three values: `,(0,$.jsx)(t.code,{children:`high`}),` — high priority for critical images (such as hero images or main banners), `,(0,$.jsx)(t.code,{children:`low`}),` — low priority for secondary images, `,(0,$.jsx)(t.code,{children:`auto`}),` — the browser determines the priority automatically (default value). Proper use of this property helps optimize page loading by ensuring fast loading of important content.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const productImage = ref('/images/product.jpg')
<\/script>

<template>
<!-- Basic usage -->
<Image
  :value="productImage"
  tag-img
  alt="Product description"
/>

<!-- With lazy loading -->
<Image
  :value="productImage"
  tag-img
  alt="Product"
  lazy
/>

<!-- With srcset object -->
<Image
  :value="productImage"
  tag-img
  alt="Responsive image"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg'
  }"
/>

<!-- With picture for different screen sizes -->
<Image
  :value="productImage"
  tag-img
  alt="Responsive image for different devices"
  :picture="{
    768: '/images/product-tablet.jpg',
    1024: '/images/product-desktop.jpg'
  }"
/>

<!-- With preload offset configuration -->
<Image
  :value="productImage"
  tag-img
  alt="Image with early preload"
  lazy
  preload-offset="2048px"
/>

<!-- With high loading priority -->
<Image
  :value="productImage"
  tag-img
  alt="Main page image"
  fetch-priority="high"
/>

<!-- Complex example -->
<Image
  :value="productImage"
  tag-img
  alt="Responsive product image"
  lazy
  preload-offset="1536px"
  fetch-priority="low"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg',
    '3x': '/images/product@3x.jpg'
  }"
/>
</template>
`,language:`html`})]})}function Gs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ws,{...e})}):Ws(e)}function Ks(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Использование тега img`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`tagImg`}),`, `,(0,$.jsx)(t.code,{children:`srcset`}),`, `,(0,$.jsx)(t.code,{children:`picture`}),`, `,(0,$.jsx)(t.code,{children:`alt`}),`, `,(0,$.jsx)(t.code,{children:`lazy`}),`, `,(0,$.jsx)(t.code,{children:`preloadOffset`}),` и `,(0,$.jsx)(t.code,{children:`fetchPriority`}),` предназначены для управления режимом отображения изображения через HTML-тег `,(0,$.jsx)(t.code,{children:`<img>`}),` вместо фонового изображения.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`tagImg`}),` — использовать тег `,(0,$.jsx)(t.code,{children:`<img>`}),` вместо фонового изображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`srcset`}),` — набор источников изображения для разных разрешений экрана`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`picture`}),` — источники для разных условий отображения с использованием тега `,(0,$.jsx)(t.code,{children:`<picture>`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`alt`}),` — альтернативный текст для изображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`lazy`}),` — включает ленивую загрузку изображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`preloadOffset`}),` — смещение для предзагрузки изображения (по умолчанию `,(0,$.jsx)(t.code,{children:`1024px`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`fetchPriority`}),` — приоритет загрузки изображения (`,(0,$.jsx)(t.code,{children:`low`}),`, `,(0,$.jsx)(t.code,{children:`high`}),`, `,(0,$.jsx)(t.code,{children:`auto`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,$.jsx)(t.code,{children:`tagImg`}),` не задан или равен `,(0,$.jsx)(t.code,{children:`false`}),`, изображение отображается как CSS-фон через `,(0,$.jsx)(t.code,{children:`background-image`}),`. При активации `,(0,$.jsx)(t.code,{children:`tagImg`}),` (значение `,(0,$.jsx)(t.code,{children:`true`}),`), компонент использует семантический HTML-тег `,(0,$.jsx)(t.code,{children:`<img>`}),`, обеспечивая лучшую доступность и SEO-оптимизацию. Свойство `,(0,$.jsx)(t.code,{children:`alt`}),` определяет альтернативный текст, который отображается при недоступности изображения и используется программами чтения с экрана для людей с ограниченными возможностями.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`srcset`}),` позволяет предоставить несколько версий изображения для разных плотностей пикселей и размеров экрана. Принимает строку в формате стандартного атрибута `,(0,$.jsx)(t.code,{children:`srcset`}),` или объект, где ключи — это дескрипторы ширины (числа или строки вроде `,(0,$.jsx)(t.code,{children:`'2x'`}),`), а значения — URL изображений. При использовании числовых ключей автоматически добавляется суффикс `,(0,$.jsx)(t.code,{children:`w`}),` (width descriptor). Браузер самостоятельно выбирает оптимальное изображение на основе размера экрана и плотности пикселей.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`picture`}),` позволяет использовать HTML-тег `,(0,$.jsx)(t.code,{children:`<picture>`}),` для art direction — когда требуется загружать разные изображения в зависимости от размера экрана или других условий медиа-запросов. Принимает объект, где ключи — это медиа-условия (например, ширина экрана в пикселях), а значения — URL изображений, или массив объектов с атрибутами `,(0,$.jsx)(t.code,{children:`<source>`}),`. При использовании объекта автоматически генерируются медиа-запросы вида `,(0,$.jsx)(t.code,{children:`(width >= 768px)`}),`. Тег `,(0,$.jsx)(t.code,{children:`<picture>`}),` обеспечивает более гибкий контроль над выбором изображения по сравнению с `,(0,$.jsx)(t.code,{children:`srcset`}),`, позволяя загружать изображения разных пропорций или содержания для различных условий просмотра.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`lazy`}),` активирует нативную ленивую загрузку браузера через атрибут `,(0,$.jsx)(t.code,{children:`loading="lazy"`}),`. Изображения с этим атрибутом загружаются только при приближении к видимой области экрана, что значительно ускоряет начальную загрузку страницы и снижает потребление трафика. Особенно эффективно для страниц с большим количеством изображений или длинных списков.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`preloadOffset`}),` определяет смещение в пикселях для предварительной загрузки изображений при использовании ленивой загрузки. По умолчанию установлено значение `,(0,$.jsx)(t.code,{children:`1024px`}),`, что означает начало загрузки изображения за 1024 пикселя до того, как оно попадет в видимую область. Это обеспечивает плавную загрузку изображений без задержек при прокрутке. Можно указать как числовое значение, так и строку с единицей измерения.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`fetchPriority`}),` позволяет управлять приоритетом загрузки изображения браузером. Принимает три значения: `,(0,$.jsx)(t.code,{children:`high`}),` — высокий приоритет для критически важных изображений (например, главный баннер или hero-изображение), `,(0,$.jsx)(t.code,{children:`low`}),` — низкий приоритет для второстепенных изображений, `,(0,$.jsx)(t.code,{children:`auto`}),` — браузер самостоятельно определяет приоритет (значение по умолчанию). Правильное использование этого свойства помогает оптимизировать загрузку страницы, обеспечивая быструю загрузку важного контента.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const productImage = ref('/images/product.jpg')
<\/script>

<template>
<!-- Базовое использование -->
<Image
  :value="productImage"
  tag-img
  alt="Описание продукта"
/>

<!-- С ленивой загрузкой -->
<Image
  :value="productImage"
  tag-img
  alt="Товар"
  lazy
/>

<!-- С srcset объектом -->
<Image
  :value="productImage"
  tag-img
  alt="Адаптивное изображение"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg'
  }"
/>

<!-- С picture для разных размеров экрана -->
<Image
  :value="productImage"
  tag-img
  alt="Адаптивное изображение для разных устройств"
  :picture="{
    768: '/images/product-tablet.jpg',
    1024: '/images/product-desktop.jpg'
  }"
/>

<!-- С настройкой предзагрузки -->
<Image
  :value="productImage"
  tag-img
  alt="Изображение с ранней предзагрузкой"
  lazy
  preload-offset="2048px"
/>

<!-- С высоким приоритетом загрузки -->
<Image
  :value="productImage"
  tag-img
  alt="Главное изображение страницы"
  fetch-priority="high"
/>

<!-- Комплексный пример -->
<Image
  :value="productImage"
  tag-img
  alt="Адаптивное изображение товара"
  lazy
  preload-offset="1536px"
  fetch-priority="low"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg',
    '3x': '/images/product@3x.jpg'
  }"
/>
</template>
`,language:`html`})]})}function qs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ks,{...e})}):Ks(e)}function Js(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Flags`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`Image`}),` component supports displaying country flags. A special format for the `,(0,$.jsx)(t.code,{children:`value`}),` property is used for this purpose.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Formats:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`flag-xx`}),` — standard flag (where `,(0,$.jsx)(t.code,{children:`xx`}),` is the ISO 3166-1 alpha-2 country code)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`f-xx`}),` — compressed flag (where `,(0,$.jsx)(t.code,{children:`xx`}),` is the ISO 3166-1 alpha-2 country code)`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic flag type detection by prefix`}),`
`,(0,$.jsx)(t.li,{children:`Support for all countries according to ISO 3166-1 alpha-2 standard`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Standard US flag -->
<Image value="flag-us" />

<!-- Compressed Germany flag -->
<Image value="f-de" />
</template>
`,language:`html`})]})}function Ys(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Js,{...e})}):Js(e)}function Xs(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Флаги`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент `,(0,$.jsx)(t.code,{children:`Image`}),` поддерживает отображение флагов стран. Для этого используется специальный формат значения свойства `,(0,$.jsx)(t.code,{children:`value`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Форматы:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`flag-xx`}),` — стандартный флаг (где `,(0,$.jsx)(t.code,{children:`xx`}),` — код страны ISO 3166-1 alpha-2)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`f-xx`}),` — сжатый флаг (где `,(0,$.jsx)(t.code,{children:`xx`}),` — код страны ISO 3166-1 alpha-2)`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое определение типа флага по префиксу`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка всех стран по стандарту ISO 3166-1 alpha-2`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Стандартный флаг США -->
<Image value="flag-us" />

<!-- Сжатый флаг Германии -->
<Image value="f-de" />
</template>
`,language:`html`})]})}function Zs(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xs,{...e})}):Xs(e)}function Qs(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`load`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires after the image is loaded.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: ImageEventData`}),` — object with image data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`ImageEventData structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: ImageTypeItem`}),` — image type (`,(0,$.jsx)(t.code,{children:`'image'`}),`, `,(0,$.jsx)(t.code,{children:`'icon'`}),`, `,(0,$.jsx)(t.code,{children:`'pdf'`}),`, `,(0,$.jsx)(t.code,{children:`'file'`}),`, `,(0,$.jsx)(t.code,{children:`'flag'`}),`, `,(0,$.jsx)(t.code,{children:`'color'`}),`, etc.)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: ImageEventItem`}),` — image data (`,(0,$.jsx)(t.code,{children:`ImageItem`}),` object, URL string, or `,(0,$.jsx)(t.code,{children:`undefined`}),`)`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`ImageItem structure (when image is an object):`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`width: number`}),` — image width`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`height: number`}),` — image height`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: HTMLImageElement`}),` — image DOM element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`src: string`}),` — image source (URL)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleLoad = (data) => {
console.log('Image type:', data.type)

if (typeof data.image === 'object' && data.image) {
  console.log('Width:', data.image.width)
  console.log('Height:', data.image.height)
  console.log('URL:', data.image.src)
} else {
  console.log('Image URL:', data.image)
}
}
<\/script>

<template>
<Image
  src="/path/to/image.jpg"
  @load="handleLoad"
/>
</template>
`,language:`html`})]})}function $s(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Qs,{...e})}):Qs(e)}function ec(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`load`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает после загрузки изображения.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: ImageEventData`}),` — объект с данными изображения`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура ImageEventData:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: ImageTypeItem`}),` — тип изображения (`,(0,$.jsx)(t.code,{children:`'image'`}),`, `,(0,$.jsx)(t.code,{children:`'icon'`}),`, `,(0,$.jsx)(t.code,{children:`'pdf'`}),`, `,(0,$.jsx)(t.code,{children:`'file'`}),`, `,(0,$.jsx)(t.code,{children:`'flag'`}),`, `,(0,$.jsx)(t.code,{children:`'color'`}),` и др.)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: ImageEventItem`}),` — данные изображения (объект `,(0,$.jsx)(t.code,{children:`ImageItem`}),`, строка URL или `,(0,$.jsx)(t.code,{children:`undefined`}),`)`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура ImageItem (если image - объект):`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`width: number`}),` — ширина изображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`height: number`}),` — высота изображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: HTMLImageElement`}),` — DOM элемент изображения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`src: string`}),` — источник изображения (URL)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleLoad = (data) => {
console.log('Тип изображения:', data.type)

if (typeof data.image === 'object' && data.image) {
  console.log('Ширина:', data.image.width)
  console.log('Высота:', data.image.height)
  console.log('URL:', data.image.src)
} else {
  console.log('URL изображения:', data.image)
}
}
<\/script>

<template>
<Image
  src="/path/to/image.jpg"
  @load="handleLoad"
/>
</template>
`,language:`html`})]})}function tc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ec,{...e})}):ec(e)}function nc(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: ComputedRef<ImageTypeItem>`}),` — Type of the loaded image.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`ImageTypeItem values:`}),`
`,(0,$.jsx)(t.code,{children:`pdf`}),`, `,(0,$.jsx)(t.code,{children:`file`}),`, `,(0,$.jsx)(t.code,{children:`array`}),`, `,(0,$.jsx)(t.code,{children:`image`}),`, `,(0,$.jsx)(t.code,{children:`flag`}),`, `,(0,$.jsx)(t.code,{children:`flag-compressed`}),`, `,(0,$.jsx)(t.code,{children:`color`}),`, `,(0,$.jsx)(t.code,{children:`public`}),`, `,(0,$.jsx)(t.code,{children:`filled`}),`, `,(0,$.jsx)(t.code,{children:`outlined`}),`, `,(0,$.jsx)(t.code,{children:`round`}),`, `,(0,$.jsx)(t.code,{children:`sharp`}),`, `,(0,$.jsx)(t.code,{children:`two-tone`}),`, `,(0,$.jsx)(t.code,{children:`material`}),`, `,(0,$.jsx)(t.code,{children:`icon`}),`.`]}),`
`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`data: Ref<ImageEventItem>`}),` — Information about the loaded image, including its source and metadata.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`ImageEventItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`src: string`}),` — source URL.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`width: number`}),` — image width.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`height: number`}),` — image height.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: HTMLImageElement`}),` — DOM element of the image.`]}),`
`]}),`
`]})]})}function rc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nc,{...e})}):nc(e)}function ic(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: ComputedRef<ImageTypeItem>`}),` — Тип загруженного изображения.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Значения ImageTypeItem:`}),`
`,(0,$.jsx)(t.code,{children:`pdf`}),`, `,(0,$.jsx)(t.code,{children:`file`}),`, `,(0,$.jsx)(t.code,{children:`array`}),`, `,(0,$.jsx)(t.code,{children:`image`}),`, `,(0,$.jsx)(t.code,{children:`flag`}),`, `,(0,$.jsx)(t.code,{children:`flag-compressed`}),`, `,(0,$.jsx)(t.code,{children:`color`}),`, `,(0,$.jsx)(t.code,{children:`public`}),`, `,(0,$.jsx)(t.code,{children:`filled`}),`, `,(0,$.jsx)(t.code,{children:`outlined`}),`, `,(0,$.jsx)(t.code,{children:`round`}),`, `,(0,$.jsx)(t.code,{children:`sharp`}),`, `,(0,$.jsx)(t.code,{children:`two-tone`}),`, `,(0,$.jsx)(t.code,{children:`material`}),`, `,(0,$.jsx)(t.code,{children:`icon`}),`.`]}),`
`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`data: Ref<ImageEventItem>`}),` — Информация о загруженном изображении, включая его источник и метаданные.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`ImageEventItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`src: string`}),` — URL-источник.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`width: number`}),` — ширина изображения.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`height: number`}),` — высота изображения.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`image: HTMLImageElement`}),` — DOM-элемент изображения.`]}),`
`]}),`
`]})]})}function ac(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ic,{...e})}):ic(e)}function oc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Currency Formatting`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`type`}),`, `,(0,$.jsx)(t.code,{children:`currency`}),`, `,(0,$.jsx)(t.code,{children:`currencyHide`}),`, `,(0,$.jsx)(t.code,{children:`language`}),`, and `,(0,$.jsx)(t.code,{children:`fraction`}),` are designed to manage currency value formatting with automatic currency symbol insertion and localization.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type`}),` — input type (set to `,(0,$.jsx)(t.code,{children:`currency`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`currency`}),` — currency code (e.g., `,(0,$.jsx)(t.code,{children:`USD`}),`, `,(0,$.jsx)(t.code,{children:`EUR`}),`, `,(0,$.jsx)(t.code,{children:`RUB`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`currencyHide`}),` — hides currency symbol in the input field`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`language`}),` — locale code for formatting (e.g., `,(0,$.jsx)(t.code,{children:`ru-RU`}),`, `,(0,$.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`fraction`}),` — number of decimal places (default `,(0,$.jsx)(t.code,{children:`2`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`type="currency"`}),` automatically activates currency formatting mode with two decimal places. `,(0,$.jsx)(t.code,{children:`currency`}),` defines the symbol appended to the formatted number (`,(0,$.jsx)(t.code,{children:`$`}),`, `,(0,$.jsx)(t.code,{children:`€`}),`, `,(0,$.jsx)(t.code,{children:`₽`}),`). When `,(0,$.jsx)(t.code,{children:`currencyHide`}),` is set, currency symbol is not displayed, but number formatting is preserved. Property `,(0,$.jsx)(t.code,{children:`language`}),` affects thousand separators, decimal separator, and currency symbol position. Number of decimal places can be changed via `,(0,$.jsx)(t.code,{children:`fraction`}),`, overriding the default value.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234.56')
<\/script>

<template>
<!-- Standard currency input -->
<Input v-model="value" type="currency" currency="USD" language="en-US" label="Price" />

<!-- Currency with Russian locale -->
<Input v-model="value" type="currency" currency="RUB" language="ru-RU" label="Salary" />

<!-- Currency without symbol -->
<Input v-model="value" type="currency" currency="EUR" currency-hide language="de-DE" label="Amount" />

<!-- Currency with three decimals -->
<Input v-model="value" type="currency" currency="USD" language="en-US" :fraction="3" label="Precise Amount" />

<!-- Number formatting only -->
<Input v-model="value" type="number-format" language="ru-RU" label="Number" />
</template>
`,language:`html`})]})}function sc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(oc,{...e})}):oc(e)}function cc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Работа с валютой`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`type`}),`, `,(0,$.jsx)(t.code,{children:`currency`}),`, `,(0,$.jsx)(t.code,{children:`currencyHide`}),`, `,(0,$.jsx)(t.code,{children:`language`}),` и `,(0,$.jsx)(t.code,{children:`fraction`}),` предназначены для управления форматированием денежных значений с автоматической подстановкой символа валюты и локализацией.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type`}),` — тип инпута (устанавливается значение `,(0,$.jsx)(t.code,{children:`currency`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`currency`}),` — код валюты (например, `,(0,$.jsx)(t.code,{children:`USD`}),`, `,(0,$.jsx)(t.code,{children:`EUR`}),`, `,(0,$.jsx)(t.code,{children:`RUB`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`currencyHide`}),` — скрывает символ валюты в поле ввода`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`language`}),` — код локали для форматирования (например, `,(0,$.jsx)(t.code,{children:`ru-RU`}),`, `,(0,$.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`fraction`}),` — количество знаков после запятой (по умолчанию `,(0,$.jsx)(t.code,{children:`2`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`type="currency"`}),` автоматически активирует режим валютного форматирования с двумя знаками после запятой. `,(0,$.jsx)(t.code,{children:`currency`}),` определяет символ, который добавляется к отформатированному числу (`,(0,$.jsx)(t.code,{children:`$`}),`, `,(0,$.jsx)(t.code,{children:`€`}),`, `,(0,$.jsx)(t.code,{children:`₽`}),`). При установке `,(0,$.jsx)(t.code,{children:`currencyHide`}),` символ валюты не отображается, но форматирование числа сохраняется. Свойство `,(0,$.jsx)(t.code,{children:`language`}),` влияет на разделители тысяч, десятичный разделитель и позицию символа валюты. Количество десятичных знаков можно изменить через `,(0,$.jsx)(t.code,{children:`fraction`}),`, перезаписав значение по умолчанию.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234.56')
<\/script>

<template>
<!-- Стандартный валютный инпут -->
<Input v-model="value" type="currency" currency="USD" language="en-US" label="Цена" />

<!-- Валюта с русской локалью -->
<Input v-model="value" type="currency" currency="RUB" language="ru-RU" label="Зарплата" />

<!-- Валюта без символа -->
<Input v-model="value" type="currency" currency="EUR" currency-hide language="de-DE" label="Сумма" />

<!-- Валюта с тремя знаками -->
<Input v-model="value" type="currency" currency="USD" language="en-US" :fraction="3" label="Точная сумма" />

<!-- Только числовое форматирование -->
<Input v-model="value" type="number-format" language="ru-RU" label="Число" />
</template>
`,language:`html`})]})}function lc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(cc,{...e})}):cc(e)}function uc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Date and Time Formatting`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`type`}),`, `,(0,$.jsx)(t.code,{children:`language`}),`, and `,(0,$.jsx)(t.code,{children:`mask`}),` are designed to manage date and time input and formatting with automatic localization and masking.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type`}),` — input type (set to one of: `,(0,$.jsx)(t.code,{children:`date`}),`, `,(0,$.jsx)(t.code,{children:`datetime`}),`, `,(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`, `,(0,$.jsx)(t.code,{children:`hour-minute`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`language`}),` — locale code for formatting (e.g., `,(0,$.jsx)(t.code,{children:`ru-RU`}),`, `,(0,$.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`mask`}),` — custom input mask (optional)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`min`}),` — minimum allowed date/time value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`max`}),` — maximum allowed date/time value`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`type="date"`}),` automatically activates date input mode with localized formatting. `,(0,$.jsx)(t.code,{children:`language`}),` determines the order of date components (day/month/year or month/day/year) and separators. `,(0,$.jsx)(t.code,{children:`type="datetime"`}),` adds time input to the date. Types `,(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`, and `,(0,$.jsx)(t.code,{children:`hour-minute`}),` allow input of specific components only. Properties `,(0,$.jsx)(t.code,{children:`min`}),` and `,(0,$.jsx)(t.code,{children:`max`}),` restrict the range of allowed values. You can override the automatic mask via the `,(0,$.jsx)(t.code,{children:`mask`}),` property for custom formatting.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const dateValue = ref('2024-03-15')
const datetimeValue = ref('2024-03-15T14:30:00')
const timeValue = ref('14:30')
const yearMonthValue = ref('2024-03')
<\/script>

<template>
<!-- Standard date input -->
<Input v-model="dateValue" type="date" language="en-US" label="Date" />

<!-- Date with Russian locale -->
<Input v-model="dateValue" type="date" language="ru-RU" label="Дата" />

<!-- Date and time -->
<Input v-model="datetimeValue" type="datetime" language="en-US" label="Date and Time" />

<!-- Time only -->
<Input v-model="timeValue" type="time" language="en-US" label="Time" />

<!-- Hours and minutes -->
<Input v-model="timeValue" type="hour-minute" language="en-US" label="Hours:Minutes" />

<!-- Year and month -->
<Input v-model="yearMonthValue" type="year-month" language="en-US" label="Period" />

<!-- Date with constraints -->
<Input
  v-model="dateValue"
  type="date"
  language="en-US"
  min="2024-01-01"
  max="2024-12-31"
  label="Date in 2024"
/>
</template>
`,language:`html`})]})}function dc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(uc,{...e})}):uc(e)}function fc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Работа с датой и временем`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`type`}),`, `,(0,$.jsx)(t.code,{children:`language`}),` и `,(0,$.jsx)(t.code,{children:`mask`}),` предназначены для управления вводом и форматированием значений даты и времени с автоматической локализацией и маскированием.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type`}),` — тип инпута (устанавливается одно из значений: `,(0,$.jsx)(t.code,{children:`date`}),`, `,(0,$.jsx)(t.code,{children:`datetime`}),`, `,(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`, `,(0,$.jsx)(t.code,{children:`hour-minute`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`language`}),` — код локали для форматирования (например, `,(0,$.jsx)(t.code,{children:`ru-RU`}),`, `,(0,$.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`mask`}),` — пользовательская маска для ввода (опционально)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`min`}),` — минимальное допустимое значение даты/времени`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`max`}),` — максимальное допустимое значение даты/времени`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`type="date"`}),` автоматически активирует режим ввода даты с локализованным форматированием. `,(0,$.jsx)(t.code,{children:`language`}),` определяет порядок компонентов даты (день/месяц/год или месяц/день/год) и разделители. `,(0,$.jsx)(t.code,{children:`type="datetime"`}),` добавляет к дате ввод времени. Типы `,(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`time`}),` и `,(0,$.jsx)(t.code,{children:`hour-minute`}),` позволяют вводить только определённые компоненты. Свойства `,(0,$.jsx)(t.code,{children:`min`}),` и `,(0,$.jsx)(t.code,{children:`max`}),` ограничивают диапазон допустимых значений. Можно переопределить автоматическую маску через свойство `,(0,$.jsx)(t.code,{children:`mask`}),` для кастомного форматирования.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const dateValue = ref('2024-03-15')
const datetimeValue = ref('2024-03-15T14:30:00')
const timeValue = ref('14:30')
const yearMonthValue = ref('2024-03')
<\/script>

<template>
<!-- Стандартный ввод даты -->
<Input v-model="dateValue" type="date" language="ru-RU" label="Дата" />

<!-- Дата с английской локалью -->
<Input v-model="dateValue" type="date" language="en-US" label="Date" />

<!-- Дата и время -->
<Input v-model="datetimeValue" type="datetime" language="ru-RU" label="Дата и время" />

<!-- Только время -->
<Input v-model="timeValue" type="time" language="ru-RU" label="Время" />

<!-- Часы и минуты -->
<Input v-model="timeValue" type="hour-minute" language="ru-RU" label="Часы:Минуты" />

<!-- Год и месяц -->
<Input v-model="yearMonthValue" type="year-month" language="ru-RU" label="Период" />

<!-- Дата с ограничениями -->
<Input
  v-model="dateValue"
  type="date"
  language="ru-RU"
  min="2024-01-01"
  max="2024-12-31"
  label="Дата в 2024 году"
/>
</template>
`,language:`html`})]})}function pc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(fc,{...e})}):fc(e)}function mc(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Text input field component with validation, masking and formatting support.`}),`
`,(0,$.jsx)(t.p,{children:`Input provides a flexible interface for entering various types of data: text, numbers, email, passwords, phones, URLs, dates and time. The component automatically applies appropriate validation, formatting and keyboard based on the specified type. Supports masking for structured input (phones, dates, custom patterns), currency and number formatting, password visibility control and integration with the Field component for consistent styling.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Multiple input types (text, number, email, password, tel, url, date, time and more)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in validation with custom messages`}),`
`,(0,$.jsx)(t.li,{children:`Masking for formatted input`}),`
`,(0,$.jsx)(t.li,{children:`Currency and number formatting with localization`}),`
`,(0,$.jsx)(t.li,{children:`Password visibility toggle`}),`
`,(0,$.jsx)(t.li,{children:`Prefix and suffix for additional context`}),`
`,(0,$.jsx)(t.li,{children:`Character counter for length limits`}),`
`,(0,$.jsx)(t.li,{children:`Navigation arrows for numeric values`}),`
`,(0,$.jsx)(t.li,{children:`Autocomplete and spellcheck support`}),`
`,(0,$.jsx)(t.li,{children:`Clear button for value reset`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Registration and login forms`}),`
`,(0,$.jsx)(t.li,{children:`Contact information fields (email, phone)`}),`
`,(0,$.jsx)(t.li,{children:`Numeric fields (quantity, price, age)`}),`
`,(0,$.jsx)(t.li,{children:`Password fields with visibility toggle`}),`
`,(0,$.jsx)(t.li,{children:`Search fields with quick clear`}),`
`,(0,$.jsx)(t.li,{children:`Formatted input (phones, dates, cards)`}),`
`,(0,$.jsx)(t.li,{children:`Currency fields with automatic formatting`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleInput = (event, validation) => {
console.log('Input value:', validation.value)
console.log('Valid:', validation.status)
}
<\/script>

<template>
<div class="form">
  <Input
    v-model="email"
    type="email"
    label="Email"
    placeholder="example@mail.com"
    required
    @input="handleInput"
  />

  <Input
    v-model="password"
    type="password"
    label="Password"
    placeholder="Enter password"
    minlength="8"
    required
    iconVisibility="visibility"
    iconVisibilityOff="visibility_off"
  />

  <Input
    type="currency"
    label="Price"
    currency="USD"
    language="en-US"
  />
</div>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.p,{children:`Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования.`}),`
`,(0,$.jsx)(t.p,{children:`Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная валидация с пользовательскими сообщениями`}),`
`,(0,$.jsx)(t.li,{children:`Маскирование для форматированного ввода`}),`
`,(0,$.jsx)(t.li,{children:`Форматирование валюты и чисел с локализацией`}),`
`,(0,$.jsx)(t.li,{children:`Переключатель видимости пароля`}),`
`,(0,$.jsx)(t.li,{children:`Префикс и суффикс для дополнительного контекста`}),`
`,(0,$.jsx)(t.li,{children:`Счётчик символов для ограничения длины`}),`
`,(0,$.jsx)(t.li,{children:`Стрелки навигации для числовых значений`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка автозаполнения и проверки орфографии`}),`
`,(0,$.jsx)(t.li,{children:`Кнопка очистки значения`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Формы регистрации и авторизации`}),`
`,(0,$.jsx)(t.li,{children:`Поля ввода контактных данных (email, телефон)`}),`
`,(0,$.jsx)(t.li,{children:`Числовые поля (количество, цена, возраст)`}),`
`,(0,$.jsx)(t.li,{children:`Поля для ввода паролей с переключением видимости`}),`
`,(0,$.jsx)(t.li,{children:`Поля поиска с быстрой очисткой`}),`
`,(0,$.jsx)(t.li,{children:`Форматированный ввод (телефоны, даты, карты)`}),`
`,(0,$.jsx)(t.li,{children:`Валютные поля с автоматическим форматированием`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleInput = (event, validation) => {
console.log('Введённое значение:', validation.value)
console.log('Валидно:', validation.status)
}
<\/script>

<template>
<div class="form">
  <Input
    v-model="email"
    type="email"
    label="Email"
    placeholder="example@mail.com"
    required
    @input="handleInput"
  />

  <Input
    v-model="password"
    type="password"
    label="Пароль"
    placeholder="Введите пароль"
    minlength="8"
    required
    iconVisibility="visibility"
    iconVisibilityOff="visibility_off"
  />

  <Input
    type="currency"
    label="Цена"
    currency="RUB"
    language="ru-RU"
  />
</div>
</template>
`,language:`html`})]})}function hc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(mc,{...e})}):mc(e)}function gc(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования.`}),`
`,(0,$.jsx)(t.p,{children:`Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная валидация с пользовательскими сообщениями`}),`
`,(0,$.jsx)(t.li,{children:`Маскирование для форматированного ввода`}),`
`,(0,$.jsx)(t.li,{children:`Форматирование валюты и чисел с локализацией`}),`
`,(0,$.jsx)(t.li,{children:`Переключатель видимости пароля`}),`
`,(0,$.jsx)(t.li,{children:`Префикс и суффикс для дополнительного контекста`}),`
`,(0,$.jsx)(t.li,{children:`Счётчик символов для ограничения длины`}),`
`,(0,$.jsx)(t.li,{children:`Стрелки навигации для числовых значений`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка автозаполнения и проверки орфографии`}),`
`,(0,$.jsx)(t.li,{children:`Кнопка очистки значения`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Формы регистрации и авторизации`}),`
`,(0,$.jsx)(t.li,{children:`Поля ввода контактных данных (email, телефон)`}),`
`,(0,$.jsx)(t.li,{children:`Числовые поля (количество, цена, возраст)`}),`
`,(0,$.jsx)(t.li,{children:`Поля для ввода паролей с переключением видимости`}),`
`,(0,$.jsx)(t.li,{children:`Поля поиска с быстрой очисткой`}),`
`,(0,$.jsx)(t.li,{children:`Форматированный ввод (телефоны, даты, карты)`}),`
`,(0,$.jsx)(t.li,{children:`Валютные поля с автоматическим форматированием`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleInput = (event, validation) => {
console.log('Введённое значение:', validation.value)
console.log('Валидно:', validation.status)
}
<\/script>

<template>
<div class="form">
  <Input
    v-model="email"
    type="email"
    label="Email"
    placeholder="example@mail.com"
    required
    @input="handleInput"
  />

  <Input
    v-model="password"
    type="password"
    label="Пароль"
    placeholder="Введите пароль"
    minlength="8"
    required
    iconVisibility="visibility"
    iconVisibilityOff="visibility_off"
  />

  <Input
    type="currency"
    label="Цена"
    currency="RUB"
    language="ru-RU"
  />
</div>
</template>
`,language:`html`})]})}function _c(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(gc,{...e})}):gc(e)}function vc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Input Masking`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`mask`}),`, `,(0,$.jsx)(t.code,{children:`maskVisible`}),`, `,(0,$.jsx)(t.code,{children:`maskNone`}),`, and `,(0,$.jsx)(t.code,{children:`maskAttrs`}),` are designed to manage formatted input with automatic separator insertion and character control at specified positions.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`mask`}),` — mask template as a string (e.g., `,(0,$.jsx)(t.code,{children:`+1 (***) ***-****`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maskVisible`}),` — controls placeholder characters display (default `,(0,$.jsx)(t.code,{children:`true`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maskNone`}),` — completely disables the mask`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maskAttrs`}),` — object with extended mask settings`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`mask`}),` defines the formatting structure, where special character (default `,(0,$.jsx)(t.code,{children:`*`}),`) defines positions for digit input, and other characters (spaces, brackets, hyphens) are automatically inserted as fixed separators. `,(0,$.jsx)(t.code,{children:`maskVisible`}),` controls the display of unfilled positions, where when set to `,(0,$.jsx)(t.code,{children:`true`}),` they are displayed with placeholder characters `,(0,$.jsx)(t.code,{children:`_`}),`, and when `,(0,$.jsx)(t.code,{children:`false`}),` only entered characters with separators are shown. `,(0,$.jsx)(t.code,{children:`maskNone`}),` allows completely disabling masking logic, converting the field to a regular text input. `,(0,$.jsx)(t.code,{children:`maskAttrs`}),` provides access to extended settings, allowing configuration of special characters (`,(0,$.jsx)(t.code,{children:`special`}),`), regular expressions for validation (`,(0,$.jsx)(t.code,{children:`match`}),`), custom placeholder characters (`,(0,$.jsx)(t.code,{children:`view`}),`), validation patterns (`,(0,$.jsx)(t.code,{children:`pattern`}),`), and rubber groups (`,(0,$.jsx)(t.code,{children:`rubber`}),`).`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('')
<\/script>

<template>
<!-- US Phone -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />

<!-- Credit Card -->
<Input v-model="value" type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />

<!-- Without placeholder display -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
</template>
`,language:`html`})]})}function yc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vc,{...e})}):vc(e)}function bc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Маскирование ввода`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`mask`}),`, `,(0,$.jsx)(t.code,{children:`maskVisible`}),`, `,(0,$.jsx)(t.code,{children:`maskNone`}),` и `,(0,$.jsx)(t.code,{children:`maskAttrs`}),` предназначены для управления форматированным вводом с автоматической подстановкой разделителей и контролем символов в заданных позициях.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`mask`}),` — шаблон маски в виде строки (например, `,(0,$.jsx)(t.code,{children:`+1 (***) ***-****`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maskVisible`}),` — управляет отображением символов-заполнителей (по умолчанию `,(0,$.jsx)(t.code,{children:`true`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maskNone`}),` — полностью отключает маску`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maskAttrs`}),` — объект с расширенными настройками маски`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`mask`}),` определяет структуру форматирования, где специальный символ (по умолчанию `,(0,$.jsx)(t.code,{children:`*`}),`) определяет позиции для ввода цифр, а остальные символы (пробелы, скобки, дефисы) автоматически подставляются как фиксированные разделители. `,(0,$.jsx)(t.code,{children:`maskVisible`}),` управляет отображением незаполненных позиций, где при значении `,(0,$.jsx)(t.code,{children:`true`}),` они отображаются символами-заполнителями `,(0,$.jsx)(t.code,{children:`_`}),`, а при `,(0,$.jsx)(t.code,{children:`false`}),` показываются только введённые символы с разделителями. `,(0,$.jsx)(t.code,{children:`maskNone`}),` позволяет полностью отключить логику маскирования, превращая поле в обычный текстовый инпут. `,(0,$.jsx)(t.code,{children:`maskAttrs`}),` обеспечивает доступ к расширенным настройкам, позволяя настраивать специальные символы (`,(0,$.jsx)(t.code,{children:`special`}),`), регулярные выражения для проверки (`,(0,$.jsx)(t.code,{children:`match`}),`), кастомные символы-заполнители (`,(0,$.jsx)(t.code,{children:`view`}),`), паттерны валидации (`,(0,$.jsx)(t.code,{children:`pattern`}),`) и резиновые группы (`,(0,$.jsx)(t.code,{children:`rubber`}),`).`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('')
<\/script>

<template>
<!-- Телефон США -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Телефон" />

<!-- Кредитная карта -->
<Input v-model="value" type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Карта" />

<!-- Без отображения символов-заполнителей -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="Без заполнителя" />
</template>
`,language:`html`})]})}function xc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bc,{...e})}):bc(e)}function Sc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Working with Numbers`}),`
`,(0,$.jsxs)(t.p,{children:[`Properties `,(0,$.jsx)(t.code,{children:`type`}),`, `,(0,$.jsx)(t.code,{children:`fraction`}),`, `,(0,$.jsx)(t.code,{children:`language`}),`, `,(0,$.jsx)(t.code,{children:`min`}),`, `,(0,$.jsx)(t.code,{children:`max`}),`, `,(0,$.jsx)(t.code,{children:`step`}),`, `,(0,$.jsx)(t.code,{children:`arrow`}),`, `,(0,$.jsx)(t.code,{children:`arrowStep`}),`, and `,(0,$.jsx)(t.code,{children:`align`}),` are designed to manage numeric value input and formatting with localization support and interactive control elements.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type`}),` — input type (`,(0,$.jsx)(t.code,{children:`number`}),` or `,(0,$.jsx)(t.code,{children:`number-format`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`fraction`}),` — number of decimal places (number, `,(0,$.jsx)(t.code,{children:`true`}),` for dynamic fractional part)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`language`}),` — locale code for formatting (e.g., `,(0,$.jsx)(t.code,{children:`ru-RU`}),`, `,(0,$.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`min`}),` — minimum allowed value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`max`}),` — maximum allowed value`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`step`}),` — step size for keyboard input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrow`}),` — control arrows type (`,(0,$.jsx)(t.code,{children:`auto`}),`, `,(0,$.jsx)(t.code,{children:`stepper`}),`, `,(0,$.jsx)(t.code,{children:`carousel`}),`, `,(0,$.jsx)(t.code,{children:`none`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowStep`}),` — step size for arrow clicks`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`align`}),` — arrows placement (`,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: `,(0,$.jsx)(t.code,{children:`type`}),` defines the base input mode, where `,(0,$.jsx)(t.code,{children:`number`}),` activates simple numeric input with basic validation without formatting, and `,(0,$.jsx)(t.code,{children:`number-format`}),` enables automatic formatting with thousands separators and decimal places depending on locale. `,(0,$.jsx)(t.code,{children:`language`}),` defines regional rules for thousands separators (space, comma, period) and decimal separator (period or comma). Properties `,(0,$.jsx)(t.code,{children:`min`}),` and `,(0,$.jsx)(t.code,{children:`max`}),` activate built-in range validation. `,(0,$.jsx)(t.code,{children:`step`}),` defines increment/decrement magnitude when using arrow keys up/down and Page Up/Down. Properties `,(0,$.jsx)(t.code,{children:`arrow`}),` and `,(0,$.jsx)(t.code,{children:`arrowStep`}),` add visual control elements (± buttons or < > arrows) with customizable step size, where if `,(0,$.jsx)(t.code,{children:`arrowStep`}),` is not specified, `,(0,$.jsx)(t.code,{children:`step`}),` value is used. `,(0,$.jsx)(t.code,{children:`align`}),` controls arrows placement in the input field.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234567.89')
<\/script>

<template>
<!-- Simple numeric input -->
<Input v-model="value" type="number" label="Number" />

<!-- Formatted number with locale -->
<Input v-model="value" type="number-format" language="en-US" label="Formatted" />

<!-- With range constraints -->
<Input v-model="value" type="number" :min="0" :max="100" label="From 0 to 100" />

<!-- With step and stepper arrows -->
<Input v-model="value" type="number" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />

<!-- With center alignment -->
<Input v-model="value" type="number-format" align="center" :fraction="2" label="Centered" />
</template>
`,language:`html`})]})}function Cc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Sc,{...e})}):Sc(e)}function wc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Работа с числами`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`type`}),`, `,(0,$.jsx)(t.code,{children:`fraction`}),`, `,(0,$.jsx)(t.code,{children:`language`}),`, `,(0,$.jsx)(t.code,{children:`min`}),`, `,(0,$.jsx)(t.code,{children:`max`}),`, `,(0,$.jsx)(t.code,{children:`step`}),`, `,(0,$.jsx)(t.code,{children:`arrow`}),`, `,(0,$.jsx)(t.code,{children:`arrowStep`}),` и `,(0,$.jsx)(t.code,{children:`align`}),` предназначены для управления вводом и форматированием числовых значений с поддержкой локализации и интерактивных элементов управления.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type`}),` — тип инпута (`,(0,$.jsx)(t.code,{children:`number`}),` или `,(0,$.jsx)(t.code,{children:`number-format`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`fraction`}),` — количество знаков после запятой (число, `,(0,$.jsx)(t.code,{children:`true`}),` для динамической дробной части)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`language`}),` — код локали для форматирования (например, `,(0,$.jsx)(t.code,{children:`ru-RU`}),`, `,(0,$.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`min`}),` — минимальное допустимое значение`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`max`}),` — максимальное допустимое значение`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`step`}),` — шаг изменения при клавиатурном вводе`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrow`}),` — тип управляющих стрелок (`,(0,$.jsx)(t.code,{children:`auto`}),`, `,(0,$.jsx)(t.code,{children:`stepper`}),`, `,(0,$.jsx)(t.code,{children:`carousel`}),`, `,(0,$.jsx)(t.code,{children:`none`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`arrowStep`}),` — шаг изменения при нажатии на стрелки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`align`}),` — расположение стрелок (`,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`center`}),`, `,(0,$.jsx)(t.code,{children:`right`}),`)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,$.jsx)(t.code,{children:`type`}),` определяет базовый режим ввода, где `,(0,$.jsx)(t.code,{children:`number`}),` активирует простой числовой ввод с базовой валидацией без форматирования, а `,(0,$.jsx)(t.code,{children:`number-format`}),` включает автоматическое форматирование с разделителями тысяч и десятичными знаками в зависимости от локали. `,(0,$.jsx)(t.code,{children:`language`}),` определяет региональные правила для разделителей тысяч (пробел, запятая, точка) и десятичного разделителя (точка или запятая). Свойства `,(0,$.jsx)(t.code,{children:`min`}),` и `,(0,$.jsx)(t.code,{children:`max`}),` активируют встроенную валидацию диапазона. `,(0,$.jsx)(t.code,{children:`step`}),` определяет величину инкремента/декремента при использовании клавиш стрелок вверх/вниз и Page Up/Down. Свойства `,(0,$.jsx)(t.code,{children:`arrow`}),` и `,(0,$.jsx)(t.code,{children:`arrowStep`}),` добавляют визуальные элементы управления (кнопки ± или стрелки < >) с настраиваемым шагом изменения, где если `,(0,$.jsx)(t.code,{children:`arrowStep`}),` не указан, используется значение `,(0,$.jsx)(t.code,{children:`step`}),`. `,(0,$.jsx)(t.code,{children:`align`}),` управляет расположением стрелок в поле ввода.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234567.89')
<\/script>

<template>
<!-- Простой числовой ввод -->
<Input v-model="value" type="number" label="Число" />

<!-- Форматированное число с локалью -->
<Input v-model="value" type="number-format" language="ru-RU" label="Форматированное" />

<!-- С ограничениями диапазона -->
<Input v-model="value" type="number" :min="0" :max="100" label="От 0 до 100" />

<!-- С шагом и стрелками stepper -->
<Input v-model="value" type="number" arrow="stepper" :step="5" :arrow-step="10" label="Шаг 5/10" />

<!-- С выравниванием по центру -->
<Input v-model="value" type="number-format" align="center" :fraction="2" label="По центру" />
</template>
`,language:`html`})]})}function Tc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(wc,{...e})}):wc(e)}function Ec(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Input Field Type`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`type`}),` property defines the type and behavior of the Input field.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Available values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'text'`}),` — standard text field (default value)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'search'`}),` — search field with quick clear functionality`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'number'`}),` — numeric field with basic number validation`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'number-format'`}),` — numeric field with formatting (thousands separators)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'currency'`}),` — field for currency input with currency formatting`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'email'`}),` — field for email input with corresponding validation`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'password'`}),` — field for password input (hides characters)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'datetime'`}),` — field for date and time input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'date'`}),` — field for date input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'year-month'`}),` — field for year and month input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'time'`}),` — field for time input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'hour-minute'`}),` — field for hours and minutes input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'tel'`}),` — field for telephone number input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'url'`}),` — field for web address input with URL validation`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'checkbox'`}),` — checkbox (used for boolean values)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'radio'`}),` — radio button (used for selecting one option from a group)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Each type activates corresponding validation, formatting, and input mechanisms. For the `,(0,$.jsx)(t.code,{children:`password`}),` type, a visibility toggle function is available through a special icon. Types `,(0,$.jsx)(t.code,{children:`number`}),`, `,(0,$.jsx)(t.code,{children:`number-format`}),`, and `,(0,$.jsx)(t.code,{children:`currency`}),` automatically enable formatting and restrict input to numeric values only. Types `,(0,$.jsx)(t.code,{children:`email`}),`, `,(0,$.jsx)(t.code,{children:`tel`}),`, and `,(0,$.jsx)(t.code,{children:`url`}),` apply built-in HTML5 validation and set the appropriate `,(0,$.jsx)(t.code,{children:`inputMode`}),` for mobile keyboards. Date and time related types (`,(0,$.jsx)(t.code,{children:`datetime`}),`, `,(0,$.jsx)(t.code,{children:`date`}),`, `,(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`, `,(0,$.jsx)(t.code,{children:`hour-minute`}),`) activate special input masks and value formatting.`]})]})}function Dc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ec,{...e})}):Ec(e)}function Oc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Тип поля ввода`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`type`}),` определяет тип и поведение поля ввода Input.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'text'`}),` — обычное текстовое поле (значение по умолчанию)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'search'`}),` — поле для поиска с возможностью быстрой очистки`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'number'`}),` — числовое поле с базовой валидацией чисел`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'number-format'`}),` — числовое поле с форматированием (разделители тысяч)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'currency'`}),` — поле для ввода денежных значений с форматированием валюты`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'email'`}),` — поле для ввода электронной почты с соответствующей валидацией`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'password'`}),` — поле для ввода пароля (скрывает символы)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'datetime'`}),` — поле для ввода даты и времени`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'date'`}),` — поле для ввода даты`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'year-month'`}),` — поле для ввода года и месяца`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'time'`}),` — поле для ввода времени`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'hour-minute'`}),` — поле для ввода часов и минут`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'tel'`}),` — поле для ввода телефонного номера`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'url'`}),` — поле для ввода веб-адреса с валидацией URL`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'checkbox'`}),` — чекбокс (используется для булевых значений)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'radio'`}),` — радиокнопка (используется для выбора одного варианта из группы)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Каждый тип активирует соответствующие механизмы валидации, форматирования и ввода. Для типа `,(0,$.jsx)(t.code,{children:`password`}),` доступна функция переключения видимости через специальную иконку. Типы `,(0,$.jsx)(t.code,{children:`number`}),`, `,(0,$.jsx)(t.code,{children:`number-format`}),` и `,(0,$.jsx)(t.code,{children:`currency`}),` автоматически включают форматирование и ограничивают ввод только числовыми значениями. Типы `,(0,$.jsx)(t.code,{children:`email`}),`, `,(0,$.jsx)(t.code,{children:`tel`}),` и `,(0,$.jsx)(t.code,{children:`url`}),` применяют встроенную HTML5-валидацию и устанавливают соответствующий `,(0,$.jsx)(t.code,{children:`inputMode`}),` для мобильных клавиатур. Типы, связанные с датой и временем (`,(0,$.jsx)(t.code,{children:`datetime`}),`, `,(0,$.jsx)(t.code,{children:`date`}),`, `,(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`, `,(0,$.jsx)(t.code,{children:`hour-minute`}),`), активируют специальные маски ввода и форматирование значений.`]})]})}function kc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Oc,{...e})}):Oc(e)}function Ac(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`A component for creating interactive lists with support for hierarchical data, keyboard navigation, and search functionality.`}),`
`,(0,$.jsx)(t.p,{children:`List manages the display of structured data with navigation capabilities, item selection, and interaction through keyboard and mouse. The component supports various item types (regular items, groups, menus, dividers, subtitles, HTML content), automatically handles complex hierarchical structures, and provides intuitive navigation. The built-in search system works in real-time with match highlighting across the entire data hierarchy.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Various item types (item, group, menu, line, subtitle, html)`}),`
`,(0,$.jsx)(t.li,{children:`Hierarchical structure with nested groups and menus`}),`
`,(0,$.jsx)(t.li,{children:`Full keyboard navigation (↑/↓, Enter, →, ←)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in real-time search with match highlighting`}),`
`,(0,$.jsx)(t.li,{children:`Item selection control via v-model:selected`}),`
`,(0,$.jsx)(t.li,{children:`Focus control via v-model:focus`}),`
`,(0,$.jsx)(t.li,{children:`Lightweight mode for large lists (lite)`}),`
`,(0,$.jsx)(t.li,{children:`Display axis configuration (x/y) and dividers`}),`
`,(0,$.jsx)(t.li,{children:`Click and menu close events`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Navigation menus and option lists`}),`
`,(0,$.jsx)(t.li,{children:`Dropdown lists with hierarchical structure`}),`
`,(0,$.jsx)(t.li,{children:`Product and category catalogs`}),`
`,(0,$.jsx)(t.li,{children:`Settings lists with grouping`}),`
`,(0,$.jsx)(t.li,{children:`Context menus with submenus`}),`
`,(0,$.jsx)(t.li,{children:`File and folder lists`}),`
`,(0,$.jsx)(t.li,{children:`Filters with multiple selection`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['item2'])
const focus = ref(null)

const listData = ref([
{ label: 'First item', value: 'item1' },
{ label: 'Second item', value: 'item2' },
{ type: 'line' },
{ type: 'subtitle', label: 'Item group' },
{
  label: 'Group with submenu',
  value: 'group1',
  type: 'group',
  list: [
    { label: 'Nested item 1', value: 'nested1' },
    { label: 'Nested item 2', value: 'nested2' }
  ]
}
])

const handleClick = (event) => {
console.log('Item clicked:', event.detail.value)
}
<\/script>

<template>
<List
  v-model:selected="selected"
  v-model:focus="focus"
  :list="listData"
  highlight="text"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function jc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ac,{...e})}):Ac(e)}function Mc(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания интерактивных списков с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска.`}),`
`,(0,$.jsx)(t.p,{children:`List управляет отображением структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь. Компонент поддерживает различные типы элементов (обычные элементы, группы, меню, разделители, подзаголовки, HTML-контент), автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию. Встроенная система поиска работает в реальном времени с выделением совпадений по всей иерархии данных.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Различные типы элементов (item, group, menu, line, subtitle, html)`}),`
`,(0,$.jsx)(t.li,{children:`Иерархическая структура с вложенными группами и меню`}),`
`,(0,$.jsx)(t.li,{children:`Полная клавиатурная навигация (↑/↓, Enter, →, ←)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенный поиск в реальном времени с подсветкой совпадений`}),`
`,(0,$.jsx)(t.li,{children:`Управление выбором элементов через v-model:selected`}),`
`,(0,$.jsx)(t.li,{children:`Управление фокусом через v-model:focus`}),`
`,(0,$.jsx)(t.li,{children:`Облегченный режим для больших списков (lite)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка осей отображения (x/y) и разделителей`}),`
`,(0,$.jsx)(t.li,{children:`События клика и закрытия меню`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Навигационные меню и списки опций`}),`
`,(0,$.jsx)(t.li,{children:`Выпадающие списки с иерархической структурой`}),`
`,(0,$.jsx)(t.li,{children:`Каталоги товаров и категорий`}),`
`,(0,$.jsx)(t.li,{children:`Списки настроек с группировкой`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные меню с подменю`}),`
`,(0,$.jsx)(t.li,{children:`Списки файлов и папок`}),`
`,(0,$.jsx)(t.li,{children:`Фильтры с множественным выбором`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['item2'])
const focus = ref(null)

const listData = ref([
{ label: 'Первый элемент', value: 'item1' },
{ label: 'Второй элемент', value: 'item2' },
{ type: 'line' },
{ type: 'subtitle', label: 'Группа элементов' },
{
  label: 'Группа с подменю',
  value: 'group1',
  type: 'group',
  list: [
    { label: 'Вложенный элемент 1', value: 'nested1' },
    { label: 'Вложенный элемент 2', value: 'nested2' }
  ]
}
])

const handleClick = (event) => {
console.log('Клик по элементу:', event.detail.value)
}
<\/script>

<template>
<List
  v-model:selected="selected"
  v-model:focus="focus"
  :list="listData"
  highlight="text"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function Nc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Mc,{...e})}):Mc(e)}function Pc(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Managing list performance`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`lite`}),` and `,(0,$.jsx)(t.code,{children:`liteThreshold`}),` properties work together to optimize rendering of large lists. They enable a lightweight display mode that reduces visual complexity and improves performance when the threshold number of items is exceeded.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`lite`}),` — enables lightweight list display mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`liteThreshold`}),` — item count threshold for activating simplified mode, defaults to configuration value`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Display mode is determined automatically: when `,(0,$.jsx)(t.code,{children:`lite=false`}),`, the list always renders in full mode. When `,(0,$.jsx)(t.code,{children:`lite=true`}),`, the component compares the total item count with `,(0,$.jsx)(t.code,{children:`liteThreshold`}),`. If the item count does not exceed the threshold, full mode with extended visualization is used. When the threshold is exceeded, lightweight mode is activated to reduce rendering load. Use `,(0,$.jsx)(t.code,{children:`lite`}),` for working with dynamic data of variable size.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Automatic mode switching -->
<List :list="items" :lite="true" :liteThreshold="50" />

<!-- Always full mode -->
<List :list="items" :lite="false" />

<!-- Lightweight mode for large catalogs -->
<List :list="products" :lite="true" :liteThreshold="100" />

<!-- Custom threshold for mobile devices -->
<List :list="data" :lite="true" :liteThreshold="30" />
`,language:`html`})]})}function Fc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Pc,{...e})}):Pc(e)}function Ic(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление производительностью списка`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`lite`}),` и `,(0,$.jsx)(t.code,{children:`liteThreshold`}),` работают в связке для оптимизации рендеринга больших списков. Они включают облегченный режим отображения, который снижает визуальную сложность и ускоряет производительность при превышении порогового количества элементов.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`lite`}),` — включает облегченный режим отображения списка`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`liteThreshold`}),` — порог количества элементов для активации упрощенного режима, по умолчанию зависит от конфигурации`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Режим отображения определяется автоматически: при `,(0,$.jsx)(t.code,{children:`lite=false`}),` список всегда рендерится в полном режиме. При `,(0,$.jsx)(t.code,{children:`lite=true`}),` компонент сравнивает общее количество элементов с `,(0,$.jsx)(t.code,{children:`liteThreshold`}),`. Если количество элементов не превышает порог, используется полный режим с расширенной визуализацией. При превышении порога включается облегченный режим для снижения нагрузки на рендеринг. Используйте `,(0,$.jsx)(t.code,{children:`lite`}),` для работы с динамическими данными переменного размера.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Автоматическое переключение режима -->
<List :list="items" :lite="true" :liteThreshold="50" />

<!-- Всегда полный режим -->
<List :list="items" :lite="false" />

<!-- Облегченный режим для больших каталогов -->
<List :list="products" :lite="true" :liteThreshold="100" />

<!-- Пользовательский порог для мобильных устройств -->
<List :list="data" :lite="true" :liteThreshold="30" />
`,language:`html`})]})}function Lc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ic,{...e})}):Ic(e)}function Rc(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`close`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when attempting to close the list after navigation has reached the root level.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`When it fires:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Pressing the `,(0,$.jsx)(t.strong,{children:`Escape`}),` key at the root level of the list`]}),`
`,(0,$.jsxs)(t.li,{children:[`Pressing the `,(0,$.jsx)(t.strong,{children:`←`}),` (left arrow) key when there are no open submenus/groups`]}),`
`,(0,$.jsx)(t.li,{children:`Attempting to navigate back when there are no nested items`}),`
`]})]})}function zc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Rc,{...e})}):Rc(e)}function Bc(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`close`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при попытке закрыть список, когда навигация достигла корневого уровня.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Когда срабатывает:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Нажатие клавиши `,(0,$.jsx)(t.strong,{children:`Escape`}),` на корневом уровне списка`]}),`
`,(0,$.jsxs)(t.li,{children:[`Нажатие клавиши `,(0,$.jsx)(t.strong,{children:`←`}),` (стрелка влево), когда нет открытых подменю/групп`]}),`
`,(0,$.jsx)(t.li,{children:`Попытка навигации назад при отсутствии вложенных элементов`}),`
`]})]})}function Vc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bc,{...e})}):Bc(e)}function Hc(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[value]: any`}),` — Dynamic slot for rendering custom content (Vue components or HTML) when item `,(0,$.jsx)(t.code,{children:`type`}),` is `,(0,$.jsx)(t.code,{children:`'html'`}),`. Item's `,(0,$.jsx)(t.code,{children:`value`}),` is used as slot name.`]}),`
`]})}function Uc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Hc,{...e})}):Hc(e)}function Wc(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[value]: any`}),` — Динамический слот для рендеринга пользовательского контента (Vue-компонентов или HTML), когда `,(0,$.jsx)(t.code,{children:`type`}),` элемента равен `,(0,$.jsx)(t.code,{children:`'html'`}),`. Поле `,(0,$.jsx)(t.code,{children:`value`}),` элемента используется как имя слота.`]}),`
`]})}function Gc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Wc,{...e})}):Wc(e)}function Kc(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for grouping and organizing list items with collapsible structure.`}),`
`,(0,$.jsx)(t.p,{children:`ListGroup is an auxiliary component for List, managing hierarchical content organization with expand/collapse functionality. The component integrates with MotionTransform for smooth animations, supports unlimited nesting levels, and provides convenient navigation through structured data.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Hierarchical content organization with unlimited nesting`}),`
`,(0,$.jsx)(t.li,{children:`Expand/collapse animations via MotionTransform`}),`
`,(0,$.jsx)(t.li,{children:`State management via props or internal state`}),`
`,(0,$.jsx)(t.li,{children:`Automatic group content visibility control`}),`
`,(0,$.jsx)(t.li,{children:`Integration with List component ecosystem`}),`
`,(0,$.jsx)(t.li,{children:`Customization support via head and list slots`}),`
`,(0,$.jsx)(t.li,{children:`Group state change events`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Grouping list items by categories`}),`
`,(0,$.jsx)(t.li,{children:`Creating tree-like navigation structures`}),`
`,(0,$.jsx)(t.li,{children:`Organizing settings and options by sections`}),`
`,(0,$.jsx)(t.li,{children:`Multi-level menus and catalogs`}),`
`,(0,$.jsx)(t.li,{children:`FAQ sections with expandable answers`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const items = [
{ text: 'Item 1', value: '1' },
{ text: 'Item 2', value: '2' },
{ text: 'Item 3', value: '3' }
]

const isOpen = ref(true)
<\/script>

<template>
<List>
  <ListGroup v-model:open="isOpen">
    <template #head="{ open }">
      <div class="group-header">
        <span>{{ open ? '▼' : '▶' }}</span>
        <span>Group Items</span>
      </div>
    </template>

    <template #list>
      <ListItem
        v-for="item in items"
        :key="item.value"
        :text="item.text"
      />
    </template>
  </ListGroup>
</List>
</template>
`,language:`html`})]})}function qc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Kc,{...e})}):Kc(e)}function Jc(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для группировки и организации элементов списка со сворачиваемой структурой.`}),`
`,(0,$.jsx)(t.p,{children:`ListGroup является вспомогательным компонентом для List, управляющим иерархической организацией контента с возможностью разворачивания/сворачивания групп. Компонент интегрируется с MotionTransform для плавных анимаций, поддерживает неограниченную вложенность групп и обеспечивает удобную навигацию по структурированным данным.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Иерархическая организация контента с неограниченной вложенностью`}),`
`,(0,$.jsx)(t.li,{children:`Анимации разворачивания/сворачивания групп через MotionTransform`}),`
`,(0,$.jsx)(t.li,{children:`Управление состоянием открытия через props или внутренний state`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое управление видимостью содержимого группы`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с экосистемой компонентов List`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка кастомизации через слоты head и list`}),`
`,(0,$.jsx)(t.li,{children:`События изменения состояния группы`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Группировка элементов списка по категориям`}),`
`,(0,$.jsx)(t.li,{children:`Создание древовидных структур навигации`}),`
`,(0,$.jsx)(t.li,{children:`Организация настроек и опций по разделам`}),`
`,(0,$.jsx)(t.li,{children:`Многоуровневые меню и каталоги`}),`
`,(0,$.jsx)(t.li,{children:`FAQ секции с раскрывающимися ответами`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const items = [
{ text: 'Элемент 1', value: '1' },
{ text: 'Элемент 2', value: '2' },
{ text: 'Элемент 3', value: '3' }
]

const isOpen = ref(true)
<\/script>

<template>
<List>
  <ListGroup v-model:open="isOpen">
    <template #head="{ open }">
      <div class="group-header">
        <span>{{ open ? '▼' : '▶' }}</span>
        <span>Группа элементов</span>
      </div>
    </template>

    <template #list>
      <ListItem
        v-for="item in items"
        :key="item.value"
        :text="item.text"
      />
    </template>
  </ListGroup>
</List>
</template>
`,language:`html`})]})}function Yc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Jc,{...e})}):Jc(e)}function Xc(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`head(open: boolean): any`}),` — Slot for placing the header content with toggle functionality.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`list: any`}),` — Slot for placing the list content.`]}),`
`]})}function Zc(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xc,{...e})}):Xc(e)}function Qc(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`head(open: boolean): any`}),` — Слот для размещения содержимого заголовка с функциональностью переключения.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`list: any`}),` — Слот для размещения содержимого списка.`]}),`
`]})}function $c(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Qc,{...e})}):Qc(e)}function el(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating interactive list items with flexible content structure and multiple display areas.`}),`
`,(0,$.jsx)(t.p,{children:`ListItem provides uniform presentation of items in lists, menus, and navigation structures. The component supports labels, descriptions, icons, status badges, interactive states (focus, selection, disabled), loading with progress and skeleton, and ripple effect for enhanced feedback.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Multiple content areas (label, description, prefix, suffix, caption)`}),`
`,(0,$.jsx)(t.li,{children:`Icon support with flexible positioning and alignment`}),`
`,(0,$.jsx)(t.li,{children:`Badge integration for status indicators`}),`
`,(0,$.jsx)(t.li,{children:`Interactive states (focus, selected, disabled, readonly)`}),`
`,(0,$.jsx)(t.li,{children:`Loading states with progress and skeleton`}),`
`,(0,$.jsx)(t.li,{children:`Ripple effect for visual feedback`}),`
`,(0,$.jsx)(t.li,{children:`Flexible tag variants (button, link, div, span)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in accessibility support`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`List items and navigation menus`}),`
`,(0,$.jsx)(t.li,{children:`Settings and configuration options`}),`
`,(0,$.jsx)(t.li,{children:`Lists with multiple selection`}),`
`,(0,$.jsx)(t.li,{children:`Contact lists and catalogs`}),`
`,(0,$.jsx)(t.li,{children:`Mobile interfaces and action lists`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ text: 'List item 1', value: '1', selected: false },
{ text: 'List item 2', value: '2', selected: true },
{ text: 'List item 3', value: '3', selected: false }
])

const handleClick = (item) => {
item.selected = !item.selected
console.log('Item selected:', item.text)
}
<\/script>

<template>
<List>
  <ListItem
    v-for="item in items"
    :key="item.value"
    :text="item.text"
    :selected="item.selected"
    @click="handleClick(item)"
  >
    <template #prefix>
      <Icon name="check" v-if="item.selected" />
    </template>
  </ListItem>
</List>
</template>
`,language:`html`})]})}function tl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(el,{...e})}):el(e)}function nl(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания интерактивных элементов списков с гибкой структурой контента и множественными областями отображения.`}),`
`,(0,$.jsx)(t.p,{children:`ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах. Компонент поддерживает метки, описания, иконки, значки состояния, интерактивные состояния (фокус, выбор, отключение), загрузку с прогрессом и скелетоном, а также эффект пульсации для улучшенной обратной связи.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Множественные области контента (метка, описание, префикс, суффикс, заголовок)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок с гибким позиционированием и выравниванием`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция значков для индикаторов статуса`}),`
`,(0,$.jsx)(t.li,{children:`Интерактивные состояния (фокус, выбранный, отключенный, только чтение)`}),`
`,(0,$.jsx)(t.li,{children:`Состояния загрузки с прогрессом и скелетоном`}),`
`,(0,$.jsx)(t.li,{children:`Эффект пульсации для визуальной обратной связи`}),`
`,(0,$.jsx)(t.li,{children:`Гибкие варианты тегов (button, link, div, span)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная поддержка доступности`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Элементы списков и меню навигации`}),`
`,(0,$.jsx)(t.li,{children:`Пункты настроек и конфигурации`}),`
`,(0,$.jsx)(t.li,{children:`Списки с множественным выбором`}),`
`,(0,$.jsx)(t.li,{children:`Контактные списки и каталоги`}),`
`,(0,$.jsx)(t.li,{children:`Мобильные интерфейсы и action lists`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ text: 'Элемент списка 1', value: '1', selected: false },
{ text: 'Элемент списка 2', value: '2', selected: true },
{ text: 'Элемент списка 3', value: '3', selected: false }
])

const handleClick = (item) => {
item.selected = !item.selected
console.log('Элемент выбран:', item.text)
}
<\/script>

<template>
<List>
  <ListItem
    v-for="item in items"
    :key="item.value"
    :text="item.text"
    :selected="item.selected"
    @click="handleClick(item)"
  >
    <template #prefix>
      <Icon name="check" v-if="item.selected" />
    </template>
  </ListItem>
</List>
</template>
`,language:`html`})]})}function rl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nl,{...e})}):nl(e)}function il(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Element fill color`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`fill`}),` property defines the background color of the list item element, allowing precise control over the component's visual styling.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Hex colors: `,(0,$.jsx)(t.code,{children:`#FF0000`}),`, `,(0,$.jsx)(t.code,{children:`#ffffff`}),`, `,(0,$.jsx)(t.code,{children:`#3498db`})]}),`
`,(0,$.jsxs)(t.li,{children:[`RGB: `,(0,$.jsx)(t.code,{children:`rgb(255, 0, 0)`}),`, `,(0,$.jsx)(t.code,{children:`rgb(52, 152, 219)`})]}),`
`,(0,$.jsxs)(t.li,{children:[`RGBA: `,(0,$.jsx)(t.code,{children:`rgba(255, 0, 0, 0.5)`}),`, `,(0,$.jsx)(t.code,{children:`rgba(0, 0, 0, 0.1)`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Named colors: `,(0,$.jsx)(t.code,{children:`red`}),`, `,(0,$.jsx)(t.code,{children:`blue`}),`, `,(0,$.jsx)(t.code,{children:`green`}),`, `,(0,$.jsx)(t.code,{children:`transparent`})]}),`
`,(0,$.jsxs)(t.li,{children:[`HSL/HSLA: `,(0,$.jsx)(t.code,{children:`hsl(0, 100%, 50%)`}),`, `,(0,$.jsx)(t.code,{children:`hsla(210, 70%, 53%, 0.8)`})]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Accepts any standard CSS color format. The property provides a flexible way to customize the visual presentation of list items, allowing you to create color schemes and highlight important elements. The value is applied as background-color to the component's root element.`}),`
`,(0,$.jsx)(a,{code:`
<!-- Red background -->
<ListItem fill="#FF0000" text="Item with red background" />

<!-- Semi-transparent blue -->
<ListItem fill="rgba(52, 152, 219, 0.3)" text="Semi-transparent item" />

<!-- Named color -->
<ListItem fill="lightblue" text="Light blue item" />
`,language:`html`})]})}function al(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(il,{...e})}):il(e)}function ol(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Цвет заливки элемента`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`fill`}),` определяет цвет фона элемента списка, позволяя точно контролировать визуальное оформление компонента.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Hex-цвета: `,(0,$.jsx)(t.code,{children:`#FF0000`}),`, `,(0,$.jsx)(t.code,{children:`#ffffff`}),`, `,(0,$.jsx)(t.code,{children:`#3498db`})]}),`
`,(0,$.jsxs)(t.li,{children:[`RGB: `,(0,$.jsx)(t.code,{children:`rgb(255, 0, 0)`}),`, `,(0,$.jsx)(t.code,{children:`rgb(52, 152, 219)`})]}),`
`,(0,$.jsxs)(t.li,{children:[`RGBA: `,(0,$.jsx)(t.code,{children:`rgba(255, 0, 0, 0.5)`}),`, `,(0,$.jsx)(t.code,{children:`rgba(0, 0, 0, 0.1)`})]}),`
`,(0,$.jsxs)(t.li,{children:[`Именованные цвета: `,(0,$.jsx)(t.code,{children:`red`}),`, `,(0,$.jsx)(t.code,{children:`blue`}),`, `,(0,$.jsx)(t.code,{children:`green`}),`, `,(0,$.jsx)(t.code,{children:`transparent`})]}),`
`,(0,$.jsxs)(t.li,{children:[`HSL/HSLA: `,(0,$.jsx)(t.code,{children:`hsl(0, 100%, 50%)`}),`, `,(0,$.jsx)(t.code,{children:`hsla(210, 70%, 53%, 0.8)`})]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Принимает любой стандартный CSS-формат цвета. Свойство предоставляет гибкий способ настройки визуального представления элементов списка, позволяя создавать цветовые схемы и выделять важные элементы. Значение применяется как background-color к корневому элементу компонента.`}),`
`,(0,$.jsx)(a,{code:`
<!-- Красный фон -->
<ListItem fill="#FF0000" text="Элемент с красным фоном" />

<!-- Полупрозрачный синий -->
<ListItem fill="rgba(52, 152, 219, 0.3)" text="Полупрозрачный элемент" />

<!-- Именованный цвет -->
<ListItem fill="lightblue" text="Светло-голубой элемент" />
`,language:`html`})]})}function sl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ol,{...e})}):ol(e)}function cl(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`body: any`}),` — Slot for placing additional content at the bottom of the list item.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing: any`}),` — Slot for placing controls or indicators at the end of the list item.`]}),`
`]})}function ll(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(cl,{...e})}):cl(e)}function ul(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`body: any`}),` — Слот для размещения дополнительного контента в нижней части элемента списка.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`trailing: any`}),` — Слот для размещения элементов управления или индикаторов в конце элемента списка.`]}),`
`]})}function dl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ul,{...e})}):ul(e)}function fl(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating nested menus and organizing navigation elements with expandable structure.`}),`
`,(0,$.jsx)(t.p,{children:`ListMenu is an auxiliary component for List, managing hierarchical menu structure with open/close submenu functionality. The component integrates with Window for positioning dropdown submenus, supports multiple nesting levels, and provides smooth navigation through tree-like data structures.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Hierarchical menu organization with unlimited nesting`}),`
`,(0,$.jsx)(t.li,{children:`Open/close submenu state management`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Window for dropdown menu positioning`}),`
`,(0,$.jsx)(t.li,{children:`Support for horizontal and vertical positioning axes`}),`
`,(0,$.jsx)(t.li,{children:`Automatic click and navigation handling`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive submenu behavior`}),`
`,(0,$.jsx)(t.li,{children:`Menu item open/close events`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Navigation menus with subsections`}),`
`,(0,$.jsx)(t.li,{children:`Multi-level catalogs and categories`}),`
`,(0,$.jsx)(t.li,{children:`Tree-like data structures`}),`
`,(0,$.jsx)(t.li,{children:`Context menus with submenus`}),`
`,(0,$.jsx)(t.li,{children:`Navigation panels with grouping`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const menuItems = ref([
{
  text: 'Home',
  value: 'home'
},
{
  text: 'Products',
  value: 'products',
  sublist: [
    { text: 'Category 1', value: 'cat1' },
    { text: 'Category 2', value: 'cat2' }
  ]
},
{
  text: 'About',
  value: 'about'
}
])
<\/script>

<template>
<List :items="menuItems">
  <template #item="{ item }">
    <ListMenu
      v-if="item.sublist"
      :items="item.sublist"
      :axis="'y'"
    >
      <template #default>
        {{ item.text }}
      </template>
    </ListMenu>
    <div v-else>{{ item.text }}</div>
  </template>
</List>
</template>
`,language:`html`})]})}function pl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(fl,{...e})}):fl(e)}function ml(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой.`}),`
`,(0,$.jsx)(t.p,{children:`ListMenu является вспомогательным компонентом для List, управляющим иерархической структурой меню с возможностью открытия/закрытия подменю. Компонент интегрируется с Window для позиционирования выпадающих подменю, поддерживает множественные уровни вложенности и обеспечивает плавную навигацию по древовидной структуре данных.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Иерархическая организация меню с неограниченной вложенностью`}),`
`,(0,$.jsx)(t.li,{children:`Управление состоянием открытия/закрытия подменю`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с Window для позиционирования выпадающих меню`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка горизонтальной и вертикальной осей позиционирования`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическая обработка кликов и навигации`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивное поведение подменю`}),`
`,(0,$.jsx)(t.li,{children:`События открытия/закрытия элементов меню`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Навигационные меню с подразделами`}),`
`,(0,$.jsx)(t.li,{children:`Многоуровневые каталоги и категории`}),`
`,(0,$.jsx)(t.li,{children:`Древовидные структуры данных`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные меню с подменю`}),`
`,(0,$.jsx)(t.li,{children:`Панели навигации с группировкой`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const menuItems = ref([
{
  text: 'Главная',
  value: 'home'
},
{
  text: 'Продукты',
  value: 'products',
  sublist: [
    { text: 'Категория 1', value: 'cat1' },
    { text: 'Категория 2', value: 'cat2' }
  ]
},
{
  text: 'О нас',
  value: 'about'
}
])
<\/script>

<template>
<List :items="menuItems">
  <template #item="{ item }">
    <ListMenu
      v-if="item.sublist"
      :items="item.sublist"
      :axis="'y'"
    >
      <template #default>
        {{ item.text }}
      </template>
    </ListMenu>
    <div v-else>{{ item.text }}</div>
  </template>
</List>
</template>
`,language:`html`})]})}function hl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ml,{...e})}):ml(e)}function gl(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`A component for creating input fields with automatic data formatting according to a specified pattern in real-time.`}),`
`,(0,$.jsxs)(t.p,{children:[`Mask provides structured input with support for various formats (phones, bank cards, dates, currencies, numbers). The component automatically adds separators and literal characters during typing, restricts input to only allowed characters, supports multiple patterns with automatic selection of the most suitable one, works together with the validation system through `,(0,$.jsx)(t.code,{children:`pattern`}),` and `,(0,$.jsx)(t.code,{children:`check`}),`, and provides built-in mask types for common data formats.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic formatting with separator addition`}),`
`,(0,$.jsx)(t.li,{children:`Flexible templates with support for single and multiple masks`}),`
`,(0,$.jsx)(t.li,{children:`Built-in types: text, number, number-format, currency, date, time`}),`
`,(0,$.jsxs)(t.li,{children:[`Customizable special characters via `,(0,$.jsx)(t.code,{children:`special`}),` property`]}),`
`,(0,$.jsx)(t.li,{children:`Input error prevention with character restriction`}),`
`,(0,$.jsxs)(t.li,{children:[`Integration with validation system through `,(0,$.jsx)(t.code,{children:`pattern`}),` and `,(0,$.jsx)(t.code,{children:`check`})]}),`
`,(0,$.jsx)(t.li,{children:`Alignment support (left/right) and direction (ltr/rtl)`}),`
`,(0,$.jsx)(t.li,{children:`Rubber groups with dynamic length`}),`
`,(0,$.jsx)(t.li,{children:`Visibility control for unfilled characters`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Phone number input fields`}),`
`,(0,$.jsx)(t.li,{children:`Bank card numbers and CVV codes`}),`
`,(0,$.jsx)(t.li,{children:`Dates and times in various formats`}),`
`,(0,$.jsx)(t.li,{children:`Postal codes and identifiers`}),`
`,(0,$.jsx)(t.li,{children:`Currency amounts with formatting`}),`
`,(0,$.jsx)(t.li,{children:`Numeric values with separators`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
const date = ref('')
const amount = ref('')

const handleInput = (value) => {
console.log('Entered value:', value)
}
<\/script>

<template>
<!-- Russian phone -->
<Mask
  v-model="phone"
  mask="+7 *** *** ** **"
  placeholder="Enter phone number"
  @input="handleInput"
/>

<!-- Bank card -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  placeholder="0000 0000 0000 0000"
/>

<!-- Multiple phone formats -->
<Mask
  v-model="phone"
  :mask="['+7 *** *** ** **', '8 *** *** ** **']"
/>

<!-- Date with built-in type -->
<Mask
  v-model="date"
  type="date"
  pattern="DD.MM.YYYY"
/>

<!-- Currency -->
<Mask
  v-model="amount"
  type="currency"
  currency="RUB"
/>
</template>
`,language:`html`})]})}function _l(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(gl,{...e})}):gl(e)}function vl(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания полей ввода с автоматическим форматированием данных по заданному шаблону в реальном времени.`}),`
`,(0,$.jsxs)(t.p,{children:[`Mask обеспечивает структурированный ввод с поддержкой различных форматов (телефоны, банковские карты, даты, валюты, числа). Компонент автоматически добавляет разделители и литеральные символы во время набора, ограничивает ввод только допустимыми символами, поддерживает множественные шаблоны с автоматическим выбором наиболее подходящего, работает совместно с системой валидации через `,(0,$.jsx)(t.code,{children:`pattern`}),` и `,(0,$.jsx)(t.code,{children:`check`}),`, и предоставляет встроенные типы масок для распространенных форматов данных.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое форматирование с добавлением разделителей`}),`
`,(0,$.jsx)(t.li,{children:`Гибкие шаблоны с поддержкой одиночных и множественных масок`}),`
`,(0,$.jsx)(t.li,{children:`Встроенные типы: text, number, number-format, currency, date, time`}),`
`,(0,$.jsxs)(t.li,{children:[`Настраиваемые специальные символы через свойство `,(0,$.jsx)(t.code,{children:`special`})]}),`
`,(0,$.jsx)(t.li,{children:`Предотвращение ошибок ввода с ограничением символов`}),`
`,(0,$.jsxs)(t.li,{children:[`Интеграция с системой валидации через `,(0,$.jsx)(t.code,{children:`pattern`}),` и `,(0,$.jsx)(t.code,{children:`check`})]}),`
`,(0,$.jsx)(t.li,{children:`Поддержка выравнивания (left/right) и направления (ltr/rtl)`}),`
`,(0,$.jsx)(t.li,{children:`Резиновые группы с динамической длиной`}),`
`,(0,$.jsx)(t.li,{children:`Управление видимостью незаполненных символов`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Поля ввода телефонных номеров`}),`
`,(0,$.jsx)(t.li,{children:`Номера банковских карт и CVV-кодов`}),`
`,(0,$.jsx)(t.li,{children:`Даты и время в различных форматах`}),`
`,(0,$.jsx)(t.li,{children:`Почтовые индексы и коды`}),`
`,(0,$.jsx)(t.li,{children:`Валютные суммы с форматированием`}),`
`,(0,$.jsx)(t.li,{children:`Числовые значения с разделителями`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
const date = ref('')
const amount = ref('')

const handleInput = (value) => {
console.log('Введено значение:', value)
}
<\/script>

<template>
<!-- Российский телефон -->
<Mask
  v-model="phone"
  mask="+7 *** *** ** **"
  placeholder="Введите номер телефона"
  @input="handleInput"
/>

<!-- Банковская карта -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  placeholder="0000 0000 0000 0000"
/>

<!-- Множественные форматы телефонов -->
<Mask
  v-model="phone"
  :mask="['+7 *** *** ** **', '8 *** *** ** **']"
/>

<!-- Дата с встроенным типом -->
<Mask
  v-model="date"
  type="date"
  pattern="DD.MM.YYYY"
/>

<!-- Валюта -->
<Mask
  v-model="amount"
  type="currency"
  currency="RUB"
/>
</template>
`,language:`html`})]})}function yl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vl,{...e})}):vl(e)}function bl(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Date and time types`}),`
`,(0,$.jsx)(t.p,{children:`Date types in Mask provide automatic formatting and validation for date and time input with localization support.`}),`
`,(0,$.jsxs)(t.p,{children:[`All date types automatically create masks according to regional settings, ignoring the `,(0,$.jsx)(t.code,{children:`mask`}),` property. The mask is determined by locale via `,(0,$.jsx)(t.code,{children:`language`}),` (DD.MM.YYYY for ru). Validation checks for correct numbers, days in month, and value ranges.`]}),`
`,(0,$.jsx)(t.h3,{children:`Types`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`date`}),` — full date in locale format (MM/DD/YYYY for US)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`datetime`}),` — date and time (HH:MM) separated by space`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`full`}),` — full date and time with seconds (HH:MM:SS)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`time`}),` — time in HH:MM:SS format`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`hour-minute`}),` — hours and minutes (HH:MM)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`hour`}),`, `,(0,$.jsx)(t.code,{children:`minute`}),`, `,(0,$.jsx)(t.code,{children:`second`}),` — separate time components`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`year`}),`, `,(0,$.jsx)(t.code,{children:`month`}),`, `,(0,$.jsx)(t.code,{children:`day`}),` — separate date components`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`day-month`}),` — date component combinations`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Localization`}),`
`,(0,$.jsxs)(t.p,{children:[`Formats adapt via the `,(0,$.jsx)(t.code,{children:`language`}),` property:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ru`}),`, `,(0,$.jsx)(t.code,{children:`de`}),` — DD.MM.YYYY (31.12.2024)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`en-US`}),` — MM/DD/YYYY (12/31/2024)`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Examples`}),`
`,(0,$.jsx)(a,{code:`
<!-- US date format -->
<Mask type="date" language="en-US" />

<!-- Full date and time -->
<Mask type="datetime" language="en-US" />

<!-- Russian date format -->
<Mask type="date" language="ru" />

<!-- Time only -->
<Mask type="time" />
`,language:`html`})]})}function xl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bl,{...e})}):bl(e)}function Sl(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Типы дат и времени`}),`
`,(0,$.jsx)(t.p,{children:`Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации.`}),`
`,(0,$.jsxs)(t.p,{children:[`Все типы дат автоматически создают маски согласно региональным настройкам, игнорируя свойство `,(0,$.jsx)(t.code,{children:`mask`}),`. Маска определяется локалью через `,(0,$.jsx)(t.code,{children:`language`}),` (DD.MM.YYYY для ru). Валидация проверяет корректность чисел, дней в месяце и диапазонов.`]}),`
`,(0,$.jsx)(t.h3,{children:`Типы`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`date`}),` — полная дата в формате локали (DD.MM.YYYY для ru)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`datetime`}),` — дата и время (HH:MM) через пробел`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`full`}),` — полная дата и время с секундами (HH:MM:SS)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`time`}),` — время в формате HH:MM:SS`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`hour-minute`}),` — часы и минуты (HH:MM)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`hour`}),`, `,(0,$.jsx)(t.code,{children:`minute`}),`, `,(0,$.jsx)(t.code,{children:`second`}),` — компоненты времени`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`year`}),`, `,(0,$.jsx)(t.code,{children:`month`}),`, `,(0,$.jsx)(t.code,{children:`day`}),` — компоненты даты`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`year-month`}),`, `,(0,$.jsx)(t.code,{children:`day-month`}),` — комбинации даты`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Локализация`}),`
`,(0,$.jsxs)(t.p,{children:[`Форматы адаптируются через свойство `,(0,$.jsx)(t.code,{children:`language`}),`:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ru`}),`, `,(0,$.jsx)(t.code,{children:`de`}),` — DD.MM.YYYY (31.12.2024)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`en-US`}),` — MM/DD/YYYY (12/31/2024)`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Примеры`}),`
`,(0,$.jsx)(a,{code:`
<!-- Русский формат даты -->
<Mask type="date" language="ru" />

<!-- Полная дата и время -->
<Mask type="datetime" language="ru" />

<!-- Английский формат даты -->
<Mask type="date" language="en-US" />

<!-- Только время -->
<Mask type="time" />
`,language:`html`})]})}function Cl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Sl,{...e})}):Sl(e)}function wl(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: Ref<string>`}),` — Final formatted mask value.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueBasic: Ref<string>`}),` — Basic mask value without formatting (only entered characters).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`set(value: string): boolean`}),` — Sets new value and reinitializes the mask. Returns `,(0,$.jsx)(t.code,{children:`true`}),` if changed.`]}),`
`]})}function Tl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(wl,{...e})}):wl(e)}function El(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: Ref<string>`}),` — Итоговое отформатированное значение маски.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`valueBasic: Ref<string>`}),` — Базовое значение маски без форматирования (только введённые символы).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`set(value: string): boolean`}),` — Устанавливает новое значение и переинициализирует маску. Возвращает `,(0,$.jsx)(t.code,{children:`true`}),`, если значение было изменено.`]}),`
`]})}function Dl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(El,{...e})}):El(e)}function Ol(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Preserving groups on deletion`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`groupSave`}),` property controls behavior when deleting characters in a mask with multiple types of special characters.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — preserves group separation on deletion (default)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — allows characters from different groups to mix on deletion`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`With `,(0,$.jsx)(t.code,{children:`groupSave: true`}),` and different groups ahead, the character is not physically deleted but marked with a deletion marker, preserving the mask structure. With `,(0,$.jsx)(t.code,{children:`false`}),`, characters are deleted completely, which can lead to "collapsing" of groups and loss of structure. Only works for fixed (non-rubber) groups of special characters.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Preserve group structure (default) -->
<Mask
mask="***-###"
:special="['*', '#']"
groupSave
/>

<!-- Without structure preservation -->
<Mask
mask="***-###"
:special="['*', '#']"
:groupSave="false"
/>
`,language:`html`})]})}function kl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ol,{...e})}):Ol(e)}function Al(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Сохранение групп при удалении`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`groupSave`}),` управляет поведением при удалении символов в маске с несколькими типами специальных символов.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — сохраняет разделение групп при удалении (по умолчанию)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),` — позволяет символам из разных групп смешиваться при удалении`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`При `,(0,$.jsx)(t.code,{children:`groupSave: true`}),` и наличии разных групп впереди символ не удаляется физически, а помечается маркером удаления, сохраняя структуру маски. При `,(0,$.jsx)(t.code,{children:`false`}),` символы удаляются полностью, что может привести к "схлопыванию" групп и потере структуры. Работает только для фиксированных (не резиновых) групп специальных символов.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Сохранение структуры групп (по умолчанию) -->
<Mask
mask="***-###"
:special="['*', '#']"
groupSave
/>

<!-- Без сохранения структуры -->
<Mask
mask="***-###"
:special="['*', '#']"
:groupSave="false"
/>
`,language:`html`})]})}function jl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Al,{...e})}):Al(e)}function Ml(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Mask template`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`mask`}),` property defines a template for structured data input with automatic real-time formatting.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string`}),` — single mask for fixed format`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string[]`}),` — array of masks to support multiple formats with automatic selection`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The template uses two types of characters: special characters (default `,(0,$.jsx)(t.code,{children:`*`}),`) denote positions for user input, while literal characters are inserted automatically and cannot be changed. The component automatically adds separators during typing and restricts input to only allowed characters in corresponding positions. When using an array of masks, the system automatically selects the most suitable template based on entered data. Works together with the validation system through `,(0,$.jsx)(t.code,{children:`pattern`}),` and `,(0,$.jsx)(t.code,{children:`check`}),` properties. For built-in types (`,(0,$.jsx)(t.code,{children:`currency`}),`, `,(0,$.jsx)(t.code,{children:`number`}),`, `,(0,$.jsx)(t.code,{children:`date`}),`), masks are generated automatically based on regional settings.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Russian phone -->
<Mask mask="+7 *** *** ** **" />

<!-- Bank card -->
<Mask mask="**** **** **** ****" />

<!-- Multiple formats -->
<Mask :mask="['+7 *** *** ** **', '8 *** *** ** **']" />
`,language:`html`})]})}function Nl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ml,{...e})}):Ml(e)}function Pl(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Шаблон маски`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`mask`}),` определяет шаблон для структурированного ввода данных с автоматическим форматированием в реальном времени.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string`}),` — одиночная маска для фиксированного формата`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string[]`}),` — массив масок для поддержки множественных форматов с автоматическим выбором`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`В шаблоне используются два типа символов: специальные символы (по умолчанию `,(0,$.jsx)(t.code,{children:`*`}),`) обозначают позиции для пользовательского ввода, а литеральные символы вставляются автоматически и не могут быть изменены. Компонент автоматически добавляет разделители во время набора и ограничивает ввод только допустимыми символами в соответствующих позициях. При использовании массива масок система автоматически выбирает наиболее подходящий шаблон на основе введённых данных. Работает совместно с системой валидации через свойства `,(0,$.jsx)(t.code,{children:`pattern`}),` и `,(0,$.jsx)(t.code,{children:`check`}),`. Для встроенных типов (`,(0,$.jsx)(t.code,{children:`currency`}),`, `,(0,$.jsx)(t.code,{children:`number`}),`, `,(0,$.jsx)(t.code,{children:`date`}),`) маски генерируются автоматически на основе региональных настроек.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Российский телефон -->
<Mask mask="+7 *** *** ** **" />

<!-- Банковская карта -->
<Mask mask="**** **** **** ****" />

<!-- Множественные форматы -->
<Mask :mask="['+7 *** *** ** **', '8 *** *** ** **']" />
`,language:`html`})]})}function Fl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Pl,{...e})}):Pl(e)}function Il(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Input character validation`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`match`}),` property defines a regular expression for checking the validity of entered characters.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`RegExp`}),` — regular expression (default `,(0,$.jsx)(t.code,{children:`/[0-9]/`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string`}),` — string converted to regular expression`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Checks each character during input. Characters that don't match the expression are ignored. Local `,(0,$.jsx)(t.code,{children:`match`}),` in group settings (`,(0,$.jsx)(t.code,{children:`special[group].match`}),`) takes priority over global. Differs from `,(0,$.jsx)(t.code,{children:`pattern`}),` in that `,(0,$.jsx)(t.code,{children:`match`}),` is a simple regular expression check, while `,(0,$.jsx)(t.code,{children:`pattern`}),` can be a function with access to mask state.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Digits only (default) -->
<Mask mask="***-***" />

<!-- HEX characters -->
<Mask mask="***-***" :match="/[A-F0-9]/i" />

<!-- Different rules for groups -->
<Mask
mask="***-###"
match="\\d"
:special="{
  '*': {},
  '#': { match: /[A-Z]/ }
}"
/>
`,language:`html`})]})}function Ll(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Il,{...e})}):Il(e)}function Rl(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Валидация вводимых символов`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`match`}),` определяет регулярное выражение для проверки допустимости вводимых символов.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`RegExp`}),` — регулярное выражение (по умолчанию `,(0,$.jsx)(t.code,{children:`/[0-9]/`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string`}),` — строка, преобразуется в регулярное выражение`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Проверяет каждый символ при вводе. Символы, не соответствующие выражению, игнорируются. Локальный `,(0,$.jsx)(t.code,{children:`match`}),` в настройках группы (`,(0,$.jsx)(t.code,{children:`special[группа].match`}),`) имеет приоритет над глобальным. Отличается от `,(0,$.jsx)(t.code,{children:`pattern`}),` тем, что `,(0,$.jsx)(t.code,{children:`match`}),` — простая проверка регулярным выражением, а `,(0,$.jsx)(t.code,{children:`pattern`}),` может быть функцией с доступом к состоянию маски.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Только цифры (по умолчанию) -->
<Mask mask="***-***" />

<!-- HEX-символы -->
<Mask mask="***-***" :match="/[A-F0-9]/i" />

<!-- Разные правила для групп -->
<Mask
mask="***-###"
match="\\d"
:special="{
  '*': {},
  '#': { match: /[A-Z]/ }
}"
/>
`,language:`html`})]})}function zl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Rl,{...e})}):Rl(e)}function Bl(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Numeric mask types`}),`
`,(0,$.jsx)(t.p,{children:`Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data.`}),`
`,(0,$.jsxs)(t.p,{children:[`Numeric types automatically create rubber masks with variable length, ignoring the `,(0,$.jsx)(t.code,{children:`mask`}),` property. Negative values and `,(0,$.jsx)(t.code,{children:`min`}),`/`,(0,$.jsx)(t.code,{children:`max`}),` constraints are supported. Thousand separators and decimal places (via the `,(0,$.jsx)(t.code,{children:`fraction`}),` parameter) adapt based on the selected locale.`]}),`
`,(0,$.jsx)(t.h3,{children:`Types`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`number`}),` — simple numeric mask without formatting`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`number-format`}),` — numbers with automatic thousand separators`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`currency`}),` — currency with symbol (₽, $, €) and formatting`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Property fraction`}),`
`,(0,$.jsx)(t.p,{children:`Defines the number of decimal places:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`number`}),` — fixed number of digits (e.g., `,(0,$.jsx)(t.code,{children:`2`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — auto-detection from input`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),`, `,(0,$.jsx)(t.code,{children:`0`}),` — integers only`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Localization`}),`
`,(0,$.jsxs)(t.p,{children:[`Formats adapt via the `,(0,$.jsx)(t.code,{children:`language`}),` property:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ru`}),` — `,(0,$.jsx)(t.code,{children:`1 234,56`}),` (space and comma)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`en-US`}),` — `,(0,$.jsx)(t.code,{children:`1,234.56`}),` (comma and dot)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`de`}),` — `,(0,$.jsx)(t.code,{children:`1.234,56`}),` (dot and comma)`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Examples`}),`
`,(0,$.jsx)(a,{code:`
<!-- Formatted number -->
<Mask type="number-format" language="en-US" :fraction="2" />

<!-- Currency -->
<Mask type="currency" currency="USD" language="en-US" />

<!-- Currency without symbol -->
<Mask type="currency" currency="USD" :currencyHide="true" />
`,language:`html`})]})}function Vl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bl,{...e})}):Bl(e)}function Hl(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Числовые типы масок`}),`
`,(0,$.jsx)(t.p,{children:`Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными.`}),`
`,(0,$.jsxs)(t.p,{children:[`Числовые типы автоматически создают резиновые маски переменной длины, игнорируя свойство `,(0,$.jsx)(t.code,{children:`mask`}),`. Поддерживаются отрицательные значения и ограничения `,(0,$.jsx)(t.code,{children:`min`}),`/`,(0,$.jsx)(t.code,{children:`max`}),`. Разделители разрядов и дробной части (параметр `,(0,$.jsx)(t.code,{children:`fraction`}),`) адаптируются под выбранную локаль.`]}),`
`,(0,$.jsx)(t.h3,{children:`Типы`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`number`}),` — простая числовая маска без форматирования`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`number-format`}),` — числа с автоматическими разделителями разрядов`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`currency`}),` — валюта с символом (₽, $, €) и форматированием`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Свойство fraction`}),`
`,(0,$.jsx)(t.p,{children:`Определяет количество знаков после запятой:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`number`}),` — фиксированное количество знаков (например, `,(0,$.jsx)(t.code,{children:`2`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`true`}),` — автоопределение по вводу`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`false`}),`, `,(0,$.jsx)(t.code,{children:`0`}),` — только целые числа`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Локализация`}),`
`,(0,$.jsxs)(t.p,{children:[`Форматы адаптируются через свойство `,(0,$.jsx)(t.code,{children:`language`}),`:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ru`}),` — `,(0,$.jsx)(t.code,{children:`1 234,56`}),` (пробел и запятая)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`en-US`}),` — `,(0,$.jsx)(t.code,{children:`1,234.56`}),` (запятая и точка)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`de`}),` — `,(0,$.jsx)(t.code,{children:`1.234,56`}),` (точка и запятая)`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Примеры`}),`
`,(0,$.jsx)(a,{code:`
<!-- Форматированное число -->
<Mask type="number-format" language="ru" :fraction="2" />

<!-- Валюта -->
<Mask type="currency" currency="RUB" language="ru" />

<!-- Валюта без символа -->
<Mask type="currency" currency="USD" :currencyHide="true" />
`,language:`html`})]})}function Ul(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Hl,{...e})}):Hl(e)}function Wl(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Validation and patterns`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`pattern`}),` and `,(0,$.jsx)(t.code,{children:`check`}),` properties are designed for managing input validation in the mask.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`pattern`}),` — defines validation patterns for individual mask groups, checking entered values`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`check`}),` — global validation pattern applied after the mask is fully completed`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work sequentially: `,(0,$.jsx)(t.code,{children:`pattern`}),` validates entered values at the mask group level, highlighting validation errors after input. Characters are entered into the field, but when they don't match the pattern, an error message is displayed. Each group (defined by special characters) receives its own pattern. After the mask is fully filled, `,(0,$.jsx)(t.code,{children:`check`}),` performs final validation of the entire value, providing an additional layer of verification for complex business logic. Both properties are optional and can be used independently or together for multi-level protection against incorrect data.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
<\/script>

<template>
<!-- Pattern for groups: digits only -->
<Mask
  v-model="phone"
  mask="+7 (***) ***-**-**"
  pattern="\\d"
/>

<!-- Pattern with function for different groups -->
<Mask
  v-model="phone"
  mask="DD/MM/YYYY"
  :special="{
    'D': {
      pattern: (masks) => {
        const value = masks['D']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '3') return '[0-1]'
        return '\\d'
      }
    },
    'M': {
      pattern: (masks) => {
        const value = masks['M']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '1') return '[0-2]'
        return '\\d'
      }
    },
    'Y': { pattern: '\\d' }
  }"
/>

<!-- Check for final validation -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  pattern="\\d"
  :check="(maskData) => {
    const number = maskData.value.replace(/s/g, '')
    return isValidLuhn(number) ? {} : {
      validationMessage: 'Invalid card number'
    }
  }"
/>
</template>
`,language:`html`})]})}function Gl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Wl,{...e})}):Wl(e)}function Kl(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Валидация и паттерны`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`pattern`}),` и `,(0,$.jsx)(t.code,{children:`check`}),` предназначены для управления валидацией ввода в маске.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`pattern`}),` — определяет паттерны валидации для отдельных групп маски, проверяя введённые значения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`check`}),` — глобальный паттерн валидации, применяемый после полного заполнения маски`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают последовательно: `,(0,$.jsx)(t.code,{children:`pattern`}),` проверяет введённые значения на уровне групп маски, подсвечивая ошибки валидации после ввода. Символы вводятся в поле, но при несоответствии паттерну отображается сообщение об ошибке. Каждая группа (определённая специальными символами) получает свой паттерн. После полного заполнения маски `,(0,$.jsx)(t.code,{children:`check`}),` выполняет финальную валидацию всего значения, обеспечивая дополнительный слой проверки для сложной бизнес-логики. Оба свойства опциональны и могут использоваться независимо или совместно для многоуровневой защиты от некорректных данных.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
<\/script>

<template>
<!-- Pattern для групп: только цифры -->
<Mask
  v-model="phone"
  mask="+7 (***) ***-**-**"
  pattern="\\d"
/>

<!-- Pattern с функцией для разных групп -->
<Mask
  v-model="phone"
  mask="DD/MM/YYYY"
  :special="{
    'D': {
      pattern: (masks) => {
        const value = masks['D']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '3') return '[0-1]'
        return '\\d'
      }
    },
    'M': {
      pattern: (masks) => {
        const value = masks['M']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '1') return '[0-2]'
        return '\\d'
      }
    },
    'Y': { pattern: '\\d' }
  }"
/>

<!-- Check для финальной валидации -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  pattern="\\d"
  :check="(maskData) => {
    const number = maskData.value.replace(/s/g, '')
    return isValidLuhn(number) ? {} : {
      validationMessage: 'Неверный номер карты'
    }
  }"
/>
</template>
`,language:`html`})]})}function ql(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Kl,{...e})}):Kl(e)}function Jl(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Special characters`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`special`}),` property defines special characters to denote user input positions in the mask and configure their extended behavior.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string`}),` — single special character (default `,(0,$.jsx)(t.code,{children:`'*'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string[]`}),` — array of special characters for different group types`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` — object with extended configuration for each character`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Special characters in the mask template denote positions where users can enter data, unlike literal characters that are inserted automatically.`}),`
`,(0,$.jsxs)(t.p,{children:[`When using a simple string (e.g., `,(0,$.jsx)(t.code,{children:`special="*"`}),`), all input positions in the mask are restricted by the same validation rules.`]}),`
`,(0,$.jsxs)(t.p,{children:[`An array of characters (e.g., `,(0,$.jsx)(t.code,{children:`special="['*', 'A', '#']"`}),`) allows creating different group types with individual constraints: one group for digits, another for letters, a third for special characters.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Object notation `,(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` (see `,(0,$.jsx)(t.a,{href:`#maskspeciallist`,children:`detailed description below`}),`) provides maximum flexibility. Each special character is configured separately with the ability to set default values, rubber groups with variable length, auto-transition characters, and custom validation.`]}),`
`,(0,$.jsxs)(t.p,{children:[`For built-in types (`,(0,$.jsx)(t.code,{children:`currency`}),`, `,(0,$.jsx)(t.code,{children:`number`}),`, `,(0,$.jsx)(t.code,{children:`date`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`), the system automatically generates special characters considering regional settings, ignoring the user-defined `,(0,$.jsx)(t.code,{children:`special`}),` value.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Simple special character -->
<Mask mask="***-***" special="*" />

<!-- Multiple group types -->
<Mask mask="AA*-###" :special="['A', '*', '#']" />

<!-- Extended configuration -->
<Mask
mask="***-***"
:special="{
  '*': {
    pattern: '\\d',
    view: '_',
    rubber: true,
    minLength: 2,
    maxLength: 8,
    transitionChar: ' '
  }
}"
/>

<!-- Groups with default values -->
<Mask
mask="DD/MM/YYYY"
:special="{
  'D': { defaultValue: '01', pattern: '\\d' },
  'M': { defaultValue: '01', pattern: '\\d' },
  'Y': { defaultValue: '2024', pattern: '\\d' }
}"
/>
`,language:`html`}),`
`,(0,$.jsx)(t.h2,{children:`MaskSpecialList`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` is an extended configuration object that allows for fine-tuned control over the behavior of each special character in the mask. Each key in the object corresponds to one of the characters defined in the `,(0,$.jsx)(t.code,{children:`special`}),` property (or the default `,(0,$.jsx)(t.code,{children:`*`}),` character).`]}),`
`,(0,$.jsx)(t.h3,{children:`MaskSpecialItem Properties`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`defaultValue?: string`}),` — `,(0,$.jsx)(t.strong,{children:`initial value`}),`. Automatically populates the group on initialization. The user can modify it if the `,(0,$.jsx)(t.code,{children:`match`}),` rules allow.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`rubber?: boolean`}),` — `,(0,$.jsx)(t.strong,{children:`rubber mode`}),`. Enables dynamic length for the group. In the mask template, such a group is typically represented by one or more identical characters.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`transitionChar?: string | string[]`}),` — `,(0,$.jsx)(t.strong,{children:`transition character`}),`. A specific character (e.g., space or dot) that triggers an immediate focus shift to the next part of the mask upon entry. Only for `,(0,$.jsx)(t.code,{children:`rubber: true`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`minLength?: number`}),` — `,(0,$.jsx)(t.strong,{children:`minimum length`}),`. Used to validate whether the group has been sufficiently filled.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maxLength?: number`}),` — `,(0,$.jsx)(t.strong,{children:`maximum length`}),`. The limit for expansion in "rubber" groups.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`match?: RegExp | string`}),` — `,(0,$.jsx)(t.strong,{children:`input filter`}),`. A regular expression that checks `,(0,$.jsx)(t.em,{children:`each individual`}),` character as it is typed. Default: `,(0,$.jsx)(t.code,{children:`[0-9]`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`pattern?: string | Function`}),` — `,(0,$.jsx)(t.strong,{children:`group validator`}),`. A rule for validating the entire accumulated string in the group. Can be a string (regex) or a function receiving mask data.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`view?: string`}),` — `,(0,$.jsx)(t.strong,{children:`visual placeholder`}),`. The character the user sees in empty slots of this group. Default: `,(0,$.jsx)(t.code,{children:`_`}),`.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`How to Work with MaskSpecialList`}),`
`,(0,$.jsxs)(t.p,{children:[`For effective use of `,(0,$.jsx)(t.code,{children:`MaskSpecialList`}),`, follow these simple rules:`]}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Character Mapping`}),`: Every key in the `,(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` object must be a character you used in your `,(0,$.jsx)(t.code,{children:`mask`}),` template. For example, if the mask is `,(0,$.jsx)(t.code,{children:`AAA-***`}),`, you can configure group `,(0,$.jsx)(t.code,{children:`A`}),` for letters and `,(0,$.jsx)(t.code,{children:`*`}),` for digits.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsxs)(t.strong,{children:[`Filter Configuration (`,(0,$.jsx)(t.code,{children:`match`}),`)`]}),`: Use `,(0,$.jsx)(t.code,{children:`match`}),` to restrict the types of characters a user can physically type. This stops letters from being entered where numbers are expected at the earliest possible stage.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Use Rubber Groups`}),`: If a field's length is unknown in advance (like a phone extension), set `,(0,$.jsx)(t.code,{children:`rubber: true`}),`. This allows the mask to expand as the user types.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Manage Transitions`}),`: For a better user experience, define a `,(0,$.jsx)(t.code,{children:`transitionChar`}),` (like a space or dot). This allows users to manually finish the current group and jump to the next one without filling the entire length.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Default Values`}),`: If part of the data is frequently repeated (like the current year), use `,(0,$.jsx)(t.code,{children:`defaultValue`}),`. This reduces the number of actions required from the user.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Example`}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const value = ref('')
<\/script>

<template>
<!-- Example of a rubber mask for an IP address -->
<Mask
  v-model="value"
  mask="*.#.#.#"
  :special="{
    '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' },
    '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' }
  }"
/>

<!-- Example of a mask with different group types and default values -->
<Mask
  mask="AAA-****"
  :special="{
    'A': { match: /[A-Z]/, view: 'A' },
    '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }
  }"
/>
</template>
`,language:`html`})]})}function Yl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Jl,{...e})}):Jl(e)}function Xl(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Специальные символы`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`special`}),` определяет специальные символы для обозначения мест пользовательского ввода в маске и настройку их расширенного поведения.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string`}),` — одиночный специальный символ (по умолчанию `,(0,$.jsx)(t.code,{children:`'*'`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`string[]`}),` — массив специальных символов для разных типов групп`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` — объект с расширенной конфигурацией каждого символа`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Специальные символы в шаблоне маски обозначают позиции, где пользователь может вводить данные, в отличие от литеральных символов, которые вставляются автоматически.`}),`
`,(0,$.jsxs)(t.p,{children:[`При использовании простой строки (например, `,(0,$.jsx)(t.code,{children:`special="*"`}),`) все места ввода в маске ограничиваются одинаковыми правилами валидации.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Массив символов (например, `,(0,$.jsx)(t.code,{children:`special="['*', 'A', '#']"`}),`) позволяет создавать разные типы групп с индивидуальными ограничениями: одна группа для цифр, другая для букв, третья для специальных символов.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Объектная нотация `,(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` (см. `,(0,$.jsx)(t.a,{href:`#maskspeciallist`,children:`детальное описание ниже`}),`) предоставляет максимальную гибкость. Каждый специальный символ настраивается отдельно с возможностью задать значения по умолчанию, резиновые группы переменной длины, символы автоперехода и кастомную валидацию.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Для встроенных типов (`,(0,$.jsx)(t.code,{children:`currency`}),`, `,(0,$.jsx)(t.code,{children:`number`}),`, `,(0,$.jsx)(t.code,{children:`date`}),`, `,(0,$.jsx)(t.code,{children:`time`}),`) система автоматически генерирует специальные символы с учётом региональных настроек, игнорируя пользовательское значение `,(0,$.jsx)(t.code,{children:`special`}),`.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Простой специальный символ -->
<Mask mask="***-***" special="*" />

<!-- Несколько типов групп -->
<Mask mask="AA*-###" :special="['A', '*', '#']" />

<!-- Расширенная конфигурация -->
<Mask
mask="***-***"
:special="{
  '*': {
    pattern: '\\d',
    view: '_',
    rubber: true,
    minLength: 2,
    maxLength: 8,
    transitionChar: ' '
  }
}"
/>

<!-- Группы с значениями по умолчанию -->
<Mask
mask="DD/MM/YYYY"
:special="{
  'D': { defaultValue: '01', pattern: '\\d' },
  'M': { defaultValue: '01', pattern: '\\d' },
  'Y': { defaultValue: '2024', pattern: '\\d' }
}"
/>
`,language:`html`}),`
`,(0,$.jsx)(t.h2,{children:`MaskSpecialList`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` — это объект расширенной конфигурации, который позволяет детально настроить поведение каждого специального символа в маске. Каждый ключ в объекте соответствует одному из символов, определённых в свойстве `,(0,$.jsx)(t.code,{children:`special`}),` (или символу `,(0,$.jsx)(t.code,{children:`*`}),` по умолчанию).`]}),`
`,(0,$.jsx)(t.h3,{children:`Свойства MaskSpecialItem`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`defaultValue?: string`}),` — `,(0,$.jsx)(t.strong,{children:`начальное значение`}),`. Автоматически заполняет группу при инициализации. Пользователь может изменить его, если это разрешено правилами `,(0,$.jsx)(t.code,{children:`match`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`rubber?: boolean`}),` — `,(0,$.jsx)(t.strong,{children:`резиновый режим`}),`. Позволяет группе изменять свою длину. В шаблоне маски такая группа обычно представлена одним или несколькими одинаковыми символами.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`transitionChar?: string | string[]`}),` — `,(0,$.jsx)(t.strong,{children:`символ перехода`}),`. Конкретный символ (например, пробел или точка), при вводе которого фокус немедленно переходит к следующей части маски. Только для `,(0,$.jsx)(t.code,{children:`rubber: true`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`minLength?: number`}),` — `,(0,$.jsx)(t.strong,{children:`минимальная длина`}),`. Используется для валидации полноты заполнения группы.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`maxLength?: number`}),` — `,(0,$.jsx)(t.strong,{children:`максимальная длина`}),`. Лимит расширения для «резиновых» групп.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`match?: RegExp | string`}),` — `,(0,$.jsx)(t.strong,{children:`фильтр ввода`}),`. Регулярное выражение, проверяющее `,(0,$.jsx)(t.em,{children:`каждый отдельный`}),` символ при нажатии клавиши. По умолчанию: `,(0,$.jsx)(t.code,{children:`[0-9]`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`pattern?: string | Function`}),` — `,(0,$.jsx)(t.strong,{children:`валидатор группы`}),`. Правило для проверки всей накопленной строки в группе. Может быть строкой (regex) или функцией, принимающей данные маски.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`view?: string`}),` — `,(0,$.jsx)(t.strong,{children:`визуальный плейсхолдер`}),`. Тот символ, который видит пользователь в пустых ячейках этой группы. По умолчанию: `,(0,$.jsx)(t.code,{children:`_`}),`.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Как работать с MaskSpecialList`}),`
`,(0,$.jsxs)(t.p,{children:[`Для эффективного использования `,(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` придерживайтесь следующих правил:`]}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Сопоставление символов`}),`: Каждый ключ в объекте `,(0,$.jsx)(t.code,{children:`MaskSpecialList`}),` должен быть символом, который вы использовали в шаблоне `,(0,$.jsx)(t.code,{children:`mask`}),`. Например, если маска `,(0,$.jsx)(t.code,{children:`AAA-***`}),`, вы можете настроить группу `,(0,$.jsx)(t.code,{children:`A`}),` для букв и `,(0,$.jsx)(t.code,{children:`*`}),` для цифр.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsxs)(t.strong,{children:[`Настройка фильтров (`,(0,$.jsx)(t.code,{children:`match`}),`)`]}),`: Используйте `,(0,$.jsx)(t.code,{children:`match`}),` для ограничения типов символов, которые пользователь в принципе может нажать. Это предотвращает ввод букв там, где нужны цифры, на самом раннем этапе.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Использование резиновых групп`}),`: Если длина поля заранее неизвестна (например, добавочный номер телефона), установите `,(0,$.jsx)(t.code,{children:`rubber: true`}),`. Это позволит маске расширяться по мере ввода.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Управление переходом`}),`: Для удобства пользователя задавайте `,(0,$.jsx)(t.code,{children:`transitionChar`}),` (например, пробел или точку). Это позволяет пользователю вручную завершить ввод в текущей группе и переключиться на следующую, не дожидаясь заполнения всей длины.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Значения по умолчанию`}),`: Если часть данных часто повторяется (например, текущий год), используйте `,(0,$.jsx)(t.code,{children:`defaultValue`}),`. Это уменьшит количество действий пользователя.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Пример`}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const value = ref('')
<\/script>

<template>
<!-- Пример резиновой маски для IP-адреса -->
<Mask
  v-model="value"
  mask="*.#.#.#"
  :special="{
    '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' },
    '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' }
  }"
/>

<!-- Пример маски с разными типами групп и значениями по умолчанию -->
<Mask
  mask="AAA-****"
  :special="{
    'A': { match: /[A-Z]/, view: 'A' },
    '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }
  }"
/>
</template>
`,language:`html`})]})}function Zl(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xl,{...e})}):Xl(e)}function Ql(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Mask types`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`type`}),` property defines the mask operation mode and automatically generates the appropriate structure for different data types.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'text'`}),` — basic text mask (default)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'number'`}),`, `,(0,$.jsx)(t.code,{children:`'number-format'`}),`, `,(0,$.jsx)(t.code,{children:`'currency'`}),` — numeric types with validation and localization`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'date'`}),`, `,(0,$.jsx)(t.code,{children:`'datetime'`}),`, `,(0,$.jsx)(t.code,{children:`'time'`}),`, `,(0,$.jsx)(t.code,{children:`'year'`}),`, `,(0,$.jsx)(t.code,{children:`'month'`}),`, `,(0,$.jsx)(t.code,{children:`'day'`}),`, `,(0,$.jsx)(t.code,{children:`'hour-minute'`}),` — date and time types`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`When using `,(0,$.jsx)(t.code,{children:`text`}),`, explicit structure specification via the `,(0,$.jsx)(t.code,{children:`mask`}),` property is required. Specialized numeric types automatically create rubber masks with thousand separators, validation, and formatting according to regional settings (`,(0,$.jsx)(t.code,{children:`language`}),`). Date types generate masks according to local formats with validation of entered values correctness. When a specialized type is activated, the `,(0,$.jsx)(t.code,{children:`mask`}),` property is ignored, and the mask structure is formed automatically based on `,(0,$.jsx)(t.code,{children:`language`}),`, `,(0,$.jsx)(t.code,{children:`currency`}),`, and `,(0,$.jsx)(t.code,{children:`fraction`}),`.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Text mask -->
<Mask mask="+1 (***) ***-****" type="text" />

<!-- Currency mask -->
<Mask type="currency" currency="USD" language="en-US" />

<!-- Date mask -->
<Mask type="date" language="en-US" />
`,language:`html`})]})}function $l(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ql,{...e})}):Ql(e)}function eu(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Типы масок`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`type`}),` определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'text'`}),` — базовая текстовая маска (по умолчанию)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'number'`}),`, `,(0,$.jsx)(t.code,{children:`'number-format'`}),`, `,(0,$.jsx)(t.code,{children:`'currency'`}),` — числовые типы с валидацией и локализацией`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'date'`}),`, `,(0,$.jsx)(t.code,{children:`'datetime'`}),`, `,(0,$.jsx)(t.code,{children:`'time'`}),`, `,(0,$.jsx)(t.code,{children:`'year'`}),`, `,(0,$.jsx)(t.code,{children:`'month'`}),`, `,(0,$.jsx)(t.code,{children:`'day'`}),`, `,(0,$.jsx)(t.code,{children:`'hour-minute'`}),` — типы дат и времени`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`При использовании `,(0,$.jsx)(t.code,{children:`text`}),` требуется явное указание структуры через свойство `,(0,$.jsx)(t.code,{children:`mask`}),`. Специализированные числовые типы автоматически создают резиновые маски с разделителями разрядов, валидацией и форматированием согласно региональным настройкам (`,(0,$.jsx)(t.code,{children:`language`}),`). Типы дат генерируют маски по локальным форматам с проверкой корректности введённых значений. При активации специализированного типа свойство `,(0,$.jsx)(t.code,{children:`mask`}),` игнорируется, а структура маски формируется автоматически на основе `,(0,$.jsx)(t.code,{children:`language`}),`, `,(0,$.jsx)(t.code,{children:`currency`}),` и `,(0,$.jsx)(t.code,{children:`fraction`}),`.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Текстовая маска -->
<Mask mask="+7 (***) ***-**-**" type="text" />

<!-- Валютная маска -->
<Mask type="currency" currency="RUB" language="ru" />

<!-- Маска даты -->
<Mask type="date" language="ru" />
`,language:`html`})]})}function tu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(eu,{...e})}):eu(e)}function nu(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Mask visibility control`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`visible`}),` and `,(0,$.jsx)(t.code,{children:`visiblePartly`}),` properties are designed for managing the display of mask placeholder characters and overall component visibility.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`visible`}),` — controls complete visibility of the mask component`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`visiblePartly`}),` — controls partial visibility of placeholder characters`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: when `,(0,$.jsx)(t.code,{children:`visible: false`}),`, the mask component is completely hidden, including all placeholder characters. When `,(0,$.jsx)(t.code,{children:`visiblePartly: true`}),` is activated, only filled mask positions are displayed, hiding empty placeholder characters. If `,(0,$.jsx)(t.code,{children:`visible`}),` is set to `,(0,$.jsx)(t.code,{children:`false`}),`, the `,(0,$.jsx)(t.code,{children:`visiblePartly`}),` property is ignored. Visibility changes don't affect validation logic and data processing, allowing creation of adaptive interfaces with conditional or abbreviated mask display.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showMask = ref(true)
const compactMode = ref(false)
<\/script>

<template>
<!-- Complete mask hiding -->
<Mask
  mask="+1 (***) ***-****"
  :visible="false"
/>

<!-- Show only filled positions -->
<Mask
  mask="+1 (***) ***-****"
  :visiblePartly="true"
/>

<!-- Conditional display with partial visibility -->
<Mask
  mask="+1 (***) ***-****"
  :visible="showMask"
  :visiblePartly="compactMode"
/>
</template>
`,language:`html`})]})}function ru(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nu,{...e})}):nu(e)}function iu(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление видимостью маски`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`visible`}),` и `,(0,$.jsx)(t.code,{children:`visiblePartly`}),` предназначены для управления отображением символов-заполнителей маски и видимостью компонента в целом.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`visible`}),` — управляет полной видимостью компонента маски`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`visiblePartly`}),` — управляет частичной видимостью символов-заполнителей`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: при `,(0,$.jsx)(t.code,{children:`visible: false`}),` компонент маски полностью скрыт, включая все символы-заполнители. При активации `,(0,$.jsx)(t.code,{children:`visiblePartly: true`}),` отображаются только заполненные позиции маски, скрывая пустые символы-заполнители. Если `,(0,$.jsx)(t.code,{children:`visible`}),` установлен в `,(0,$.jsx)(t.code,{children:`false`}),`, то свойство `,(0,$.jsx)(t.code,{children:`visiblePartly`}),` игнорируется. Изменение видимости не влияет на логику валидации и обработку данных, позволяя создавать адаптивные интерфейсы с условным или сокращённым отображением маски.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const showMask = ref(true)
const compactMode = ref(false)
<\/script>

<template>
<!-- Полное скрытие маски -->
<Mask
  mask="+7 (***) ***-**-**"
  :visible="false"
/>

<!-- Показ только заполненных позиций -->
<Mask
  mask="+7 (***) ***-**-**"
  :visiblePartly="true"
/>

<!-- Условное отображение с частичной видимостью -->
<Mask
  mask="+7 (***) ***-**-**"
  :visible="showMask"
  :visiblePartly="compactMode"
/>
</template>
`,language:`html`})]})}function au(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(iu,{...e})}):iu(e)}function ou(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`AJAX Menu Loading`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`ajax`}),`, `,(0,$.jsx)(t.code,{children:`request`}),`, and `,(0,$.jsx)(t.code,{children:`cache`}),` properties are designed for managing asynchronous loading and caching of menu data.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ajax`}),` — enables remote data loading mode (URL string or function)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`request`}),` — object of type `,(0,$.jsx)(t.code,{children:`ApiFetch`}),` with HTTP request settings`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`cache`}),` — enables caching of loaded menu items`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Properties work together: if `,(0,$.jsx)(t.code,{children:`ajax`}),` is not specified or equals `,(0,$.jsx)(t.code,{children:`false`}),`, the menu uses local data. When `,(0,$.jsx)(t.code,{children:`ajax`}),` is activated (URL string or `,(0,$.jsx)(t.code,{children:`true`}),`), `,(0,$.jsx)(t.code,{children:`request`}),` defines HTTP request parameters (method, headers, body), and `,(0,$.jsx)(t.code,{children:`cache`}),` manages data persistence. When `,(0,$.jsx)(t.code,{children:`cache`}),` is enabled, repeated menu openings use saved data instead of new requests, reducing server load.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Loading with URL -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu-items"
  :cache="true"
/>

<!-- With request settings -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu"
  :request="{
    method: 'POST',
    headers: { 'X-Custom': 'value' },
    auth: true
  }"
  :cache="true"
/>

<!-- Loading function -->
<Menu
  v-model:open="isOpen"
  :ajax="async () => {
    const response = await fetch('/api/menu')
    return response.json()
  }"
/>
</template>
`,language:`html`})]})}function su(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ou,{...e})}):ou(e)}function cu(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`AJAX загрузка меню`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`ajax`}),`, `,(0,$.jsx)(t.code,{children:`request`}),` и `,(0,$.jsx)(t.code,{children:`cache`}),` предназначены для управления асинхронной загрузкой и кэшированием данных меню.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ajax`}),` — включает режим удалённой загрузки данных (строка URL или функция)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`request`}),` — объект типа `,(0,$.jsx)(t.code,{children:`ApiFetch`}),` с настройками HTTP-запроса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`cache`}),` — включает кэширование загруженных элементов меню`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,$.jsx)(t.code,{children:`ajax`}),` не задан или равен `,(0,$.jsx)(t.code,{children:`false`}),`, меню использует локальные данные. При активации `,(0,$.jsx)(t.code,{children:`ajax`}),` (строка URL или `,(0,$.jsx)(t.code,{children:`true`}),`), `,(0,$.jsx)(t.code,{children:`request`}),` определяет параметры HTTP-запроса (метод, заголовки, тело), а `,(0,$.jsx)(t.code,{children:`cache`}),` управляет сохранением данных. При включённом `,(0,$.jsx)(t.code,{children:`cache`}),` повторные открытия меню используют сохранённые данные вместо новых запросов, снижая нагрузку на сервер.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Загрузка с URL -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu-items"
  :cache="true"
/>

<!-- С настройками запроса -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu"
  :request="{
    method: 'POST',
    headers: { 'X-Custom': 'value' },
    auth: true
  }"
  :cache="true"
/>

<!-- Функция загрузки -->
<Menu
  v-model:open="isOpen"
  :ajax="async () => {
    const response = await fetch('/api/menu')
    return response.json()
  }"
/>
</template>
`,language:`html`})]})}function lu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(cu,{...e})}):cu(e)}function uu(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`updateValue`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the selected value in the menu changes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value?: NumberOrStringOrBoolean`}),` — new selected value`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleUpdateValue = (value) => {
console.log('New value:', value)
console.log('Value type:', typeof value)
}
<\/script>

<template>
<Menu
  :isSelectedByValue="true"
  @updateValue="handleUpdateValue"
>
  <template #default>
    <MenuItem value="item1">Menu Item 1</MenuItem>
    <MenuItem value="item2">Menu Item 2</MenuItem>
    <MenuItem value="item3">Menu Item 3</MenuItem>
  </template>
</Menu>
</template>
`,language:`html`})]})}function du(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(uu,{...e})}):uu(e)}function fu(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`updateValue`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении выбранного значения в меню.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value?: NumberOrStringOrBoolean`}),` — новое выбранное значение`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleUpdateValue = (value) => {
console.log('Новое значение:', value)
console.log('Тип значения:', typeof value)
}
<\/script>

<template>
<Menu
  :isSelectedByValue="true"
  @updateValue="handleUpdateValue"
>
  <template #default>
    <MenuItem value="item1">Пункт меню 1</MenuItem>
    <MenuItem value="item2">Пункт меню 2</MenuItem>
    <MenuItem value="item3">Пункт меню 3</MenuItem>
  </template>
</Menu>
</template>
`,language:`html`})]})}function pu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(fu,{...e})}):fu(e)}function mu(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`previous(): void`}),` — Moves selection to the previous menu item based on the `,(0,$.jsx)(t.code,{children:`step`}),` property value.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`next(): void`}),` — Moves selection to the next menu item based on the `,(0,$.jsx)(t.code,{children:`step`}),` property value.`]}),`
`]})}function hu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(mu,{...e})}):mu(e)}function gu(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`previous(): void`}),` — Перемещает выбор на предыдущий элемент меню на основе значения свойства `,(0,$.jsx)(t.code,{children:`step`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`next(): void`}),` — Перемещает выбор на следующий элемент меню на основе значения свойства `,(0,$.jsx)(t.code,{children:`step`}),`.`]}),`
`]})}function _u(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(gu,{...e})}):gu(e)}function vu(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating popup menus, dropdown lists, and context menus with navigation and action support.`}),`
`,(0,$.jsx)(t.p,{children:`Menu combines the functionality of Window (positioning and visibility management), Bars (action and tool panel), and List (displaying items, groups, and nested submenus). The component provides keyboard navigation, nested structure support, asynchronous data loading, optimized rendering mode for large lists, and full control over open/close state.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Integration of Window, Bars, and List components`}),`
`,(0,$.jsx)(t.li,{children:`Keyboard navigation through menu items`}),`
`,(0,$.jsx)(t.li,{children:`Nested submenus with unlimited depth`}),`
`,(0,$.jsx)(t.li,{children:`Asynchronous data loading via AJAX`}),`
`,(0,$.jsx)(t.li,{children:`Lite mode for optimizing large lists (liteThreshold)`}),`
`,(0,$.jsx)(t.li,{children:`Search and filtering of menu items`}),`
`,(0,$.jsx)(t.li,{children:`Management of selected items (selected)`}),`
`,(0,$.jsx)(t.li,{children:`Flexible positioning relative to anchor`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Navigation dropdown menus`}),`
`,(0,$.jsx)(t.li,{children:`Right-click context menus`}),`
`,(0,$.jsx)(t.li,{children:`Action and operation menus`}),`
`,(0,$.jsx)(t.li,{children:`Selectors with search and filtering`}),`
`,(0,$.jsx)(t.li,{children:`Multi-level navigation menus`}),`
`,(0,$.jsx)(t.li,{children:`Menus with dynamic data loading`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
{ label: 'Create', value: 'create', icon: 'add' },
{ label: 'Edit', value: 'edit', icon: 'edit' },
{ label: 'Delete', value: 'delete', icon: 'delete' },
{
  label: 'Export',
  value: 'export',
  children: [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
    { label: 'CSV', value: 'csv' }
  ]
}
])

const handleClick = (value) => {
console.log('Selected item:', value)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Open menu</button>

<Menu
  v-model:open="isOpen"
  :list="menuItems"
  @click="handleClick"
>
  <template #control="{ onclick }">
    <button @click="onclick">Actions</button>
  </template>
</Menu>
</template>
`,language:`html`})]})}function yu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vu,{...e})}):vu(e)}function bu(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания всплывающих меню, выпадающих списков и контекстных меню с поддержкой навигации и действий.`}),`
`,(0,$.jsx)(t.p,{children:`Menu объединяет функциональность Window (позиционирование и управление видимостью), Bars (панель действий и инструментов) и List (отображение пунктов, групп и вложенных подменю). Компонент обеспечивает клавиатурную навигацию, поддержку вложенной структуры, асинхронную загрузку данных, режим оптимизированного рендеринга для больших списков и полный контроль над состоянием открытия/закрытия.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Интеграция Window, Bars и List компонентов`}),`
`,(0,$.jsx)(t.li,{children:`Клавиатурная навигация по пунктам меню`}),`
`,(0,$.jsx)(t.li,{children:`Вложенные подменю с неограниченной глубиной`}),`
`,(0,$.jsx)(t.li,{children:`Асинхронная загрузка данных через AJAX`}),`
`,(0,$.jsx)(t.li,{children:`Режим lite для оптимизации больших списков (liteThreshold)`}),`
`,(0,$.jsx)(t.li,{children:`Поиск и фильтрация пунктов меню`}),`
`,(0,$.jsx)(t.li,{children:`Управление выбранными элементами (selected)`}),`
`,(0,$.jsx)(t.li,{children:`Гибкое позиционирование относительно якоря`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Выпадающие меню навигации`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные меню по правому клику`}),`
`,(0,$.jsx)(t.li,{children:`Меню действий и операций`}),`
`,(0,$.jsx)(t.li,{children:`Селекторы с поиском и фильтрацией`}),`
`,(0,$.jsx)(t.li,{children:`Многоуровневые навигационные меню`}),`
`,(0,$.jsx)(t.li,{children:`Меню с динамической загрузкой данных`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
{ label: 'Создать', value: 'create', icon: 'add' },
{ label: 'Редактировать', value: 'edit', icon: 'edit' },
{ label: 'Удалить', value: 'delete', icon: 'delete' },
{
  label: 'Экспорт',
  value: 'export',
  children: [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
    { label: 'CSV', value: 'csv' }
  ]
}
])

const handleClick = (value) => {
console.log('Выбран пункт:', value)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Открыть меню</button>

<Menu
  v-model:open="isOpen"
  :list="menuItems"
  @click="handleClick"
>
  <template #control="{ onclick }">
    <button @click="onclick">Действия</button>
  </template>
</Menu>
</template>
`,language:`html`})]})}function xu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bu,{...e})}):bu(e)}function Su(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Menu item navigation`}),`
`,(0,$.jsxs)(t.p,{children:[`Methods `,(0,$.jsx)(t.code,{children:`previous()`}),` and `,(0,$.jsx)(t.code,{children:`next()`}),` are designed for programmatic movement through menu items based on current selection and the `,(0,$.jsx)(t.code,{children:`step`}),` property.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Methods:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`previous()`}),` — moves selection to the previous item (backwards by `,(0,$.jsx)(t.code,{children:`step`}),` positions)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`next()`}),` — moves selection to the next item (forwards by `,(0,$.jsx)(t.code,{children:`step`}),` positions)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`step`}),` — number of items to skip during navigation (default: 1)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The methods work together with reactive `,(0,$.jsx)(t.code,{children:`selected`}),` state: calling `,(0,$.jsx)(t.code,{children:`previous()`}),` or `,(0,$.jsx)(t.code,{children:`next()`}),` automatically calculates the new position relative to the currently selected item. If no item is selected, the methods select the first available item. When reaching list boundaries (first or last item), navigation stops at the boundary item, preventing overflow beyond the list.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const menuRef = ref()
const selected = ref('item2')
<\/script>

<template>
<!-- Call via ref -->
<button @click="menuRef?.previous()">Previous</button>
<button @click="menuRef?.next()">Next</button>

<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="[
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' }
  ]"
  :step="1"
/>

<!-- Navigation in control slot -->
<Menu v-model:selected="selected" :list="items">
  <template #control="{ previous, next, selectedNames }">
    <button @click="previous">◀</button>
    <span>{{ selectedNames[0] }}</span>
    <button @click="next">▶</button>
  </template>
</Menu>

<!-- With custom step -->
<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="items"
  :step="2"
/>
</template>
`,language:`html`})]})}function Cu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Su,{...e})}):Su(e)}function wu(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Навигация по элементам меню`}),`
`,(0,$.jsxs)(t.p,{children:[`Методы `,(0,$.jsx)(t.code,{children:`previous()`}),` и `,(0,$.jsx)(t.code,{children:`next()`}),` предназначены для программного перемещения по элементам меню на основе текущего выбора и свойства `,(0,$.jsx)(t.code,{children:`step`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Методы:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`previous()`}),` — перемещает выбор на предыдущий элемент (назад на `,(0,$.jsx)(t.code,{children:`step`}),` позиций)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`next()`}),` — перемещает выбор на следующий элемент (вперед на `,(0,$.jsx)(t.code,{children:`step`}),` позиций)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`step`}),` — количество элементов для пропуска при навигации (по умолчанию: 1)`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Методы работают совместно с реактивным состоянием `,(0,$.jsx)(t.code,{children:`selected`}),`: при вызове `,(0,$.jsx)(t.code,{children:`previous()`}),` или `,(0,$.jsx)(t.code,{children:`next()`}),` происходит автоматический расчёт новой позиции относительно текущего выделенного элемента. Если элемент не выбран, методы выбирают первый доступный элемент. При достижении границ списка (первый или последний элемент) навигация останавливается на граничном элементе, предотвращая выход за пределы списка.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const menuRef = ref()
const selected = ref('item2')
<\/script>

<template>
<!-- Вызов через ref -->
<button @click="menuRef?.previous()">Назад</button>
<button @click="menuRef?.next()">Вперед</button>

<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="[
    { label: 'Элемент 1', value: 'item1' },
    { label: 'Элемент 2', value: 'item2' },
    { label: 'Элемент 3', value: 'item3' }
  ]"
  :step="1"
/>

<!-- Навигация в слоте control -->
<Menu v-model:selected="selected" :list="items">
  <template #control="{ previous, next, selectedNames }">
    <button @click="previous">◀</button>
    <span>{{ selectedNames[0] }}</span>
    <button @click="next">▶</button>
  </template>
</Menu>

<!-- С пользовательским шагом -->
<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="items"
  :step="2"
/>
</template>
`,language:`html`})]})}function Tu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(wu,{...e})}):wu(e)}function Eu(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`title(props: MenuControlItem): any`}),` — Slot for placing the menu window title.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`footer(props: MenuControlItem): any`}),` — Slot for placing content in the bottom part of the menu window.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`contextTop(props: MenuControlItem): any`}),` — Slot for placing contextual area above the menu list.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`contextBottom(props: MenuControlItem): any`}),` — Slot for placing contextual area below the menu list.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MenuControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — reactive state of menu data loading.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — reactive state of menu open/close.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — presence of selected items.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedList: Ref<any[]>`}),` — list of selected items.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedNames: Ref<string[]>`}),` — labels of selected items.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedValues: Ref<any[]>`}),` — values of selected items.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: (event) => Promise<void>`}),` — click handler for opening/closing menu.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`oncontextmenu: (event) => Promise<void>`}),` — context menu handler.`]}),`
`]}),`
`]})]})}function Du(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Eu,{...e})}):Eu(e)}function Ou(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`title(props: MenuControlItem): any`}),` — Слот для размещения заголовка окна меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`footer(props: MenuControlItem): any`}),` — Слот для размещения содержимого в нижней части окна меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`contextTop(props: MenuControlItem): any`}),` — Слот для размещения контекстной области над списком меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`contextBottom(props: MenuControlItem): any`}),` — Слот для размещения контекстной области под списком меню.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MenuControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — состояние загрузки данных меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — состояние открытия меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — наличие выбранных элементов.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedList: Ref<any[]>`}),` — список выбранных элементов.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedNames: Ref<string[]>`}),` — метки выбранных элементов.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selectedValues: Ref<any[]>`}),` — значения выбранных элементов.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: (event) => Promise<void>`}),` — обработчик клика для открытия/закрытия меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`oncontextmenu: (event) => Promise<void>`}),` — обработчик контекстного меню.`]}),`
`]}),`
`]})]})}function ku(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ou,{...e})}):Ou(e)}function Au(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: MenuControlItem): any`}),` — Slot for placing the menu control element (trigger).`]}),`
`]})}function ju(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Au,{...e})}):Au(e)}function Mu(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: MenuControlItem): any`}),` — Слот для размещения элемента управления (триггера) меню.`]}),`
`]})}function Nu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Mu,{...e})}):Mu(e)}function Pu(e){let t={code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Differences between Modal, ActionSheet and Dialog`}),`
`,(0,$.jsxs)(t.p,{children:[`All three components are built on top of `,(0,$.jsx)(t.strong,{children:`Window`}),`, but have different purposes and behaviors:`]}),`
`,(0,$.jsx)(t.h3,{children:`Modal`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Modal`}),` — a modal window with centered positioning for content requiring immediate user attention.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Uses `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),` Window mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Centered positioning`}),` by default`]}),`
`,(0,$.jsx)(t.li,{children:`Semi-transparent overlay blocks interaction with the main interface`}),`
`,(0,$.jsxs)(t.li,{children:[`Closes on ESC key and click outside (unless `,(0,$.jsx)(t.code,{children:`persistent`}),` is set)`]}),`
`,(0,$.jsx)(t.li,{children:`Supports slots for title, content, and footer`}),`
`,(0,$.jsx)(t.li,{children:`Integrated with Bars and Actions components`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Action confirmation dialogs`}),`
`,(0,$.jsx)(t.li,{children:`Create/edit record forms`}),`
`,(0,$.jsx)(t.li,{children:`Warnings and informational messages`}),`
`,(0,$.jsx)(t.li,{children:`Viewing detailed information`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`ActionSheet`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`ActionSheet`}),` — a modal panel with a set of actions appearing from the bottom of the screen (on mobile devices) or as a context menu.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Uses `,(0,$.jsx)(t.code,{children:`adaptive: 'actionSheet'`}),` Window mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Bottom positioning`}),` on mobile devices`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Swipe down gesture`}),` support for closing (`,(0,$.jsx)(t.code,{children:`touchClose`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Automatically adds dividers between items (`,(0,$.jsx)(t.code,{children:`divider: true`}),`)`]}),`
`,(0,$.jsx)(t.li,{children:`Adaptive behavior: can transform into modal on larger screens`}),`
`,(0,$.jsx)(t.li,{children:`Specialized for action lists`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Action menus for objects (edit, delete, share)`}),`
`,(0,$.jsx)(t.li,{children:`Selecting an option from a list`}),`
`,(0,$.jsx)(t.li,{children:`Context menus on mobile devices`}),`
`,(0,$.jsx)(t.li,{children:`Actions requiring quick access`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`Dialog`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Dialog`}),` — a component for dialog windows with simplified API.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Usually an even more simplified wrapper over Modal`}),`
`,(0,$.jsx)(t.li,{children:`May have preset styles for system dialogs`}),`
`,(0,$.jsx)(t.li,{children:`Often used for simple confirmations (yes/no, OK/Cancel)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Simple confirmations (alert, confirm)`}),`
`,(0,$.jsx)(t.li,{children:`System notifications`}),`
`,(0,$.jsx)(t.li,{children:`Quick dialogs without complex content`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`Choosing a component`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Use Modal`}),` when you need to display a form, detailed information, or content requiring user attention`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Use ActionSheet`}),` when you need to offer a list of actions, especially on mobile devices`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Use Dialog`}),` when you need a simple confirmation or system notification`]}),`
`]}),`
`,(0,$.jsx)(t.h2,{children:`Разница между Modal, ActionSheet и Dialog`}),`
`,(0,$.jsxs)(t.p,{children:[`Все три компонента построены на базе `,(0,$.jsx)(t.strong,{children:`Window`}),`, но имеют различное назначение и поведение:`]}),`
`,(0,$.jsx)(t.h3,{children:`Modal`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Modal`}),` — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Использует `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),` режим Window`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Центрированное позиционирование`}),` по умолчанию`]}),`
`,(0,$.jsx)(t.li,{children:`Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом`}),`
`,(0,$.jsxs)(t.li,{children:[`Закрывается по ESC и клику вне области (если не установлен `,(0,$.jsx)(t.code,{children:`persistent`}),`)`]}),`
`,(0,$.jsx)(t.li,{children:`Поддерживает слоты для заголовка, контента и футера`}),`
`,(0,$.jsx)(t.li,{children:`Интегрирован с компонентами Bars и Actions`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Диалоги подтверждения действий`}),`
`,(0,$.jsx)(t.li,{children:`Формы создания/редактирования записей`}),`
`,(0,$.jsx)(t.li,{children:`Предупреждения и информационные сообщения`}),`
`,(0,$.jsx)(t.li,{children:`Просмотр детальной информации`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`ActionSheet`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`ActionSheet`}),` — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Использует `,(0,$.jsx)(t.code,{children:`adaptive: 'actionSheet'`}),` режим Window`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Позиционирование снизу`}),` экрана на мобильных устройствах`]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка `,(0,$.jsx)(t.strong,{children:`жеста свайпа вниз`}),` для закрытия (`,(0,$.jsx)(t.code,{children:`touchClose`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Автоматически добавляет разделители между элементами (`,(0,$.jsx)(t.code,{children:`divider: true`}),`)`]}),`
`,(0,$.jsx)(t.li,{children:`Адаптивное поведение: может трансформироваться в modal на больших экранах`}),`
`,(0,$.jsx)(t.li,{children:`Специализирован для списков действий`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Меню действий с объектом (редактировать, удалить, поделиться)`}),`
`,(0,$.jsx)(t.li,{children:`Выбор опции из списка`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные меню на мобильных устройствах`}),`
`,(0,$.jsx)(t.li,{children:`Действия, требующие быстрого доступа`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`Dialog`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Dialog`}),` — компонент для диалоговых окон с упрощенным API (если реализован в вашей системе).`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Обычно является еще более упрощенной оберткой над Modal`}),`
`,(0,$.jsx)(t.li,{children:`Может иметь предустановленные стили для системных диалогов`}),`
`,(0,$.jsx)(t.li,{children:`Часто используется для простых подтверждений (да/нет, ОК/Отмена)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Простые подтверждения (alert, confirm)`}),`
`,(0,$.jsx)(t.li,{children:`Системные уведомления`}),`
`,(0,$.jsx)(t.li,{children:`Быстрые диалоги без сложного контента`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`Выбор компонента`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Используйте Modal`}),`, когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Используйте ActionSheet`}),`, когда нужно предложить список действий, особенно на мобильных устройствах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Используйте Dialog`}),`, когда нужно простое подтверждение или системное уведомление`]}),`
`]})]})}function Fu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Pu,{...e})}):Pu(e)}function Iu(e){let t={code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Разница между Modal, ActionSheet и Dialog`}),`
`,(0,$.jsxs)(t.p,{children:[`Все три компонента построены на базе `,(0,$.jsx)(t.strong,{children:`Window`}),`, но имеют различное назначение и поведение:`]}),`
`,(0,$.jsx)(t.h3,{children:`Modal`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Modal`}),` — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Использует `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),` режим Window`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Центрированное позиционирование`}),` по умолчанию`]}),`
`,(0,$.jsx)(t.li,{children:`Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом`}),`
`,(0,$.jsxs)(t.li,{children:[`Закрывается по ESC и клику вне области (если не установлен `,(0,$.jsx)(t.code,{children:`persistent`}),`)`]}),`
`,(0,$.jsx)(t.li,{children:`Поддерживает слоты для заголовка, контента и футера`}),`
`,(0,$.jsx)(t.li,{children:`Интегрирован с компонентами Bars и Actions`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Диалоги подтверждения действий`}),`
`,(0,$.jsx)(t.li,{children:`Формы создания/редактирования записей`}),`
`,(0,$.jsx)(t.li,{children:`Предупреждения и информационные сообщения`}),`
`,(0,$.jsx)(t.li,{children:`Просмотр детальной информации`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`ActionSheet`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`ActionSheet`}),` — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Использует `,(0,$.jsx)(t.code,{children:`adaptive: 'actionSheet'`}),` режим Window`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Позиционирование снизу`}),` экрана на мобильных устройствах`]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка `,(0,$.jsx)(t.strong,{children:`жеста свайпа вниз`}),` для закрытия (`,(0,$.jsx)(t.code,{children:`touchClose`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Автоматически добавляет разделители между элементами (`,(0,$.jsx)(t.code,{children:`divider: true`}),`)`]}),`
`,(0,$.jsx)(t.li,{children:`Адаптивное поведение: может трансформироваться в modal на больших экранах`}),`
`,(0,$.jsx)(t.li,{children:`Специализирован для списков действий`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Меню действий с объектом (редактировать, удалить, поделиться)`}),`
`,(0,$.jsx)(t.li,{children:`Выбор опции из списка`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные меню на мобильных устройствах`}),`
`,(0,$.jsx)(t.li,{children:`Действия, требующие быстрого доступа`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`Dialog`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Dialog`}),` — компонент для диалоговых окон с упрощенным API.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Обычно является еще более упрощенной оберткой над Modal`}),`
`,(0,$.jsx)(t.li,{children:`Может иметь предустановленные стили для системных диалогов`}),`
`,(0,$.jsx)(t.li,{children:`Часто используется для простых подтверждений (да/нет, ОК/Отмена)`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Простые подтверждения (alert, confirm)`}),`
`,(0,$.jsx)(t.li,{children:`Системные уведомления`}),`
`,(0,$.jsx)(t.li,{children:`Быстрые диалоги без сложного контента`}),`
`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsx)(t.h3,{children:`Выбор компонента`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Используйте Modal`}),`, когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Используйте ActionSheet`}),`, когда нужно предложить список действий, особенно на мобильных устройствах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Используйте Dialog`}),`, когда нужно простое подтверждение или системное уведомление`]}),`
`]})]})}function Lu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Iu,{...e})}):Iu(e)}function Ru(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`A simplified wrapper over the Window component for creating modal dialogs with preconfigured centered positioning settings.`}),`
`,(0,$.jsxs)(t.p,{children:[`Modal is a specialized component that uses Window with a fixed `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),` mode. It is designed to display content that requires immediate user attention, blocking interaction with the main interface. The component automatically centers content, adds a semi-transparent backdrop (overlay), and manages focus.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Centered positioning by default`}),`
`,(0,$.jsx)(t.li,{children:`Semi-transparent overlay with background blocking`}),`
`,(0,$.jsx)(t.li,{children:`Control via v-model:open`}),`
`,(0,$.jsx)(t.li,{children:`Close on ESC key and click outside`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Scrollbar for long content`}),`
`,(0,$.jsx)(t.li,{children:`Slots for title, content, and footer`}),`
`,(0,$.jsx)(t.li,{children:`Lifecycle events (preparation, opening, closing)`}),`
`,(0,$.jsx)(t.li,{children:`Close button with customizable icon`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Differences from Window:`})}),`
`,(0,$.jsxs)(t.p,{children:[`Modal is a Window with preset `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),`, which simplifies usage for standard dialog windows without explicitly specifying the adaptive mode.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Action confirmation dialogs`}),`
`,(0,$.jsx)(t.li,{children:`Create/edit forms`}),`
`,(0,$.jsx)(t.li,{children:`Warnings and informational messages`}),`
`,(0,$.jsx)(t.li,{children:`Viewing detailed information`}),`
`,(0,$.jsx)(t.li,{children:`Multi-step wizards`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const handleBeforeClosing = async () => {
// Check before closing
return confirm('Close modal window?')
}
<\/script>

<template>
<button @click="isModalOpen = true">Open Modal</button>

<Modal
  v-model:open="isModalOpen"
  :beforeClosing="handleBeforeClosing"
  closeButton
>
  <template #title>
    <h2>Confirm Action</h2>
  </template>

  <template #default>
    <p>Are you sure you want to perform this action?</p>
    <p>This action cannot be undone.</p>
  </template>

  <template #footer="{ classesModal }">
    <button :class="classesModal.close">Cancel</button>
    <button @click="performAction">Confirm</button>
  </template>
</Modal>
</template>
`,language:`html`})]})}function zu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ru,{...e})}):Ru(e)}function Bu(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Упрощенная обертка над компонентом Window для создания модальных диалогов с предустановленными настройками центрированного позиционирования.`}),`
`,(0,$.jsxs)(t.p,{children:[`Modal является специализированным компонентом, который использует Window с фиксированным режимом `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),`. Он предназначен для отображения контента, требующего немедленного внимания пользователя, с блокировкой взаимодействия с основным интерфейсом. Компонент автоматически центрирует содержимое, добавляет полупрозрачный фон (overlay) и управляет фокусом.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Центрированное позиционирование по умолчанию`}),`
`,(0,$.jsx)(t.li,{children:`Полупрозрачный оверлей с блокировкой фона`}),`
`,(0,$.jsx)(t.li,{children:`Управление через v-model:open`}),`
`,(0,$.jsx)(t.li,{children:`Закрытие по ESC и клику вне области`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция со Scrollbar для длинного контента`}),`
`,(0,$.jsx)(t.li,{children:`Слоты для заголовка, содержимого и футера`}),`
`,(0,$.jsx)(t.li,{children:`События жизненного цикла (preparation, opening, closing)`}),`
`,(0,$.jsx)(t.li,{children:`Кнопка закрытия с настраиваемой иконкой`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Отличия от Window:`})}),`
`,(0,$.jsxs)(t.p,{children:[`Modal - это Window с предустановленным `,(0,$.jsx)(t.code,{children:`adaptive: 'modal'`}),`, что упрощает использование для стандартных диалоговых окон без необходимости явно указывать режим адаптивности.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Диалоги подтверждения действий`}),`
`,(0,$.jsx)(t.li,{children:`Формы создания/редактирования`}),`
`,(0,$.jsx)(t.li,{children:`Предупреждения и информационные сообщения`}),`
`,(0,$.jsx)(t.li,{children:`Просмотр детальной информации`}),`
`,(0,$.jsx)(t.li,{children:`Многошаговые мастера (wizards)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const handleBeforeClosing = async () => {
// Проверка перед закрытием
return confirm('Закрыть модальное окно?')
}
<\/script>

<template>
<button @click="isModalOpen = true">Открыть модальное окно</button>

<Modal
  v-model:open="isModalOpen"
  :beforeClosing="handleBeforeClosing"
  closeButton
>
  <template #title>
    <h2>Подтверждение действия</h2>
  </template>

  <template #default>
    <p>Вы уверены, что хотите выполнить это действие?</p>
    <p>Это действие нельзя будет отменить.</p>
  </template>

  <template #footer="{ classesModal }">
    <button :class="classesModal.close">Отмена</button>
    <button @click="performAction">Подтвердить</button>
  </template>
</Modal>
</template>
`,language:`html`})]})}function Vu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bu,{...e})}):Bu(e)}function Hu(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Scroll Management during Animation`}),`
`,(0,$.jsx)(t.p,{children:`The component automatically manages scroll visibility during transition animations to prevent content jumps.`}),`
`,(0,$.jsx)(t.h3,{children:`Usage`}),`
`,(0,$.jsxs)(t.p,{children:[`To enable this feature, add the `,(0,$.jsx)(t.code,{children:`*__scroll`}),` class to the parent container that has scrolling.`]}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsx)(t.li,{children:`Wrap the component in a scrollable container.`}),`
`,(0,$.jsxs)(t.li,{children:[`Add the `,(0,$.jsx)(t.code,{children:`*__scroll`}),` class to this container (where `,(0,$.jsx)(t.code,{children:`*`}),` is the component class name, e.g., `,(0,$.jsx)(t.code,{children:`d1-tabs__scroll`}),`).`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<div class="d1-tabs__scroll">
<Tabs ... />
</div>
`,language:`html`}),`
`,(0,$.jsxs)(t.p,{children:[`During the animation, the component will automatically add the `,(0,$.jsx)(t.code,{children:`*__scroll--hidden`}),` class (which applies `,(0,$.jsx)(t.code,{children:`overflow: hidden`}),`) to this container, and remove it after the animation ends.`]})]})}function Uu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Hu,{...e})}):Hu(e)}function Wu(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление скроллом при анимации`}),`
`,(0,$.jsx)(t.p,{children:`Компонент автоматически управляет видимостью скролла во время анимации перехода, чтобы предотвратить "скачки" контента.`}),`
`,(0,$.jsx)(t.h3,{children:`Использование`}),`
`,(0,$.jsxs)(t.p,{children:[`Для активации этой функции необходимо добавить класс `,(0,$.jsx)(t.code,{children:`*__scroll`}),` родительскому контейнеру, который имеет прокрутку.`]}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsx)(t.li,{children:`Оберните компонент в контейнер с прокруткой.`}),`
`,(0,$.jsxs)(t.li,{children:[`Добавьте этому контейнеру класс `,(0,$.jsx)(t.code,{children:`*__scroll`}),` (где `,(0,$.jsx)(t.code,{children:`*`}),` — имя класса компонента, например `,(0,$.jsx)(t.code,{children:`d1-tabs__scroll`}),`).`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<div class="d1-tabs__scroll">
<Tabs ... />
</div>
`,language:`html`}),`
`,(0,$.jsxs)(t.p,{children:[`Во время анимации компонент автоматически добавит класс `,(0,$.jsx)(t.code,{children:`*__scroll--hidden`}),` (который применяет `,(0,$.jsx)(t.code,{children:`overflow: hidden`}),`) к этому контейнеру, а после завершения анимации удалит его.`]})]})}function Gu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Wu,{...e})}):Wu(e)}function Ku(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`start`})}),`
`,(0,$.jsx)(t.p,{children:`Event triggered at the beginning of the transition animation.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the slide to which the transition starts`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`end`})}),`
`,(0,$.jsx)(t.p,{children:`Event triggered after the transition animation completes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the slide on which the transition ended`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`motionAxis`})}),`
`,(0,$.jsx)(t.p,{children:`Event triggered at the beginning and end of the transition animation.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: MotionAxisEmitOptions`}),` — object with event parameters`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Structure MotionAxisEmitOptions:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: 'start' | 'end'`}),` — event type`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the selected slide`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`previous: string | number`}),` — identifier of the previous slide`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`preparation: string | number`}),` — identifier of the slide being prepared`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`active: string | number`}),` — identifier of the active slide`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleStart = (selected) => {
console.log('Animation started to slide:', selected)
}

const handleEnd = (selected) => {
console.log('Animation ended on slide:', selected)
}

const handleMotionAxis = (options) => {
console.log('MotionAxis event:', options)
}
<\/script>

<template>
<MotionAxis
  @start="handleStart"
  @end="handleEnd"
  @motionAxis="handleMotionAxis"
>
  <!-- Slides -->
</MotionAxis>
</template>
`,language:`html`})]})}function qu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ku,{...e})}):Ku(e)}function Ju(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`start`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает в начале анимации перехода.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор слайда, к которому начинается переход`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`end`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает после завершения анимации перехода.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор слайда, на котором завершился переход`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`motionAxis`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает в начале и в конце анимации перехода.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: MotionAxisEmitOptions`}),` — объект с параметрами события`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура MotionAxisEmitOptions:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: 'start' | 'end'`}),` — тип события`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор выбранного слайда`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`previous: string | number`}),` — идентификатор предыдущего слайда`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`preparation: string | number`}),` — идентификатор подготавливаемого слайда`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`active: string | number`}),` — идентификатор активного слайда`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleStart = (selected) => {
console.log('Начало анимации к слайду:', selected)
}

const handleEnd = (selected) => {
console.log('Завершение анимации на слайде:', selected)
}

const handleMotionAxis = (options) => {
console.log('Событие MotionAxis:', options)
}
<\/script>

<template>
<MotionAxis
  @start="handleStart"
  @end="handleEnd"
  @motionAxis="handleMotionAxis"
>
  <!-- Слайды -->
</MotionAxis>
</template>
`,language:`html`})]})}function Yu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ju,{...e})}):Ju(e)}function Xu(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`back(): void`}),` — Transition to the previous slide.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`next(): void`}),` — Transition to the next slide.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`to(selected: string | number): void`}),` — Transition to the specified slide.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`top(selected: string | number): void`}),` — Transition to the slide with animation from the top.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`right(selected: string | number): void`}),` — Transition to the slide with animation from the right.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`bottom(selected: string | number): void`}),` — Transition to the slide with animation from the bottom.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`left(selected: string | number): void`}),` — Transition to the slide with animation from the left.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`down(selected: string | number): void`}),` — Transition to the slide with animation downwards.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`up(selected: string | number): void`}),` — Transition to the slide with animation upwards.`]}),`
`]})}function Zu(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xu,{...e})}):Xu(e)}function Qu(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`back(): void`}),` — Переход к предыдущему слайду.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`next(): void`}),` — Переход к следующему слайду.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`to(selected: string | number): void`}),` — Переход к указанному слайду.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`top(selected: string | number): void`}),` — Переход к слайду с анимацией сверху.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`right(selected: string | number): void`}),` — Переход к слайду с анимацией справа.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`bottom(selected: string | number): void`}),` — Переход к слайду с анимацией снизу.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`left(selected: string | number): void`}),` — Переход к слайду с анимацией слева.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`down(selected: string | number): void`}),` — Переход к слайду с анимацией вниз.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`up(selected: string | number): void`}),` — Переход к слайду с анимацией вверх.`]}),`
`]})}function $u(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Qu,{...e})}):Qu(e)}function ed(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for organizing transitions between elements (slides).`}),`
`,(0,$.jsx)(t.p,{children:`MotionAxis allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Slide transition animation along X, Y, Z axes`}),`
`,(0,$.jsx)(t.li,{children:`Automatic or manual direction control (next/back)`}),`
`,(0,$.jsx)(t.li,{children:`Smooth container height animation to fit content`}),`
`,(0,$.jsx)(t.li,{children:`Slide lifecycle management in DOM (inDom, inDomSlide)`}),`
`,(0,$.jsx)(t.li,{children:`Slot support for each slide`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Sliders and carousels`}),`
`,(0,$.jsx)(t.li,{children:`Step-by-step forms (wizards)`}),`
`,(0,$.jsx)(t.li,{children:`Tab switching with animation`}),`
`,(0,$.jsx)(t.li,{children:`Image galleries`}),`
`,(0,$.jsx)(t.li,{children:`Onboarding screens`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('slide1')
<\/script>

<template>
<div class="buttons">
  <button @click="selected = 'slide1'">Slide 1</button>
  <button @click="selected = 'slide2'">Slide 2</button>
</div>

<MotionAxis :selected="selected">
  <template #slide1>
    <div class="slide">Slide 1 Content</div>
  </template>
  <template #slide2>
    <div class="slide">Slide 2 Content</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function td(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ed,{...e})}):ed(e)}function nd(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для организации переходов между элементами (слайдами).`}),`
`,(0,$.jsx)(t.p,{children:`MotionAxis позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Анимация смены слайдов по осям X, Y, Z`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое или ручное управление направлением (вперед/назад)`}),`
`,(0,$.jsx)(t.li,{children:`Плавная анимация высоты контейнера под контент`}),`
`,(0,$.jsx)(t.li,{children:`Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слотов для каждого слайда`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Слайдеры и карусели`}),`
`,(0,$.jsx)(t.li,{children:`Пошаговые формы (wizards)`}),`
`,(0,$.jsx)(t.li,{children:`Переключение вкладок с анимацией`}),`
`,(0,$.jsx)(t.li,{children:`Галереи изображений`}),`
`,(0,$.jsx)(t.li,{children:`Онбординг экраны`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('slide1')
<\/script>

<template>
<div class="buttons">
  <button @click="selected = 'slide1'">Слайд 1</button>
  <button @click="selected = 'slide2'">Слайд 2</button>
</div>

<MotionAxis :selected="selected">
  <template #slide1>
    <div class="slide">Контент слайда 1</div>
  </template>
  <template #slide2>
    <div class="slide">Контент слайда 2</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function rd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nd,{...e})}):nd(e)}function id(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[name]: any`}),` — Slot for slide content. The slot name corresponds to the value passed to the `,(0,$.jsx)(t.code,{children:`selected`}),` property.`]}),`
`]})}function ad(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(id,{...e})}):id(e)}function od(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`[name]: any`}),` — Слот для содержимого слайда. Имя слота соответствует значению, передаваемому в свойство `,(0,$.jsx)(t.code,{children:`selected`}),`.`]}),`
`]})}function sd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(od,{...e})}):od(e)}function cd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`State Management via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding of the selected slide via `,(0,$.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the selected slide`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('slide1')
<\/script>

<template>
<div class="buttons">
  <button @click="selected = 'slide1'">Slide 1</button>
  <button @click="selected = 'slide2'">Slide 2</button>
</div>

<MotionAxis v-model:selected="selected">
  <template #slide1>
    <div>Slide 1 Content</div>
  </template>
  <template #slide2>
    <div>Slide 2 Content</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function ld(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(cd,{...e})}):cd(e)}function ud(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление состоянием через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка выбранного слайда через `,(0,$.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор выбранного слайда`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('slide1')
<\/script>

<template>
<div class="buttons">
  <button @click="selected = 'slide1'">Слайд 1</button>
  <button @click="selected = 'slide2'">Слайд 2</button>
</div>

<MotionAxis v-model:selected="selected">
  <template #slide1>
    <div>Контент слайда 1</div>
  </template>
  <template #slide2>
    <div>Контент слайда 2</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function dd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ud,{...e})}):ud(e)}function fd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Head position animation`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`animationHeadPosition`}),` property controls how the Head area behaves during show/hide animations.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'top'`}),` — keeps the Head at the top during transition (default)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'toBottom'`}),` — animates the Head toward the bottom together with content`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Synchronizes header movement with content animation using CSS transforms for smooth transitions. Suitable for collapsing layouts when the header should travel with expanding content. When the `,(0,$.jsx)(t.code,{children:`section`}),` property is enabled (set to `,(0,$.jsx)(t.code,{children:`true`}),`), the `,(0,$.jsx)(t.code,{children:`animationHeadPosition`}),` parameter is ignored and does not affect animation behavior.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Head stays at top -->
<MotionTransform animationHeadPosition="top" />

<!-- Head moves down with content -->
<MotionTransform animationHeadPosition="toBottom" />
`,language:`html`})]})}function pd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(fd,{...e})}):fd(e)}function md(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Анимация позиции заголовка`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`animationHeadPosition`}),` определяет поведение области Head во время анимаций показа/скрытия.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'top'`}),` — сохраняет Head вверху во время перехода (по умолчанию)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'toBottom'`}),` — анимирует Head вниз вместе с контентом`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Синхронизирует движение заголовка с анимацией контента, используя CSS-трансформации для плавных переходов. Подходит для сворачиваемых макетов, когда заголовок должен перемещаться вместе с разворачивающимся содержимым. При включенном свойстве `,(0,$.jsx)(t.code,{children:`section`}),` (установлено в `,(0,$.jsx)(t.code,{children:`true`}),`) параметр `,(0,$.jsx)(t.code,{children:`animationHeadPosition`}),` игнорируется и не влияет на поведение анимации.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Head остается вверху -->
<MotionTransform animationHeadPosition="top" />

<!-- Head движется вниз с контентом -->
<MotionTransform animationHeadPosition="toBottom" />
`,language:`html`})]})}function hd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(md,{...e})}):md(e)}function gd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`CSS Classes for Behavior Control`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`State classes:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--open`}),` — component is fully open and its content is visible`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--show`}),` — component is visible or in the process of open/close animation`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--window`}),` — component operates in window mode (with teleportation)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--click`}),` — added briefly on click for feedback effects`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Control classes:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--close`}),` — applied to element to trigger MotionTransform closing on click`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--none`}),` — disables default behavior (open/close) for the element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--noneGlobal`}),` — globally disables MotionTransform events`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Element classes:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__context`}),` — class for context element for positioning`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__head`}),` — class for header area that acts as a trigger`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__body`}),` — class for content area that appears and disappears`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backdrop`}),` — class for backdrop element to create overlay effect`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__scrim`}),` — class for scrim layer in modal modes`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__clickNone`}),` — class for element that ignores clicks`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Where `,(0,$.jsx)(t.code,{children:`*`}),` is the component class name (e.g., `,(0,$.jsx)(t.code,{children:`d1-motion-transform`}),`, `,(0,$.jsx)(t.code,{children:`m3-motion-transform`}),`).`]})]})}function _d(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(gd,{...e})}):gd(e)}function vd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`CSS классы для управления поведением`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Классы состояний:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--open`}),` — компонент полностью открыт и его содержимое видимо`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--show`}),` — компонент видим или находится в процессе анимации открытия/закрытия`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--window`}),` — компонент работает в режиме окна (с телепортацией)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--click`}),` — добавляется на короткое время при клике для эффектов обратной связи`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Классы управления:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--close`}),` — применяется к элементу для закрытия MotionTransform при клике`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--none`}),` — отключает стандартное поведение (открытие/закрытие) для элемента`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--noneGlobal`}),` — глобально отключает события MotionTransform`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Классы элементов:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__context`}),` — класс для контекстного элемента для позиционирования`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__head`}),` — класс для области заголовка, которая выступает в роли триггера`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__body`}),` — класс для области содержимого, которая появляется и исчезает`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backdrop`}),` — класс для элемента заднего фона для создания эффекта наложения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__scrim`}),` — класс для затемняющего слоя в модальных режимах`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__clickNone`}),` — класс для элемента, который игнорирует клики`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Где `,(0,$.jsx)(t.code,{children:`*`}),` — название класса компонента (например, `,(0,$.jsx)(t.code,{children:`d1-motion-transform`}),`, `,(0,$.jsx)(t.code,{children:`m3-motion-transform`}),`).`]})]})}function yd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(vd,{...e})}):vd(e)}function bd(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`transform`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when MotionTransform state changes with full event context.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: Event | undefined`}),` — DOM event that triggered the change (if any)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — object with transform data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MotionTransformEmitOptions structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: 'head' | 'body' | 'top' | 'script'`}),` — area type that initiated the event`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — current open state (`,(0,$.jsx)(t.code,{children:`true`}),` - open, `,(0,$.jsx)(t.code,{children:`false`}),` - closed)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleTransform = (event, options) => {
console.log('Event:', event)
console.log('Type:', options.type)
console.log('Open state:', options.open)
}
<\/script>

<template>
<Component @transform="handleTransform">
  <template #head>
    <div>Header</div>
  </template>
  <template #body>
    <p>Content</p>
  </template>
</Component>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`transformLite`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when MotionTransform state changes without DOM event context (lightweight version).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — object with transform data`]}),`
`]})]})}function xd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(bd,{...e})}):bd(e)}function Sd(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`transform`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния MotionTransform с полным контекстом события.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`event: Event | undefined`}),` — DOM-событие, которое вызвало изменение (если есть)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — объект с данными трансформации`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура MotionTransformEmitOptions:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`type: 'head' | 'body' | 'top' | 'script'`}),` — тип области, которая инициировала событие`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — текущее состояние открытия (`,(0,$.jsx)(t.code,{children:`true`}),` - открыто, `,(0,$.jsx)(t.code,{children:`false`}),` - закрыто)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleTransform = (event, options) => {
console.log('Событие:', event)
console.log('Тип:', options.type)
console.log('Состояние открытия:', options.open)
}
<\/script>

<template>
<Component @transform="handleTransform">
  <template #head>
    <div>Заголовок</div>
  </template>
  <template #body>
    <p>Содержимое</p>
  </template>
</Component>
</template>
`,language:`html`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`transformLite`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния MotionTransform без контекста DOM-события (облегчённая версия).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — объект с данными трансформации`]}),`
`]})]})}function Cd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Sd,{...e})}):Sd(e)}function wd(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — reactive open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isShow: ComputedRef<boolean>`}),` — computed visibility state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`setOpen(open: boolean): void`}),` — sets the open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toOpen(): void`}),` — transitions to the open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toClose(): void`}),` — transitions to the close state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toggle(): void`}),` — toggles the open state.`]}),`
`]})}function Td(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(wd,{...e})}):wd(e)}function Ed(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — реактивное состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isShow: ComputedRef<boolean>`}),` — вычисляемое состояние видимости.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`setOpen(open: boolean): void`}),` — устанавливает состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toOpen(): void`}),` — переводит в состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toClose(): void`}),` — переводит в состояние закрытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toggle(): void`}),` — переключает состояние открытия.`]}),`
`]})}function Dd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ed,{...e})}):Ed(e)}function Od(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>`}),` — Reactive reference to the nested MotionTransform component's expose API, providing programmatic access to control methods.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Methods via motionTransformElement.value:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — reactive open state`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isShow: ComputedRef<boolean>`}),` — computed visibility state`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`setOpen(open: boolean): void`}),` — set open state`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toOpen(): void`}),` — open component`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toClose(): void`}),` — close component`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toggle(): void`}),` — toggle state`]}),`
`]}),`
`]})]})}function kd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Od,{...e})}):Od(e)}function Ad(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>`}),` — Реактивная ссылка на expose API вложенного компонента MotionTransform, предоставляющая программный доступ к методам управления.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Методы через motionTransformElement.value:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — реактивное состояние открытия`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isShow: ComputedRef<boolean>`}),` — вычисляемое состояние видимости`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`setOpen(open: boolean): void`}),` — установить состояние открытия`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toOpen(): void`}),` — открыть компонент`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toClose(): void`}),` — закрыть компонент`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toggle(): void`}),` — переключить состояние`]}),`
`]}),`
`]})]})}function jd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ad,{...e})}):Ad(e)}function Md(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Ignore zones`}),`
`,(0,$.jsx)(t.p,{children:`Properties that exclude elements from outside-click checks and auto-close logic.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ignore`}),` — DOM element reference or CSS selector to exclude from outside-click detection`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ignoreSelector`}),` — CSS selector to exclude multiple elements simultaneously`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Both properties work together during outside-click evaluation. `,(0,$.jsx)(t.code,{children:`ignore`}),` is more precise and faster for single elements, can reference a specific DOM element directly. `,(0,$.jsx)(t.code,{children:`ignoreSelector`}),` is more flexible, can match multiple elements with a single selector, better suited for dynamic content. Use for trigger buttons, helper controls, and nested interactive areas.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const triggerButton = ref()
<\/script>

<template>
<!-- Ignoring specific element -->
<MotionTransform :ignore="triggerButton" />

<!-- Ignoring by selector -->
<MotionTransform ignoreSelector=".trigger-button" />

<!-- Combining both properties -->
<MotionTransform
  :ignore="triggerButton"
  ignoreSelector=".helper-controls"
/>
</template>
`,language:`html`})]})}function Nd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Md,{...e})}):Md(e)}function Pd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Зоны игнорирования`}),`
`,(0,$.jsx)(t.p,{children:`Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ignore`}),` — ссылка на DOM-элемент или CSS-селектор для исключения из обнаружения внешних кликов`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`ignoreSelector`}),` — CSS-селектор для исключения нескольких элементов одновременно`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Оба свойства работают вместе при оценке внешних кликов. `,(0,$.jsx)(t.code,{children:`ignore`}),` более точный и быстрее для одиночных элементов, может ссылаться на конкретный DOM-элемент напрямую. `,(0,$.jsx)(t.code,{children:`ignoreSelector`}),` более гибкий, может соответствовать нескольким элементам одним селектором, лучше подходит для динамического контента. Используйте для кнопок-триггеров, вспомогательных элементов и вложенных интерактивных областей.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const triggerButton = ref()
<\/script>

<template>
<!-- Игнорирование конкретного элемента -->
<MotionTransform :ignore="triggerButton" />

<!-- Игнорирование по селектору -->
<MotionTransform ignoreSelector=".trigger-button" />

<!-- Комбинация обоих свойств -->
<MotionTransform
  :ignore="triggerButton"
  ignoreSelector=".helper-controls"
/>
</template>
`,language:`html`})]})}function Fd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Pd,{...e})}):Pd(e)}function Id(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Low-level utility for managing element transforms, state transitions, and interaction flows in components with window-like behavior.`}),`
`,(0,$.jsx)(t.p,{children:`MotionTransform centralizes management of open/show/teleport states, measures element sizes, updates CSS variables, and coordinates events to create smooth and predictable animations. Provides unified API for component visibility control, click handling, and automatic closing with support for ignore zones.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Centralized state management (open, show, teleport)`}),`
`,(0,$.jsx)(t.li,{children:`Click event and auto-close coordination`}),`
`,(0,$.jsx)(t.li,{children:`Size measurement and CSS variable updates`}),`
`,(0,$.jsx)(t.li,{children:`DOM helpers for working with refs, portals, and classes`}),`
`,(0,$.jsx)(t.li,{children:`Programmatic control through imperative methods`}),`
`,(0,$.jsx)(t.li,{children:`Configurable event ignore zones`}),`
`,(0,$.jsx)(t.li,{children:`Optimized DOM manipulation`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Base utility for Window, Menu, Dialog components`}),`
`,(0,$.jsx)(t.li,{children:`Managing open/close animations`}),`
`,(0,$.jsx)(t.li,{children:`State coordination in popup elements`}),`
`,(0,$.jsx)(t.li,{children:`Component library development with window-like behavior`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { MotionTransform } from '@dxtmisha/constructor'

const element = ref()
const elementContext = ref()

const motion = new MotionTransform(
{ open: false, autoClose: true },
// ...other params
)

// Programmatic control
motion.go.toOpen()
motion.go.toClose()

// State access
const isOpen = motion.state.isOpen
const isShow = motion.state.isShow
<\/script>

<template>
<div ref="element">
  <!-- Content with managed transform -->
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`This is a low-level utility for component library development, not intended for direct use in applications.`}),`
`]})]})}function Ld(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Id,{...e})}):Id(e)}function Rd(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Низкоуровневая утилита для управления трансформациями элементов, переходами состояний и потоками взаимодействия в компонентах с оконным поведением.`}),`
`,(0,$.jsx)(t.p,{children:`MotionTransform централизует управление состояниями открытия/отображения/телепортации, измеряет размеры элементов, обновляет CSS-переменные и координирует события для создания плавных и предсказуемых анимаций. Предоставляет единый API для работы с видимостью компонентов, обработки кликов и автоматического закрытия с поддержкой игнорируемых зон.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Централизованное управление состояниями (open, show, teleport)`}),`
`,(0,$.jsx)(t.li,{children:`Координация событий кликов и автозакрытия`}),`
`,(0,$.jsx)(t.li,{children:`Измерение размеров и обновление CSS-переменных`}),`
`,(0,$.jsx)(t.li,{children:`DOM-хелперы для работы с refs, порталами и классами`}),`
`,(0,$.jsx)(t.li,{children:`Программное управление через императивные методы`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемые зоны игнорирования событий`}),`
`,(0,$.jsx)(t.li,{children:`Оптимизированная работа с DOM`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Базовая утилита для компонентов Window, Menu, Dialog`}),`
`,(0,$.jsx)(t.li,{children:`Управление анимациями открытия/закрытия`}),`
`,(0,$.jsx)(t.li,{children:`Координация состояний в всплывающих элементах`}),`
`,(0,$.jsx)(t.li,{children:`Разработка библиотек компонентов с оконным поведением`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
import { MotionTransform } from '@dxtmisha/constructor'

const element = ref()
const elementContext = ref()

const motion = new MotionTransform(
{ open: false, autoClose: true },
// ...other params
)

// Программное управление
motion.go.toOpen()
motion.go.toClose()

// Доступ к состояниям
const isOpen = motion.state.isOpen
const isShow = motion.state.isShow
<\/script>

<template>
<div ref="element">
  <!-- Контент с управляемой трансформацией -->
</div>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Это низкоуровневая утилита для разработки библиотек компонентов, не предназначенная для прямого использования в приложениях.`}),`
`]})]})}function zd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Rd,{...e})}):Rd(e)}function Bd(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: MotionTransformControlItem): any`}),` — Slot for placing the trigger element that controls the animation.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default: any`}),` — Slot for placing the content that will be animated.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MotionTransformControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: (event) => void`}),` — handler for opening/closing the transformed element.`]}),`
`]}),`
`]})]})}function Vd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Bd,{...e})}):Bd(e)}function Hd(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: MotionTransformControlItem): any`}),` — Слот для размещения триггерного элемента, управляющего анимацией.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default: any`}),` — Слот для размещения контента, который будет анимирован.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`MotionTransformControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: (event) => void`}),` — обработчик открытия/закрытия трансформируемого элемента.`]}),`
`]}),`
`]})]})}function Ud(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Hd,{...e})}):Hd(e)}function Wd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`State Management via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding of component open state via `,(0,$.jsx)(t.code,{children:`v-model:open`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — component open state`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<button @click="isOpen = true">Open</button>
<Component v-model:open="isOpen"/>
</template>
`,language:`html`})]})}function Gd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Wd,{...e})}):Wd(e)}function Kd(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление состоянием через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка состояния открытия компонента через `,(0,$.jsx)(t.code,{children:`v-model:open`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — состояние открытия компонента`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<button @click="isOpen = true">Открыть</button>
<Component v-model:open="isOpen"/>
</template>
`,language:`html`})]})}function qd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Kd,{...e})}):Kd(e)}function Jd(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsxs)(t.p,{children:[`A top-level semantic container component designed to wrap the main content of a page. It uses the `,(0,$.jsx)(t.code,{children:`<main>`}),` tag by default.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Page provides capabilities for displaying main headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate the unique part of the document's content, which is critical for accessibility and SEO. The headline is rendered as `,(0,$.jsx)(t.code,{children:`<h1>`}),` by default.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Semantic wrapper for main content (`,(0,$.jsx)(t.code,{children:`<main>`}),` tag)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Support for main headlines (default `,(0,$.jsx)(t.code,{children:`<h1>`}),`), labels, descriptions, and captions`]}),`
`,(0,$.jsx)(t.li,{children:`Support for icons`}),`
`,(0,$.jsx)(t.li,{children:`Customizable layout and spacing`}),`
`,(0,$.jsx)(t.li,{children:`Full support for slots for content customization`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Wrapper for unique page content`}),`
`,(0,$.jsx)(t.li,{children:`Main application screen`}),`
`,(0,$.jsx)(t.li,{children:`Article or documentation page`}),`
`,(0,$.jsx)(t.li,{children:`Root element for routed components (views)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Page
  headline="Main Page Title"
  label="Category"
  description="Brief description of the page content"
>
  <p>Unique page content...</p>
</Page>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Page should be used once per page (or per active view) and should not include repeated navigation elements.`}),`
`]})]})}function Yd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Jd,{...e})}):Jd(e)}function Xd(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsxs)(t.p,{children:[`Семантический компонент-контейнер верхнего уровня, предназначенный для обертки основного содержимого страницы. По умолчанию использует тег `,(0,$.jsx)(t.code,{children:`<main>`}),`.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Page предоставляет возможности для отображения главных заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение уникальной части содержимого документа, что критически важно для доступности (accessibility) и SEO. Заголовок по умолчанию рендерится как `,(0,$.jsx)(t.code,{children:`<h1>`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Семантическая обертка основного контента (тег `,(0,$.jsx)(t.code,{children:`<main>`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка главных заголовков (по умолчанию `,(0,$.jsx)(t.code,{children:`<h1>`}),`), меток, описаний и подписей`]}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемый макет и отступы`}),`
`,(0,$.jsx)(t.li,{children:`Полная поддержка слотов для кастомизации контента`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Обертка для уникального контента страницы`}),`
`,(0,$.jsx)(t.li,{children:`Главный экран приложения`}),`
`,(0,$.jsx)(t.li,{children:`Страница статьи или документации`}),`
`,(0,$.jsx)(t.li,{children:`Корневой элемент для маршрутизируемых компонентов (views)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Page
  headline="Главный заголовок страницы"
  label="Категория"
  description="Краткое описание содержимого страницы"
>
  <p>Уникальный контент страницы...</p>
</Page>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Page должен использоваться один раз на странице (или в активном view) и не должен включать повторяющиеся элементы навигации.`}),`
`]})]})}function Zd(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xd,{...e})}):Xd(e)}function Qd(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A specialized container component designed to organize and structure the main content area of a page. It provides a cohesive layout foundation for various UI blocks and sections.`}),`
`,(0,$.jsx)(t.p,{children:`PageArea acts as an orchestrator for the page's primary information, ensuring consistent spacing, alignment, and semantic grouping of nested components. It automatically determines the appropriate component to render (Page, Section, Block, or Group) based on the current nesting level or area context.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic component switching (Page -> Section -> Block -> Group) based on context`}),`
`,(0,$.jsx)(t.li,{children:`Semantic page structure organization`}),`
`,(0,$.jsx)(t.li,{children:`Integration with layout areas and context`}),`
`,(0,$.jsx)(t.li,{children:`Consistent margins and internal spacing`}),`
`,(0,$.jsx)(t.li,{children:`Support for nested UI blocks and groups`}),`
`,(0,$.jsx)(t.li,{children:`Flexible slot-based content management`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Main content wrapper for application pages`}),`
`,(0,$.jsx)(t.li,{children:`Dashboard layout orchestration`}),`
`,(0,$.jsx)(t.li,{children:`Detailed data view containers`}),`
`,(0,$.jsx)(t.li,{children:`Section grouping within large pages`}),`
`,(0,$.jsx)(t.li,{children:`Foundational structural unit for custom page layouts`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
// PageArea example
<\/script>

<template>
<PageArea>
  <!-- Your page content here -->
  <Block headline="Welcome">
    This content is organized within a PageArea.
  </Block>
</PageArea>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`PageArea is essential for maintaining a structured and consistent layout across different application views.`}),`
`]})]})}function $d(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Qd,{...e})}):Qd(e)}function ef(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Специализированный компонент-контейнер, предназначенный для организации и структурирования основной области контента страницы. Он обеспечивает согласованную основу макета для различных блоков и секций интерфейса.`}),`
`,(0,$.jsx)(t.p,{children:`PageArea выступает в роли оркестратора основной информации страницы, обеспечивая единообразные отступы, выравнивание и семантическую группировку вложенных компонентов. Он автоматически определяет подходящий компонент для рендеринга (Page, Section, Block или Group) в зависимости от текущего уровня вложенности или контекста области.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое переключение компонентов (Page -> Section -> Block -> Group) на основе контекста`}),`
`,(0,$.jsx)(t.li,{children:`Организация семантической структуры страницы`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с областями макета и контекстом`}),`
`,(0,$.jsx)(t.li,{children:`Согласованные внешние и внутренние отступы`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка вложенных блоков и групп пользовательского интерфейса`}),`
`,(0,$.jsx)(t.li,{children:`Гибкое управление контентом через слоты`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Основная обертка контента для страниц приложения`}),`
`,(0,$.jsx)(t.li,{children:`Оркестрация макета дашбордов`}),`
`,(0,$.jsx)(t.li,{children:`Контейнеры для детальных представлений данных`}),`
`,(0,$.jsx)(t.li,{children:`Группировка секций внутри больших страниц`}),`
`,(0,$.jsx)(t.li,{children:`Базовая структурная единица для пользовательских макетов страниц`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
// Пример использования PageArea
<\/script>

<template>
<PageArea>
  <!-- Контент вашей страницы -->
  <Block headline="Добро пожаловать">
    Этот контент организован внутри PageArea.
  </Block>
</PageArea>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`PageArea является важным компонентом для поддержания структурированного и согласованного макета в различных представлениях приложения.`}),`
`]})]})}function tf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ef,{...e})}):ef(e)}function nf(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Circular Progress and Related Parameters`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`circular`}),` property enables circular progress indicator display mode as a ring indicator. For optimal control over appearance and behavior, it is recommended to use it together with additional properties.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`circular`}),` — enables circular progress display mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`dense`}),` — removes internal padding for compact placement in small elements`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`circular`}),` property activates a ring progress indicator that fills around the circumference proportionally to the current value. `,(0,$.jsx)(t.code,{children:`dense`}),` removes padding, making the indicator more compact for placement in limited space.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Basic circular progress -->
<Progress circular />

<!-- Compact circular progress -->
<Progress circular dense />

<!-- With specific value -->
<Progress circular :value="75" />

<!-- Compact with value -->
<Progress circular dense :value="50" />
`,language:`html`})]})}function rf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(nf,{...e})}):nf(e)}function af(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Круглый прогресс и связанные параметры`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`circular`}),` включает режим круглого отображения индикатора прогресса в виде кольцевого индикатора. Для оптимального контроля над внешним видом и поведением рекомендуется использовать его совместно с дополнительными свойствами.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`circular`}),` — включает режим круглого отображения прогресса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`dense`}),` — убирает внутренние отступы для компактного размещения в маленьких элементах`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`circular`}),` активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению. `,(0,$.jsx)(t.code,{children:`dense`}),` убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Базовый круглый прогресс -->
<Progress circular />

<!-- Компактный круглый прогресс -->
<Progress circular dense />

<!-- С определенным значением -->
<Progress circular :value="75" />

<!-- Компактный со значением -->
<Progress circular dense :value="50" />
`,language:`html`})]})}function of(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(af,{...e})}):af(e)}function sf(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Progress Delay Management`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`delay`}),` and `,(0,$.jsx)(t.code,{children:`delayHide`}),` properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`delay`}),` — delay before showing the indicator in milliseconds, defaults to `,(0,$.jsx)(t.code,{children:`360`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`delayHide`}),` — delay before hiding the indicator in milliseconds, defaults to `,(0,$.jsx)(t.code,{children:`200`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The standard `,(0,$.jsx)(t.code,{children:`delay="360"`}),` value is proven in practice and suitable for most cases. Increase `,(0,$.jsx)(t.code,{children:`delay`}),` for rapid operations where the indicator might interfere with perception. Decrease for long operations where immediate feedback is important.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Standard delays -->
<Progress delay="360" delayHide="200" />

<!-- Fast appearance -->
<Progress delay="100" delayHide="200" />

<!-- Slow appearance -->
<Progress delay="800" delayHide="300" />

<!-- No delays -->
<Progress delay="0" delayHide="0" />
`,language:`html`})]})}function cf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sf,{...e})}):sf(e)}function lf(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление задержками прогресса`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`delay`}),` и `,(0,$.jsx)(t.code,{children:`delayHide`}),` контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`delay`}),` — задержка перед показом индикатора в миллисекундах, по умолчанию `,(0,$.jsx)(t.code,{children:`360`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`delayHide`}),` — задержка перед скрытием индикатора в миллисекундах, по умолчанию `,(0,$.jsx)(t.code,{children:`200`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Стандартное значение `,(0,$.jsx)(t.code,{children:`delay="360"`}),` проверено на практике и подходит для большинства случаев. Увеличивайте `,(0,$.jsx)(t.code,{children:`delay`}),` для очень быстрых операций, где индикатор может помешать восприятию. Уменьшайте для долгих операций, где важна немедленная обратная связь.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Стандартные задержки -->
<Progress delay="360" delayHide="200" />

<!-- Быстрое появление -->
<Progress delay="100" delayHide="200" />

<!-- Медленное появление -->
<Progress delay="800" delayHide="300" />

<!-- Без задержек -->
<Progress delay="0" delayHide="0" />
`,language:`html`})]})}function uf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(lf,{...e})}):lf(e)}function df(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Linear Progress and Related Parameters`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`linear`}),` property enables linear progress indicator display mode as a horizontal bar. For complete control over behavior and appearance, it is recommended to use it together with additional properties.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`linear`}),` — enables linear progress display mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`position`}),` — defines the indicator position (`,(0,$.jsx)(t.code,{children:`'top'`}),`, `,(0,$.jsx)(t.code,{children:`'bottom'`}),`, `,(0,$.jsx)(t.code,{children:`'static'`}),`), defaults to `,(0,$.jsx)(t.code,{children:`'top'`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`point`}),` — adds a point at the end of the indicator to emphasize the current position`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`linear`}),` property activates a horizontal progress bar that fills proportionally to the current value. `,(0,$.jsx)(t.code,{children:`position`}),` controls the placement: `,(0,$.jsx)(t.code,{children:`'top'`}),` places it at the top of the container, `,(0,$.jsx)(t.code,{children:`'bottom'`}),` at the bottom, `,(0,$.jsx)(t.code,{children:`'static'`}),` in the normal document flow. `,(0,$.jsx)(t.code,{children:`point`}),` adds a visual marker at the end of the filled portion.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Basic linear progress -->
<Progress linear />

<!-- With bottom positioning -->
<Progress linear position="bottom" />

<!-- With point in static position -->
<Progress linear position="static" point />

<!-- With specific value -->
<Progress linear position="top" point :value="65" />
`,language:`html`})]})}function ff(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(df,{...e})}):df(e)}function pf(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Линейный прогресс и связанные параметры`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`linear`}),` включает режим линейного отображения индикатора прогресса в виде горизонтальной полосы. Для полного контроля над поведением и внешним видом рекомендуется использовать его совместно с дополнительными свойствами.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`linear`}),` — включает режим линейного отображения прогресса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`position`}),` — определяет позицию индикатора (`,(0,$.jsx)(t.code,{children:`'top'`}),`, `,(0,$.jsx)(t.code,{children:`'bottom'`}),`, `,(0,$.jsx)(t.code,{children:`'static'`}),`), по умолчанию `,(0,$.jsx)(t.code,{children:`'top'`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`point`}),` — добавляет точку в конце индикатора для акцентирования текущего положения`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`linear`}),` активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению. `,(0,$.jsx)(t.code,{children:`position`}),` управляет расположением: `,(0,$.jsx)(t.code,{children:`'top'`}),` размещает индикатор в верхней части контейнера, `,(0,$.jsx)(t.code,{children:`'bottom'`}),` — в нижней, `,(0,$.jsx)(t.code,{children:`'static'`}),` — в обычном потоке документа. `,(0,$.jsx)(t.code,{children:`point`}),` добавляет визуальный маркер на конце заполненной части.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Базовый линейный прогресс -->
<Progress linear />

<!-- С позиционированием снизу -->
<Progress linear position="bottom" />

<!-- С точкой в статичной позиции -->
<Progress linear position="static" point />

<!-- С определенным значением -->
<Progress linear position="top" point :value="65" />
`,language:`html`})]})}function mf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pf,{...e})}):pf(e)}function hf(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for visual representation of operation progress, data loading, and long-running processes.`}),`
`,(0,$.jsx)(t.p,{children:`Progress provides flexible options for indicating completion status: linear and circular progress bars, minimalist point indicators. The component automatically manages visibility with customizable appearance and hiding delays, supports both determinate progress values and indeterminate states for operations with unknown completion time.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Linear and circular progress indicators`}),`
`,(0,$.jsx)(t.li,{children:`Point variants for minimal display`}),`
`,(0,$.jsx)(t.li,{children:`Determinate mode with specific values (0-100%)`}),`
`,(0,$.jsx)(t.li,{children:`Indeterminate mode for unknown execution time`}),`
`,(0,$.jsx)(t.li,{children:`Flexible positioning (top, bottom, static)`}),`
`,(0,$.jsx)(t.li,{children:`Customizable appearance and hiding delays`}),`
`,(0,$.jsx)(t.li,{children:`Compact and inverted display modes`}),`
`,(0,$.jsx)(t.li,{children:`Automatic visibility management`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Indicating data loading from server`}),`
`,(0,$.jsx)(t.li,{children:`Displaying file upload progress`}),`
`,(0,$.jsx)(t.li,{children:`Visualizing multi-step operation execution`}),`
`,(0,$.jsx)(t.li,{children:`Global page loading indicators`}),`
`,(0,$.jsx)(t.li,{children:`Progress bars in forms and wizards`}),`
`,(0,$.jsx)(t.li,{children:`Background process indication`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const progress = ref(0)
const loading = ref(false)

const startLoading = () => {
loading.value = true
progress.value = 0

const interval = setInterval(() => {
  progress.value += 10
  if (progress.value >= 100) {
    clearInterval(interval)
    loading.value = false
  }
}, 500)
}
<\/script>

<template>
<button @click="startLoading">Start Loading</button>

<!-- Linear indicator with determinate value -->
<Progress
  :visible="loading"
  :value="progress"
  linear
  position="top"
/>

<!-- Circular indicator -->
<Progress
  :visible="loading"
  :value="progress"
  circular
/>

<!-- Indeterminate indicator -->
<Progress
  :visible="loading"
  linear
  indeterminate="type1"
/>
</template>
`,language:`html`})]})}function gf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hf,{...e})}):hf(e)}function _f(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для визуального отображения прогресса выполнения операций, загрузки данных и длительных процессов.`}),`
`,(0,$.jsx)(t.p,{children:`Progress предоставляет гибкие варианты индикации состояния выполнения: линейные и круговые прогресс-бары, минималистичные точечные индикаторы. Компонент автоматически управляет видимостью с настраиваемыми задержками появления и скрытия, поддерживает как определенные значения прогресса, так и неопределенные состояния для операций с неизвестным временем завершения.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Линейные и круговые индикаторы прогресса`}),`
`,(0,$.jsx)(t.li,{children:`Точечные варианты для минимального отображения`}),`
`,(0,$.jsx)(t.li,{children:`Детерминированный режим с конкретными значениями (0-100%)`}),`
`,(0,$.jsx)(t.li,{children:`Индетерминированный режим для неизвестного времени выполнения`}),`
`,(0,$.jsx)(t.li,{children:`Гибкое позиционирование (top, bottom, static)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка задержек появления и скрытия`}),`
`,(0,$.jsx)(t.li,{children:`Компактный и инвертированный режимы отображения`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое управление видимостью`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Индикация загрузки данных с сервера`}),`
`,(0,$.jsx)(t.li,{children:`Отображение прогресса загрузки файлов`}),`
`,(0,$.jsx)(t.li,{children:`Визуализация выполнения многоэтапных операций`}),`
`,(0,$.jsx)(t.li,{children:`Глобальные индикаторы загрузки страницы`}),`
`,(0,$.jsx)(t.li,{children:`Прогресс-бары в формах и мастерах`}),`
`,(0,$.jsx)(t.li,{children:`Индикация фоновых процессов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const progress = ref(0)
const loading = ref(false)

const startLoading = () => {
loading.value = true
progress.value = 0

const interval = setInterval(() => {
  progress.value += 10
  if (progress.value >= 100) {
    clearInterval(interval)
    loading.value = false
  }
}, 500)
}
<\/script>

<template>
<button @click="startLoading">Начать загрузку</button>

<!-- Линейный индикатор с определенным значением -->
<Progress
  :visible="loading"
  :value="progress"
  linear
  position="top"
/>

<!-- Круговой индикатор -->
<Progress
  :visible="loading"
  :value="progress"
  circular
/>

<!-- Неопределенный индикатор -->
<Progress
  :visible="loading"
  linear
  indeterminate="type1"
/>
</template>
`,language:`html`})]})}function vf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_f,{...e})}):_f(e)}function yf(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Progress Value Management`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`value`}),` and `,(0,$.jsx)(t.code,{children:`max`}),` properties work together to determine the state of process execution. They establish the current value and upper limit for calculating the completion percentage of an operation.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — current progress value (what portion of the process has been completed)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`max`}),` — maximum progress value, defaults to `,(0,$.jsx)(t.code,{children:`100`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Completion percentage is calculated automatically: `,(0,$.jsx)(t.code,{children:`(value / max) * 100`}),`. The `,(0,$.jsx)(t.code,{children:`value`}),` is automatically constrained to the range from 0 to `,(0,$.jsx)(t.code,{children:`max`}),`. When `,(0,$.jsx)(t.code,{children:`max`}),` changes, the percentage display is recalculated proportionally. Use `,(0,$.jsx)(t.code,{children:`max="100"`}),` for percentage display or set it equal to the actual number of steps in the process.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Standard percentage scale -->
<Progress :value="75" :max="100" />

<!-- File loading progress -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Dynamic updates -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Custom scale -->
<Progress :value="completedTasks" :max="1000" />
`,language:`html`})]})}function bf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(yf,{...e})}):yf(e)}function xf(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление значениями прогресса`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`value`}),` и `,(0,$.jsx)(t.code,{children:`max`}),` работают в связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел для расчета процента завершения операции.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),` — текущее значение прогресса (какая часть процесса выполнена)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`max`}),` — максимальное значение прогресса, по умолчанию `,(0,$.jsx)(t.code,{children:`100`})]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Процент выполнения рассчитывается автоматически: `,(0,$.jsx)(t.code,{children:`(value / max) * 100`}),`. Значение `,(0,$.jsx)(t.code,{children:`value`}),` автоматически ограничивается диапазоном от 0 до `,(0,$.jsx)(t.code,{children:`max`}),`. При изменении `,(0,$.jsx)(t.code,{children:`max`}),` процентное отображение пересчитывается пропорционально. Используйте `,(0,$.jsx)(t.code,{children:`max="100"`}),` для процентного отображения или устанавливайте равным реальному количеству шагов в процессе.`]}),`
`,(0,$.jsx)(a,{code:`
<!-- Стандартная процентная шкала -->
<Progress :value="75" :max="100" />

<!-- Прогресс загрузки файлов -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Динамическое обновление -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Пользовательская шкала -->
<Progress :value="completedTasks" :max="1000" />
`,language:`html`})]})}function Sf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xf,{...e})}):xf(e)}function Cf(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating animated wave effect on element click.`}),`
`,(0,$.jsx)(t.p,{children:`Ripple provides visual feedback during user interaction with interactive elements, automatically tracking clicks and generating an animated wave expanding from the touch point. The effect enhances user experience by making the interface more responsive and modern.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic click event tracking`}),`
`,(0,$.jsx)(t.li,{children:`Wave animation from touch point`}),`
`,(0,$.jsxs)(t.li,{children:[`Control via `,(0,$.jsx)(t.code,{children:`disabled`}),` property`]}),`
`,(0,$.jsx)(t.li,{children:`Automatic animation removal after completion`}),`
`,(0,$.jsx)(t.li,{children:`Support for any interactive elements`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Buttons and links`}),`
`,(0,$.jsx)(t.li,{children:`Cards and lists`}),`
`,(0,$.jsx)(t.li,{children:`Toggles and checkboxes`}),`
`,(0,$.jsx)(t.li,{children:`Menu and navigation elements`}),`
`,(0,$.jsx)(t.li,{children:`Interactive icons`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Button with ripple effect -->
<button style="position: relative;">
  Click me
  <Ripple />
</button>

<!-- Disabled effect -->
<button style="position: relative;">
  No effect
  <Ripple :disabled="true" />
</button>

<!-- Card with effect -->
<div class="card" style="position: relative; cursor: pointer;">
  <h3>Interactive card</h3>
  <p>Card content</p>
  <Ripple />
</div>
</template>
`,language:`html`})]})}function wf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Cf,{...e})}):Cf(e)}function Tf(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания анимированного эффекта волны при клике на элемент.`}),`
`,(0,$.jsx)(t.p,{children:`Ripple создает визуальную обратную связь при взаимодействии пользователя с интерактивными элементами, автоматически отслеживая клики и генерируя анимированную волну, расширяющуюся от точки касания. Эффект улучшает пользовательский опыт, делая интерфейс более отзывчивым и современным.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое отслеживание событий клика`}),`
`,(0,$.jsx)(t.li,{children:`Анимация волны от точки касания`}),`
`,(0,$.jsxs)(t.li,{children:[`Управление через свойство `,(0,$.jsx)(t.code,{children:`disabled`})]}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое удаление анимации после завершения`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка любых интерактивных элементов`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Кнопки и ссылки`}),`
`,(0,$.jsx)(t.li,{children:`Карточки и списки`}),`
`,(0,$.jsx)(t.li,{children:`Переключатели и чекбоксы`}),`
`,(0,$.jsx)(t.li,{children:`Элементы меню и навигации`}),`
`,(0,$.jsx)(t.li,{children:`Интерактивные иконки`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Кнопка с эффектом волны -->
<button style="position: relative;">
  Нажми меня
  <Ripple />
</button>

<!-- Отключенный эффект -->
<button style="position: relative;">
  Без эффекта
  <Ripple :disabled="true" />
</button>

<!-- Карточка с эффектом -->
<div class="card" style="position: relative; cursor: pointer;">
  <h3>Интерактивная карточка</h3>
  <p>Содержимое карточки</p>
  <Ripple />
</div>
</template>
`,language:`html`})]})}function Ef(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Tf,{...e})}):Tf(e)}function Df(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`top`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the top scroll boundary state changes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the top position`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`reachTop`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the top scroll boundary is reached.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`leaveTop`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when leaving the top scroll boundary.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`bottom`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the bottom scroll boundary state changes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the bottom position`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`reachBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the bottom scroll boundary is reached.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`leaveBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when leaving the bottom scroll boundary.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`edge`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when any scroll boundary state changes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the top position`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the bottom position`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`edge: 'top' | 'bottom'`}),` — type of boundary that changed`]}),`
`]})]})}function Of(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Df,{...e})}):Df(e)}function kf(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`top`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния достижения верхней границы скролла.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в верхней позиции`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`reachTop`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при достижении верхней границы скролла.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`leaveTop`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при покидании верхней границы скролла.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`bottom`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния достижения нижней границы скролла.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в нижней позиции`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`reachBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при достижении нижней границы скролла.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`leaveBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при покидании нижней границы скролла.`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`edge`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния любой из границ скролла.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в верхней позиции`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в нижней позиции`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`edge: 'top' | 'bottom'`}),` — тип границы, которая изменилась`]}),`
`]})]})}function Af(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(kf,{...e})}):kf(e)}function jf(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarTop`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the top scroll boundary state changes (for use in parent components).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the top position`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarReachTop`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the top scroll boundary is reached (for use in parent components).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarLeaveTop`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when leaving the top scroll boundary (for use in parent components).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the bottom scroll boundary state changes (for use in parent components).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the bottom position`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarReachBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the bottom scroll boundary is reached (for use in parent components).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarLeaveBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when leaving the bottom scroll boundary (for use in parent components).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarEdge`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when any scroll boundary state changes (for use in parent components).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the top position`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),` if scroll is at the bottom position`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`edge: 'top' | 'bottom'`}),` — type of boundary that changed`]}),`
`]})]})}function Mf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(jf,{...e})}):jf(e)}function Nf(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarTop`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния достижения верхней границы скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в верхней позиции`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarReachTop`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при достижении верхней границы скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarLeaveTop`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при покидании верхней границы скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния достижения нижней границы скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в нижней позиции`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarReachBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при достижении нижней границы скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarLeaveBottom`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при покидании нижней границы скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`scrollbarEdge`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния любой из границ скролла (для использования в родительских компонентах).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isTop: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в верхней позиции`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isBottom: boolean`}),` — `,(0,$.jsx)(t.code,{children:`true`}),`, если скролл находится в нижней позиции`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`edge: 'top' | 'bottom'`}),` — тип границы, которая изменилась`]}),`
`]})]})}function Pf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Nf,{...e})}):Nf(e)}function Ff(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for customizing scrollbar appearance and managing visual dividers at scrollable area boundaries.`}),`
`,(0,$.jsx)(t.p,{children:`Scrollbar hides the browser's standard scrollbar and provides visual feedback when reaching the top or bottom of content through divider lines. The component automatically detects scrollbar width and adapts display for systems without visible scrollbars (e.g., macOS with trackpad).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Hide browser's standard scrollbar`}),`
`,(0,$.jsx)(t.li,{children:`Display dividers when reaching content boundaries`}),`
`,(0,$.jsx)(t.li,{children:`Independent control of top and bottom dividers`}),`
`,(0,$.jsx)(t.li,{children:`Inversion of divider display logic`}),`
`,(0,$.jsx)(t.li,{children:`Events for tracking scroll position`}),`
`,(0,$.jsxs)(t.li,{children:[`Support for infinite scroll via `,(0,$.jsx)(t.code,{children:`reachBottom`}),` events`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Lists with data loading on scroll`}),`
`,(0,$.jsx)(t.li,{children:`Modal windows and dropdown menus with scrollable content`}),`
`,(0,$.jsx)(t.li,{children:`Fixed-height areas with vertical scrolling`}),`
`,(0,$.jsx)(t.li,{children:`Visual content separation during scrolling`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleReachBottom = () => {
// Load more data
loadMoreItems()
}
<\/script>

<template>
<Scrollbar
  divider
  @reach-bottom="handleReachBottom"
>
  <div class="content">
    <!-- Scrollable content -->
  </div>
</Scrollbar>
</template>
`,language:`html`})]})}function If(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ff,{...e})}):Ff(e)}function Lf(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для кастомизации внешнего вида полосы прокрутки и управления визуальными разделителями на границах прокручиваемой области.`}),`
`,(0,$.jsx)(t.p,{children:`Scrollbar скрывает стандартную полосу прокрутки браузера и предоставляет визуальную обратную связь при достижении верхней или нижней границы контента через разделительные линии. Компонент автоматически определяет ширину скроллбара и адаптирует отображение для систем без видимых полос прокрутки (например, macOS с трекпадом).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Скрытие стандартной полосы прокрутки браузера`}),`
`,(0,$.jsx)(t.li,{children:`Отображение разделителей при достижении границ контента`}),`
`,(0,$.jsx)(t.li,{children:`Независимое управление верхним и нижним разделителями`}),`
`,(0,$.jsx)(t.li,{children:`Инверсия логики отображения разделителей`}),`
`,(0,$.jsx)(t.li,{children:`События для отслеживания позиции скролла`}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка бесконечной прокрутки через события `,(0,$.jsx)(t.code,{children:`reachBottom`})]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Списки с подгрузкой данных при скролле`}),`
`,(0,$.jsx)(t.li,{children:`Модальные окна и выпадающие меню с прокручиваемым содержимым`}),`
`,(0,$.jsx)(t.li,{children:`Области с фиксированной высотой и вертикальной прокруткой`}),`
`,(0,$.jsx)(t.li,{children:`Визуальное разделение контента при прокрутке`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleReachBottom = () => {
// Загрузка дополнительных данных
loadMoreItems()
}
<\/script>

<template>
<Scrollbar
  divider
  @reach-bottom="handleReachBottom"
>
  <div class="content">
    <!-- Прокручиваемое содержимое -->
  </div>
</Scrollbar>
</template>
`,language:`html`})]})}function Rf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Lf,{...e})}):Lf(e)}function zf(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsxs)(t.p,{children:[`A semantic container component designed for grouping related content. It uses the `,(0,$.jsx)(t.code,{children:`<section>`}),` tag by default.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Section provides capabilities for displaying headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate thematic sections of a document, which improves the semantics and accessibility of the page. The headline is rendered as `,(0,$.jsx)(t.code,{children:`<h2>`}),` by default.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Semantic content grouping (`,(0,$.jsx)(t.code,{children:`<section>`}),` tag)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Support for headlines (default `,(0,$.jsx)(t.code,{children:`<h2>`}),`), labels, descriptions, and captions`]}),`
`,(0,$.jsx)(t.li,{children:`Support for icons`}),`
`,(0,$.jsx)(t.li,{children:`Customizable layout and spacing`}),`
`,(0,$.jsx)(t.li,{children:`Full support for slots for content customization`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Thematic page sections`}),`
`,(0,$.jsx)(t.li,{children:`Content grouping in articles`}),`
`,(0,$.jsx)(t.li,{children:`Information blocks with second-level headings`}),`
`,(0,$.jsx)(t.li,{children:`Landing page sections`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Section
  headline="Section Headline"
  label="Label"
  description="Description of this section's content"
>
  <p>Main section content...</p>
</Section>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Section is the semantically correct choice for dividing a page into large logical blocks.`}),`
`]})]})}function Bf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zf,{...e})}):zf(e)}function Vf(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsxs)(t.p,{children:[`Семантический компонент-контейнер, предназначенный для группировки связанного контента. По умолчанию использует тег `,(0,$.jsx)(t.code,{children:`<section>`}),`.`]}),`
`,(0,$.jsxs)(t.p,{children:[`Section предоставляет возможности для отображения заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение тематических разделов документа, что улучшает семантику и доступность страницы. Заголовок по умолчанию рендерится как `,(0,$.jsx)(t.code,{children:`<h2>`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Семантическая группировка контента (тег `,(0,$.jsx)(t.code,{children:`<section>`}),`)`]}),`
`,(0,$.jsxs)(t.li,{children:[`Поддержка заголовков (по умолчанию `,(0,$.jsx)(t.code,{children:`<h2>`}),`), меток, описаний и подписей`]}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемый макет и отступы`}),`
`,(0,$.jsx)(t.li,{children:`Полная поддержка слотов для кастомизации контента`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Тематические разделы страницы`}),`
`,(0,$.jsx)(t.li,{children:`Группировка контента в статьях`}),`
`,(0,$.jsx)(t.li,{children:`Информационные блоки с заголовками второго уровня`}),`
`,(0,$.jsx)(t.li,{children:`Секции лэндингов`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Section
  headline="Заголовок секции"
  label="Метка"
  description="Описание содержимого данной секции"
>
  <p>Основной контент секции...</p>
</Section>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Section — это семантически верный выбор для разделения страницы на крупные логические блоки.`}),`
`]})]})}function Hf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Vf,{...e})}):Vf(e)}function Uf(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating dropdown selection lists with search, filtering, multiple selection, and validation support.`}),`
`,(0,$.jsx)(t.p,{children:`Select is a complete selection element that combines Field, Menu, SelectValue, and Input components to create an advanced selection interface. The component automatically displays selected values as text or chips (for multiple selection), provides built-in search and option filtering, supports AJAX data loading with caching. It integrates with all Field component features including validation, labels, counters, and messages.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Single or multiple value selection`}),`
`,(0,$.jsx)(t.li,{children:`Built-in search and real-time option filtering`}),`
`,(0,$.jsx)(t.li,{children:`AJAX data loading with caching support`}),`
`,(0,$.jsx)(t.li,{children:`Editable selected value mode (editValue)`}),`
`,(0,$.jsx)(t.li,{children:`Validation with standard Field features`}),`
`,(0,$.jsx)(t.li,{children:`Keyboard navigation and accessibility support`}),`
`,(0,$.jsx)(t.li,{children:`Automatic display of selected values (text or chips)`}),`
`,(0,$.jsx)(t.li,{children:`Maximum number of selected items limitation`}),`
`,(0,$.jsx)(t.li,{children:`Icon support for dropdown arrow and search`}),`
`,(0,$.jsx)(t.li,{children:`Auto-close control for multiple selection`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Field, Menu, SelectValue, Input components`}),`
`,(0,$.jsx)(t.li,{children:`Customization via slots and attributes`}),`
`,(0,$.jsx)(t.li,{children:`Responsive design for mobile devices`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Selecting values from a predefined list of options`}),`
`,(0,$.jsx)(t.li,{children:`Filtering and searching in large data lists`}),`
`,(0,$.jsx)(t.li,{children:`Multiple item selection with quantity limitation`}),`
`,(0,$.jsx)(t.li,{children:`Selection with AJAX data loading from server`}),`
`,(0,$.jsx)(t.li,{children:`Forms with validation of selected values`}),`
`,(0,$.jsx)(t.li,{children:`Combo boxes with editing capability`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedCountry = ref('us')
const selectedLanguages = ref(['js', 'ts'])

const countries = [
{ label: 'Russia', value: 'ru' },
{ label: 'USA', value: 'us' },
{ label: 'Germany', value: 'de' }
]

const languages = [
{ label: 'JavaScript', value: 'js' },
{ label: 'TypeScript', value: 'ts' },
{ label: 'Python', value: 'py' }
]
<\/script>

<template>
<!-- Simple selection -->
<Select
  v-model="selectedCountry"
  label="Country"
  placeholder="Choose a country"
  :option="countries"
/>

<!-- Multiple selection -->
<Select
  v-model="selectedLanguages"
  label="Programming languages"
  :multiple="true"
  :max="3"
  helper-message="Select up to 3 languages"
  :option="languages"
/>
</template>
`,language:`html`})]})}function Wf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Uf,{...e})}):Uf(e)}function Gf(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания выпадающих списков выбора с поддержкой поиска, фильтрации, множественного выбора и валидации.`}),`
`,(0,$.jsx)(t.p,{children:`Select представляет собой полнофункциональный элемент выбора, объединяющий компоненты Field, Menu, SelectValue и Input для создания продвинутого интерфейса выбора. Компонент автоматически отображает выбранные значения в виде текста или чипов (для множественного выбора), предоставляет встроенный поиск и фильтрацию опций, поддерживает AJAX загрузку данных с кешированием. Интегрируется со всеми возможностями компонента Field, включая валидацию, подписи, счётчики и сообщения.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Одиночный или множественный выбор значений`}),`
`,(0,$.jsx)(t.li,{children:`Встроенный поиск и фильтрация опций в реальном времени`}),`
`,(0,$.jsx)(t.li,{children:`AJAX загрузка данных с поддержкой кеширования`}),`
`,(0,$.jsx)(t.li,{children:`Режим редактирования выбранного значения (editValue)`}),`
`,(0,$.jsx)(t.li,{children:`Валидация со стандартными функциями Field`}),`
`,(0,$.jsx)(t.li,{children:`Клавиатурная навигация и поддержка accessibility`}),`
`,(0,$.jsx)(t.li,{children:`Автоматическое отображение выбранных значений (текст или чипы)`}),`
`,(0,$.jsx)(t.li,{children:`Ограничение максимального количества выбранных элементов`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок для стрелки выпадающего списка и поиска`}),`
`,(0,$.jsx)(t.li,{children:`Управление автозакрытием для множественного выбора`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с компонентами Field, Menu, SelectValue, Input`}),`
`,(0,$.jsx)(t.li,{children:`Кастомизация через слоты и атрибуты`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивный дизайн для мобильных устройств`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Выбор значений из предопределённого списка опций`}),`
`,(0,$.jsx)(t.li,{children:`Фильтрация и поиск в больших списках данных`}),`
`,(0,$.jsx)(t.li,{children:`Множественный выбор элементов с ограничением количества`}),`
`,(0,$.jsx)(t.li,{children:`Выбор с AJAX загрузкой данных с сервера`}),`
`,(0,$.jsx)(t.li,{children:`Формы с валидацией выбранных значений`}),`
`,(0,$.jsx)(t.li,{children:`Комбо-боксы с возможностью редактирования`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedCountry = ref('ru')
const selectedLanguages = ref(['js', 'ts'])

const countries = [
{ label: 'Россия', value: 'ru' },
{ label: 'США', value: 'us' },
{ label: 'Германия', value: 'de' }
]

const languages = [
{ label: 'JavaScript', value: 'js' },
{ label: 'TypeScript', value: 'ts' },
{ label: 'Python', value: 'py' }
]
<\/script>

<template>
<!-- Простой выбор -->
<Select
  v-model="selectedCountry"
  label="Страна"
  placeholder="Выберите страну"
  :option="countries"
/>

<!-- Множественный выбор -->
<Select
  v-model="selectedLanguages"
  label="Языки программирования"
  :multiple="true"
  :max="3"
  helper-message="Выберите до 3 языков"
  :option="languages"
/>
</template>
`,language:`html`})]})}function Kf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Gf,{...e})}):Gf(e)}function qf(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for displaying selected values in selection controls with support for single and multiple modes.`}),`
`,(0,$.jsx)(t.p,{children:`SelectValue manages the visualization of selected items, automatically switching between text display for single selection and chips for multiple selection. The component integrates with the event system to handle user actions, supports icon display, placeholders, and cancel buttons for selections.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic switching between single and multiple selection modes`}),`
`,(0,$.jsx)(t.li,{children:`Chip rendering with customizable appearance for multiple selections`}),`
`,(0,$.jsx)(t.li,{children:`Placeholder support for empty state`}),`
`,(0,$.jsx)(t.li,{children:`Icon display in selected items`}),`
`,(0,$.jsx)(t.li,{children:`Cancel buttons for removing individual selections`}),`
`,(0,$.jsx)(t.li,{children:`Integration with Chip component for element styling`}),`
`,(0,$.jsx)(t.li,{children:`Handling disabled and readonly states`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Displaying selected options in selects and comboboxes`}),`
`,(0,$.jsx)(t.li,{children:`Visualizing multiple selections in lists`}),`
`,(0,$.jsx)(t.li,{children:`Showing active filters with removal capability`}),`
`,(0,$.jsx)(t.li,{children:`Displaying tags and categories`}),`
`,(0,$.jsx)(t.li,{children:`Representing selected elements in forms`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedSingle = ref([
{ label: 'JavaScript', value: 'js', icon: 'code', index: '1' }
])

const selectedMultiple = ref([
{ label: 'React', value: 'react', icon: 'favorite', index: '1' },
{ label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }
])

const handleClick = (event) => {
console.log('Element clicked:', event)
}
<\/script>

<template>
<!-- Single selection -->
<SelectValue
  :value="selectedSingle"
  :icon-show="true"
  @click="handleClick"
/>

<!-- Multiple selection with chips -->
<SelectValue
  :value="selectedMultiple"
  :multiple="true"
  :icon-show="true"
  icon-cancel="close"
  @click="handleClick"
/>

<!-- With placeholder -->
<SelectValue
  placeholder="Select a value"
/>
</template>
`,language:`html`})]})}function Jf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qf,{...e})}):qf(e)}function Yf(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для отображения выбранных значений в элементах управления выбором с поддержкой одиночного и множественного режимов.`}),`
`,(0,$.jsx)(t.p,{children:`SelectValue управляет визуализацией выбранных элементов, автоматически переключаясь между текстовым отображением для одиночного выбора и чипами для множественного. Компонент интегрируется с системой событий для обработки действий пользователя, поддерживает отображение иконок, плейсхолдеров и кнопок отмены выбора.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое переключение между режимами одиночного и множественного выбора`}),`
`,(0,$.jsx)(t.li,{children:`Рендеринг чипов с настраиваемым внешним видом для множественного выбора`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка плейсхолдера для пустого состояния`}),`
`,(0,$.jsx)(t.li,{children:`Отображение иконок в выбранных элементах`}),`
`,(0,$.jsx)(t.li,{children:`Кнопки отмены для удаления отдельных выборов`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция с Chip компонентом для стилизации элементов`}),`
`,(0,$.jsx)(t.li,{children:`Обработка состояний disabled и readonly`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение выбранных опций в селектах и комбобоксах`}),`
`,(0,$.jsx)(t.li,{children:`Визуализация множественного выбора в списках`}),`
`,(0,$.jsx)(t.li,{children:`Показ активных фильтров с возможностью удаления`}),`
`,(0,$.jsx)(t.li,{children:`Отображение тегов и категорий`}),`
`,(0,$.jsx)(t.li,{children:`Представление выбранных элементов в формах`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedSingle = ref([
{ label: 'JavaScript', value: 'js', icon: 'code', index: '1' }
])

const selectedMultiple = ref([
{ label: 'React', value: 'react', icon: 'favorite', index: '1' },
{ label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }
])

const handleClick = (event) => {
console.log('Клик по элементу:', event)
}
<\/script>

<template>
<!-- Одиночный выбор -->
<SelectValue
  :value="selectedSingle"
  :icon-show="true"
  @click="handleClick"
/>

<!-- Множественный выбор с чипами -->
<SelectValue
  :value="selectedMultiple"
  :multiple="true"
  :icon-show="true"
  icon-cancel="close"
  @click="handleClick"
/>

<!-- С плейсхолдером -->
<SelectValue
  placeholder="Выберите значение"
/>
</template>
`,language:`html`})]})}function Xf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Yf,{...e})}):Yf(e)}function Zf(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating animated interface placeholders during content loading.`}),`
`,(0,$.jsxs)(t.p,{children:[`Skeleton provides smooth transitions between loading state and real content display. The component automatically manages child element visibility through the `,(0,$.jsx)(t.code,{children:`active`}),` property and supports a CSS class system for creating various types of placeholders.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic content visibility management`}),`
`,(0,$.jsx)(t.li,{children:`Support for special CSS classes for placeholders`}),`
`,(0,$.jsxs)(t.li,{children:[`Component integration via `,(0,$.jsx)(t.code,{children:`isSkeleton`}),` flag`]}),`
`,(0,$.jsx)(t.li,{children:`Flexible placeholder types (text, background, borders)`}),`
`,(0,$.jsx)(t.li,{children:`Animated loading effects`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Product and user card placeholders`}),`
`,(0,$.jsx)(t.li,{children:`List and table skeletons`}),`
`,(0,$.jsx)(t.li,{children:`Image and avatar placeholders`}),`
`,(0,$.jsx)(t.li,{children:`Text blocks during loading`}),`
`,(0,$.jsx)(t.li,{children:`Complex forms with multiple fields`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isLoading = ref(true)

setTimeout(() => {
isLoading.value = false
}, 2000)
<\/script>

<template>
<Skeleton :active="isLoading">
  <!-- Placeholders visible during loading -->
  <div class="skeleton__background avatar"></div>
  <div class="skeleton__text title"></div>
  <div class="skeleton__textVariant subtitle"></div>

  <!-- Real content -->
  <img src="/avatar.jpg" alt="User avatar" />
  <h3>{{ user.name }}</h3>
  <p>{{ user.description }}</p>
</Skeleton>
</template>
`,language:`html`})]})}function Qf(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Zf,{...e})}):Zf(e)}function $f(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания анимированных заглушек интерфейса во время загрузки контента.`}),`
`,(0,$.jsxs)(t.p,{children:[`Skeleton обеспечивает плавный переход между состоянием загрузки и отображением реального контента. Компонент автоматически управляет видимостью дочерних элементов через свойство `,(0,$.jsx)(t.code,{children:`active`}),` и поддерживает систему CSS-классов для создания различных типов заглушек.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое управление видимостью контента`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка специальных CSS-классов для заглушек`}),`
`,(0,$.jsxs)(t.li,{children:[`Работа с компонентами через флаг `,(0,$.jsx)(t.code,{children:`isSkeleton`})]}),`
`,(0,$.jsx)(t.li,{children:`Гибкая настройка типов заглушек (текст, фон, границы)`}),`
`,(0,$.jsx)(t.li,{children:`Анимированные эффекты загрузки`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Заглушки карточек товаров и пользователей`}),`
`,(0,$.jsx)(t.li,{children:`Скелетоны списков и таблиц`}),`
`,(0,$.jsx)(t.li,{children:`Заглушки изображений и аватаров`}),`
`,(0,$.jsx)(t.li,{children:`Текстовые блоки во время загрузки`}),`
`,(0,$.jsx)(t.li,{children:`Сложные формы с множественными полями`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isLoading = ref(true)

setTimeout(() => {
isLoading.value = false
}, 2000)
<\/script>

<template>
<Skeleton :active="isLoading">
  <!-- Заглушки, видимые во время загрузки -->
  <div class="skeleton__background avatar"></div>
  <div class="skeleton__text title"></div>
  <div class="skeleton__textVariant subtitle"></div>

  <!-- Реальный контент -->
  <img src="/avatar.jpg" alt="Аватар пользователя" />
  <h3>{{ user.name }}</h3>
  <p>{{ user.description }}</p>
</Skeleton>
</template>
`,language:`html`})]})}function ep(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($f,{...e})}):$f(e)}function tp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isActive: ComputedRef<boolean>`}),` — Computed state indicating whether the skeleton background animation is active.`]}),`
`]})}function np(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(tp,{...e})}):tp(e)}function rp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isActive: ComputedRef<boolean>`}),` — Вычисляемое состояние, указывающее активна ли фоновая анимация скелетона.`]}),`
`]})}function ip(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(rp,{...e})}):rp(e)}function ap(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`CSS Classes for Display Control`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__text`}),` — main class for text skeleton`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__textVariant`}),` — text class variant for additional styling`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__background`}),` — main background class for skeleton`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backgroundAfter`}),` — background class for `,(0,$.jsx)(t.code,{children:`::after`}),` pseudo-element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backgroundBefore`}),` — background class for `,(0,$.jsx)(t.code,{children:`::before`}),` pseudo-element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backgroundVariant`}),` — background class variant`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__border`}),` — class for skeleton border styling`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__borderVariant`}),` — border class variant`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__none`}),` — class to disable skeleton display`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Where `,(0,$.jsx)(t.code,{children:`*`}),` is the component class name (e.g., `,(0,$.jsx)(t.code,{children:`d1-skeleton`}),`, `,(0,$.jsx)(t.code,{children:`m3-skeleton`}),`).`]})]})}function op(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ap,{...e})}):ap(e)}function sp(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`CSS классы для управления отображением`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__text`}),` — основной класс для текстового скелета`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__textVariant`}),` — вариант текстового класса для дополнительной стилизации`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__background`}),` — основной фоновый класс скелета`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backgroundAfter`}),` — фоновый класс для псевдоэлемента `,(0,$.jsx)(t.code,{children:`::after`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backgroundBefore`}),` — фоновый класс для псевдоэлемента `,(0,$.jsx)(t.code,{children:`::before`})]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__backgroundVariant`}),` — вариант фонового класса`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__border`}),` — класс для стилизации границ скелета`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__borderVariant`}),` — вариант класса границ`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*__none`}),` — класс для отключения отображения скелета`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Где `,(0,$.jsx)(t.code,{children:`*`}),` — название класса компонента (например, `,(0,$.jsx)(t.code,{children:`d1-skeleton`}),`, `,(0,$.jsx)(t.code,{children:`m3-skeleton`}),`).`]})]})}function cp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sp,{...e})}):sp(e)}function lp(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Adaptation and Behavior`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`all`}),`, `,(0,$.jsx)(t.code,{children:`full`}),`, and `,(0,$.jsx)(t.code,{children:`limit`}),` property group allows for fine-tuning notification behavior for different device types and data volumes.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`all`}),` — displays all active notifications without automatically hiding them in a stack.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`full`}),` — enables full-screen or full-width display, which is a standard pattern for mobile devices.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`limit`}),` — limits the maximum number of simultaneously visible notifications, preventing screen clutter.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`These properties are intended solely for configuring behavior and adaptation for different screen sizes. It is recommended to define these values in the `,(0,$.jsx)(t.code,{children:`properties.json`}),` configuration file.`]}),`
`]})]})}function up(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(lp,{...e})}):lp(e)}function dp(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Адаптация и поведение`}),`
`,(0,$.jsxs)(t.p,{children:[`Группа свойств `,(0,$.jsx)(t.code,{children:`all`}),`, `,(0,$.jsx)(t.code,{children:`full`}),` и `,(0,$.jsx)(t.code,{children:`limit`}),` позволяет тонко настроить поведение уведомлений для различных типов устройств и объемов данных.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`all`}),` — отображает все активные уведомления без автоматического скрытия их в стек.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`full`}),` — включает полноэкранное или полноширинное отображение, что является стандартным паттерном для мобильных устройств.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`limit`}),` — ограничивает максимальное количество одновременно видимых уведомлений, предотвращая загромождение экрана.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Данные свойства предназначены исключительно для настройки поведения и адаптации под различные экраны. Рекомендуется задавать эти значения в конфигурационном файле `,(0,$.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`]})]})}function fp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(dp,{...e})}):dp(e)}function pp(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Adding Notifications`}),`
`,(0,$.jsxs)(t.p,{children:[`The primary interaction with the `,(0,$.jsx)(t.code,{children:`Snackbar`}),` component occurs through the `,(0,$.jsx)(t.code,{children:`add`}),` method, which is used to dynamically push new messages into the queue.`]}),`
`,(0,$.jsx)(t.h3,{children:`Method add()`}),`
`,(0,$.jsxs)(t.p,{children:[`The component instance (via `,(0,$.jsx)(t.code,{children:`ref`}),`) provides a `,(0,$.jsx)(t.code,{children:`data`}),` object containing the `,(0,$.jsx)(t.code,{children:`add(item: SnackbarValue)`}),` method. The `,(0,$.jsx)(t.code,{children:`item`}),` parameter determines the configuration and behavior of the new notification.`]}),`
`,(0,$.jsx)(a,{code:`
snackbar.value?.data.add({
data: {
  label: 'Notification Title',
  description: 'Description of the occurring event'
}
})
`,language:`typescript`}),`
`,(0,$.jsx)(t.h3,{children:`SnackbarValue Structure`}),`
`,(0,$.jsx)(t.p,{children:`The configuration object includes the following properties:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`data`})}),` (`,(0,$.jsx)(t.code,{children:`SnackbarItemProps`}),`) — Properties for the rendered component (by default `,(0,$.jsx)(t.code,{children:`SnackbarItem`}),`). This is where you pass information like `,(0,$.jsx)(t.code,{children:`label`}),`, `,(0,$.jsx)(t.code,{children:`description`}),`, `,(0,$.jsx)(t.code,{children:`icon`}),`, action buttons, and other visual data.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`component`})}),` (`,(0,$.jsx)(t.code,{children:`any`}),`) — Allows for passing a custom Vue component to be rendered instead of the standard `,(0,$.jsx)(t.code,{children:`SnackbarItem`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`highPriority`})}),` (`,(0,$.jsx)(t.code,{children:`boolean`}),`) — If `,(0,$.jsx)(t.code,{children:`true`}),`, the notification is displayed in a separate priority container (usually pinned to the top or the start of the list).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`delay`})}),` (`,(0,$.jsx)(t.code,{children:`number`}),`) — Individual lifespan of the notification in milliseconds. If omitted, the global `,(0,$.jsx)(t.code,{children:`delay`}),` value from the `,(0,$.jsx)(t.code,{children:`Snackbar`}),` settings is used.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`value`})}),` (`,(0,$.jsx)(t.code,{children:`string`}),`) — A unique key for the notification. If omitted, it is generated automatically. Used for manual removal of the message via the `,(0,$.jsx)(t.code,{children:`remove(value)`}),` method.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Custom Components`}),`
`,(0,$.jsxs)(t.p,{children:[`For notifications with non-standard layouts, you can pass your own component via the `,(0,$.jsx)(t.code,{children:`component`}),` property. All properties specified in the `,(0,$.jsx)(t.code,{children:`data`}),` object will be passed to your component as `,(0,$.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,$.jsx)(a,{code:`
import MyAlert from './MyAlert.vue'

snackbar.value?.data.add({
component: MyAlert,
data: {
  title: 'Warning!',
  message: 'This is a message with custom styling'
}
})
`,language:`typescript`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`highPriority`}),` property is recommended for critical system notifications or authorization errors, ensuring they reliably catch the user's attention and are displayed separately from the general message flow.`]})]})}function mp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pp,{...e})}):pp(e)}function hp(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Добавление уведомлений`}),`
`,(0,$.jsxs)(t.p,{children:[`Основной метод взаимодействия с компонентом `,(0,$.jsx)(t.code,{children:`Snackbar`}),` — добавление новых сообщений в очередь.`]}),`
`,(0,$.jsx)(t.h3,{children:`Метод add()`}),`
`,(0,$.jsxs)(t.p,{children:[`Через инстанс компонента (`,(0,$.jsx)(t.code,{children:`ref`}),`) доступен объект `,(0,$.jsx)(t.code,{children:`data`}),`, предоставляющий метод `,(0,$.jsx)(t.code,{children:`add(item: SnackbarValue)`}),`. Параметр `,(0,$.jsx)(t.code,{children:`item`}),` определяет конфигурацию и поведение добавляемого уведомления.`]}),`
`,(0,$.jsx)(a,{code:`
snackbar.value?.data.add({
data: {
  label: 'Заголовок уведомления',
  description: 'Описание происходящего события'
}
})
`,language:`typescript`}),`
`,(0,$.jsx)(t.h3,{children:`Структура SnackbarValue`}),`
`,(0,$.jsx)(t.p,{children:`Объект конфигурации включает следующие свойства:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`data`})}),` (`,(0,$.jsx)(t.code,{children:`SnackbarItemProps`}),`) — параметры для отображаемого компонента (по умолчанию `,(0,$.jsx)(t.code,{children:`SnackbarItem`}),`). Здесь передаются заголовок (`,(0,$.jsx)(t.code,{children:`label`}),`), описание (`,(0,$.jsx)(t.code,{children:`description`}),`), иконка (`,(0,$.jsx)(t.code,{children:`icon`}),`), кнопки действий и прочие визуальные данные.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`component`})}),` (`,(0,$.jsx)(t.code,{children:`any`}),`) — позволяет передать пользовательский Vue-компонент для рендеринга вместо стандартного `,(0,$.jsx)(t.code,{children:`SnackbarItem`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`highPriority`})}),` (`,(0,$.jsx)(t.code,{children:`boolean`}),`) — при значении `,(0,$.jsx)(t.code,{children:`true`}),` уведомление отображается в отдельном приоритетном контейнере (обычно закрепленном сверху или в начале списка).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`delay`})}),` (`,(0,$.jsx)(t.code,{children:`number`}),`) — индивидуальное время жизни уведомления в миллисекундах. Если не указано, используется глобальное значение `,(0,$.jsx)(t.code,{children:`delay`}),` из настроек `,(0,$.jsx)(t.code,{children:`Snackbar`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:(0,$.jsx)(t.code,{children:`value`})}),` (`,(0,$.jsx)(t.code,{children:`string`}),`) — уникальный ключ уведомления. Если не передан, генерируется автоматически. Необходим для ручного удаления сообщения через метод `,(0,$.jsx)(t.code,{children:`remove(value)`}),`.`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Использование кастомных компонентов`}),`
`,(0,$.jsxs)(t.p,{children:[`Для вывода уведомлений с нестандартной версткой можно передать свой компонент через свойство `,(0,$.jsx)(t.code,{children:`component`}),`. При этом все свойства, указанные в объекте `,(0,$.jsx)(t.code,{children:`data`}),`, будут переданы в ваш компонент как `,(0,$.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,$.jsx)(a,{code:`
import MyAlert from './MyAlert.vue'

snackbar.value?.data.add({
component: MyAlert,
data: {
  title: 'Внимание!',
  message: 'Это сообщение в кастомном стиле'
}
})
`,language:`typescript`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`highPriority`}),` рекомендуется использовать для критических системных уведомлений или ошибок авторизации, чтобы они гарантированно привлекали внимание пользователя и отображались отдельно от общего потока сообщений.`]})]})}function gp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hp,{...e})}):hp(e)}function _p(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Positioning`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`vertical`}),`, `,(0,$.jsx)(t.code,{children:`horizontal`}),` and `,(0,$.jsx)(t.code,{children:`origin`}),` property group allows for determining the exact position of notifications on the screen and their entrance direction.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`vertical`}),` — defines the position along the vertical axis (`,(0,$.jsx)(t.code,{children:`top`}),`, `,(0,$.jsx)(t.code,{children:`bottom`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`horizontal`}),` — manages the horizontal position of notifications and their width (`,(0,$.jsx)(t.code,{children:`right`}),`, `,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`block`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`origin`}),` — sets the direction from which the notification will slide in (`,(0,$.jsx)(t.code,{children:`topToBottom`}),`, `,(0,$.jsx)(t.code,{children:`bottomToTop`}),`, `,(0,$.jsx)(t.code,{children:`rightToLeft`}),`, `,(0,$.jsx)(t.code,{children:`leftToRight`}),`).`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`These properties are intended solely for configuring behavior and adaptation for different screen sizes. It is recommended to define these values in the `,(0,$.jsx)(t.code,{children:`properties.json`}),` configuration file.`]}),`
`]})]})}function vp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_p,{...e})}):_p(e)}function yp(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Позиционирование`}),`
`,(0,$.jsxs)(t.p,{children:[`Группа свойств `,(0,$.jsx)(t.code,{children:`vertical`}),`, `,(0,$.jsx)(t.code,{children:`horizontal`}),` и `,(0,$.jsx)(t.code,{children:`origin`}),` позволяет определить точное местоположение уведомлений на экране и направление их появления.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`vertical`}),` — определяет положение по вертикали (`,(0,$.jsx)(t.code,{children:`top`}),`, `,(0,$.jsx)(t.code,{children:`bottom`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`horizontal`}),` — определяет положение по горизонтали (`,(0,$.jsx)(t.code,{children:`right`}),`, `,(0,$.jsx)(t.code,{children:`left`}),`, `,(0,$.jsx)(t.code,{children:`block`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`origin`}),` — задает направление анимации появления (`,(0,$.jsx)(t.code,{children:`topToBottom`}),`, `,(0,$.jsx)(t.code,{children:`bottomToTop`}),`, `,(0,$.jsx)(t.code,{children:`rightToLeft`}),`, `,(0,$.jsx)(t.code,{children:`leftToRight`}),`).`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Данные свойства предназначены исключительно для настройки поведения и адаптации под различные экраны. Рекомендуется задавать эти значения в конфигурационном файле `,(0,$.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`]})]})}function bp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(yp,{...e})}):yp(e)}function xp(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsx)(t.p,{children:`A component used to display temporary notifications (snackbars) in various parts of the screen. Snackbars provide brief messages about app processes at the bottom or top of the screen.`}),`
`,(0,$.jsx)(t.p,{children:`Snackbar manages a message queue, automatically hiding notifications after a specified time or upon user interaction.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Flexible positioning (top/bottom, left/right/block)`}),`
`,(0,$.jsx)(t.li,{children:`Configurable auto-hide delay (default 8 seconds)`}),`
`,(0,$.jsx)(t.li,{children:`Supports different entrance animations based on position`}),`
`,(0,$.jsx)(t.li,{children:`Active notification list management`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Confirming user actions (e.g., "File saved erfolgreich")`}),`
`,(0,$.jsx)(t.li,{children:`Informing about errors or warnings`}),`
`,(0,$.jsx)(t.li,{children:`Real-time system notifications`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const snackbar = ref(null)

const addMessage = () => {
snackbar.value?.data.add({
  label: 'Notification Title',
  description: 'Description of the event that occurred in the app.',
  button: 'Ok'
})
}
<\/script>

<template>
<Button label="Show Notification" @click="addMessage" />

<Snackbar
  ref="snackbar"
  vertical="bottom"
  horizontal="right"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`It is recommended to use Snackbar for non-critical information that does not require immediate user action.`}),`
`]})]})}function Sp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xp,{...e})}):xp(e)}function Cp(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsx)(t.p,{children:`Компонент для отображения временных уведомлений (снекбаров) в различных частях экрана. Снекбары используются для предоставления кратких сообщений о процессах приложения в нижней или верхней части экрана.`}),`
`,(0,$.jsx)(t.p,{children:`Snackbar управляет очередью сообщений, автоматически скрывая их по истечении заданного времени или при взаимодействии пользователя.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Гибкое позиционирование (сверху/снизу, слева/справа/по центру)`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемая задержка автоматического скрытия (по умолчанию 8 секунд)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка различных анимаций появления в зависимости от позиции`}),`
`,(0,$.jsx)(t.li,{children:`Управление списком активных уведомлений`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Подтверждение действий пользователя (например, "Файл успешно сохранен")`}),`
`,(0,$.jsx)(t.li,{children:`Информирование об ошибках или предупреждениях`}),`
`,(0,$.jsx)(t.li,{children:`Системные уведомления в реальном времени`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const snackbar = ref(null)

const addMessage = () => {
snackbar.value?.data.add({
  label: 'Заголовок уведомления',
  description: 'Описание события, которое произошло в приложении.',
  button: 'Ок'
})
}
<\/script>

<template>
<Button label="Показать уведомление" @click="addMessage" />

<Snackbar
  ref="snackbar"
  vertical="bottom"
  horizontal="right"
/>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:`Рекомендуется использовать Snackbar для второстепенной информации, которая не требует немедленного обязательного действия со стороны пользователя.`}),`
`]})]})}function wp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Cp,{...e})}):Cp(e)}function Tp(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`show`})}),`
`,(0,$.jsx)(t.p,{children:`The event fires when a notification is displayed in the list.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`When triggered:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`A new notification has been successfully added to the list`}),`
`,(0,$.jsx)(t.li,{children:`The notification has become visible to the user`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Arguments:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),`: `,(0,$.jsx)(t.code,{children:`string`}),` — Unique identifier of the notification`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`item`}),`: `,(0,$.jsx)(t.code,{children:`SnackbarValue`}),` — Notification data object`]}),`
`]})]})}function Ep(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Tp,{...e})}):Tp(e)}function Dp(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`show`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при отображении уведомления в списке.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Когда срабатывает:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Новое уведомление успешно добавлено в список`}),`
`,(0,$.jsx)(t.li,{children:`Уведомление стало видимым пользователю`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),`: `,(0,$.jsx)(t.code,{children:`string`}),` — Уникальный идентификатор уведомления`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`item`}),`: `,(0,$.jsx)(t.code,{children:`SnackbarValue`}),` — Объект данных уведомления`]}),`
`]})]})}function Op(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Dp,{...e})}):Dp(e)}function kp(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`hide`})}),`
`,(0,$.jsx)(t.p,{children:`The event fires when a notification is hidden from the list.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`When triggered:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`The notification display time has expired (automatic hiding)`}),`
`,(0,$.jsx)(t.li,{children:`The user or program initiated the removal of the notification`}),`
`,(0,$.jsx)(t.li,{children:`The notification list has been cleared`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Arguments:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),`: `,(0,$.jsx)(t.code,{children:`string`}),` — Unique identifier of the notification`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`item`}),`: `,(0,$.jsx)(t.code,{children:`SnackbarValue`}),` — Notification data object`]}),`
`]})]})}function Ap(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(kp,{...e})}):kp(e)}function jp(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`hide`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при скрытии уведомления из списка.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Когда срабатывает:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Время отображения уведомления истекло (автоматическое скрытие)`}),`
`,(0,$.jsx)(t.li,{children:`Пользователь или программа инициировали удаление уведомления`}),`
`,(0,$.jsx)(t.li,{children:`Список уведомлений был очищен`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value`}),`: `,(0,$.jsx)(t.code,{children:`string`}),` — Уникальный идентификатор уведомления`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`item`}),`: `,(0,$.jsx)(t.code,{children:`SnackbarValue`}),` — Объект данных уведомления`]}),`
`]})]})}function Mp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(jp,{...e})}):jp(e)}function Np(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isItem: ComputedRef<boolean>`}),` — Computed state indicating whether there are messages in the queue to be displayed.`]}),`
`]})}function Pp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Np,{...e})}):Np(e)}function Fp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`isItem: ComputedRef<boolean>`}),` — Вычисляемое состояние, указывающее, есть ли в очереди сообщения для отображения.`]}),`
`]})}function Ip(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fp,{...e})}):Fp(e)}function Lp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`add(item: SnackbarValue): void`}),` — Method for adding a new notification to the queue.`]}),`
`]})}function Rp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Lp,{...e})}):Lp(e)}function zp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`add(item: SnackbarValue): void`}),` — Метод для добавления нового уведомления в очередь.`]}),`
`]})}function Bp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zp,{...e})}):zp(e)}function Vp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`remove(value: string): void`}),` — Method for removing a notification by its identifier.`]}),`
`]})}function Hp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Vp,{...e})}):Vp(e)}function Up(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`remove(value: string): void`}),` — Метод для удаления уведомления по его идентификатору.`]}),`
`]})}function Wp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Up,{...e})}):Up(e)}function Gp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`clear(): void`}),` — Method for completely clearing the notification queue.`]}),`
`]})}function Kp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Gp,{...e})}):Gp(e)}function qp(e){let t={code:`code`,li:`li`,ul:`ul`,...e.components};return(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`clear(): void`}),` — Метод для полной очистки очереди уведомлений.`]}),`
`]})}function Jp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qp,{...e})}):qp(e)}function Yp(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Description`}),`
`,(0,$.jsxs)(t.p,{children:[`The component represents an individual notification card inside the `,(0,$.jsx)(t.code,{children:`Snackbar`}),`. It is responsible for the visual presentation of a message, including titles, text, icons, and actions.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Displays labels, descriptions, and main text`}),`
`,(0,$.jsx)(t.li,{children:`Supports both leading and trailing icons`}),`
`,(0,$.jsx)(t.li,{children:`Default close button (cross)`}),`
`,(0,$.jsx)(t.li,{children:`Supports an additional action button`}),`
`,(0,$.jsx)(t.li,{children:`Flexible configuration via slots for complex content`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Displaying short text messages`}),`
`,(0,$.jsx)(t.li,{children:`Notifications with "Undo" or "Retry" buttons`}),`
`,(0,$.jsx)(t.li,{children:`Cards with status icons (Success, Error, Info)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Basic Usage -->
<SnackbarItem
  label="Message sent successfully"
  icon="check"
/>

<!-- With Action Button -->
<SnackbarItem
  description="Your subscription expires in 3 days."
  button="Renew"
  @click="onRenew"
/>

<!-- With Custom Content -->
<SnackbarItem>
  <div class="custom-content">
    <strong>Attention!</strong>
    <p>An unexpected server error occurred.</p>
  </div>
</SnackbarItem>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`SnackbarItem is typically not used on its own but is rendered automatically by the `,(0,$.jsx)(t.code,{children:`Snackbar`}),` component based on a provided list of data.`]}),`
`]})]})}function Xp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Yp,{...e})}):Yp(e)}function Zp(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Описание`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент представляет собой отдельную карточку уведомления внутри `,(0,$.jsx)(t.code,{children:`Snackbar`}),`. Он отвечает за визуальное представление сообщения, включая заголовок, текст, иконки и действия.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение меток (label), описаний (description) и основного текста`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок (начальной и конечной)`}),`
`,(0,$.jsx)(t.li,{children:`Кнопка закрытия (крестик) по умолчанию`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка дополнительного действия (кнопка)`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая настройка через слоты для сложного контента`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение короткого текстового сообщения`}),`
`,(0,$.jsx)(t.li,{children:`Уведомление с кнопкой "Отмена" или "Повторить"`}),`
`,(0,$.jsx)(t.li,{children:`Карточка с иконкой статуса (Success, Error, Info)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Базовое использование -->
<SnackbarItem
  label="Сообщение успешно отправлено"
  icon="check"
/>

<!-- С кнопкой действия -->
<SnackbarItem
  description="Ваша подписка истекает через 3 дня."
  button="Продлить"
  @click="onRenew"
/>

<!-- С пользовательским контентом -->
<SnackbarItem>
  <div class="custom-content">
    <strong>Внимание!</strong>
    <p>Произошла непредвиденная ошибка на сервере.</p>
  </div>
</SnackbarItem>
</template>
`,language:`html`}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`SnackbarItem обычно не используется самостоятельно, а рендерится автоматически компонентом `,(0,$.jsx)(t.code,{children:`Snackbar`}),` на основе переданного списка данных.`]}),`
`]})]})}function Qp(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Zp,{...e})}):Zp(e)}function $p(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Custom Component`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`component`}),` and `,(0,$.jsx)(t.code,{children:`componentProps`}),` properties allow you to insert a custom Vue component inside the SnackbarItem. This is useful when the standard fields (label, description) are not enough to display complex content.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`component`}),` — accepts a component object or its name.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`componentProps`}),` — an object with props that will be passed to the component.`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`The component is rendered inside a special container with the main content area class, ensuring proper padding and styling.`})]})}function em(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($p,{...e})}):$p(e)}function tm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Кастомный компонент`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойства `,(0,$.jsx)(t.code,{children:`component`}),` и `,(0,$.jsx)(t.code,{children:`componentProps`}),` позволяют вставлять пользовательский Vue-компонент внутрь SnackbarItem. Это полезно, когда стандартных полей (label, description) недостаточно для отображения сложного контента.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`component`}),` — принимает объект компонента или его имя.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`componentProps`}),` — объект с входными параметрами, которые будут переданы в компонент.`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Компонент рендерится внутри специального контейнера с классом основной области контента, что обеспечивает правильные отступы и стилизацию.`})]})}function nm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(tm,{...e})}):tm(e)}function rm(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,p:`p`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`HTML Content`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`html`}),` property allows you to insert arbitrary HTML code directly into the body of the SnackbarItem.`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`[!WARNING]
Using the `,(0,$.jsx)(t.code,{children:`html`}),` property is not recommended. It can be unsafe and may lead to XSS vulnerabilities. Consider using the `,(0,$.jsx)(t.code,{children:`component`}),` property or slots for safer and more flexible rendering of complex content.`]}),`
`]})]})}function im(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(rm,{...e})}):rm(e)}function am(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,p:`p`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`HTML-контент`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`html`}),` позволяет вставлять произвольный HTML-код непосредственно в тело SnackbarItem.`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`[!WARNING]
Использование свойства `,(0,$.jsx)(t.code,{children:`html`}),` не рекомендуется. Это может быть небезопасно и привести к XSS-уязвимостям. Рассмотрите возможность использования свойства `,(0,$.jsx)(t.code,{children:`component`}),` или слотов для более безопасного и гибкого рендеринга сложного содержимого.`]}),`
`]})]})}function om(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(am,{...e})}):am(e)}function sm(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`close`})}),`
`,(0,$.jsx)(t.p,{children:`The event is triggered when the element is closed (clicking the close button or programmatic closing).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: string | undefined`}),` — element identification (the value of the `,(0,$.jsx)(t.code,{children:`value`}),` property)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const onClose = (value) => {
console.log('Element closed:', value)
}
<\/script>

<template>
<SnackbarItem value="item-1" @close="onClose" />
</template>
`,language:`html`})]})}function cm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sm,{...e})}):sm(e)}function lm(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`close`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при закрытии элемента (нажатии на кнопку закрытия или программном закрытии).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`value: string | undefined`}),` — идентификатор элемента (значение свойства `,(0,$.jsx)(t.code,{children:`value`}),`)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const onClose = (value) => {
console.log('Элемент закрыт:', value)
}
<\/script>

<template>
<SnackbarItem value="item-1" @close="onClose" />
</template>
`,language:`html`})]})}function um(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(lm,{...e})}):lm(e)}function dm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`ARIA Role`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`role`}),` property allows you to override the default ARIA role for the notification element. The default role is `,(0,$.jsx)(t.code,{children:`status`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`When to use:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`status`}),` (default) — used for messages that contain advisory information not requiring immediate action. Assistive technologies (screen readers) will announce such a message when the user is idle.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`alert`}),` — use for critical errors or warnings requiring immediate attention. Screen readers will interrupt the current task to announce this notification.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`log`}),` — use if notifications represent a sequential log of events.`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Standard notification -->
<SnackbarItem label="Download complete" role="status" />

<!-- Critical error -->
<SnackbarItem label="Connection error!" role="alert" />
</template>
`,language:`html`})]})}function fm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(dm,{...e})}):dm(e)}function pm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`ARIA роль`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`role`}),` позволяет переопределить стандартную ARIA-роль для элемента уведомления. По умолчанию используется роль `,(0,$.jsx)(t.code,{children:`status`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Когда использовать:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`status`}),` (по умолчанию) — используйте для сообщений, которые содержат вспомогательную информацию, не требующую немедленного действия. Ассистивные технологии (экранные дикторы) озвучат такое сообщение, когда пользователь будет свободен.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`alert`}),` — используйте для критических ошибок или предупреждений, требующих немедленного внимания. Экранные дикторы прервут текущую задачу, чтобы озвучить это уведомление.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`log`}),` — используйте, если уведомления представляют собой последовательный лог событий.`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<template>
<!-- Стандартное уведомление -->
<SnackbarItem label="Загрузка завершена" role="status" />

<!-- Критическая ошибка -->
<SnackbarItem label="Ошибка соединения!" role="alert" />
</template>
`,language:`html`})]})}function mm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(pm,{...e})}):pm(e)}function hm(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`A versatile component for creating tabs, menu items, and navigation links with icon and badge support.`}),`
`,(0,$.jsx)(t.p,{children:`TabItem combines the functionality of a button, link, and list item. It supports various states (active, disabled), can display icons to the left and right of the text, and integrates with the Badge component to show notifications or counters. The component automatically manages ARIA attributes to ensure accessibility.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Displaying a label and icons (icon, iconTrailing)`}),`
`,(0,$.jsx)(t.li,{children:`Built-in badge support for counters`}),`
`,(0,$.jsx)(t.li,{children:`Managing selection state (selected) and activity`}),`
`,(0,$.jsx)(t.li,{children:`Navigation support via href (link) or to (router-link)`}),`
`,(0,$.jsx)(t.li,{children:`Customizable root tag (button, a, div, li)`}),`
`,(0,$.jsx)(t.li,{children:`Ripple effect on click`}),`
`,(0,$.jsx)(t.li,{children:`Skeleton support for loading state`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Tabs in navigation bars`}),`
`,(0,$.jsx)(t.li,{children:`Dropdown menu items`}),`
`,(0,$.jsx)(t.li,{children:`Selection lists (select options)`}),`
`,(0,$.jsx)(t.li,{children:`Sidebar navigation menus`}),`
`,(0,$.jsx)(t.li,{children:`Links with icons and counters`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const activeTab = ref('home')
<\/script>

<template>
<div class="tabs">
  <TabItem
    label="Home"
    icon="home"
    :selected="activeTab === 'home'"
    @click="activeTab = 'home'"
  />
  <TabItem
    label="Messages"
    icon="mail"
    badge="5"
    :selected="activeTab === 'messages'"
    @click="activeTab = 'messages'"
  />
  <TabItem
    label="Settings"
    icon="settings"
    disabled
  />
</div>
</template>
`,language:`html`})]})}function gm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hm,{...e})}):hm(e)}function _m(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Универсальный компонент для создания вкладок, элементов меню и навигационных ссылок с поддержкой иконок и бейджей.`}),`
`,(0,$.jsx)(t.p,{children:`TabItem объединяет в себе функциональность кнопки, ссылки и элемента списка. Он поддерживает различные состояния (активное, отключенное), может отображать иконки слева и справа от текста, а также интегрируется с компонентом Badge для отображения уведомлений или счетчиков. Компонент автоматически управляет ARIA-атрибутами для обеспечения доступности.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Отображение метки (label) и иконок (icon, iconTrailing)`}),`
`,(0,$.jsx)(t.li,{children:`Встроенная поддержка бейджа (badge) для счетчиков`}),`
`,(0,$.jsx)(t.li,{children:`Управление состоянием выбора (selected) и активности`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка навигации через href (ссылка) или to (router-link)`}),`
`,(0,$.jsx)(t.li,{children:`Настраиваемый корневой тег (button, a, div, li)`}),`
`,(0,$.jsx)(t.li,{children:`Эффект ряби (ripple) при клике`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка скелетона (skeleton) для состояния загрузки`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Вкладки в навигационных панелях`}),`
`,(0,$.jsx)(t.li,{children:`Элементы выпадающих меню`}),`
`,(0,$.jsx)(t.li,{children:`Списки выбора (select options)`}),`
`,(0,$.jsx)(t.li,{children:`Боковое меню навигации`}),`
`,(0,$.jsx)(t.li,{children:`Ссылки с иконками и счетчиками`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const activeTab = ref('home')
<\/script>

<template>
<TabItem
    label="Главная"
    icon="home"
    :selected="activeTab === 'home'"
    @click="activeTab = 'home'"
  />
</template>
`,language:`html`})]})}function vm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_m,{...e})}):_m(e)}function ym(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating tabs with navigation and animated content switching.`}),`
`,(0,$.jsx)(t.p,{children:`Tabs combines a navigation bar (TabsNavigation) and a content area (MotionAxis), ensuring synchronized switching between tabs. The component supports horizontal scrolling of headers, various display styles, and content transition animations.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic synchronization of the selected tab and content`}),`
`,(0,$.jsx)(t.li,{children:`Horizontal scrolling support for a large number of tabs`}),`
`,(0,$.jsx)(t.li,{children:`Animated transitions between content panels`}),`
`,(0,$.jsx)(t.li,{children:`Flexible customization of tab appearance (icons, labels)`}),`
`,(0,$.jsx)(t.li,{children:`State management via v-model:selected`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Organizing page content by categories`}),`
`,(0,$.jsx)(t.li,{children:`Switching between different data views`}),`
`,(0,$.jsx)(t.li,{children:`Navigation within modal windows or cards`}),`
`,(0,$.jsx)(t.li,{children:`Creating step-by-step wizards`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('tab1')
const tabs = [
{ text: 'Tab 1', value: 'tab1' },
{ text: 'Tab 2', value: 'tab2' },
{ text: 'Tab 3', value: 'tab3' }
]
<\/script>

<template>
<Tabs
  v-model:selected="selected"
  :list="tabs"
>
  <template #default="{ item }">
    <div class="p-4">
      Content for {{ item.text }}
    </div>
  </template>
</Tabs>
</template>
`,language:`html`})]})}function bm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ym,{...e})}):ym(e)}function xm(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания вкладок с навигацией и анимированным переключением контента.`}),`
`,(0,$.jsx)(t.p,{children:`Tabs объединяет навигационную панель (TabsNavigation) и область контента (MotionAxis), обеспечивая синхронизированное переключение между вкладками. Компонент поддерживает горизонтальную прокрутку заголовков, различные стили отображения и анимацию смены содержимого.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическая синхронизация выбранной вкладки и контента`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка горизонтальной прокрутки для большого количества вкладок`}),`
`,(0,$.jsx)(t.li,{children:`Анимированные переходы между панелями контента`}),`
`,(0,$.jsx)(t.li,{children:`Гибкая настройка внешнего вида вкладок (иконки, метки)`}),`
`,(0,$.jsx)(t.li,{children:`Управление состоянием через v-model:selected`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Организация контента на странице по категориям`}),`
`,(0,$.jsx)(t.li,{children:`Переключение между различными видами данных`}),`
`,(0,$.jsx)(t.li,{children:`Навигация внутри модальных окон или карточек`}),`
`,(0,$.jsx)(t.li,{children:`Создание пошаговых мастеров (wizards)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('tab1')
const tabs = [
{ text: 'Вкладка 1', value: 'tab1' },
{ text: 'Вкладка 2', value: 'tab2' },
{ text: 'Вкладка 3', value: 'tab3' }
]
<\/script>

<template>
<Tabs
  v-model:selected="selected"
  :list="tabs"
>
  <template #default="{ item }">
    <div class="p-4">
      Контент для {{ item.text }}
    </div>
  </template>
</Tabs>
</template>
`,language:`html`})]})}function Sm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xm,{...e})}):xm(e)}function Cm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`State Management via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding of the selected tab via `,(0,$.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: any`}),` — the value of the selected tab`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
<\/script>

<template>
<Tabs
  v-model:selected="selectedTab"
  :tabs="[
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' }
  ]"
>
  <template #home>Home Content</template>
  <template #profile>Profile Content</template>
</Tabs>
</template>
`,language:`html`})]})}function wm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Cm,{...e})}):Cm(e)}function Tm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление состоянием через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка выбранной вкладки через `,(0,$.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: any`}),` — значение выбранной вкладки`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
<\/script>

<template>
<Tabs
  v-model:selected="selectedTab"
  :tabs="[
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' }
  ]"
>
  <template #home>Home Content</template>
  <template #profile>Profile Content</template>
</Tabs>
</template>
`,language:`html`})]})}function Em(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Tm,{...e})}):Tm(e)}function Dm(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating horizontal navigation with tabs.`}),`
`,(0,$.jsx)(t.p,{children:`TabsNavigation manages a list of tabs, their selection, and scrolling. It supports various display styles, keyboard control, and responsiveness.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Horizontal scrolling of tabs`}),`
`,(0,$.jsxs)(t.li,{children:[`Management of the selected tab via `,(0,$.jsx)(t.code,{children:`v-model:selected`})]}),`
`,(0,$.jsx)(t.li,{children:`Support for various data types (array of objects or object)`}),`
`,(0,$.jsx)(t.li,{children:`Customization of appearance (tags, attributes, dividers)`}),`
`,(0,$.jsx)(t.li,{children:`Keyboard navigation support (arrows, Enter, Space)`}),`
`,(0,$.jsx)(t.li,{children:`Animation of the active tab indicator`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Navigation between page sections`}),`
`,(0,$.jsx)(t.li,{children:`Switching data display views`}),`
`,(0,$.jsx)(t.li,{children:`Content filtering by categories`}),`
`,(0,$.jsx)(t.li,{children:`Main application menu (tab style)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
const tabs = [
{ label: 'Home', value: 'home', icon: 'home' },
{ label: 'Profile', value: 'profile', icon: 'person' },
{ label: 'Settings', value: 'settings', icon: 'settings' }
]
<\/script>

<template>
<TabsNavigation
  v-model:selected="selectedTab"
  :list="tabs"
  horizontal-scroll-align="center"
/>
</template>
`,language:`html`})]})}function Om(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Dm,{...e})}):Dm(e)}function km(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания горизонтальной навигации с вкладками.`}),`
`,(0,$.jsx)(t.p,{children:`TabsNavigation управляет списком вкладок, их выбором и прокруткой. Поддерживает различные стили отображения, управление с клавиатуры и адаптивность.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Горизонтальная прокрутка вкладок`}),`
`,(0,$.jsxs)(t.li,{children:[`Управление выбранной вкладкой через `,(0,$.jsx)(t.code,{children:`v-model:selected`})]}),`
`,(0,$.jsx)(t.li,{children:`Поддержка различных типов данных (массив объектов или объект)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка внешнего вида (теги, атрибуты, разделители)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка клавиатурной навигации (стрелки, Enter, Пробел)`}),`
`,(0,$.jsx)(t.li,{children:`Анимация индикатора активной вкладки`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Навигация между разделами страницы`}),`
`,(0,$.jsx)(t.li,{children:`Переключение видов отображения данных`}),`
`,(0,$.jsx)(t.li,{children:`Фильтрация контента по категориям`}),`
`,(0,$.jsx)(t.li,{children:`Главное меню приложения (в стиле вкладок)`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
const tabs = [
{ label: 'Главная', value: 'home', icon: 'home' },
{ label: 'Профиль', value: 'profile', icon: 'person' },
{ label: 'Настройки', value: 'settings', icon: 'settings' }
]
<\/script>

<template>
<TabsNavigation
  v-model:selected="selectedTab"
  :list="tabs"
  horizontal-scroll-align="center"
/>
</template>
`,language:`html`})]})}function Am(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(km,{...e})}):km(e)}function jm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`State Management via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding of the selected tab via `,(0,$.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number | array`}),` — value of the selected tab (or tabs)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
const tabs = [
{ label: 'Home', value: 'home' },
{ label: 'Profile', value: 'profile' }
]
<\/script>

<template>
<p>Selected: {{ selectedTab }}</p>

<TabsNavigation
  v-model:selected="selectedTab"
  :list="tabs"
/>
</template>
`,language:`html`})]})}function Mm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(jm,{...e})}):jm(e)}function Nm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление состоянием через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка выбранной вкладки через `,(0,$.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`selected: string | number | array`}),` — значение выбранной вкладки (или вкладок)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
const tabs = [
{ label: 'Главная', value: 'home' },
{ label: 'Профиль', value: 'profile' }
]
<\/script>

<template>
<p>Выбрано: {{ selectedTab }}</p>

<TabsNavigation
  v-model:selected="selectedTab"
  :list="tabs"
/>
</template>
`,language:`html`})]})}function Pm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Nm,{...e})}):Nm(e)}function Fm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Automatic Resizing`}),`
`,(0,$.jsxs)(t.p,{children:[`The `,(0,$.jsx)(t.code,{children:`autosize`}),` property controls the automatic resizing of the textarea height based on its content.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`autosize`}),` — enables automatic resizing mode (default is `,(0,$.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`rows`}),` — number of visible rows (HTML attribute).`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`When `,(0,$.jsx)(t.code,{children:`autosize`}),` is enabled, the `,(0,$.jsx)(t.code,{children:`Textarea`}),` will dynamically adjust its height to fit all entered text.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const text = ref('')
<\/script>

<template>
<!-- Default automatic resizing -->
<Textarea
  v-model="text"
  label="Comment"
  placeholder="Enter text..."
/>

<!-- Disabled auto-resizing -->
<Textarea
  v-model="text"
  label="Fixed size"
  :autosize="false"
  rows="5"
/>
</template>
`,language:`html`})]})}function Im(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fm,{...e})}):Fm(e)}function Lm(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Автоматическое изменение размера`}),`
`,(0,$.jsxs)(t.p,{children:[`Свойство `,(0,$.jsx)(t.code,{children:`autosize`}),` управляет автоматическим изменением высоты текстового поля в зависимости от содержимого.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`autosize`}),` — включает режим автоматического изменения размера (по умолчанию `,(0,$.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`rows`}),` — количество видимых строк (атрибут HTML).`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Когда `,(0,$.jsx)(t.code,{children:`autosize`}),` включен, `,(0,$.jsx)(t.code,{children:`Textarea`}),` будет динамически изменять свою высоту, чтобы вместить весь введенный текст.`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const text = ref('')
<\/script>

<template>
<!-- Автоматическое изменение размера по умолчанию -->
<Textarea
  v-model="text"
  label="Комментарий"
  placeholder="Введите текст..."
/>

<!-- Отключенное авто-изменение размера -->
<Textarea
  v-model="text"
  label="Фиксированный размер"
  :autosize="false"
  rows="5"
/>
</template>
`,language:`html`})]})}function Rm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Lm,{...e})}):Lm(e)}function zm(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Multi-line text input component with support for auto-sizing, validation, and advanced styling.`}),`
`,(0,$.jsx)(t.p,{children:`Textarea provides a convenient interface for entering large amounts of text. The component automatically adjusts its height to fit the content, supports character limits, icons, labels, and helper messages. Integrates with the form validation system.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic height adjustment (autosize)`}),`
`,(0,$.jsx)(t.li,{children:`Validation support and error display`}),`
`,(0,$.jsx)(t.li,{children:`Built-in character counter`}),`
`,(0,$.jsx)(t.li,{children:`Support for icons, prefixes, and suffixes`}),`
`,(0,$.jsx)(t.li,{children:`Floating or static label`}),`
`,(0,$.jsx)(t.li,{children:`States: active, disabled, read-only, loading`}),`
`,(0,$.jsx)(t.li,{children:`Theme and size customization`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Comment and feedback fields`}),`
`,(0,$.jsx)(t.li,{children:`Contact forms`}),`
`,(0,$.jsx)(t.li,{children:`Description or biography editors`}),`
`,(0,$.jsx)(t.li,{children:`Address or note input`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const comment = ref('')
<\/script>

<template>
<Textarea
  v-model="comment"
  label="Your comment"
  placeholder="Enter text..."
  autosize
  counter
  :maxlength="500"
/>
</template>
`,language:`html`})]})}function Bm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zm,{...e})}):zm(e)}function Vm(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент многострочного ввода текста с поддержкой автоматического изменения размера, валидации и расширенной стилизации.`}),`
`,(0,$.jsx)(t.p,{children:`Textarea предоставляет удобный интерфейс для ввода больших объемов текста. Компонент автоматически подстраивает высоту под содержимое, поддерживает ограничение количества символов, отображение иконок, меток и вспомогательных сообщений. Интегрируется с системой валидации форм.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое изменение высоты (autosize)`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка валидации и отображение ошибок`}),`
`,(0,$.jsx)(t.li,{children:`Встроенный счетчик символов`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка иконок, префиксов и суффиксов`}),`
`,(0,$.jsx)(t.li,{children:`Плавающая или статическая метка (label)`}),`
`,(0,$.jsx)(t.li,{children:`Состояния: активное, отключенное, только для чтения, загрузка`}),`
`,(0,$.jsx)(t.li,{children:`Настройка темы и размеров`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Поля для комментариев и отзывов`}),`
`,(0,$.jsx)(t.li,{children:`Формы обратной связи`}),`
`,(0,$.jsx)(t.li,{children:`Редакторы описания или биографии`}),`
`,(0,$.jsx)(t.li,{children:`Ввод адреса или заметок`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const comment = ref('')
<\/script>

<template>
<Textarea
  v-model="comment"
  label="Ваш комментарий"
  placeholder="Введите текст..."
  autosize
  counter
  :maxlength="500"
/>
</template>
`,language:`html`})]})}function Hm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Vm,{...e})}):Vm(e)}function Um(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Text field component that automatically adjusts its height based on content.`}),`
`,(0,$.jsx)(t.p,{children:`TextareaAutosize provides a multi-line text field that dynamically changes its height depending on the amount of entered text. The component uses a hidden clone element for precise height calculation, taking into account all padding and styles of the original textarea. This ensures smooth and natural behavior when entering text without manual height adjustment.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic height adjustment based on content`}),`
`,(0,$.jsx)(t.li,{children:`Precise size calculation considering padding and styles`}),`
`,(0,$.jsx)(t.li,{children:`Smooth height transitions on content change`}),`
`,(0,$.jsx)(t.li,{children:`Optional autosize toggle for fixed height`}),`
`,(0,$.jsx)(t.li,{children:`Support for all standard textarea attributes`}),`
`,(0,$.jsx)(t.li,{children:`Reactive value binding with input events`}),`
`,(0,$.jsx)(t.li,{children:`Optimized performance through requestAnimationFrame`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Comment and review fields`}),`
`,(0,$.jsx)(t.li,{children:`Feedback forms with long texts`}),`
`,(0,$.jsx)(t.li,{children:`Description and notes editors`}),`
`,(0,$.jsx)(t.li,{children:`Chats and messengers`}),`
`,(0,$.jsx)(t.li,{children:`Forms with dynamic content`}),`
`,(0,$.jsx)(t.li,{children:`Multi-line fields in adaptive interfaces`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const message = ref('')

const handleInput = (event) => {
console.log('Current value:', event.target.value)
}
<\/script>

<template>
<div class="form">
  <TextareaAutosize
    v-model="message"
    :inputAttrs="{
      placeholder: 'Enter your message...',
      maxlength: 500
    }"
    @input="handleInput"
  />

  <TextareaAutosize
    value="Text field with fixed height"
    :autosize="false"
    :inputAttrs="{
      placeholder: 'Height does not change',
      rows: 3
    }"
  />

  <TextareaAutosize
    :inputAttrs="{
      placeholder: 'Comment',
      'aria-label': 'Comment field',
      required: true
    }"
  />
</div>
</template>
`,language:`html`})]})}function Wm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Um,{...e})}):Um(e)}function Gm(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент текстового поля с автоматической подстройкой высоты под содержимое.`}),`
`,(0,$.jsx)(t.p,{children:`TextareaAutosize предоставляет многострочное текстовое поле, которое динамически изменяет свою высоту в зависимости от объёма введённого текста. Компонент использует скрытый элемент-клон для точного расчёта необходимой высоты, учитывая все отступы и стили исходного textarea. Это обеспечивает плавное и естественное поведение при вводе текста без ручной настройки высоты.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическая подстройка высоты под содержимое`}),`
`,(0,$.jsx)(t.li,{children:`Точный расчёт размера с учётом padding и стилей`}),`
`,(0,$.jsx)(t.li,{children:`Плавные переходы высоты при изменении контента`}),`
`,(0,$.jsx)(t.li,{children:`Опциональное отключение autosize для фиксированной высоты`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка всех стандартных атрибутов textarea`}),`
`,(0,$.jsx)(t.li,{children:`Реактивная привязка значения с событиями input`}),`
`,(0,$.jsx)(t.li,{children:`Оптимизированная производительность через requestAnimationFrame`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Поля для комментариев и отзывов`}),`
`,(0,$.jsx)(t.li,{children:`Формы обратной связи с длинными текстами`}),`
`,(0,$.jsx)(t.li,{children:`Редакторы описаний и заметок`}),`
`,(0,$.jsx)(t.li,{children:`Чаты и мессенджеры`}),`
`,(0,$.jsx)(t.li,{children:`Формы с динамическим контентом`}),`
`,(0,$.jsx)(t.li,{children:`Многострочные поля в адаптивных интерфейсах`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const message = ref('')

const handleInput = (event) => {
console.log('Текущее значение:', event.target.value)
}
<\/script>

<template>
<div class="form">
  <TextareaAutosize
    v-model="message"
    :inputAttrs="{
      placeholder: 'Введите ваше сообщение...',
      maxlength: 500
    }"
    @input="handleInput"
  />

  <TextareaAutosize
    value="Текстовое поле с фиксированной высотой"
    :autosize="false"
    :inputAttrs="{
      placeholder: 'Высота не изменяется',
      rows: 3
    }"
  />

  <TextareaAutosize
    :inputAttrs="{
      placeholder: 'Комментарий',
      'aria-label': 'Поле комментария',
      required: true
    }"
  />
</div>
</template>
`,language:`html`})]})}function Km(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Gm,{...e})}):Gm(e)}function qm(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for displaying pop-up tooltips that provide additional information about an element on hover or focus.`}),`
`,(0,$.jsx)(t.p,{children:`Tooltip is automatically positioned relative to the target element and can contain a text description or custom content. The component supports configuring show and hide delays, and can be equipped with an indicator (arrow) for visual connection.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Automatic positioning`}),`
`,(0,$.jsx)(t.li,{children:`Support for an indicator (arrow)`}),`
`,(0,$.jsx)(t.li,{children:`Configuration of delays (delay, delayHide)`}),`
`,(0,$.jsx)(t.li,{children:`Visibility control via properties or events`}),`
`,(0,$.jsx)(t.li,{children:`Slot support for content customization`}),`
`,(0,$.jsx)(t.li,{children:`Adaptability and accessibility`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Explanations for icons and buttons`}),`
`,(0,$.jsx)(t.li,{children:`Displaying full text for truncated elements`}),`
`,(0,$.jsx)(t.li,{children:`Contextual hints for input fields`}),`
`,(0,$.jsx)(t.li,{children:`Additional information in the interface`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { Tooltip } from 'dxt-ui'
<\/script>

<template>
<div class="p-4">
  <Tooltip label="Tooltip text">
    <button>Hover me</button>
  </Tooltip>
</div>
</template>
`,language:`html`})]})}function Jm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(qm,{...e})}):qm(e)}function Ym(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для отображения всплывающих подсказок, предоставляющих дополнительную информацию об элементе при наведении или фокусировке.`}),`
`,(0,$.jsx)(t.p,{children:`Tooltip автоматически позиционируется относительно целевого элемента и может содержать текстовое описание или произвольный контент. Компонент поддерживает настройку задержек появления и скрытия, а также может быть оснащен указателем (стрелкой) для визуальной связи.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Автоматическое позиционирование`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка указателя (стрелки)`}),`
`,(0,$.jsx)(t.li,{children:`Настройка задержек (delay, delayHide)`}),`
`,(0,$.jsx)(t.li,{children:`Управление видимостью через свойства или события`}),`
`,(0,$.jsx)(t.li,{children:`Поддержка слотов для кастомизации контента`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивность и доступность`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Пояснения к иконкам и кнопкам`}),`
`,(0,$.jsx)(t.li,{children:`Отображение полного текста для сокращенных элементов`}),`
`,(0,$.jsx)(t.li,{children:`Контекстные подсказки для полей ввода`}),`
`,(0,$.jsx)(t.li,{children:`Дополнительная информация в интерфейсе`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { Tooltip } from 'dxt-ui'
<\/script>

<template>
<div class="p-4">
  <Tooltip label="Подсказка">
    <button>Наведи на меня</button>
  </Tooltip>
</div>
</template>
`,language:`html`})]})}function Xm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ym,{...e})}):Ym(e)}function Zm(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`tooltip`})}),`
`,(0,$.jsx)(t.p,{children:`The event is triggered when the visibility state changes (open/close).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — open state (`,(0,$.jsx)(t.code,{children:`true`}),` - open, `,(0,$.jsx)(t.code,{children:`false`}),` - closed)`]}),`
`]})]})}function Qm(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Zm,{...e})}):Zm(e)}function $m(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`tooltip`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния видимости (открытие/закрытие).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — состояние открытия (`,(0,$.jsx)(t.code,{children:`true`}),` - открыто, `,(0,$.jsx)(t.code,{children:`false`}),` - закрыто)`]}),`
`]})]})}function eh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)($m,{...e})}):$m(e)}function th(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: TooltipControlItem): any`}),` — Slot for the control element that triggers the tooltip.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`TooltipControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: object`}),` — properties for the control element (class, onclick, onmouseover, onmouseout).`]}),`
`]}),`
`]})]})}function nh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(th,{...e})}):th(e)}function rh(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: TooltipControlItem): any`}),` — Слот для элемента управления, вызывающего подсказку.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`TooltipControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: object`}),` — свойства для элемента управления (class, onclick, onmouseover, onmouseout).`]}),`
`]}),`
`]})]})}function ih(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(rh,{...e})}):rh(e)}function ah(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Positioning Direction (axis)`}),`
`,(0,$.jsxs)(t.p,{children:[`Controls the axis of window placement relative to the anchor element. Default: `,(0,$.jsx)(t.code,{children:`y`}),`.`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Applies only in menu mode (`,(0,$.jsx)(t.code,{children:`adaptive="menu"`}),` or `,(0,$.jsx)(t.code,{children:`adaptive="menuWindow"`}),`).`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'x'`}),` — horizontal axis (left or right of anchor)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'y'`}),` — vertical axis (top or bottom of anchor)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'on'`}),` — over anchor (window centers on element)`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Behavior`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Component automatically selects the placement side with the most available space`}),`
`,(0,$.jsxs)(t.li,{children:[`When using context menu (`,(0,$.jsx)(t.code,{children:`contextmenu`}),`), positioning occurs from cursor coordinates`]}),`
`,(0,$.jsx)(t.li,{children:`Window always stays within visible screen area (viewport)`}),`
`,(0,$.jsxs)(t.li,{children:[`Indent from anchor is set via `,(0,$.jsx)(t.code,{children:`indent`}),` property (default 4px)`]}),`
`]})]})}function oh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ah,{...e})}):ah(e)}function sh(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Направление позиционирования (axis)`}),`
`,(0,$.jsxs)(t.p,{children:[`Управляет осью размещения окна относительно элемента-якоря. По умолчанию: `,(0,$.jsx)(t.code,{children:`y`}),`.`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsxs)(t.p,{children:[`Применяется только в режиме меню (`,(0,$.jsx)(t.code,{children:`adaptive="menu"`}),` или `,(0,$.jsx)(t.code,{children:`adaptive="menuWindow"`}),`).`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'x'`}),` — горизонтальная ось (слева или справа от якоря)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'y'`}),` — вертикальная ось (сверху или снизу от якоря)`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`'on'`}),` — поверх якоря (окно центрируется над элементом)`]}),`
`]}),`
`,(0,$.jsx)(t.h3,{children:`Поведение`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Компонент автоматически выбирает сторону размещения с наибольшим доступным пространством`}),`
`,(0,$.jsxs)(t.li,{children:[`При использовании контекстного меню (`,(0,$.jsx)(t.code,{children:`contextmenu`}),`) позиционирование происходит от координат курсора`]}),`
`,(0,$.jsx)(t.li,{children:`Окно всегда остается в пределах видимой области экрана (viewport)`}),`
`,(0,$.jsxs)(t.li,{children:[`Отступ от якоря задается через свойство `,(0,$.jsx)(t.code,{children:`indent`}),` (по умолчанию 4px)`]}),`
`]})]})}function ch(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(sh,{...e})}):sh(e)}function lh(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`CSS Classes for Behavior Control`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--block`}),` — prevents window from closing when clicking outside its boundaries`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--blockChildren`}),` — prevents current window from closing`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--blockOther`}),` — prevents other windows from closing until current one is closed`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--close`}),` — applies to elements for closing the window`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--controlOpenOnly`}),` — applies to control elements that only open the window`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--controlStatic`}),` — applies to control elements in static mode`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--static`}),` — applies to elements inside window, canceling all actions`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Where `,(0,$.jsx)(t.code,{children:`*`}),` is the component class name (e.g., `,(0,$.jsx)(t.code,{children:`d1-window`}),`, `,(0,$.jsx)(t.code,{children:`m3-window`}),`).`]})]})}function uh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(lh,{...e})}):lh(e)}function dh(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`CSS классы для управления поведением`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--block`}),` — предотвращает закрытие окна при клике вне его границ`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--blockChildren`}),` — предотвращает закрытие текущего окна`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--blockOther`}),` — предотвращает закрытие других окон до закрытия текущего`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--close`}),` — применяется к элементам для закрытия окна`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--controlOpenOnly`}),` — применяется к элементам управления, которые только открывают окно`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--controlStatic`}),` — применяется к элементам управления в статическом режиме`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`*--static`}),` — применяется к элементам внутри окна, отменяя все действия`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Где `,(0,$.jsx)(t.code,{children:`*`}),` — название класса компонента (например, `,(0,$.jsx)(t.code,{children:`d1-window`}),`, `,(0,$.jsx)(t.code,{children:`m3-window`}),`).`]})]})}function fh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(dh,{...e})}):dh(e)}function ph(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`window`})}),`
`,(0,$.jsx)(t.p,{children:`Event fires when the window state changes (open/close).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: WindowEmitOptions`}),` — object with window data`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowEmitOptions structure:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — unique window identifier`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`element: HTMLDivElement`}),` — window DOM element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control: HTMLElement`}),` — control DOM element`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — window open state (`,(0,$.jsx)(t.code,{children:`true`}),` - open, `,(0,$.jsx)(t.code,{children:`false`}),` - closed)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleWindow = (options) => {
console.log('Window ID:', options.id)
console.log('Window is open:', options.open)
console.log('Window element:', options.element)
console.log('Control element:', options.control)
}
<\/script>

<template>
<Component @window="handleWindow">
  <template #default>
    <p>Window content</p>
  </template>
</Component>
</template>
`,language:`html`})]})}function mh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(ph,{...e})}):ph(e)}function hh(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`window`})}),`
`,(0,$.jsx)(t.p,{children:`Событие срабатывает при изменении состояния окна (открытие/закрытие).`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`options: WindowEmitOptions`}),` — объект с данными окна`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Структура WindowEmitOptions:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — уникальный идентификатор окна`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`element: HTMLDivElement`}),` — DOM элемент окна`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control: HTMLElement`}),` — DOM элемент управления`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — состояние открытия окна (`,(0,$.jsx)(t.code,{children:`true`}),` - открыто, `,(0,$.jsx)(t.code,{children:`false`}),` - закрыто)`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
const handleWindow = (options) => {
console.log('ID окна:', options.id)
console.log('Окно открыто:', options.open)
console.log('Элемент окна:', options.element)
console.log('Элемент управления:', options.control)
}
<\/script>

<template>
<Component @window="handleWindow">
  <template #default>
    <p>Содержимое окна</p>
  </template>
</Component>
</template>
`,language:`html`})]})}function gh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(hh,{...e})}):hh(e)}function _h(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — Unique identifier of the window.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — Reactive state of window visibility.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control: WindowControlItem`}),` — Control item data for window management.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — reactive open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`class: string`}),` — window CSS class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: WindowEventClick`}),` — click event handler.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onKeydown: WindowEventClick`}),` — keydown event handler.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`oncontextmenu: WindowEventClick`}),` — context menu event handler.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classesWindow: WindowClassesList`}),` — list of CSS classes for window styling.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: Record<string, any>`}),` — binding properties for the control element.`]}),`
`]}),`
`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`setOpen(open: boolean): Promise<void>`}),` — Sets window open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toOpen(): Promise<void>`}),` — Transition to opening state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toClose(): Promise<void>`}),` — Transition to closing state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toggle(): Promise<void>`}),` — Toggles window visibility (opens if closed, closes if open).`]}),`
`]})]})}function vh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(_h,{...e})}):_h(e)}function yh(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — Реактивное состояние видимости окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control: WindowControlItem`}),` — Данные элемента управления для управления окном.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — реактивное состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`class: string`}),` — CSS-класс окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: WindowEventClick`}),` — обработчик события клика.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onKeydown: WindowEventClick`}),` — обработчик события нажатия клавиши.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`oncontextmenu: WindowEventClick`}),` — обработчик события контекстного меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classesWindow: WindowClassesList`}),` — список CSS-классов для стилизации окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: Record<string, any>`}),` — свойства привязки для элемента управления.`]}),`
`]}),`
`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`setOpen(open: boolean): Promise<void>`}),` — Устанавливает состояние открытия окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toOpen(): Promise<void>`}),` — Переход в состояние открытия окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toClose(): Promise<void>`}),` — Переход в состояние закрытия окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`toggle(): Promise<void>`}),` — Переключает видимость окна (открывает, если закрыто, и закрывает, если открыто).`]}),`
`]})]})}function bh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(yh,{...e})}):yh(e)}function xh(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Lifecycle Hooks`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`preparation`})}),`
`,(0,$.jsx)(t.p,{children:`Called before the opening/closing process begins. Used for preparing elements and data.`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Type:`}),` `,(0,$.jsx)(t.code,{children:`() => void | Promise<void>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`beforeOpening`})}),`
`,(0,$.jsxs)(t.p,{children:[`Called before opening the window. Returning `,(0,$.jsx)(t.code,{children:`false`}),` cancels opening.`]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Type:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`beforeClosing`})}),`
`,(0,$.jsxs)(t.p,{children:[`Called before closing the window. Returning `,(0,$.jsx)(t.code,{children:`false`}),` cancels closing.`]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Type:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`opening`})}),`
`,(0,$.jsx)(t.p,{children:`Called after the window finishes opening (after animation).`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Type:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`closing`})}),`
`,(0,$.jsx)(t.p,{children:`Called after the window finishes closing (after animation).`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Type:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]})]})}function Sh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(xh,{...e})}):xh(e)}function Ch(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Хуки жизненного цикла`}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`preparation`})}),`
`,(0,$.jsx)(t.p,{children:`Вызывается перед началом процесса открытия/закрытия. Используется для подготовки элементов и данных.`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Тип:`}),` `,(0,$.jsx)(t.code,{children:`() => void | Promise<void>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`beforeOpening`})}),`
`,(0,$.jsxs)(t.p,{children:[`Вызывается перед открытием окна. Возврат `,(0,$.jsx)(t.code,{children:`false`}),` отменяет открытие.`]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Тип:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`beforeClosing`})}),`
`,(0,$.jsxs)(t.p,{children:[`Вызывается перед закрытием окна. Возврат `,(0,$.jsx)(t.code,{children:`false`}),` отменяет закрытие.`]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Тип:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`opening`})}),`
`,(0,$.jsx)(t.p,{children:`Вызывается после завершения открытия окна (после анимации).`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Тип:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]}),`
`,(0,$.jsx)(t.h3,{children:(0,$.jsx)(t.code,{children:`closing`})}),`
`,(0,$.jsx)(t.p,{children:`Вызывается после завершения закрытия окна (после анимации).`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:`Тип:`}),` `,(0,$.jsx)(t.code,{children:`() => boolean | Promise<boolean>`})]})]})}function wh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Ch,{...e})}):Ch(e)}function Th(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: WindowControlItem): any`}),` — Slot for placing window control elements (close buttons, minimize, etc.).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`title(props: WindowControlItem): any`}),` — Slot for placing window title in the header.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`footer(props: WindowControlItem): any`}),` — Slot for placing content at the bottom of the window (action buttons, info, etc.).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default(props: WindowControlItem): any`}),` — Main slot for placing the primary window content.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — reactive open state.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`class: string`}),` — window CSS class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: WindowEventClick`}),` — click event handler.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onKeydown: WindowEventClick`}),` — keydown event handler.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`oncontextmenu: WindowEventClick`}),` — context menu event handler.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classesWindow: WindowClassesList`}),` — list of CSS classes for window styling.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: Record<string, any>`}),` — binding properties for the control element.`]}),`
`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowClassesList:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`block: string`}),` — main block class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`blockChildren: string`}),` — block children class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`blockOther: string`}),` — block other windows class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`close: string`}),` — close button class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`static: string`}),` — static positioning class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control: string`}),` — control element class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlId: string`}),` — control ID class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlStatic: string`}),` — static control class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlOpenOnly: string`}),` — open-only control class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlActive: string`}),` — active control class.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`persistent: string`}),` — persistent window class.`]}),`
`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowEventClick:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`(event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>`}),` — window event click handler.`]}),`
`]}),`
`]})]})}function Eh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Th,{...e})}):Th(e)}function Dh(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control(props: WindowControlItem): any`}),` — Слот управления для размещения элементов управления окном (кнопки закрытия, сворачивания и т.д.).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`title(props: WindowControlItem): any`}),` — Слот заголовка для размещения заголовка окна в шапке.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`footer(props: WindowControlItem): any`}),` — Слот подвала для размещения содержимого в нижней части окна (кнопки действий, инфо и т.д.).`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`default(props: WindowControlItem): any`}),` — Основной слот для размещения главного содержимого окна.`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowControlItem:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: Ref<boolean>`}),` — реактивное состояние открытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`class: string`}),` — CSS-класс окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onclick: WindowEventClick`}),` — обработчик события клика.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`onKeydown: WindowEventClick`}),` — обработчик события нажатия клавиши.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`oncontextmenu: WindowEventClick`}),` — обработчик события контекстного меню.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`classesWindow: WindowClassesList`}),` — список CSS-классов для стилизации окна.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`binds: Record<string, any>`}),` — свойства привязки для элемента управления.`]}),`
`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowClassesList:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`block: string`}),` — основной класс блока.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`blockChildren: string`}),` — класс дочерних элементов блока.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`blockOther: string`}),` — класс блокировки других окон.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`close: string`}),` — класс кнопки закрытия.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`static: string`}),` — класс статического позиционирования.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`control: string`}),` — класс элемента управления.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlId: string`}),` — класс ID управления.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlStatic: string`}),` — класс статического управления.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlOpenOnly: string`}),` — класс управления только для открытого состояния.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`controlActive: string`}),` — класс активного управления.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`persistent: string`}),` — класс постоянного окна.`]}),`
`]}),`
`]}),`
`,(0,$.jsxs)(t.blockquote,{children:[`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`WindowEventClick:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`(event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>`}),` — обработчик события клика окна.`]}),`
`]}),`
`]})]})}function Oh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Dh,{...e})}):Dh(e)}function kh(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Static Mode (staticMode)`}),`
`,(0,$.jsxs)(t.p,{children:[`The Window component supports static mode operation through the `,(0,$.jsx)(t.code,{children:`staticMode`}),` property. In this mode, the window works as an embedded component without modal behavior:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Content displays immediately`}),` - window is not hidden and doesn't require activation`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Animations disabled`}),` - no appearance/disappearance effects`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Positioning disabled`}),` - window is embedded in document flow`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Works with adaptive`}),` - when `,(0,$.jsx)(t.code,{children:`adaptive`}),` property has one of static mode values (for example, `,(0,$.jsx)(t.code,{children:`static`}),`), static mode is enabled`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Static mode is especially useful for embedding window content directly into the interface without modal behavior.`})]})}function Ah(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(kh,{...e})}):kh(e)}function jh(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Статический режим (staticMode)`}),`
`,(0,$.jsxs)(t.p,{children:[`Компонент Window поддерживает статический режим работы через свойство `,(0,$.jsx)(t.code,{children:`staticMode`}),`. В этом режиме окно работает как встроенный компонент без модального поведения:`]}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Содержимое отображается сразу`}),` - окно не скрывается и не требует активации`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Отключены анимации`}),` - нет эффектов появления/исчезновения`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Отключено позиционирование`}),` - окно встраивается в поток документа`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.strong,{children:`Работает с adaptive`}),` - когда свойство `,(0,$.jsx)(t.code,{children:`adaptive`}),` имеет один из статичных режимов (например, `,(0,$.jsx)(t.code,{children:`static`}),`), включается статичный режим`]}),`
`]}),`
`,(0,$.jsx)(t.p,{children:`Статический режим особенно полезен для встраивания содержимого окна непосредственно в интерфейс без модального поведения.`})]})}function Mh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(jh,{...e})}):jh(e)}function Nh(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`State Management via v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Two-way binding of window open state via `,(0,$.jsx)(t.code,{children:`v-model:open`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — window open state`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<button @click="isOpen = true">Open</button>

<Window v-model:open="isOpen">
  <template #default>
    <p>Window content</p>
    <button @click="isOpen = false">Close</button>
  </template>
</Window>
</template>
`,language:`html`})]})}function Ph(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Nh,{...e})}):Nh(e)}function Fh(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h2,{children:`Управление состоянием через v-model`}),`
`,(0,$.jsxs)(t.p,{children:[`Двусторонняя привязка состояния открытия окна через `,(0,$.jsx)(t.code,{children:`v-model:open`}),`.`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.code,{children:`open: boolean`}),` — состояние открытия окна`]}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<button @click="isOpen = true">Открыть</button>

<Window v-model:open="isOpen">
  <template #default>
    <p>Содержимое окна</p>
    <button @click="isOpen = false">Закрыть</button>
  </template>
</Window>
</template>
`,language:`html`})]})}function Ih(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Fh,{...e})}):Fh(e)}function Lh(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Component for creating modal windows, dialogs, and popup elements with flexible positioning and adaptive behavior.`}),`
`,(0,$.jsx)(t.p,{children:`Window manages content display on top of the main interface, supports various positioning types (modal windows, dropdown menus, action sheets), open/close animations, and event system integration. The component automatically handles outside clicks, focus management, and adaptation to different screen sizes.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Flexible positioning (center, edges, screen corners)`}),`
`,(0,$.jsx)(t.li,{children:`Adaptive modes (modal, menu, actionSheet, static)`}),`
`,(0,$.jsx)(t.li,{children:`Open/close animations with origin customization`}),`
`,(0,$.jsx)(t.li,{children:`State management via v-model or expose methods`}),`
`,(0,$.jsx)(t.li,{children:`Scrollbar integration for scrollable content`}),`
`,(0,$.jsx)(t.li,{children:`Background interaction blocking (persistent mode)`}),`
`,(0,$.jsx)(t.li,{children:`Window lifecycle events`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Modal windows for forms and confirmations`}),`
`,(0,$.jsx)(t.li,{children:`Dropdown menus and context menus`}),`
`,(0,$.jsx)(t.li,{children:`Side panels and drawer components`}),`
`,(0,$.jsx)(t.li,{children:`Action sheets for mobile interfaces`}),`
`,(0,$.jsx)(t.li,{children:`Tooltips and dialogs`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleWindow = (options) => {
console.log('Window state:', options.open ? 'open' : 'closed')
}
<\/script>

<template>
<button @click="isOpen = true">Open Window</button>

<Window
  v-model:open="isOpen"
  adaptive="modal"
  @window="handleWindow"
>
  <template #title>
    <h2>Window Title</h2>
  </template>

  <template #default>
    <p>Modal window content</p>
  </template>

  <template #footer>
    <button @click="isOpen = false">Close</button>
  </template>
</Window>
</template>
`,language:`html`})]})}function Rh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Lh,{...e})}):Lh(e)}function zh(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.p,{children:`Компонент для создания модальных окон, диалогов и всплывающих элементов с гибким позиционированием и адаптивным поведением.`}),`
`,(0,$.jsx)(t.p,{children:`Window управляет отображением контента поверх основного интерфейса, поддерживает различные типы позиционирования (модальные окна, выпадающие меню, action sheets), анимации открытия/закрытия и интеграцию с системой событий. Компонент автоматически обрабатывает клики вне области, управление фокусом и адаптацию под различные размеры экранов.`}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Гибкое позиционирование (центр, края, углы экрана)`}),`
`,(0,$.jsx)(t.li,{children:`Адаптивные режимы (modal, menu, actionSheet, static)`}),`
`,(0,$.jsx)(t.li,{children:`Анимации открытия/закрытия с настройкой origin`}),`
`,(0,$.jsx)(t.li,{children:`Управление состоянием через v-model или expose методы`}),`
`,(0,$.jsx)(t.li,{children:`Интеграция со Scrollbar для прокручиваемого контента`}),`
`,(0,$.jsx)(t.li,{children:`Блокировка взаимодействия с фоном (persistent режим)`}),`
`,(0,$.jsx)(t.li,{children:`События жизненного цикла окна`}),`
`]}),`
`,(0,$.jsx)(t.p,{children:(0,$.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsx)(t.li,{children:`Модальные окна для форм и подтверждений`}),`
`,(0,$.jsx)(t.li,{children:`Выпадающие меню и контекстные меню`}),`
`,(0,$.jsx)(t.li,{children:`Боковые панели и drawer компоненты`}),`
`,(0,$.jsx)(t.li,{children:`Action sheets для мобильных интерфейсов`}),`
`,(0,$.jsx)(t.li,{children:`Всплывающие подсказки и диалоги`}),`
`]}),`
`,(0,$.jsx)(a,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleWindow = (options) => {
console.log('Состояние окна:', options.open ? 'открыто' : 'закрыто')
}
<\/script>

<template>
<button @click="isOpen = true">Открыть окно</button>

<Window
  v-model:open="isOpen"
  adaptive="modal"
  @window="handleWindow"
>
  <template #title>
    <h2>Заголовок окна</h2>
  </template>

  <template #default>
    <p>Содержимое модального окна</p>
  </template>

  <template #footer>
    <button @click="isOpen = false">Закрыть</button>
  </template>
</Window>
</template>
`,language:`html`})]})}function Bh(e={}){let{wrapper:t}=e.components||{};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(zh,{...e})}):zh(e)}var $,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg=e((()=>{ce(),se(),r(),i(),ne(),$=te(),Vh=({name:e,description:t,story:n})=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(oe,{children:e}),(0,$.jsx)(ie,{children:t}),(0,$.jsx)(ae,{of:n}),(0,$.jsx)(re,{of:n})]}),Hh={name:`Event`,descriptions:{actions:{en:ue,ru:de},bars:{en:fe,ru:pe},beforeinput:{en:me,ru:he},click:{en:ge,ru:_e},focus:{en:ve,ru:ye},input:{en:be,ru:xe},"input-standard":{en:Se,ru:Ce},keyboard:{en:we,ru:Te},paste:{en:Ee,ru:De},reset:{en:Oe,ru:ke}}},Uh={name:`Expose`,descriptions:{checkValidity:{en:Ae,ru:je},clear:{en:Me,ru:Ne},descriptionId:{en:Pe,ru:Fe},detail:{en:Ie,ru:Le},id:{en:Re,ru:ze},labelId:{en:Be,ru:Ve},open:{en:He,ru:Ue},selected:{en:We,ru:Ge},validationMessage:{en:Ke,ru:qe},value:{en:Je,ru:Ye}}},Wh={name:`Slot`,descriptions:{body:{en:Xe,ru:Ze},caption:{en:Qe,ru:$e},control:{en:et,ru:tt},default:{en:rt,ru:at},description:{en:st,ru:lt},footer:{en:dt,ru:pt},headline:{en:ht,ru:_t},label:{en:yt,ru:xt},leading:{en:Ct,ru:Tt},prefix:{en:Dt,ru:kt},secondary:{en:jt,ru:Nt},suffix:{en:Ft,ru:Lt},trailing:{en:zt,ru:Vt}}},Gh={name:`Style`,descriptions:{adaptive:{en:Ut,ru:Gt},asPalette:{en:qt,ru:Yt},dir:{en:Zt,ru:$t},isSkeleton:{en:tn,ru:rn}}},Kh={name:`Value`,descriptions:{highlight:{en:on,ru:cn},labelNumber:{en:un,ru:fn},"v-model":{en:vn,ru:bn},"v-model:selected":{en:Sn,ru:wn},value:{en:mn,ru:gn}}},qh={name:`Accordion`,descriptions:{accordion:{en:En,ru:On},slots:{en:An,ru:Mn}}},Jh={name:`Area`,descriptions:{area:{en:Pn,ru:In},slot:{en:Rn,ru:Bn}}},Yh={name:`Actions`,descriptions:{actions:{en:Hn,ru:Wn},flexible:{en:Kn,ru:Jn},list:{en:Xn,ru:Qn}}},Xh={name:`ActionSheet`,descriptions:{actionSheet:{en:er,ru:nr},touchClose:{en:ir,ru:or}}},Zh={name:`Anchor`,descriptions:{anchor:{en:cr,ru:ur},"expose.go":{en:fr,ru:mr},hide:{en:gr,ru:vr},isCopy:{en:br,ru:Sr},scroll:{en:wr,ru:Er}}},Qh={name:`Arrow`,descriptions:{arrow:{en:Or,ru:Ar}}},$h={name:`Badge`,descriptions:{badge:{en:Mr,ru:Pr},dot:{en:Ir,ru:Rr},outline:{en:Br,ru:Hr},primary:{en:Wr,ru:Kr},secondary:{en:Jr,ru:Xr}}},eg={name:`Bars`,descriptions:{bars:{en:Qr,ru:ei},action:{en:ni,ru:ii},slots:{en:oi,ru:ci},"v-model":{en:ui,ru:fi}}},tg={name:`Block`,descriptions:{block:{en:mi,ru:gi},differences:{en:vi,ru:bi}}},ng={name:`Button`,descriptions:{button:{en:Si,ru:wi},primary:{en:Ei,ru:Oi},secondary:{en:Ai,ru:Mi},outline:{en:Pi,ru:Ii},text:{en:Ri,ru:Bi}}},rg={name:`Cell`,descriptions:{cell:{en:Hi,ru:Wi},slots:{en:Ki,ru:Ji}}},ig={name:`Checkbox`,descriptions:{checkbox:{en:Xi,ru:Qi},indeterminate:{en:ea,ru:na},value:{en:ia,ru:oa}}},ag={name:`Chip`,descriptions:{chip:{en:ca,ru:ua},assistive:{en:fa,ru:ma},input:{en:ga,ru:va}}},og={name:`ChipGroup`,descriptions:{chipGroup:{en:ba,ru:Sa},selected:{en:wa,ru:Ea}}},sg={name:`ClientOnly`,descriptions:{clientOnly:{en:Oa,ru:Aa}}},cg={name:`Container`,descriptions:{container:{en:Ma,ru:Pa}}},lg={name:`Dialog`,descriptions:{dialog:{en:Ia,ru:Ra},states:{en:Ba,ru:Ha},buttons:{en:Wa,ru:Ka},events:{en:Ja,ru:Xa}}},ug={name:`Dummy`,descriptions:{dummy:{en:Qa,ru:eo}}},dg={name:`Field`,descriptions:{arrows:{en:uo,ru:po},cancel:{en:oo,ru:co},field:{en:no,ru:io},slots:{en:Co,ru:To},value:{en:ho,ru:_o},width:{en:yo,ru:xo}}},fg={name:`FieldCounter`,descriptions:{fieldCounter:{en:Do,ru:ko},templates:{en:jo,ru:No}}},pg={name:`FieldLabel`,descriptions:{fieldLabel:{en:Fo,ru:Lo}}},mg={name:`FieldMessage`,descriptions:{fieldMessage:{en:zo,ru:Vo},slots:{en:Uo,ru:Go}}},hg={name:`Grid`,descriptions:{grid:{en:qo,ru:Yo}}},gg={name:`GridItem`,descriptions:{gridItem:{en:Zo,ru:$o}}},_g={name:`Group`,descriptions:{group:{en:ts,ru:rs}}},vg={name:`HorizontalScroll`,descriptions:{"expose.toSelected":{en:as,ru:ss},horizontalScroll:{en:ls,ru:ds},selected:{en:ps,ru:hs}}},yg={name:`Header`,descriptions:{header:{en:_s,ru:ys}}},bg={name:`Icon`,descriptions:{icon:{en:xs,ru:Cs},"expose.isActive":{en:Ts,ru:Ds}}},xg={name:`Image`,descriptions:{image:{en:ks,ru:js},value:{en:Ns,ru:Fs},size:{en:Ls,ru:zs},adaptive:{en:Vs,ru:Us},"img-tag":{en:Gs,ru:qs},flag:{en:Ys,ru:Zs},"event.load":{en:$s,ru:tc},expose:{en:rc,ru:ac}}},Sg={name:`Input`,descriptions:{currency:{en:sc,ru:lc},date:{en:dc,ru:pc},input:{en:hc,ru:_c},mask:{en:yc,ru:xc},number:{en:Cc,ru:Tc},type:{en:Dc,ru:kc}}},Cg={name:`List`,descriptions:{list:{en:jc,ru:Nc},lite:{en:Fc,ru:Lc},"event.close":{en:zc,ru:Vc},"slot.html":{en:Uc,ru:Gc}}},wg={name:`ListGroup`,descriptions:{listGroup:{en:qc,ru:Yc},slots:{en:Zc,ru:$c}}},Tg={name:`ListItem`,descriptions:{basic:{en:tl,ru:rl},fill:{en:al,ru:sl},slots:{en:ll,ru:dl}}},Eg={name:`ListMenu`,descriptions:{listMenu:{en:pl,ru:hl}}},Dg={name:`Mask`,descriptions:{basic:{en:_l,ru:yl},dateTypes:{en:xl,ru:Cl},expose:{en:Tl,ru:Dl},groupSave:{en:kl,ru:jl},mask:{en:Nl,ru:Fl},match:{en:Ll,ru:zl},numberTypes:{en:Vl,ru:Ul},pattern:{en:Gl,ru:ql},special:{en:Yl,ru:Zl},type:{en:$l,ru:tu},visible:{en:ru,ru:au}}},Og={name:`Menu`,descriptions:{ajax:{en:su,ru:lu},"event.updateValue":{en:du,ru:pu},"expose.navigation":{en:hu,ru:_u},menu:{en:yu,ru:xu},navigation:{en:Cu,ru:Tu},slots:{en:Du,ru:ku},slotsControl:{en:ju,ru:Nu}}},kg={name:`Modal`,descriptions:{differences:{en:Fu,ru:Lu},modal:{en:zu,ru:Vu}}},Ag={name:`MotionAxis`,descriptions:{classes:{en:Uu,ru:Gu},events:{en:qu,ru:Yu},expose:{en:Zu,ru:$u},motionAxis:{en:td,ru:rd},slots:{en:ad,ru:sd},"v-model":{en:ld,ru:dd}}},jg={name:`MotionTransform`,descriptions:{animationHeadPosition:{en:pd,ru:hd},classes:{en:_d,ru:yd},events:{en:xd,ru:Cd},expose:{en:Td,ru:Dd},"expose.motionTransformElement":{en:kd,ru:jd},ignore:{en:Nd,ru:Fd},motionTransform:{en:Ld,ru:zd},slots:{en:Vd,ru:Ud},"v-model":{en:Gd,ru:qd}}},Mg={name:`Page`,descriptions:{block:{en:Yd,ru:Zd}}},Ng={name:`PageArea`,descriptions:{pageArea:{en:$d,ru:tf}}},Pg={name:`Progress`,descriptions:{circular:{en:rf,ru:of},delays:{en:cf,ru:uf},linear:{en:ff,ru:mf},progress:{en:gf,ru:vf},values:{en:bf,ru:Sf}}},Fg={name:`Ripple`,descriptions:{ripple:{en:wf,ru:Ef}}},Ig={name:`Scrollbar`,descriptions:{emits:{en:Of,ru:Af},"emits-include":{en:Mf,ru:Pf},scrollbar:{en:If,ru:Rf}}},Lg={name:`Section`,descriptions:{section:{en:Bf,ru:Hf}}},Rg={name:`Select`,descriptions:{select:{en:Wf,ru:Kf}}},zg={name:`SelectValue`,descriptions:{selectValue:{en:Jf,ru:Xf}}},Bg={name:`Skeleton`,descriptions:{active:{en:Qf,ru:ep},"expose.isActive":{en:np,ru:ip},classes:{en:op,ru:cp}}},Vg={name:`Snackbar`,descriptions:{snackbar:{en:Sp,ru:wp},adaptation:{en:up,ru:fp},add:{en:mp,ru:gp},position:{en:vp,ru:bp},"event.show":{en:Ep,ru:Op},"event.hide":{en:Ap,ru:Mp},"expose.isItem":{en:Pp,ru:Ip},"expose.add":{en:Rp,ru:Bp},"expose.remove":{en:Hp,ru:Wp},"expose.clear":{en:Kp,ru:Jp}}},Hg={name:`SnackbarItem`,descriptions:{snackbarItem:{en:Xp,ru:Qp},component:{en:em,ru:nm},html:{en:im,ru:om},eventClose:{en:cm,ru:um},role:{en:fm,ru:mm}}},Ug={name:`TabItem`,descriptions:{tabItem:{en:gm,ru:vm}}},Wg={name:`Tabs`,descriptions:{tabs:{en:bm,ru:Sm},"v-model":{en:wm,ru:Em}}},Gg={name:`TabsNavigation`,descriptions:{tabsNavigation:{en:Om,ru:Am},"v-model":{en:Mm,ru:Pm}}},Kg={name:`Textarea`,descriptions:{autosize:{en:Im,ru:Rm},textarea:{en:Bm,ru:Hm}}},qg={name:`TextareaAutosize`,descriptions:{"textarea-autosize":{en:Wm,ru:Km}}},Jg={name:`Tooltip`,descriptions:{tooltip:{en:Jm,ru:Xm},"event.tooltip":{en:Qm,ru:eh},"slot.control":{en:nh,ru:ih}}},Yg=[Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,{name:`Window`,descriptions:{axis:{en:oh,ru:ch},classes:{en:uh,ru:fh},"event.window":{en:mh,ru:gh},expose:{en:vh,ru:bh},hooks:{en:Sh,ru:wh},slots:{en:Eh,ru:Oh},staticMode:{en:Ah,ru:Mh},"v-model":{en:Ph,ru:Ih},window:{en:Rh,ru:Bh}}}],Xg=class{constructor(e){o(this,`item`,void 0),o(this,`mdx`,void 0),this.item=le.find(t=>t.name===e),this.mdx=Yg.find(t=>t.name===e)}getItem(){return this.item}getDescriptionByType(e){var r;let i=(r=this.mdx)==null||(r=r.descriptions)==null?void 0:r[e];return ee(i?n(i)?i[t.getLanguage()]:i:``)}},Zg=({componentName:e,type:t})=>new Xg(e).getDescriptionByType(t)}));export{Vh as n,Qg as r,Zg as t};