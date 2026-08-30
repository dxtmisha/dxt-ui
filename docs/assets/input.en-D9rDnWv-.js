import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Text input field component with validation, masking and formatting support.`}),`
`,(0,c.jsx)(t.p,{children:`Input provides a flexible interface for entering various types of data: text, numbers, email, passwords, phones, URLs, dates and time. The component automatically applies appropriate validation, formatting and keyboard based on the specified type. Supports masking for structured input (phones, dates, custom patterns), currency and number formatting, password visibility control and integration with the Field component for consistent styling.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Multiple input types (text, number, email, password, tel, url, date, time and more)`}),`
`,(0,c.jsx)(t.li,{children:`Built-in validation with custom messages`}),`
`,(0,c.jsx)(t.li,{children:`Masking for formatted input`}),`
`,(0,c.jsx)(t.li,{children:`Currency and number formatting with localization`}),`
`,(0,c.jsx)(t.li,{children:`Password visibility toggle`}),`
`,(0,c.jsx)(t.li,{children:`Prefix and suffix for additional context`}),`
`,(0,c.jsx)(t.li,{children:`Character counter for length limits`}),`
`,(0,c.jsx)(t.li,{children:`Navigation arrows for numeric values`}),`
`,(0,c.jsx)(t.li,{children:`Autocomplete and spellcheck support`}),`
`,(0,c.jsx)(t.li,{children:`Clear button for value reset`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Registration and login forms`}),`
`,(0,c.jsx)(t.li,{children:`Contact information fields (email, phone)`}),`
`,(0,c.jsx)(t.li,{children:`Numeric fields (quantity, price, age)`}),`
`,(0,c.jsx)(t.li,{children:`Password fields with visibility toggle`}),`
`,(0,c.jsx)(t.li,{children:`Search fields with quick clear`}),`
`,(0,c.jsx)(t.li,{children:`Formatted input (phones, dates, cards)`}),`
`,(0,c.jsx)(t.li,{children:`Currency fields with automatic formatting`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
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
`,(0,c.jsx)(t.p,{children:`Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования.`}),`
`,(0,c.jsx)(t.p,{children:`Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная валидация с пользовательскими сообщениями`}),`
`,(0,c.jsx)(t.li,{children:`Маскирование для форматированного ввода`}),`
`,(0,c.jsx)(t.li,{children:`Форматирование валюты и чисел с локализацией`}),`
`,(0,c.jsx)(t.li,{children:`Переключатель видимости пароля`}),`
`,(0,c.jsx)(t.li,{children:`Префикс и суффикс для дополнительного контекста`}),`
`,(0,c.jsx)(t.li,{children:`Счётчик символов для ограничения длины`}),`
`,(0,c.jsx)(t.li,{children:`Стрелки навигации для числовых значений`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка автозаполнения и проверки орфографии`}),`
`,(0,c.jsx)(t.li,{children:`Кнопка очистки значения`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Формы регистрации и авторизации`}),`
`,(0,c.jsx)(t.li,{children:`Поля ввода контактных данных (email, телефон)`}),`
`,(0,c.jsx)(t.li,{children:`Числовые поля (количество, цена, возраст)`}),`
`,(0,c.jsx)(t.li,{children:`Поля для ввода паролей с переключением видимости`}),`
`,(0,c.jsx)(t.li,{children:`Поля поиска с быстрой очисткой`}),`
`,(0,c.jsx)(t.li,{children:`Форматированный ввод (телефоны, даты, карты)`}),`
`,(0,c.jsx)(t.li,{children:`Валютные поля с автоматическим форматированием`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
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
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};