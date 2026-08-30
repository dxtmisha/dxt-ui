import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryList - Генератор списка компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-librarylist`,children:`Класс LibraryList`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryList`}),` отвечает за создание основного конфигурационного файла дизайн-системы. Этот файл консолидирует метаданные библиотеки, шаблоны идентификации (регулярные выражения) и полный список импортов компонентов, необходимых для архитектуры дизайн-системы.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Консолидация метаданных`}),` — собирает имена пакетов и идентификаторы дизайна в единой точке конфигурации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация шаблонов`}),` — автоматически строит сложные регулярные выражения для идентификации компонентов и переменных стилей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Картирование импортов`}),` — формирует структурированный список импортов компонентов, используемый дизайнерскими инструментами и средствами сборки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Соблюдение стандартов именования`}),` — автоматически обрабатывает префиксы дизайна и соглашения об именовании в стиле kebab-case.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`LibraryList(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryList, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryList
const listGenerator = new LibraryList(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — Запускает процесс генерации обзорного файла дизайн-системы (`,(0,c.jsx)(t.code,{children:`design.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-сгенерированного-файла`,children:`Структура сгенерированного файла`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`make`}),` формирует файл `,(0,c.jsx)(t.code,{children:`design.ts`}),`, который предоставляет необходимые метаданные для интеграции дизайн-системы.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные экспорты:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`designName: string`}),` — основной идентификатор дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`packageName: string`}),` — имя целевого NPM-пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentsReg: RegExp`}),` — глобальный шаблон для идентификации компонентов дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleVarsReg: RegExp`}),` — шаблон для идентификации специфичных для дизайна CSS-переменных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentsList: PluginComponentImports`}),` — реестр определений импорта отдельных компонентов.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import type { PluginComponentImports } from '@dxtmisha/constructor/plugin'

// count: 2
export const designName: string = 'dxt'
export const packageName: string = '@dxtmisha/ui'
export const componentsReg: RegExp = /((dxt)-?(button|input))/ig
export const styleVarsReg: RegExp = /(?<=var\\(--)(primary-color|font-size)/ig

export const componentsList: PluginComponentImports = [
  {
    name: 'DxtButton',
    reg: /^((dxt)-?(button))$/ig
  },
  {
    name: 'DxtInput',
    reg: /^((dxt)-?(input))$/ig
  }
]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};