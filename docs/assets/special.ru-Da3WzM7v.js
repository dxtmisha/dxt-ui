import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`специальные-символы`,children:`Специальные символы`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`special`}),` определяет специальные символы для обозначения мест пользовательского ввода в маске и настройку их расширенного поведения.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — одиночный специальный символ (по умолчанию `,(0,c.jsx)(t.code,{children:`'*'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string[]`}),` — массив специальных символов для разных типов групп`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` — объект с расширенной конфигурацией каждого символа`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Специальные символы в шаблоне маски обозначают позиции, где пользователь может вводить данные, в отличие от литеральных символов, которые вставляются автоматически.`}),`
`,(0,c.jsxs)(t.p,{children:[`При использовании простой строки (например, `,(0,c.jsx)(t.code,{children:`special="*"`}),`) все места ввода в маске ограничиваются одинаковыми правилами валидации.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Массив символов (например, `,(0,c.jsx)(t.code,{children:`special="['*', 'A', '#']"`}),`) позволяет создавать разные типы групп с индивидуальными ограничениями: одна группа для цифр, другая для букв, третья для специальных символов.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Объектная нотация `,(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` (см. `,(0,c.jsx)(t.a,{href:`#maskspeciallist`,children:`детальное описание ниже`}),`) предоставляет максимальную гибкость. Каждый специальный символ настраивается отдельно с возможностью задать значения по умолчанию, резиновые группы переменной длины, символы автоперехода и кастомную валидацию.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для встроенных типов (`,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`) система автоматически генерирует специальные символы с учётом региональных настроек, игнорируя пользовательское значение `,(0,c.jsx)(t.code,{children:`special`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
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
`,(0,c.jsx)(t.h2,{id:`maskspeciallist`,children:`MaskSpecialList`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` — это объект расширенной конфигурации, который позволяет детально настроить поведение каждого специального символа в маске. Каждый ключ в объекте соответствует одному из символов, определённых в свойстве `,(0,c.jsx)(t.code,{children:`special`}),` (или символу `,(0,c.jsx)(t.code,{children:`*`}),` по умолчанию).`]}),`
`,(0,c.jsx)(t.h3,{id:`свойства-maskspecialitem`,children:`Свойства MaskSpecialItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: string`}),` — `,(0,c.jsx)(t.strong,{children:`начальное значение`}),`. Автоматически заполняет группу при инициализации. Пользователь может изменить его, если это разрешено правилами `,(0,c.jsx)(t.code,{children:`match`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rubber?: boolean`}),` — `,(0,c.jsx)(t.strong,{children:`резиновый режим`}),`. Позволяет группе изменять свою длину. В шаблоне маски такая группа обычно представлена одним или несколькими одинаковыми символами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transitionChar?: string | string[]`}),` — `,(0,c.jsx)(t.strong,{children:`символ перехода`}),`. Конкретный символ (например, пробел или точка), при вводе которого фокус немедленно переходит к следующей части маски. Только для `,(0,c.jsx)(t.code,{children:`rubber: true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minLength?: number`}),` — `,(0,c.jsx)(t.strong,{children:`минимальная длина`}),`. Используется для валидации полноты заполнения группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxLength?: number`}),` — `,(0,c.jsx)(t.strong,{children:`максимальная длина`}),`. Лимит расширения для «резиновых» групп.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`match?: RegExp | string`}),` — `,(0,c.jsx)(t.strong,{children:`фильтр ввода`}),`. Регулярное выражение, проверяющее `,(0,c.jsx)(t.em,{children:`каждый отдельный`}),` символ при нажатии клавиши. По умолчанию: `,(0,c.jsx)(t.code,{children:`[0-9]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern?: string | Function`}),` — `,(0,c.jsx)(t.strong,{children:`валидатор группы`}),`. Правило для проверки всей накопленной строки в группе. Может быть строкой (regex) или функцией, принимающей данные маски.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`view?: string`}),` — `,(0,c.jsx)(t.strong,{children:`визуальный плейсхолдер`}),`. Тот символ, который видит пользователь в пустых ячейках этой группы. По умолчанию: `,(0,c.jsx)(t.code,{children:`_`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`как-работать-с-maskspeciallist`,children:`Как работать с MaskSpecialList`}),`
`,(0,c.jsxs)(t.p,{children:[`Для эффективного использования `,(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` придерживайтесь следующих правил:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сопоставление символов`}),`: Каждый ключ в объекте `,(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` должен быть символом, который вы использовали в шаблоне `,(0,c.jsx)(t.code,{children:`mask`}),`. Например, если маска `,(0,c.jsx)(t.code,{children:`AAA-***`}),`, вы можете настроить группу `,(0,c.jsx)(t.code,{children:`A`}),` для букв и `,(0,c.jsx)(t.code,{children:`*`}),` для цифр.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Настройка фильтров (`,(0,c.jsx)(t.code,{children:`match`}),`)`]}),`: Используйте `,(0,c.jsx)(t.code,{children:`match`}),` для ограничения типов символов, которые пользователь в принципе может нажать. Это предотвращает ввод букв там, где нужны цифры, на самом раннем этапе.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Использование резиновых групп`}),`: Если длина поля заранее неизвестна (например, добавочный номер телефона), установите `,(0,c.jsx)(t.code,{children:`rubber: true`}),`. Это позволит маске расширяться по мере ввода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление переходом`}),`: Для удобства пользователя задавайте `,(0,c.jsx)(t.code,{children:`transitionChar`}),` (например, пробел или точку). Это позволяет пользователю вручную завершить ввод в текущей группе и переключиться на следующую, не дожидаясь заполнения всей длины.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Значения по умолчанию`}),`: Если часть данных часто повторяется (например, текущий год), используйте `,(0,c.jsx)(t.code,{children:`defaultValue`}),`. Это уменьшит количество действий пользователя.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(i,{code:`
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
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};