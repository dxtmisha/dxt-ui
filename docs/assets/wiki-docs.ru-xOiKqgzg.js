import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Генерация документации (Wiki & IDE)`}),`
`,(0,c.jsx)(t.h1,{id:`формирование-публичной-документации-и-поддержка-ide`,children:`Формирование публичной документации и поддержка IDE`}),`
`,(0,c.jsx)(t.p,{children:`Написание и поддержка документации вручную (Storybook, MDX, подсказки для IDE) для дизайн-системы, содержащей тысячи компонентов и их состояний — это титанический труд, который часто приводит к рассинхронизации между кодом и документацией.`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` берет на себя задачу полностью автоматизировать этот процесс, генерируя материалы напрямую из метаданных компонентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`интеграция-с-ide-designwikistorm`,children:`Интеграция с IDE (DesignWikiStorm)`}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы разработчикам было максимально комфортно использовать библиотеку DXT UI в таких редакторах, как IntelliJ IDEA или WebStorm, пакет скриптов генерирует файл `,(0,c.jsx)(t.code,{children:`web-types.json`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Что делает DesignWikiStorm:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Анализ:`}),` Класс сканирует всю библиотеку компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Извлечение метаданных:`}),` Он извлекает все доступные HTML-теги, пропсы, события (emits), слоты и CSS-модификаторы из абстрактной логики и файлов `,(0,c.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Форматирование:`}),` Скрипт приводит эти данные к стандарту Web-Types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Результат:`}),` Разработчик, подключающий DXT UI в свой проект, мгновенно получает IntelliSense (автодополнение кода, подсказки по типам пропсов и документацию при наведении) прямо в своем редакторе, без необходимости открывать браузер.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`интерактивная-документация-designwiki`,children:`Интерактивная документация (DesignWiki)`}),`
`,(0,c.jsx)(t.p,{children:`Помимо поддержки IDE, скрипты автоматизируют создание пользовательской документации для Storybook и внутренних Wiki.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности генерации:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignWiki`}),` вместе с `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` берет конфигурацию компонента и автоматически генерирует файлы `,(0,c.jsx)(t.code,{children:`.stories.ts`}),` (интерактивные примеры) и `,(0,c.jsx)(t.code,{children:`.mdx`}),` (текстовые инструкции).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Документация всегда отражает реальное положение дел, поскольку она строится на основе тех же `,(0,c.jsx)(t.code,{children:`properties.json`}),`, из которых генерируется код. Таблицы свойств (props tables), доступные значения и дизайн-токены обновляются автоматически.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-команды`,children:`Основные команды`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-wiki-storm`})}),` — сканирует все компоненты и собирает файл `,(0,c.jsx)(t.code,{children:`web-types.json`}),` для поддержки автодополнения в JetBrains IDE.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-component-wiki`})}),` — запускает процесс генерации компонентов Storybook и MDX-файлов для визуального каталога компонентов.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};