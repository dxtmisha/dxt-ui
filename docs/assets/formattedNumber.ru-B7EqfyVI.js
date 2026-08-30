import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для отображения чисел, валют и единиц измерения с форматированием, автоматически применяющий стандарты локализации.`}),`
`,(0,c.jsx)(t.p,{children:`FormattedNumber предоставляет простой и чистый интерфейс для вывода числовых данных без лишней верстки. Он поддерживает кастомную настройку локали, форматирование валюты по стандартным кодам, форматирование единиц измерения, а также возможность выборочного отключения форматирования.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Стандартное локализованное форматирование чисел (десятичные знаки, разделители).`}),`
`,(0,c.jsx)(t.li,{children:`Форматирование валют с поддержкой стандартных кодов (например, USD, EUR, RUB).`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка форматирования единиц измерения (например, килограмм, литр, процент).`}),`
`,(0,c.jsxs)(t.li,{children:[`Обход форматирования: при `,(0,c.jsx)(t.code,{children:`formatting`}),` равном `,(0,c.jsx)(t.code,{children:`false`}),` выводит исходное значение как строку.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Переопределение локали через свойство `,(0,c.jsx)(t.code,{children:`language`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Легковесный строчный рендеринг (рендерится в виде тега `,(0,c.jsx)(t.code,{children:`span`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типовые сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение цен и финансовых значений в списках товаров.`}),`
`,(0,c.jsx)(t.li,{children:`Отображение числовых значений с единицами измерения (вес, длина, проценты).`}),`
`,(0,c.jsx)(t.li,{children:`Отображение локализованной числовой статистики на дашбордах и в отчетах.`}),`
`,(0,c.jsx)(t.li,{children:`Отображение сырых чисел, где стандартное форматирование нежелательно.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<div class="formatted-number-examples">
  <!-- Базовый локализованный вывод числа -->
  <FormattedNumber :value="1234567.89"/>

  <!-- Вывод валюты -->
  <FormattedNumber :value="99.9" currency="USD"/>

  <!-- Вывод единиц измерения -->
  <FormattedNumber :value="1500" unit="kilogram"/>

  <!-- Без форматирования -->
  <FormattedNumber :value="4500" :formatting="false"/>

  <!-- Переопределенная локаль -->
  <FormattedNumber :value="1234.56" language="ru-RU"/>
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`FormattedNumber разработан как легкий, строчный служебный компонент для аккуратного представления локализованных чисел, валют и единиц измерения в любой части интерфейса.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};