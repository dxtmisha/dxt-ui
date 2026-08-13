import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Команды/dxt-component - Генерация базовой структуры компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-component`}),` обеспечивает быструю генерацию базовой структуры (скафолдинг) для дизайн-системы. Инструмент использует `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` и `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` для автоматического обнаружения и первичной инициализации пустых директорий компонентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое создание директорий`}),`: Обнаруживает пустые папки внутри `,(0,c.jsx)(t.code,{children:`src/components`}),` и разворачивает базовый vue код из встроенных шаблонов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическое внедрение шаблонов`}),`: Автоматически заменяет общие системные плейсхолдеры (такие как имя `,(0,c.jsx)(t.code,{children:`ComponentDoc`}),` и имя `,(0,c.jsx)(t.code,{children:`[project]`}),`), используя внутренние шаблоны незаметно для разработчика.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Этот процесс автоматизирует создание повторяющихся структур папок:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` действует как сканнер, проверяя все вложенные структуры строго внутри `,(0,c.jsx)(t.code,{children:`src/components`}),`. Он фильтрует директории, которые полностью пусты.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждой пустой папки он инициирует `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`, который в свою очередь загружает предустановленные файлы шаблонов компонентов.`]}),`
`,(0,c.jsx)(t.li,{children:`Выполняется строковая замена плейсхолдеров на реальные названия компонента и текущего рабочего проекта. Затем получившийся код записывается прямо в файловую систему.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsxs)(t.p,{children:[`Для работы генератора не требуются сложные конфигурации. Инструмент динамически читает ваш `,(0,c.jsx)(t.code,{children:`package.json`}),`, чтобы извлечь поле `,(0,c.jsx)(t.code,{children:`name`}),`, которое затем автоматически подставляется вместо всех шаблонных маркеров `,(0,c.jsx)(t.code,{children:`[project]`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Чтобы найти все пустые папки компонентов и инициализировать создание базовой структуры в рабочем пространстве, просто выполните:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(t.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(t.p,{children:`При инициализации нового компонента он наследует структуру из внутренних шаблонов:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].vue`}),`: Базовый компонент Vue 3 со структурой `,(0,c.jsx)(t.code,{children:`<script setup>`}),`, импортом типов и скафолдингом `,(0,c.jsx)(t.code,{children:`<style lang="scss">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),`: Стандартный экспорт компонента Vue (`,(0,c.jsx)(t.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),`: Определения TypeScript для стандартных `,(0,c.jsx)(t.code,{children:`Props`}),`, `,(0,c.jsx)(t.code,{children:`Emits`}),`, `,(0,c.jsx)(t.code,{children:`Slots`}),` и `,(0,c.jsx)(t.code,{children:`Defaults`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subcomponents/`}),`: Пустая директория (с `,(0,c.jsx)(t.code,{children:`.gitignore`}),`), готовая для внутренних вложенных компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].mdx`}),`: Готовый к запуску файл документации Storybook MDX, использующий `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki/storybook`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].stories.ts`}),`: Исполняемый скрипт Storybook Vue 3, определяющий превью компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/run.ts`}),`: Исполняемый node-скрипт (сокращение), предназначенный для быстрого запуска команды ИИ-генерации `,(0,c.jsx)(t.code,{children:`dxt-component-wiki`}),` специально для этого компонента.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};