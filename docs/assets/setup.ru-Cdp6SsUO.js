import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/# Подготовка проекта`}),`
`,(0,c.jsx)(n.h1,{id:`подготовка-проекта`,children:`Подготовка проекта`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` предоставляет централизованный миксин подготовки (`,(0,c.jsx)(n.code,{children:`initGlobal`}),`) для настройки базовых сбросов (CSS Resets), системы направлений раскладки, абзацных отступов, трансформаций и цветовых палитр.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[`Миксин `,(0,c.jsx)(n.code,{children:`initGlobal`}),` выступает единой точкой входа для подготовки всей системы стилей проекта. Он последовательно подключает и настраивает ключевые низкоуровневые утилиты:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Базовый сброс параметров (Box Sizing & Borders)`}),`: Для всех элементов (`,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`*::after`}),`, `,(0,c.jsx)(n.code,{children:`*::before`}),`) задается режим `,(0,c.jsx)(n.code,{children:`box-sizing: border-box`}),`, обнуляется ширина границ (`,(0,c.jsx)(n.code,{children:`border-width: 0`}),`), тип границ устанавливается в `,(0,c.jsx)(n.code,{children:`solid`}),`, а цвет границ по умолчанию делается прозрачным (`,(0,c.jsx)(n.code,{children:`transparent`}),`). Это предотвращает проблемы с нежелательным влиянием рамок на размеры элементов и их позиционирование.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Инициализация направления текста (`,(0,c.jsx)(n.code,{children:`initDir`}),`)`]}),`: Подключает систему поддержки направлений LTR и RTL. Она настраивает необходимые CSS-переменные на элементе `,(0,c.jsx)(n.code,{children:`html`}),` и дочерних элементах, обеспечивая автоматическое изменение раскладки и отступов при переключении локалей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Абзацные отступы (`,(0,c.jsx)(n.code,{children:`initParagraphSpacing`}),`)`]}),`: Автоматически задает и форматирует отступы между идущими друг за другом абзацами (элементами `,(0,c.jsx)(n.code,{children:`p`}),`), обеспечивая визуальную согласованность текстовых блоков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Палитра цветов (`,(0,c.jsx)(n.code,{children:`initPalette`}),`)`]}),`: Регистрирует глобальные CSS-переменные для цветовой схемы проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Трансформации (`,(0,c.jsx)(n.code,{children:`initTransform`}),`)`]}),`: Подготавливает систему CSS-переменных для управления трехмерными и двумерными трансформациями элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сброс внешних отступов (Margin Reset)`}),`: Сбрасывает внешние отступы до нуля у элементов `,(0,c.jsx)(n.code,{children:`body`}),`, заголовков (`,(0,c.jsx)(n.code,{children:`h1`}),`-`,(0,c.jsx)(n.code,{children:`h6`}),`) и абзацев (`,(0,c.jsx)(n.code,{children:`p`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`интеграция-в-проект`,children:`Интеграция в проект`}),`
`,(0,c.jsx)(n.h3,{id:`1-создание-главного-файла-стилей`,children:`1. Создание главного файла стилей`}),`
`,(0,c.jsxs)(n.p,{children:[`Создайте файл стилей (например, `,(0,c.jsx)(n.code,{children:`src/styles/main.scss`}),`), который будет служить точкой входа для стилей вашего приложения.`]}),`
`,(0,c.jsx)(n.h3,{id:`2-импорт-библиотеки-стилей`,children:`2. Импорт библиотеки стилей`}),`
`,(0,c.jsxs)(n.p,{children:[`Импортируйте библиотеку `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` в начале вашего SCSS-файла:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';
`})}),`
`,(0,c.jsx)(n.h3,{id:`3-подготовка-глобальных-стилей`,children:`3. Подготовка глобальных стилей`}),`
`,(0,c.jsxs)(n.p,{children:[`Вызовите миксин `,(0,c.jsx)(n.code,{children:`initGlobal`}),` на корневом уровне в вашем главном SCSS-файле:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include styles.initGlobal;
`})}),`
`,(0,c.jsx)(n.h3,{id:`4-подключение-стилей-в-точке-входа-приложения`,children:`4. Подключение стилей в точке входа приложения`}),`
`,(0,c.jsxs)(n.p,{children:[`Импортируйте ваш главный файл стилей в JavaScript или TypeScript точке входа приложения (например, `,(0,c.jsx)(n.code,{children:`src/main.ts`}),` или `,(0,c.jsx)(n.code,{children:`src/entry-client.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import './styles/main.scss'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};