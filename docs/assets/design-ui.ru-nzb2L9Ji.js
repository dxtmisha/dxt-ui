import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-ui - Оркестратор UI дизайн-системы`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-ui`,children:`dxt-ui`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-ui`}),` является центральным оркестратором для сборки и инициализации библиотеки компонентов пользовательского интерфейса (UI) дизайн-системы. Она координирует генерацию стилей, создание документации, инициализацию структуры компонентов, экспорт пакетов и типизацию API.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Создание и обновление компонентов`}),`: Инициализирует новые компоненты или пакетно обновляет структуру существующих компонентов и SCSS-файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление экспортом пакета`}),`: Автоматически настраивает `,(0,c.jsx)(n.code,{children:`package.json`}),` библиотеки с правильным маппингом экспорта для стилей SASS, плагинов, медиа-ресурсов и TypeScript-типов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единый конвейер сборки`}),`: Последовательно запускает сборку стилей (`,(0,c.jsx)(n.code,{children:`Styles`}),`), генерацию документации (`,(0,c.jsx)(n.code,{children:`DesignWiki`}),`), экспорт типов и списков медиа.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка кэша`}),`: Скрипт сбрасывает локальные кэши сборки свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сборка SASS и Вики`}),`: Выполняет сборку глобальных SCSS-переменных и компилирует базовую документацию компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация компонентов`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Если передано имя компонента `,(0,c.jsx)(n.code,{children:`name`}),`, создается/обновляется структура этого конкретного компонента (HTML-шаблоны, скрипты, SCSS-файлы).`]}),`
`,(0,c.jsx)(n.li,{children:`Если имя не передано, пакетно обновляются все зарегистрированные компоненты.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обновление package.json`}),`: Записывает пути экспорта для CSS, SASS, Vue-плагинов и типов в файл `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сборка ассетов`}),`: Запускает генерацию вспомогательных файлов медиа, плагинов и списков типов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(n.p,{children:[`Запустите оркестратор через `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-ui [component-name]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component-name`}),` (Необязательно): Имя конкретного компонента для инициализации или обновления. Если опущено, обновляются все компоненты.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};