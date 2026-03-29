import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/bin/dxt-component - Генерация базовой структуры компонентов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-component`}),` обеспечивает быструю генерацию базовой структуры (скафолдинг) для дизайн-системы. Инструмент использует `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` и `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` для автоматического обнаружения и первичной инициализации пустых директорий компонентов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое создание директорий`}),`: Обнаруживает пустые папки внутри `,(0,c.jsx)(n.code,{children:`src/components`}),` и разворачивает базовый vue код из встроенных шаблонов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическое внедрение шаблонов`}),`: Автоматически заменяет общие системные плейсхолдеры (такие как имя `,(0,c.jsx)(n.code,{children:`ComponentDoc`}),` и имя `,(0,c.jsx)(n.code,{children:`[project]`}),`), используя внутренние шаблоны незаметно для разработчика.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Этот процесс автоматизирует создание повторяющихся структур папок:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Класс `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` действует как сканнер, проверяя все вложенные структуры строго внутри `,(0,c.jsx)(n.code,{children:`src/components`}),`. Он фильтрует директории, которые полностью пусты.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Для каждой пустой папки он инициирует `,(0,c.jsx)(n.code,{children:`ComponentItem`}),`, который в свою очередь загружает предустановленные файлы шаблонов компонентов.`]}),`
`,(0,c.jsx)(n.li,{children:`Выполняется строковая замена плейсхолдеров на реальные названия компонента и текущего рабочего проекта. Затем получившийся код записывается прямо в файловую систему.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsxs)(n.p,{children:[`Для работы генератора не требуются сложные конфигурации. Инструмент динамически читает ваш `,(0,c.jsx)(n.code,{children:`package.json`}),`, чтобы извлечь поле `,(0,c.jsx)(n.code,{children:`name`}),`, которое затем автоматически подставляется вместо всех шаблонных маркеров `,(0,c.jsx)(n.code,{children:`[project]`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Чтобы найти все пустые папки компонентов и инициализировать создание базовой структуры в рабочем пространстве, просто выполните:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(n.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(n.p,{children:`При инициализации нового компонента он наследует структуру из внутренних шаблонов:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[ComponentName].vue`}),`: Базовый компонент Vue 3 со структурой `,(0,c.jsx)(n.code,{children:`<script setup>`}),`, импортом типов и скафолдингом `,(0,c.jsx)(n.code,{children:`<style lang="scss">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`: Стандартный экспорт компонента Vue (`,(0,c.jsx)(n.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),`: Определения TypeScript для стандартных `,(0,c.jsx)(n.code,{children:`Props`}),`, `,(0,c.jsx)(n.code,{children:`Emits`}),`, `,(0,c.jsx)(n.code,{children:`Slots`}),` и `,(0,c.jsx)(n.code,{children:`Defaults`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subcomponents/`}),`: Пустая директория (с `,(0,c.jsx)(n.code,{children:`.gitignore`}),`), готовая для внутренних вложенных компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki/[ComponentName].mdx`}),`: Готовый к запуску файл документации Storybook MDX, использующий `,(0,c.jsx)(n.code,{children:`@dxtmisha/wiki/storybook`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki/[ComponentName].stories.ts`}),`: Исполняемый скрипт Storybook Vue 3, определяющий превью компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki/run.ts`}),`: Исполняемый node-скрипт (сокращение), предназначенный для быстрого запуска команды ИИ-генерации `,(0,c.jsx)(n.code,{children:`dxt-component-wiki`}),` специально для этого компонента.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};