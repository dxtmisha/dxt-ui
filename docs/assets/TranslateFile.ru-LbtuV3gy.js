import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/TranslateFile - Управление Файлами Перевода`}),`
`,(0,c.jsx)(n.h1,{id:`класс-translatefile`,children:`Класс TranslateFile`}),`
`,(0,c.jsx)(n.p,{children:`Статический служебный класс для управления данными переводов из внешних файлов. Поддерживает ленивую загрузку (lazy loading) пакетов перевода, автоматическое сопоставление локалей и внутреннее кэширование для оптимизации производительности.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивая загрузка`}),` — поддерживает асинхронную загрузку файлов перевода только тогда, когда они необходимы для текущей локали.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умное кэширование`}),` — автоматически кэширует содержимое загруженных файлов, предотвращая повторное чтение файлов или лишние сетевые запросы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Приоритизация локалей`}),` — интеллектуально выбирает наиболее подходящий файл на основе местоположения (Местоположение > Язык > Глобальное).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Бесшовная интеграция`}),` — работает в связке с классом `,(0,c.jsx)(n.code,{children:`Translate`}),`, обеспечивая единую систему переводов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Класс является статическим и настраивается путем добавления загрузчиков файлов для различных локалей.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile } from '@dxtmisha/functional-basic'

// Регистрация загрузчиков файлов (обычно через динамические импорты)
TranslateFile.add({
  'en-US': () => import('./locales/en-US.json'),
  'en': () => import('./locales/en.json'),
  'global': () => import('./locales/global.json')
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList(): Promise<TranslateDataFileList | undefined>`}),` — Возвращает список переводов для текущего местоположения. Сначала проверяет внутренний кэш, затем пытается загрузить данные через зарегистрированные загрузчики.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFile(): boolean`}),` — Проверяет, есть ли зарегистрированные загрузчики файлов, применимые к текущему местоположению или языку.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(data: TranslateDataFile): void`}),` — Добавляет сопоставление локалей и соответствующих им функций-загрузчиков (функций, возвращающих Promise).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsx)(n.p,{children:`Коллекция асинхронных функций-загрузчиков, индексированных строками локали/региона:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ключ`}),`: Код локали (например, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`, `,(0,c.jsx)(n.code,{children:`'ru'`}),`, `,(0,c.jsx)(n.code,{children:`'global'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Значение`}),`: Функция, возвращающая `,(0,c.jsx)(n.code,{children:`Promise`}),` с `,(0,c.jsx)(n.code,{children:`TranslateDataFileList`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafilelist`,children:(0,c.jsx)(n.code,{children:`TranslateDataFileList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Простой объект перевода (ключ-значение): `,(0,c.jsx)(n.code,{children:`Record<string, string>`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`регистрация-файлов-с-динамическим-импортом`,children:`Регистрация файлов с динамическим импортом`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile, Translate } from '@dxtmisha/functional-basic'

TranslateFile.add({
  'en-US': () => import('./en-US.json'),
  'ru-RU': () => import('./ru-RU.json')
})

// Класс Translate будет автоматически использовать TranslateFile, если файлы доступны
const title = await Translate.get('app.title')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};