import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Команды/dxt-ui - Оркестратор UI дизайн-системы`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-ui`,children:`dxt-ui`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` является центральным оркестратором для сборки и инициализации библиотеки компонентов пользовательского интерфейса (UI) дизайн-системы. Она координирует генерацию стилей, создание документации, инициализацию структуры компонентов, экспорт пакетов и типизацию API.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Создание и обновление компонентов`}),`: Инициализирует новые компоненты или пакетно обновляет структуру существующих компонентов и SCSS-файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление экспортом пакета`}),`: Автоматически настраивает `,(0,c.jsx)(t.code,{children:`package.json`}),` библиотеки с правильным маппингом экспорта для стилей SASS, плагинов, медиа-ресурсов и TypeScript-типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единый конвейер сборки`}),`: Последовательно запускает сборку стилей (`,(0,c.jsx)(t.code,{children:`Styles`}),`), генерацию документации (`,(0,c.jsx)(t.code,{children:`DesignWiki`}),`), экспорт типов и списков медиа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Очистка кэша`}),`: Скрипт сбрасывает локальные кэши сборки свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сборка SASS и Вики`}),`: Выполняет сборку глобальных SCSS-переменных и компилирует базовую документацию компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация компонентов`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если передано имя компонента `,(0,c.jsx)(t.code,{children:`name`}),`, создается/обновляется структура этого конкретного компонента (HTML-шаблоны, скрипты, SCSS-файлы).`]}),`
`,(0,c.jsx)(t.li,{children:`Если имя не передано, пакетно обновляются все зарегистрированные компоненты.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обновление package.json`}),`: Записывает пути экспорта для CSS, SASS, Vue-плагинов и типов в файл `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сборка ассетов`}),`: Запускает генерацию вспомогательных файлов медиа, плагинов и списков типов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Запустите оркестратор через `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-ui [component-name]
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-name`}),` (Необязательно): Имя конкретного компонента для инициализации или обновления. Если опущено, обновляются все компоненты.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};