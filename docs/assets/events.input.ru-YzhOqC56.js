import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие и данные валидации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: InputEvent`}),` — оригинальное DOM событие ввода`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура FieldValidationItem:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group: string | undefined`}),` — ключ группы маски`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`input: HTMLInputElement | HTMLTextAreaElement | undefined`}),` — связанный элемент ввода`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern: FieldPatternItemOrFunction | undefined`}),` — используемый паттерн валидации`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | undefined`}),` — произвольный тип`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status: boolean | undefined`}),` — статус успешности валидации`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`required: boolean | undefined`}),` — флаг обязательности поля`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFull: boolean | undefined`}),` — флаг полноты заполнения значения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validationMessage: string | undefined`}),` — текст сообщения об ошибке`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validity: ValidityState | undefined`}),` — нативное состояние валидности`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validityMessage: string | undefined`}),` — кастомное сообщение валидности`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — исходное значение`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`valueInput: any | undefined`}),` — введённое значение`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
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
`,(0,c.jsx)(t.h3,{id:`inputlite`,children:(0,c.jsx)(t.code,{children:`inputLite`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при изменении значения в поле ввода, передавая только данные валидации без оригинального DOM события (облегченная версия).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`change`,children:(0,c.jsx)(t.code,{children:`change`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при завершении ввода и потере фокуса, передавая оригинальное DOM событие и данные валидации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: InputEvent`}),` — оригинальное DOM событие ввода`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Структура FieldValidationItem:`}),` такая же как у события `,(0,c.jsx)(t.code,{children:`input`})]}),`
`,(0,c.jsx)(i,{code:`
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
`,(0,c.jsx)(t.h3,{id:`changelite`,children:(0,c.jsx)(t.code,{children:`changeLite`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при завершении ввода и потере фокуса, передавая только данные валидации без оригинального DOM события (облегченная версия).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: FieldValidationItem`}),` — объект с данными валидации`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};