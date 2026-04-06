import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaStorage - Менеджер хранилища`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmastorage`,children:`Класс FigmaStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для управления `,(0,c.jsx)(n.code,{children:`PluginData`}),` в Figma. Предоставляет высокоуровневый API для сохранения, получения и контроля срока жизни данных на узлах Figma (по умолчанию — корень документа), с поддержкой кэширования в памяти и значений по умолчанию.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Персистентность`}),` — Обертка над `,(0,c.jsx)(n.code,{children:`getPluginData`}),` и `,(0,c.jsx)(n.code,{children:`setPluginData`}),` для удобного хранения данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование в памяти`}),` — Сохраняет значения в экземпляре для быстрого доступа во время выполнения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Логика истечения срока`}),` — Поддержка кэширования на основе времени для инвалидации устаревших данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Функциональные значения`}),` — Поддержка передачи функций в качестве значений или значений по умолчанию для динамической генерации данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`FigmaStorage(name, item, cache)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`параметры-универсального-типа-generics`,children:`Параметры универсального типа (Generics)`}),`
`,(0,c.jsx)(n.p,{children:`Класс поддерживает параметр универсального типа для типизированного управления данными:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Тип сохраняемого и получаемого значения.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Уникальное имя ключа для элемента хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PluginDataMixin = figma.root`}),` — Узел Figma, в котором будут храниться данные. По умолчанию — `,(0,c.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache: number`}),` — (Опционально) Время жизни (TTL) данных в секундах.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// 1. Инициализация с неявной типизацией
const settings = new FigmaStorage('plugin-settings')

// 2. Использование дженериков для строгой типизации
interface MyData { theme: string; version: number }
const typedSettings = new FigmaStorage<MyData>('app-data')

// 3. Инициализация с кэшированием на 1 час
const cacheSettings = new FigmaStorage('cache', figma.root, 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Получает данные из хранилища с поддержкой значений по умолчанию и проверки кэша.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue: T | (() => T)`}),` — (Опционально) Значение, которое возвращается (и сохраняется), если хранилище пустое или срок действия данных истек.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const val = settings.get('default_val')
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Обновляет данные как в кэше в памяти, так и в `,(0,c.jsx)(n.code,{children:`PluginData`}),` узла Figma.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | (() => T)`}),` — (Опционально) Новое значение или функция, возвращающая новое значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.set({ theme: 'dark' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Очищает данные как из кэша в памяти, так и из `,(0,c.jsx)(n.code,{children:`PluginData`}),` узла Figma.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.remove()
`})}),`
`,(0,c.jsx)(n.h3,{id:`getname`,children:(0,c.jsx)(n.code,{children:`getName`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает имя ключа, используемое этим экземпляром хранилища.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`console.log(settings.getName())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};