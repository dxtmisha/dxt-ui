import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as Ts,S as Bs,C as Ns,j as Ps}from"./blocks-Cpz0g9q0.js";import{af as Os,ad as Es,an as As}from"./iframe-CFZkzvey.js";import{b as Rs}from"./wiki-NZJqstoo.js";import{useMDXComponents as s}from"./index-C8vOrmRQ.js";const Zo=({name:i,description:n,story:t})=>e.jsxs(e.Fragment,{children:[e.jsx(Ts,{children:i}),e.jsx(Bs,{children:n}),e.jsx(Ns,{of:t}),e.jsx(Ps,{of:t})]});function l(i){const n={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"bars",children:e.jsx(n.code,{children:"bars"})}),`
`,e.jsx(n.p,{children:"Event fires when clicking on a Bars panel element, passing the original DOM event and click data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent"})," — original DOM mouse event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — object with click data"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"EventClickValue structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string"})," — click/button type (e.g., ",e.jsx(n.code,{children:"'back'"})," for back button)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — arbitrary button value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail: Record<string, any> | undefined"})," — additional event data"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsx(n.h3,{id:"barslite",children:e.jsx(n.code,{children:"barsLite"})}),`
`,e.jsx(n.p,{children:"Event fires when clicking on a Bars panel element, passing only data without the original DOM event (lightweight version)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — object with click data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"barsback",children:e.jsx(n.code,{children:"barsBack"})}),`
`,e.jsx(n.p,{children:'Event fires when the "Back" button in Bars panel is clicked, passing only click data.'}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — object with click data"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Back button can be hidden with ",e.jsx(n.code,{children:"barsBackHide"})," property."]}),`
`]})]})}function Ws(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}function r(i){const n={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"bars",children:e.jsx(n.code,{children:"bars"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при клике на элемент панели Bars, передавая оригинальное DOM событие и данные о клике."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent"})," — оригинальное DOM событие мыши"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — объект с данными о клике"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура EventClickValue:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string"})," — тип клика/кнопки (например, ",e.jsx(n.code,{children:"'back'"})," для кнопки назад)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — произвольное значение кнопки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail: Record<string, any> | undefined"})," — дополнительные данные события"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsx(n.h3,{id:"barslite",children:e.jsx(n.code,{children:"barsLite"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при клике на элемент панели Bars, передавая только данные без оригинального DOM события (облегченная версия)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — объект с данными о клике"]}),`
`]}),`
`,e.jsx(n.h3,{id:"barsback",children:e.jsx(n.code,{children:"barsBack"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при клике по кнопке «Назад» в панели Bars, передавая только данные о клике."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — объект с данными о клике"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Кнопку «Назад» можно скрыть свойством ",e.jsx(n.code,{children:"barsBackHide"}),"."]}),`
`]})]})}function Vs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}function c(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"beforeinput",children:e.jsx(n.code,{children:"beforeinput"})}),`
`,e.jsx(n.p,{children:"Event fires before the value in the input field changes, allowing you to prevent or modify data input."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: InputEvent"})," — original DOM input event"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Input type examples (inputType):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"insertText"})," — text input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"insertFromPaste"})," — paste from clipboard"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteContentBackward"})," — delete character backward (Backspace)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteContentForward"})," — delete character forward (Delete)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"insertLineBreak"})," — insert line break"]}),`
`]})]})}function Hs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}function o(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"beforeinput",children:e.jsx(n.code,{children:"beforeinput"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает перед изменением значения в поле ввода, позволяя предотвратить или модифицировать ввод данных."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: InputEvent"})," — оригинальное DOM событие ввода"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Примеры типов ввода (inputType):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"insertText"})," — ввод текста"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"insertFromPaste"})," — вставка из буфера обмена"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteContentBackward"})," — удаление символа назад (Backspace)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteContentForward"})," — удаление символа вперед (Delete)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"insertLineBreak"})," — вставка переноса строки"]}),`
`]})]})}function qs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}function d(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"click",children:e.jsx(n.code,{children:"click"})}),`
`,e.jsx(n.p,{children:"Event fires when clicking on the component, passing the original DOM event and component data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent"})," — original DOM mouse event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — object with component data"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"EventClickValue structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string"})," — click location identifier, set through ",e.jsx(n.code,{children:"data-event-type"})," attribute on the element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — component value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail: Record<string, any> | undefined"})," — additional event data"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsx(n.h3,{id:"clicklite",children:e.jsx(n.code,{children:"clickLite"})}),`
`,e.jsx(n.p,{children:"Event fires when clicking on the component, passing only data without the original DOM event (lightweight version)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — object with component data"]}),`
`]})]})}function Ys(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}function a(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"click",children:e.jsx(n.code,{children:"click"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при клике на компонент, передавая оригинальное DOM событие и данные компонента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent"})," — оригинальное DOM событие мыши"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — объект с данными компонента"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура EventClickValue:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string"})," — идентификатор места нажатия, задается через атрибут ",e.jsx(n.code,{children:"data-event-type"})," у элемента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — значение компонента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail: Record<string, any> | undefined"})," — дополнительные данные события"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsx(n.h3,{id:"clicklite",children:e.jsx(n.code,{children:"clickLite"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при клике на компонент, передавая только данные без оригинального DOM события (облегченная версия)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: EventClickValue"})," — объект с данными компонента"]}),`
`]})]})}function zs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}function h(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"focus",children:e.jsx(n.code,{children:"focus"})}),`
`,e.jsx(n.p,{children:"Event fires when the input element receives focus, passing the original DOM event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: FocusEvent"})," — original DOM focus event"]}),`
`]}),`
`,e.jsx(n.h3,{id:"blur",children:e.jsx(n.code,{children:"blur"})}),`
`,e.jsx(n.p,{children:"Event fires when the input element loses focus, passing the original DOM event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: FocusEvent"})," — original DOM blur event"]}),`
`]})]})}function Us(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(h,{...i})}):h(i)}function x(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"focus",children:e.jsx(n.code,{children:"focus"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при получении фокуса элементом ввода, передавая оригинальное DOM событие."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: FocusEvent"})," — оригинальное DOM событие фокуса"]}),`
`]}),`
`,e.jsx(n.h3,{id:"blur",children:e.jsx(n.code,{children:"blur"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при потере фокуса элементом ввода, передавая оригинальное DOM событие."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: FocusEvent"})," — оригинальное DOM событие потери фокуса"]}),`
`]})]})}function Gs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(x,{...i})}):x(i)}function j(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"input",children:e.jsx(n.code,{children:"input"})}),`
`,e.jsx(n.p,{children:"Event fires when the value in the input field changes, passing the original DOM event and validation data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: InputEvent"})," — original DOM input event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — object with validation data"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"FieldValidationItem structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"group: string | undefined"})," — mask group key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input: HTMLInputElement | HTMLTextAreaElement | undefined"})," — related input element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern: FieldPatternItemOrFunction | undefined"})," — validation pattern used"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | undefined"})," — custom type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"status: boolean | undefined"})," — validation success status"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"required: boolean | undefined"})," — field required flag"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isFull: boolean | undefined"})," — value completion flag"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validationMessage: string | undefined"})," — error message text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validity: ValidityState | undefined"})," — native validity state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validityMessage: string | undefined"})," — custom validity message"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — original value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"valueInput: any | undefined"})," — entered value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail: Record<string, any> | undefined"})," — additional data"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsx(n.h3,{id:"inputlite",children:e.jsx(n.code,{children:"inputLite"})}),`
`,e.jsx(n.p,{children:"Event fires when the value in the input field changes, passing only validation data without the original DOM event (lightweight version)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — object with validation data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"change",children:e.jsx(n.code,{children:"change"})}),`
`,e.jsx(n.p,{children:"Event fires when input is completed and focus is lost, passing the original DOM event and validation data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: InputEvent"})," — original DOM input event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — object with validation data"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"FieldValidationItem structure:"})," same as for ",e.jsx(n.code,{children:"input"})," event"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsx(n.h3,{id:"changelite",children:e.jsx(n.code,{children:"changeLite"})}),`
`,e.jsx(n.p,{children:"Event fires when input is completed and focus is lost, passing only validation data without the original DOM event (lightweight version)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — object with validation data"]}),`
`]})]})}function Ks(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(j,{...i})}):j(i)}function p(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"input",children:e.jsx(n.code,{children:"input"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие и данные валидации."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: InputEvent"})," — оригинальное DOM событие ввода"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — объект с данными валидации"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура FieldValidationItem:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"group: string | undefined"})," — ключ группы маски"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input: HTMLInputElement | HTMLTextAreaElement | undefined"})," — связанный элемент ввода"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern: FieldPatternItemOrFunction | undefined"})," — используемый паттерн валидации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | undefined"})," — произвольный тип"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"status: boolean | undefined"})," — статус успешности валидации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"required: boolean | undefined"})," — флаг обязательности поля"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isFull: boolean | undefined"})," — флаг полноты заполнения значения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validationMessage: string | undefined"})," — текст сообщения об ошибке"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validity: ValidityState | undefined"})," — нативное состояние валидности"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validityMessage: string | undefined"})," — кастомное сообщение валидности"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — исходное значение"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"valueInput: any | undefined"})," — введённое значение"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail: Record<string, any> | undefined"})," — дополнительные данные"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
  <Mask
    mask="+7 (***) ***-**-**"
    @input="handleInput"
  />
</template>
`})}),`
`,e.jsx(n.h3,{id:"inputlite",children:e.jsx(n.code,{children:"inputLite"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении значения в поле ввода, передавая только данные валидации без оригинального DOM события (облегченная версия)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — объект с данными валидации"]}),`
`]}),`
`,e.jsx(n.h3,{id:"change",children:e.jsx(n.code,{children:"change"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при завершении ввода и потере фокуса, передавая оригинальное DOM событие и данные валидации."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: InputEvent"})," — оригинальное DOM событие ввода"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — объект с данными валидации"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Структура FieldValidationItem:"})," такая же как у события ",e.jsx(n.code,{children:"input"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
  <Mask
    mask="+7 (***) ***-**-**"
    @change="handleChange"
  />
</template>
`})}),`
`,e.jsx(n.h3,{id:"changelite",children:e.jsx(n.code,{children:"changeLite"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при завершении ввода и потере фокуса, передавая только данные валидации без оригинального DOM события (облегченная версия)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: FieldValidationItem"})," — объект с данными валидации"]}),`
`]})]})}function Js(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(p,{...i})}):p(i)}function u(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"keydown",children:e.jsx(n.code,{children:"keydown"})}),`
`,e.jsx(n.p,{children:"Event fires when a key is pressed in the input field, passing the original DOM keyboard event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — original DOM keyboard event"]}),`
`]}),`
`,e.jsx(n.h3,{id:"keyup",children:e.jsx(n.code,{children:"keyup"})}),`
`,e.jsx(n.p,{children:"Event fires when a key is released in the input field, passing the original DOM keyboard event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — original DOM keyboard event"]}),`
`]})]})}function Qs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(u,{...i})}):u(i)}function m(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"keydown",children:e.jsx(n.code,{children:"keydown"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при нажатии клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — оригинальное DOM событие клавиатуры"]}),`
`]}),`
`,e.jsx(n.h3,{id:"keyup",children:e.jsx(n.code,{children:"keyup"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при отпускании клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — оригинальное DOM событие клавиатуры"]}),`
`]})]})}function Zs(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(m,{...i})}):m(i)}function g(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"paste",children:e.jsx(n.code,{children:"paste"})}),`
`,e.jsx(n.p,{children:"Event fires when data is pasted from clipboard into the input field, passing the original DOM event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: ClipboardEvent"})," — original DOM clipboard event"]}),`
`]})]})}function nt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(g,{...i})}):g(i)}function f(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"paste",children:e.jsx(n.code,{children:"paste"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при вставке данных из буфера обмена в поле ввода, передавая оригинальное DOM событие."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: ClipboardEvent"})," — оригинальное DOM событие буфера обмена"]}),`
`]})]})}function et(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(f,{...i})}):f(i)}function v(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Event fires when the component value is reset, passing the original DOM event."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: Event"})," — original DOM event"]}),`
`]})]})}function it(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(v,{...i})}):v(i)}function b(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при сбросе значения компонента, передавая оригинальное DOM событие."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: Event"})," — оригинальное DOM событие"]}),`
`]})]})}function st(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(b,{...i})}):b(i)}const tt={name:"Event",descriptions:{bars:{en:Ws,ru:Vs},beforeinput:{en:Hs,ru:qs},click:{en:Ys,ru:zs},focus:{en:Us,ru:Gs},input:{en:Ks,ru:Js},keyboard:{en:Qs,ru:Zs},paste:{en:nt,ru:et},reset:{en:it,ru:st}}};function y(i){const n={code:"code",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"clear",children:e.jsx(n.code,{children:"clear"})}),`
`,e.jsx(n.p,{children:"Clears the component value to default and focuses the input field."})]})}function lt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(y,{...i})}):y(i)}function w(i){const n={code:"code",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"clear",children:e.jsx(n.code,{children:"clear"})}),`
`,e.jsx(n.p,{children:"Очищает значение компонента до значения по умолчанию и устанавливает фокус на поле ввода."})]})}function rt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(w,{...i})}):w(i)}function M(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"detail",children:e.jsx(n.code,{children:"detail"})}),`
`,e.jsx(n.p,{children:"Additional component data."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Record<string, any> | undefined"})]})]})}function ct(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(M,{...i})}):M(i)}function C(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"detail",children:e.jsx(n.code,{children:"detail"})}),`
`,e.jsx(n.p,{children:"Дополнительные данные компонента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Record<string, any> | undefined"})]})]})}function ot(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(C,{...i})}):C(i)}function k(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsx(n.p,{children:"Reactive open/close state of the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]})]})}function dt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(k,{...i})}):k(i)}function D(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsx(n.p,{children:"Реактивное состояние открытия/закрытия компонента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]})]})}function at(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(D,{...i})}):D(i)}function _(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsx(n.p,{children:"Computed property indicating whether there are selected items in the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsx(n.h3,{id:"selectedlist",children:e.jsx(n.code,{children:"selectedList"})}),`
`,e.jsx(n.p,{children:"Reactive list of selected component items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<any[]>"})]}),`
`,e.jsx(n.h3,{id:"selectednames",children:e.jsx(n.code,{children:"selectedNames"})}),`
`,e.jsx(n.p,{children:"Reactive list of labels (names) of selected items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string[]>"})]}),`
`,e.jsx(n.h3,{id:"selectedvalues",children:e.jsx(n.code,{children:"selectedValues"})}),`
`,e.jsx(n.p,{children:"Reactive array of values of selected items."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<any[]>"})]})]})}function ht(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(_,{...i})}):_(i)}function F(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsx(n.p,{children:"Вычисляемое свойство, указывающее наличие выбранных элементов в компоненте."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsx(n.h3,{id:"selectedlist",children:e.jsx(n.code,{children:"selectedList"})}),`
`,e.jsx(n.p,{children:"Реактивный список выбранных элементов компонента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<any[]>"})]}),`
`,e.jsx(n.h3,{id:"selectednames",children:e.jsx(n.code,{children:"selectedNames"})}),`
`,e.jsx(n.p,{children:"Реактивный список меток (имён) выбранных элементов."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string[]>"})]}),`
`,e.jsx(n.h3,{id:"selectedvalues",children:e.jsx(n.code,{children:"selectedValues"})}),`
`,e.jsx(n.p,{children:"Реактивный массив значений выбранных элементов."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<any[]>"})]})]})}function xt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(F,{...i})}):F(i)}function S(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsx(n.p,{children:"Current component value."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"any"})]})]})}function jt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(S,{...i})}):S(i)}function L(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsx(n.p,{children:"Текущее значение компонента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"any"})]})]})}function pt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(L,{...i})}):L(i)}const ut={name:"Expose",descriptions:{clear:{en:lt,ru:rt},detail:{en:ct,ru:ot},open:{en:dt,ru:at},selected:{en:ht,ru:xt},value:{en:jt,ru:pt}}};function X(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"caption",children:e.jsx(n.code,{children:"caption"})}),`
`,e.jsx(n.p,{children:"Slot for placing a caption or additional explanatory text for the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — element with class ",e.jsx(n.code,{children:"{className}__caption"})," and attribute ",e.jsx(n.code,{children:'data-event-type="caption"'})]})]})}function mt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(X,{...i})}):X(i)}function $(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"caption",children:e.jsx(n.code,{children:"caption"})}),`
`,e.jsx(n.p,{children:"Слот для размещения подписи или дополнительного пояснительного текста к компоненту."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элемент с классом ",e.jsx(n.code,{children:"{className}__caption"})," и атрибутом ",e.jsx(n.code,{children:'data-event-type="caption"'})]})]})}function gt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx($,{...i})}):$(i)}function I(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Slot for placing component control elements (buttons, switches, etc.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: ControlItem"})," — object with control element data"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — component control elements"]})]})}function ft(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(I,{...i})}):I(i)}function T(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Слот для размещения элементов управления компонентом (кнопки, переключатели и т.д.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: ControlItem"})," — объект с данными элемента управления"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элементы управления компонентом"]})]})}function vt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(T,{...i})}):T(i)}function B(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Main slot for placing the primary component content."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — main component content"]})]})}function bt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(B,{...i})}):B(i)}function N(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Основной слот для размещения главного содержимого компонента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — основное содержимое компонента"]})]})}function yt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(N,{...i})}):N(i)}function P(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"description",children:e.jsx(n.code,{children:"description"})}),`
`,e.jsx(n.p,{children:"Slot for placing component description or additional information."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — element with class ",e.jsx(n.code,{children:"{className}__description"})]})]})}function wt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(P,{...i})}):P(i)}function O(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"description",children:e.jsx(n.code,{children:"description"})}),`
`,e.jsx(n.p,{children:"Слот для размещения описания компонента или дополнительной информации."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элемент с классом ",e.jsx(n.code,{children:"{className}__description"})]})]})}function Mt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(O,{...i})}):O(i)}function E(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"footer",children:e.jsx(n.code,{children:"footer"})}),`
`,e.jsx(n.p,{children:"Slot for placing content at the bottom of the component."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: ControlItem"})," — object with component data"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — footer element"]})]})}function Ct(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(E,{...i})}):E(i)}function A(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"footer",children:e.jsx(n.code,{children:"footer"})}),`
`,e.jsx(n.p,{children:"Слот для размещения содержимого в нижней части компонента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: ControlItem"})," — объект с данными компонента"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элемент подвала"]})]})}function kt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(A,{...i})}):A(i)}function R(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"label",children:e.jsx(n.code,{children:"label"})}),`
`,e.jsx(n.p,{children:"Slot for placing custom label content instead of text value."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — element with class ",e.jsx(n.code,{children:"{className}__label"})]})]})}function Dt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(R,{...i})}):R(i)}function W(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"label",children:e.jsx(n.code,{children:"label"})}),`
`,e.jsx(n.p,{children:"Слот для размещения пользовательского содержимого метки компонента вместо текстового значения."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элемент с классом ",e.jsx(n.code,{children:"{className}__label"})]})]})}function _t(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(W,{...i})}):W(i)}function V(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"prefix",children:e.jsx(n.code,{children:"prefix"})}),`
`,e.jsx(n.p,{children:"Slot for placing content at the beginning of the component, before the main content."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — element with class ",e.jsx(n.code,{children:"{className}__prefix"})," and attribute ",e.jsx(n.code,{children:'data-event-type="prefix"'})]})]})}function Ft(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(V,{...i})}):V(i)}function H(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"prefix",children:e.jsx(n.code,{children:"prefix"})}),`
`,e.jsx(n.p,{children:"Слот для размещения контента в начале компонента, перед основным содержимым."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элемент с классом ",e.jsx(n.code,{children:"{className}__prefix"})," и атрибутом ",e.jsx(n.code,{children:'data-event-type="prefix"'})]})]})}function St(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(H,{...i})}):H(i)}function q(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"suffix",children:e.jsx(n.code,{children:"suffix"})}),`
`,e.jsx(n.p,{children:"Slot for placing content at the end of the component, after the main content."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode"})," — element with class ",e.jsx(n.code,{children:"{className}__suffix"})," and attribute ",e.jsx(n.code,{children:'data-event-type="suffix"'})]})]})}function Lt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(q,{...i})}):q(i)}function Y(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"suffix",children:e.jsx(n.code,{children:"suffix"})}),`
`,e.jsx(n.p,{children:"Слот для размещения контента в конце компонента, после основного содержимого."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"VNode"})," — элемент с классом ",e.jsx(n.code,{children:"{className}__suffix"})," и атрибутом ",e.jsx(n.code,{children:'data-event-type="suffix"'})]})]})}function Xt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Y,{...i})}):Y(i)}const $t={name:"Slot",descriptions:{caption:{en:mt,ru:gt},control:{en:ft,ru:vt},default:{en:bt,ru:yt},description:{en:wt,ru:Mt},footer:{en:Ct,ru:kt},label:{en:Dt,ru:_t},prefix:{en:Ft,ru:St},suffix:{en:Lt,ru:Xt}}};function z(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"adaptive-behavior",children:"Adaptive Behavior"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"adaptive"})," and ",e.jsx(n.code,{children:"container"})," properties are designed to control component behavior at different screen sizes and container constraints."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptive"})," — controls adaptive behavior for different screen sizes and media queries"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container"})," — controls container layout with adaptive width constraints"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: ",e.jsx(n.code,{children:"adaptive"})," provides automatic component adaptation to different screen sizes with media query support for precise display control. ",e.jsx(n.code,{children:"container"})," creates a container layout with automatic width constraints, adaptive behavior, and content centering. Both properties can be used together to create complex adaptive layouts, where ",e.jsx(n.code,{children:"container"})," provides the structural foundation and ",e.jsx(n.code,{children:"adaptive"})," adds flexible behavior for different devices."]})]})}function It(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(z,{...i})}):z(i)}function U(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"адаптивное-поведение",children:"Адаптивное поведение"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"adaptive"})," и ",e.jsx(n.code,{children:"container"})," предназначены для управления поведением компонентов при различных размерах экрана и контейнерных ограничениях."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptive"})," — управляет адаптивным поведением для различных размеров экрана и медиа-запросов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"container"})," — управляет контейнерной раскладкой с адаптивными ограничениями ширины"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: ",e.jsx(n.code,{children:"adaptive"})," обеспечивает автоматическую адаптацию компонента под различные размеры экрана с поддержкой медиа-запросов для точного контроля отображения. ",e.jsx(n.code,{children:"container"})," создает контейнерную раскладку с автоматическими ограничениями ширины, адаптивным поведением и центрированием содержимого. Оба свойства могут использоваться вместе для создания сложных адаптивных раскладок, где ",e.jsx(n.code,{children:"container"})," обеспечивает структурную основу, а ",e.jsx(n.code,{children:"adaptive"})," добавляет гибкое поведение для разных устройств."]})]})}function Tt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(U,{...i})}):U(i)}function G(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"color-palette",children:"Color Palette"}),`
`,e.jsxs(n.p,{children:["Property ",e.jsx(n.code,{children:"asPalette"})," enables color scheme inheritance from the parent element while maintaining base saturation."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage:"})}),`
`,e.jsx(n.p,{children:"Allows automatic color adaptation to placement context. The element adopts the parent's color palette without losing its saturation characteristics."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," (default) — uses its own color scheme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — inherits palette from parent element"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Inherit palette from parent -->
<Component asPalette />
`})})]})}function Bt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(G,{...i})}):G(i)}function K(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"цветовая-палитра",children:"Цветовая палитра"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"asPalette"})," активирует наследование цветовой схемы от родительского элемента с сохранением базовой насыщенности."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Применение:"})}),`
`,e.jsx(n.p,{children:"Позволяет автоматически адаптировать цвета к контексту размещения. Элемент принимает цветовую палитру родителя, не теряя своих характеристик насыщенности."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," (по умолчанию) — используется собственная цветовая схема"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — наследует палитру от родительского элемента"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Наследование палитры от родителя -->
<Component asPalette />
`})})]})}function Nt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(K,{...i})}):K(i)}function J(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"direction",children:"Direction"}),`
`,e.jsxs(n.p,{children:["Property ",e.jsx(n.code,{children:"dir"})," controls mirroring of the element based on text direction (LTR/RTL)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage:"})}),`
`,e.jsx(n.p,{children:"Automatically inverts the visual representation when switching between left-to-right and right-to-left languages. Especially important for elements containing directional graphic symbols (arrows, pointers)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," (default) — standard display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — enables text direction adaptation"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Text direction adaptation -->
<Component dir />
`})})]})}function Pt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(J,{...i})}):J(i)}function Q(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"направление",children:"Направление"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"dir"})," управляет зеркальным отображением элемента в зависимости от направления текста (LTR/RTL)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Применение:"})}),`
`,e.jsx(n.p,{children:"Автоматически инвертирует визуальное представление при переключении между языками с левосторонним и правосторонним письмом. Особенно важно для элементов, содержащих направленные графические символы (стрелки, указатели)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," (по умолчанию) — стандартное отображение"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — включает адаптацию к направлению текста"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Адаптация под направление текста -->
<Component dir />
`})})]})}function Ot(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Q,{...i})}):Q(i)}function Z(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"skeleton-mode",children:"Skeleton mode"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"isSkeleton"})," property defines element behavior when interacting with the parent Skeleton component."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — element displays as skeleton when Skeleton is in active state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — element becomes invisible when Skeleton is in active state"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Works in conjunction with the Skeleton component to control visibility and display mode of child elements. When parent Skeleton has ",e.jsx(n.code,{children:"active=false"}),", all child elements display normally regardless of ",e.jsx(n.code,{children:"isSkeleton"})," value. When ",e.jsx(n.code,{children:"active=true"}),", elements with ",e.jsx(n.code,{children:"isSkeleton=true"})," are shown as skeleton placeholders, while elements with ",e.jsx(n.code,{children:"isSkeleton=false"})," are completely hidden."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Element will display as skeleton -->
<Skeleton active>
  <ListItem isSkeleton text="Loading..." />
</Skeleton>

<!-- Element will be hidden -->
<Skeleton active>
  <ListItem :isSkeleton="false" text="Hidden text" />
</Skeleton>
`})})]})}function Et(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Z,{...i})}):Z(i)}function nn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"режим-скелетона",children:"Режим скелетона"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"isSkeleton"})," определяет поведение элемента при взаимодействии с родительским компонентом Skeleton."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — элемент отображается как скелетон при активном состоянии Skeleton"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — элемент становится невидимым при активном состоянии Skeleton"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Работает в паре с компонентом Skeleton для управления видимостью и режимом отображения дочерних элементов. При ",e.jsx(n.code,{children:"active=false"})," у родительского Skeleton все дочерние элементы отображаются нормально независимо от значения ",e.jsx(n.code,{children:"isSkeleton"}),". При ",e.jsx(n.code,{children:"active=true"})," элементы с ",e.jsx(n.code,{children:"isSkeleton=true"})," показываются как скелетон-заглушки, а элементы с ",e.jsx(n.code,{children:"isSkeleton=false"})," скрываются полностью."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Элемент будет отображаться как скелетон -->
<Skeleton active>
  <ListItem isSkeleton text="Загрузка..." />
</Skeleton>

<!-- Элемент будет скрыт -->
<Skeleton active>
  <ListItem :isSkeleton="false" text="Скрытый текст" />
</Skeleton>
`})})]})}function At(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(nn,{...i})}):nn(i)}const Rt={name:"Style",descriptions:{adaptive:{en:It,ru:Tt},asPalette:{en:Bt,ru:Nt},dir:{en:Pt,ru:Ot},isSkeleton:{en:Et,ru:At}}};function en(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"managing-search-and-highlighting",children:"Managing search and highlighting"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"highlight"})," and ",e.jsx(n.code,{children:"highlightLengthStart"})," properties work together to control match highlighting when searching through list items. They set the search string and minimum query length for activating visual highlighting of found fragments."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight"})," — search string for finding and highlighting in list items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightLengthStart"})," — minimum search string length to start highlighting, defaults to ",e.jsx(n.code,{children:"2"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Match highlighting is activated automatically: when the ",e.jsx(n.code,{children:"highlight"})," length is less than ",e.jsx(n.code,{children:"highlightLengthStart"}),", search works but visual highlighting is not applied. When the minimum length is reached, the component begins highlighting found fragments across the entire list hierarchy. Search works in real-time and considers nested items in groups and menus. Use ",e.jsx(n.code,{children:"highlightLengthStart"})," to prevent excessive highlighting with short queries."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Standard search with highlighting from 2 characters -->
<List :list="items" highlight="text" />

<!-- Search with highlighting from 3 characters -->
<List :list="items" highlight="abc" :highlightLengthStart="3" />

<!-- Dynamic search with v-model -->
<List :list="items" :highlight="searchQuery" :highlightLengthStart="1" />

<!-- Search without minimum threshold -->
<List :list="products" :highlight="filter" :highlightLengthStart="0" />
`})})]})}function Wt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(en,{...i})}):en(i)}function sn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-поиском-и-выделением",children:"Управление поиском и выделением"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"highlight"})," и ",e.jsx(n.code,{children:"highlightLengthStart"})," работают в связке для управления подсветкой совпадений при поиске по элементам списка. Они устанавливают строку поиска и минимальную длину запроса для активации визуального выделения найденных фрагментов."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight"})," — строка для поиска и подсветки в элементах списка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightLengthStart"})," — минимальная длина строки поиска для начала выделения, по умолчанию ",e.jsx(n.code,{children:"2"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Выделение совпадений активируется автоматически: когда длина ",e.jsx(n.code,{children:"highlight"})," меньше ",e.jsx(n.code,{children:"highlightLengthStart"}),", поиск работает, но визуальное выделение не применяется. При достижении минимальной длины компонент начинает подсвечивать найденные фрагменты во всей иерархии списка. Поиск работает в реальном времени и учитывает вложенные элементы в группах и меню. Используйте ",e.jsx(n.code,{children:"highlightLengthStart"})," для предотвращения чрезмерного выделения при коротких запросах."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Стандартный поиск с выделением от 2 символов -->
<List :list="items" highlight="текст" />

<!-- Поиск с выделением от 3 символов -->
<List :list="items" highlight="abc" :highlightLengthStart="3" />

<!-- Динамический поиск с v-model -->
<List :list="items" :highlight="searchQuery" :highlightLengthStart="1" />

<!-- Поиск без минимального порога -->
<List :list="products" :highlight="filter" :highlightLengthStart="0" />
`})})]})}function Vt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(sn,{...i})}):sn(i)}function tn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"working-with-text-labels-and-numbers",children:"Working with text labels and numbers"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"labelMax"}),", and ",e.jsx(n.code,{children:"formatting"})," properties are designed to manage the display of textual and numerical content in interface components."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," — text label or numeric value to display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"labelMax"}),' — maximum value for numeric labels (adds "+" indicator when exceeded)']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formatting"})," — enables formatting of numeric values according to user locale"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together for flexible content management: ",e.jsx(n.code,{children:"label"})," accepts both textual and numeric values. When a number is passed, automatic processing is applied with localization consideration. The ",e.jsx(n.code,{children:"labelMax"}),' property limits the display of large numbers — when the value is exceeded, a "+" symbol is added (e.g., "99+"). The ',e.jsx(n.code,{children:"formatting"})," property controls number formatting according to user regional settings, ensuring correct display of separators and numeric formats."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Ht(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(tn,{...i})}):tn(i)}function ln(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"работа-с-текстовыми-метками-и-числами",children:"Работа с текстовыми метками и числами"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"labelMax"})," и ",e.jsx(n.code,{children:"formatting"})," предназначены для управления отображением текстового и числового контента в компонентах интерфейса."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," — текстовая метка или числовое значение для отображения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"labelMax"}),' — максимальное значение для числовых меток (при превышении добавляется индикатор "+")']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formatting"})," — включает форматирование числовых значений согласно локали пользователя"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно для гибкого управления контентом: ",e.jsx(n.code,{children:"label"})," принимает как текстовые, так и числовые значения. При передаче числа применяется автоматическая обработка с учётом локализации. Свойство ",e.jsx(n.code,{children:"labelMax"}),' ограничивает отображение больших чисел — при превышении значения добавляется символ "+" (например, "99+"). Свойство ',e.jsx(n.code,{children:"formatting"})," контролирует форматирование чисел согласно региональным настройкам пользователя, обеспечивая корректное отображение разделителей и числовых форматов."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function qt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ln,{...i})}):ln(i)}function rn(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"value-and-data-passing",children:"Value and Data Passing"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"detail"})," properties are designed to transfer information when interacting with components and handling events."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — main component value (string, number, object)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail"})," — additional data and contextual information"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: ",e.jsx(n.code,{children:"value"})," contains the main component value, which is passed during events and accessible via the expose API. ",e.jsx(n.code,{children:"detail"})," extends ",e.jsx(n.code,{children:"value"})," with additional data such as metadata, identifiers, or other auxiliary information. Both properties are available for programmatic reading and passed in component events, providing complete information about the state and context during interaction."]})]})}function Yt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(rn,{...i})}):rn(i)}function cn(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"передача-значений-и-данных",children:"Передача значений и данных"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"value"})," и ",e.jsx(n.code,{children:"detail"})," предназначены для передачи информации при взаимодействии с компонентами и обработке событий."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — основное значение компонента (строка, число, объект)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail"})," — дополнительные данные и контекстная информация"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: ",e.jsx(n.code,{children:"value"})," содержит основное значение компонента, которое передаётся при событиях и доступно через expose API. ",e.jsx(n.code,{children:"detail"})," расширяет ",e.jsx(n.code,{children:"value"})," дополнительными данными, такими как метаданные, идентификаторы или другая вспомогательная информация. Оба свойства доступны для программного чтения и передаются в события компонента, обеспечивая полную информацию о состоянии и контексте при взаимодействии."]})]})}function zt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(cn,{...i})}):cn(i)}const Ut={name:"Value",descriptions:{highlight:{en:Wt,ru:Vt},labelNumber:{en:Ht,ru:qt},value:{en:Yt,ru:zt}}};function on(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"Expandable container for organizing content with smooth opening and closing animations, simplifying information structuring in the interface."}),`
`,e.jsx(n.p,{children:"Accordion allows creating expandable sections with automatic animations, interactive header, and state management via v-model. The component supports padding configuration, visual dividers, and content customization through slots."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Smooth expand and collapse animations"}),`
`,e.jsx(n.li,{children:"Header with label, description, and icons"}),`
`,e.jsx(n.li,{children:"State management via v-model:open"}),`
`,e.jsx(n.li,{children:"Programmatic control (toggle, toOpen, toClose)"}),`
`,e.jsx(n.li,{children:"Internal padding configuration (padding)"}),`
`,e.jsx(n.li,{children:"Visual divider between sections"}),`
`,e.jsx(n.li,{children:"Customization via head and default slots"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"FAQ sections"}),`
`,e.jsx(n.li,{children:"Settings panels"}),`
`,e.jsx(n.li,{children:"Product filters"}),`
`,e.jsx(n.li,{children:"Information blocks"}),`
`,e.jsx(n.li,{children:"Menus with subsections"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Accordion is a component for creating expandable sections with animation support, state management, and flexible customization."}),`
`]})]})}function Gt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(on,{...i})}):on(i)}function dn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"описание",children:"Описание"}),`
`,e.jsx(n.p,{children:"Раскрывающийся контейнер для организации контента с плавными анимациями открытия и закрытия, упрощающий структурирование информации в интерфейсе."}),`
`,e.jsx(n.p,{children:"Accordion позволяет создавать раскрывающиеся секции с автоматическими анимациями, интерактивным заголовком и возможностью управления через v-model. Компонент поддерживает настройку отступов, визуальных разделителей и кастомизацию содержимого через слоты."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Плавные анимации раскрытия и сворачивания"}),`
`,e.jsx(n.li,{children:"Заголовок с меткой, описанием и иконками"}),`
`,e.jsx(n.li,{children:"Управление состоянием через v-model:open"}),`
`,e.jsx(n.li,{children:"Программное управление (toggle, toOpen, toClose)"}),`
`,e.jsx(n.li,{children:"Настройка внутренних отступов (padding)"}),`
`,e.jsx(n.li,{children:"Визуальный разделитель между секциями"}),`
`,e.jsx(n.li,{children:"Кастомизация через слоты head и default"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"FAQ секции"}),`
`,e.jsx(n.li,{children:"Панели настроек"}),`
`,e.jsx(n.li,{children:"Фильтры товаров"}),`
`,e.jsx(n.li,{children:"Информационные блоки"}),`
`,e.jsx(n.li,{children:"Меню с подразделами"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Accordion — компонент для создания раскрывающихся секций с поддержкой анимаций, управления состоянием и гибкой кастомизации."}),`
`]})]})}function Kt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(dn,{...i})}):dn(i)}function an(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Slot for placing the main accordion content that appears when the section is expanded."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MotionTransformControlItem"})," — object with state management data (isOpen, isShow, classes)"]}),`
`]})]})}function Jt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(an,{...i})}):an(i)}function hn(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Слот для размещения основного содержимого аккордеона, которое появляется при раскрытии секции."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MotionTransformControlItem"})," — объект с данными управления состоянием (isOpen, isShow, classes)"]}),`
`]})]})}function Qt(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(hn,{...i})}):hn(i)}const Zt={name:"Accordion",descriptions:{accordion:{en:Gt,ru:Kt},slots:{en:Jt,ru:Qt}}};function xn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"Compact visual indicator for displaying status, notification counts, or markers on interface elements with support for various display modes and automatic overflow management."}),`
`,e.jsx(n.p,{children:"Badge provides a universal solution for creating informative indicators with flexible content configuration, positioning, and appearance. The component supports displaying text, numbers with maximum value limits, icons, and dot indicators, automatically hides when content is absent, and integrates with the slot system for customization."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple display modes (text, numbers, icons, dot indicator)"}),`
`,e.jsx(n.li,{children:"Automatic overflow management with maximum value configuration"}),`
`,e.jsx(n.li,{children:"Flexible positioning relative to parent elements (overlap, vertical, horizontal)"}),`
`,e.jsx(n.li,{children:"Automatic hiding when content is absent (dot, icon, label)"}),`
`,e.jsx(n.li,{children:"Integration with LabelNumberInclude for numeric value processing"}),`
`,e.jsx(n.li,{children:"Icon support through IconInclude"}),`
`,e.jsx(n.li,{children:"Color variants for different status types"}),`
`,e.jsx(n.li,{children:"Visibility control via hide property"}),`
`,e.jsx(n.li,{children:"Customization through slots for complete content control"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Unread notification count indicators"}),`
`,e.jsx(n.li,{children:"Status markers on user avatars (online/offline)"}),`
`,e.jsx(n.li,{children:"Item counters in shopping carts or lists"}),`
`,e.jsx(n.li,{children:"New message indicators in chats"}),`
`,e.jsx(n.li,{children:"Status markers on product cards"}),`
`,e.jsx(n.li,{children:"Visual hints about available updates"}),`
`,e.jsx(n.li,{children:"Numeric indicators on tabs and menu items"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Badge is designed as a universal UI component for creating compact visual indicators with comprehensive support for various content types, automatic display management, and flexible positioning settings."}),`
`]})]})}function nl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(xn,{...i})}):xn(i)}function jn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"описание",children:"Описание"}),`
`,e.jsx(n.p,{children:"Компактный визуальный индикатор для отображения статуса, количества уведомлений или маркеров на элементах интерфейса с поддержкой различных режимов отображения и автоматическим управлением переполнением."}),`
`,e.jsx(n.p,{children:"Badge предоставляет универсальное решение для создания информативных индикаторов с гибкой настройкой содержимого, позиционирования и внешнего вида. Компонент поддерживает отображение текста, чисел с ограничением максимального значения, иконок и точечных индикаторов, автоматически скрывается при отсутствии контента и интегрируется с системой слотов для кастомизации."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Множественные режимы отображения (текст, числа, иконки, точечный индикатор)"}),`
`,e.jsx(n.li,{children:"Автоматическое управление переполнением с настройкой максимального значения"}),`
`,e.jsx(n.li,{children:"Гибкое позиционирование относительно родительских элементов (overlap, vertical, horizontal)"}),`
`,e.jsx(n.li,{children:"Автоматическое скрытие при отсутствии контента (dot, icon, label)"}),`
`,e.jsx(n.li,{children:"Интеграция с LabelNumberInclude для обработки числовых значений"}),`
`,e.jsx(n.li,{children:"Поддержка иконок через IconInclude"}),`
`,e.jsx(n.li,{children:"Цветовые варианты для различных типов статуса"}),`
`,e.jsx(n.li,{children:"Управление видимостью через свойство hide"}),`
`,e.jsx(n.li,{children:"Кастомизация через слоты для полного контроля над содержимым"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Индикаторы количества непрочитанных уведомлений"}),`
`,e.jsx(n.li,{children:"Маркеры статуса на аватарах пользователей (онлайн/оффлайн)"}),`
`,e.jsx(n.li,{children:"Счетчики элементов в корзине или списках"}),`
`,e.jsx(n.li,{children:"Индикаторы новых сообщений в чатах"}),`
`,e.jsx(n.li,{children:"Статусные маркеры на карточках товаров"}),`
`,e.jsx(n.li,{children:"Визуальные подсказки о наличии обновлений"}),`
`,e.jsx(n.li,{children:"Числовые индикаторы на вкладках и пунктах меню"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Badge разработан как универсальный UI-компонент для создания компактных визуальных индикаторов с комплексной поддержкой различных типов контента, автоматическим управлением отображением и гибкими настройками позиционирования."}),`
`]})]})}function el(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(jn,{...i})}):jn(i)}function pn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"dot-indicator",children:"Dot indicator"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"dot"})," property transforms Badge into a compact circular indicator without text content, used for simple visual status notifications."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — displays Badge as a dot indicator"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — displays Badge in standard mode with content (default)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Creates a minimalist visual marker for indicating states, activity, or notifications without displaying specific values. Ideal for user presence indicators (online/offline), unread notification markers, and status dots on interface elements. When the ",e.jsx(n.code,{children:"dot"})," property is activated, any text content or numeric values are ignored, displaying only the color indicator."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Standard Badge with content -->
<Badge label="5" />

<!-- Dot indicator -->
<Badge dot />

<!-- Dot indicator for online status -->
<Badge dot :selected="isOnline" overlap="circular" />
`})})]})}function il(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(pn,{...i})}):pn(i)}function un(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"точечный-индикатор",children:"Точечный индикатор"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"dot"})," преобразует Badge в компактный круглый индикатор без текстового содержимого, используемый для простых визуальных уведомлений о статусе."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — отображает Badge как точечный индикатор"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — отображает Badge в стандартном режиме с контентом (по умолчанию)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Создает минималистичный визуальный маркер для индикации состояний, активности или уведомлений без отображения конкретных значений. Идеально подходит для индикаторов присутствия пользователей (онлайн/оффлайн), маркеров непрочитанных уведомлений и статусных точек на элементах интерфейса. При активации свойства ",e.jsx(n.code,{children:"dot"})," любое текстовое содержимое или числовые значения игнорируются, отображается только цветовой индикатор."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Стандартный Badge с контентом -->
<Badge label="5" />

<!-- Точечный индикатор -->
<Badge dot />

<!-- Точечный индикатор статуса онлайн -->
<Badge dot :selected="isOnline" overlap="circular" />
`})})]})}function sl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(un,{...i})}):un(i)}function mn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"outline-badges-outline",children:"Outline badges (outline)"}),`
`,e.jsxs(n.p,{children:["The Badge component supports outline mode via the ",e.jsx(n.code,{children:"outline"})," property. In this mode, badges have a minimalist visual style with transparent background and colored border:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimalist design"})," - suitable for interfaces requiring reduced visual load"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transparent background"})," - maintains clean appearance when displaying secondary information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Subtle presence"})," - less visually prominent than filled variants"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible adaptation"})," - works well with various background colors and themes"]}),`
`]}),`
`,e.jsx(n.p,{children:"Outline mode is especially useful for creating secondary indicators, informational labels, and status markers that should be noticeable but not dominant in the interface's visual hierarchy."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Badge outline overlap="static">99+</Badge>
<Badge outline overlap="static" icon="info">Info</Badge>
<Badge outline dot overlap="static"/>
`})})]})}function tl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(mn,{...i})}):mn(i)}function gn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"контурные-бейджи-outline",children:"Контурные бейджи (outline)"}),`
`,e.jsxs(n.p,{children:["Компонент Badge поддерживает контурный режим через свойство ",e.jsx(n.code,{children:"outline"}),". В этом режиме бейджи имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Минималистичный дизайн"})," - подходит для интерфейсов, требующих сниженной визуальной нагрузки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Прозрачный фон"})," - поддерживает чистый внешний вид при отображении второстепенной информации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Тонкое присутствие"})," - менее визуально заметный, чем заполненные варианты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гибкая адаптация"})," - хорошо работает с различными цветами фона и темами"]}),`
`]}),`
`,e.jsx(n.p,{children:"Outline режим особенно полезен для создания второстепенных индикаторов, информационных меток и статусных маркеров, которые должны быть заметными, но не доминирующими в визуальной иерархии интерфейса."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Badge outline overlap="static">99+</Badge>
<Badge outline overlap="static" icon="info">Инфо</Badge>
<Badge outline dot overlap="static"/>
`})})]})}function ll(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(gn,{...i})}):gn(i)}function fn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"primary-badges-primary",children:"Primary badges (primary)"}),`
`,e.jsxs(n.p,{children:["The Badge component supports primary mode via the ",e.jsx(n.code,{children:"primary"})," property. In this mode, badges have the most prominent visual style with bright brand colors:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"High contrast"})," - uses primary brand colors for maximum visibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bold appearance"})," - draws attention to important information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enhanced visibility"})," - designed to stand out against various backgrounds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility support"})," - strong contrast ratios for readability"]}),`
`]}),`
`,e.jsx(n.p,{children:"Primary mode is especially useful for creating critical notification indicators, active statuses, and high-priority markers that require immediate user attention in the interface."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Badge primary overlap="static">5</Badge>
<Badge primary overlap="static" icon="warning">Important</Badge>
<Badge primary dot overlap="static"/>
`})})]})}function rl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(fn,{...i})}):fn(i)}function vn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"основные-бейджи-primary",children:"Основные бейджи (primary)"}),`
`,e.jsxs(n.p,{children:["Компонент Badge поддерживает основной режим через свойство ",e.jsx(n.code,{children:"primary"}),". В этом режиме бейджи имеют наиболее заметный визуальный стиль с яркими цветами бренда:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Высокий контраст"})," - использует основные цвета бренда для максимальной видимости"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Яркий внешний вид"})," - привлекает внимание к важной информации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Повышенная видимость"})," - разработан для выделения на различных фонах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка доступности"})," - сильные контрастные соотношения для читаемости"]}),`
`]}),`
`,e.jsx(n.p,{children:"Primary режим особенно полезен для создания критических индикаторов уведомлений, активных статусов и высокоприоритетных маркеров, которые требуют немедленного внимания пользователя в интерфейсе."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Badge primary overlap="static">5</Badge>
<Badge primary overlap="static" icon="warning">Важно</Badge>
<Badge primary dot overlap="static"/>
`})})]})}function cl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(vn,{...i})}):vn(i)}function bn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"secondary-badges-secondary",children:"Secondary badges (secondary)"}),`
`,e.jsxs(n.p,{children:["The Badge component supports secondary mode via the ",e.jsx(n.code,{children:"secondary"})," property. In this mode, badges have a balanced visual style between primary and outline variants:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Moderate contrast"})," - balanced color treatment for noticeability without overwhelming"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Softer appearance"})," - less intense than primary while maintaining clear visibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Versatile styling"})," - works well in various interface contexts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content harmony"})," - complements primary elements without visual competition"]}),`
`]}),`
`,e.jsx(n.p,{children:"Secondary mode is especially useful for creating supporting information indicators, status updates, and categorical labels that are important but don't require critical attention in the visual hierarchy."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Badge secondary overlap="static">12</Badge>
<Badge secondary overlap="static" icon="info">Updated</Badge>
<Badge secondary dot overlap="static"/>
`})})]})}function ol(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(bn,{...i})}):bn(i)}function yn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"второстепенные-бейджи-secondary",children:"Второстепенные бейджи (secondary)"}),`
`,e.jsxs(n.p,{children:["Компонент Badge поддерживает второстепенный режим через свойство ",e.jsx(n.code,{children:"secondary"}),". В этом режиме бейджи имеют сбалансированный визуальный стиль между primary и outline вариантами:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Умеренный контраст"})," - сбалансированная цветовая обработка для заметности без подавления"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Более мягкий внешний вид"})," - менее интенсивный, чем primary, сохраняя четкую видимость"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Универсальная стилизация"})," - хорошо работает в различных контекстах интерфейса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гармония контента"})," - дополняет основные элементы без визуальной конкуренции"]}),`
`]}),`
`,e.jsx(n.p,{children:"Secondary режим особенно полезен для создания поддерживающих индикаторов информации, статусных обновлений и категориальных меток, которые важны, но не требуют критического внимания в визуальной иерархии."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Badge secondary overlap="static">12</Badge>
<Badge secondary overlap="static" icon="info">Обновлено</Badge>
<Badge secondary dot overlap="static"/>
`})})]})}function dl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(yn,{...i})}):yn(i)}const al={name:"Badge",descriptions:{badge:{en:nl,ru:el},dot:{en:il,ru:sl},outline:{en:tl,ru:ll},primary:{en:rl,ru:cl},secondary:{en:ol,ru:dl}}};function wn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"Versatile bar component for application headers, toolbars, and contextual action bars with support for navigation, action buttons, and bulk operation modes."}),`
`,e.jsx(n.p,{children:"Bars provides a comprehensive solution for creating consistent top-level interface elements with structured layout for titles, descriptions, back navigation, and interactive button sets. The component integrates action mode switching for contextual operations, unified button configuration, and skeleton loading states for creating modern application headers and toolbars."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Structured text hierarchy (label and description with dynamic updates)"}),`
`,e.jsx(n.li,{children:"Configurable back button with navigation and close icon switching"}),`
`,e.jsx(n.li,{children:"Flexible button arrays (bars) for primary actions on the right side"}),`
`,e.jsx(n.li,{children:"Action mode with separate content and button set for bulk operations"}),`
`,e.jsx(n.li,{children:"Two-way binding (v-model:action) for state synchronization"}),`
`,e.jsx(n.li,{children:"Unified button attributes (buttonAttrs) for consistent styling"}),`
`,e.jsx(n.li,{children:"Event handling for click interactions and navigation"}),`
`,e.jsx(n.li,{children:"Skeleton system integration for loading states"}),`
`,e.jsx(n.li,{children:"Icon customization for back and close buttons"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Application screen headers with navigation and actions"}),`
`,e.jsx(n.li,{children:"Toolbar panels for sections and pages"}),`
`,e.jsx(n.li,{children:"Contextual action bars for selected item operations"}),`
`,e.jsx(n.li,{children:"Search headers with filter and sort controls"}),`
`,e.jsx(n.li,{children:"Settings screens with back navigation"}),`
`,e.jsx(n.li,{children:"List headers with bulk action support"}),`
`,e.jsx(n.li,{children:"Multi-selection interfaces with action mode"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Bars is designed as a top-level UI component for creating consistent application headers, toolbars, and contextual action interfaces with comprehensive navigation, action management, and bulk operation support."}),`
`]})]})}function hl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(wn,{...i})}):wn(i)}function Mn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"описание",children:"Описание"}),`
`,e.jsx(n.p,{children:"Универсальный компонент панели для заголовков приложений, панелей инструментов и контекстных панелей действий с поддержкой навигации, кнопок действий и режимов массовых операций."}),`
`,e.jsx(n.p,{children:"Bars предоставляет комплексное решение для создания согласованных элементов интерфейса верхнего уровня со структурированным макетом для заголовков, описаний, обратной навигации и интерактивных наборов кнопок. Компонент интегрирует переключение режима действий для контекстных операций, единую конфигурацию кнопок и состояния загрузки скелетонов для создания современных заголовков приложений и панелей инструментов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Структурированная текстовая иерархия (метка и описание с динамическим обновлением)"}),`
`,e.jsx(n.li,{children:"Настраиваемая кнопка назад с навигацией и переключением иконки закрытия"}),`
`,e.jsx(n.li,{children:"Гибкие массивы кнопок (bars) для основных действий справа"}),`
`,e.jsx(n.li,{children:"Режим действий с отдельным контентом и набором кнопок для массовых операций"}),`
`,e.jsx(n.li,{children:"Двусторонняя привязка (v-model:action) для синхронизации состояния"}),`
`,e.jsx(n.li,{children:"Единые атрибуты кнопок (buttonAttrs) для согласованной стилизации"}),`
`,e.jsx(n.li,{children:"Обработка событий для взаимодействий кликов и навигации"}),`
`,e.jsx(n.li,{children:"Интеграция системы скелетонов для состояний загрузки"}),`
`,e.jsx(n.li,{children:"Кастомизация иконок для кнопок назад и закрытия"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Заголовки экранов приложения с навигацией и действиями"}),`
`,e.jsx(n.li,{children:"Панели инструментов для разделов и страниц"}),`
`,e.jsx(n.li,{children:"Контекстные панели действий для операций с выбранными элементами"}),`
`,e.jsx(n.li,{children:"Заголовки поиска с элементами управления фильтрами и сортировкой"}),`
`,e.jsx(n.li,{children:"Экраны настроек с обратной навигацией"}),`
`,e.jsx(n.li,{children:"Заголовки списков с поддержкой массовых действий"}),`
`,e.jsx(n.li,{children:"Интерфейсы множественного выбора с режимом действий"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Bars разработан как UI-компонент верхнего уровня для создания согласованных заголовков приложений, панелей инструментов и контекстных интерфейсов действий с комплексной поддержкой навигации, управления действиями и массовых операций."}),`
`]})]})}function xl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Mn,{...i})}):Mn(i)}function Cn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"action-mode",children:"Action mode"}),`
`,e.jsxs(n.p,{children:["Properties ",e.jsx(n.code,{children:"action"}),", ",e.jsx(n.code,{children:"actionLabel"}),", ",e.jsx(n.code,{children:"actionDescription"}),", and ",e.jsx(n.code,{children:"actionBars"})," are designed for switching Bars into contextual action mode when selecting items or performing bulk operations."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action"})," — activates action mode with full content replacement"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionLabel"})," — primary title for action mode (typically count of selected items)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionDescription"})," — additional description or instruction for current action"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionBars"})," — array of action buttons for operations on selected elements"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: when ",e.jsx(n.code,{children:"action = true"}),", the component replaces standard content (label, description, bars) with action variants (actionLabel, actionDescription, actionBars). The back button automatically transforms into an exit button (iconClose) for leaving action mode. All shared button attributes from ",e.jsx(n.code,{children:"buttonAttrs"})," apply to ",e.jsx(n.code,{children:"actionBars"}),", maintaining consistent styling. Action mode is typically controlled by external selection state and is used for temporary focused operations with the ability to exit back to normal view."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function jl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Cn,{...i})}):Cn(i)}function kn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"режим-действий",children:"Режим действий"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"action"}),", ",e.jsx(n.code,{children:"actionLabel"}),", ",e.jsx(n.code,{children:"actionDescription"})," и ",e.jsx(n.code,{children:"actionBars"})," предназначены для переключения Bars в контекстный режим действий при выборе элементов или выполнении массовых операций."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action"})," — активирует режим действий с полной заменой контента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionLabel"})," — основной заголовок для режима действий (обычно счётчик выбранных элементов)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionDescription"})," — дополнительное описание или инструкция для текущего действия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionBars"})," — массив кнопок действий для операций над выбранными элементами"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: когда ",e.jsx(n.code,{children:"action = true"}),", компонент заменяет стандартный контент (label, description, bars) на варианты для действий (actionLabel, actionDescription, actionBars). Кнопка назад автоматически трансформируется в кнопку выхода (iconClose) для возврата из режима действий. Все общие атрибуты кнопок из ",e.jsx(n.code,{children:"buttonAttrs"})," применяются к ",e.jsx(n.code,{children:"actionBars"}),", сохраняя согласованную стилизацию. Режим действий обычно контролируется внешним состоянием выбора и используется для временных фокусированных операций с возможностью выхода обратно в обычный вид."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function pl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(kn,{...i})}):kn(i)}function Dn(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Bars>
  <template #bars>
    <Button icon="search" />
    <Button icon="refresh" />
    <Button icon="more_vert" />
  </template>

  <template #actionBars>
    <Button icon="share" />
    <Button icon="edit" />
    <Button icon="delete" />
  </template>
</Bars>
`})}),`
`,e.jsx(n.h3,{id:"bars",children:e.jsx(n.code,{children:"bars"})}),`
`,e.jsx(n.p,{children:"Slot for placing action buttons in regular mode."}),`
`,e.jsxs(n.p,{children:["Allows you to fully override the composition, order, and appearance of buttons positioned to the right of the label and description. The ",e.jsx(n.code,{children:"bars"})," area is right-aligned and inherits sizing/spacing from the base Bars component styles."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Slot does not pass parameters (static slot)"}),`
`]}),`
`,e.jsx(n.h3,{id:"actionbars",children:e.jsx(n.code,{children:"actionBars"})}),`
`,e.jsx(n.p,{children:"Slot for placing buttons in action mode."}),`
`,e.jsxs(n.p,{children:["Allows you to fully redefine specialized actions displayed when item selection mode is active. The ",e.jsx(n.code,{children:"actionBars"})," area is shown instead of regular ",e.jsx(n.code,{children:"bars"})," when action mode is enabled (via ",e.jsx(n.code,{children:"v-model:action"})," or the ",e.jsx(n.code,{children:"action"})," property)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Slot does not pass parameters (static slot)"}),`
`]})]})}function ul(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Dn,{...i})}):Dn(i)}function _n(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Bars>
  <template #bars>
    <Button icon="search" />
    <Button icon="refresh" />
    <Button icon="more_vert" />
  </template>

  <template #actionBars>
    <Button icon="share" />
    <Button icon="edit" />
    <Button icon="delete" />
  </template>
</Bars>
`})}),`
`,e.jsx(n.h3,{id:"bars",children:e.jsx(n.code,{children:"bars"})}),`
`,e.jsx(n.p,{children:"Слот для размещения кнопок панели действий в обычном режиме."}),`
`,e.jsxs(n.p,{children:["Позволяет полностью переопределить состав, порядок и внешний вид кнопок, которые располагаются справа от заголовка и описания. Область ",e.jsx(n.code,{children:"bars"})," выравнивается по правому краю панели и наследует размеры/отступы от базового стиля компонента Bars."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Слот не передает параметры (статический слот)"}),`
`]}),`
`,e.jsx(n.h3,{id:"actionbars",children:e.jsx(n.code,{children:"actionBars"})}),`
`,e.jsx(n.p,{children:"Слот для размещения кнопок в режиме действий (action mode)."}),`
`,e.jsxs(n.p,{children:["Позволяет полностью переопределить специализированные действия, которые отображаются при активированном режиме выбора элементов. Область ",e.jsx(n.code,{children:"actionBars"})," отображается вместо обычного ",e.jsx(n.code,{children:"bars"}),", когда включён action-режим (через ",e.jsx(n.code,{children:"v-model:action"})," или свойство ",e.jsx(n.code,{children:"action"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Слот не передает параметры (статический слот)"}),`
`]})]})}function ml(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(_n,{...i})}):_n(i)}function Fn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"state-management-via-v-model",children:"State management via v-model"}),`
`,e.jsxs(n.p,{children:["Two-way binding of action mode state via ",e.jsx(n.code,{children:"v-model:action"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action: boolean"})," — action mode state of the bar"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function gl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Fn,{...i})}):Fn(i)}function Sn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-состоянием-через-v-model",children:"Управление состоянием через v-model"}),`
`,e.jsxs(n.p,{children:["Двусторонняя привязка состояния action-режима через ",e.jsx(n.code,{children:"v-model:action"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action: boolean"})," — состояние action-режима панели"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function fl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Sn,{...i})}):Sn(i)}const vl={name:"Bars",descriptions:{bars:{en:hl,ru:xl},action:{en:jl,ru:pl},slots:{en:ul,ru:ml},"v-model":{en:gl,ru:fl}}};function Ln(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"Interactive button component for triggering user actions with support for multiple visual variants, states, and accessibility features."}),`
`,e.jsx(n.p,{children:"Button provides a comprehensive solution for creating consistent, accessible action elements with built-in support for icons, loading states, ripple effects, and skeleton placeholders. The component integrates visual variants (primary, secondary, outline, text), state management (focus, hover, disabled, selected), and adaptive behavior for responsive interfaces."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple visual variants (primary, secondary, outline, text)"}),`
`,e.jsx(n.li,{children:"Comprehensive state support (focus, hover, active, disabled, selected, readonly)"}),`
`,e.jsx(n.li,{children:"Built-in icon positioning (leading and trailing)"}),`
`,e.jsx(n.li,{children:"Progress indicator integration for loading states"}),`
`,e.jsx(n.li,{children:"Ripple effect for tactile feedback"}),`
`,e.jsx(n.li,{children:"Skeleton system for loading placeholders"}),`
`,e.jsx(n.li,{children:"Adaptive and responsive behavior options"}),`
`,e.jsx(n.li,{children:"Full accessibility support (ARIA, keyboard navigation)"}),`
`,e.jsx(n.li,{children:"Customizable through design tokens"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Primary actions in forms and dialogs"}),`
`,e.jsx(n.li,{children:"Navigation and menu items"}),`
`,e.jsx(n.li,{children:"Toolbars and action bars"}),`
`,e.jsx(n.li,{children:"Call-to-action elements"}),`
`,e.jsx(n.li,{children:"Icon-only action buttons"}),`
`,e.jsx(n.li,{children:"Loading state indicators"}),`
`,e.jsx(n.li,{children:"Confirmation and cancellation actions"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const loading = ref(false)
const selected = ref(false)

const handleClick = async () => {
  loading.value = true
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
  selected.value = !selected.value
}
<\/script>

<template>
  <div class="actions">
    <!-- Primary button with loading state -->
    <Button
      primary
      :progress="loading"
      @click="handleClick"
    >
      Submit
    </Button>

    <!-- Secondary button with icon -->
    <Button
      secondary
      icon="settings"
    >
      Settings
    </Button>

    <!-- Outline button with trailing icon -->
    <Button
      outline
      icon-trailing="arrow_forward"
    >
      Next
    </Button>

    <!-- Text button with selected state -->
    <Button
      text
      :selected="selected"
      @click="selected = !selected"
    >
      Toggle
    </Button>

    <!-- Icon-only button -->
    <Button
      primary
      icon="favorite"
      adaptive="iconAlways"
    />
  </div>
</template>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Button is designed as a universal interactive element with comprehensive state management, visual variants, and accessibility features for creating consistent action interfaces."}),`
`]})]})}function bl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ln,{...i})}):Ln(i)}function Xn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"описание",children:"Описание"}),`
`,e.jsx(n.p,{children:"Интерактивный компонент кнопки для инициирования действий пользователя с поддержкой множественных визуальных вариантов, состояний и функций доступности."}),`
`,e.jsx(n.p,{children:"Button предоставляет комплексное решение для создания согласованных, доступных элементов действий со встроенной поддержкой иконок, состояний загрузки, эффектов ripple и плейсхолдеров-скелетонов. Компонент интегрирует визуальные варианты (primary, secondary, outline, text), управление состояниями (focus, hover, disabled, selected) и адаптивное поведение для отзывчивых интерфейсов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Множественные визуальные варианты (primary, secondary, outline, text)"}),`
`,e.jsx(n.li,{children:"Комплексная поддержка состояний (focus, hover, active, disabled, selected, readonly)"}),`
`,e.jsx(n.li,{children:"Встроенное позиционирование иконок (в начале и в конце)"}),`
`,e.jsx(n.li,{children:"Интеграция индикатора прогресса для состояний загрузки"}),`
`,e.jsx(n.li,{children:"Эффект ripple для тактильной обратной связи"}),`
`,e.jsx(n.li,{children:"Система скелетонов для плейсхолдеров загрузки"}),`
`,e.jsx(n.li,{children:"Опции адаптивного и отзывчивого поведения"}),`
`,e.jsx(n.li,{children:"Полная поддержка доступности (ARIA, клавиатурная навигация)"}),`
`,e.jsx(n.li,{children:"Настройка через токены дизайна"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Основные действия в формах и диалогах"}),`
`,e.jsx(n.li,{children:"Элементы навигации и меню"}),`
`,e.jsx(n.li,{children:"Панели инструментов и действий"}),`
`,e.jsx(n.li,{children:"Элементы призыва к действию"}),`
`,e.jsx(n.li,{children:"Кнопки только с иконками"}),`
`,e.jsx(n.li,{children:"Индикаторы состояния загрузки"}),`
`,e.jsx(n.li,{children:"Действия подтверждения и отмены"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const loading = ref(false)
const selected = ref(false)

const handleClick = async () => {
  loading.value = true
  // Имитация асинхронной операции
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
  selected.value = !selected.value
}
<\/script>

<template>
  <div class="actions">
    <!-- Основная кнопка с состоянием загрузки -->
    <Button
      primary
      :progress="loading"
      @click="handleClick"
    >
      Отправить
    </Button>

    <!-- Второстепенная кнопка с иконкой -->
    <Button
      secondary
      icon="settings"
    >
      Настройки
    </Button>

    <!-- Контурная кнопка с иконкой справа -->
    <Button
      outline
      icon-trailing="arrow_forward"
    >
      Далее
    </Button>

    <!-- Текстовая кнопка с выбранным состоянием -->
    <Button
      text
      :selected="selected"
      @click="selected = !selected"
    >
      Переключить
    </Button>

    <!-- Кнопка только с иконкой -->
    <Button
      primary
      icon="favorite"
      adaptive="iconAlways"
    />
  </div>
</template>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Button разработан как универсальный интерактивный элемент с комплексным управлением состояниями, визуальными вариантами и функциями доступности для создания согласованных интерфейсов действий."}),`
`]})]})}function yl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Xn,{...i})}):Xn(i)}function $n(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"primary-buttons",children:"Primary buttons"}),`
`,e.jsxs(n.p,{children:["Button component supports primary mode through the ",e.jsx(n.code,{children:"primary"})," property. In this mode, buttons have a distinctive visual style for the most important actions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual emphasis"})," - stands out prominently among other interface elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action hierarchy"})," - indicates the main or priority action on the page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"High contrast"})," - automatically applies high-contrast colors for better visibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon support"})," - enhances understanding of purpose through visual elements"]}),`
`]}),`
`,e.jsx(n.p,{children:"Primary mode is especially useful for creating main call-to-action buttons, form submissions, and confirmation actions that require user attention and should be immediately recognizable in the interface."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button primary icon="send">Submit</Button>
<Button primary icon="save">Save</Button>
<Button primary>Confirm</Button>
`})})]})}function wl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx($n,{...i})}):$n(i)}function In(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"основные-кнопки-primary",children:"Основные кнопки (primary)"}),`
`,e.jsxs(n.p,{children:["Компонент Button поддерживает основной режим через свойство ",e.jsx(n.code,{children:"primary"}),". В этом режиме кнопки имеют выделяющийся визуальный стиль для самых важных действий:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Визуальный акцент"})," - выделяются заметно среди других элементов интерфейса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Иерархия действий"})," - указывают на основное или приоритетное действие на странице"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Высокая контрастность"})," - автоматически применяются высококонтрастные цвета для лучшей видимости"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка иконок"})," - улучшают понимание назначения через визуальные элементы"]}),`
`]}),`
`,e.jsx(n.p,{children:"Primary режим особенно полезен для создания основных кнопок призыва к действию, отправки форм и подтверждающих действий, которые требуют внимания пользователя и должны быть сразу узнаваемы в интерфейсе."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button primary icon="send">Отправить</Button>
<Button primary icon="save">Сохранить</Button>
<Button primary>Подтвердить</Button>
`})})]})}function Ml(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(In,{...i})}):In(i)}function Tn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"secondary-buttons",children:"Secondary buttons"}),`
`,e.jsxs(n.p,{children:["Button component supports secondary mode through the ",e.jsx(n.code,{children:"secondary"})," property. In this mode, buttons have a less prominent visual style for alternative or supporting actions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Moderate emphasis"})," - less intrusive than primary buttons while remaining clear"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action alternatives"})," - provides users with alternative choices without overwhelming them"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Balanced contrast"})," - uses colors with moderate contrast for better visual hierarchy"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon support"})," - maintains consistency with other button variants through visual elements"]}),`
`]}),`
`,e.jsx(n.p,{children:"Secondary mode is especially useful for creating cancel buttons, reset actions, and alternative choices that support the main flow without competing for primary attention in the interface."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button secondary icon="close">Cancel</Button>
<Button secondary icon="refresh">Reset</Button>
<Button secondary>Skip</Button>
`})})]})}function Cl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Tn,{...i})}):Tn(i)}function Bn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"второстепенные-кнопки-secondary",children:"Второстепенные кнопки (secondary)"}),`
`,e.jsxs(n.p,{children:["Компонент Button поддерживает второстепенный режим через свойство ",e.jsx(n.code,{children:"secondary"}),". В этом режиме кнопки имеют менее заметный визуальный стиль для альтернативных или поддерживающих действий:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Умеренный акцент"})," - менее навязчивы чем основные кнопки, оставаясь при этом понятными"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Альтернативные действия"})," - предоставляют пользователям альтернативный выбор без перегрузки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сбалансированная контрастность"})," - используют цвета с умеренным контрастом для лучшей визуальной иерархии"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка иконок"})," - поддерживают согласованность с другими вариантами кнопок через визуальные элементы"]}),`
`]}),`
`,e.jsx(n.p,{children:"Secondary режим особенно полезен для создания кнопок отмены, действий сброса и альтернативных вариантов выбора, которые поддерживают основной поток без конкуренции за первичное внимание в интерфейсе."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button secondary icon="close">Отмена</Button>
<Button secondary icon="refresh">Сброс</Button>
<Button secondary>Пропустить</Button>
`})})]})}function kl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Bn,{...i})}):Bn(i)}function Nn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"outline-buttons",children:"Outline buttons"}),`
`,e.jsxs(n.p,{children:["Button component supports outline mode through the ",e.jsx(n.code,{children:"outline"})," property. In this mode, buttons have a minimalist visual style with transparent background and colored border:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimalist design"})," - suitable for interfaces requiring reduced visual load"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transparent background"})," - maintains clean appearance while remaining interactive"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover feedback"})," - background appears on hover for better user interaction"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon support"})," - works seamlessly with icons for enhanced clarity"]}),`
`]}),`
`,e.jsx(n.p,{children:"Outline mode is especially useful for creating tertiary actions, filter controls, and secondary options in cards or lists that need to be accessible without excessive visual noise."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button outline icon="filter">Filter</Button>
<Button outline icon="sort">Sort</Button>
<Button outline>More options</Button>
`})})]})}function Dl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Nn,{...i})}):Nn(i)}function Pn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"контурные-кнопки-outline",children:"Контурные кнопки (outline)"}),`
`,e.jsxs(n.p,{children:["Компонент Button поддерживает контурный режим через свойство ",e.jsx(n.code,{children:"outline"}),". В этом режиме кнопки имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Минималистичный дизайн"})," - подходит для интерфейсов, требующих сниженной визуальной нагрузки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Прозрачный фон"})," - поддерживает чистый внешний вид, оставаясь интерактивными"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обратная связь при наведении"})," - фон появляется при наведении для лучшего взаимодействия с пользователем"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка иконок"})," - бесшовно работает с иконками для улучшенной ясности"]}),`
`]}),`
`,e.jsx(n.p,{children:"Outline режим особенно полезен для создания третичных действий, элементов управления фильтрами и второстепенных опций в карточках или списках, которые должны быть доступны без излишнего визуального шума."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button outline icon="filter">Фильтр</Button>
<Button outline icon="sort">Сортировка</Button>
<Button outline>Дополнительно</Button>
`})})]})}function _l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Pn,{...i})}):Pn(i)}function On(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"text-buttons",children:"Text buttons"}),`
`,e.jsxs(n.p,{children:["Button component supports text mode through the ",e.jsx(n.code,{children:"text"})," property. In this mode, buttons have a minimalist text-only style resembling links for the most unobtrusive actions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unobtrusive design"})," - looks like plain text while remaining interactive"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No background or border"})," - maintains clean appearance without visual weight"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover feedback"})," - subtle background appears on hover for better interaction clarity"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon support"})," - seamlessly integrates icons while maintaining minimal visual impact"]}),`
`]}),`
`,e.jsx(n.p,{children:"Text mode is especially useful for creating tertiary actions, inline navigation links, and supplementary options within text content or footers that need to be accessible without drawing excessive attention."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button text icon="info">Learn more</Button>
<Button text icon="help">Help</Button>
<Button text>Read details</Button>
`})})]})}function Fl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(On,{...i})}):On(i)}function En(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"текстовые-кнопки-text",children:"Текстовые кнопки (text)"}),`
`,e.jsxs(n.p,{children:["Компонент Button поддерживает текстовый режим через свойство ",e.jsx(n.code,{children:"text"}),". В этом режиме кнопки имеют минималистичный текстовый стиль, напоминающий ссылки, для самых ненавязчивых действий:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ненавязчивый дизайн"})," - выглядит как обычный текст, оставаясь интерактивным"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Без фона и рамки"})," - поддерживает чистый внешний вид без визуальной нагрузки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обратная связь при наведении"})," - тонкий фон появляется при наведении для лучшей ясности взаимодействия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка иконок"})," - бесшовно интегрирует иконки, сохраняя минимальное визуальное воздействие"]}),`
`]}),`
`,e.jsx(n.p,{children:"Text режим особенно полезен для создания третичных действий, встроенных навигационных ссылок и дополнительных опций внутри текстового контента или футеров, которые должны быть доступны без привлечения чрезмерного внимания."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Button text icon="info">Узнать больше</Button>
<Button text icon="help">Справка</Button>
<Button text>Читать детали</Button>
`})})]})}function Sl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(En,{...i})}):En(i)}const Ll={name:"Button",descriptions:{button:{en:bl,ru:yl},primary:{en:wl,ru:Ml},secondary:{en:Cl,ru:kl},outline:{en:Dl,ru:_l},text:{en:Fl,ru:Sl}}};function An(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"Universal container component for displaying structured content with labels, descriptions, and interactive actions in lists and interface elements."}),`
`,e.jsx(n.p,{children:"Cell provides a consistent way to represent information blocks with support for text hierarchy (label, description, caption), interactive states, icons, and progress indicators. The component integrates ripple effects, skeleton states, and flexible content positioning for creating modern interface lists."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Structured content hierarchy (label, description, caption)"}),`
`,e.jsx(n.li,{children:"Interactive states (focus, selected, disabled, readonly)"}),`
`,e.jsx(n.li,{children:"Built-in icon and progress indicator support"}),`
`,e.jsx(n.li,{children:"Ripple effect integration for tactile feedback"}),`
`,e.jsx(n.li,{children:"Skeleton system for loading states"}),`
`,e.jsx(n.li,{children:"Customizable dividers and dynamic behavior"}),`
`,e.jsx(n.li,{children:"Flexible slot system for custom content"}),`
`,e.jsx(n.li,{children:"Optimized for list and menu interfaces"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"List items in navigation menus and settings"}),`
`,e.jsx(n.li,{children:"Contact cards and profile entries"}),`
`,e.jsx(n.li,{children:"Action sheets and selection lists"}),`
`,e.jsx(n.li,{children:"Settings panels and configuration items"}),`
`,e.jsx(n.li,{children:"Data tables and structured information displays"}),`
`,e.jsx(n.li,{children:"Mobile-first interface components"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Cell is designed as a universal building block for creating consistent list-based interfaces with rich content and interactive states."}),`
`]})]})}function Xl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(An,{...i})}):An(i)}function Rn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"описание",children:"Описание"}),`
`,e.jsx(n.p,{children:"Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и интерактивными действиями в списках и элементах интерфейса."}),`
`,e.jsx(n.p,{children:"Cell обеспечивает единообразное представление информационных блоков с поддержкой текстовой иерархии (метка, описание, подпись), интерактивных состояний, иконок и индикаторов прогресса. Компонент интегрирует эффекты ripple, состояния скелетонов и гибкое позиционирование контента для создания современных интерфейсных списков."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Структурированная иерархия контента (метка, описание, подпись)"}),`
`,e.jsx(n.li,{children:"Интерактивные состояния (focus, selected, disabled, readonly)"}),`
`,e.jsx(n.li,{children:"Встроенная поддержка иконок и индикаторов прогресса"}),`
`,e.jsx(n.li,{children:"Интеграция эффекта ripple для тактильной обратной связи"}),`
`,e.jsx(n.li,{children:"Система скелетонов для состояний загрузки"}),`
`,e.jsx(n.li,{children:"Настраиваемые разделители и динамическое поведение"}),`
`,e.jsx(n.li,{children:"Гибкая система слотов для пользовательского контента"}),`
`,e.jsx(n.li,{children:"Оптимизирован для списковых и меню интерфейсов"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Элементы списков в меню навигации и настройках"}),`
`,e.jsx(n.li,{children:"Карточки контактов и профильные записи"}),`
`,e.jsx(n.li,{children:"Списки действий и выбора элементов"}),`
`,e.jsx(n.li,{children:"Панели настроек и элементы конфигурации"}),`
`,e.jsx(n.li,{children:"Таблицы данных и структурированные информационные блоки"}),`
`,e.jsx(n.li,{children:"Компоненты интерфейса mobile-first"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Cell разработан как универсальный строительный блок для создания единообразных списковых интерфейсов с богатым контентом и интерактивными состояниями."}),`
`]})]})}function $l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Rn,{...i})}):Rn(i)}function Wn(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"trailing",children:e.jsx(n.code,{children:"trailing"})}),`
`,e.jsx(n.p,{children:"Slot for placing control elements or indicators at the end of the cell (icons, switches, buttons)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: CellClassesSub"})," — object with CSS classes for cell sub-elements"]}),`
`]}),`
`,e.jsx(n.h3,{id:"body",children:e.jsx(n.code,{children:"body"})}),`
`,e.jsx(n.p,{children:"Slot for placing additional content at the bottom of the cell (metadata, secondary actions, details)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: CellClassesSub"})," — object with CSS classes for cell sub-elements"]}),`
`]}),`
`,e.jsx(n.h2,{id:"cellclassessub",children:"CellClassesSub"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CellClassesSub"})," — object passed to all Cell component slots, containing CSS classes for styling sub-elements."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type CellClassesSub = {
  /** CSS class for label element */
  label: string

  /** CSS class for description element */
  description: string

  /** CSS class for caption element */
  caption: string

  /** CSS class for trailing area element */
  trailing: string
}
`})}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"label"})})," — CSS class for the label element (",e.jsx(n.code,{children:"{className}__label"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"description"})})," — CSS class for the description element (",e.jsx(n.code,{children:"{className}__description"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"caption"})})," — CSS class for the caption element (",e.jsx(n.code,{children:"{className}__caption"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"trailing"})})," — CSS class for the trailing area element (",e.jsx(n.code,{children:"{className}__trailing"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const selected = ref(false)
const notifications = ref(5)
<\/script>

<template>
  <Cell
    label="Notifications"
    description="You have unread messages"
    icon="notifications"
    :selected="selected"
    @click="selected = !selected"
  >
    <template #trailing="{ trailing }">
      <div :class="trailing">
        <Icon name="chevron_right" />
      </div>
    </template>

    <template #body>
      <div class="quick-actions">
        <button @click.stop="markAllRead">Mark all as read</button>
        <button @click.stop="clearAll">Clear all</button>
      </div>
    </template>
  </Cell>
</template>
`})}),`
`,e.jsx(n.p,{children:"In this example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each slot receives ",e.jsx(n.code,{children:"CellClassesSub"})," with CSS classes for proper styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"trailing"})," slot places interactive elements on the right side"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body"})," slot adds additional actions below the main content"]}),`
`,e.jsx(n.li,{children:"All elements are properly integrated into the Cell structure"}),`
`]})]})}function Il(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Wn,{...i})}):Wn(i)}function Vn(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"trailing",children:e.jsx(n.code,{children:"trailing"})}),`
`,e.jsx(n.p,{children:"Слот для размещения элементов управления или индикаторов в конце ячейки (иконки, переключатели, кнопки)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: CellClassesSub"})," — объект с CSS классами для под-элементов ячейки"]}),`
`]}),`
`,e.jsx(n.h3,{id:"body",children:e.jsx(n.code,{children:"body"})}),`
`,e.jsx(n.p,{children:"Слот для размещения дополнительного контента в нижней части ячейки (метаданные, вторичные действия, детали)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: CellClassesSub"})," — объект с CSS классами для под-элементов ячейки"]}),`
`]}),`
`,e.jsx(n.h2,{id:"cellclassessub",children:"CellClassesSub"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CellClassesSub"})," — объект, передаваемый во все слоты компонента Cell, содержащий CSS классы для стилизации под-элементов."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type CellClassesSub = {
  /** CSS класс для элемента метки */
  label: string

  /** CSS класс для элемента описания */
  description: string

  /** CSS класс для элемента подписи */
  caption: string

  /** CSS класс для элемента области trailing */
  trailing: string
}
`})}),`
`,e.jsx(n.h3,{id:"свойства",children:"Свойства"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"label"})})," — CSS класс для элемента метки (",e.jsx(n.code,{children:"{className}__label"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"description"})})," — CSS класс для элемента описания (",e.jsx(n.code,{children:"{className}__description"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"caption"})})," — CSS класс для элемента подписи (",e.jsx(n.code,{children:"{className}__caption"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"trailing"})})," — CSS класс для элемента области trailing (",e.jsx(n.code,{children:"{className}__trailing"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const selected = ref(false)
const notifications = ref(5)
<\/script>

<template>
  <Cell
    label="Уведомления"
    description="У вас есть непрочитанные сообщения"
    icon="notifications"
    :selected="selected"
    @click="selected = !selected"
  >
    <template #trailing="{ trailing }">
      <div :class="trailing">
        <Icon name="chevron_right" />
      </div>
    </template>

    <template #body>
      <div class="quick-actions">
        <button @click.stop="markAllRead">Отметить все как прочитанное</button>
        <button @click.stop="clearAll">Очистить все</button>
      </div>
    </template>
  </Cell>
</template>
`})}),`
`,e.jsx(n.p,{children:"В этом примере:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Каждый слот получает ",e.jsx(n.code,{children:"CellClassesSub"})," с CSS классами для правильной стилизации"]}),`
`,e.jsxs(n.li,{children:["Слот ",e.jsx(n.code,{children:"trailing"})," размещает интерактивные элементы справа"]}),`
`,e.jsxs(n.li,{children:["Слот ",e.jsx(n.code,{children:"body"})," добавляет дополнительные действия под основным контентом"]}),`
`,e.jsx(n.li,{children:"Все элементы корректно интегрированы в структуру Cell"}),`
`]})]})}function Tl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Vn,{...i})}):Vn(i)}const Bl={name:"Cell",descriptions:{cell:{en:Xl,ru:$l},slots:{en:Il,ru:Tl}}};function Hn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"Compact interactive element for representing input, attributes, actions, and filters in the user interface."}),`
`,e.jsx(n.p,{children:"Chip provides a unified component for displaying discrete information in a compact format with support for selection states, icons, adaptive behavior, and various visual variants (input, assistive). Inherits Button functionality while adding specialized styling and semantics for working with tags, filters, statuses, and user input. Ensures a consistent API for creating interactive chips with support for clicks, disabled/selected states, and icon integration."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Core capabilities:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Button inheritance (icons, progress, click events)"}),`
`,e.jsx(n.li,{children:"Visual variants (input, assistive) for different contexts"}),`
`,e.jsx(n.li,{children:"State management (selected, disabled, focus, readonly)"}),`
`,e.jsx(n.li,{children:"Adaptive behavior (adaptive, container) for different screen sizes"}),`
`,e.jsx(n.li,{children:"Customizable text alignment (textAlign: left/center/right)"}),`
`,e.jsx(n.li,{children:"Icon support (icon, iconTrailing) and progress indicator"}),`
`,e.jsx(n.li,{children:"Skeleton state integration for loading"}),`
`,e.jsx(n.li,{children:"Value and detail passing for element identification"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tags and labels for content categorization"}),`
`,e.jsx(n.li,{children:"Filters in search interfaces and catalogs"}),`
`,e.jsx(n.li,{children:"Displaying user-entered data (emails, contacts)"}),`
`,e.jsx(n.li,{children:"Statuses and state indicators"}),`
`,e.jsx(n.li,{children:"Assistive elements (hints, recommendations)"}),`
`,e.jsx(n.li,{children:"Selectable options in forms and lists"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Chip inherits all Button functionality, including events, icons, and progress indicators, while adding specialized styling for compact interface elements."}),`
`]})]})}function Nl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Hn,{...i})}):Hn(i)}function qn(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"описание",children:"Описание"}),`
`,e.jsx(n.p,{children:"Компактный интерактивный элемент для представления ввода, атрибутов, действий и фильтров в пользовательском интерфейсе."}),`
`,e.jsx(n.p,{children:"Chip предоставляет унифицированный компонент для отображения дискретной информации в компактном формате с поддержкой состояний выбора, иконок, адаптивного поведения и различных визуальных вариантов (input, assistive). Наследует функциональность Button, добавляя специализированную стилизацию и семантику для работы с тегами, фильтрами, статусами и пользовательским вводом. Обеспечивает согласованный API для создания интерактивных чипов с поддержкой кликов, состояния disabled/selected и интеграцией иконок."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Наследование от Button (иконки, прогресс, события клика)"}),`
`,e.jsx(n.li,{children:"Визуальные варианты (input, assistive) для разных контекстов"}),`
`,e.jsx(n.li,{children:"Управление состояниями (selected, disabled, focus, readonly)"}),`
`,e.jsx(n.li,{children:"Адаптивное поведение (adaptive, container) для разных размеров экрана"}),`
`,e.jsx(n.li,{children:"Настраиваемое выравнивание текста (textAlign: left/center/right)"}),`
`,e.jsx(n.li,{children:"Поддержка иконок (icon, iconTrailing) и прогресс-индикатора"}),`
`,e.jsx(n.li,{children:"Интеграция скелетон-состояния для загрузки"}),`
`,e.jsx(n.li,{children:"Передача value и detail для идентификации элементов"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Теги и метки для категоризации контента"}),`
`,e.jsx(n.li,{children:"Фильтры в поисковых интерфейсах и каталогах"}),`
`,e.jsx(n.li,{children:"Отображение введенных пользователем данных (email, контакты)"}),`
`,e.jsx(n.li,{children:"Статусы и индикаторы состояния"}),`
`,e.jsx(n.li,{children:"Вспомогательные элементы (подсказки, рекомендации)"}),`
`,e.jsx(n.li,{children:"Выбираемые опции в формах и списках"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Chip наследует всю функциональность Button, включая события, иконки и прогресс-индикаторы, добавляя специализированную стилизацию для компактных элементов интерфейса."}),`
`]})]})}function Pl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(qn,{...i})}):qn(i)}function Yn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"assistive-chips-assistive",children:"Assistive chips (assistive)"}),`
`,e.jsxs(n.p,{children:["The Chip component supports assistive mode through the ",e.jsx(n.code,{children:"assistive"})," property. In this mode, chips have a special visual style to help users complete tasks:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Distinctive style"})," - visually stand out among other elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hints and recommendations"})," - suggest action options or auto-completion"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User guidance"})," - help navigate the interface"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon support"})," - improve understanding of purpose through visual elements"]}),`
`]}),`
`,e.jsx(n.p,{children:"Assistive mode is especially useful for creating hint systems, recommendations, and helper actions that guide users to the right solutions without excessive visual noise."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Chip assistive icon="lightbulb">Recommendation</Chip>
<Chip assistive icon="check">Hint</Chip>
<Chip assistive>Auto-complete</Chip>
`})})]})}function Ol(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Yn,{...i})}):Yn(i)}function zn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"вспомогательные-чипы-assistive",children:"Вспомогательные чипы (assistive)"}),`
`,e.jsxs(n.p,{children:["Компонент Chip поддерживает вспомогательный режим через свойство ",e.jsx(n.code,{children:"assistive"}),". В этом режиме чипы имеют специальный визуальный стиль для помощи пользователям в выполнении задач:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отличительный стиль"})," - визуально выделяются среди других элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подсказки и рекомендации"})," - предлагают варианты действий или автодополнения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Направление пользователя"})," - помогают ориентироваться в интерфейсе"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка иконок"})," - улучшают понимание назначения через визуальные элементы"]}),`
`]}),`
`,e.jsx(n.p,{children:"Assistive режим особенно полезен для создания систем подсказок, рекомендаций и вспомогательных действий, которые направляют пользователя к нужным решениям без излишнего визуального шума."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Chip assistive icon="lightbulb">Рекомендация</Chip>
<Chip assistive icon="check">Подсказка</Chip>
<Chip assistive>Автодополнение</Chip>
`})})]})}function El(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(zn,{...i})}):zn(i)}function Un(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"input-chips-input",children:"Input chips (input)"}),`
`,e.jsxs(n.p,{children:["The Chip component supports input mode through the ",e.jsx(n.code,{children:"input"})," property. In this mode, chips have an input field style and represent discrete information entered by the user:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form-like appearance"})," - visually resemble input elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User data"})," - display tags, contacts, keywords"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactivity"})," - can be removed or edited"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grouping"})," - often used in sets for multiple selections"]}),`
`]}),`
`,e.jsx(n.p,{children:"Input mode is especially useful for displaying data that users have actively entered or selected, making them visually distinct from static interface elements."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Chip input icon="person">Contact</Chip>
<Chip input icon="tag">Tag</Chip>
<Chip input selected>Selected</Chip>
`})})]})}function Al(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Un,{...i})}):Un(i)}function Gn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"input-чипы-input",children:"Input чипы (input)"}),`
`,e.jsxs(n.p,{children:["Компонент Chip поддерживает режим input через свойство ",e.jsx(n.code,{children:"input"}),". В этом режиме чипы имеют стиль полей ввода и представляют дискретную информацию, введенную пользователем:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Внешний вид формы"})," - визуально напоминают элементы ввода"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Пользовательские данные"})," - отображают теги, контакты, ключевые слова"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интерактивность"})," - могут быть удалены или отредактированы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Группировка"})," - часто используются в наборах для множественного выбора"]}),`
`]}),`
`,e.jsx(n.p,{children:"Input режим особенно полезен для отображения данных, которые пользователь активно вводил или выбирал, делая их визуально отличимыми от статических элементов интерфейса."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Chip input icon="person">Контакт</Chip>
<Chip input icon="tag">Тег</Chip>
<Chip input selected>Выбранный</Chip>
`})})]})}function Rl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Gn,{...i})}):Gn(i)}const Wl={name:"Chip",descriptions:{chip:{en:Nl,ru:Pl},assistive:{en:Ol,ru:El},input:{en:Al,ru:Rl}}};function Kn(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Base container for form controls that composes label, messages, counter, icons, and progress into a unified structure."}),`
`,e.jsx(n.p,{children:"Field centralizes the visual representation management of input fields, handles focus and validation states, coordinates auxiliary element positioning, and provides a consistent API for building any type of inputs. It serves as the fundamental foundation for creating consistent forms with slot support, control icons, and subcomponent integration."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Core capabilities:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Subcomponent composition (FieldLabel, FieldMessage, FieldCounter, Progress)"}),`
`,e.jsx(n.li,{children:"State management (focus, disabled, readonly, selected, block)"}),`
`,e.jsx(n.li,{children:"Slot coordination (caption, prefix, suffix, leading, trailing)"}),`
`,e.jsx(n.li,{children:"Validation highlighting based on validationMessage and forceShowMessage"}),`
`,e.jsx(n.li,{children:"Control icons with customizable visibility (cancel, arrows)"}),`
`,e.jsx(n.li,{children:"Flexible counter positioning via counterTop"}),`
`,e.jsx(n.li,{children:"Built-in helpers for sizing and icons (FieldSize, FieldIcons)"}),`
`,e.jsx(n.li,{children:"Loading progress integration and skeleton state"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Base container for Input, Select, Textarea, and other form controls"}),`
`,e.jsx(n.li,{children:"Building custom form components with unified styling"}),`
`,e.jsx(n.li,{children:"Creating fields with validation and character counters"}),`
`,e.jsx(n.li,{children:"Developing component libraries with consistent UI"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Field is a constructor container: it does not handle data input directly, but organizes structure, classes, and auxiliary element display for any type of input fields."}),`
`]})]})}function Vl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Kn,{...i})}):Kn(i)}function Jn(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Базовый контейнер для полей формы, который композирует метку, сообщения, счётчик, иконки и прогресс в единую структуру."}),`
`,e.jsx(n.p,{children:"Field централизует управление визуальным представлением полей ввода, обрабатывает состояния фокуса и валидации, координирует расположение вспомогательных элементов и предоставляет согласованный API для построения любых типов инпутов. Является фундаментальной основой для создания консистентных форм с поддержкой слотов, иконок управления и интеграцией подкомпонентов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Композиция подкомпонентов (FieldLabel, FieldMessage, FieldCounter, Progress)"}),`
`,e.jsx(n.li,{children:"Управление состояниями (focus, disabled, readonly, selected, block)"}),`
`,e.jsx(n.li,{children:"Координация слотов (caption, prefix, suffix, leading, trailing)"}),`
`,e.jsx(n.li,{children:"Подсветка валидации на основе validationMessage и forceShowMessage"}),`
`,e.jsx(n.li,{children:"Иконки управления с настраиваемой видимостью (cancel, arrows)"}),`
`,e.jsx(n.li,{children:"Гибкое позиционирование счётчика через counterTop"}),`
`,e.jsx(n.li,{children:"Встроенные помощники для размеров и иконок (FieldSize, FieldIcons)"}),`
`,e.jsx(n.li,{children:"Интеграция прогресса загрузки и скелетон-состояния"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Базовый контейнер для Input, Select, Textarea и других полей ввода"}),`
`,e.jsx(n.li,{children:"Построение кастомных компонентов форм с единым стилем"}),`
`,e.jsx(n.li,{children:"Создание полей с валидацией и счётчиками символов"}),`
`,e.jsx(n.li,{children:"Разработка библиотек компонентов с консистентным UI"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Field — это контейнер-конструктор: он не обрабатывает ввод данных напрямую, а организует структуру, классы и отображение вспомогательных элементов для любых типов полей ввода."}),`
`]})]})}function Hl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Jn,{...i})}):Jn(i)}function Qn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"clear-button",children:"Clear button"}),`
`,e.jsxs(n.p,{children:["Properties ",e.jsx(n.code,{children:"cancel"})," and ",e.jsx(n.code,{children:"cancelShow"})," are designed to control the display of the field clear icon."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cancel"})," — clear button display mode (",e.jsx(n.code,{children:"auto"})," or ",e.jsx(n.code,{children:"always"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cancelShow"})," — conditional visibility flag, used only in ",e.jsx(n.code,{children:"auto"})," mode"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: if ",e.jsx(n.code,{children:"cancel"})," is set to ",e.jsx(n.code,{children:"auto"}),", the clear icon is displayed only when the conditions ",e.jsx(n.code,{children:"cancelShow = true"})," are met, the field is active (not ",e.jsx(n.code,{children:"disabled"}),"/",e.jsx(n.code,{children:"readonly"}),"), and arrow mode (",e.jsx(n.code,{children:"arrowCarousel"}),"/",e.jsx(n.code,{children:"arrowStepper"}),") is not enabled. When ",e.jsx(n.code,{children:"cancel = always"}),", the icon is displayed forcibly (except for ",e.jsx(n.code,{children:"disabled"}),"/",e.jsx(n.code,{children:"readonly"})," or active arrows), the ",e.jsx(n.code,{children:"cancelShow"})," value is ignored. Arrow modes take priority over the clear button — when navigation is active, cancel is hidden regardless of settings."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function ql(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Qn,{...i})}):Qn(i)}function Zn(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"кнопка-очистки",children:"Кнопка очистки"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"cancel"})," и ",e.jsx(n.code,{children:"cancelShow"})," предназначены для управления отображением иконки очистки поля."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cancel"})," — режим отображения кнопки очистки (",e.jsx(n.code,{children:"auto"})," или ",e.jsx(n.code,{children:"always"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cancelShow"})," — условный флаг видимости, используется только в режиме ",e.jsx(n.code,{children:"auto"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: если ",e.jsx(n.code,{children:"cancel"})," установлен в ",e.jsx(n.code,{children:"auto"}),", иконка очистки отображается только при выполнении условий ",e.jsx(n.code,{children:"cancelShow = true"}),", поле активно (не ",e.jsx(n.code,{children:"disabled"}),"/",e.jsx(n.code,{children:"readonly"}),") и не включён режим стрелок (",e.jsx(n.code,{children:"arrowCarousel"}),"/",e.jsx(n.code,{children:"arrowStepper"}),"). При ",e.jsx(n.code,{children:"cancel = always"})," иконка отображается принудительно (кроме случаев ",e.jsx(n.code,{children:"disabled"}),"/",e.jsx(n.code,{children:"readonly"})," или активных стрелок), значение ",e.jsx(n.code,{children:"cancelShow"})," игнорируется. Режимы стрелок имеют приоритет над кнопкой очистки — при активной навигации cancel скрывается независимо от настроек."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Yl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Zn,{...i})}):Zn(i)}function ne(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"navigation-and-arrows",children:"Navigation and arrows"}),`
`,e.jsxs(n.p,{children:["Properties ",e.jsx(n.code,{children:"arrowCarousel"}),", ",e.jsx(n.code,{children:"arrowStepper"}),", ",e.jsx(n.code,{children:"disabledPrevious"}),", ",e.jsx(n.code,{children:"disabledNext"}),", and ",e.jsx(n.code,{children:"align"})," are designed to control built-in navigation elements and content alignment."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"arrowCarousel"})," — enables navigation arrows (left/right) for switching elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"arrowStepper"})," — enables numeric step buttons (minus/plus)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabledPrevious"})," — disables the left button (back/minus)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabledNext"})," — disables the right button (forward/plus)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"align"})," — horizontal content alignment (",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"right"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: only one arrow mode is active — if ",e.jsx(n.code,{children:"arrowCarousel = true"}),", the ",e.jsx(n.code,{children:"arrowStepper"})," mode is ignored and vice versa. When navigation mode is active, the clear button (",e.jsx(n.code,{children:"cancel"}),") is automatically hidden, as the control area takes priority. The ",e.jsx(n.code,{children:"disabledPrevious"})," and ",e.jsx(n.code,{children:"disabledNext"})," flags apply only to the currently active arrow mode. The ",e.jsx(n.code,{children:"align"})," property affects text and content alignment inside the field, but does not change the position of the navigation buttons themselves."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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

  <!-- Numeric stepper with centering -->
  <Field
    label="Quantity"
    arrow-stepper
    align="center"
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

  <!-- Stepper without limits -->
  <Field
    label="Value"
    arrow-stepper
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
`})})]})}function zl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ne,{...i})}):ne(i)}function ee(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"навигация-и-стрелки",children:"Навигация и стрелки"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"arrowCarousel"}),", ",e.jsx(n.code,{children:"arrowStepper"}),", ",e.jsx(n.code,{children:"disabledPrevious"}),", ",e.jsx(n.code,{children:"disabledNext"})," и ",e.jsx(n.code,{children:"align"})," предназначены для управления встроенными элементами навигации и выравнивания содержимого."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"arrowCarousel"})," — включает стрелки навигации (влево/вправо) для переключения элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"arrowStepper"})," — включает числовые шаговые кнопки (минус/плюс)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabledPrevious"})," — отключает левую кнопку (назад/минус)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabledNext"})," — отключает правую кнопку (вперёд/плюс)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"align"})," — горизонтальное выравнивание содержимого (",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"right"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: активен только один режим стрелок — если ",e.jsx(n.code,{children:"arrowCarousel = true"}),", режим ",e.jsx(n.code,{children:"arrowStepper"})," игнорируется и наоборот. При активном режиме навигации кнопка очистки (",e.jsx(n.code,{children:"cancel"}),") автоматически скрывается, так как область управления имеет приоритет. Флаги ",e.jsx(n.code,{children:"disabledPrevious"})," и ",e.jsx(n.code,{children:"disabledNext"})," применяются только к текущему активному режиму стрелок. Свойство ",e.jsx(n.code,{children:"align"})," влияет на выравнивание текста и содержимого внутри поля, но не изменяет позицию самих кнопок навигации."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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

  <!-- Числовой степпер с центрированием -->
  <Field
    label="Количество"
    arrow-stepper
    align="center"
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

  <!-- Степпер без ограничений -->
  <Field
    label="Значение"
    arrow-stepper
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
`})})]})}function Ul(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ee,{...i})}):ee(i)}function ie(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"value-state",children:"Value state"}),`
`,e.jsxs(n.p,{children:["Properties ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"isValue"})," are designed to control the visual filled state of the field independently of the actual content."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — actual field content (string/number) passed to the inner element via slot"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isValue"}),' — forcibly activates the visual "filled" state even when the value is empty']}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: ",e.jsx(n.code,{children:"Field"})," reads ",e.jsx(n.code,{children:"value"})," reactively through ",e.jsx(n.code,{children:"focusValue"}),' for visual purposes (displaying text in scoreboard, caption handling), but does not manage it directly or validate it. If the real value is non-empty, the field automatically receives the visual "filled" state regardless of ',e.jsx(n.code,{children:"isValue"}),". When the value is empty, the ",e.jsx(n.code,{children:"isValue = true"})," flag forcibly activates the visual filled mode (floating label, corresponding classes), which is useful for preloads, masks, or delayed data insertion."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Gl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ie,{...i})}):ie(i)}function se(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"состояние-значения",children:"Состояние значения"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"value"})," и ",e.jsx(n.code,{children:"isValue"})," предназначены для управления визуальным состоянием заполненности поля независимо от фактического содержимого."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — фактическое содержимое поля (строка/число), передаваемое во внутренний элемент через слот"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isValue"}),' — принудительно активирует визуальное состояние "заполнено" даже при пустом значении']}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: ",e.jsx(n.code,{children:"Field"})," считывает ",e.jsx(n.code,{children:"value"})," реактивно через ",e.jsx(n.code,{children:"focusValue"}),' для визуальных целей (отображение текста в scoreboard, работа с caption), но не управляет им напрямую и не валидирует. Если реальное значение непустое, поле автоматически получает визуальное состояние "заполнено" независимо от ',e.jsx(n.code,{children:"isValue"}),". При пустом значении флаг ",e.jsx(n.code,{children:"isValue = true"})," принудительно активирует визуальный режим заполненности (плавающая метка, соответствующие классы), что полезно для прелоадов, масок или отложенной подстановки данных."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Kl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(se,{...i})}):se(i)}function te(i){const n={code:"code",pre:"pre",...s(),...i.components};return e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`## Field width

Property \`width\` defines the horizontal size of the Field container.

**Possible values:**

- any valid CSS value (\`'320px'\`, \`'48rem'\`, \`'50%'\`, \`'min(100%,320px)'\`, \`'clamp(240px,40vw,480px)'\`)
- design system tokens (e.g., \`'sm'\`, \`'md'\`, \`'lg'\` if supported)
- \`'custom'\` — internal technical marker (not used directly)

Controls the fixed or relative width of the field, applying the value directly without additional wrappers. When the property is not set, the width remains flexible and depends on the parent container. When the \`block\` property is active (set to \`true\`), the field takes 100% width regardless of the specified \`width\` value, with block mode taking priority.

\`\`\`html
<!-- Automatic width -->
<Field label="auto" />

<!-- Fixed width -->
<Field width="320px" label="320px" />

<!-- Relative width -->
<Field width="50%" label="50%" />

<!-- CSS functions -->
<Field width="min(100%, 320px)" label="min(...)" />
<Field width="clamp(240px, 40vw, 480px)" label="clamp(...)" />
\`\`\`
`})})}function Jl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(te,{...i})}):te(i)}function le(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"ширина-поля",children:"Ширина поля"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"width"})," определяет горизонтальный размер контейнера Field."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["любое валидное CSS-значение (",e.jsx(n.code,{children:"'320px'"}),", ",e.jsx(n.code,{children:"'48rem'"}),", ",e.jsx(n.code,{children:"'50%'"}),", ",e.jsx(n.code,{children:"'min(100%,320px)'"}),", ",e.jsx(n.code,{children:"'clamp(240px,40vw,480px)'"}),")"]}),`
`,e.jsxs(n.li,{children:["дизайн-токены системы (например, ",e.jsx(n.code,{children:"'sm'"}),", ",e.jsx(n.code,{children:"'md'"}),", ",e.jsx(n.code,{children:"'lg'"})," при поддержке)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'custom'"})," — внутренняя техническая метка (не используется напрямую)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Контролирует фиксированную или относительную ширину поля, применяя значение напрямую без дополнительных обёрток. При отсутствии свойства ширина остаётся гибкой и зависит от родительского контейнера. При активном свойстве ",e.jsx(n.code,{children:"block"})," (установлено в ",e.jsx(n.code,{children:"true"}),") поле занимает 100% ширины независимо от заданного значения ",e.jsx(n.code,{children:"width"}),", приоритет имеет блочный режим."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Автоматическая ширина -->
<Field label="auto" />

<!-- Фиксированная ширина -->
<Field width="320px" label="320px" />

<!-- Относительная ширина -->
<Field width="50%" label="50%" />

<!-- CSS-функции -->
<Field width="min(100%, 320px)" label="min(...)" />
<Field width="clamp(240px, 40vw, 480px)" label="clamp(...)" />
`})})]})}function Ql(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(le,{...i})}):le(i)}function re(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Slot for placing the main input element (input, select, textarea, etc.). Required slot."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldControl"})," — object with data for binding the input element"]}),`
`]}),`
`,e.jsx(n.h3,{id:"leading",children:e.jsx(n.code,{children:"leading"})}),`
`,e.jsx(n.p,{children:"Slot for placing content at the start of the interactive field area, before the main input element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldControl"})," — object with data for binding"]}),`
`]}),`
`,e.jsx(n.h3,{id:"trailing",children:e.jsx(n.code,{children:"trailing"})}),`
`,e.jsx(n.p,{children:"Slot for placing content at the end of the interactive field area, after the main input element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldControl"})," — object with data for binding"]}),`
`]}),`
`,e.jsx(n.h2,{id:"fieldcontrol",children:"FieldControl"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldControl"})," — object passed to Field component slots, containing data for proper integration of input elements."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FieldControl = {
  /** Unique element identifier for binding label and input */
  id: string

  /** CSS classes for the visible input area */
  className: string

  /** CSS classes for the hidden native input element */
  classHidden: string
}
`})}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"id"})})," — unique identifier generated by the component to link ",e.jsx(n.code,{children:"<label>"})," with the input element via the ",e.jsx(n.code,{children:"for"})," attribute"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"className"})})," — CSS classes for styling the visible input element (applied to input, textarea, select, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"classHidden"})})," — CSS classes for the hidden native input (used in custom components like Checkbox, Radio)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"property-purposes",children:"Property purposes"}),`
`,e.jsx(n.h4,{id:"id",children:e.jsx(n.code,{children:"id"})}),`
`,e.jsx(n.p,{children:"Ensures accessibility and proper label functionality:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Allows clicking on the label to focus the field"}),`
`,e.jsx(n.li,{children:"Links descriptions with the input element for screen readers"}),`
`,e.jsx(n.li,{children:"Generated automatically, must be used"}),`
`]}),`
`,e.jsx(n.h4,{id:"classname",children:e.jsx(n.code,{children:"className"})}),`
`,e.jsx(n.p,{children:"Applies Field component styles to the input element:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensures visual consistency"}),`
`,e.jsx(n.li,{children:"Adds states (focus, disabled, validation)"}),`
`,e.jsx(n.li,{children:"Integrates skeleton states"}),`
`]}),`
`,e.jsx(n.h4,{id:"classhidden",children:e.jsx(n.code,{children:"classHidden"})}),`
`,e.jsx(n.p,{children:"Used for native inputs in custom components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hides the original input visually"}),`
`,e.jsx(n.li,{children:"Preserves functionality and accessibility"}),`
`,e.jsx(n.li,{children:"Applied in Checkbox, Radio, Switch"}),`
`]}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')

const validateEmail = (value) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  if (!emailRegex.test(value)) {
    error.value = 'Invalid email'
  } else {
    error.value = ''
  }
}
<\/script>

<template>
  <div class="form">
    <!-- Simple field with search icon -->
    <Field label="Email" :validation-message="error">
      <template #leading>
        <Icon name="email" />
      </template>
      <template #default="{ id, className }">
        <input
          :id="id"
          :class="className"
          type="email"
          v-model="email"
          @blur="validateEmail(email)"
        />
      </template>
    </Field>

    <!-- Field with password visibility toggle -->
    <Field label="Password">
      <template #default="{ id, className }">
        <input
          :id="id"
          :class="className"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
        />
      </template>
      <template #trailing>
        <button
          type="button"
          @click="showPassword = !showPassword"
          aria-label="Show password"
        >
          <Icon :name="showPassword ? 'visibility_off' : 'visibility'" />
        </button>
      </template>
    </Field>

    <!-- Field with custom element -->
    <Field label="Select option">
      <template #leading>
        <Icon name="tune" />
      </template>
      <template #default="{ id, className }">
        <select :id="id" :class="className" v-model="selectedOption">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </template>
      <template #trailing>
        <Icon name="expand_more" />
      </template>
    </Field>
  </div>
</template>
`})}),`
`,e.jsx(n.p,{children:"In this example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each field uses ",e.jsx(n.code,{children:"id"})," and ",e.jsx(n.code,{children:"className"})," from ",e.jsx(n.code,{children:"FieldControl"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"leading"})," slot adds icons to the left of the input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"trailing"})," slot adds interactive elements to the right"]}),`
`,e.jsx(n.li,{children:"All elements are properly integrated into the Field structure"}),`
`]})]})}function Zl(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(re,{...i})}):re(i)}function ce(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Слот для размещения основного элемента ввода (input, select, textarea и т.д.). Обязательный слот."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldControl"})," — объект с данными для связывания элемента ввода"]}),`
`]}),`
`,e.jsx(n.h3,{id:"leading",children:e.jsx(n.code,{children:"leading"})}),`
`,e.jsx(n.p,{children:"Слот для размещения контента в начале интерактивной области поля, перед основным элементом ввода."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldControl"})," — объект с данными для связывания"]}),`
`]}),`
`,e.jsx(n.h3,{id:"trailing",children:e.jsx(n.code,{children:"trailing"})}),`
`,e.jsx(n.p,{children:"Слот для размещения контента в конце интерактивной области поля, после основного элемента ввода."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldControl"})," — объект с данными для связывания"]}),`
`]}),`
`,e.jsx(n.h2,{id:"fieldcontrol",children:"FieldControl"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldControl"})," — объект, передаваемый в слоты компонента Field, содержащий данные для корректной интеграции элементов ввода."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FieldControl = {
  /** Уникальный идентификатор элемента для связывания label и input */
  id: string

  /** CSS-классы для видимой зоны ввода */
  className: string

  /** CSS-классы для скрытого нативного элемента ввода */
  classHidden: string
}
`})}),`
`,e.jsx(n.h3,{id:"свойства",children:"Свойства"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"id"})})," — уникальный идентификатор, генерируемый компонентом для связывания ",e.jsx(n.code,{children:"<label>"})," с элементом ввода через атрибут ",e.jsx(n.code,{children:"for"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"className"})})," — CSS-классы для стилизации видимого элемента ввода (применяются к input, textarea, select и т.д.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"classHidden"})})," — CSS-классы для скрытого нативного input (используется в кастомных компонентах типа Checkbox, Radio)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"назначение-свойств",children:"Назначение свойств"}),`
`,e.jsx(n.h4,{id:"id",children:e.jsx(n.code,{children:"id"})}),`
`,e.jsx(n.p,{children:"Обеспечивает доступность (accessibility) и корректную работу label:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Позволяет кликать на метку для фокуса на поле"}),`
`,e.jsx(n.li,{children:"Связывает описания с элементом ввода для скринридеров"}),`
`,e.jsx(n.li,{children:"Генерируется автоматически, использовать обязательно"}),`
`]}),`
`,e.jsx(n.h4,{id:"classname",children:e.jsx(n.code,{children:"className"})}),`
`,e.jsx(n.p,{children:"Применяет стили компонента Field к элементу ввода:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Обеспечивает визуальное единообразие"}),`
`,e.jsx(n.li,{children:"Добавляет состояния (focus, disabled, validation)"}),`
`,e.jsx(n.li,{children:"Интегрирует скелетон-состояния"}),`
`]}),`
`,e.jsx(n.h4,{id:"classhidden",children:e.jsx(n.code,{children:"classHidden"})}),`
`,e.jsx(n.p,{children:"Используется для нативных input в кастомных компонентах:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Скрывает оригинальный input визуально"}),`
`,e.jsx(n.li,{children:"Сохраняет функциональность и доступность"}),`
`,e.jsx(n.li,{children:"Применяется в Checkbox, Radio, Switch"}),`
`]}),`
`,e.jsx(n.h3,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')

const validateEmail = (value) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  if (!emailRegex.test(value)) {
    error.value = 'Некорректный email'
  } else {
    error.value = ''
  }
}
<\/script>

<template>
  <div class="form">
    <!-- Простое поле с иконкой поиска -->
    <Field label="Email" :validation-message="error">
      <template #leading>
        <Icon name="email" />
      </template>
      <template #default="{ id, className }">
        <input
          :id="id"
          :class="className"
          type="email"
          v-model="email"
          @blur="validateEmail(email)"
        />
      </template>
    </Field>

    <!-- Поле с переключением видимости пароля -->
    <Field label="Пароль">
      <template #default="{ id, className }">
        <input
          :id="id"
          :class="className"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
        />
      </template>
      <template #trailing>
        <button
          type="button"
          @click="showPassword = !showPassword"
          aria-label="Показать пароль"
        >
          <Icon :name="showPassword ? 'visibility_off' : 'visibility'" />
        </button>
      </template>
    </Field>

    <!-- Поле с кастомным элементом -->
    <Field label="Выберите опцию">
      <template #leading>
        <Icon name="tune" />
      </template>
      <template #default="{ id, className }">
        <select :id="id" :class="className" v-model="selectedOption">
          <option value="1">Опция 1</option>
          <option value="2">Опция 2</option>
          <option value="3">Опция 3</option>
        </select>
      </template>
      <template #trailing>
        <Icon name="expand_more" />
      </template>
    </Field>
  </div>
</template>
`})}),`
`,e.jsx(n.p,{children:"В этом примере:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Каждое поле использует ",e.jsx(n.code,{children:"id"})," и ",e.jsx(n.code,{children:"className"})," из ",e.jsx(n.code,{children:"FieldControl"})]}),`
`,e.jsxs(n.li,{children:["Слот ",e.jsx(n.code,{children:"leading"})," добавляет иконки слева от ввода"]}),`
`,e.jsxs(n.li,{children:["Слот ",e.jsx(n.code,{children:"trailing"})," добавляет интерактивные элементы справа"]}),`
`,e.jsx(n.li,{children:"Все элементы корректно интегрированы в структуру Field"}),`
`]})]})}function nr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ce,{...i})}):ce(i)}const er={name:"Field",descriptions:{arrows:{en:zl,ru:Ul},cancel:{en:ql,ru:Yl},field:{en:Vl,ru:Hl},slots:{en:Zl,ru:nr},value:{en:Gl,ru:Kl},width:{en:Jl,ru:Ql}}};function oe(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for displaying character count and input limits in form fields with customizable formatting templates."}),`
`,e.jsx(n.p,{children:"FieldCounter provides visual feedback about the number of entered characters, automatically formats display depending on the presence of a maximum limit, and supports flexible customization through templates with placeholders. The component integrates with text fields and text areas, providing users with information about restrictions and remaining input space."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display current number of entered characters"}),`
`,e.jsx(n.li,{children:"Automatic maximum limit display when present"}),`
`,e.jsx(n.li,{children:"Flexible formatting templates with [c] and [m] placeholders"}),`
`,e.jsx(n.li,{children:"Automatic format detection (50 / 100 or just 50)"}),`
`,e.jsx(n.li,{children:"Support for string and numeric counter and maxlength values"}),`
`,e.jsx(n.li,{children:"Smart visibility management via counterShow property"}),`
`,e.jsx(n.li,{children:"Compact display for space efficiency"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Text fields with character count limits"}),`
`,e.jsx(n.li,{children:"Multi-line text areas (textarea) for descriptions"}),`
`,e.jsx(n.li,{children:"Comment input fields with limits"}),`
`,e.jsx(n.li,{children:"Forms with minimum/maximum length requirements"}),`
`,e.jsx(n.li,{children:"SMS editors with character counting"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const message = ref('')
const bio = ref('')
<\/script>

<template>
  <!-- Counter only without limit -->
  <FieldCounter :counter="message.length" />

  <!-- Counter with maximum limit (format: 50 / 200) -->
  <FieldCounter
    :counter="message.length"
    :maxlength="200"
  />

  <!-- Custom display template -->
  <FieldCounter
    :counter="bio.length"
    :maxlength="500"
    template="Characters: [c] of [m]"
  />

  <!-- HTML in template for styling -->
  <FieldCounter
    :counter="message.length"
    :maxlength="160"
    template="<b>[c]</b> / [m] characters"
  />

  <!-- Conditional display via counterShow -->
  <FieldCounter
    :counter="message.length"
    :maxlength="100"
    :counterShow="message.length > 0"
`})})]})}function ir(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(oe,{...i})}):oe(i)}function de(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для отображения счетчика символов и лимитов ввода в полях форм с поддержкой настраиваемых шаблонов форматирования."}),`
`,e.jsx(n.p,{children:"FieldCounter обеспечивает визуальную обратную связь о количестве введенных символов, автоматически форматирует отображение в зависимости от наличия максимального лимита и поддерживает гибкую настройку через шаблоны с плейсхолдерами. Компонент интегрируется с текстовыми полями и областями ввода, предоставляя пользователю информацию об ограничениях и оставшемся месте для ввода."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Отображение текущего количества введенных символов"}),`
`,e.jsx(n.li,{children:"Автоматический показ максимального лимита при его наличии"}),`
`,e.jsx(n.li,{children:"Гибкие шаблоны форматирования с плейсхолдерами [c] и [m]"}),`
`,e.jsx(n.li,{children:"Автоматическое определение формата (50 / 100 или просто 50)"}),`
`,e.jsx(n.li,{children:"Поддержка строковых и числовых значений counter и maxlength"}),`
`,e.jsx(n.li,{children:"Умное управление видимостью через свойство counterShow"}),`
`,e.jsx(n.li,{children:"Компактное отображение для экономии пространства"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Текстовые поля с ограничением по количеству символов"}),`
`,e.jsx(n.li,{children:"Многострочные текстовые области (textarea) для описаний"}),`
`,e.jsx(n.li,{children:"Поля ввода комментариев с лимитами"}),`
`,e.jsx(n.li,{children:"Формы с требованиями к минимальной/максимальной длине"}),`
`,e.jsx(n.li,{children:"SMS-редакторы с подсчетом символов"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const message = ref('')
const bio = ref('')
<\/script>

<template>
  <!-- Только счетчик без лимита -->
  <FieldCounter :counter="message.length" />

  <!-- Счетчик с максимальным лимитом (формат: 50 / 200) -->
  <FieldCounter
    :counter="message.length"
    :maxlength="200"
  />

  <!-- Кастомный шаблон отображения -->
  <FieldCounter
    :counter="bio.length"
    :maxlength="500"
    template="Символов: [c] из [m]"
  />

  <!-- HTML в шаблоне для стилизации -->
  <FieldCounter
    :counter="message.length"
    :maxlength="160"
    template="<b>[c]</b> / [m] символов"
  />

  <!-- Условное отображение через counterShow -->
  <FieldCounter
    :counter="message.length"
    :maxlength="100"
    :counterShow="message.length > 0"
  />
</template>
`})})]})}function sr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(de,{...i})}):de(i)}function ae(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"custom-display-templates",children:"Custom Display Templates"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"template"})," property allows you to customize the counter display format using placeholders."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available placeholders:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[c]"})," — current number of entered characters"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[m]"})," — maximum character limit"]}),`
`]}),`
`,e.jsxs(n.p,{children:['Uses string interpolation to replace placeholders with actual counter values. Supports HTML markup inside the template for customizing styles of individual parts. When no template is provided, the component automatically determines the format: displays "50 / 100" when ',e.jsx(n.code,{children:"maxlength"}),` is present or just "50" when it's absent.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Descriptive format -->
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
`})})]})}function tr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ae,{...i})}):ae(i)}function he(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"настраиваемые-шаблоны-отображения",children:"Настраиваемые шаблоны отображения"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"template"})," позволяет настроить формат отображения счетчика символов с использованием плейсхолдеров."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Доступные плейсхолдеры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[c]"})," — текущее количество введенных символов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[m]"})," — максимальный лимит символов"]}),`
`]}),`
`,e.jsxs(n.p,{children:['Использует строковую интерполяцию для замены плейсхолдеров на актуальные значения счетчика. Поддерживает HTML-разметку внутри шаблона для кастомизации стилей отдельных частей. При отсутствии шаблона компонент автоматически определяет формат: отображает "50 / 100" при наличии ',e.jsx(n.code,{children:"maxlength"}),' или просто "50" при его отсутствии.']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Описательный формат -->
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
`})})]})}function lr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(he,{...i})}):he(i)}const rr={name:"FieldCounter",descriptions:{fieldCounter:{en:ir,ru:sr},templates:{en:tr,ru:lr}}};function xe(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for displaying input field labels with support for required indicator, character counter, and progress indicator."}),`
`,e.jsx(n.p,{children:"FieldLabel provides uniform display of form field captions, automatically integrates with FieldCounter for character counting and Progress for loading indication. The component supports skeleton loading, customizable slots, and ensures consistent visual styling of form elements."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Text label display for input fields"}),`
`,e.jsx(n.li,{children:"Required field indicator (required marker)"}),`
`,e.jsx(n.li,{children:"FieldCounter integration for character counting"}),`
`,e.jsx(n.li,{children:"Built-in Progress indicator support"}),`
`,e.jsx(n.li,{children:"Skeleton loading support for pending states"}),`
`,e.jsx(n.li,{children:"Flexible customization via slots (leading, trailing)"}),`
`,e.jsx(n.li,{children:"Consistent spacing and styles within forms"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Labels for text fields and textareas"}),`
`,e.jsx(n.li,{children:"Forms with required fields"}),`
`,e.jsx(n.li,{children:"Fields with character count limits"}),`
`,e.jsx(n.li,{children:"Forms with file upload progress indication"}),`
`,e.jsx(n.li,{children:"Dynamic forms with skeleton loading"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const text = ref('')
const maxLength = 100
<\/script>

<template>
  <!-- Simple label -->
  <FieldLabel label="Username" />

  <!-- Required field label -->
  <FieldLabel
    label="Email"
    required
  />

  <!-- Label with character counter -->
  <FieldLabel
    label="Description"
    :counter="text.length"
    :maxlength="maxLength"
  />

  <!-- Label with progress indicator -->
  <FieldLabel
    label="File Upload"
    :progress="45"
  />

  <!-- Label with slots -->
  <FieldLabel label="Search">
    <template #leading>
      <Icon name="search" />
    </template>
    <template #trailing>
      <Icon name="info" />
    </template>
  </FieldLabel>
</template>
`})})]})}function cr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(xe,{...i})}):xe(i)}function je(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для отображения меток полей ввода с поддержкой индикатора обязательности, счетчика символов и прогресс-индикатора."}),`
`,e.jsx(n.p,{children:"FieldLabel предоставляет единообразное отображение подписей к полям форм, автоматически интегрируется с FieldCounter для подсчета символов и Progress для индикации загрузки. Компонент поддерживает скелетон-загрузку, настраиваемые слоты и обеспечивает согласованное визуальное оформление элементов формы."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Отображение текстовой метки для полей ввода"}),`
`,e.jsx(n.li,{children:"Индикатор обязательности поля (required marker)"}),`
`,e.jsx(n.li,{children:"Интеграция со счетчиком символов FieldCounter"}),`
`,e.jsx(n.li,{children:"Встроенная поддержка прогресс-индикатора Progress"}),`
`,e.jsx(n.li,{children:"Поддержка скелетон-загрузки для состояния ожидания"}),`
`,e.jsx(n.li,{children:"Гибкая настройка через слоты (leading, trailing)"}),`
`,e.jsx(n.li,{children:"Единообразные отступы и стили в составе форм"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Подписи к текстовым полям и textarea"}),`
`,e.jsx(n.li,{children:"Формы с обязательными полями"}),`
`,e.jsx(n.li,{children:"Поля с ограничением количества символов"}),`
`,e.jsx(n.li,{children:"Формы с индикацией процесса загрузки файлов"}),`
`,e.jsx(n.li,{children:"Динамические формы со скелетон-загрузкой"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const text = ref('')
const maxLength = 100
<\/script>

<template>
  <!-- Простая метка -->
  <FieldLabel label="Имя пользователя" />

  <!-- Метка обязательного поля -->
  <FieldLabel
    label="Email"
    required
  />

  <!-- Метка со счетчиком символов -->
  <FieldLabel
    label="Описание"
    :counter="text.length"
    :maxlength="maxLength"
  />

  <!-- Метка с прогресс-индикатором -->
  <FieldLabel
    label="Загрузка файла"
    :progress="45"
  />

  <!-- Метка со слотами -->
  <FieldLabel label="Поиск">
    <template #leading>
      <Icon name="search" />
    </template>
    <template #trailing>
      <Icon name="info" />
    </template>
  </FieldLabel>
</template>
`})})]})}function or(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(je,{...i})}):je(i)}const dr={name:"FieldLabel",descriptions:{fieldLabel:{en:cr,ru:or}}};function pe(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for displaying helper and validation messages below form fields."}),`
`,e.jsx(n.p,{children:"FieldMessage centralizes management of text hints and error messages in forms. The component automatically determines display priority (validation errors take precedence over hints), supports forced display via forceShow, and integrates with input fields and character counters. It provides a flexible slot system for customization and works with both static and reactive values."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Two message types: helper and validation"}),`
`,e.jsx(n.li,{children:"Message priority — validation message overrides helper message"}),`
`,e.jsx(n.li,{children:"Smart visibility — automatic display logic based on provided values"}),`
`,e.jsx(n.li,{children:"Forced display via forceShow property"}),`
`,e.jsx(n.li,{children:"Flexible sources — support for static and reactive values"}),`
`,e.jsx(n.li,{children:"Integration with FieldCounter for complex forms"}),`
`,e.jsx(n.li,{children:"Customizable rendering through design system and slots"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Helper hints below input fields"}),`
`,e.jsx(n.li,{children:"Displaying validation errors in forms"}),`
`,e.jsx(n.li,{children:"Dynamic messages with reactive content"}),`
`,e.jsx(n.li,{children:"Complex forms with counters and validation"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'
import { D1FieldMessage } from '@dxtmisha/d1'

const validationError = ref('')

const validateInput = (value) => {
  if (value.length < 3) {
    validationError.value = 'Minimum 3 characters'
  } else {
    validationError.value = ''
  }
}
<\/script>

<template>
  <!-- Helper message -->
  <D1FieldMessage helper="Enter your name" />

  <!-- Validation message -->
  <D1FieldMessage
    helper="Minimum 3 characters"
    :validation="validationError"
  />

  <!-- Forced display -->
  <D1FieldMessage
    helper="Always visible message"
    forceShow
  />

  <!-- With custom content via slots -->
  <D1FieldMessage>
    <template #helper>
      <span class="custom-hint">💡 Hint</span>
    </template>
    <template #validation>
      <span class="custom-error">⚠️ Error</span>
    </template>
  </D1FieldMessage>
</template>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The component focuses on text messages and should be used together with input control elements."}),`
`]})]})}function ar(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(pe,{...i})}):pe(i)}function ue(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для отображения вспомогательных и валидационных сообщений под полями формы."}),`
`,e.jsx(n.p,{children:"FieldMessage централизует управление текстовыми подсказками и сообщениями об ошибках в формах. Компонент автоматически определяет приоритет отображения (ошибки валидации выше подсказок), поддерживает принудительное показ через forceShow и интегрируется с полями ввода и счетчиками символов. Предоставляет гибкую систему слотов для кастомизации и работает как со статическими, так и с реактивными значениями."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Два типа сообщений: вспомогательное (helper) и валидационное (validation)"}),`
`,e.jsx(n.li,{children:"Приоритет сообщений — валидационное сообщение перекрывает вспомогательное"}),`
`,e.jsx(n.li,{children:"Умная видимость — автоматическая логика отображения на основе переданных значений"}),`
`,e.jsx(n.li,{children:"Принудительное отображение через свойство forceShow"}),`
`,e.jsx(n.li,{children:"Гибкие источники — поддержка статических и реактивных значений"}),`
`,e.jsx(n.li,{children:"Интеграция с FieldCounter для комплексных форм"}),`
`,e.jsx(n.li,{children:"Настраиваемый рендеринг через систему дизайна и слоты"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Вспомогательные подсказки под полями ввода"}),`
`,e.jsx(n.li,{children:"Отображение ошибок валидации в формах"}),`
`,e.jsx(n.li,{children:"Динамические сообщения с реактивным контентом"}),`
`,e.jsx(n.li,{children:"Комплексные формы с счетчиками и валидацией"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'
import { D1FieldMessage } from '@dxtmisha/d1'

const validationError = ref('')

const validateInput = (value) => {
  if (value.length < 3) {
    validationError.value = 'Минимум 3 символа'
  } else {
    validationError.value = ''
  }
}
<\/script>

<template>
  <!-- Вспомогательное сообщение -->
  <D1FieldMessage helper="Введите ваше имя" />

  <!-- Сообщение валидации -->
  <D1FieldMessage
    helper="Минимум 3 символа"
    :validation="validationError"
  />

  <!-- Принудительное отображение -->
  <D1FieldMessage
    helper="Всегда видимое сообщение"
    forceShow
  />

  <!-- С кастомным контентом через слоты -->
  <D1FieldMessage>
    <template #helper>
      <span class="custom-hint">💡 Подсказка</span>
    </template>
    <template #validation>
      <span class="custom-error">⚠️ Ошибка</span>
    </template>
  </D1FieldMessage>
</template>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Компонент фокусируется на текстовых сообщениях и должен использоваться совместно с элементами управления вводом."}),`
`]})]})}function hr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ue,{...i})}):ue(i)}function me(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"helper",children:e.jsx(n.code,{children:"helper"})}),`
`,e.jsx(n.p,{children:"Slot for placing helper message. Displays only when validation message is absent."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldMessageSlot"})," — object with message data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"validation",children:e.jsx(n.code,{children:"validation"})}),`
`,e.jsx(n.p,{children:"Slot for placing validation message. Has priority over helper message."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldMessageSlot"})," — object with message data"]}),`
`]}),`
`,e.jsx(n.h2,{id:"fieldmessageslot",children:"FieldMessageSlot"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldMessageSlot"})," — object passed to FieldMessage component slots, containing data for displaying messages."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FieldMessageSlot = {
  /** Current displayed message */
  message?: string

  /** Helper message text */
  helperMessage?: string

  /** Validation message text */
  validationMessage?: string
}
`})}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"message"})})," — current message to display (validation or helper, depending on active slot)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"helperMessage"})})," — helper message text from component property"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"validationMessage"})})," — validation message text from component property"]}),`
`]}),`
`,e.jsx(n.h3,{id:"display-priority",children:"Display Priority"}),`
`,e.jsx(n.p,{children:"Component shows only one slot at a time:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"})," — if ",e.jsx(n.code,{children:"validationMessage"})," is provided or ",e.jsx(n.code,{children:"validation"})," slot is defined"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Helper"})," — if validation is absent, but ",e.jsx(n.code,{children:"helperMessage"})," is provided or ",e.jsx(n.code,{children:"helper"})," slot is defined"]}),`
`]})]})}function xr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(me,{...i})}):me(i)}function ge(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"helper",children:e.jsx(n.code,{children:"helper"})}),`
`,e.jsx(n.p,{children:"Слот для размещения вспомогательного сообщения. Отображается только когда отсутствует сообщение валидации."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldMessageSlot"})," — объект с данными сообщений"]}),`
`]}),`
`,e.jsx(n.h3,{id:"validation",children:e.jsx(n.code,{children:"validation"})}),`
`,e.jsx(n.p,{children:"Слот для размещения сообщения валидации. Имеет приоритет над вспомогательным сообщением."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: FieldMessageSlot"})," — объект с данными сообщений"]}),`
`]}),`
`,e.jsx(n.h2,{id:"fieldmessageslot",children:"FieldMessageSlot"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldMessageSlot"})," — объект, передаваемый в слоты компонента FieldMessage, содержащий данные для отображения сообщений."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FieldMessageSlot = {
  /** Текущее отображаемое сообщение */
  message?: string

  /** Текст вспомогательного сообщения */
  helperMessage?: string

  /** Текст сообщения валидации */
  validationMessage?: string
}
`})}),`
`,e.jsx(n.h3,{id:"свойства",children:"Свойства"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"message"})})," — текущее сообщение для отображения (validation или helper, в зависимости от активного слота)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"helperMessage"})})," — текст вспомогательного сообщения из свойства компонента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"validationMessage"})})," — текст сообщения валидации из свойства компонента"]}),`
`]}),`
`,e.jsx(n.h3,{id:"приоритет-отображения",children:"Приоритет отображения"}),`
`,e.jsx(n.p,{children:"Компонент показывает только один слот за раз:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"})," — если передано ",e.jsx(n.code,{children:"validationMessage"})," или определён слот ",e.jsx(n.code,{children:"validation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Helper"})," — если validation отсутствует, но передано ",e.jsx(n.code,{children:"helperMessage"})," или определён слот ",e.jsx(n.code,{children:"helper"})]}),`
`]})]})}function jr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ge,{...i})}):ge(i)}const pr={name:"FieldMessage",descriptions:{fieldMessage:{en:ar,ru:hr},slots:{en:xr,ru:jr}}};function fe(i){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"icon-state-management",children:"Icon State Management"}),`
`,e.jsx(n.p,{children:"A component for displaying icons with support for active state, rotation, loading, and skeleton integration."}),`
`,e.jsx(n.p,{children:"Icon provides a unified interface for working with icons in the design system, supporting both the main icon and an alternative for the active state. The component automatically manages switching between icons, handles loading events, and integrates with the skeleton system to display loading states."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display of main and active icons with smooth transitions"}),`
`,e.jsx(n.li,{children:"Icon rotation at a specified angle"}),`
`,e.jsx(n.li,{children:"Disabled and hide states for visibility control"}),`
`,e.jsx(n.li,{children:"Image loading events for icons"}),`
`,e.jsx(n.li,{children:"Integration with Skeleton for loading states"}),`
`,e.jsx(n.li,{children:"Support within other components (Button, Cell, Chip, Field)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Icons in buttons and navigation elements"}),`
`,e.jsx(n.li,{children:"Interactive icons with state changes"}),`
`,e.jsx(n.li,{children:"State indicators in forms and lists"}),`
`,e.jsx(n.li,{children:"Decorative interface elements with animation"}),`
`]}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon"})})," — The main icon displayed by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"iconActive"})})," — The icon that is displayed when the component is in an active state (",e.jsx(n.code,{children:"active"})," = ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"active"})})," — A boolean property that toggles the component's state between normal and active."]}),`
`]}),`
`,e.jsx(n.h3,{id:"description",children:"Description"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"icon"})," property is essential for displaying the icon."]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"iconActive"})," is not provided, there will be no visual change when the ",e.jsx(n.code,{children:"active"})," state changes."]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"active"})," is set to ",e.jsx(n.code,{children:"true"}),", the component will attempt to display the icon specified in ",e.jsx(n.code,{children:"iconActive"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"active"})," property can be used to create toggles, indicators, and other interactive elements."]}),`
`]}),`
`,e.jsx(n.h3,{id:"recommendations",children:"Recommendations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"iconActive"})," to provide visual feedback upon user interaction (e.g., on click or selection)."]}),`
`,e.jsxs(n.li,{children:["Ensure that ",e.jsx(n.code,{children:"icon"})," and ",e.jsx(n.code,{children:"iconActive"})," are visually distinct enough for the user to easily identify the state change."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The Icon component can be used both standalone and as part of other UI components through the ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"icon-trailing"}),", and ",e.jsx(n.code,{children:"icon-active"})," properties."]}),`
`]})]})}function ur(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(fe,{...i})}):fe(i)}function ve(i){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"icon",children:"Icon"}),`
`,e.jsx(n.p,{children:"Компонент для отображения иконок с поддержкой активного состояния, поворота, загрузки и интеграции со скелетоном."}),`
`,e.jsx(n.p,{children:"Icon предоставляет унифицированный интерфейс для работы с иконками в дизайн-системе, поддерживая как основную иконку, так и альтернативную для активного состояния. Компонент автоматически управляет переключением между иконками, обрабатывает события загрузки и интегрируется с системой скелетонов для отображения состояния загрузки."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Отображение основной и активной иконки с плавным переключением"}),`
`,e.jsx(n.li,{children:"Поворот иконки на заданный угол"}),`
`,e.jsx(n.li,{children:"Состояния disabled и hide для управления видимостью"}),`
`,e.jsx(n.li,{children:"События загрузки изображений иконок"}),`
`,e.jsx(n.li,{children:"Интеграция со Skeleton для состояний загрузки"}),`
`,e.jsx(n.li,{children:"Поддержка в составе других компонентов (Button, Cell, Chip, Field)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Иконки в кнопках и навигационных элементах"}),`
`,e.jsx(n.li,{children:"Интерактивные иконки с изменением состояния"}),`
`,e.jsx(n.li,{children:"Индикаторы состояния в формах и списках"}),`
`,e.jsx(n.li,{children:"Декоративные элементы интерфейса с анимацией"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Компонент Icon может использоваться как самостоятельно, так и в составе других UI-компонентов через свойства ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"icon-trailing"})," и ",e.jsx(n.code,{children:"icon-active"}),"."]}),`
`]})]})}function mr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ve,{...i})}):ve(i)}function be(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsxs(n.p,{children:["Computed state indicating whether the alternative representation is active (when both ",e.jsx(n.code,{children:"active"})," and ",e.jsx(n.code,{children:"iconActive"})," are set)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]})]})}function gr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(be,{...i})}):be(i)}function ye(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsxs(n.p,{children:["Вычисляемое состояние, указывающее активно ли альтернативное представление (когда одновременно установлены ",e.jsx(n.code,{children:"active"})," и ",e.jsx(n.code,{children:"iconActive"}),")."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]})]})}function fr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ye,{...i})}):ye(i)}const vr={name:"Icon",descriptions:{icon:{en:ur,ru:mr},"expose.isActive":{en:gr,ru:fr}}};function we(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Universal component for displaying images, icons, and PDF documents with advanced size, positioning, and adaptivity control."}),`
`,e.jsx(n.p,{children:"Image provides flexible API for working with various types of visual content: from simple icons to complex images with cropping and adaptive scaling. The component automatically detects the source type, supports coordinate positioning, adaptive resizing, and various fill modes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Support for multiple source types (icons, URLs, Files, PDFs)"}),`
`,e.jsx(n.li,{children:"Adaptive scaling with aspect ratio preservation"}),`
`,e.jsx(n.li,{children:"Coordinate-based cropping and precise positioning"}),`
`,e.jsx(n.li,{children:"Fill modes: auto, contain, cover"}),`
`,e.jsx(n.li,{children:"Automatic content type detection"}),`
`,e.jsx(n.li,{children:"CSS variable integration for flexible styling"}),`
`,e.jsx(n.li,{children:"Load events with complete type and data information"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying user avatars and uploaded images"}),`
`,e.jsx(n.li,{children:"Working with interface icons"}),`
`,e.jsx(n.li,{children:"PDF document previews"}),`
`,e.jsx(n.li,{children:"Adaptive image galleries"}),`
`,e.jsx(n.li,{children:"Background images with cropping"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'
import { Image } from '@dxtmisha/constructor'

const imageUrl = ref('https://example.com/image.jpg')

function handleLoad(data) {
  console.log('Image loaded:', data.type, data.image)
}
<\/script>

<template>
  <Image
    :value="imageUrl"
    size="cover"
    adaptive
    :coordinator="[0, 0, 100, 100]"
    @load="handleLoad"
  />
</template>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The component automatically manages content type and optimizes display based on the source."}),`
`]})]})}function br(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(we,{...i})}):we(i)}function Me(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Универсальный компонент для отображения изображений, иконок и PDF-документов с расширенными возможностями управления размером, позиционированием и адаптивностью."}),`
`,e.jsx(n.p,{children:"Image предоставляет гибкий API для работы с различными типами визуального контента: от простых иконок до сложных изображений с кадрированием и адаптивным масштабированием. Компонент автоматически определяет тип источника, поддерживает координатное позиционирование, адаптивное изменение размеров и различные режимы заполнения."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Поддержка множества типов источников (иконки, URL, File, PDF)"}),`
`,e.jsx(n.li,{children:"Адаптивное масштабирование с сохранением пропорций"}),`
`,e.jsx(n.li,{children:"Координатное кадрирование и точное позиционирование"}),`
`,e.jsx(n.li,{children:"Режимы заполнения: auto, contain, cover"}),`
`,e.jsx(n.li,{children:"Автоматическое определение типа контента"}),`
`,e.jsx(n.li,{children:"Работа с CSS-переменными для гибкой стилизации"}),`
`,e.jsx(n.li,{children:"События загрузки с полной информацией о типе и данных"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Отображение пользовательских аватаров и загруженных изображений"}),`
`,e.jsx(n.li,{children:"Работа с иконками в интерфейсе"}),`
`,e.jsx(n.li,{children:"Превью PDF-документов"}),`
`,e.jsx(n.li,{children:"Адаптивные галереи изображений"}),`
`,e.jsx(n.li,{children:"Фоновые изображения с кадрированием"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'
import { Image } from '@dxtmisha/constructor'

const imageUrl = ref('https://example.com/image.jpg')

function handleLoad(data) {
  console.log('Image loaded:', data.type, data.image)
}
<\/script>

<template>
  <Image
    :value="imageUrl"
    size="cover"
    adaptive
    :coordinator="[0, 0, 100, 100]"
    @load="handleLoad"
  />
</template>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Компонент автоматически управляет типом контента и оптимизирует отображение в зависимости от источника."}),`
`]})]})}function yr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Me,{...i})}):Me(i)}function Ce(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"main-value",children:"Main value"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"value"})," property defines the image content. This universal property supports multiple source types for maximum flexibility."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Supported types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon name"})," — built-in or custom icon from the design system"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Image URL"})," — direct link to file (PNG, JPG, SVG, GIF, WebP, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File object"})," — JavaScript File object obtained from ",e.jsx(n.code,{children:'<input type="file">'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PDF document"})," — direct link to PDF file with automatic display"]}),`
`]}),`
`,e.jsx(n.p,{children:"The component automatically detects the source type and selects the optimal display method. When passing a File object, the content is read and previewed. The property is reactive and supports dynamic updates."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Icon by name -->
<Image value="icon-user" />

<!-- Image by URL -->
<Image value="https://example.com/image.png" />

<!-- User file -->
<Image :value="fileFromInput" />
`})})]})}function wr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ce,{...i})}):Ce(i)}function ke(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"основное-значение",children:"Основное значение"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"value"})," определяет контент изображения. Это универсальное свойство, поддерживающее несколько типов источников для максимальной гибкости."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Поддерживаемые типы:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Имя иконки"})," — встроенная или пользовательская иконка из системы дизайна"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"URL изображения"})," — прямая ссылка на файл (PNG, JPG, SVG, GIF, WebP и др.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Объект File"})," — JavaScript-объект File, полученный из ",e.jsx(n.code,{children:'<input type="file">'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PDF-документ"})," — прямая ссылка на PDF-файл с автоматическим отображением"]}),`
`]}),`
`,e.jsx(n.p,{children:"Компонент автоматически определяет тип источника и выбирает оптимальный способ отображения. При передаче объекта File происходит чтение и предпросмотр содержимого. Свойство реактивно и поддерживает динамическое обновление."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Иконка по имени -->
<Image value="icon-user" />

<!-- Изображение по URL -->
<Image value="https://example.com/image.png" />

<!-- Файл от пользователя -->
<Image :value="fileFromInput" />
`})})]})}function Mr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ke,{...i})}):ke(i)}function De(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"image-display-control",children:"Image display control"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"coordinator"}),", ",e.jsx(n.code,{children:"x"}),", and ",e.jsx(n.code,{children:"y"})," properties allow you to precisely control image scaling, visible area, and positioning within the container."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," — scaling and fill mode of the image (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"contain"}),", ",e.jsx(n.code,{children:"cover"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coordinator"})," — array of coordinates for cropping the display area ",e.jsx(n.code,{children:"[left, top, right, bottom]"})," in percentages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x"})," — horizontal offset of the image (pixels, percentages)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"y"})," — vertical offset of the image (pixels, percentages)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together or individually. The ",e.jsx(n.code,{children:"size"})," value defines the scaling mode: ",e.jsx(n.code,{children:"auto"})," uses the original size, ",e.jsx(n.code,{children:"contain"})," fits the image completely, ",e.jsx(n.code,{children:"cover"})," fills the container with possible cropping. The ",e.jsx(n.code,{children:"coordinator"})," property sets the visible area by cropping the image at specified coordinates. The ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"})," parameters shift the image relative to the container for precise positioning."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Scaling mode -->
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
`})})]})}function Cr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(De,{...i})}):De(i)}function _e(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-отображением-изображения",children:"Управление отображением изображения"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"coordinator"}),", ",e.jsx(n.code,{children:"x"})," и ",e.jsx(n.code,{children:"y"})," позволяют детально управлять масштабированием, областью видимости и позиционированием изображения внутри контейнера."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," — режим масштабирования и заполнения изображения (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"contain"}),", ",e.jsx(n.code,{children:"cover"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coordinator"})," — массив координат для обрезки области отображения ",e.jsx(n.code,{children:"[left, top, right, bottom]"})," в процентах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x"})," — смещение изображения по горизонтали (пиксели, проценты)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"y"})," — смещение изображения по вертикали (пиксели, проценты)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно или по отдельности. Значение ",e.jsx(n.code,{children:"size"})," определяет режим масштабирования: ",e.jsx(n.code,{children:"auto"})," использует исходный размер, ",e.jsx(n.code,{children:"contain"})," вписывает изображение полностью, ",e.jsx(n.code,{children:"cover"})," заполняет контейнер с возможной обрезкой. Свойство ",e.jsx(n.code,{children:"coordinator"})," задаёт видимую область, обрезая изображение по указанным координатам. Параметры ",e.jsx(n.code,{children:"x"})," и ",e.jsx(n.code,{children:"y"})," смещают изображение относительно контейнера для точного позиционирования."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Режим масштабирования -->
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
`})})]})}function kr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(_e,{...i})}):_e(i)}function Fe(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"adaptive-scaling",children:"Adaptive scaling"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"adaptive"}),", ",e.jsx(n.code,{children:"adaptiveGroup"}),", ",e.jsx(n.code,{children:"adaptiveAlways"}),", ",e.jsx(n.code,{children:"objectWidth"}),", and ",e.jsx(n.code,{children:"objectHeight"})," properties control automatic image scaling to ensure visual consistency of physical object sizes across different images."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptive"})," — enables adaptive scaling mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptiveGroup"})," — group name for scale synchronization (default ",e.jsx(n.code,{children:"'basic'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"objectWidth"})," — physical width of the object in the image in millimeters"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"objectHeight"})," — physical height of the object in the image in millimeters"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptiveAlways"})," — perform calculations even for invisible elements"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together to ensure proportional display of images with objects of different physical sizes. When ",e.jsx(n.code,{children:"adaptive"})," is activated, the component starts tracking element dimensions and comparing them with other images in the same group, automatically selecting the optimal scale for each element."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"objectWidth"})," or ",e.jsx(n.code,{children:"objectHeight"})," properties specify the real physical dimensions of the object in the image in millimeters. These values are necessary for calculating the scaling coefficient — the component uses them to determine how much to enlarge or reduce the image so that objects in different images appear the same size. It is sufficient to specify only one property — either width or height."]}),`
`,e.jsxs(n.p,{children:["The component automatically determines which axis (horizontal or vertical) to scale on, based on available dimensions and image proportions. If ",e.jsx(n.code,{children:"objectWidth"})," is specified, scaling will occur horizontally, if ",e.jsx(n.code,{children:"objectHeight"})," — vertically. This allows flexible work with images of different orientations."]}),`
`,e.jsxs(n.p,{children:["Elements with the same ",e.jsx(n.code,{children:"adaptiveGroup"})," value scale synchronously, ensuring consistent visual object sizes across all images in the group. This is especially useful when displaying product galleries or comparison tables where maintaining visual size correspondence is important."]}),`
`,e.jsxs(n.p,{children:["For performance optimization, scaling calculations are performed only for visible elements within the viewport plus a small margin. If an element is outside the visible area, calculations are paused until the element appears on screen. The ",e.jsx(n.code,{children:"adaptiveAlways"})," property disables this optimization and forces the component to constantly recalculate the scale regardless of element visibility."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Dr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Fe,{...i})}):Fe(i)}function Se(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"адаптивное-масштабирование",children:"Адаптивное масштабирование"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"adaptive"}),", ",e.jsx(n.code,{children:"adaptiveGroup"}),", ",e.jsx(n.code,{children:"adaptiveAlways"}),", ",e.jsx(n.code,{children:"objectWidth"})," и ",e.jsx(n.code,{children:"objectHeight"})," управляют автоматическим масштабированием изображений для обеспечения визуального соответствия физических размеров объектов на разных изображениях."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptive"})," — включает режим адаптивного масштабирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptiveGroup"})," — название группы для синхронизации масштаба (по умолчанию ",e.jsx(n.code,{children:"'basic'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"objectWidth"})," — физическая ширина объекта на изображении в миллиметрах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"objectHeight"})," — физическая высота объекта на изображении в миллиметрах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"adaptiveAlways"})," — выполнять расчёты даже для невидимых элементов"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно для обеспечения пропорционального отображения изображений с объектами разных физических размеров. При активации ",e.jsx(n.code,{children:"adaptive"})," компонент начинает отслеживать размеры элемента и сравнивать их с другими изображениями в той же группе, автоматически подбирая оптимальный масштаб для каждого элемента."]}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"objectWidth"})," или ",e.jsx(n.code,{children:"objectHeight"})," задают реальные физические размеры объекта на изображении в миллиметрах. Эти значения необходимы для расчёта коэффициента масштабирования — компонент использует их для определения, во сколько раз нужно увеличить или уменьшить изображение, чтобы объекты на разных изображениях выглядели одинакового размера. Достаточно указать только одно из свойств — либо ширину, либо высоту."]}),`
`,e.jsxs(n.p,{children:["Компонент автоматически определяет, по какой оси (горизонтальной или вертикальной) производить масштабирование, основываясь на доступных размерах и пропорциях изображения. Если указан ",e.jsx(n.code,{children:"objectWidth"}),", масштабирование будет происходить по горизонтали, если ",e.jsx(n.code,{children:"objectHeight"})," — по вертикали. Это позволяет гибко работать с изображениями разных ориентаций."]}),`
`,e.jsxs(n.p,{children:["Элементы с одинаковым значением ",e.jsx(n.code,{children:"adaptiveGroup"})," масштабируются синхронно, обеспечивая одинаковый визуальный размер объектов на всех изображениях группы. Это особенно полезно при отображении галерей продуктов или сравнительных таблиц, где важно сохранить визуальное соответствие размеров."]}),`
`,e.jsxs(n.p,{children:["Для оптимизации производительности расчёты масштабирования выполняются только для видимых элементов в пределах области просмотра (viewport) плюс небольшой запас. Если элемент находится за пределами видимой области, расчёты приостанавливаются до момента, когда элемент появится на экране. Свойство ",e.jsx(n.code,{children:"adaptiveAlways"})," отключает эту оптимизацию и заставляет компонент постоянно пересчитывать масштаб независимо от видимости элемента."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function _r(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Se,{...i})}):Se(i)}function Le(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"load",children:e.jsx(n.code,{children:"load"})}),`
`,e.jsx(n.p,{children:"Event fires after the image is loaded."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: ImageEventData"})," — object with image data"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ImageEventData structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ImageTypeItem"})," — image type (",e.jsx(n.code,{children:"'image'"}),", ",e.jsx(n.code,{children:"'icon'"}),", ",e.jsx(n.code,{children:"'pdf'"}),", ",e.jsx(n.code,{children:"'file'"}),", ",e.jsx(n.code,{children:"'flag'"}),", ",e.jsx(n.code,{children:"'color'"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: ImageEventItem"})," — image data (",e.jsx(n.code,{children:"ImageItem"})," object, URL string, or ",e.jsx(n.code,{children:"undefined"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ImageItem structure (when image is an object):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"width: number"})," — image width"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height: number"})," — image height"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: HTMLImageElement"})," — image DOM element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"src: string"})," — image source (URL)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Fr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Le,{...i})}):Le(i)}function Xe(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"load",children:e.jsx(n.code,{children:"load"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает после загрузки изображения."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: ImageEventData"})," — объект с данными изображения"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура ImageEventData:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ImageTypeItem"})," — тип изображения (",e.jsx(n.code,{children:"'image'"}),", ",e.jsx(n.code,{children:"'icon'"}),", ",e.jsx(n.code,{children:"'pdf'"}),", ",e.jsx(n.code,{children:"'file'"}),", ",e.jsx(n.code,{children:"'flag'"}),", ",e.jsx(n.code,{children:"'color'"})," и др.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: ImageEventItem"})," — данные изображения (объект ",e.jsx(n.code,{children:"ImageItem"}),", строка URL или ",e.jsx(n.code,{children:"undefined"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура ImageItem (если image - объект):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"width: number"})," — ширина изображения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height: number"})," — высота изображения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: HTMLImageElement"})," — DOM элемент изображения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"src: string"})," — источник изображения (URL)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Sr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Xe,{...i})}):Xe(i)}function $e(i){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"type",children:e.jsx(n.code,{children:"type"})}),`
`,e.jsx(n.p,{children:"Type of the loaded image."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<ImageTypeItem>"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}
`})}),`
`,e.jsx(n.h3,{id:"data",children:e.jsx(n.code,{children:"data"})}),`
`,e.jsx(n.p,{children:"Information about the loaded image, including its dimensions and source."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<ImageEventItem>"})]})]})}function Lr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx($e,{...i})}):$e(i)}function Ie(i){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"type",children:e.jsx(n.code,{children:"type"})}),`
`,e.jsx(n.p,{children:"Тип загруженного изображения."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<ImageTypeItem>"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}
`})}),`
`,e.jsx(n.h3,{id:"data",children:e.jsx(n.code,{children:"data"})}),`
`,e.jsx(n.p,{children:"Информация о загруженном изображении, включая его размеры и источник."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<ImageEventItem>"})]})]})}function Xr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ie,{...i})}):Ie(i)}const $r={name:"Image",descriptions:{image:{en:br,ru:yr},value:{en:wr,ru:Mr},size:{en:Cr,ru:kr},adaptive:{en:Dr,ru:_r},"event.load":{en:Fr,ru:Sr},expose:{en:Lr,ru:Xr}}};function Te(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"A component for creating interactive lists with support for hierarchical data, keyboard navigation, and search functionality."}),`
`,e.jsx(n.p,{children:"List manages the display of structured data with navigation capabilities, item selection, and interaction through keyboard and mouse. The component supports various item types (regular items, groups, menus, dividers, subtitles, HTML content), automatically handles complex hierarchical structures, and provides intuitive navigation. The built-in search system works in real-time with match highlighting across the entire data hierarchy."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Various item types (item, group, menu, line, subtitle, html)"}),`
`,e.jsx(n.li,{children:"Hierarchical structure with nested groups and menus"}),`
`,e.jsx(n.li,{children:"Full keyboard navigation (↑/↓, Enter, →, ←)"}),`
`,e.jsx(n.li,{children:"Built-in real-time search with match highlighting"}),`
`,e.jsx(n.li,{children:"Item selection control via v-model:selected"}),`
`,e.jsx(n.li,{children:"Focus control via v-model:focus"}),`
`,e.jsx(n.li,{children:"Lightweight mode for large lists (lite)"}),`
`,e.jsx(n.li,{children:"Display axis configuration (x/y) and dividers"}),`
`,e.jsx(n.li,{children:"Click and menu close events"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation menus and option lists"}),`
`,e.jsx(n.li,{children:"Dropdown lists with hierarchical structure"}),`
`,e.jsx(n.li,{children:"Product and category catalogs"}),`
`,e.jsx(n.li,{children:"Settings lists with grouping"}),`
`,e.jsx(n.li,{children:"Context menus with submenus"}),`
`,e.jsx(n.li,{children:"File and folder lists"}),`
`,e.jsx(n.li,{children:"Filters with multiple selection"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Ir(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Te,{...i})}):Te(i)}function Be(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания интерактивных списков с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска."}),`
`,e.jsx(n.p,{children:"List управляет отображением структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь. Компонент поддерживает различные типы элементов (обычные элементы, группы, меню, разделители, подзаголовки, HTML-контент), автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию. Встроенная система поиска работает в реальном времени с выделением совпадений по всей иерархии данных."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Различные типы элементов (item, group, menu, line, subtitle, html)"}),`
`,e.jsx(n.li,{children:"Иерархическая структура с вложенными группами и меню"}),`
`,e.jsx(n.li,{children:"Полная клавиатурная навигация (↑/↓, Enter, →, ←)"}),`
`,e.jsx(n.li,{children:"Встроенный поиск в реальном времени с подсветкой совпадений"}),`
`,e.jsx(n.li,{children:"Управление выбором элементов через v-model:selected"}),`
`,e.jsx(n.li,{children:"Управление фокусом через v-model:focus"}),`
`,e.jsx(n.li,{children:"Облегченный режим для больших списков (lite)"}),`
`,e.jsx(n.li,{children:"Настройка осей отображения (x/y) и разделителей"}),`
`,e.jsx(n.li,{children:"События клика и закрытия меню"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Навигационные меню и списки опций"}),`
`,e.jsx(n.li,{children:"Выпадающие списки с иерархической структурой"}),`
`,e.jsx(n.li,{children:"Каталоги товаров и категорий"}),`
`,e.jsx(n.li,{children:"Списки настроек с группировкой"}),`
`,e.jsx(n.li,{children:"Контекстные меню с подменю"}),`
`,e.jsx(n.li,{children:"Списки файлов и папок"}),`
`,e.jsx(n.li,{children:"Фильтры с множественным выбором"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Tr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Be,{...i})}):Be(i)}function Ne(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"managing-list-performance",children:"Managing list performance"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"lite"})," and ",e.jsx(n.code,{children:"liteThreshold"})," properties work together to optimize rendering of large lists. They enable a lightweight display mode that reduces visual complexity and improves performance when the threshold number of items is exceeded."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lite"})," — enables lightweight list display mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"liteThreshold"})," — item count threshold for activating simplified mode, defaults to configuration value"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Display mode is determined automatically: when ",e.jsx(n.code,{children:"lite=false"}),", the list always renders in full mode. When ",e.jsx(n.code,{children:"lite=true"}),", the component compares the total item count with ",e.jsx(n.code,{children:"liteThreshold"}),". If the item count does not exceed the threshold, full mode with extended visualization is used. When the threshold is exceeded, lightweight mode is activated to reduce rendering load. Use ",e.jsx(n.code,{children:"lite"})," for working with dynamic data of variable size."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Automatic mode switching -->
<List :list="items" :lite="true" :liteThreshold="50" />

<!-- Always full mode -->
<List :list="items" :lite="false" />

<!-- Lightweight mode for large catalogs -->
<List :list="products" :lite="true" :liteThreshold="100" />

<!-- Custom threshold for mobile devices -->
<List :list="data" :lite="true" :liteThreshold="30" />
`})})]})}function Br(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ne,{...i})}):Ne(i)}function Pe(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-производительностью-списка",children:"Управление производительностью списка"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"lite"})," и ",e.jsx(n.code,{children:"liteThreshold"})," работают в связке для оптимизации рендеринга больших списков. Они включают облегченный режим отображения, который снижает визуальную сложность и ускоряет производительность при превышении порогового количества элементов."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lite"})," — включает облегченный режим отображения списка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"liteThreshold"})," — порог количества элементов для активации упрощенного режима, по умолчанию зависит от конфигурации"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Режим отображения определяется автоматически: при ",e.jsx(n.code,{children:"lite=false"})," список всегда рендерится в полном режиме. При ",e.jsx(n.code,{children:"lite=true"})," компонент сравнивает общее количество элементов с ",e.jsx(n.code,{children:"liteThreshold"}),". Если количество элементов не превышает порог, используется полный режим с расширенной визуализацией. При превышении порога включается облегченный режим для снижения нагрузки на рендеринг. Используйте ",e.jsx(n.code,{children:"lite"})," для работы с динамическими данными переменного размера."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Автоматическое переключение режима -->
<List :list="items" :lite="true" :liteThreshold="50" />

<!-- Всегда полный режим -->
<List :list="items" :lite="false" />

<!-- Облегченный режим для больших каталогов -->
<List :list="products" :lite="true" :liteThreshold="100" />

<!-- Пользовательский порог для мобильных устройств -->
<List :list="data" :lite="true" :liteThreshold="30" />
`})})]})}function Nr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Pe,{...i})}):Pe(i)}function Oe(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"close",children:e.jsx(n.code,{children:"close"})}),`
`,e.jsx(n.p,{children:"Event fires when attempting to close the list after navigation has reached the root level."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When it fires:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing the ",e.jsx(n.strong,{children:"Escape"})," key at the root level of the list"]}),`
`,e.jsxs(n.li,{children:["Pressing the ",e.jsx(n.strong,{children:"←"})," (left arrow) key when there are no open submenus/groups"]}),`
`,e.jsx(n.li,{children:"Attempting to navigate back when there are no nested items"}),`
`]})]})}function Pr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Oe,{...i})}):Oe(i)}function Ee(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"close",children:e.jsx(n.code,{children:"close"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при попытке закрыть список, когда навигация достигла корневого уровня."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Когда срабатывает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Нажатие клавиши ",e.jsx(n.strong,{children:"Escape"})," на корневом уровне списка"]}),`
`,e.jsxs(n.li,{children:["Нажатие клавиши ",e.jsx(n.strong,{children:"←"})," (стрелка влево), когда нет открытых подменю/групп"]}),`
`,e.jsx(n.li,{children:"Попытка навигации назад при отсутствии вложенных элементов"}),`
`]})]})}function Or(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ee,{...i})}):Ee(i)}function Ae(i){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"html",children:e.jsx(n.code,{children:"html"})}),`
`,e.jsxs(n.p,{children:["Dynamic slot for displaying arbitrary HTML content or Vue components in list items with type ",e.jsx(n.code,{children:"html"}),"."]}),`
`,e.jsxs(n.p,{children:["List provides a flexible mechanism for rendering custom content through named slots. When a list item has ",e.jsx(n.code,{children:"type: 'html'"}),", the component searches for a slot with a name matching the ",e.jsx(n.code,{children:"value"})," field of that item. If a slot is found, its content is used for rendering the item. Otherwise, the component displays HTML from the ",e.jsx(n.code,{children:"label"})," field via ",e.jsx(n.code,{children:"innerHTML"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dynamic slot binding by ",e.jsx(n.code,{children:"value"})," field"]}),`
`,e.jsx(n.li,{children:"Support for Vue components and interactive elements in slots"}),`
`,e.jsxs(n.li,{children:["Fallback rendering via ",e.jsx(n.code,{children:"innerHTML"})," when slot is absent"]}),`
`,e.jsx(n.li,{children:"Integration into hierarchical list structure"}),`
`,e.jsx(n.li,{children:"Automatic class and style management"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Advertisement and promo blocks within lists"}),`
`,e.jsx(n.li,{children:"Custom cards with interactive content"}),`
`,e.jsx(n.li,{children:"Embedded forms and controls"}),`
`,e.jsx(n.li,{children:"Dynamically loaded components"}),`
`,e.jsx(n.li,{children:"Special dividers with additional logic"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How it works:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["List item must have ",e.jsx(n.code,{children:"type: 'html'"})]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"value"})," field is used as the slot name (lookup key)"]}),`
`,e.jsx(n.li,{children:"If a slot with that name exists — its content is rendered"}),`
`,e.jsxs(n.li,{children:["If no slot exists — HTML from the ",e.jsx(n.code,{children:"label"})," field is displayed"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const listData = ref([
  { label: 'Regular item', value: 'item1' },
  {
    type: 'html',
    value: 'promoBlock',
    label: '<strong>Fallback HTML (if slot is not defined)</strong>'
  },
  { label: 'Another item', value: 'item2' },
  {
    type: 'html',
    value: 'customCard',
    label: '<div>Fallback content</div>'
  }
])

const handlePromoClick = () => {
  console.log('Promo block clicked')
}
<\/script>

<template>
  <List :list="listData">
    <!-- Slot for promo block -->
    <template #promoBlock>
      <div class="custom-promo" @click="handlePromoClick">
        <h3>Special Offer</h3>
        <p>Custom Vue component with full capabilities</p>
        <button>Learn More</button>
      </div>
    </template>

    <!-- Slot for custom card -->
    <template #customCard>
      <div class="card">
        <img src="/image.jpg" alt="Image">
        <span>Interactive content</span>
      </div>
    </template>
  </List>
</template>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Important notes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The slot does not receive props automatically; use external state or composables to pass data"}),`
`,e.jsxs(n.li,{children:["For interactive content, prefer slots over ",e.jsx(n.code,{children:"innerHTML"})]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"label"})," with HTML only for simple and trusted markup"]}),`
`,e.jsxs(n.li,{children:["Slot name must exactly match the ",e.jsx(n.code,{children:"value"})," field"]}),`
`,e.jsxs(n.li,{children:["HTML from ",e.jsx(n.code,{children:"label"})," is inserted via ",e.jsx(n.code,{children:"innerHTML"})," — ensure the content is safe"]}),`
`]})]})}function Er(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ae,{...i})}):Ae(i)}function Re(i){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"html",children:e.jsx(n.code,{children:"html"})}),`
`,e.jsxs(n.p,{children:["Динамический слот для отображения произвольного HTML-контента или Vue-компонентов в элементах списка с типом ",e.jsx(n.code,{children:"html"}),"."]}),`
`,e.jsxs(n.p,{children:["List предоставляет гибкий механизм рендеринга пользовательского контента через именованные слоты. Когда элемент списка имеет ",e.jsx(n.code,{children:"type: 'html'"}),", компонент ищет слот с именем, соответствующим значению поля ",e.jsx(n.code,{children:"value"})," этого элемента. Если слот найден, его содержимое используется для рендеринга элемента. В противном случае компонент отобразит HTML из поля ",e.jsx(n.code,{children:"label"})," через ",e.jsx(n.code,{children:"innerHTML"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Динамическое связывание слотов по значению поля ",e.jsx(n.code,{children:"value"})]}),`
`,e.jsx(n.li,{children:"Поддержка Vue-компонентов и интерактивных элементов в слотах"}),`
`,e.jsxs(n.li,{children:["Резервный рендеринг через ",e.jsx(n.code,{children:"innerHTML"})," при отсутствии слота"]}),`
`,e.jsx(n.li,{children:"Интеграция в иерархическую структуру списка"}),`
`,e.jsx(n.li,{children:"Автоматическое управление классами и стилями"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Рекламные и промо-блоки внутри списков"}),`
`,e.jsx(n.li,{children:"Кастомные карточки с интерактивным контентом"}),`
`,e.jsx(n.li,{children:"Встроенные формы и элементы управления"}),`
`,e.jsx(n.li,{children:"Динамически загружаемые компоненты"}),`
`,e.jsx(n.li,{children:"Специальные разделители с дополнительной логикой"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Принцип работы:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Элемент списка должен иметь ",e.jsx(n.code,{children:"type: 'html'"})]}),`
`,e.jsxs(n.li,{children:["Поле ",e.jsx(n.code,{children:"value"})," используется как имя слота (ключ для поиска)"]}),`
`,e.jsx(n.li,{children:"Если слот с таким именем существует — рендерится его содержимое"}),`
`,e.jsxs(n.li,{children:["Если слота нет — отображается HTML из поля ",e.jsx(n.code,{children:"label"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const listData = ref([
  { label: 'Обычный элемент', value: 'item1' },
  {
    type: 'html',
    value: 'promoBlock',
    label: '<strong>Запасной HTML (если слот не определён)</strong>'
  },
  { label: 'Другой элемент', value: 'item2' },
  {
    type: 'html',
    value: 'customCard',
    label: '<div>Резервный контент</div>'
  }
])

const handlePromoClick = () => {
  console.log('Промо-блок нажат')
}
<\/script>

<template>
  <List :list="listData">
    <!-- Слот для промо-блока -->
    <template #promoBlock>
      <div class="custom-promo" @click="handlePromoClick">
        <h3>Специальное предложение</h3>
        <p>Пользовательский Vue-компонент со всеми возможностями</p>
        <button>Подробнее</button>
      </div>
    </template>

    <!-- Слот для кастомной карточки -->
    <template #customCard>
      <div class="card">
        <img src="/image.jpg" alt="Изображение">
        <span>Интерактивный контент</span>
      </div>
    </template>
  </List>
</template>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Важные замечания:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Слот не получает props автоматически; используйте внешнее состояние или композабли для передачи данных"}),`
`,e.jsxs(n.li,{children:["Для интерактивного контента предпочитайте слоты, а не ",e.jsx(n.code,{children:"innerHTML"})]}),`
`,e.jsxs(n.li,{children:["Используйте ",e.jsx(n.code,{children:"label"})," с HTML только для простой и доверенной разметки"]}),`
`,e.jsxs(n.li,{children:["Имя слота должно точно совпадать со значением поля ",e.jsx(n.code,{children:"value"})]}),`
`,e.jsxs(n.li,{children:["HTML из ",e.jsx(n.code,{children:"label"})," вставляется через ",e.jsx(n.code,{children:"innerHTML"})," — убедитесь, что контент безопасен"]}),`
`]})]})}function Ar(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Re,{...i})}):Re(i)}const Rr={name:"List",descriptions:{list:{en:Ir,ru:Tr},lite:{en:Br,ru:Nr},"event.close":{en:Pr,ru:Or},"slot.html":{en:Er,ru:Ar}}};function We(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for grouping and organizing list items with collapsible structure."}),`
`,e.jsx(n.p,{children:"ListGroup is an auxiliary component for List, managing hierarchical content organization with expand/collapse functionality. The component integrates with MotionTransform for smooth animations, supports unlimited nesting levels, and provides convenient navigation through structured data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hierarchical content organization with unlimited nesting"}),`
`,e.jsx(n.li,{children:"Expand/collapse animations via MotionTransform"}),`
`,e.jsx(n.li,{children:"State management via props or internal state"}),`
`,e.jsx(n.li,{children:"Automatic group content visibility control"}),`
`,e.jsx(n.li,{children:"Integration with List component ecosystem"}),`
`,e.jsx(n.li,{children:"Customization support via head and list slots"}),`
`,e.jsx(n.li,{children:"Group state change events"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Grouping list items by categories"}),`
`,e.jsx(n.li,{children:"Creating tree-like navigation structures"}),`
`,e.jsx(n.li,{children:"Organizing settings and options by sections"}),`
`,e.jsx(n.li,{children:"Multi-level menus and catalogs"}),`
`,e.jsx(n.li,{children:"FAQ sections with expandable answers"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Wr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(We,{...i})}):We(i)}function Ve(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для группировки и организации элементов списка со сворачиваемой структурой."}),`
`,e.jsx(n.p,{children:"ListGroup является вспомогательным компонентом для List, управляющим иерархической организацией контента с возможностью разворачивания/сворачивания групп. Компонент интегрируется с MotionTransform для плавных анимаций, поддерживает неограниченную вложенность групп и обеспечивает удобную навигацию по структурированным данным."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Иерархическая организация контента с неограниченной вложенностью"}),`
`,e.jsx(n.li,{children:"Анимации разворачивания/сворачивания групп через MotionTransform"}),`
`,e.jsx(n.li,{children:"Управление состоянием открытия через props или внутренний state"}),`
`,e.jsx(n.li,{children:"Автоматическое управление видимостью содержимого группы"}),`
`,e.jsx(n.li,{children:"Интеграция с экосистемой компонентов List"}),`
`,e.jsx(n.li,{children:"Поддержка кастомизации через слоты head и list"}),`
`,e.jsx(n.li,{children:"События изменения состояния группы"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Группировка элементов списка по категориям"}),`
`,e.jsx(n.li,{children:"Создание древовидных структур навигации"}),`
`,e.jsx(n.li,{children:"Организация настроек и опций по разделам"}),`
`,e.jsx(n.li,{children:"Многоуровневые меню и каталоги"}),`
`,e.jsx(n.li,{children:"FAQ секции с раскрывающимися ответами"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Vr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ve,{...i})}):Ve(i)}function He(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"head",children:e.jsx(n.code,{children:"head"})}),`
`,e.jsx(n.p,{children:"Slot for placing the header content with toggle functionality."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — current open/close state"]}),`
`]}),`
`,e.jsx(n.h3,{id:"list",children:e.jsx(n.code,{children:"list"})}),`
`,e.jsx(n.p,{children:"Slot for placing the list content."})]})}function Hr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(He,{...i})}):He(i)}function qe(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"head",children:e.jsx(n.code,{children:"head"})}),`
`,e.jsx(n.p,{children:"Слот для размещения содержимого заголовка с функциональностью переключения."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — текущее состояние открытия/закрытия"]}),`
`]}),`
`,e.jsx(n.h3,{id:"list",children:e.jsx(n.code,{children:"list"})}),`
`,e.jsx(n.p,{children:"Слот для размещения содержимого списка."})]})}function qr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(qe,{...i})}):qe(i)}const Yr={name:"ListGroup",descriptions:{listGroup:{en:Wr,ru:Vr},slots:{en:Hr,ru:qr}}};function Ye(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for creating interactive list items with flexible content structure and multiple display areas."}),`
`,e.jsx(n.p,{children:"ListItem provides uniform presentation of items in lists, menus, and navigation structures. The component supports labels, descriptions, icons, status badges, interactive states (focus, selection, disabled), loading with progress and skeleton, and ripple effect for enhanced feedback."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple content areas (label, description, prefix, suffix, caption)"}),`
`,e.jsx(n.li,{children:"Icon support with flexible positioning and alignment"}),`
`,e.jsx(n.li,{children:"Badge integration for status indicators"}),`
`,e.jsx(n.li,{children:"Interactive states (focus, selected, disabled, readonly)"}),`
`,e.jsx(n.li,{children:"Loading states with progress and skeleton"}),`
`,e.jsx(n.li,{children:"Ripple effect for visual feedback"}),`
`,e.jsx(n.li,{children:"Flexible tag variants (button, link, div, span)"}),`
`,e.jsx(n.li,{children:"Built-in accessibility support"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"List items and navigation menus"}),`
`,e.jsx(n.li,{children:"Settings and configuration options"}),`
`,e.jsx(n.li,{children:"Lists with multiple selection"}),`
`,e.jsx(n.li,{children:"Contact lists and catalogs"}),`
`,e.jsx(n.li,{children:"Mobile interfaces and action lists"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function zr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ye,{...i})}):Ye(i)}function ze(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания интерактивных элементов списков с гибкой структурой контента и множественными областями отображения."}),`
`,e.jsx(n.p,{children:"ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах. Компонент поддерживает метки, описания, иконки, значки состояния, интерактивные состояния (фокус, выбор, отключение), загрузку с прогрессом и скелетоном, а также эффект пульсации для улучшенной обратной связи."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Множественные области контента (метка, описание, префикс, суффикс, заголовок)"}),`
`,e.jsx(n.li,{children:"Поддержка иконок с гибким позиционированием и выравниванием"}),`
`,e.jsx(n.li,{children:"Интеграция значков для индикаторов статуса"}),`
`,e.jsx(n.li,{children:"Интерактивные состояния (фокус, выбранный, отключенный, только чтение)"}),`
`,e.jsx(n.li,{children:"Состояния загрузки с прогрессом и скелетоном"}),`
`,e.jsx(n.li,{children:"Эффект пульсации для визуальной обратной связи"}),`
`,e.jsx(n.li,{children:"Гибкие варианты тегов (button, link, div, span)"}),`
`,e.jsx(n.li,{children:"Встроенная поддержка доступности"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Элементы списков и меню навигации"}),`
`,e.jsx(n.li,{children:"Пункты настроек и конфигурации"}),`
`,e.jsx(n.li,{children:"Списки с множественным выбором"}),`
`,e.jsx(n.li,{children:"Контактные списки и каталоги"}),`
`,e.jsx(n.li,{children:"Мобильные интерфейсы и action lists"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Ur(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ze,{...i})}):ze(i)}function Ue(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"element-fill-color",children:"Element fill color"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"fill"})," property defines the background color of the list item element, allowing precise control over the component's visual styling."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Hex colors: ",e.jsx(n.code,{children:"#FF0000"}),", ",e.jsx(n.code,{children:"#ffffff"}),", ",e.jsx(n.code,{children:"#3498db"})]}),`
`,e.jsxs(n.li,{children:["RGB: ",e.jsx(n.code,{children:"rgb(255, 0, 0)"}),", ",e.jsx(n.code,{children:"rgb(52, 152, 219)"})]}),`
`,e.jsxs(n.li,{children:["RGBA: ",e.jsx(n.code,{children:"rgba(255, 0, 0, 0.5)"}),", ",e.jsx(n.code,{children:"rgba(0, 0, 0, 0.1)"})]}),`
`,e.jsxs(n.li,{children:["Named colors: ",e.jsx(n.code,{children:"red"}),", ",e.jsx(n.code,{children:"blue"}),", ",e.jsx(n.code,{children:"green"}),", ",e.jsx(n.code,{children:"transparent"})]}),`
`,e.jsxs(n.li,{children:["HSL/HSLA: ",e.jsx(n.code,{children:"hsl(0, 100%, 50%)"}),", ",e.jsx(n.code,{children:"hsla(210, 70%, 53%, 0.8)"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Accepts any standard CSS color format. The property provides a flexible way to customize the visual presentation of list items, allowing you to create color schemes and highlight important elements. The value is applied as background-color to the component's root element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Red background -->
<ListItem fill="#FF0000" text="Item with red background" />

<!-- Semi-transparent blue -->
<ListItem fill="rgba(52, 152, 219, 0.3)" text="Semi-transparent item" />

<!-- Named color -->
<ListItem fill="lightblue" text="Light blue item" />
`})})]})}function Gr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ue,{...i})}):Ue(i)}function Ge(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"цвет-заливки-элемента",children:"Цвет заливки элемента"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"fill"})," определяет цвет фона элемента списка, позволяя точно контролировать визуальное оформление компонента."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Hex-цвета: ",e.jsx(n.code,{children:"#FF0000"}),", ",e.jsx(n.code,{children:"#ffffff"}),", ",e.jsx(n.code,{children:"#3498db"})]}),`
`,e.jsxs(n.li,{children:["RGB: ",e.jsx(n.code,{children:"rgb(255, 0, 0)"}),", ",e.jsx(n.code,{children:"rgb(52, 152, 219)"})]}),`
`,e.jsxs(n.li,{children:["RGBA: ",e.jsx(n.code,{children:"rgba(255, 0, 0, 0.5)"}),", ",e.jsx(n.code,{children:"rgba(0, 0, 0, 0.1)"})]}),`
`,e.jsxs(n.li,{children:["Именованные цвета: ",e.jsx(n.code,{children:"red"}),", ",e.jsx(n.code,{children:"blue"}),", ",e.jsx(n.code,{children:"green"}),", ",e.jsx(n.code,{children:"transparent"})]}),`
`,e.jsxs(n.li,{children:["HSL/HSLA: ",e.jsx(n.code,{children:"hsl(0, 100%, 50%)"}),", ",e.jsx(n.code,{children:"hsla(210, 70%, 53%, 0.8)"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Принимает любой стандартный CSS-формат цвета. Свойство предоставляет гибкий способ настройки визуального представления элементов списка, позволяя создавать цветовые схемы и выделять важные элементы. Значение применяется как background-color к корневому элементу компонента."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Красный фон -->
<ListItem fill="#FF0000" text="Элемент с красным фоном" />

<!-- Полупрозрачный синий -->
<ListItem fill="rgba(52, 152, 219, 0.3)" text="Полупрозрачный элемент" />

<!-- Именованный цвет -->
<ListItem fill="lightblue" text="Светло-голубой элемент" />
`})})]})}function Kr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ge,{...i})}):Ge(i)}function Ke(i){const n={code:"code",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"body",children:e.jsx(n.code,{children:"body"})}),`
`,e.jsx(n.p,{children:"Slot for placing additional content at the bottom of the list item."}),`
`,e.jsx(n.h3,{id:"trailing",children:e.jsx(n.code,{children:"trailing"})}),`
`,e.jsx(n.p,{children:"Slot for placing controls or indicators at the end of the list item."})]})}function Jr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ke,{...i})}):Ke(i)}function Je(i){const n={code:"code",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"body",children:e.jsx(n.code,{children:"body"})}),`
`,e.jsx(n.p,{children:"Слот для размещения дополнительного контента в нижней части элемента списка."}),`
`,e.jsx(n.h3,{id:"trailing",children:e.jsx(n.code,{children:"trailing"})}),`
`,e.jsx(n.p,{children:"Слот для размещения элементов управления или индикаторов в конце элемента списка."})]})}function Qr(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Je,{...i})}):Je(i)}const Zr={name:"ListItem",descriptions:{basic:{en:zr,ru:Ur},fill:{en:Gr,ru:Kr},slots:{en:Jr,ru:Qr}}};function Qe(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for creating nested menus and organizing navigation elements with expandable structure."}),`
`,e.jsx(n.p,{children:"ListMenu is an auxiliary component for List, managing hierarchical menu structure with open/close submenu functionality. The component integrates with Window for positioning dropdown submenus, supports multiple nesting levels, and provides smooth navigation through tree-like data structures."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hierarchical menu organization with unlimited nesting"}),`
`,e.jsx(n.li,{children:"Open/close submenu state management"}),`
`,e.jsx(n.li,{children:"Integration with Window for dropdown menu positioning"}),`
`,e.jsx(n.li,{children:"Support for horizontal and vertical positioning axes"}),`
`,e.jsx(n.li,{children:"Automatic click and navigation handling"}),`
`,e.jsx(n.li,{children:"Adaptive submenu behavior"}),`
`,e.jsx(n.li,{children:"Menu item open/close events"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation menus with subsections"}),`
`,e.jsx(n.li,{children:"Multi-level catalogs and categories"}),`
`,e.jsx(n.li,{children:"Tree-like data structures"}),`
`,e.jsx(n.li,{children:"Context menus with submenus"}),`
`,e.jsx(n.li,{children:"Navigation panels with grouping"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function nc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Qe,{...i})}):Qe(i)}function Ze(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой."}),`
`,e.jsx(n.p,{children:"ListMenu является вспомогательным компонентом для List, управляющим иерархической структурой меню с возможностью открытия/закрытия подменю. Компонент интегрируется с Window для позиционирования выпадающих подменю, поддерживает множественные уровни вложенности и обеспечивает плавную навигацию по древовидной структуре данных."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Иерархическая организация меню с неограниченной вложенностью"}),`
`,e.jsx(n.li,{children:"Управление состоянием открытия/закрытия подменю"}),`
`,e.jsx(n.li,{children:"Интеграция с Window для позиционирования выпадающих меню"}),`
`,e.jsx(n.li,{children:"Поддержка горизонтальной и вертикальной осей позиционирования"}),`
`,e.jsx(n.li,{children:"Автоматическая обработка кликов и навигации"}),`
`,e.jsx(n.li,{children:"Адаптивное поведение подменю"}),`
`,e.jsx(n.li,{children:"События открытия/закрытия элементов меню"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Навигационные меню с подразделами"}),`
`,e.jsx(n.li,{children:"Многоуровневые каталоги и категории"}),`
`,e.jsx(n.li,{children:"Древовидные структуры данных"}),`
`,e.jsx(n.li,{children:"Контекстные меню с подменю"}),`
`,e.jsx(n.li,{children:"Панели навигации с группировкой"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function ec(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ze,{...i})}):Ze(i)}const ic={name:"ListMenu",descriptions:{listMenu:{en:nc,ru:ec}}};function ni(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"A component for creating input fields with automatic data formatting according to a specified pattern in real-time."}),`
`,e.jsxs(n.p,{children:["Mask provides structured input with support for various formats (phones, bank cards, dates, currencies, numbers). The component automatically adds separators and literal characters during typing, restricts input to only allowed characters, supports multiple patterns with automatic selection of the most suitable one, works together with the validation system through ",e.jsx(n.code,{children:"pattern"})," and ",e.jsx(n.code,{children:"check"}),", and provides built-in mask types for common data formats."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Automatic formatting with separator addition"}),`
`,e.jsx(n.li,{children:"Flexible templates with support for single and multiple masks"}),`
`,e.jsx(n.li,{children:"Built-in types: text, number, number-format, currency, date, time"}),`
`,e.jsxs(n.li,{children:["Customizable special characters via ",e.jsx(n.code,{children:"special"})," property"]}),`
`,e.jsx(n.li,{children:"Input error prevention with character restriction"}),`
`,e.jsxs(n.li,{children:["Integration with validation system through ",e.jsx(n.code,{children:"pattern"})," and ",e.jsx(n.code,{children:"check"})]}),`
`,e.jsx(n.li,{children:"Alignment support (left/right) and direction (ltr/rtl)"}),`
`,e.jsx(n.li,{children:"Rubber groups with dynamic length"}),`
`,e.jsx(n.li,{children:"Visibility control for unfilled characters"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Phone number input fields"}),`
`,e.jsx(n.li,{children:"Bank card numbers and CVV codes"}),`
`,e.jsx(n.li,{children:"Dates and times in various formats"}),`
`,e.jsx(n.li,{children:"Postal codes and identifiers"}),`
`,e.jsx(n.li,{children:"Currency amounts with formatting"}),`
`,e.jsx(n.li,{children:"Numeric values with separators"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function sc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ni,{...i})}):ni(i)}function ei(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания полей ввода с автоматическим форматированием данных по заданному шаблону в реальном времени."}),`
`,e.jsxs(n.p,{children:["Mask обеспечивает структурированный ввод с поддержкой различных форматов (телефоны, банковские карты, даты, валюты, числа). Компонент автоматически добавляет разделители и литеральные символы во время набора, ограничивает ввод только допустимыми символами, поддерживает множественные шаблоны с автоматическим выбором наиболее подходящего, работает совместно с системой валидации через ",e.jsx(n.code,{children:"pattern"})," и ",e.jsx(n.code,{children:"check"}),", и предоставляет встроенные типы масок для распространенных форматов данных."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Автоматическое форматирование с добавлением разделителей"}),`
`,e.jsx(n.li,{children:"Гибкие шаблоны с поддержкой одиночных и множественных масок"}),`
`,e.jsx(n.li,{children:"Встроенные типы: text, number, number-format, currency, date, time"}),`
`,e.jsxs(n.li,{children:["Настраиваемые специальные символы через свойство ",e.jsx(n.code,{children:"special"})]}),`
`,e.jsx(n.li,{children:"Предотвращение ошибок ввода с ограничением символов"}),`
`,e.jsxs(n.li,{children:["Интеграция с системой валидации через ",e.jsx(n.code,{children:"pattern"})," и ",e.jsx(n.code,{children:"check"})]}),`
`,e.jsx(n.li,{children:"Поддержка выравнивания (left/right) и направления (ltr/rtl)"}),`
`,e.jsx(n.li,{children:"Резиновые группы с динамической длиной"}),`
`,e.jsx(n.li,{children:"Управление видимостью незаполненных символов"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Поля ввода телефонных номеров"}),`
`,e.jsx(n.li,{children:"Номера банковских карт и CVV-кодов"}),`
`,e.jsx(n.li,{children:"Даты и время в различных форматах"}),`
`,e.jsx(n.li,{children:"Почтовые индексы и коды"}),`
`,e.jsx(n.li,{children:"Валютные суммы с форматированием"}),`
`,e.jsx(n.li,{children:"Числовые значения с разделителями"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function tc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ei,{...i})}):ei(i)}function ii(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"date-and-time-types",children:"Date and time types"}),`
`,e.jsx(n.p,{children:"Date types in Mask provide automatic formatting and validation for date and time input with localization support."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"datetime"}),", ",e.jsx(n.code,{children:"full"})," — full date and time formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"hour-minute"}),", ",e.jsx(n.code,{children:"hour"}),", ",e.jsx(n.code,{children:"minute"}),", ",e.jsx(n.code,{children:"second"})," — time components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"year"}),", ",e.jsx(n.code,{children:"year-month"}),", ",e.jsx(n.code,{children:"month"}),", ",e.jsx(n.code,{children:"day"}),", ",e.jsx(n.code,{children:"day-month"})," — date components"]}),`
`]}),`
`,e.jsxs(n.p,{children:["All date types automatically create masks according to regional settings, ignoring the ",e.jsx(n.code,{children:"mask"})," property. Mask structure is determined by locale via ",e.jsx(n.code,{children:"language"})," (DD.MM.YYYY for Russian, MM/DD/YYYY for English)."]}),`
`,e.jsx(n.p,{children:"Date validation occurs at input level — numeric values correctness is checked, number of days in month (including leap years), value ranges (months 01-12, days 01-31, hours 00-23). Time works in 24-hour format."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Full date -->
<Mask type="date" language="en-US" />

<!-- Date and time -->
<Mask type="datetime" language="en-US" />

<!-- Time only -->
<Mask type="time" />
`})}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.h4,{id:"date",children:"date"}),`
`,e.jsx(n.p,{children:"Full date in locale format (day, month, year). Automatically generates structure according to language settings: DD.MM.YYYY for Russian, MM/DD/YYYY for English. Separator is determined by locale (dot, slash, hyphen)."}),`
`,e.jsx(n.h4,{id:"datetime",children:"datetime"}),`
`,e.jsx(n.p,{children:"Date and time in locale format. Combines date and time masks, separating them with space. Date format is determined by language, time format is usually HH:MM. Validates both date and time."}),`
`,e.jsx(n.h4,{id:"full",children:"full"}),`
`,e.jsxs(n.p,{children:["Full date and time with seconds. Extended version of ",e.jsx(n.code,{children:"datetime"})," with seconds added to time format (HH:MM:SS)."]}),`
`,e.jsx(n.h4,{id:"time",children:"time"}),`
`,e.jsx(n.p,{children:"Time in HH:MM:SS format. Generates mask for time input with range validation (0-23 for hours, 0-59 for minutes and seconds)."}),`
`,e.jsx(n.h4,{id:"hour-minute",children:"hour-minute"}),`
`,e.jsx(n.p,{children:"Hours and minutes in HH:MM format. Short version of time without seconds. Validates ranges (0-23 for hours, 0-59 for minutes)."}),`
`,e.jsx(n.h4,{id:"hour",children:"hour"}),`
`,e.jsx(n.p,{children:"Hours only (00-23). Mask for hours input with range validation from 0 to 23."}),`
`,e.jsx(n.h4,{id:"minute",children:"minute"}),`
`,e.jsx(n.p,{children:"Minutes only (00-59). Mask for minutes input with range validation from 0 to 59."}),`
`,e.jsx(n.h4,{id:"second",children:"second"}),`
`,e.jsx(n.p,{children:"Seconds only (00-59). Mask for seconds input with range validation from 0 to 59."}),`
`,e.jsx(n.h4,{id:"year",children:"year"}),`
`,e.jsx(n.p,{children:"Year (usually 4 digits). Creates simple numeric mask for year. Format may vary depending on locale (YYYY, YY)."}),`
`,e.jsx(n.h4,{id:"year-month",children:"year-month"}),`
`,e.jsx(n.p,{children:"Year and month. Combines year and month masks. Format depends on locale (YYYY/MM, YYYY-MM)."}),`
`,e.jsx(n.h4,{id:"month",children:"month"}),`
`,e.jsx(n.p,{children:"Month (01-12). Mask for month input with range validation from 01 to 12."}),`
`,e.jsx(n.h4,{id:"day",children:"day"}),`
`,e.jsx(n.p,{children:"Day of month (01-31). Mask for day input with range validation from 01 to 31."}),`
`,e.jsx(n.h4,{id:"day-month",children:"day-month"}),`
`,e.jsx(n.p,{children:"Day and month. Combines day and month masks without year. Useful for birthdays, holidays."}),`
`,e.jsx(n.h3,{id:"localization",children:"Localization"}),`
`,e.jsxs(n.p,{children:["Formats automatically adapt to locale via the ",e.jsx(n.code,{children:"language"})," property:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Russian (ru):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date format: DD.MM.YYYY"}),`
`,e.jsx(n.li,{children:"Separator: dot"}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"31.12.2024"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"English (en-US):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date format: MM/DD/YYYY"}),`
`,e.jsx(n.li,{children:"Separator: slash"}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"12/31/2024"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"German (de):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date format: DD.MM.YYYY"}),`
`,e.jsx(n.li,{children:"Separator: dot"}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"31.12.2024"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Mask type="date" language="ru" />
<!-- Result: 31.12.2024 -->

<Mask type="date" language="en-US" />
<!-- Result: 12/31/2024 -->

<Mask type="datetime" language="en-US" />
<!-- Result: 12/31/2024 2:30 PM -->

<Mask type="time" />
<!-- Result: 14:30:45 -->
`})})]})}function lc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ii,{...i})}):ii(i)}function si(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"типы-дат-и-времени",children:"Типы дат и времени"}),`
`,e.jsx(n.p,{children:"Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Доступные типы:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"datetime"}),", ",e.jsx(n.code,{children:"full"})," — полные форматы даты и времени"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"hour-minute"}),", ",e.jsx(n.code,{children:"hour"}),", ",e.jsx(n.code,{children:"minute"}),", ",e.jsx(n.code,{children:"second"})," — компоненты времени"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"year"}),", ",e.jsx(n.code,{children:"year-month"}),", ",e.jsx(n.code,{children:"month"}),", ",e.jsx(n.code,{children:"day"}),", ",e.jsx(n.code,{children:"day-month"})," — компоненты даты"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Все типы дат автоматически создают маски согласно региональным настройкам, игнорируя свойство ",e.jsx(n.code,{children:"mask"}),". Структура маски определяется локалью через ",e.jsx(n.code,{children:"language"})," (DD.MM.YYYY для русского, MM/DD/YYYY для английского)."]}),`
`,e.jsx(n.p,{children:"Валидация даты происходит на уровне ввода — проверяется корректность числовых значений, количество дней в месяце (включая високосные годы), диапазоны значений (месяцы 01-12, дни 01-31, часы 00-23). Время работает в 24-часовом формате."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Полная дата -->
<Mask type="date" language="ru" />

<!-- Дата и время -->
<Mask type="datetime" language="ru" />

<!-- Только время -->
<Mask type="time" />
`})}),`
`,e.jsx(n.h3,{id:"типы",children:"Типы"}),`
`,e.jsx(n.h4,{id:"date",children:"date"}),`
`,e.jsx(n.p,{children:"Полная дата в формате локали (день, месяц, год). Автоматически генерирует структуру согласно языковым настройкам: DD.MM.YYYY для русского, MM/DD/YYYY для английского. Разделитель определяется локалью (точка, слэш, дефис)."}),`
`,e.jsx(n.h4,{id:"datetime",children:"datetime"}),`
`,e.jsx(n.p,{children:"Дата и время в формате локали. Комбинирует маску даты и времени, разделяя их пробелом. Формат даты определяется языком, формат времени обычно HH:MM. Валидирует как дату, так и время."}),`
`,e.jsx(n.h4,{id:"full",children:"full"}),`
`,e.jsxs(n.p,{children:["Полная дата и время с секундами. Расширенная версия ",e.jsx(n.code,{children:"datetime"})," с добавлением секунд в формат времени (HH:MM:SS)."]}),`
`,e.jsx(n.h4,{id:"time",children:"time"}),`
`,e.jsx(n.p,{children:"Время в формате HH:MM:SS. Генерирует маску для ввода времени с валидацией диапазонов (0-23 для часов, 0-59 для минут и секунд)."}),`
`,e.jsx(n.h4,{id:"hour-minute",children:"hour-minute"}),`
`,e.jsx(n.p,{children:"Часы и минуты в формате HH:MM. Короткая версия времени без секунд. Валидирует диапазоны (0-23 для часов, 0-59 для минут)."}),`
`,e.jsx(n.h4,{id:"hour",children:"hour"}),`
`,e.jsx(n.p,{children:"Только часы (00-23). Маска для ввода часов с валидацией диапазона от 0 до 23."}),`
`,e.jsx(n.h4,{id:"minute",children:"minute"}),`
`,e.jsx(n.p,{children:"Только минуты (00-59). Маска для ввода минут с валидацией диапазона от 0 до 59."}),`
`,e.jsx(n.h4,{id:"second",children:"second"}),`
`,e.jsx(n.p,{children:"Только секунды (00-59). Маска для ввода секунд с валидацией диапазона от 0 до 59."}),`
`,e.jsx(n.h4,{id:"year",children:"year"}),`
`,e.jsx(n.p,{children:"Год (обычно 4 цифры). Создаёт простую числовую маску для года. Формат может варьироваться в зависимости от локали (YYYY, YY)."}),`
`,e.jsx(n.h4,{id:"year-month",children:"year-month"}),`
`,e.jsx(n.p,{children:"Год и месяц. Комбинирует маску года и месяца. Формат зависит от локали (YYYY/MM, YYYY-MM)."}),`
`,e.jsx(n.h4,{id:"month",children:"month"}),`
`,e.jsx(n.p,{children:"Месяц (01-12). Маска для ввода месяца с валидацией диапазона от 01 до 12."}),`
`,e.jsx(n.h4,{id:"day",children:"day"}),`
`,e.jsx(n.p,{children:"День месяца (01-31). Маска для ввода дня с валидацией диапазона от 01 до 31."}),`
`,e.jsx(n.h4,{id:"day-month",children:"day-month"}),`
`,e.jsx(n.p,{children:"День и месяц. Комбинирует маску дня и месяца без года. Полезно для дней рождения, праздников."}),`
`,e.jsx(n.h3,{id:"локализация",children:"Локализация"}),`
`,e.jsxs(n.p,{children:["Форматы автоматически адаптируются к локали через свойство ",e.jsx(n.code,{children:"language"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Русский (ru):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Формат даты: DD.MM.YYYY"}),`
`,e.jsx(n.li,{children:"Разделитель: точка"}),`
`,e.jsxs(n.li,{children:["Пример: ",e.jsx(n.code,{children:"31.12.2024"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Английский (en-US):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Формат даты: MM/DD/YYYY"}),`
`,e.jsx(n.li,{children:"Разделитель: слэш"}),`
`,e.jsxs(n.li,{children:["Пример: ",e.jsx(n.code,{children:"12/31/2024"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Немецкий (de):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Формат даты: DD.MM.YYYY"}),`
`,e.jsx(n.li,{children:"Разделитель: точка"}),`
`,e.jsxs(n.li,{children:["Пример: ",e.jsx(n.code,{children:"31.12.2024"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Mask type="date" language="ru" />
<!-- Результат: 31.12.2024 -->

<Mask type="date" language="en-US" />
<!-- Результат: 12/31/2024 -->

<Mask type="datetime" language="ru" />
<!-- Результат: 31.12.2024 14:30 -->

<Mask type="time" />
<!-- Результат: 14:30:45 -->
`})})]})}function rc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(si,{...i})}):si(i)}function ti(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsx(n.p,{children:"Final formatted mask value."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.h3,{id:"valuebasic",children:e.jsx(n.code,{children:"valueBasic"})}),`
`,e.jsx(n.p,{children:"Basic mask value without formatting (only entered characters)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Sets new value and reinitializes the mask."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — new value to set"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if the value was changed"]})]})}function cc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ti,{...i})}):ti(i)}function li(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsx(n.p,{children:"Итоговое отформатированное значение маски."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.h3,{id:"valuebasic",children:e.jsx(n.code,{children:"valueBasic"})}),`
`,e.jsx(n.p,{children:"Базовое значение маски без форматирования (только введённые символы)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Устанавливает новое значение и переинициализирует маску."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — новое значение для установки"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если значение было изменено"]})]})}function oc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(li,{...i})}):li(i)}function ri(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"preserving-groups-on-deletion",children:"Preserving groups on deletion"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"groupSave"})," property controls behavior when deleting characters in a mask with multiple types of special characters."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — preserves group separation on deletion (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — allows characters from different groups to mix on deletion"]}),`
`]}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"groupSave: true"})," and different groups ahead, the character is not physically deleted but marked with a deletion marker, preserving the mask structure. With ",e.jsx(n.code,{children:"false"}),', characters are deleted completely, which can lead to "collapsing" of groups and loss of structure. Only works for fixed (non-rubber) groups of special characters.']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Preserve group structure (default) -->
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
`})})]})}function dc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ri,{...i})}):ri(i)}function ci(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"сохранение-групп-при-удалении",children:"Сохранение групп при удалении"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"groupSave"})," управляет поведением при удалении символов в маске с несколькими типами специальных символов."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — сохраняет разделение групп при удалении (по умолчанию)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," — позволяет символам из разных групп смешиваться при удалении"]}),`
`]}),`
`,e.jsxs(n.p,{children:["При ",e.jsx(n.code,{children:"groupSave: true"})," и наличии разных групп впереди символ не удаляется физически, а помечается маркером удаления, сохраняя структуру маски. При ",e.jsx(n.code,{children:"false"}),' символы удаляются полностью, что может привести к "схлопыванию" групп и потере структуры. Работает только для фиксированных (не резиновых) групп специальных символов.']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Сохранение структуры групп (по умолчанию) -->
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
`})})]})}function ac(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ci,{...i})}):ci(i)}function oi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"mask-template",children:"Mask template"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"mask"})," property defines a template for structured data input with automatic real-time formatting."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string"})," — single mask for fixed format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string[]"})," — array of masks to support multiple formats with automatic selection"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The template uses two types of characters: special characters (default ",e.jsx(n.code,{children:"*"}),") denote positions for user input, while literal characters are inserted automatically and cannot be changed. The component automatically adds separators during typing and restricts input to only allowed characters in corresponding positions. When using an array of masks, the system automatically selects the most suitable template based on entered data. Works together with the validation system through ",e.jsx(n.code,{children:"pattern"})," and ",e.jsx(n.code,{children:"check"})," properties. For built-in types (",e.jsx(n.code,{children:"currency"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"date"}),"), masks are generated automatically based on regional settings."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Russian phone -->
<Mask mask="+7 *** *** ** **" />

<!-- Bank card -->
<Mask mask="**** **** **** ****" />

<!-- Multiple formats -->
<Mask :mask="['+7 *** *** ** **', '8 *** *** ** **']" />
`})})]})}function hc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(oi,{...i})}):oi(i)}function di(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"шаблон-маски",children:"Шаблон маски"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"mask"})," определяет шаблон для структурированного ввода данных с автоматическим форматированием в реальном времени."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string"})," — одиночная маска для фиксированного формата"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string[]"})," — массив масок для поддержки множественных форматов с автоматическим выбором"]}),`
`]}),`
`,e.jsxs(n.p,{children:["В шаблоне используются два типа символов: специальные символы (по умолчанию ",e.jsx(n.code,{children:"*"}),") обозначают позиции для пользовательского ввода, а литеральные символы вставляются автоматически и не могут быть изменены. Компонент автоматически добавляет разделители во время набора и ограничивает ввод только допустимыми символами в соответствующих позициях. При использовании массива масок система автоматически выбирает наиболее подходящий шаблон на основе введённых данных. Работает совместно с системой валидации через свойства ",e.jsx(n.code,{children:"pattern"})," и ",e.jsx(n.code,{children:"check"}),". Для встроенных типов (",e.jsx(n.code,{children:"currency"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"date"}),") маски генерируются автоматически на основе региональных настроек."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Российский телефон -->
<Mask mask="+7 *** *** ** **" />

<!-- Банковская карта -->
<Mask mask="**** **** **** ****" />

<!-- Множественные форматы -->
<Mask :mask="['+7 *** *** ** **', '8 *** *** ** **']" />
`})})]})}function xc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(di,{...i})}):di(i)}function ai(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"input-character-validation",children:"Input character validation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"match"})," property defines a regular expression for checking the validity of entered characters."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RegExp"})," — regular expression (default ",e.jsx(n.code,{children:"/[0-9]/"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string"})," — string converted to regular expression"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Checks each character during input. Characters that don't match the expression are ignored. Local ",e.jsx(n.code,{children:"match"})," in group settings (",e.jsx(n.code,{children:"special[group].match"}),") takes priority over global. Differs from ",e.jsx(n.code,{children:"pattern"})," in that ",e.jsx(n.code,{children:"match"})," is a simple regular expression check, while ",e.jsx(n.code,{children:"pattern"})," can be a function with access to mask state."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Digits only (default) -->
<Mask mask="***-***" />

<!-- HEX characters -->
<Mask mask="***-***" :match="/[A-F0-9]/i" />

<!-- Different rules for groups -->
<Mask
  mask="***-###"
  match="\\\\d"
  :special="{
    '*': {},
    '#': { match: /[A-Z]/ }
  }"
/>
`})})]})}function jc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ai,{...i})}):ai(i)}function hi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"валидация-вводимых-символов",children:"Валидация вводимых символов"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"match"})," определяет регулярное выражение для проверки допустимости вводимых символов."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RegExp"})," — регулярное выражение (по умолчанию ",e.jsx(n.code,{children:"/[0-9]/"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string"})," — строка, преобразуется в регулярное выражение"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Проверяет каждый символ при вводе. Символы, не соответствующие выражению, игнорируются. Локальный ",e.jsx(n.code,{children:"match"})," в настройках группы (",e.jsx(n.code,{children:"special[группа].match"}),") имеет приоритет над глобальным. Отличается от ",e.jsx(n.code,{children:"pattern"})," тем, что ",e.jsx(n.code,{children:"match"})," — простая проверка регулярным выражением, а ",e.jsx(n.code,{children:"pattern"})," может быть функцией с доступом к состоянию маски."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Только цифры (по умолчанию) -->
<Mask mask="***-***" />

<!-- HEX-символы -->
<Mask mask="***-***" :match="/[A-F0-9]/i" />

<!-- Разные правила для групп -->
<Mask
  mask="***-###"
  match="\\\\d"
  :special="{
    '*': {},
    '#': { match: /[A-Z]/ }
  }"
/>
`})})]})}function pc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(hi,{...i})}):hi(i)}function xi(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"numeric-mask-types",children:"Numeric mask types"}),`
`,e.jsx(n.p,{children:"Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number"})," — simple numeric mask with rubber structure"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number-format"})," — formatted numbers with thousand separators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currency"})," — currency mask with automatic currency symbol"]}),`
`]}),`
`,e.jsxs(n.p,{children:["All numeric types automatically create rubber masks with variable length, ignoring the ",e.jsx(n.code,{children:"mask"})," property. Numeric character validation occurs at input level, negative values and constraints via ",e.jsx(n.code,{children:"min"}),"/",e.jsx(n.code,{children:"max"})," are supported."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"number-format"})," and ",e.jsx(n.code,{children:"currency"})," types apply localized thousand separators according to ",e.jsx(n.code,{children:"language"})," (space for Russian, comma for English). Decimal places are configured via ",e.jsx(n.code,{children:"fraction"})," — number for exact digit count, ",e.jsx(n.code,{children:"true"})," for auto-detection, ",e.jsx(n.code,{children:"false"})," for integers."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Simple number -->
<Mask type="number" />

<!-- Formatted number -->
<Mask type="number-format" language="en-US" :fraction="2" />

<!-- Currency -->
<Mask type="currency" currency="USD" language="en-US" />
`})}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.h4,{id:"number",children:"number"}),`
`,e.jsx(n.p,{children:"Simple numeric mask for entering integers and decimals without formatting. Creates a rubber group with variable length, supports negative values. Decimal separator is determined by locale (dot for English, comma for Russian)."}),`
`,e.jsx(n.h4,{id:"number-format",children:"number-format"}),`
`,e.jsxs(n.p,{children:["Numeric mask with automatic thousand separators to improve readability of large numbers. Works similarly to ",e.jsx(n.code,{children:"number"}),", but adds thousand and million separators according to regional settings. Suitable for quantitative indicators and statistics."]}),`
`,e.jsx(n.h4,{id:"currency",children:"currency"}),`
`,e.jsxs(n.p,{children:["Currency mask with currency symbol and formatting according to regional standards. Automatically adds currency symbol (₽, $, €) and thousand separators. Symbol can be displayed before or after the number depending on locale. The ",e.jsx(n.code,{children:"currencyHide"})," property allows hiding the currency symbol while keeping the formatting."]}),`
`,e.jsx(n.h3,{id:"property-fraction",children:"Property fraction"}),`
`,e.jsx(n.p,{children:"Defines the number of digits after the decimal separator."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number"})," — exact number of digits (e.g., ",e.jsx(n.code,{children:"2"})," for two digits)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — automatic detection based on user input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," or ",e.jsx(n.code,{children:"0"})," — no decimal places (integers only)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Two decimal places -->
<Mask type="number" :fraction="2" />

<!-- Auto-detection -->
<Mask type="number-format" :fraction="true" />

<!-- Integers only -->
<Mask type="currency" currency="USD" :fraction="false" />
`})}),`
`,e.jsx(n.h3,{id:"localization",children:"Localization"}),`
`,e.jsxs(n.p,{children:["Formats automatically adapt to locale via the ",e.jsx(n.code,{children:"language"})," property:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Russian (ru):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Thousand separator: space"}),`
`,e.jsx(n.li,{children:"Decimal separator: comma"}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"1 234 567,89"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"English (en-US):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Thousand separator: comma"}),`
`,e.jsx(n.li,{children:"Decimal separator: dot"}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"1,234,567.89"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"German (de):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Thousand separator: dot"}),`
`,e.jsx(n.li,{children:"Decimal separator: comma"}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"1.234.567,89"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Mask type="number-format" language="ru" :fraction="2" />
<!-- Result: 1 234,56 -->

<Mask type="number-format" language="en-US" :fraction="2" />
<!-- Result: 1,234.56 -->

<Mask type="currency" currency="EUR" language="de" />
<!-- Result: 1.234,56 € -->

<!-- Currency without symbol -->
<Mask type="currency" currency="USD" :currencyHide="true" />
<!-- Result: 1,234.56 -->
`})})]})}function uc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(xi,{...i})}):xi(i)}function ji(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"числовые-типы-масок",children:"Числовые типы масок"}),`
`,e.jsx(n.p,{children:"Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Доступные типы:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number"})," — простая числовая маска с резиновой структурой"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number-format"})," — форматированные числа с разделителями разрядов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currency"})," — валютная маска с автоматическим символом валюты"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Все числовые типы автоматически создают резиновые маски переменной длины, игнорируя свойство ",e.jsx(n.code,{children:"mask"}),". Валидация числовых символов происходит на уровне ввода, поддерживаются отрицательные значения и ограничения через ",e.jsx(n.code,{children:"min"}),"/",e.jsx(n.code,{children:"max"}),"."]}),`
`,e.jsxs(n.p,{children:["Типы ",e.jsx(n.code,{children:"number-format"})," и ",e.jsx(n.code,{children:"currency"})," применяют локализованные разделители разрядов согласно ",e.jsx(n.code,{children:"language"})," (пробел для русского, запятая для английского). Дробная часть настраивается через ",e.jsx(n.code,{children:"fraction"})," — число для точного количества знаков, ",e.jsx(n.code,{children:"true"})," для автоопределения, ",e.jsx(n.code,{children:"false"})," для целых чисел."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Простое число -->
<Mask type="number" />

<!-- Форматированное число -->
<Mask type="number-format" language="ru" :fraction="2" />

<!-- Валюта -->
<Mask type="currency" currency="RUB" language="ru" />
`})}),`
`,e.jsx(n.h3,{id:"типы",children:"Типы"}),`
`,e.jsx(n.h4,{id:"number",children:"number"}),`
`,e.jsx(n.p,{children:"Простая числовая маска для ввода целых и дробных чисел без форматирования. Создаёт резиновую группу переменной длины, поддерживает отрицательные значения. Разделитель дробной части определяется локалью (точка для английского, запятая для русского)."}),`
`,e.jsx(n.h4,{id:"number-format",children:"number-format"}),`
`,e.jsxs(n.p,{children:["Числовая маска с автоматическими разделителями разрядов для улучшения читаемости больших чисел. Работает аналогично ",e.jsx(n.code,{children:"number"}),", но добавляет разделители тысяч, миллионов согласно региональным настройкам. Подходит для количественных показателей, статистики."]}),`
`,e.jsx(n.h4,{id:"currency",children:"currency"}),`
`,e.jsxs(n.p,{children:["Валютная маска с символом валюты и форматированием согласно региональным стандартам. Автоматически добавляет символ валюты (₽, $, €) и разделители разрядов. Символ может отображаться до или после числа в зависимости от локали. Свойство ",e.jsx(n.code,{children:"currencyHide"})," позволяет скрыть символ валюты, оставив только форматирование."]}),`
`,e.jsx(n.h3,{id:"свойство-fraction",children:"Свойство fraction"}),`
`,e.jsx(n.p,{children:"Определяет количество знаков после десятичного разделителя."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number"})," — точное количество знаков (например, ",e.jsx(n.code,{children:"2"})," для двух знаков)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"})," — автоматическое определение по вводу пользователя"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," или ",e.jsx(n.code,{children:"0"})," — без дробной части (только целые числа)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Два знака после запятой -->
<Mask type="number" :fraction="2" />

<!-- Автоопределение -->
<Mask type="number-format" :fraction="true" />

<!-- Только целые числа -->
<Mask type="currency" currency="USD" :fraction="false" />
`})}),`
`,e.jsx(n.h3,{id:"локализация",children:"Локализация"}),`
`,e.jsxs(n.p,{children:["Форматы автоматически адаптируются к локали через свойство ",e.jsx(n.code,{children:"language"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Русский (ru):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Разделитель разрядов: пробел"}),`
`,e.jsx(n.li,{children:"Десятичный разделитель: запятая"}),`
`,e.jsxs(n.li,{children:["Пример: ",e.jsx(n.code,{children:"1 234 567,89"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Английский (en-US):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Разделитель разрядов: запятая"}),`
`,e.jsx(n.li,{children:"Десятичный разделитель: точка"}),`
`,e.jsxs(n.li,{children:["Пример: ",e.jsx(n.code,{children:"1,234,567.89"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Немецкий (de):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Разделитель разрядов: точка"}),`
`,e.jsx(n.li,{children:"Десятичный разделитель: запятая"}),`
`,e.jsxs(n.li,{children:["Пример: ",e.jsx(n.code,{children:"1.234.567,89"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Mask type="number-format" language="ru" :fraction="2" />
<!-- Результат: 1 234,56 -->

<Mask type="number-format" language="en-US" :fraction="2" />
<!-- Результат: 1,234.56 -->

<Mask type="currency" currency="EUR" language="de" />
<!-- Результат: 1.234,56 € -->

<!-- Валюта без символа -->
<Mask type="currency" currency="USD" :currencyHide="true" />
<!-- Результат: 1,234.56 -->
`})})]})}function mc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ji,{...i})}):ji(i)}function pi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"validation-and-patterns",children:"Validation and patterns"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"pattern"})," and ",e.jsx(n.code,{children:"check"})," properties are designed for managing input validation in the mask."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern"})," — defines validation patterns for individual mask groups, checking entered values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"check"})," — global validation pattern applied after the mask is fully completed"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work sequentially: ",e.jsx(n.code,{children:"pattern"})," validates entered values at the mask group level, highlighting validation errors after input. Characters are entered into the field, but when they don't match the pattern, an error message is displayed. Each group (defined by special characters) receives its own pattern. After the mask is fully filled, ",e.jsx(n.code,{children:"check"})," performs final validation of the entire value, providing an additional layer of verification for complex business logic. Both properties are optional and can be used independently or together for multi-level protection against incorrect data."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
<\/script>

<template>
  <!-- Pattern for groups: digits only -->
  <Mask
    v-model="phone"
    mask="+7 (***) ***-**-**"
    pattern="\\\\d"
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
          return '\\\\d'
        }
      },
      'M': {
        pattern: (masks) => {
          const value = masks['M']?.value || ''
          if (value === '0') return '[1-9]'
          if (value === '1') return '[0-2]'
          return '\\\\d'
        }
      },
      'Y': { pattern: '\\\\d' }
    }"
  />

  <!-- Check for final validation -->
  <Mask
    v-model="cardNumber"
    mask="**** **** **** ****"
    pattern="\\\\d"
    :check="(maskData) => {
      const number = maskData.value.replace(/\\s/g, '')
      return isValidLuhn(number) ? {} : {
        validationMessage: 'Invalid card number'
      }
    }"
  />
</template>
`})})]})}function gc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(pi,{...i})}):pi(i)}function ui(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"валидация-и-паттерны",children:"Валидация и паттерны"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"pattern"})," и ",e.jsx(n.code,{children:"check"})," предназначены для управления валидацией ввода в маске."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern"})," — определяет паттерны валидации для отдельных групп маски, проверяя введённые значения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"check"})," — глобальный паттерн валидации, применяемый после полного заполнения маски"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают последовательно: ",e.jsx(n.code,{children:"pattern"})," проверяет введённые значения на уровне групп маски, подсвечивая ошибки валидации после ввода. Символы вводятся в поле, но при несоответствии паттерну отображается сообщение об ошибке. Каждая группа (определённая специальными символами) получает свой паттерн. После полного заполнения маски ",e.jsx(n.code,{children:"check"})," выполняет финальную валидацию всего значения, обеспечивая дополнительный слой проверки для сложной бизнес-логики. Оба свойства опциональны и могут использоваться независимо или совместно для многоуровневой защиты от некорректных данных."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
<\/script>

<template>
  <!-- Pattern для групп: только цифры -->
  <Mask
    v-model="phone"
    mask="+7 (***) ***-**-**"
    pattern="\\\\d"
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
          return '\\\\d'
        }
      },
      'M': {
        pattern: (masks) => {
          const value = masks['M']?.value || ''
          if (value === '0') return '[1-9]'
          if (value === '1') return '[0-2]'
          return '\\\\d'
        }
      },
      'Y': { pattern: '\\\\d' }
    }"
  />

  <!-- Check для финальной валидации -->
  <Mask
    v-model="cardNumber"
    mask="**** **** **** ****"
    pattern="\\\\d"
    :check="(maskData) => {
      const number = maskData.value.replace(/\\s/g, '')
      return isValidLuhn(number) ? {} : {
        validationMessage: 'Неверный номер карты'
      }
    }"
  />
</template>
`})})]})}function fc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ui,{...i})}):ui(i)}function mi(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"special-characters",children:"Special characters"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"special"})," property defines special characters to denote user input positions in the mask and configure their extended behavior."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string"})," — single special character (default ",e.jsx(n.code,{children:"'*'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string[]"})," — array of special characters for different group types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MaskSpecialList"})," — object with extended configuration for each character"]}),`
`]}),`
`,e.jsx(n.p,{children:"Special characters in the mask template denote positions where users can enter data, unlike literal characters that are inserted automatically."}),`
`,e.jsxs(n.p,{children:["When using a simple string (e.g., ",e.jsx(n.code,{children:'special="*"'}),"), all input positions in the mask are restricted by the same validation rules."]}),`
`,e.jsxs(n.p,{children:["An array of characters (e.g., ",e.jsx(n.code,{children:`special="['*', 'A', '#']"`}),") allows creating different group types with individual constraints: one group for digits, another for letters, a third for special characters."]}),`
`,e.jsxs(n.p,{children:["Object notation ",e.jsx(n.code,{children:"MaskSpecialList"})," (see ",e.jsx(n.a,{href:"#maskspeciallist",children:"detailed description below"}),") provides maximum flexibility. Each special character is configured separately with the ability to set default values, rubber groups with variable length, auto-transition characters, and custom validation."]}),`
`,e.jsxs(n.p,{children:["For built-in types (",e.jsx(n.code,{children:"currency"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"time"}),"), the system automatically generates special characters considering regional settings, ignoring the user-defined ",e.jsx(n.code,{children:"special"})," value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Simple special character -->
<Mask mask="***-***" special="*" />

<!-- Multiple group types -->
<Mask mask="AA*-###" :special="['A', '*', '#']" />

<!-- Extended configuration -->
<Mask
  mask="***-***"
  :special="{
    '*': {
      pattern: '\\\\d',
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
    'D': { defaultValue: '01', pattern: '\\\\d' },
    'M': { defaultValue: '01', pattern: '\\\\d' },
    'Y': { defaultValue: '2024', pattern: '\\\\d' }
  }"
/>
`})}),`
`,e.jsx(n.h2,{id:"maskspeciallist",children:"MaskSpecialList"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MaskSpecialList"})," — object with extended configuration for mask special characters, where each key corresponds to a special character in the template."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MaskSpecialList = Record<string, MaskSpecialItem>

interface MaskSpecialItem {
  /** Default value for the group */
  defaultValue?: string

  /** Enables variable-length mode (rubber group) */
  rubber?: boolean

  /** Characters for automatic transition to the next group */
  transitionChar?: string | string[]

  /** Minimum length for rubber group */
  minLength?: number

  /** Maximum length for rubber group */
  maxLength?: number

  /** Regular expression for character validation */
  match?: RegExp | string

  /** Pattern for group validation */
  pattern?: FieldPatternItemOrFunction

  /** Displayed placeholder character */
  view?: string
}
`})}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(n.h4,{id:"defaultvalue",children:e.jsx(n.code,{children:"defaultValue"})}),`
`,e.jsx(n.p,{children:"String with the initial value for the group. Automatically inserted on initialization or when the user hasn't entered data."}),`
`,e.jsx(n.h4,{id:"rubber",children:e.jsx(n.code,{children:"rubber"})}),`
`,e.jsxs(n.p,{children:["Boolean value enabling rubber group mode with variable length. Allows users to enter from ",e.jsx(n.code,{children:"minLength"})," to ",e.jsx(n.code,{children:"maxLength"})," characters in one group."]}),`
`,e.jsx(n.h4,{id:"transitionchar",children:e.jsx(n.code,{children:"transitionChar"})}),`
`,e.jsxs(n.p,{children:["Character or array of characters that complete the rubber group and move the cursor to the next part of the mask. Only works with rubber groups (",e.jsx(n.code,{children:"rubber: true"}),")."]}),`
`,e.jsx(n.h4,{id:"minlength",children:e.jsx(n.code,{children:"minLength"})}),`
`,e.jsxs(n.p,{children:["Minimum number of characters for rubber group. Only works with ",e.jsx(n.code,{children:"rubber: true"}),"."]}),`
`,e.jsx(n.h4,{id:"maxlength",children:e.jsx(n.code,{children:"maxLength"})}),`
`,e.jsxs(n.p,{children:["Maximum number of characters for rubber group. Only works with ",e.jsx(n.code,{children:"rubber: true"}),"."]}),`
`,e.jsx(n.h4,{id:"match",children:e.jsx(n.code,{children:"match"})}),`
`,e.jsx(n.p,{children:"Regular expression or string for validating entered characters in the group."}),`
`,e.jsx(n.h4,{id:"pattern",children:e.jsx(n.code,{children:"pattern"})}),`
`,e.jsx(n.p,{children:"Regular expression or string for validating characters in the current group during input. Can also be a function that dynamically returns a pattern based on mask data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Type:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem)
type FieldPatternItem = string | Partial<HTMLInputElement>
`})}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"FieldMasks"})," is an object with information about all mask groups, each containing:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"group"})," — group key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — accumulated group value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxLength"})," — maximum fragment length"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"full"})," — fragment filled flag"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"end"})," — end of input flag"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chars"})," — array of value characters"]}),`
`]}),`
`,e.jsx(n.h4,{id:"view",children:e.jsx(n.code,{children:"view"})}),`
`,e.jsx(n.p,{children:"Character displayed as placeholder for unfilled group positions."}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const phoneCode = ref('')
const productCode = ref('')
const dateValue = ref('')
<\/script>

<template>
  <!-- Phone code with variable length and auto-completion -->
  <Mask
    v-model="phoneCode"
    mask="+* (***) *** ** **"
    :special="{
      '*': {
        rubber: true,
        minLength: 1,
        maxLength: 3,
        pattern: '\\\\d',
        transitionChar: ' '
      }
    }"
  />

  <!-- Product code with variable length -->
  <Mask
    v-model="productCode"
    mask="PRD-***"
    :special="{
      '*': {
        rubber: true,
        minLength: 4,
        maxLength: 10,
        match: /[A-Z0-9]/,
        view: '_'
      }
    }"
  />

  <!-- Date with default values -->
  <Mask
    v-model="dateValue"
    mask="DD/MM/YYYY"
    :special="{
      'D': {
        defaultValue: '01',
        pattern: '\\\\d',
        view: '0'
      },
      'M': {
        defaultValue: '01',
        pattern: '\\\\d',
        view: '0'
      },
      'Y': {
        defaultValue: '2024',
        pattern: '\\\\d',
        view: '0'
      }
    }"
  />
</template>
`})})]})}function vc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(mi,{...i})}):mi(i)}function gi(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"специальные-символы",children:"Специальные символы"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"special"})," определяет специальные символы для обозначения мест пользовательского ввода в маске и настройку их расширенного поведения."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string"})," — одиночный специальный символ (по умолчанию ",e.jsx(n.code,{children:"'*'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string[]"})," — массив специальных символов для разных типов групп"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MaskSpecialList"})," — объект с расширенной конфигурацией каждого символа"]}),`
`]}),`
`,e.jsx(n.p,{children:"Специальные символы в шаблоне маски обозначают позиции, где пользователь может вводить данные, в отличие от литеральных символов, которые вставляются автоматически."}),`
`,e.jsxs(n.p,{children:["При использовании простой строки (например, ",e.jsx(n.code,{children:'special="*"'}),") все места ввода в маске ограничиваются одинаковыми правилами валидации."]}),`
`,e.jsxs(n.p,{children:["Массив символов (например, ",e.jsx(n.code,{children:`special="['*', 'A', '#']"`}),") позволяет создавать разные типы групп с индивидуальными ограничениями: одна группа для цифр, другая для букв, третья для специальных символов."]}),`
`,e.jsxs(n.p,{children:["Объектная нотация ",e.jsx(n.code,{children:"MaskSpecialList"})," (см. ",e.jsx(n.a,{href:"#maskspeciallist",children:"детальное описание ниже"}),") предоставляет максимальную гибкость. Каждый специальный символ настраивается отдельно с возможностью задать значения по умолчанию, резиновые группы переменной длины, символы автоперехода и кастомную валидацию."]}),`
`,e.jsxs(n.p,{children:["Для встроенных типов (",e.jsx(n.code,{children:"currency"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"time"}),") система автоматически генерирует специальные символы с учётом региональных настроек, игнорируя пользовательское значение ",e.jsx(n.code,{children:"special"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Простой специальный символ -->
<Mask mask="***-***" special="*" />

<!-- Несколько типов групп -->
<Mask mask="AA*-###" :special="['A', '*', '#']" />

<!-- Расширенная конфигурация -->
<Mask
  mask="***-***"
  :special="{
    '*': {
      pattern: '\\\\d',
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
    'D': { defaultValue: '01', pattern: '\\\\d' },
    'M': { defaultValue: '01', pattern: '\\\\d' },
    'Y': { defaultValue: '2024', pattern: '\\\\d' }
  }"
/>
`})}),`
`,e.jsx(n.h2,{id:"maskspeciallist",children:"MaskSpecialList"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MaskSpecialList"})," — объект расширенной конфигурации специальных символов маски, где каждый ключ соответствует специальному символу в шаблоне."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MaskSpecialList = Record<string, MaskSpecialItem>

interface MaskSpecialItem {
  /** Значение по умолчанию для группы */
  defaultValue?: string

  /** Включает режим переменной длины (резиновая группа) */
  rubber?: boolean

  /** Символы автоматического перехода к следующей группе */
  transitionChar?: string | string[]

  /** Минимальная длина для резиновой группы */
  minLength?: number

  /** Максимальная длина для резиновой группы */
  maxLength?: number

  /** Регулярное выражение для валидации символов */
  match?: RegExp | string

  /** Паттерн валидации группы */
  pattern?: FieldPatternItemOrFunction

  /** Отображаемый символ placeholder */
  view?: string
}
`})}),`
`,e.jsx(n.h3,{id:"свойства",children:"Свойства"}),`
`,e.jsx(n.h4,{id:"defaultvalue",children:e.jsx(n.code,{children:"defaultValue"})}),`
`,e.jsx(n.p,{children:"Строка с начальным значением для группы. Автоматически подставляется при инициализации или когда пользователь не ввёл данные."}),`
`,e.jsx(n.h4,{id:"rubber",children:e.jsx(n.code,{children:"rubber"})}),`
`,e.jsxs(n.p,{children:["Логическое значение, включающее режим резиновой группы с переменной длиной. Позволяет пользователю вводить от ",e.jsx(n.code,{children:"minLength"})," до ",e.jsx(n.code,{children:"maxLength"})," символов в одной группе."]}),`
`,e.jsx(n.h4,{id:"transitionchar",children:e.jsx(n.code,{children:"transitionChar"})}),`
`,e.jsxs(n.p,{children:["Символ или массив символов, при вводе которых резиновая группа завершается и курсор переходит к следующей части маски. Работает только для резиновых групп (",e.jsx(n.code,{children:"rubber: true"}),")."]}),`
`,e.jsx(n.h4,{id:"minlength",children:e.jsx(n.code,{children:"minLength"})}),`
`,e.jsxs(n.p,{children:["Минимальное количество символов для резиновой группы. Работает только при ",e.jsx(n.code,{children:"rubber: true"}),"."]}),`
`,e.jsx(n.h4,{id:"maxlength",children:e.jsx(n.code,{children:"maxLength"})}),`
`,e.jsxs(n.p,{children:["Максимальное количество символов для резиновой группы. Работает только при ",e.jsx(n.code,{children:"rubber: true"}),"."]}),`
`,e.jsx(n.h4,{id:"match",children:e.jsx(n.code,{children:"match"})}),`
`,e.jsx(n.p,{children:"Регулярное выражение или строка для валидации вводимых символов в группе."}),`
`,e.jsx(n.h4,{id:"pattern",children:e.jsx(n.code,{children:"pattern"})}),`
`,e.jsx(n.p,{children:"Регулярное выражение или строка для валидации символов в текущей группе при вводе. Также может быть функцией, которая динамически возвращает паттерн на основе данных маски."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Тип:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem)
type FieldPatternItem = string | Partial<HTMLInputElement>
`})}),`
`,e.jsxs(n.p,{children:["Где ",e.jsx(n.code,{children:"FieldMasks"})," — объект с информацией о всех группах маски, каждая из которых содержит:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"group"})," — ключ группы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — накопленное значение группы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxLength"})," — максимальная длина фрагмента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"full"})," — флаг заполненности фрагмента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"end"})," — флаг конца ввода"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chars"})," — массив символов значения"]}),`
`]}),`
`,e.jsx(n.h4,{id:"view",children:e.jsx(n.code,{children:"view"})}),`
`,e.jsx(n.p,{children:"Символ, отображаемый в качестве placeholder для незаполненных позиций группы."}),`
`,e.jsx(n.h3,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const phoneCode = ref('')
const productCode = ref('')
const dateValue = ref('')
<\/script>

<template>
  <!-- Телефонный код переменной длины с автозавершением -->
  <Mask
    v-model="phoneCode"
    mask="+* (***) *** ** **"
    :special="{
      '*': {
        rubber: true,
        minLength: 1,
        maxLength: 3,
        pattern: '\\\\d',
        transitionChar: ' '
      }
    }"
  />

  <!-- Код товара переменной длины -->
  <Mask
    v-model="productCode"
    mask="PRD-***"
    :special="{
      '*': {
        rubber: true,
        minLength: 4,
        maxLength: 10,
        match: /[A-Z0-9]/,
        view: '_'
      }
    }"
  />

  <!-- Дата с значениями по умолчанию -->
  <Mask
    v-model="dateValue"
    mask="DD/MM/YYYY"
    :special="{
      'D': {
        defaultValue: '01',
        pattern: '\\\\d',
        view: '0'
      },
      'M': {
        defaultValue: '01',
        pattern: '\\\\d',
        view: '0'
      },
      'Y': {
        defaultValue: '2024',
        pattern: '\\\\d',
        view: '0'
      }
    }"
  />
</template>
`})})]})}function bc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(gi,{...i})}):gi(i)}function fi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"mask-types",children:"Mask types"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"type"})," property defines the mask operation mode and automatically generates the appropriate structure for different data types."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'text'"})," — basic text mask (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'number'"}),", ",e.jsx(n.code,{children:"'number-format'"}),", ",e.jsx(n.code,{children:"'currency'"})," — numeric types with validation and localization"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'year'"}),", ",e.jsx(n.code,{children:"'month'"}),", ",e.jsx(n.code,{children:"'day'"}),", ",e.jsx(n.code,{children:"'hour-minute'"})," — date and time types"]}),`
`]}),`
`,e.jsxs(n.p,{children:["When using ",e.jsx(n.code,{children:"text"}),", explicit structure specification via the ",e.jsx(n.code,{children:"mask"})," property is required. Specialized numeric types automatically create rubber masks with thousand separators, validation, and formatting according to regional settings (",e.jsx(n.code,{children:"language"}),"). Date types generate masks according to local formats with validation of entered values correctness. When a specialized type is activated, the ",e.jsx(n.code,{children:"mask"})," property is ignored, and the mask structure is formed automatically based on ",e.jsx(n.code,{children:"language"}),", ",e.jsx(n.code,{children:"currency"}),", and ",e.jsx(n.code,{children:"fraction"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Text mask -->
<Mask mask="+1 (***) ***-****" type="text" />

<!-- Currency mask -->
<Mask type="currency" currency="USD" language="en-US" />

<!-- Date mask -->
<Mask type="date" language="en-US" />
`})})]})}function yc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(fi,{...i})}):fi(i)}function vi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"типы-масок",children:"Типы масок"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"type"})," определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'text'"})," — базовая текстовая маска (по умолчанию)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'number'"}),", ",e.jsx(n.code,{children:"'number-format'"}),", ",e.jsx(n.code,{children:"'currency'"})," — числовые типы с валидацией и локализацией"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'year'"}),", ",e.jsx(n.code,{children:"'month'"}),", ",e.jsx(n.code,{children:"'day'"}),", ",e.jsx(n.code,{children:"'hour-minute'"})," — типы дат и времени"]}),`
`]}),`
`,e.jsxs(n.p,{children:["При использовании ",e.jsx(n.code,{children:"text"})," требуется явное указание структуры через свойство ",e.jsx(n.code,{children:"mask"}),". Специализированные числовые типы автоматически создают резиновые маски с разделителями разрядов, валидацией и форматированием согласно региональным настройкам (",e.jsx(n.code,{children:"language"}),"). Типы дат генерируют маски по локальным форматам с проверкой корректности введённых значений. При активации специализированного типа свойство ",e.jsx(n.code,{children:"mask"})," игнорируется, а структура маски формируется автоматически на основе ",e.jsx(n.code,{children:"language"}),", ",e.jsx(n.code,{children:"currency"})," и ",e.jsx(n.code,{children:"fraction"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Текстовая маска -->
<Mask mask="+7 (***) ***-**-**" type="text" />

<!-- Валютная маска -->
<Mask type="currency" currency="RUB" language="ru" />

<!-- Маска даты -->
<Mask type="date" language="ru" />
`})})]})}function wc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(vi,{...i})}):vi(i)}function bi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"mask-visibility-control",children:"Mask visibility control"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"visible"})," and ",e.jsx(n.code,{children:"visiblePartly"})," properties are designed for managing the display of mask placeholder characters and overall component visibility."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"visible"})," — controls complete visibility of the mask component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"visiblePartly"})," — controls partial visibility of placeholder characters"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: when ",e.jsx(n.code,{children:"visible: false"}),", the mask component is completely hidden, including all placeholder characters. When ",e.jsx(n.code,{children:"visiblePartly: true"})," is activated, only filled mask positions are displayed, hiding empty placeholder characters. If ",e.jsx(n.code,{children:"visible"})," is set to ",e.jsx(n.code,{children:"false"}),", the ",e.jsx(n.code,{children:"visiblePartly"})," property is ignored. Visibility changes don't affect validation logic and data processing, allowing creation of adaptive interfaces with conditional or abbreviated mask display."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Mc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(bi,{...i})}):bi(i)}function yi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-видимостью-маски",children:"Управление видимостью маски"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"visible"})," и ",e.jsx(n.code,{children:"visiblePartly"})," предназначены для управления отображением символов-заполнителей маски и видимостью компонента в целом."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"visible"})," — управляет полной видимостью компонента маски"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"visiblePartly"})," — управляет частичной видимостью символов-заполнителей"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: при ",e.jsx(n.code,{children:"visible: false"})," компонент маски полностью скрыт, включая все символы-заполнители. При активации ",e.jsx(n.code,{children:"visiblePartly: true"})," отображаются только заполненные позиции маски, скрывая пустые символы-заполнители. Если ",e.jsx(n.code,{children:"visible"})," установлен в ",e.jsx(n.code,{children:"false"}),", то свойство ",e.jsx(n.code,{children:"visiblePartly"})," игнорируется. Изменение видимости не влияет на логику валидации и обработку данных, позволяя создавать адаптивные интерфейсы с условным или сокращённым отображением маски."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Cc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(yi,{...i})}):yi(i)}const kc={name:"Mask",descriptions:{basic:{en:sc,ru:tc},dateTypes:{en:lc,ru:rc},expose:{en:cc,ru:oc},groupSave:{en:dc,ru:ac},mask:{en:hc,ru:xc},match:{en:jc,ru:pc},numberTypes:{en:uc,ru:mc},pattern:{en:gc,ru:fc},special:{en:vc,ru:bc},type:{en:yc,ru:wc},visible:{en:Mc,ru:Cc}}};function wi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"ajax-menu-loading",children:"AJAX Menu Loading"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ajax"}),", ",e.jsx(n.code,{children:"request"}),", and ",e.jsx(n.code,{children:"cache"})," properties are designed for managing asynchronous loading and caching of menu data."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ajax"})," — enables remote data loading mode (URL string or function)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request"})," — object of type ",e.jsx(n.code,{children:"ApiFetch"})," with HTTP request settings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache"})," — enables caching of loaded menu items"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Properties work together: if ",e.jsx(n.code,{children:"ajax"})," is not specified or equals ",e.jsx(n.code,{children:"false"}),", the menu uses local data. When ",e.jsx(n.code,{children:"ajax"})," is activated (URL string or ",e.jsx(n.code,{children:"true"}),"), ",e.jsx(n.code,{children:"request"})," defines HTTP request parameters (method, headers, body), and ",e.jsx(n.code,{children:"cache"})," manages data persistence. When ",e.jsx(n.code,{children:"cache"})," is enabled, repeated menu openings use saved data instead of new requests, reducing server load."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Dc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(wi,{...i})}):wi(i)}function Mi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"ajax-загрузка-меню",children:"AJAX загрузка меню"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"ajax"}),", ",e.jsx(n.code,{children:"request"})," и ",e.jsx(n.code,{children:"cache"})," предназначены для управления асинхронной загрузкой и кэшированием данных меню."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ajax"})," — включает режим удалённой загрузки данных (строка URL или функция)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request"})," — объект типа ",e.jsx(n.code,{children:"ApiFetch"})," с настройками HTTP-запроса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache"})," — включает кэширование загруженных элементов меню"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойства работают совместно: если ",e.jsx(n.code,{children:"ajax"})," не задан или равен ",e.jsx(n.code,{children:"false"}),", меню использует локальные данные. При активации ",e.jsx(n.code,{children:"ajax"})," (строка URL или ",e.jsx(n.code,{children:"true"}),"), ",e.jsx(n.code,{children:"request"})," определяет параметры HTTP-запроса (метод, заголовки, тело), а ",e.jsx(n.code,{children:"cache"})," управляет сохранением данных. При включённом ",e.jsx(n.code,{children:"cache"})," повторные открытия меню используют сохранённые данные вместо новых запросов, снижая нагрузку на сервер."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function _c(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Mi,{...i})}):Mi(i)}function Ci(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for creating popup menus, dropdown lists, and context menus with navigation and action support."}),`
`,e.jsx(n.p,{children:"Menu combines the functionality of Window (positioning and visibility management), Bars (action and tool panel), and List (displaying items, groups, and nested submenus). The component provides keyboard navigation, nested structure support, asynchronous data loading, optimized rendering mode for large lists, and full control over open/close state."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Integration of Window, Bars, and List components"}),`
`,e.jsx(n.li,{children:"Keyboard navigation through menu items"}),`
`,e.jsx(n.li,{children:"Nested submenus with unlimited depth"}),`
`,e.jsx(n.li,{children:"Asynchronous data loading via AJAX"}),`
`,e.jsx(n.li,{children:"Lite mode for optimizing large lists (liteThreshold)"}),`
`,e.jsx(n.li,{children:"Search and filtering of menu items"}),`
`,e.jsx(n.li,{children:"Management of selected items (selected)"}),`
`,e.jsx(n.li,{children:"Flexible positioning relative to anchor"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigation dropdown menus"}),`
`,e.jsx(n.li,{children:"Right-click context menus"}),`
`,e.jsx(n.li,{children:"Action and operation menus"}),`
`,e.jsx(n.li,{children:"Selectors with search and filtering"}),`
`,e.jsx(n.li,{children:"Multi-level navigation menus"}),`
`,e.jsx(n.li,{children:"Menus with dynamic data loading"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Fc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ci,{...i})}):Ci(i)}function ki(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания всплывающих меню, выпадающих списков и контекстных меню с поддержкой навигации и действий."}),`
`,e.jsx(n.p,{children:"Menu объединяет функциональность Window (позиционирование и управление видимостью), Bars (панель действий и инструментов) и List (отображение пунктов, групп и вложенных подменю). Компонент обеспечивает клавиатурную навигацию, поддержку вложенной структуры, асинхронную загрузку данных, режим оптимизированного рендеринга для больших списков и полный контроль над состоянием открытия/закрытия."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Интеграция Window, Bars и List компонентов"}),`
`,e.jsx(n.li,{children:"Клавиатурная навигация по пунктам меню"}),`
`,e.jsx(n.li,{children:"Вложенные подменю с неограниченной глубиной"}),`
`,e.jsx(n.li,{children:"Асинхронная загрузка данных через AJAX"}),`
`,e.jsx(n.li,{children:"Режим lite для оптимизации больших списков (liteThreshold)"}),`
`,e.jsx(n.li,{children:"Поиск и фильтрация пунктов меню"}),`
`,e.jsx(n.li,{children:"Управление выбранными элементами (selected)"}),`
`,e.jsx(n.li,{children:"Гибкое позиционирование относительно якоря"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Выпадающие меню навигации"}),`
`,e.jsx(n.li,{children:"Контекстные меню по правому клику"}),`
`,e.jsx(n.li,{children:"Меню действий и операций"}),`
`,e.jsx(n.li,{children:"Селекторы с поиском и фильтрацией"}),`
`,e.jsx(n.li,{children:"Многоуровневые навигационные меню"}),`
`,e.jsx(n.li,{children:"Меню с динамической загрузкой данных"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Sc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ki,{...i})}):ki(i)}function Di(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Slot for placing the menu control element (trigger)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — object with menu control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"title",children:e.jsx(n.code,{children:"title"})}),`
`,e.jsx(n.p,{children:"Slot for placing the menu window title."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — object with menu control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"footer",children:e.jsx(n.code,{children:"footer"})}),`
`,e.jsx(n.p,{children:"Slot for placing content in the bottom part of the menu window (action buttons, information)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — object with menu control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"contexttop",children:e.jsx(n.code,{children:"contextTop"})}),`
`,e.jsx(n.p,{children:"Slot for placing contextual area above the menu list (search, filters, hints)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — object with menu control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"contextbottom",children:e.jsx(n.code,{children:"contextBottom"})}),`
`,e.jsx(n.p,{children:"Slot for placing contextual area below the menu list (hints, final actions)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — object with menu control data"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' }
])

const handleSubmit = (values) => {
  console.log('Selected values:', values)
}
<\/script>

<template>
  <Menu v-model:open="isOpen" :list="menuItems">
    <template #control="{ onclick, isSelected, selectedNames }">
      <button @click="onclick">
        {{ isSelected ? selectedNames.join(', ') : 'Select items' }}
      </button>
    </template>

    <template #title="{ selectedList }">
      <h3>Select Items</h3>
      <span v-if="selectedList.length">
        ({{ selectedList.length }})
      </span>
    </template>

    <template #contextTop>
      <input type="search" placeholder="Search items..." />
    </template>

    <template #footer="{ isSelected, selectedValues }">
      <button @click="isOpen = false">Cancel</button>
      <button
        :disabled="!isSelected"
        @click="handleSubmit(selectedValues)"
      >
        Apply
      </button>
    </template>
  </Menu>
</template>
`})}),`
`,e.jsx(n.h2,{id:"menucontrolitem",children:"MenuControlItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MenuControlItem"})," — object passed to all Menu component slots, containing menu control data and selection information."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MenuControlItem = MenuControlBasic & WindowControlItem

type MenuControlBasic = ListExpose & {
  /** Data loading state */
  loading: Ref<boolean>
}

// Includes properties from ListExpose:
// - isSelected: ComputedRef<boolean>
// - selectedList: Ref<any[]>
// - selectedNames: Ref<string[]>
// - selectedValues: Ref<any[]>

// And properties from WindowControlItem:
// - classesWindow: WindowClassesList
// - class: string
// - open: Ref<boolean>
// - onclick: (event: MouseEvent & TouchEvent) => Promise<void>
// - oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>
// - binds: object
`})}),`
`,e.jsx(n.h3,{id:"main-properties",children:"Main properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"loading"})})," — reactive state of menu data loading"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isSelected"})})," — computed property indicating presence of selected items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"selectedList"})})," — reactive list of selected items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"selectedNames"})})," — reactive list of labels of selected items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"selectedValues"})})," — reactive array of values of selected items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"open"})})," — reactive state of menu open/close"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onclick"})})," — click handler for opening/closing menu"]}),`
`]})]})}function Lc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Di,{...i})}):Di(i)}function _i(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Слот для размещения элемента управления (триггера) меню."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — объект с данными управления меню"]}),`
`]}),`
`,e.jsx(n.h3,{id:"title",children:e.jsx(n.code,{children:"title"})}),`
`,e.jsx(n.p,{children:"Слот для размещения заголовка окна меню."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — объект с данными управления меню"]}),`
`]}),`
`,e.jsx(n.h3,{id:"footer",children:e.jsx(n.code,{children:"footer"})}),`
`,e.jsx(n.p,{children:"Слот для размещения содержимого в нижней части окна меню (кнопки действий, информация)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — объект с данными управления меню"]}),`
`]}),`
`,e.jsx(n.h3,{id:"contexttop",children:e.jsx(n.code,{children:"contextTop"})}),`
`,e.jsx(n.p,{children:"Слот для размещения контекстной области над списком меню (поиск, фильтры, подсказки)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — объект с данными управления меню"]}),`
`]}),`
`,e.jsx(n.h3,{id:"contextbottom",children:e.jsx(n.code,{children:"contextBottom"})}),`
`,e.jsx(n.p,{children:"Слот для размещения контекстной области под списком меню (подсказки, итоговые действия)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MenuControlItem"})," — объект с данными управления меню"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
  { label: 'Элемент 1', value: '1' },
  { label: 'Элемент 2', value: '2' },
  { label: 'Элемент 3', value: '3' }
])

const handleSubmit = (values) => {
  console.log('Выбранные значения:', values)
}
<\/script>

<template>
  <Menu v-model:open="isOpen" :list="menuItems">
    <template #control="{ onclick, isSelected, selectedNames }">
      <button @click="onclick">
        {{ isSelected ? selectedNames.join(', ') : 'Выбрать элементы' }}
      </button>
    </template>

    <template #title="{ selectedList }">
      <h3>Выбор элементов</h3>
      <span v-if="selectedList.length">
        ({{ selectedList.length }})
      </span>
    </template>

    <template #contextTop>
      <input type="search" placeholder="Поиск элементов..." />
    </template>

    <template #footer="{ isSelected, selectedValues }">
      <button @click="isOpen = false">Отмена</button>
      <button
        :disabled="!isSelected"
        @click="handleSubmit(selectedValues)"
      >
        Применить
      </button>
    </template>
  </Menu>
</template>
`})}),`
`,e.jsx(n.h2,{id:"menucontrolitem",children:"MenuControlItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MenuControlItem"})," — объект, передаваемый во все слоты компонента Menu, содержащий данные для управления меню и информацию о выборе."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MenuControlItem = MenuControlBasic & WindowControlItem

type MenuControlBasic = ListExpose & {
  /** Состояние загрузки данных */
  loading: Ref<boolean>
}

// Включает свойства из ListExpose:
// - isSelected: ComputedRef<boolean>
// - selectedList: Ref<any[]>
// - selectedNames: Ref<string[]>
// - selectedValues: Ref<any[]>

// И свойства из WindowControlItem:
// - classesWindow: WindowClassesList
// - class: string
// - open: Ref<boolean>
// - onclick: (event: MouseEvent & TouchEvent) => Promise<void>
// - oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>
// - binds: object
`})}),`
`,e.jsx(n.h3,{id:"основные-свойства",children:"Основные свойства"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"loading"})})," — реактивное состояние загрузки данных меню"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isSelected"})})," — вычисляемое свойство, указывающее наличие выбранных элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"selectedList"})})," — реактивный список выбранных элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"selectedNames"})})," — реактивный список меток выбранных элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"selectedValues"})})," — реактивный массив значений выбранных элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"open"})})," — реактивное состояние открытия меню"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onclick"})})," — обработчик клика для открытия/закрытия меню"]}),`
`]})]})}function Xc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(_i,{...i})}):_i(i)}const $c={name:"Menu",descriptions:{ajax:{en:Dc,ru:_c},menu:{en:Fc,ru:Sc},slots:{en:Lc,ru:Xc}}};function Fi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"head-position-animation",children:"Head position animation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"animationHeadPosition"})," property controls how the Head area behaves during show/hide animations."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'top'"})," — keeps the Head at the top during transition (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'toBottom'"})," — animates the Head toward the bottom together with content"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Synchronizes header movement with content animation using CSS transforms for smooth transitions. Suitable for collapsing layouts when the header should travel with expanding content. When the ",e.jsx(n.code,{children:"section"})," property is enabled (set to ",e.jsx(n.code,{children:"true"}),"), the ",e.jsx(n.code,{children:"animationHeadPosition"})," parameter is ignored and does not affect animation behavior."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Head stays at top -->
<MotionTransform animationHeadPosition="top" />

<!-- Head moves down with content -->
<MotionTransform animationHeadPosition="toBottom" />
`})})]})}function Ic(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Fi,{...i})}):Fi(i)}function Si(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"анимация-позиции-заголовка",children:"Анимация позиции заголовка"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"animationHeadPosition"})," определяет поведение области Head во время анимаций показа/скрытия."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'top'"})," — сохраняет Head вверху во время перехода (по умолчанию)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'toBottom'"})," — анимирует Head вниз вместе с контентом"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Синхронизирует движение заголовка с анимацией контента, используя CSS-трансформации для плавных переходов. Подходит для сворачиваемых макетов, когда заголовок должен перемещаться вместе с разворачивающимся содержимым. При включенном свойстве ",e.jsx(n.code,{children:"section"})," (установлено в ",e.jsx(n.code,{children:"true"}),") параметр ",e.jsx(n.code,{children:"animationHeadPosition"})," игнорируется и не влияет на поведение анимации."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Head остается вверху -->
<MotionTransform animationHeadPosition="top" />

<!-- Head движется вниз с контентом -->
<MotionTransform animationHeadPosition="toBottom" />
`})})]})}function Tc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Si,{...i})}):Si(i)}function Li(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"css-classes-for-behavior-control",children:"CSS Classes for Behavior Control"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"State classes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--open"})," — component is fully open and its content is visible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--show"})," — component is visible or in the process of open/close animation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--window"})," — component operates in window mode (with teleportation)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--click"})," — added briefly on click for feedback effects"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Control classes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--close"})," — applied to element to trigger MotionTransform closing on click"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--none"})," — disables default behavior (open/close) for the element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--noneGlobal"})," — globally disables MotionTransform events"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Element classes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__context"})," — class for context element for positioning"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__head"})," — class for header area that acts as a trigger"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__body"})," — class for content area that appears and disappears"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backdrop"})," — class for backdrop element to create overlay effect"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__scrim"})," — class for scrim layer in modal modes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__clickNone"})," — class for element that ignores clicks"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"*"})," is the component class name (e.g., ",e.jsx(n.code,{children:"d1-motion-transform"}),", ",e.jsx(n.code,{children:"m3-motion-transform"}),")."]})]})}function Bc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Li,{...i})}):Li(i)}function Xi(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"css-классы-для-управления-поведением",children:"CSS классы для управления поведением"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Классы состояний:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--open"})," — компонент полностью открыт и его содержимое видимо"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--show"})," — компонент видим или находится в процессе анимации открытия/закрытия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--window"})," — компонент работает в режиме окна (с телепортацией)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--click"})," — добавляется на короткое время при клике для эффектов обратной связи"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Классы управления:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--close"})," — применяется к элементу для закрытия MotionTransform при клике"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--none"})," — отключает стандартное поведение (открытие/закрытие) для элемента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--noneGlobal"})," — глобально отключает события MotionTransform"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Классы элементов:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__context"})," — класс для контекстного элемента для позиционирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__head"})," — класс для области заголовка, которая выступает в роли триггера"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__body"})," — класс для области содержимого, которая появляется и исчезает"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backdrop"})," — класс для элемента заднего фона для создания эффекта наложения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__scrim"})," — класс для затемняющего слоя в модальных режимах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__clickNone"})," — класс для элемента, который игнорирует клики"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Где ",e.jsx(n.code,{children:"*"})," — название класса компонента (например, ",e.jsx(n.code,{children:"d1-motion-transform"}),", ",e.jsx(n.code,{children:"m3-motion-transform"}),")."]})]})}function Nc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Xi,{...i})}):Xi(i)}function $i(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"transform",children:e.jsx(n.code,{children:"transform"})}),`
`,e.jsx(n.p,{children:"Event fires when MotionTransform state changes with full event context."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: Event | undefined"})," — DOM event that triggered the change (if any)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: MotionTransformEmitOptions"})," — object with transform data"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"MotionTransformEmitOptions structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: 'head' | 'body' | 'top' | 'script'"})," — area type that initiated the event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — current open state (",e.jsx(n.code,{children:"true"})," - open, ",e.jsx(n.code,{children:"false"})," - closed)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
const handleTransform = (event, options) => {
  console.log('Event:', event)
  console.log('Type:', options.type)
  console.log('Open state:', options.open)
}
<\/script>

<template>
  <MotionTransform @transform="handleTransform">
    <template #head>
      <div>Header</div>
    </template>
    <template #body>
      <p>Content</p>
    </template>
  </MotionTransform>
</template>
`})}),`
`,e.jsx(n.h3,{id:"transformlite",children:e.jsx(n.code,{children:"transformLite"})}),`
`,e.jsx(n.p,{children:"Event fires when MotionTransform state changes without DOM event context (lightweight version)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: MotionTransformEmitOptions"})," — object with transform data"]}),`
`]})]})}function Pc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx($i,{...i})}):$i(i)}function Ii(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"transform",children:e.jsx(n.code,{children:"transform"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния MotionTransform с полным контекстом события."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: Event | undefined"})," — DOM-событие, которое вызвало изменение (если есть)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: MotionTransformEmitOptions"})," — объект с данными трансформации"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура MotionTransformEmitOptions:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: 'head' | 'body' | 'top' | 'script'"})," — тип области, которая инициировала событие"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — текущее состояние открытия (",e.jsx(n.code,{children:"true"})," - открыто, ",e.jsx(n.code,{children:"false"})," - закрыто)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
const handleTransform = (event, options) => {
  console.log('Событие:', event)
  console.log('Тип:', options.type)
  console.log('Состояние открытия:', options.open)
}
<\/script>

<template>
  <MotionTransform @transform="handleTransform">
    <template #head>
      <div>Заголовок</div>
    </template>
    <template #body>
      <p>Содержимое</p>
    </template>
  </MotionTransform>
</template>
`})}),`
`,e.jsx(n.h3,{id:"transformlite",children:e.jsx(n.code,{children:"transformLite"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния MotionTransform без контекста DOM-события (облегчённая версия)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: MotionTransformEmitOptions"})," — объект с данными трансформации"]}),`
`]})]})}function Oc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ii,{...i})}):Ii(i)}function Ti(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isshow",children:e.jsx(n.code,{children:"isShow"})}),`
`,e.jsx(n.p,{children:"Computed state indicating whether the component is displayed or being prepared for display (including animation state)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]})]})}function Ec(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ti,{...i})}):Ti(i)}function Bi(i){const n={code:"code",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isshow",children:e.jsx(n.code,{children:"isShow"})}),`
`,e.jsx(n.p,{children:"Вычисляемое состояние, указывающее отображается ли компонент или готовится к отображению (включая состояние анимации)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]})]})}function Ac(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Bi,{...i})}):Bi(i)}function Ni(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"motiontransformelement",children:e.jsx(n.code,{children:"motionTransformElement"})}),`
`,e.jsx(n.p,{children:"Reactive reference to the nested MotionTransform component's expose API, providing programmatic access to control methods."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<ConstrBind<MotionTransformExpose> | undefined>"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Methods via motionTransformElement.value:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open"})," — reactive open state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isShow"})," — computed visibility state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOpen(open: boolean)"})," — set open state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toOpen()"})," — open component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toClose()"})," — close component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggle()"})," — toggle state"]}),`
`]})]})}function Rc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ni,{...i})}):Ni(i)}function Pi(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"motiontransformelement",children:e.jsx(n.code,{children:"motionTransformElement"})}),`
`,e.jsx(n.p,{children:"Реактивная ссылка на expose API вложенного компонента MotionTransform, предоставляющая программный доступ к методам управления."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<ConstrBind<MotionTransformExpose> | undefined>"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Методы через motionTransformElement.value:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open"})," — реактивное состояние открытия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isShow"})," — вычисляемое состояние видимости"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOpen(open: boolean)"})," — установить состояние открытия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toOpen()"})," — открыть компонент"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toClose()"})," — закрыть компонент"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggle()"})," — переключить состояние"]}),`
`]})]})}function Wc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Pi,{...i})}):Pi(i)}function Oi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"ignore-zones",children:"Ignore zones"}),`
`,e.jsx(n.p,{children:"Properties that exclude elements from outside-click checks and auto-close logic."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ignore"})," — DOM element reference or CSS selector to exclude from outside-click detection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ignoreSelector"})," — CSS selector to exclude multiple elements simultaneously"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Both properties work together during outside-click evaluation. ",e.jsx(n.code,{children:"ignore"})," is more precise and faster for single elements, can reference a specific DOM element directly. ",e.jsx(n.code,{children:"ignoreSelector"})," is more flexible, can match multiple elements with a single selector, better suited for dynamic content. Use for trigger buttons, helper controls, and nested interactive areas."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Vc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Oi,{...i})}):Oi(i)}function Ei(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"зоны-игнорирования",children:"Зоны игнорирования"}),`
`,e.jsx(n.p,{children:"Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ignore"})," — ссылка на DOM-элемент или CSS-селектор для исключения из обнаружения внешних кликов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ignoreSelector"})," — CSS-селектор для исключения нескольких элементов одновременно"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Оба свойства работают вместе при оценке внешних кликов. ",e.jsx(n.code,{children:"ignore"})," более точный и быстрее для одиночных элементов, может ссылаться на конкретный DOM-элемент напрямую. ",e.jsx(n.code,{children:"ignoreSelector"})," более гибкий, может соответствовать нескольким элементам одним селектором, лучше подходит для динамического контента. Используйте для кнопок-триггеров, вспомогательных элементов и вложенных интерактивных областей."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Hc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ei,{...i})}):Ei(i)}function Ai(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Low-level utility for managing element transforms, state transitions, and interaction flows in components with window-like behavior."}),`
`,e.jsx(n.p,{children:"MotionTransform centralizes management of open/show/teleport states, measures element sizes, updates CSS variables, and coordinates events to create smooth and predictable animations. Provides unified API for component visibility control, click handling, and automatic closing with support for ignore zones."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Centralized state management (open, show, teleport)"}),`
`,e.jsx(n.li,{children:"Click event and auto-close coordination"}),`
`,e.jsx(n.li,{children:"Size measurement and CSS variable updates"}),`
`,e.jsx(n.li,{children:"DOM helpers for working with refs, portals, and classes"}),`
`,e.jsx(n.li,{children:"Programmatic control through imperative methods"}),`
`,e.jsx(n.li,{children:"Configurable event ignore zones"}),`
`,e.jsx(n.li,{children:"Optimized DOM manipulation"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Base utility for Window, Menu, Dialog components"}),`
`,e.jsx(n.li,{children:"Managing open/close animations"}),`
`,e.jsx(n.li,{children:"State coordination in popup elements"}),`
`,e.jsx(n.li,{children:"Component library development with window-like behavior"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This is a low-level utility for component library development, not intended for direct use in applications."}),`
`]})]})}function qc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ai,{...i})}):Ai(i)}function Ri(i){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Низкоуровневая утилита для управления трансформациями элементов, переходами состояний и потоками взаимодействия в компонентах с оконным поведением."}),`
`,e.jsx(n.p,{children:"MotionTransform централизует управление состояниями открытия/отображения/телепортации, измеряет размеры элементов, обновляет CSS-переменные и координирует события для создания плавных и предсказуемых анимаций. Предоставляет единый API для работы с видимостью компонентов, обработки кликов и автоматического закрытия с поддержкой игнорируемых зон."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Централизованное управление состояниями (open, show, teleport)"}),`
`,e.jsx(n.li,{children:"Координация событий кликов и автозакрытия"}),`
`,e.jsx(n.li,{children:"Измерение размеров и обновление CSS-переменных"}),`
`,e.jsx(n.li,{children:"DOM-хелперы для работы с refs, порталами и классами"}),`
`,e.jsx(n.li,{children:"Программное управление через императивные методы"}),`
`,e.jsx(n.li,{children:"Настраиваемые зоны игнорирования событий"}),`
`,e.jsx(n.li,{children:"Оптимизированная работа с DOM"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Базовая утилита для компонентов Window, Menu, Dialog"}),`
`,e.jsx(n.li,{children:"Управление анимациями открытия/закрытия"}),`
`,e.jsx(n.li,{children:"Координация состояний в всплывающих элементах"}),`
`,e.jsx(n.li,{children:"Разработка библиотек компонентов с оконным поведением"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Это низкоуровневая утилита для разработки библиотек компонентов, не предназначенная для прямого использования в приложениях."}),`
`]})]})}function Yc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ri,{...i})}):Ri(i)}function Wi(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
  <MotionTransform v-model:open="isOpen">
    <template #head="{ isOpen, classes }">
      <div :class="classes.click">
        <h3>{{ isOpen ? '▲' : '▼' }} Header</h3>
      </div>
    </template>

    <template #body="{ isShow, classes }">
      <div v-if="isShow" :class="classes.open">
        <p>Main content</p>
        <button :class="classes.close">Close</button>
      </div>
    </template>
  </MotionTransform>
</template>
`})}),`
`,e.jsx(n.h3,{id:"head",children:e.jsx(n.code,{children:"head"})}),`
`,e.jsx(n.p,{children:"Slot for placing the header area that serves as a trigger for opening/closing the component."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MotionTransformControlItem"})," — object with component control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"body",children:e.jsx(n.code,{children:"body"})}),`
`,e.jsx(n.p,{children:"Slot for placing the main content area that appears when the component is opened."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MotionTransformControlItem"})," — object with component control data"]}),`
`]}),`
`,e.jsx(n.h2,{id:"motiontransformcontrolitem",children:"MotionTransformControlItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MotionTransformControlItem"})," — object passed to all MotionTransform component slots, containing state control data."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MotionTransformControlItem = {
  /** Component open state */
  isOpen: ComputedRef<boolean>

  /** Visible or preparing to be shown */
  isShow: ComputedRef<boolean>

  /** Helper CSS classes for state styling */
  classes: MotionTransformClassList
}
`})}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isOpen"})})," — computed property indicating whether the component is open"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isShow"})})," — computed property, ",e.jsx(n.code,{children:"true"})," when the component is visible or in the preparation/transition phase"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"classes"})})," — object with CSS classes to control states and behavior"]}),`
`]}),`
`,e.jsx(n.h3,{id:"motiontransformclasslist",children:"MotionTransformClassList"}),`
`,e.jsx(n.p,{children:"Available CSS classes for styling and controlling behavior:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MotionTransformClassList = {
  /** Component visibility class */
  show: string

  /** Open state class */
  open: string

  /** Window mode class */
  window: string

  /** Click class */
  click: string

  /** Behavior disabling class */
  none: string

  /** Global disabling class */
  noneGlobal: string

  /** Close class */
  close: string
}
`})})]})}function zc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Wi,{...i})}):Wi(i)}function Vi(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
  <MotionTransform v-model:open="isOpen">
    <template #head="{ isOpen, classes }">
      <div :class="classes.click">
        <h3>{{ isOpen ? '▲' : '▼' }} Заголовок</h3>
      </div>
    </template>

    <template #body="{ isShow, classes }">
      <div v-if="isShow" :class="classes.open">
        <p>Основное содержимое</p>
        <button :class="classes.close">Закрыть</button>
      </div>
    </template>
  </MotionTransform>
</template>
`})}),`
`,e.jsx(n.h3,{id:"head",children:e.jsx(n.code,{children:"head"})}),`
`,e.jsx(n.p,{children:"Слот для размещения области заголовка, которая служит триггером для открытия/закрытия компонента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MotionTransformControlItem"})," — объект с данными управления компонентом"]}),`
`]}),`
`,e.jsx(n.h3,{id:"body",children:e.jsx(n.code,{children:"body"})}),`
`,e.jsx(n.p,{children:"Слот для размещения основной области содержимого, которая появляется при открытии компонента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: MotionTransformControlItem"})," — объект с данными управления компонентом"]}),`
`]}),`
`,e.jsx(n.h2,{id:"motiontransformcontrolitem",children:"MotionTransformControlItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MotionTransformControlItem"})," — объект, передаваемый во все слоты компонента MotionTransform, содержащий данные для управления состоянием."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MotionTransformControlItem = {
  /** Состояние открытия компонента */
  isOpen: ComputedRef<boolean>

  /** Видимость или подготовка к показу */
  isShow: ComputedRef<boolean>

  /** Набор вспомогательных CSS-классов для стилизации состояний */
  classes: MotionTransformClassList
}
`})}),`
`,e.jsx(n.h3,{id:"свойства",children:"Свойства"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isOpen"})})," — вычисляемое свойство, указывающее открыт ли компонент"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isShow"})})," — вычисляемое свойство, ",e.jsx(n.code,{children:"true"})," если компонент видим или находится в подготовке к показу (анимация)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"classes"})})," — объект с CSS-классами для управления состояниями и поведением"]}),`
`]}),`
`,e.jsx(n.h3,{id:"motiontransformclasslist",children:"MotionTransformClassList"}),`
`,e.jsx(n.p,{children:"Список доступных CSS-классов для стилизации и управления поведением:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type MotionTransformClassList = {
  /** Класс видимости компонента */
  show: string

  /** Класс открытого состояния */
  open: string

  /** Класс режима окна */
  window: string

  /** Класс клика */
  click: string

  /** Класс отключения поведения */
  none: string

  /** Класс глобального отключения */
  noneGlobal: string

  /** Класс закрытия */
  close: string
}
`})})]})}function Uc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Vi,{...i})}):Vi(i)}function Hi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"state-management-via-v-model",children:"State Management via v-model"}),`
`,e.jsxs(n.p,{children:["Two-way binding of component open state via ",e.jsx(n.code,{children:"v-model:open"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — component open state"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
  <button @click="isOpen = true">Open</button>

  <MotionTransform v-model:open="isOpen">
    <template #head>
      <div>Header</div>
    </template>
    <template #body>
      <p>Component content</p>
      <button @click="isOpen = false">Close</button>
    </template>
  </MotionTransform>
</template>
`})})]})}function Gc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Hi,{...i})}):Hi(i)}function qi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-состоянием-через-v-model",children:"Управление состоянием через v-model"}),`
`,e.jsxs(n.p,{children:["Двусторонняя привязка состояния открытия компонента через ",e.jsx(n.code,{children:"v-model:open"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — состояние открытия компонента"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
  <button @click="isOpen = true">Открыть</button>

  <MotionTransform v-model:open="isOpen">
    <template #head>
      <div>Заголовок</div>
    </template>
    <template #body>
      <p>Содержимое компонента</p>
      <button @click="isOpen = false">Закрыть</button>
    </template>
  </MotionTransform>
</template>
`})})]})}function Kc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(qi,{...i})}):qi(i)}const Jc={name:"MotionTransform",descriptions:{animationHeadPosition:{en:Ic,ru:Tc},classes:{en:Bc,ru:Nc},events:{en:Pc,ru:Oc},"expose.isShow":{en:Ec,ru:Ac},"expose.motionTransformElement":{en:Rc,ru:Wc},ignore:{en:Vc,ru:Hc},motionTransform:{en:qc,ru:Yc},slots:{en:zc,ru:Uc},"v-model":{en:Gc,ru:Kc}}};function Yi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"circular-progress-and-related-parameters",children:"Circular Progress and Related Parameters"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"circular"})," property enables circular progress indicator display mode as a ring indicator. For optimal control over appearance and behavior, it is recommended to use it together with additional properties."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"circular"})," — enables circular progress display mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dense"})," — removes internal padding for compact placement in small elements"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"circular"})," property activates a ring progress indicator that fills around the circumference proportionally to the current value. ",e.jsx(n.code,{children:"dense"})," removes padding, making the indicator more compact for placement in limited space."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Basic circular progress -->
<Progress circular />

<!-- Compact circular progress -->
<Progress circular dense />

<!-- With specific value -->
<Progress circular :value="75" />

<!-- Compact with value -->
<Progress circular dense :value="50" />
`})})]})}function Qc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Yi,{...i})}):Yi(i)}function zi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"круглый-прогресс-и-связанные-параметры",children:"Круглый прогресс и связанные параметры"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"circular"})," включает режим круглого отображения индикатора прогресса в виде кольцевого индикатора. Для оптимального контроля над внешним видом и поведением рекомендуется использовать его совместно с дополнительными свойствами."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"circular"})," — включает режим круглого отображения прогресса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dense"})," — убирает внутренние отступы для компактного размещения в маленьких элементах"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"circular"})," активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению. ",e.jsx(n.code,{children:"dense"})," убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Базовый круглый прогресс -->
<Progress circular />

<!-- Компактный круглый прогресс -->
<Progress circular dense />

<!-- С определенным значением -->
<Progress circular :value="75" />

<!-- Компактный со значением -->
<Progress circular dense :value="50" />
`})})]})}function Zc(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(zi,{...i})}):zi(i)}function Ui(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"progress-delay-management",children:"Progress Delay Management"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"delay"})," and ",e.jsx(n.code,{children:"delayHide"})," properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay"})," — delay before showing the indicator in milliseconds, defaults to ",e.jsx(n.code,{children:"360"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delayHide"})," — delay before hiding the indicator in milliseconds, defaults to ",e.jsx(n.code,{children:"200"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The standard ",e.jsx(n.code,{children:'delay="360"'})," value is proven in practice and suitable for most cases. Increase ",e.jsx(n.code,{children:"delay"})," for rapid operations where the indicator might interfere with perception. Decrease for long operations where immediate feedback is important."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Standard delays -->
<Progress delay="360" delayHide="200" />

<!-- Fast appearance -->
<Progress delay="100" delayHide="200" />

<!-- Slow appearance -->
<Progress delay="800" delayHide="300" />

<!-- No delays -->
<Progress delay="0" delayHide="0" />
`})})]})}function no(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ui,{...i})}):Ui(i)}function Gi(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-задержками-прогресса",children:"Управление задержками прогресса"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"delay"})," и ",e.jsx(n.code,{children:"delayHide"})," контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay"})," — задержка перед показом индикатора в миллисекундах, по умолчанию ",e.jsx(n.code,{children:"360"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delayHide"})," — задержка перед скрытием индикатора в миллисекундах, по умолчанию ",e.jsx(n.code,{children:"200"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Стандартное значение ",e.jsx(n.code,{children:'delay="360"'})," проверено на практике и подходит для большинства случаев. Увеличивайте ",e.jsx(n.code,{children:"delay"})," для очень быстрых операций, где индикатор может помешать восприятию. Уменьшайте для долгих операций, где важна немедленная обратная связь."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Стандартные задержки -->
<Progress delay="360" delayHide="200" />

<!-- Быстрое появление -->
<Progress delay="100" delayHide="200" />

<!-- Медленное появление -->
<Progress delay="800" delayHide="300" />

<!-- Без задержек -->
<Progress delay="0" delayHide="0" />
`})})]})}function eo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Gi,{...i})}):Gi(i)}function Ki(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"linear-progress-and-related-parameters",children:"Linear Progress and Related Parameters"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"linear"})," property enables linear progress indicator display mode as a horizontal bar. For complete control over behavior and appearance, it is recommended to use it together with additional properties."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"linear"})," — enables linear progress display mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"position"})," — defines the indicator position (",e.jsx(n.code,{children:"'top'"}),", ",e.jsx(n.code,{children:"'bottom'"}),", ",e.jsx(n.code,{children:"'static'"}),"), defaults to ",e.jsx(n.code,{children:"'top'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"point"})," — adds a point at the end of the indicator to emphasize the current position"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"linear"})," property activates a horizontal progress bar that fills proportionally to the current value. ",e.jsx(n.code,{children:"position"})," controls the placement: ",e.jsx(n.code,{children:"'top'"})," places it at the top of the container, ",e.jsx(n.code,{children:"'bottom'"})," at the bottom, ",e.jsx(n.code,{children:"'static'"})," in the normal document flow. ",e.jsx(n.code,{children:"point"})," adds a visual marker at the end of the filled portion."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Basic linear progress -->
<Progress linear />

<!-- With bottom positioning -->
<Progress linear position="bottom" />

<!-- With point in static position -->
<Progress linear position="static" point />

<!-- With specific value -->
<Progress linear position="top" point :value="65" />
`})})]})}function io(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ki,{...i})}):Ki(i)}function Ji(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"линейный-прогресс-и-связанные-параметры",children:"Линейный прогресс и связанные параметры"}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"linear"})," включает режим линейного отображения индикатора прогресса в виде горизонтальной полосы. Для полного контроля над поведением и внешним видом рекомендуется использовать его совместно с дополнительными свойствами."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"linear"})," — включает режим линейного отображения прогресса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"position"})," — определяет позицию индикатора (",e.jsx(n.code,{children:"'top'"}),", ",e.jsx(n.code,{children:"'bottom'"}),", ",e.jsx(n.code,{children:"'static'"}),"), по умолчанию ",e.jsx(n.code,{children:"'top'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"point"})," — добавляет точку в конце индикатора для акцентирования текущего положения"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Свойство ",e.jsx(n.code,{children:"linear"})," активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению. ",e.jsx(n.code,{children:"position"})," управляет расположением: ",e.jsx(n.code,{children:"'top'"})," размещает индикатор в верхней части контейнера, ",e.jsx(n.code,{children:"'bottom'"})," — в нижней, ",e.jsx(n.code,{children:"'static'"})," — в обычном потоке документа. ",e.jsx(n.code,{children:"point"})," добавляет визуальный маркер на конце заполненной части."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Базовый линейный прогресс -->
<Progress linear />

<!-- С позиционированием снизу -->
<Progress linear position="bottom" />

<!-- С точкой в статичной позиции -->
<Progress linear position="static" point />

<!-- С определенным значением -->
<Progress linear position="top" point :value="65" />
`})})]})}function so(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ji,{...i})}):Ji(i)}function Qi(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for visual representation of operation progress, data loading, and long-running processes."}),`
`,e.jsx(n.p,{children:"Progress provides flexible options for indicating completion status: linear and circular progress bars, minimalist point indicators. The component automatically manages visibility with customizable appearance and hiding delays, supports both determinate progress values and indeterminate states for operations with unknown completion time."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Linear and circular progress indicators"}),`
`,e.jsx(n.li,{children:"Point variants for minimal display"}),`
`,e.jsx(n.li,{children:"Determinate mode with specific values (0-100%)"}),`
`,e.jsx(n.li,{children:"Indeterminate mode for unknown execution time"}),`
`,e.jsx(n.li,{children:"Flexible positioning (top, bottom, static)"}),`
`,e.jsx(n.li,{children:"Customizable appearance and hiding delays"}),`
`,e.jsx(n.li,{children:"Compact and inverted display modes"}),`
`,e.jsx(n.li,{children:"Automatic visibility management"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Typical Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Indicating data loading from server"}),`
`,e.jsx(n.li,{children:"Displaying file upload progress"}),`
`,e.jsx(n.li,{children:"Visualizing multi-step operation execution"}),`
`,e.jsx(n.li,{children:"Global page loading indicators"}),`
`,e.jsx(n.li,{children:"Progress bars in forms and wizards"}),`
`,e.jsx(n.li,{children:"Background process indication"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function to(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Qi,{...i})}):Qi(i)}function Zi(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для визуального отображения прогресса выполнения операций, загрузки данных и длительных процессов."}),`
`,e.jsx(n.p,{children:"Progress предоставляет гибкие варианты индикации состояния выполнения: линейные и круговые прогресс-бары, минималистичные точечные индикаторы. Компонент автоматически управляет видимостью с настраиваемыми задержками появления и скрытия, поддерживает как определенные значения прогресса, так и неопределенные состояния для операций с неизвестным временем завершения."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Линейные и круговые индикаторы прогресса"}),`
`,e.jsx(n.li,{children:"Точечные варианты для минимального отображения"}),`
`,e.jsx(n.li,{children:"Детерминированный режим с конкретными значениями (0-100%)"}),`
`,e.jsx(n.li,{children:"Индетерминированный режим для неизвестного времени выполнения"}),`
`,e.jsx(n.li,{children:"Гибкое позиционирование (top, bottom, static)"}),`
`,e.jsx(n.li,{children:"Настройка задержек появления и скрытия"}),`
`,e.jsx(n.li,{children:"Компактный и инвертированный режимы отображения"}),`
`,e.jsx(n.li,{children:"Автоматическое управление видимостью"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Индикация загрузки данных с сервера"}),`
`,e.jsx(n.li,{children:"Отображение прогресса загрузки файлов"}),`
`,e.jsx(n.li,{children:"Визуализация выполнения многоэтапных операций"}),`
`,e.jsx(n.li,{children:"Глобальные индикаторы загрузки страницы"}),`
`,e.jsx(n.li,{children:"Прогресс-бары в формах и мастерах"}),`
`,e.jsx(n.li,{children:"Индикация фоновых процессов"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function lo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Zi,{...i})}):Zi(i)}function ns(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"progress-value-management",children:"Progress Value Management"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"max"})," properties work together to determine the state of process execution. They establish the current value and upper limit for calculating the completion percentage of an operation."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — current progress value (what portion of the process has been completed)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max"})," — maximum progress value, defaults to ",e.jsx(n.code,{children:"100"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Completion percentage is calculated automatically: ",e.jsx(n.code,{children:"(value / max) * 100"}),". The ",e.jsx(n.code,{children:"value"})," is automatically constrained to the range from 0 to ",e.jsx(n.code,{children:"max"}),". When ",e.jsx(n.code,{children:"max"})," changes, the percentage display is recalculated proportionally. Use ",e.jsx(n.code,{children:'max="100"'})," for percentage display or set it equal to the actual number of steps in the process."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Standard percentage scale -->
<Progress :value="75" :max="100" />

<!-- File loading progress -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Dynamic updates -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Custom scale -->
<Progress :value="completedTasks" :max="1000" />
`})})]})}function ro(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ns,{...i})}):ns(i)}function es(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-значениями-прогресса",children:"Управление значениями прогресса"}),`
`,e.jsxs(n.p,{children:["Свойства ",e.jsx(n.code,{children:"value"})," и ",e.jsx(n.code,{children:"max"})," работают в связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел для расчета процента завершения операции."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Свойства:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," — текущее значение прогресса (какая часть процесса выполнена)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max"})," — максимальное значение прогресса, по умолчанию ",e.jsx(n.code,{children:"100"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Процент выполнения рассчитывается автоматически: ",e.jsx(n.code,{children:"(value / max) * 100"}),". Значение ",e.jsx(n.code,{children:"value"})," автоматически ограничивается диапазоном от 0 до ",e.jsx(n.code,{children:"max"}),". При изменении ",e.jsx(n.code,{children:"max"})," процентное отображение пересчитывается пропорционально. Используйте ",e.jsx(n.code,{children:'max="100"'})," для процентного отображения или устанавливайте равным реальному количеству шагов в процессе."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Стандартная процентная шкала -->
<Progress :value="75" :max="100" />

<!-- Прогресс загрузки файлов -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Динамическое обновление -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Пользовательская шкала -->
<Progress :value="completedTasks" :max="1000" />
`})})]})}function co(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(es,{...i})}):es(i)}const oo={name:"Progress",descriptions:{circular:{en:Qc,ru:Zc},delays:{en:no,ru:eo},linear:{en:io,ru:so},progress:{en:to,ru:lo},values:{en:ro,ru:co}}};function is(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for creating animated wave effect on element click."}),`
`,e.jsx(n.p,{children:"Ripple provides visual feedback during user interaction with interactive elements, automatically tracking clicks and generating an animated wave expanding from the touch point. The effect enhances user experience by making the interface more responsive and modern."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Automatic click event tracking"}),`
`,e.jsx(n.li,{children:"Wave animation from touch point"}),`
`,e.jsxs(n.li,{children:["Control via ",e.jsx(n.code,{children:"disabled"})," property"]}),`
`,e.jsx(n.li,{children:"Automatic animation removal after completion"}),`
`,e.jsx(n.li,{children:"Support for any interactive elements"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Buttons and links"}),`
`,e.jsx(n.li,{children:"Cards and lists"}),`
`,e.jsx(n.li,{children:"Toggles and checkboxes"}),`
`,e.jsx(n.li,{children:"Menu and navigation elements"}),`
`,e.jsx(n.li,{children:"Interactive icons"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
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
`})})]})}function ao(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(is,{...i})}):is(i)}function ss(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания анимированного эффекта волны при клике на элемент."}),`
`,e.jsx(n.p,{children:"Ripple создает визуальную обратную связь при взаимодействии пользователя с интерактивными элементами, автоматически отслеживая клики и генерируя анимированную волну, расширяющуюся от точки касания. Эффект улучшает пользовательский опыт, делая интерфейс более отзывчивым и современным."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Автоматическое отслеживание событий клика"}),`
`,e.jsx(n.li,{children:"Анимация волны от точки касания"}),`
`,e.jsxs(n.li,{children:["Управление через свойство ",e.jsx(n.code,{children:"disabled"})]}),`
`,e.jsx(n.li,{children:"Автоматическое удаление анимации после завершения"}),`
`,e.jsx(n.li,{children:"Поддержка любых интерактивных элементов"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Кнопки и ссылки"}),`
`,e.jsx(n.li,{children:"Карточки и списки"}),`
`,e.jsx(n.li,{children:"Переключатели и чекбоксы"}),`
`,e.jsx(n.li,{children:"Элементы меню и навигации"}),`
`,e.jsx(n.li,{children:"Интерактивные иконки"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
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
`})})]})}function ho(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ss,{...i})}):ss(i)}const xo={name:"Ripple",descriptions:{ripple:{en:ao,ru:ho}}};function ts(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"top",children:e.jsx(n.code,{children:"top"})}),`
`,e.jsx(n.p,{children:"Event fires when the top scroll boundary state changes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the top position"]}),`
`]}),`
`,e.jsx(n.h3,{id:"reachtop",children:e.jsx(n.code,{children:"reachTop"})}),`
`,e.jsx(n.p,{children:"Event fires when the top scroll boundary is reached."}),`
`,e.jsx(n.h3,{id:"leavetop",children:e.jsx(n.code,{children:"leaveTop"})}),`
`,e.jsx(n.p,{children:"Event fires when leaving the top scroll boundary."}),`
`,e.jsx(n.h3,{id:"bottom",children:e.jsx(n.code,{children:"bottom"})}),`
`,e.jsx(n.p,{children:"Event fires when the bottom scroll boundary state changes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the bottom position"]}),`
`]}),`
`,e.jsx(n.h3,{id:"reachbottom",children:e.jsx(n.code,{children:"reachBottom"})}),`
`,e.jsx(n.p,{children:"Event fires when the bottom scroll boundary is reached."}),`
`,e.jsx(n.h3,{id:"leavebottom",children:e.jsx(n.code,{children:"leaveBottom"})}),`
`,e.jsx(n.p,{children:"Event fires when leaving the bottom scroll boundary."}),`
`,e.jsx(n.h3,{id:"edge",children:e.jsx(n.code,{children:"edge"})}),`
`,e.jsx(n.p,{children:"Event fires when any scroll boundary state changes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the top position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the bottom position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"edge: 'top' | 'bottom'"})," — type of boundary that changed"]}),`
`]})]})}function jo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ts,{...i})}):ts(i)}function ls(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"top",children:e.jsx(n.code,{children:"top"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния достижения верхней границы скролла."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в верхней позиции"]}),`
`]}),`
`,e.jsx(n.h3,{id:"reachtop",children:e.jsx(n.code,{children:"reachTop"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при достижении верхней границы скролла."}),`
`,e.jsx(n.h3,{id:"leavetop",children:e.jsx(n.code,{children:"leaveTop"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при покидании верхней границы скролла."}),`
`,e.jsx(n.h3,{id:"bottom",children:e.jsx(n.code,{children:"bottom"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния достижения нижней границы скролла."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в нижней позиции"]}),`
`]}),`
`,e.jsx(n.h3,{id:"reachbottom",children:e.jsx(n.code,{children:"reachBottom"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при достижении нижней границы скролла."}),`
`,e.jsx(n.h3,{id:"leavebottom",children:e.jsx(n.code,{children:"leaveBottom"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при покидании нижней границы скролла."}),`
`,e.jsx(n.h3,{id:"edge",children:e.jsx(n.code,{children:"edge"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния любой из границ скролла."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в верхней позиции"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в нижней позиции"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"edge: 'top' | 'bottom'"})," — тип границы, которая изменилась"]}),`
`]})]})}function po(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ls,{...i})}):ls(i)}function rs(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"scrollbartop",children:e.jsx(n.code,{children:"scrollbarTop"})}),`
`,e.jsx(n.p,{children:"Event fires when the top scroll boundary state changes (for use in parent components)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the top position"]}),`
`]}),`
`,e.jsx(n.h3,{id:"scrollbarreachtop",children:e.jsx(n.code,{children:"scrollbarReachTop"})}),`
`,e.jsx(n.p,{children:"Event fires when the top scroll boundary is reached (for use in parent components)."}),`
`,e.jsx(n.h3,{id:"scrollbarleavetop",children:e.jsx(n.code,{children:"scrollbarLeaveTop"})}),`
`,e.jsx(n.p,{children:"Event fires when leaving the top scroll boundary (for use in parent components)."}),`
`,e.jsx(n.h3,{id:"scrollbarbottom",children:e.jsx(n.code,{children:"scrollbarBottom"})}),`
`,e.jsx(n.p,{children:"Event fires when the bottom scroll boundary state changes (for use in parent components)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the bottom position"]}),`
`]}),`
`,e.jsx(n.h3,{id:"scrollbarreachbottom",children:e.jsx(n.code,{children:"scrollbarReachBottom"})}),`
`,e.jsx(n.p,{children:"Event fires when the bottom scroll boundary is reached (for use in parent components)."}),`
`,e.jsx(n.h3,{id:"scrollbarleavebottom",children:e.jsx(n.code,{children:"scrollbarLeaveBottom"})}),`
`,e.jsx(n.p,{children:"Event fires when leaving the bottom scroll boundary (for use in parent components)."}),`
`,e.jsx(n.h3,{id:"scrollbaredge",children:e.jsx(n.code,{children:"scrollbarEdge"})}),`
`,e.jsx(n.p,{children:"Event fires when any scroll boundary state changes (for use in parent components)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the top position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"})," if scroll is at the bottom position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"edge: 'top' | 'bottom'"})," — type of boundary that changed"]}),`
`]})]})}function uo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(rs,{...i})}):rs(i)}function cs(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"scrollbartop",children:e.jsx(n.code,{children:"scrollbarTop"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния достижения верхней границы скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в верхней позиции"]}),`
`]}),`
`,e.jsx(n.h3,{id:"scrollbarreachtop",children:e.jsx(n.code,{children:"scrollbarReachTop"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при достижении верхней границы скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.h3,{id:"scrollbarleavetop",children:e.jsx(n.code,{children:"scrollbarLeaveTop"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при покидании верхней границы скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.h3,{id:"scrollbarbottom",children:e.jsx(n.code,{children:"scrollbarBottom"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния достижения нижней границы скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в нижней позиции"]}),`
`]}),`
`,e.jsx(n.h3,{id:"scrollbarreachbottom",children:e.jsx(n.code,{children:"scrollbarReachBottom"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при достижении нижней границы скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.h3,{id:"scrollbarleavebottom",children:e.jsx(n.code,{children:"scrollbarLeaveBottom"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при покидании нижней границы скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.h3,{id:"scrollbaredge",children:e.jsx(n.code,{children:"scrollbarEdge"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния любой из границ скролла (для использования в родительских компонентах)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isTop: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в верхней позиции"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBottom: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если скролл находится в нижней позиции"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"edge: 'top' | 'bottom'"})," — тип границы, которая изменилась"]}),`
`]})]})}function mo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(cs,{...i})}):cs(i)}function os(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for customizing scrollbar appearance and managing visual dividers at scrollable area boundaries."}),`
`,e.jsx(n.p,{children:"Scrollbar hides the browser's standard scrollbar and provides visual feedback when reaching the top or bottom of content through divider lines. The component automatically detects scrollbar width and adapts display for systems without visible scrollbars (e.g., macOS with trackpad)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hide browser's standard scrollbar"}),`
`,e.jsx(n.li,{children:"Display dividers when reaching content boundaries"}),`
`,e.jsx(n.li,{children:"Independent control of top and bottom dividers"}),`
`,e.jsx(n.li,{children:"Inversion of divider display logic"}),`
`,e.jsx(n.li,{children:"Events for tracking scroll position"}),`
`,e.jsxs(n.li,{children:["Support for infinite scroll via ",e.jsx(n.code,{children:"reachBottom"})," events"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lists with data loading on scroll"}),`
`,e.jsx(n.li,{children:"Modal windows and dropdown menus with scrollable content"}),`
`,e.jsx(n.li,{children:"Fixed-height areas with vertical scrolling"}),`
`,e.jsx(n.li,{children:"Visual content separation during scrolling"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function go(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(os,{...i})}):os(i)}function ds(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для кастомизации внешнего вида полосы прокрутки и управления визуальными разделителями на границах прокручиваемой области."}),`
`,e.jsx(n.p,{children:"Scrollbar скрывает стандартную полосу прокрутки браузера и предоставляет визуальную обратную связь при достижении верхней или нижней границы контента через разделительные линии. Компонент автоматически определяет ширину скроллбара и адаптирует отображение для систем без видимых полос прокрутки (например, macOS с трекпадом)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Скрытие стандартной полосы прокрутки браузера"}),`
`,e.jsx(n.li,{children:"Отображение разделителей при достижении границ контента"}),`
`,e.jsx(n.li,{children:"Независимое управление верхним и нижним разделителями"}),`
`,e.jsx(n.li,{children:"Инверсия логики отображения разделителей"}),`
`,e.jsx(n.li,{children:"События для отслеживания позиции скролла"}),`
`,e.jsxs(n.li,{children:["Поддержка бесконечной прокрутки через события ",e.jsx(n.code,{children:"reachBottom"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Списки с подгрузкой данных при скролле"}),`
`,e.jsx(n.li,{children:"Модальные окна и выпадающие меню с прокручиваемым содержимым"}),`
`,e.jsx(n.li,{children:"Области с фиксированной высотой и вертикальной прокруткой"}),`
`,e.jsx(n.li,{children:"Визуальное разделение контента при прокрутке"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function fo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ds,{...i})}):ds(i)}const vo={name:"Scrollbar",descriptions:{emits:{en:jo,ru:po},"emits-include":{en:uo,ru:mo},scrollbar:{en:go,ru:fo}}};function as(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for creating animated interface placeholders during content loading."}),`
`,e.jsxs(n.p,{children:["Skeleton provides smooth transitions between loading state and real content display. The component automatically manages child element visibility through the ",e.jsx(n.code,{children:"active"})," property and supports a CSS class system for creating various types of placeholders."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Automatic content visibility management"}),`
`,e.jsx(n.li,{children:"Support for special CSS classes for placeholders"}),`
`,e.jsxs(n.li,{children:["Component integration via ",e.jsx(n.code,{children:"isSkeleton"})," flag"]}),`
`,e.jsx(n.li,{children:"Flexible placeholder types (text, background, borders)"}),`
`,e.jsx(n.li,{children:"Animated loading effects"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Product and user card placeholders"}),`
`,e.jsx(n.li,{children:"List and table skeletons"}),`
`,e.jsx(n.li,{children:"Image and avatar placeholders"}),`
`,e.jsx(n.li,{children:"Text blocks during loading"}),`
`,e.jsx(n.li,{children:"Complex forms with multiple fields"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function bo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(as,{...i})}):as(i)}function hs(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания анимированных заглушек интерфейса во время загрузки контента."}),`
`,e.jsxs(n.p,{children:["Skeleton обеспечивает плавный переход между состоянием загрузки и отображением реального контента. Компонент автоматически управляет видимостью дочерних элементов через свойство ",e.jsx(n.code,{children:"active"})," и поддерживает систему CSS-классов для создания различных типов заглушек."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Автоматическое управление видимостью контента"}),`
`,e.jsx(n.li,{children:"Поддержка специальных CSS-классов для заглушек"}),`
`,e.jsxs(n.li,{children:["Работа с компонентами через флаг ",e.jsx(n.code,{children:"isSkeleton"})]}),`
`,e.jsx(n.li,{children:"Гибкая настройка типов заглушек (текст, фон, границы)"}),`
`,e.jsx(n.li,{children:"Анимированные эффекты загрузки"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Заглушки карточек товаров и пользователей"}),`
`,e.jsx(n.li,{children:"Скелетоны списков и таблиц"}),`
`,e.jsx(n.li,{children:"Заглушки изображений и аватаров"}),`
`,e.jsx(n.li,{children:"Текстовые блоки во время загрузки"}),`
`,e.jsx(n.li,{children:"Сложные формы с множественными полями"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function yo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(hs,{...i})}):hs(i)}function xs(i){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsx(n.p,{children:"Computed property that provides access to the current activation state of the skeleton."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose:"})," Reflects the current state of the component's ",e.jsx(n.code,{children:"active"})," property. Useful for synchronizing state with parent components and programmatically controlling behavior of other elements."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <Skeleton ref="skeletonRef" :active="isLoading">
    <div class="skeleton__text">Loading content</div>
  </Skeleton>

  <p v-if="skeletonRef?.isActive">Loading...</p>
</template>

<script setup>
import { ref } from 'vue'

const skeletonRef = ref()
const isLoading = ref(true)
<\/script>
`})})]})}function wo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(xs,{...i})}):xs(i)}function js(i){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsx(n.p,{children:"Вычисляемое свойство, которое предоставляет доступ к текущему состоянию активности скелетона."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Назначение:"})," Отражает текущее состояние свойства ",e.jsx(n.code,{children:"active"})," компонента. Полезно для синхронизации состояния с родительскими компонентами и программного управления поведением других элементов."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <Skeleton ref="skeletonRef" :active="isLoading">
    <div class="skeleton__text">Загрузка контента</div>
  </Skeleton>

  <p v-if="skeletonRef?.isActive">Загрузка...</p>
</template>

<script setup>
import { ref } from 'vue'

const skeletonRef = ref()
const isLoading = ref(true)
<\/script>
`})})]})}function Mo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(js,{...i})}):js(i)}function ps(i){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"css-classes-for-display-control",children:"CSS Classes for Display Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__text"})," — main class for text skeleton"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__textVariant"})," — text class variant for additional styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__background"})," — main background class for skeleton"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backgroundAfter"})," — background class for ",e.jsx(n.code,{children:"::after"})," pseudo-element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backgroundBefore"})," — background class for ",e.jsx(n.code,{children:"::before"})," pseudo-element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backgroundVariant"})," — background class variant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__border"})," — class for skeleton border styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__borderVariant"})," — border class variant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__none"})," — class to disable skeleton display"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"*"})," is the component class name (e.g., ",e.jsx(n.code,{children:"d1-skeleton"}),", ",e.jsx(n.code,{children:"m3-skeleton"}),")."]})]})}function Co(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ps,{...i})}):ps(i)}function us(i){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"css-классы-для-управления-отображением",children:"CSS классы для управления отображением"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__text"})," — основной класс для текстового скелета"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__textVariant"})," — вариант текстового класса для дополнительной стилизации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__background"})," — основной фоновый класс скелета"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backgroundAfter"})," — фоновый класс для псевдоэлемента ",e.jsx(n.code,{children:"::after"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backgroundBefore"})," — фоновый класс для псевдоэлемента ",e.jsx(n.code,{children:"::before"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__backgroundVariant"})," — вариант фонового класса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__border"})," — класс для стилизации границ скелета"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__borderVariant"})," — вариант класса границ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*__none"})," — класс для отключения отображения скелета"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Где ",e.jsx(n.code,{children:"*"})," — название класса компонента (например, ",e.jsx(n.code,{children:"d1-skeleton"}),", ",e.jsx(n.code,{children:"m3-skeleton"}),")."]})]})}function ko(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(us,{...i})}):us(i)}const Do={name:"Skeleton",descriptions:{active:{en:bo,ru:yo},"expose.isActive":{en:wo,ru:Mo},classes:{en:Co,ru:ko}}};function ms(i){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"positioning-direction-axis",children:"Positioning Direction (axis)"}),`
`,e.jsxs(n.p,{children:["Controls the axis of window placement relative to the anchor element. Default: ",e.jsx(n.code,{children:"y"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Applies only in menu mode (",e.jsx(n.code,{children:'adaptive="menu"'})," or ",e.jsx(n.code,{children:'adaptive="menuWindow"'}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'x'"})," — horizontal axis (left or right of anchor)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'y'"})," — vertical axis (top or bottom of anchor)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'on'"})," — over anchor (window centers on element)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component automatically selects the placement side with the most available space"}),`
`,e.jsxs(n.li,{children:["When using context menu (",e.jsx(n.code,{children:"contextmenu"}),"), positioning occurs from cursor coordinates"]}),`
`,e.jsx(n.li,{children:"Window always stays within visible screen area (viewport)"}),`
`,e.jsxs(n.li,{children:["Indent from anchor is set via ",e.jsx(n.code,{children:"indent"})," property (default 4px)"]}),`
`]})]})}function _o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ms,{...i})}):ms(i)}function gs(i){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"направление-позиционирования-axis",children:"Направление позиционирования (axis)"}),`
`,e.jsxs(n.p,{children:["Управляет осью размещения окна относительно элемента-якоря. По умолчанию: ",e.jsx(n.code,{children:"y"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Применяется только в режиме меню (",e.jsx(n.code,{children:'adaptive="menu"'})," или ",e.jsx(n.code,{children:'adaptive="menuWindow"'}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'x'"})," — горизонтальная ось (слева или справа от якоря)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'y'"})," — вертикальная ось (сверху или снизу от якоря)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'on'"})," — поверх якоря (окно центрируется над элементом)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"поведение",children:"Поведение"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Компонент автоматически выбирает сторону размещения с наибольшим доступным пространством"}),`
`,e.jsxs(n.li,{children:["При использовании контекстного меню (",e.jsx(n.code,{children:"contextmenu"}),") позиционирование происходит от координат курсора"]}),`
`,e.jsx(n.li,{children:"Окно всегда остается в пределах видимой области экрана (viewport)"}),`
`,e.jsxs(n.li,{children:["Отступ от якоря задается через свойство ",e.jsx(n.code,{children:"indent"})," (по умолчанию 4px)"]}),`
`]})]})}function Fo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(gs,{...i})}):gs(i)}function fs(i){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"css-classes-for-behavior-control",children:"CSS Classes for Behavior Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--block"})," — prevents window from closing when clicking outside its boundaries"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--blockChildren"})," — prevents current window from closing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--blockOther"})," — prevents other windows from closing until current one is closed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--close"})," — applies to elements for closing the window"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--controlOpenOnly"})," — applies to control elements that only open the window"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--controlStatic"})," — applies to control elements in static mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--static"})," — applies to elements inside window, canceling all actions"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"*"})," is the component class name (e.g., ",e.jsx(n.code,{children:"d1-window"}),", ",e.jsx(n.code,{children:"m3-window"}),")."]})]})}function So(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(fs,{...i})}):fs(i)}function vs(i){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"css-классы-для-управления-поведением",children:"CSS классы для управления поведением"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--block"})," — предотвращает закрытие окна при клике вне его границ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--blockChildren"})," — предотвращает закрытие текущего окна"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--blockOther"})," — предотвращает закрытие других окон до закрытия текущего"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--close"})," — применяется к элементам для закрытия окна"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--controlOpenOnly"})," — применяется к элементам управления, которые только открывают окно"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--controlStatic"})," — применяется к элементам управления в статическом режим��"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"*--static"})," — применяется к элементам внутри окна, отменяя все действия"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Где ",e.jsx(n.code,{children:"*"})," — название класса компонента (например, ",e.jsx(n.code,{children:"d1-window"}),", ",e.jsx(n.code,{children:"m3-window"}),")."]})]})}function Lo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(vs,{...i})}):vs(i)}function bs(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"window",children:e.jsx(n.code,{children:"window"})}),`
`,e.jsx(n.p,{children:"Event fires when the window state changes (open/close)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: WindowEmitOptions"})," — object with window data"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"WindowEmitOptions structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id: string"})," — unique window identifier"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: HTMLDivElement"})," — window DOM element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"control: HTMLElement"})," — control DOM element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — window open state (",e.jsx(n.code,{children:"true"})," - open, ",e.jsx(n.code,{children:"false"})," - closed)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
const handleWindow = (options) => {
  console.log('Window ID:', options.id)
  console.log('Window is open:', options.open)
  console.log('Window element:', options.element)
  console.log('Control element:', options.control)
}
<\/script>

<template>
  <Window @window="handleWindow">
    <template #default>
      <p>Window content</p>
    </template>
  </Window>
</template>
`})})]})}function Xo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(bs,{...i})}):bs(i)}function ys(i){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"window",children:e.jsx(n.code,{children:"window"})}),`
`,e.jsx(n.p,{children:"Событие срабатывает при изменении состояния окна (открытие/закрытие)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: WindowEmitOptions"})," — объект с данными окна"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Структура WindowEmitOptions:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id: string"})," — уникальный идентификатор окна"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: HTMLDivElement"})," — DOM элемент окна"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"control: HTMLElement"})," — DOM элемент управления"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — состояние открытия окна (",e.jsx(n.code,{children:"true"})," - открыто, ",e.jsx(n.code,{children:"false"})," - закрыто)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
const handleWindow = (options) => {
  console.log('ID окна:', options.id)
  console.log('Окно открыто:', options.open)
  console.log('Элемент окна:', options.element)
  console.log('Элемент управления:', options.control)
}
<\/script>

<template>
  <Window @window="handleWindow">
    <template #default>
      <p>Содержимое окна</p>
    </template>
  </Window>
</template>
`})})]})}function $o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ys,{...i})}):ys(i)}function ws(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"id",children:e.jsx(n.code,{children:"id"})}),`
`,e.jsx(n.p,{children:"Unique identifier of the window."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsx(n.p,{children:"Reactive state of window visibility."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<boolean>"})]}),`
`,e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Control item data for window management."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"WindowControlItem"})]}),`
`,e.jsx(n.h3,{id:"setopen",children:e.jsx(n.code,{children:"setOpen"})}),`
`,e.jsx(n.p,{children:"Sets window open state."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — new window visibility state"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"toopen",children:e.jsx(n.code,{children:"toOpen"})}),`
`,e.jsx(n.p,{children:"Transition to opening state."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"toclose",children:e.jsx(n.code,{children:"toClose"})}),`
`,e.jsx(n.p,{children:"Transition to closing state."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"toggle",children:e.jsx(n.code,{children:"toggle"})}),`
`,e.jsx(n.p,{children:"Toggles window visibility (opens if closed, closes if open)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})]})]})}function Io(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ws,{...i})}):ws(i)}function Ms(i){const n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"id",children:e.jsx(n.code,{children:"id"})}),`
`,e.jsx(n.p,{children:"Уникальный идентификатор окна."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsx(n.p,{children:"Реактивное состояние видимости окна."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<boolean>"})]}),`
`,e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Данные элемента управления для управления окном."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"WindowControlItem"})]}),`
`,e.jsx(n.h3,{id:"setopen",children:e.jsx(n.code,{children:"setOpen"})}),`
`,e.jsx(n.p,{children:"Устанавливает состояние открытия окна."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — новое состояние видимости окна"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"toopen",children:e.jsx(n.code,{children:"toOpen"})}),`
`,e.jsx(n.p,{children:"Переход в состояние открытия окна."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"toclose",children:e.jsx(n.code,{children:"toClose"})}),`
`,e.jsx(n.p,{children:"Переход в состояние закрытия окна."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"toggle",children:e.jsx(n.code,{children:"toggle"})}),`
`,e.jsx(n.p,{children:"Переключает видимость окна (открывает, если закрыто, и закрывает, если открыто)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<void>"})]})]})}function To(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ms,{...i})}):Ms(i)}function Cs(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"lifecycle-hooks",children:"Lifecycle Hooks"}),`
`,e.jsx(n.h3,{id:"preparation",children:e.jsx(n.code,{children:"preparation"})}),`
`,e.jsx(n.p,{children:"Called before the opening/closing process begins. Used for preparing elements and data."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => void | Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"beforeopening",children:e.jsx(n.code,{children:"beforeOpening"})}),`
`,e.jsxs(n.p,{children:["Called before opening the window. Returning ",e.jsx(n.code,{children:"false"})," cancels opening."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]}),`
`,e.jsx(n.h3,{id:"beforeclosing",children:e.jsx(n.code,{children:"beforeClosing"})}),`
`,e.jsxs(n.p,{children:["Called before closing the window. Returning ",e.jsx(n.code,{children:"false"})," cancels closing."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]}),`
`,e.jsx(n.h3,{id:"opening",children:e.jsx(n.code,{children:"opening"})}),`
`,e.jsx(n.p,{children:"Called after the window finishes opening (after animation)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]}),`
`,e.jsx(n.h3,{id:"closing",children:e.jsx(n.code,{children:"closing"})}),`
`,e.jsx(n.p,{children:"Called after the window finishes closing (after animation)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]})]})}function Bo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Cs,{...i})}):Cs(i)}function ks(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"хуки-жизненного-цикла",children:"Хуки жизненного цикла"}),`
`,e.jsx(n.h3,{id:"preparation",children:e.jsx(n.code,{children:"preparation"})}),`
`,e.jsx(n.p,{children:"Вызывается перед началом процесса открытия/закрытия. Используется для подготовки элементов и данных."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => void | Promise<void>"})]}),`
`,e.jsx(n.h3,{id:"beforeopening",children:e.jsx(n.code,{children:"beforeOpening"})}),`
`,e.jsxs(n.p,{children:["Вызывается перед открытием окна. Возврат ",e.jsx(n.code,{children:"false"})," отменяет открытие."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]}),`
`,e.jsx(n.h3,{id:"beforeclosing",children:e.jsx(n.code,{children:"beforeClosing"})}),`
`,e.jsxs(n.p,{children:["Вызывается перед закрытием окна. Возврат ",e.jsx(n.code,{children:"false"})," отменяет закрытие."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]}),`
`,e.jsx(n.h3,{id:"opening",children:e.jsx(n.code,{children:"opening"})}),`
`,e.jsx(n.p,{children:"Вызывается после завершения открытия окна (после анимации)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]}),`
`,e.jsx(n.h3,{id:"closing",children:e.jsx(n.code,{children:"closing"})}),`
`,e.jsx(n.p,{children:"Вызывается после завершения закрытия окна (после анимации)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => boolean | Promise<boolean>"})]})]})}function No(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ks,{...i})}):ks(i)}function Ds(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Window>
  <template #control="{ binds }">
    <button v-bind="binds">Toggle Window</button>
  </template>

  <template #title>
    <h2>Window Title</h2>
  </template>

  <template #default>
    <p>Main window content goes here</p>
  </template>

  <template #footer="{ onclick }">
    <button @click="onclick">Close</button>
  </template>
</Window>
`})}),`
`,e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Slot for placing window control elements (close buttons, minimize, etc.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — object with window control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"title",children:e.jsx(n.code,{children:"title"})}),`
`,e.jsx(n.p,{children:"Slot for placing window title in the header."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — object with window control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"footer",children:e.jsx(n.code,{children:"footer"})}),`
`,e.jsx(n.p,{children:"Slot for placing content at the bottom of the window (action buttons, info, etc.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — object with window control data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Main slot for placing the primary window content."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — object with window control data"]}),`
`]}),`
`,e.jsx(n.h2,{id:"windowcontrolitem",children:"WindowControlItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WindowControlItem"})," — object passed to all Window component slots, containing data for window management."]}),`
`,e.jsx(n.h3,{id:"type-structure",children:"Type Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type WindowControlItem = {
  /** Window CSS classes list */
  classesWindow: WindowClassesList

  /** CSS class string for control element */
  class: string

  /** Reactive window open state */
  open: Ref<boolean>

  /** Click event handler */
  onclick: (event: MouseEvent & TouchEvent) => Promise<void>

  /** Context menu event handler */
  oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>

  /** Binding properties for elements */
  binds: {
    class: string
    onclick: (event: MouseEvent & TouchEvent) => Promise<void>
    oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>
  }
}
`})}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(n.h4,{id:"classeswindow",children:e.jsx(n.code,{children:"classesWindow"})}),`
`,e.jsx(n.p,{children:"Object with CSS classes for different window states:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"block"})," — interaction blocking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blockChildren"})," — block child elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blockOther"})," — block other windows"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"close"})," — close window class"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static"})," — static positioning"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"control"})," — control element class"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlId"})," — control ID class"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlStatic"})," — static control"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlOpenOnly"})," — control only when open"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlActive"})," — active control"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"persistent"})," — persistent window"]}),`
`]}),`
`,e.jsx(n.h4,{id:"class",children:e.jsx(n.code,{children:"class"})}),`
`,e.jsx(n.p,{children:"CSS class string to apply to the control element."}),`
`,e.jsx(n.h4,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsxs(n.p,{children:["Reactive variable (",e.jsx(n.code,{children:"Ref<boolean>"}),") containing the current window visibility state."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ open }">
  <span>{{ open ? 'Open' : 'Closed' }}</span>
</template>
`})}),`
`,e.jsx(n.h4,{id:"onclick",children:e.jsx(n.code,{children:"onclick"})}),`
`,e.jsx(n.p,{children:"Click handler function for managing window open/close."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ onclick }">
  <button @click="onclick">Toggle</button>
</template>
`})}),`
`,e.jsx(n.h4,{id:"oncontextmenu",children:e.jsx(n.code,{children:"oncontextmenu"})}),`
`,e.jsx(n.p,{children:"Right-click (context menu) handler function for window management."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ oncontextmenu }">
  <button @contextmenu="oncontextmenu">Context Menu</button>
</template>
`})}),`
`,e.jsx(n.h4,{id:"binds",children:e.jsx(n.code,{children:"binds"})}),`
`,e.jsx(n.p,{children:"Object with properties for binding to elements:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ binds }">
  <button v-bind="binds">Window Control</button>
</template>
`})}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Window>
  <template #control="{ classesWindow, open, onclick }">
    <div :class="classesWindow.control">
      <button @click="onclick">
        {{ open ? 'Close' : 'Open' }}
      </button>
    </div>
  </template>

  <template #title="{ open }">
    <h2>Window Title ({{ open ? 'open' : 'closed' }})</h2>
  </template>

  <template #default>
    <p>Main window content</p>
  </template>

  <template #footer="{ onclick }">
    <button @click="onclick">Close Window</button>
  </template>
</Window>
`})})]})}function Po(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ds,{...i})}):Ds(i)}function _s(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Window>
  <template #control="{ binds }">
    <button v-bind="binds">Переключить окно</button>
  </template>

  <template #title>
    <h2>Заголовок окна</h2>
  </template>

  <template #default>
    <p>Основное содержимое окна</p>
  </template>

  <template #footer="{ onclick }">
    <button @click="onclick">Закрыть</button>
  </template>
</Window>
`})}),`
`,e.jsx(n.h3,{id:"control",children:e.jsx(n.code,{children:"control"})}),`
`,e.jsx(n.p,{children:"Слот для размещения элементов управления окном (кнопки закрытия, минимизации и т.д.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — объект с данными управления окном"]}),`
`]}),`
`,e.jsx(n.h3,{id:"title",children:e.jsx(n.code,{children:"title"})}),`
`,e.jsx(n.p,{children:"Слот для размещения заголовка окна в шапке."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — объект с данными управления окном"]}),`
`]}),`
`,e.jsx(n.h3,{id:"footer",children:e.jsx(n.code,{children:"footer"})}),`
`,e.jsx(n.p,{children:"Слот для размещения содержимого в нижней части окна (кнопки действий, информация и т.д.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — объект с данными управления окном"]}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.p,{children:"Основной слот для размещения главного содержимого окна."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: WindowControlItem"})," — объект с данными управления окном"]}),`
`]}),`
`,e.jsx(n.h2,{id:"windowcontrolitem",children:"WindowControlItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WindowControlItem"})," — объект, передаваемый во все слоты компонента Window, содержащий данные для управления окном."]}),`
`,e.jsx(n.h3,{id:"структура-типа",children:"Структура типа"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type WindowControlItem = {
  /** Список CSS классов окна */
  classesWindow: WindowClassesList

  /** Строка CSS класса для элемента управления */
  class: string

  /** Реактивное состояние открытия окна */
  open: Ref<boolean>

  /** Обработчик события клика */
  onclick: (event: MouseEvent & TouchEvent) => Promise<void>

  /** Обработчик события контекстного меню */
  oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>

  /** Свойства привязки для элементов */
  binds: {
    class: string
    onclick: (event: MouseEvent & TouchEvent) => Promise<void>
    oncontextmenu: (event: MouseEvent & TouchEvent) => Promise<void>
  }
}
`})}),`
`,e.jsx(n.h3,{id:"свойства",children:"Свойства"}),`
`,e.jsx(n.h4,{id:"classeswindow",children:e.jsx(n.code,{children:"classesWindow"})}),`
`,e.jsx(n.p,{children:"Объект с CSS классами для различных состояний окна:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"block"})," — блокировка взаимодействия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blockChildren"})," — блокировка дочерних элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blockOther"})," — блокировка других окон"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"close"})," — класс для закрытия окна"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static"})," — статическое позиционирование"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"control"})," — класс элемента управления"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlId"})," — класс ID управления"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlStatic"})," — статическое управление"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlOpenOnly"})," — управление только когда открыто"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlActive"})," — активное управление"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"persistent"})," — постоянное окно"]}),`
`]}),`
`,e.jsx(n.h4,{id:"class",children:e.jsx(n.code,{children:"class"})}),`
`,e.jsx(n.p,{children:"Строка CSS класса для применения к элементу управления."}),`
`,e.jsx(n.h4,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsxs(n.p,{children:["Реактивная переменная (",e.jsx(n.code,{children:"Ref<boolean>"}),"), содержащая текущее состояние видимости окна."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ open }">
  <span>{{ open ? 'Открыто' : 'Закрыто' }}</span>
</template>
`})}),`
`,e.jsx(n.h4,{id:"onclick",children:e.jsx(n.code,{children:"onclick"})}),`
`,e.jsx(n.p,{children:"Функция-обработчик клика для управления открытием/закрытием окна."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ onclick }">
  <button @click="onclick">Переключить</button>
</template>
`})}),`
`,e.jsx(n.h4,{id:"oncontextmenu",children:e.jsx(n.code,{children:"oncontextmenu"})}),`
`,e.jsx(n.p,{children:"Функция-обработчик правого клика (контекстного меню) для управления окном."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ oncontextmenu }">
  <button @contextmenu="oncontextmenu">Контекстное меню</button>
</template>
`})}),`
`,e.jsx(n.h4,{id:"binds",children:e.jsx(n.code,{children:"binds"})}),`
`,e.jsx(n.p,{children:"Объект со свойствами для привязки к элементам:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template #control="{ binds }">
  <button v-bind="binds">Управление окном</button>
</template>
`})}),`
`,e.jsx(n.h3,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Window>
  <template #control="{ classesWindow, open, onclick }">
    <div :class="classesWindow.control">
      <button @click="onclick">
        {{ open ? 'Закрыть' : 'Открыть' }}
      </button>
    </div>
  </template>

  <template #title="{ open }">
    <h2>Заголовок окна ({{ open ? 'открыто' : 'закрыто' }})</h2>
  </template>

  <template #default>
    <p>Основное содержимое окна</p>
  </template>

  <template #footer="{ onclick }">
    <button @click="onclick">Закрыть окно</button>
  </template>
</Window>
`})})]})}function Oo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(_s,{...i})}):_s(i)}function Fs(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"static-mode-staticmode",children:"Static Mode (staticMode)"}),`
`,e.jsxs(n.p,{children:["The Window component supports static mode operation through the ",e.jsx(n.code,{children:"staticMode"})," property. In this mode, the window works as an embedded component without modal behavior:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content displays immediately"})," - window is not hidden and doesn't require activation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Animations disabled"})," - no appearance/disappearance effects"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Positioning disabled"})," - window is embedded in document flow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Works with adaptive"})," - when ",e.jsx(n.code,{children:"adaptive"})," property has one of static mode values (for example, ",e.jsx(n.code,{children:"static"}),"), static mode is enabled"]}),`
`]}),`
`,e.jsx(n.p,{children:"Static mode is especially useful for embedding window content directly into the interface without modal behavior."})]})}function Eo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Fs,{...i})}):Fs(i)}function Ss(i){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"статический-режим-staticmode",children:"Статический режим (staticMode)"}),`
`,e.jsxs(n.p,{children:["Компонент Window поддерживает статический режим работы через свойство ",e.jsx(n.code,{children:"staticMode"}),". В этом режиме окно работает как встроенный компонент без модального поведения:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Содержимое отображается сразу"})," - окно не скрывается и не требует активации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отключены анимации"})," - нет эффектов появления/исчезновения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отключено позиционирование"})," - окно встраивается в поток документа"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Работает с adaptive"})," - когда свойство ",e.jsx(n.code,{children:"adaptive"})," имеет один из статичных режимов (например, ",e.jsx(n.code,{children:"static"}),"), включается статичный режим"]}),`
`]}),`
`,e.jsx(n.p,{children:"Статический режим особенно полезен для встраивания содержимого окна непосредственно в интерфейс без модального поведения."})]})}function Ao(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ss,{...i})}):Ss(i)}function Ls(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"state-management-via-v-model",children:"State Management via v-model"}),`
`,e.jsxs(n.p,{children:["Two-way binding of window open state via ",e.jsx(n.code,{children:"v-model:open"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — window open state"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Ro(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ls,{...i})}):Ls(i)}function Xs(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"управление-состоянием-через-v-model",children:"Управление состоянием через v-model"}),`
`,e.jsxs(n.p,{children:["Двусторонняя привязка состояния открытия окна через ",e.jsx(n.code,{children:"v-model:open"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open: boolean"})," — состояние открытия окна"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Wo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Xs,{...i})}):Xs(i)}function $s(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Component for creating modal windows, dialogs, and popup elements with flexible positioning and adaptive behavior."}),`
`,e.jsx(n.p,{children:"Window manages content display on top of the main interface, supports various positioning types (modal windows, dropdown menus, action sheets), open/close animations, and event system integration. The component automatically handles outside clicks, focus management, and adaptation to different screen sizes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Flexible positioning (center, edges, screen corners)"}),`
`,e.jsx(n.li,{children:"Adaptive modes (modal, menu, actionSheet, static)"}),`
`,e.jsx(n.li,{children:"Open/close animations with origin customization"}),`
`,e.jsx(n.li,{children:"State management via v-model or expose methods"}),`
`,e.jsx(n.li,{children:"Scrollbar integration for scrollable content"}),`
`,e.jsx(n.li,{children:"Background interaction blocking (persistent mode)"}),`
`,e.jsx(n.li,{children:"Window lifecycle events"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Modal windows for forms and confirmations"}),`
`,e.jsx(n.li,{children:"Dropdown menus and context menus"}),`
`,e.jsx(n.li,{children:"Side panels and drawer components"}),`
`,e.jsx(n.li,{children:"Action sheets for mobile interfaces"}),`
`,e.jsx(n.li,{children:"Tooltips and dialogs"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Vo(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx($s,{...i})}):$s(i)}function Is(i){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Компонент для создания модальных окон, диалогов и всплывающих элементов с гибким позиционированием и адаптивным поведением."}),`
`,e.jsx(n.p,{children:"Window управляет отображением контента поверх основного интерфейса, поддерживает различные типы позиционирования (модальные окна, выпадающие меню, action sheets), анимации открытия/закрытия и интеграцию с системой событий. Компонент автоматически обрабатывает клики вне области, управление фокусом и адаптацию под различные размеры экранов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Основные возможности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Гибкое позиционирование (центр, края, углы экрана)"}),`
`,e.jsx(n.li,{children:"Адаптивные режимы (modal, menu, actionSheet, static)"}),`
`,e.jsx(n.li,{children:"Анимации открытия/закрытия с настройкой origin"}),`
`,e.jsx(n.li,{children:"Управление состоянием через v-model или expose методы"}),`
`,e.jsx(n.li,{children:"Интеграция со Scrollbar для прокручиваемого контента"}),`
`,e.jsx(n.li,{children:"Блокировка взаимодействия с фоном (persistent режим)"}),`
`,e.jsx(n.li,{children:"События жизненного цикла окна"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типичные сценарии использования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Модальные окна для форм и подтверждений"}),`
`,e.jsx(n.li,{children:"Выпадающие меню и контекстные меню"}),`
`,e.jsx(n.li,{children:"Боковые панели и drawer компоненты"}),`
`,e.jsx(n.li,{children:"Action sheets для мобильных интерфейсов"}),`
`,e.jsx(n.li,{children:"Всплывающие подсказки и диалоги"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function Ho(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Is,{...i})}):Is(i)}const qo={name:"Window",descriptions:{axis:{en:_o,ru:Fo},classes:{en:So,ru:Lo},"event.window":{en:Xo,ru:$o},expose:{en:Io,ru:To},hooks:{en:Bo,ru:No},slots:{en:Po,ru:Oo},staticMode:{en:Eo,ru:Ao},"v-model":{en:Ro,ru:Wo},window:{en:Vo,ru:Ho}}},Yo=[tt,ut,$t,Rt,Ut,Zt,al,vl,Ll,Bl,Wl,er,rr,dr,pr,vr,$r,Rr,Yr,Zr,ic,kc,Jc,$c,oo,xo,vo,Do,qo];class zo{item;mdx;constructor(n){this.item=Rs.find(t=>t.name===n),this.mdx=Yo.find(t=>t.name===n)}getItem(){return this.item}getDescriptionByType(n){const t=this.mdx?.descriptions?.[n];return Os(t?Es(t)?t[As.getLanguage()]:t:"")}}const nd=({componentName:i,type:n})=>new zo(i).getDescriptionByType(n);export{Zo as S,nd as a};
