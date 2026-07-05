import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Генерация документации (Wiki & IDE)`}),`
`,(0,c.jsx)(n.h1,{id:`формирование-публичной-документации-и-поддержка-ide`,children:`Формирование публичной документации и поддержка IDE`}),`
`,(0,c.jsx)(n.p,{children:`Написание и поддержка документации вручную (Storybook, MDX, подсказки для IDE) для дизайн-системы, содержащей тысячи компонентов и их состояний — это титанический труд, который часто приводит к рассинхронизации между кодом и документацией.`}),`
`,(0,c.jsxs)(n.p,{children:[`Пакет `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` берет на себя задачу полностью автоматизировать этот процесс, генерируя материалы напрямую из метаданных компонентов.`]}),`
`,(0,c.jsx)(n.h2,{id:`интеграция-с-ide-designwikistorm`,children:`Интеграция с IDE (DesignWikiStorm)`}),`
`,(0,c.jsxs)(n.p,{children:[`Чтобы разработчикам было максимально комфортно использовать библиотеку DXT UI в таких редакторах, как IntelliJ IDEA или WebStorm, пакет скриптов генерирует файл `,(0,c.jsx)(n.code,{children:`web-types.json`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Что делает DesignWikiStorm:`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ:`}),` Класс сканирует всю библиотеку компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Извлечение метаданных:`}),` Он извлекает все доступные HTML-теги, пропсы, события (emits), слоты и CSS-модификаторы из абстрактной логики и файлов `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Форматирование:`}),` Скрипт приводит эти данные к стандарту Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Результат:`}),` Разработчик, подключающий DXT UI в свой проект, мгновенно получает IntelliSense (автодополнение кода, подсказки по типам пропсов и документацию при наведении) прямо в своем редакторе, без необходимости открывать браузер.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`интерактивная-документация-designwiki`,children:`Интерактивная документация (DesignWiki)`}),`
`,(0,c.jsx)(n.p,{children:`Помимо поддержки IDE, скрипты автоматизируют создание пользовательской документации для Storybook и внутренних Wiki.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности генерации:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` вместе с `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` берет конфигурацию компонента и автоматически генерирует файлы `,(0,c.jsx)(n.code,{children:`.stories.ts`}),` (интерактивные примеры) и `,(0,c.jsx)(n.code,{children:`.mdx`}),` (текстовые инструкции).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Документация всегда отражает реальное положение дел, поскольку она строится на основе тех же `,(0,c.jsx)(n.code,{children:`properties.json`}),`, из которых генерируется код. Таблицы свойств (props tables), доступные значения и дизайн-токены обновляются автоматически.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`основные-команды`,children:`Основные команды`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-wiki-storm`})}),` — сканирует все компоненты и собирает файл `,(0,c.jsx)(n.code,{children:`web-types.json`}),` для поддержки автодополнения в JetBrains IDE.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component-wiki`})}),` — запускает процесс генерации компонентов Storybook и MDX-файлов для визуального каталога компонентов.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};