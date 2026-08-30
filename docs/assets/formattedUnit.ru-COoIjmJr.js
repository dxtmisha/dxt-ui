import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для отображения и автоматической конвертации физических величин в соответствии с региональными стандартами локали (например, перевод градусов Цельсия в Фаренгейты, граммов в унции, метров в футы).`}),`
`,(0,c.jsx)(t.p,{children:`FormattedUnit предоставляет простой и чистый интерфейс для вывода локализованных величин без лишней верстки. Он поддерживает автоматический пересчет систем мер в зависимости от страны, форматирование с помощью класса GeoUnit, а также возможность временного отключения форматирования.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматический пересчет и конвертация метрических величин в традиционные на основе локали.`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка стандартных величин (миллиметр, сантиметр, метр, километр, квадратный метр, гектар, грамм, килограмм, тонна, миллилитр, литр, градусы Цельсия, километры в час).`}),`
`,(0,c.jsxs)(t.li,{children:[`Отключение форматирования: при `,(0,c.jsx)(t.code,{children:`formatting="false"`}),` (или `,(0,c.jsx)(t.code,{children:`:formatting="false"`}),`) выводится исходное значение, приведенное к строке.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Переопределение локали через свойство `,(0,c.jsx)(t.code,{children:`language`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Легковесный рендеринг в виде строчного тега `,(0,c.jsx)(t.code,{children:`span`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение температуры погоды с автовыбором Цельсий / Фаренгейт.`}),`
`,(0,c.jsx)(t.li,{children:`Вывод веса и роста в метрических или имперских единицах в зависимости от страны пользователя.`}),`
`,(0,c.jsx)(t.li,{children:`Форматирование скорости движения автомобиля (км/ч или мили в час) на лету.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<div class="formatted-unit-examples">
  <!-- Автоматически переведет Цельсии в Фаренгейты для en-US -->
  <FormattedUnit :value="0" unit="celsius" language="en-US"/> <!-- "32°F" -->

  <!-- Локальное форматирование веса -->
  <FormattedUnit :value="1000" unit="gram" language="ru-RU"/> <!-- "1 000 г" -->
  <FormattedUnit :value="1000" unit="gram" language="en-US"/> <!-- "35.274 oz" -->
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`FormattedUnit разработан как легкий, строчный служебный компонент для аккуратного представления и конвертации физических величин в любой части интерфейса.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};